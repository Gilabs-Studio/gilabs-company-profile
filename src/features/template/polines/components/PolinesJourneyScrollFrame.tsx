'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { polinesContentData, polinesImages } from '../data/content';

interface PolinesJourneyScrollFrameProps {
  lang?: 'id' | 'en';
}

export default function PolinesJourneyScrollFrame({ lang = 'id' }: PolinesJourneyScrollFrameProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.60', 'center 0.7'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.00]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '0%']);

  const t = polinesContentData[lang].journey;

  return (
    <div 
      ref={containerRef} 
      className="w-full relative flex justify-center py-2 sm:py-4"
    >
      {/* Outer animated window that gently shrinks into normal padded frame */}
      <motion.div
        style={{ 
          scale,
          transformOrigin: 'center center',
        }}
        className="relative w-full min-h-[460px] sm:min-h-[500px] md:aspect-[21/9] rounded-none overflow-hidden bg-[#0E0C0A] border border-black/15 shadow-2xl flex flex-col justify-end p-6 sm:p-10 md:p-14 will-change-transform"
      >
        {/* Background Image with Parallax Shift */}
        <motion.div 
          style={{ y: imageY }}
          className="absolute inset-x-0 -top-[20%] h-[140%] w-full pointer-events-none"
        >
          <img
            src={polinesImages.campusAerial}
            alt="Kampus LOREM"
            className="w-full h-full object-cover object-center opacity-40"
            loading="lazy"
          />
        </motion.div>

        {/* Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0C0A] via-[#0E0C0A]/75 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E0C0A]/90 via-[#0E0C0A]/40 to-transparent pointer-events-none" />

        {/* Foreground Content */}
        <div className="relative z-10 max-w-5xl">
          <div className="mb-8 md:mb-10 text-left">
            <span className="inline-block text-xs uppercase tracking-[0.22em] text-[#FF5A1F] font-semibold mb-3">
              {t.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-white tracking-tight leading-tight">
              {t.title}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/75 font-light mt-2 max-w-2xl leading-relaxed">
              {t.desc}
            </p>
          </div>

          {/* 2 Action Cards inside the Shrinking Window */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* Pathway 1: PMB */}
            <a
              href="#unduh-brosur"
              className="group flex flex-col justify-between p-6 sm:p-8 bg-[#17130E]/90 hover:bg-[#221C16] border border-white/15 hover:border-[#FF5A1F]/70 transition-all duration-300 rounded-none cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#FBBF24] font-medium">
                    {t.card1.badge}
                  </span>
                  <span className="text-white/40 group-hover:text-[#FF5A1F] transition-colors">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-normal text-white group-hover:text-[#FF5A1F] transition-colors">
                  {t.card1.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-2 leading-relaxed">
                  {t.card1.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80 font-medium tracking-wider uppercase group-hover:text-white">
                <span>{t.card1.actionText}</span>
                <span>&rarr;</span>
              </div>
            </a>

            {/* Pathway 2: Beasiswa */}
            <a
              href="#unduh-brosur"
              className="group flex flex-col justify-between p-6 sm:p-8 bg-[#17130E]/90 hover:bg-[#221C16] border border-white/15 hover:border-[#FF5A1F]/70 transition-all duration-300 rounded-none cursor-pointer shadow-lg hover:-translate-y-0.5"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] uppercase tracking-wider text-[#FBBF24] font-medium">
                    {t.card2.badge}
                  </span>
                  <span className="text-white/40 group-hover:text-[#FF5A1F] transition-colors">
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-normal text-white group-hover:text-[#FF5A1F] transition-colors">
                  {t.card2.title}
                </h4>
                <p className="text-xs sm:text-sm text-white/70 font-light mt-2 leading-relaxed">
                  {t.card2.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-white/80 font-medium tracking-wider uppercase group-hover:text-white">
                <span>{t.card2.actionText}</span>
                <span>&rarr;</span>
              </div>
            </a>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
