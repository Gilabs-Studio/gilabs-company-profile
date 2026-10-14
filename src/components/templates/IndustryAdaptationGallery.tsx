"use client";

import React, { useState } from 'react';
import type { IndustryAdaptation } from '../../data/templatesData';
import { ArrowRight } from 'lucide-react';

interface IndustryAdaptationGalleryProps {
  adaptations: IndustryAdaptation[];
  lang: 'id' | 'en';
  orderUrl: string;
}

export default function IndustryAdaptationGallery({
  adaptations,
  lang = 'id',
  orderUrl,
}: IndustryAdaptationGalleryProps) {
  const [activeId, setActiveId] = useState<string>(adaptations[0]?.id || 'cafe');
  const activeItem = adaptations.find((item) => item.id === activeId) || adaptations[0];

  if (!adaptations || adaptations.length === 0) return null;

  return (
    <div className="w-full space-y-8">
      {/* Editorial Minimalist Tabs (Underline indicator, zero clutter) */}
      <div className="flex flex-wrap items-center gap-6 sm:gap-10 border-b border-border/60 pb-3">
        {adaptations.map((item) => {
          const isActive = item.id === activeId;
          return (
            <button
              key={item.id}
              onClick={() => setActiveId(item.id)}
              className={`text-sm sm:text-base transition-colors relative pb-3 -mb-3 cursor-pointer ${
                isActive
                  ? 'text-foreground font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-foreground'
                  : 'text-muted-foreground hover:text-foreground font-light'
              }`}
            >
              {item.industry[lang]}
            </button>
          );
        })}
      </div>

      {/* 1 Window Style Showcase */}
      {activeItem && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Visual Image - Prominent & Crisp */}
          <div className="lg:col-span-8">
            <div className="rounded-xl overflow-hidden border border-border/70 bg-card shadow-xs">
              <img
                src={activeItem.image}
                alt={activeItem.title[lang]}
                className="w-full h-auto object-cover max-h-[580px]"
                loading="lazy"
              />
            </div>
          </div>

          {/* Description & Action */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {activeItem.industry[lang]}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                {activeItem.title[lang]}
              </h3>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
              {activeItem.description[lang]}
            </p>

            <div className="space-y-2 pt-2 border-t border-border/40">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground block">
                {lang === 'id' ? 'Elemen yang Disesuaikan:' : 'Customized Elements:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {activeItem.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-foreground/90 font-light border-b border-border/80 pb-0.5"
                  >
                    • {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <a
                href={orderUrl}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background text-xs sm:text-sm font-semibold hover:opacity-90 transition-opacity cursor-pointer"
              >
                <span>
                  {lang === 'id'
                    ? `Pesan untuk ${activeItem.industry.id}`
                    : `Order for ${activeItem.industry.en}`}
                </span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
