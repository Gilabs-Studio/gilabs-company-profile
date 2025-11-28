'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef, useState } from 'react';
import LightRays from './LightRays';

// Fixed dimensions for desktop gallery images (16:10 aspect ratio for desktop screenshots)
const COLUMN_WIDTH = 500;
const IMAGE_HEIGHT = 312;
const GAP = 20;
const IMAGES_PER_COLUMN = 7; // Number of images per column for smooth looping

interface ParallaxGalleryProps {
  images: string[];
  lang?: string;
}

const ParallaxGallery = ({ images, lang = 'en' }: ParallaxGalleryProps) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  // Scale transform: start from large (1.5) and progressively shrink to normal size (1)
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.5, 1.2, 1]);

  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Filter out empty or invalid images
  const validImages = images.filter(img => img && img.trim() !== '');
  
  // Create looped images for each column - each column gets different starting point
  const createColumnImages = (startIndex: number) => {
    const columnImages: string[] = [];
    for (let i = 0; i < IMAGES_PER_COLUMN; i++) {
      const imageIndex = (startIndex + i) % validImages.length;
      columnImages.push(validImages[imageIndex]);
    }
    return columnImages;
  };

  // Each column starts from different offset for variety
  const column1Images = createColumnImages(0);
  const column2Images = createColumnImages(Math.floor(validImages.length * 0.25));
  const column3Images = createColumnImages(Math.floor(validImages.length * 0.5));
  const column4Images = createColumnImages(Math.floor(validImages.length * 0.75));

  const buttonText = lang === 'id' ? 'Lihat Portfolio' : 'View Portfolio';
  const portfolioUrl = `/${lang}/portfolio`;

  return (
    <div className="relative w-full bg-background text-foreground overflow-visible">
      {/* Parallax Gallery Content */}
      <motion.div
        ref={gallery}
        className="relative box-border flex h-[175vh] overflow-hidden bg-background z-10 w-full justify-center"
        style={{ scale, gap: GAP, padding: GAP }}
      >
        <Column images={column1Images} y={y} />
        <Column images={column2Images} y={y2} />
        <Column images={column3Images} y={y3} />
        <Column images={column4Images} y={y4} />
      </motion.div>

      {/* LightRays Overlay - synced with Layout's LightRays */}
      <div className="absolute inset-0 z-15 pointer-events-none opacity-50">
        <LightRays 
          raysColor="#FBFBFB" 
          raysSpeed={0.5} 
          lightSpread={0.5}
          rayLength={1.5}
          raysOrigin="top-center"
          followMouse={false}
        />
      </div>

      {/* Background gradient overlay for depth effect */}
      <div className="absolute inset-0 z-16 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/30" />

      {/* Centered Portfolio Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.a
          href={portfolioUrl}
          className="pointer-events-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-lg font-bold text-white bg-brand rounded-full shadow-2xl shadow-brand/30 hover:bg-brand/90 hover:shadow-brand/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <rect width="7" height="7" x="3" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="3" rx="1" />
            <rect width="7" height="7" x="14" y="14" rx="1" />
            <rect width="7" height="7" x="3" y="14" rx="1" />
          </svg>
          {buttonText}
        </motion.a>
      </div>
    </div>
  );
};

type ColumnProps = {
  images: string[];
  y: MotionValue<number>;
};

const Column = ({ images, y }: ColumnProps) => {
  // Filter out empty or invalid images
  const validImages = images.filter(img => img && img.trim() !== '');

  return (
    <motion.div
      className="relative flex flex-col first:top-[-45%] nth-2:top-[-95%] nth-3:top-[-45%] nth-4:top-[-75%]"
      style={{ 
        y,
        width: COLUMN_WIDTH,
        minWidth: COLUMN_WIDTH,
        maxWidth: COLUMN_WIDTH,
        gap: GAP,
      }}
    >
      {validImages.map((src, index) => (
        <div 
          key={`${src}-${index}`} 
          className="relative overflow-hidden rounded-lg shrink-0"
          style={{ 
            width: COLUMN_WIDTH,
            height: IMAGE_HEIGHT,
          }}
        >
          <img
            src={src}
            alt=""
            className="pointer-events-none object-cover"
            style={{ 
              width: COLUMN_WIDTH,
              height: IMAGE_HEIGHT,
            }}
            loading={index < 3 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;

