import fs from 'fs';
import path from 'path';
import os from 'os';
import { execSync } from 'child_process';
import { createRequire } from 'module';

const ROOT_DIR = process.cwd();
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const require = createRequire(import.meta.url);
const sharpPath = path.join(ROOT_DIR, 'node_modules/.pnpm/sharp@0.34.5/node_modules/sharp');
const sharp = require(sharpPath);

// Concurrency helper
async function pMap(items, fn, concurrency = 4) {
  let index = 0;
  const results = [];
  async function worker() {
    while (index < items.length) {
      const i = index++;
      results[i] = await fn(items[i], i);
    }
  }
  const workers = Array.from({ length: Math.min(concurrency, items.length) }, () => worker());
  await Promise.all(workers);
  return results;
}

// Recursively find all files in directory
function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results = results.concat(walkDir(fullPath));
    } else {
      results.push(fullPath);
    }
  }
  return results;
}

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function optimizeVideo() {
  console.log('\n--- 1. Optimizing Video Assets ---');
  const mp4Path = path.join(PUBLIC_DIR, 'templates/gke/company/hero.mp4');
  const webmPath = path.join(PUBLIC_DIR, 'templates/gke/company/hero.webm');

  if (!fs.existsSync(mp4Path)) {
    console.log('Video hero.mp4 not found, skipping video optimization.');
    return;
  }

  const origSize = fs.statSync(mp4Path).size;
  const tmpMp4 = path.join(os.tmpdir(), `hero_opt_${Date.now()}.mp4`);
  const tmpWebm = path.join(os.tmpdir(), `hero_opt_${Date.now()}.webm`);

  console.log(`Original hero.mp4: ${formatSize(origSize)}`);

  try {
    // 1. Optimize MP4: H.264 CRF 24, slow preset, yuv420p, strip unneeded audio, +faststart
    execSync(
      `ffmpeg -y -i "${mp4Path}" -an -c:v libx264 -crf 24 -preset slow -pix_fmt yuv420p -movflags +faststart "${tmpMp4}"`,
      { stdio: 'ignore' }
    );
    const newMp4Size = fs.statSync(tmpMp4).size;
    if (newMp4Size < origSize) {
      fs.copyFileSync(tmpMp4, mp4Path);
      console.log(`✓ hero.mp4 optimized: ${formatSize(origSize)} -> ${formatSize(newMp4Size)} (-${((origSize - newMp4Size) / origSize * 100).toFixed(1)}%)`);
    } else {
      console.log(`hero.mp4 already optimal.`);
    }
    fs.unlinkSync(tmpMp4);

    // 2. Generate modern WebM (VP9)
    execSync(
      `ffmpeg -y -i "${mp4Path}" -an -c:v libvpx-vp9 -crf 30 -b:v 0 "${tmpWebm}"`,
      { stdio: 'ignore' }
    );
    const webmSize = fs.statSync(tmpWebm).size;
    fs.copyFileSync(tmpWebm, webmPath);
    console.log(`✓ hero.webm generated: ${formatSize(webmSize)}`);
    fs.unlinkSync(tmpWebm);
  } catch (err) {
    console.error('Error optimizing video:', err.message);
  }
}

async function optimizeImages() {
  console.log('\n--- 2. Scanning & Optimizing Image Assets ---');
  const allFiles = walkDir(PUBLIC_DIR);

  const images = allFiles.filter(f => {
    const ext = path.extname(f).toLowerCase();
    return ['.webp', '.png', '.jpg', '.jpeg', '.gif'].includes(ext);
  });

  console.log(`Found ${images.length} images to inspect.`);

  let totalOrigBytes = 0;
  let totalOptimizedBytes = 0;
  let filesModified = 0;

  await pMap(images, async (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    const origSize = fs.statSync(filePath).size;
    totalOrigBytes += origSize;

    const relPath = path.relative(PUBLIC_DIR, filePath);
    const tmpFile = filePath + `.tmp_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    try {
      if (ext === '.gif') {
        // Animated GIF: resize to max 200x200 (sufficient for 80px 3x retina icons)
        await sharp(filePath, { animated: true })
          .resize(200, 200, { fit: 'inside', withoutEnlargement: true })
          .gif({ effort: 10, colours: 128, reoptimise: true })
          .toFile(tmpFile);
      } else if (ext === '.webp') {
        const meta = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);
        const maxDim = 2048;
        if (meta.width > maxDim || meta.height > maxDim) {
          pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true });
        }
        await pipeline.webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(tmpFile);
      } else if (ext === '.png') {
        // Skip small favicons (<2KB)
        if (origSize < 2048) {
          totalOptimizedBytes += origSize;
          return;
        }
        const meta = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);
        const maxDim = 2048;
        if (meta.width > maxDim || meta.height > maxDim) {
          pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true });
        }
        await pipeline.png({ compressionLevel: 9, effort: 10, palette: true, quality: 85 }).toFile(tmpFile);
      } else if (ext === '.jpg' || ext === '.jpeg') {
        const meta = await sharp(filePath).metadata();
        let pipeline = sharp(filePath);
        const maxDim = 2048;
        if (meta.width > maxDim || meta.height > maxDim) {
          pipeline = pipeline.resize(maxDim, maxDim, { fit: 'inside', withoutEnlargement: true });
        }
        await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tmpFile);
      }

      if (fs.existsSync(tmpFile)) {
        const newSize = fs.statSync(tmpFile).size;
        // Only replace if new size is strictly smaller
        if (newSize < origSize) {
          fs.renameSync(tmpFile, filePath);
          totalOptimizedBytes += newSize;
          filesModified++;
          const savedPercent = (((origSize - newSize) / origSize) * 100).toFixed(1);
          console.log(`✓ [${savedPercent}% saved] ${relPath}: ${formatSize(origSize)} -> ${formatSize(newSize)}`);
        } else {
          fs.unlinkSync(tmpFile);
          totalOptimizedBytes += origSize;
        }
      } else {
        totalOptimizedBytes += origSize;
      }
    } catch (err) {
      if (fs.existsSync(tmpFile)) {
        try { fs.unlinkSync(tmpFile); } catch {}
      }
      totalOptimizedBytes += origSize;
      console.warn(`! Skipped ${relPath}: ${err.message}`);
    }
  }, 4); // 4 concurrent workers

  console.log('\n--- Image Optimization Summary ---');
  console.log(`Total images inspected: ${images.length}`);
  console.log(`Files improved: ${filesModified}`);
  console.log(`Original images size: ${formatSize(totalOrigBytes)}`);
  console.log(`Optimized images size: ${formatSize(totalOptimizedBytes)}`);
  const totalSaved = totalOrigBytes - totalOptimizedBytes;
  console.log(`Total space saved: ${formatSize(totalSaved)} (-${((totalSaved / totalOrigBytes) * 100).toFixed(1)}%)`);
}

async function main() {
  const startTime = Date.now();
  console.log('Starting Asset Super-Optimization...');

  await optimizeVideo();
  await optimizeImages();

  const duration = ((Date.now() - startTime) / 1000).toFixed(1);
  console.log(`\n🎉 All optimizations completed in ${duration}s!`);
}

main().catch(err => {
  console.error('Fatal error during optimization:', err);
  process.exit(1);
});
