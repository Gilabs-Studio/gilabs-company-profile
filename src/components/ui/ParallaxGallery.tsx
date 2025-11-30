'use client';

import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import Lenis from 'lenis';
import { useEffect, useRef, useState } from 'react';
import LightRays from './LightRays';
import { getWhatsAppLink } from '../../lib/utils';

// Responsive dimensions
const getDimensions = (isMobile: boolean) => ({
  columnWidth: isMobile ? 160 : 500,
  imageHeight: isMobile ? 100 : 312,
  gap: isMobile ? 12 : 20,
  columns: isMobile ? 2 : 4,
  containerHeight: isMobile ? '100vh' : '175vh',
});

const IMAGES_PER_COLUMN = 7; // Number of images per column for smooth looping

interface ParallaxGalleryProps {
  images: string[];
  lang?: string;
}

const ParallaxGallery = ({ images, lang = 'en' }: ParallaxGalleryProps) => {
  const gallery = useRef<HTMLDivElement>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start'],
  });

  const { height } = dimension;
  const dimensions = getDimensions(isMobile);
  
  // Adjust parallax speeds for mobile (less movement)
  const y = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 1.2 : 2)]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 1.8 : 3.3)]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 0.8 : 1.25)]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * (isMobile ? 1.5 : 3)]);

  // Scale transform: less aggressive on mobile
  const scale = useTransform(
    scrollYProgress, 
    [0, 0.5, 1], 
    isMobile ? [1.1, 1.05, 1] : [1.5, 1.2, 1]
  );

  useEffect(() => {
    const lenis = new Lenis();
    let rafId: number;

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

  const buttonText = lang === 'id' ? 'Hubungi Kami' : 'Contact Us';
  const contactUrl = getWhatsAppLink('gallery', lang as 'en' | 'id');

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
        }}
      >
        <Column images={column1Images} y={y} dimensions={dimensions} />
        <Column images={column2Images} y={y2} dimensions={dimensions} />
        {!isMobile && (
          <>
            <Column images={column3Images} y={y3} dimensions={dimensions} />
            <Column images={column4Images} y={y4} dimensions={dimensions} />
          </>
        )}
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

      {/* Centered Contact Button */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <motion.a
          href={contactUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto inline-flex items-center justify-center gap-2 md:gap-3 px-4 md:px-8 py-3 md:py-4 text-base md:text-lg font-bold text-white bg-brand rounded-full shadow-2xl shadow-brand/30 hover:bg-brand/90 hover:shadow-brand/50 hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/10"
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
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
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
  dimensions: ReturnType<typeof getDimensions>;
};

const Column = ({ images, y, dimensions }: ColumnProps) => {
  // Filter out empty or invalid images
  const validImages = images.filter(img => img && img.trim() !== '');

  return (
    <motion.div
      className="relative flex flex-col first:top-[-45%] nth-2:top-[-95%] nth-3:top-[-45%] nth-4:top-[-75%]"
      style={{ 
        y,
        width: dimensions.columnWidth,
        minWidth: dimensions.columnWidth,
        maxWidth: dimensions.columnWidth,
        gap: dimensions.gap,
      }}
    >
      {validImages.map((src, index) => (
        <div 
          key={`${src}-${index}`} 
          className="relative overflow-hidden rounded-lg shrink-0"
          style={{ 
            width: dimensions.columnWidth,
            height: dimensions.imageHeight,
          }}
        >
          <img
            loading={index < 3 ? "eager" : "lazy"}
            decoding="async"
            src={src}
            alt=""
            className="pointer-events-none object-cover"
            style={{ 
              width: dimensions.columnWidth,
              height: dimensions.imageHeight,
            }}
          />
        </div>
      ))}
    </motion.div>
  );
};

export default ParallaxGallery;

