'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { polinesContentData } from '../data/content';

interface PolinesTextIntroWordRevealProps {
  lang?: 'id' | 'en';
  className?: string;
}

function IntroWordSpan({
  children,
  progress,
  range,
  isHighlight = false,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isHighlight?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [6, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className={`word inline-block transition-colors duration-200 ${
        isHighlight
          ? 'text-[#FF5A1F] font-medium'
          : 'text-white font-normal'
      }`}
    >
      {children}
    </motion.span>
  );
}

export default function PolinesTextIntroWordReveal({
  lang = 'id',
  className = '',
}: PolinesTextIntroWordRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.60'],
  });

  const words = polinesContentData[lang].textIntro.words;

  return (
    <div
      ref={containerRef}
      className={`relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-normal leading-[1.3] tracking-[-0.03em] flex flex-wrap gap-x-[0.28em] gap-y-2 text-left ${className}`}
    >
      {words.map((item, i) => {
        const start = (i / words.length) * 0.92;
        const end = Math.min(1, start + 1.25 / words.length);
        return (
          <IntroWordSpan
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isHighlight={item.isHighlight}
          >
            {item.text}
          </IntroWordSpan>
        );
      })}
    </div>
  );
}
