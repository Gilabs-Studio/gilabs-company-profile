'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';

// Responsive dimensions
const getDimensions = (isMobile: boolean) => ({
  columnWidth: isMobile ? 160 : 500,
  imageHeight: isMobile ? 100 : 312,
  gap: isMobile ? 12 : 20,
  columns: isMobile ? 2 : 4,
  containerHeight: isMobile ? '100vh' : '175vh',
});

interface ParallaxGalleryProps {
  images: string[];
  lang?: string;
}

const ParallaxGallery = ({ images, lang = 'en' }: ParallaxGalleryProps) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  // Sequential loading queue state: start with top 2 images allowed to load high-res
  const [activeLoadIndex, setActiveLoadIndex] = useState<number>(1);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const dimensions = getDimensions(isMobile);
  
  // Adjust parallax speeds
  const y = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.3 : 0.5)]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.6 : 1.0)]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.25 : 0.4)]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.45 : 0.8)]);

  // Scale transform:
  const scale = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? [1.05, 1] : [1.15, 1]
  );

  // Advance queue when high-res image finishes loading
  const handleHighResLoaded = useCallback((loadedIndex: number) => {
    setActiveLoadIndex(prev => Math.max(prev, loadedIndex + 1));
  }, []);

  // Safety fallback: advance activeLoadIndex every 300ms so queue never blocks on slow requests
  useEffect(() => {
    const totalImages = images.filter(img => img && img.trim() !== '').length;
    if (activeLoadIndex >= totalImages - 1) return;

    const timer = setTimeout(() => {
      setActiveLoadIndex(prev => prev + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeLoadIndex, images]);

  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

    // Expose Lenis instance to window for drawer to access
    (globalThis as any).lenis = lenis;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setDimension({ width, height });
      setIsMobile(width < 768); // Mobile breakpoint at 768px
    };

    // Check if drawer is open and prevent Lenis from handling wheel events
    const checkDrawerAndHandleWheel = (e: WheelEvent) => {
      const drawer = document.querySelector('[data-vaul-drawer][data-state="open"]');
      const target = e.target as HTMLElement;
      
      if (drawer && (drawer.contains(target) || target.closest('[data-vaul-drawer]'))) {
        e.stopPropagation();
      }
    };

    window.addEventListener('wheel', checkDrawerAndHandleWheel, { capture: true, passive: false });
    window.addEventListener('resize', resize);
    rafId = requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('wheel', checkDrawerAndHandleWheel, { capture: true } as any);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if ((globalThis as any).lenis === lenis) {
        delete (globalThis as any).lenis;
      }
    };
  }, []);

  // Filter out empty or invalid images - memoized
  const validImages = useMemo(
    () => images.filter(img => img && img.trim() !== ''),
    [images]
  );
  
  // Distribute images evenly across columns WITH flatIndex tracking
  const columnData = useMemo(() => {
    const numColumns = isMobile ? 2 : 4;
    const columns: Array<Array<{ src: string; flatIndex: number }>> = Array.from(
      { length: numColumns },
      () => []
    );
    
    validImages.forEach((src, index) => {
      columns[index % numColumns].push({ src, flatIndex: index });
    });
    
    return columns;
  }, [validImages, isMobile]);

  const buttonText = lang === 'id' ? 'Lihat Semua Proyek' : 'View All Projects';
  const workResultsUrl = lang === 'id' ? '/id/work-results' : '/en/work-results';

  const yTransforms = [y, y2, y3, y4];

  return (
    <div className="relative w-full bg-background text-foreground overflow-visible">
      {/* Parallax Gallery Content */}
      <motion.div
        ref={gallery}
        className="relative box-border flex overflow-hidden bg-background z-10 w-full justify-center"
        style={{ 
          scale, 
          gap: dimensions.gap, 
          padding: dimensions.gap,
          height: dimensions.containerHeight,
          willChange: 'transform',
        }}
      >
        {columnData.map((items, colIndex) => (
          <Column 
            key={colIndex}
            items={items} 
            y={yTransforms[colIndex]} 
            dimensions={dimensions}
            columnIndex={colIndex}
            activeLoadIndex={activeLoadIndex}
            onLoaded={handleHighResLoaded}
          />
        ))}
      </motion.div>

      {/* Background gradient overlay for depth effect */}
      <div className="absolute inset-0 z-16 pointer-events-none bg-gradient-to-b from-background/30 via-transparent to-background/30" />

      {/* Centered View All Projects Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.a
          href={workResultsUrl}
          className="pointer-events-auto inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-brand rounded-full shadow-2xl shadow-brand/30 hover:bg-brand/90 hover:shadow-brand/50 hover:scale-105 backdrop-blur-sm border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
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
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          {buttonText}
        </motion.a>
      </div>
    </div>
  );
};

type ColumnProps = {
  items: Array<{ src: string; flatIndex: number }>;
  y: MotionValue<number>;
  dimensions: ReturnType<typeof getDimensions>;
  columnIndex: number;
  activeLoadIndex: number;
  onLoaded: (index: number) => void;
};

// Image component with instant micro-thumbnail preview & sequential high-res loading queue
const BlurImage = memo(({ 
  src, 
  flatIndex,
  shouldLoadHighRes,
  dimensions,
  onLoaded
}: { 
  src: string; 
  flatIndex: number;
  shouldLoadHighRes: boolean;
  dimensions: ReturnType<typeof getDimensions>;
  onLoaded: (index: number) => void;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const thumbSrc = useMemo(() => src.replace('/image/', '/image/thumb/'), [src]);

  const handleLoadSuccess = useCallback(() => {
    setIsLoaded(true);
    onLoaded(flatIndex);
  }, [flatIndex, onLoaded]);

  useEffect(() => {
    // Instant check if high-res image is already cached or completed
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      handleLoadSuccess();
    }
  }, [handleLoadSuccess]);

  return (
    <div 
      className="relative overflow-hidden rounded-lg shrink-0 bg-muted/60 border border-white/5 shadow-inner"
      style={{ 
        width: dimensions.columnWidth,
        height: dimensions.imageHeight,
      }}
    >
      {/* 1. Ultra low-res micro WebP thumbnail (~300B) rendered INSTANTLY with blur filter */}
      <img
        src={encodeURI(thumbSrc)}
        alt=""
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover filter blur-md scale-110 transition-opacity duration-500 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* 2. Full high-resolution image layer (only fetched when queued by shouldLoadHighRes) */}
      {(shouldLoadHighRes || isLoaded) && (
        <img
          ref={imgRef}
          loading="eager"
          decoding="async"
          src={encodeURI(src)}
          alt=""
          onLoad={handleLoadSuccess}
          className={`relative z-10 w-full h-full object-cover transition-opacity duration-500 ease-out ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
});

BlurImage.displayName = 'BlurImage';

// Column offsets for visual variety - creates staggered effect
const COLUMN_OFFSETS = ['-5%', '-15%', '0%', '-8%'];

const Column = memo(({ items, y, dimensions, columnIndex, activeLoadIndex, onLoaded }: ColumnProps) => {
  return (
    <motion.div
      className="relative flex flex-col"
      style={{ 
        y,
        top: COLUMN_OFFSETS[columnIndex] ?? '0%',
        width: dimensions.columnWidth,
        minWidth: dimensions.columnWidth,
        maxWidth: dimensions.columnWidth,
        gap: dimensions.gap,
        willChange: 'transform',
      }}
    >
      {items.map(({ src, flatIndex }) => (
        <BlurImage 
          key={src}
          src={src}
          flatIndex={flatIndex}
          shouldLoadHighRes={flatIndex <= activeLoadIndex}
          dimensions={dimensions}
          onLoaded={onLoaded}
        />
      ))}
    </motion.div>
  );
});

Column.displayName = 'Column';

export default ParallaxGallery;
