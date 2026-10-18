"use client";

import React, { useState, useMemo } from 'react';
import type { TemplateItem, TierInfo } from '../../data/templatesData';
import { tiersData, templatesPageContent } from '../../data/templatesData';
import { getWhatsAppLink } from '../../lib/utils';
import { ExternalLink, ArrowRight, MessageCircle, Monitor, ArrowUpRight } from 'lucide-react';

interface TemplatesCatalogProps {
  templates: TemplateItem[];
  lang: 'id' | 'en';
}

interface TemplateLivePreviewProps {
  demoUrl: string;
  title: string;
}

function TemplateLivePreview({ demoUrl, title }: TemplateLivePreviewProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.28);
  const [isLoaded, setIsLoaded] = useState(false);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.clientWidth;
        if (width > 0) {
          setScale(width / 1280);
        }
      }
    };
    updateScale();
    const observer = new ResizeObserver(updateScale);
    observer.observe(containerRef.current);
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full relative overflow-hidden bg-muted/30 select-none pointer-events-none"
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-secondary/50 animate-pulse flex items-center justify-center">
          <span className="text-[11px] text-muted-foreground font-mono">Loading Preview...</span>
        </div>
      )}
      <iframe
        src={demoUrl}
        title={title}
        tabIndex={-1}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className="border-0 absolute top-0 left-0 origin-top-left pointer-events-none transition-opacity duration-300"
        style={{
          width: '1280px',
          height: '800px',
          transform: `scale(${scale})`,
          opacity: isLoaded ? 1 : 0,
        }}
      />
    </div>
  );
}

interface TemplateCardPreviewProps {
  src: string;
  alt: string;
}

function TemplateCardPreview({ src, alt }: TemplateCardPreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const thumbSrc = useMemo(() => src.replace(/\/([^\/]+)$/, '/thumb/$1'), [src]);

  // Independent lazy loading: Start fetching high-res image as soon as card is near viewport (250px margin)
  React.useEffect(() => {
    if (!containerRef.current) return;
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Instant display if high-res image is already completed or cached
  React.useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [isInView, src]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-muted/20">
      {/* 1. Instant micro-thumbnail (~300B) rendered immediately with blur filter */}
      <img
        src={encodeURI(thumbSrc)}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover filter blur-md scale-105 transition-opacity duration-300 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* 2. High-res WebP image: Loads in parallel, displays immediately when ready without waiting for other images */}
      {isInView && (
        <img
          ref={imgRef}
          src={encodeURI(src)}
          alt={alt}
          width={640}
          height={400}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`relative z-10 w-full h-full object-cover transition-all duration-300 group-hover:blur-[3px] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}

interface TierInfoCardProps {
  tier: TierInfo;
  lang: 'id' | 'en';
}

function TierInfoCard({ tier, lang }: TierInfoCardProps) {
  const title = lang === 'en' ? tier.titleEn : tier.title;
  const whatsappUrl = getWhatsAppLink('template', lang, title);

  // Classy, modern, clean minimalist tier accents (no tacky pill badges, no dots)
  const tierAccent = {
    1: {
      tag: '01 / STATIC',
      tagColor: 'text-cyan-600 dark:text-cyan-400',
      hairline: 'from-cyan-500/0 via-cyan-500/80 to-cyan-500/0',
      glow: 'bg-cyan-500/5',
    },
    2: {
      tag: '02 / MOTION',
      tagColor: 'text-purple-600 dark:text-purple-400',
      hairline: 'from-purple-500/0 via-purple-500/80 to-purple-500/0',
      glow: 'bg-purple-500/5',
    },
    3: {
      tag: '03 / IMMERSIVE',
      tagColor: 'text-rose-600 dark:text-rose-400',
      hairline: 'from-rose-500/0 via-rose-500/80 to-rose-500/0',
      glow: 'bg-rose-500/5',
    },
    4: {
      tag: '04 / CUSTOM',
      tagColor: 'text-indigo-600 dark:text-indigo-400',
      hairline: 'from-indigo-500/0 via-indigo-500/80 to-indigo-500/0',
      glow: 'bg-indigo-500/5',
    }
  }[tier.tierNumber] || {
    tag: `0${tier.tierNumber}`,
    tagColor: 'text-muted-foreground',
    hairline: 'from-transparent via-border to-transparent',
    glow: '',
  };

  return (
    <div className="relative overflow-hidden bg-card border border-border/70 rounded-xl p-5 sm:p-6 flex flex-col justify-between hover:border-foreground/30 transition-all duration-300 shadow-xs h-full">
      {/* Precision Hairline Top Accent Line */}
      <div className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${tierAccent.hairline}`} aria-hidden="true" />
      {/* Ambient Atmospheric Glow */}
      <div className={`absolute top-0 inset-x-4 h-12 ${tierAccent.glow} blur-xl pointer-events-none`} aria-hidden="true" />

      <div className="relative z-10">
        {/* Tier Header: Clean Minimalist, Pure Typography */}
        <div className="flex items-baseline justify-between pb-3.5 border-b border-border/50">
          <div>
            <span className={`text-[11px] font-mono tracking-widest uppercase font-semibold ${tierAccent.tagColor}`}>
              {tierAccent.tag}
            </span>
            <h3 className="typography-card-title text-foreground mt-1">
              {title}
            </h3>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={lang === 'id' ? `Konsultasi ${title}` : `Consult about ${title}`}
            className="text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors cursor-pointer"
          >
            <span>{lang === 'id' ? 'Tanya' : 'Ask'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tagline & SEO Copywriting */}
        <p className="typography-body text-foreground/90 font-medium mt-3 leading-snug">
          {tier.tagline[lang]}
        </p>
        <p className="typography-small text-muted-foreground mt-1.5 leading-relaxed">
          {tier.description[lang]}
        </p>

        {/* Measurable Differentiators (No Performance) */}
        <div className="mt-4 pt-3.5 border-t border-border/50 space-y-2.5 typography-small font-light">
          <div className="flex items-start justify-between gap-2">
            <span className="text-muted-foreground flex-shrink-0">
              {lang === 'id' ? 'Halaman' : 'Pages'}
            </span>
            <span className="text-foreground text-right font-medium">
              {tier.specs.pages[lang]}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-muted-foreground flex-shrink-0">
              {lang === 'id' ? 'Animasi' : 'Animation'}
            </span>
            <span className="text-foreground text-right font-medium">
              {tier.specs.animation[lang]}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-muted-foreground flex-shrink-0">
              {lang === 'id' ? 'Aset' : 'Assets'}
            </span>
            <span className="text-foreground text-right font-medium">
              {tier.specs.assets[lang]}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-muted-foreground flex-shrink-0">
              {lang === 'id' ? 'Ekstra' : 'Extras'}
            </span>
            <span className="text-foreground text-right font-medium">
              {tier.specs.extras[lang]}
            </span>
          </div>

          <div className="flex items-start justify-between gap-2">
            <span className="text-muted-foreground flex-shrink-0">
              {lang === 'id' ? 'Revisi' : 'Revisions'}
            </span>
            <span className="text-foreground text-right font-medium">
              {tier.specs.revisions[lang]}
            </span>
          </div>
        </div>
      </div>

      {/* Psychological Single Focal Pricing Box with Discount Anchor */}
      <div className="mt-5 pt-3.5 border-t border-border/60 bg-secondary/35 rounded-lg p-3.5 relative z-10">
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-2">
            {tier.pricing.originalPrice && (
              <span className="text-xs sm:text-sm text-muted-foreground/60 line-through font-mono">
                {tier.pricing.originalPrice}
              </span>
            )}
            {tier.pricing.discountLabel && (
              <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                {tier.pricing.discountLabel[lang]}
              </span>
            )}
          </div>
        </div>

        <div className="typography-card-title text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
          {tier.pricing.price}
        </div>

        <div className="mt-2.5 pt-2 border-t border-border/40 text-[11px] text-muted-foreground font-light flex items-center justify-between">
          <span>{tier.pricing.note[lang]}</span>
          <span className="text-[10px] font-mono text-emerald-600/90 dark:text-emerald-400 font-medium">
            {lang === 'id' ? 'Siap Pakai' : 'Turnkey'}
          </span>
        </div>
      </div>
    </div>
  );
}

interface TemplateCardProps {
  template: TemplateItem;
  lang: 'id' | 'en';
}

function TemplateCard({ template, lang }: TemplateCardProps) {
  const t = templatesPageContent[lang];
  const detailUrl = lang === 'en'
    ? `/en/templates/${template.slug}`
    : `/templates/${template.slug}`;
  const orderUrl = lang === 'en' 
    ? `/en/templates/order?template=${template.id}` 
    : `/templates/order?template=${template.id}`;
  const title = lang === 'en' && template.titleEn ? template.titleEn : template.title;

  const imageAlt = lang === 'en'
    ? `${title} - Ready-to-Use Business Website Template Gilabs`
    : `${title} - Template Website Bisnis Siap Pakai Gilabs`;

  return (
    <div className="bg-card border border-border/70 rounded-lg overflow-hidden flex flex-col transition-all duration-200 hover:border-foreground/40 hover:shadow-xs">
      {/* Live Preview Thumbnail */}
      <a
        href={template.demoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="aspect-[16/10] bg-muted/20 relative overflow-hidden block group cursor-pointer border-b border-border/50"
        aria-label={`${lang === 'id' ? 'Buka Live Preview' : 'Open Live Preview'}: ${title}`}
        title={`${lang === 'id' ? 'Buka Live Preview' : 'Open Live Preview'}: ${title}`}
      >
        {template.previewImage ? (
          <TemplateCardPreview src={template.previewImage} alt={imageAlt} />
        ) : (
          <div className="w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:blur-[3px]">
            <TemplateLivePreview demoUrl={template.demoUrl} title={title} />
          </div>
        )}
        <div className="absolute inset-0 z-20 bg-black/25 dark:bg-black/40 backdrop-blur-[1px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <span className="bg-background text-foreground text-xs font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
            <span>{lang === 'id' ? 'Live Preview' : 'Live Preview'}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </span>
        </div>
      </a>

      {/* Card Content without pricing */}
      <div className="p-4 sm:p-4.5 flex-1 flex flex-col justify-between">
        <div>
          <h4 className="typography-body-large font-semibold text-foreground tracking-tight leading-snug">
            <a
              href={detailUrl}
              className="hover:text-brand transition-colors cursor-pointer inline-flex items-center gap-1.5"
              title={`${t.card.viewDetail} - ${title}`}
            >
              <span>{title}</span>
              <ArrowRight className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
            </a>
          </h4>
          <p className="typography-small text-muted-foreground mt-1.5 line-clamp-2 leading-relaxed">
            {template.description[lang]}
          </p>
        </div>

        {/* Action Buttons: Detail + Order / Select as Reference */}
        <div className="mt-4 pt-3 border-t border-border/50 grid grid-cols-2 gap-2">
          <a
            href={detailUrl}
            aria-label={`${t.card.viewDetail} ${title}`}
            title={`${t.card.viewDetail} ${title}`}
            className="typography-small font-medium py-2 px-2 rounded-lg border border-border/80 hover:bg-secondary text-foreground text-center cursor-pointer transition-colors inline-flex items-center justify-center gap-1.5"
          >
            <span>{t.card.viewDetail}</span>
            <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
          </a>

          <a
            href={orderUrl}
            aria-label={`${t.card.buyNow} ${title}`}
            title={`${t.card.buyNow} ${title}`}
            className="typography-small font-semibold py-2 px-2 rounded-lg bg-foreground text-background hover:opacity-90 text-center cursor-pointer transition-opacity inline-flex items-center justify-center"
          >
            {t.card.buyNow}
          </a>
        </div>
      </div>
    </div>
  );
}

interface TierCustomWideCardProps {
  tier: TierInfo;
  lang: 'id' | 'en';
}

function TierCustomWideCard({ tier, lang }: TierCustomWideCardProps) {
  const title = lang === 'en' ? tier.titleEn : tier.title;
  const whatsappUrl = getWhatsAppLink('template', lang, title);

  return (
    <div className="mt-8 relative p-[1.5px] rounded-2xl bg-[linear-gradient(90deg,#6366f1,#8b5cf6,#ec4899,#f43f5e,#f59e0b,#10b981,#06b6d4,#6366f1)] bg-[length:300%_300%] animate-[gradient-shift_8s_ease_infinite] shadow-lg shadow-purple-500/5">
      <div className="bg-card rounded-[calc(var(--radius)+8px)] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-purple-500/10 via-rose-500/5 to-transparent rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

        <div className="relative z-10 space-y-6">
          {/* Header Bar: Classy Minimalist, No Alay Badges or Dots */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-border/50">
            <span className="text-[11px] font-mono font-semibold tracking-widest uppercase bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              04 / CUSTOM DEVELOPMENT
            </span>
            <span className="typography-small font-mono text-muted-foreground">
              {lang === 'id' ? 'Arsitektur Kustom dari Nol' : 'Bespoke Architecture from Scratch'}
            </span>
          </div>

          {/* 2-Column Grid Layout: Custom Info on Left, Live Project Showcase on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Left Column: Custom Development Architecture & Consultation */}
            <div className="flex flex-col justify-between space-y-6">
              <div className="space-y-6">
                {/* Hook Headline & Copywriting */}
                <div className="space-y-2">
                  <h3 className="typography-section-title text-foreground tracking-tight leading-tight">
                    {tier.hookHeadline ? tier.hookHeadline[lang] : title}
                  </h3>
                  <p className="typography-subtitle text-foreground/90 font-light leading-relaxed">
                    {tier.tagline[lang]}
                  </p>
                  <p className="typography-body text-muted-foreground leading-relaxed pt-1">
                    {tier.description[lang]}
                  </p>
                </div>

                {/* 4 Pillars of Custom Development (2x2 Grid) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div className="bg-secondary/25 border border-border/40 rounded-lg p-3.5 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {lang === 'id' ? '01. Desain UI/UX' : '01. UI/UX Design'}
                    </div>
                    <div className="typography-body font-medium text-foreground text-sm">
                      {tier.specs.animation[lang]}
                    </div>
                  </div>

                  <div className="bg-secondary/25 border border-border/40 rounded-lg p-3.5 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {lang === 'id' ? '02. CMS & Integrasi' : '02. CMS & Integration'}
                    </div>
                    <div className="typography-body font-medium text-foreground text-sm">
                      {tier.specs.extras[lang]}
                    </div>
                  </div>

                  <div className="bg-secondary/25 border border-border/40 rounded-lg p-3.5 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {lang === 'id' ? '03. Skalabilitas' : '03. Scalability'}
                    </div>
                    <div className="typography-body font-medium text-foreground text-sm">
                      {tier.specs.pages[lang]}
                    </div>
                  </div>

                  <div className="bg-secondary/25 border border-border/40 rounded-lg p-3.5 space-y-1">
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                      {lang === 'id' ? '04. Alur Kerja' : '04. Workflow'}
                    </div>
                    <div className="typography-body font-medium text-foreground text-sm">
                      {tier.specs.revisions[lang]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar: Full Pricing & WhatsApp CTA */}
              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-secondary/30 rounded-xl p-4 sm:p-5 mt-auto">
                <div>
                  {(tier.pricing.originalPrice || tier.pricing.discountLabel) && (
                    <div className="flex items-center gap-2 mb-1">
                      {tier.pricing.originalPrice && (
                        <span className="text-xs sm:text-sm text-muted-foreground/60 line-through font-mono">
                          {tier.pricing.originalPrice}
                        </span>
                      )}
                      {tier.pricing.discountLabel && (
                        <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                          {tier.pricing.discountLabel[lang]}
                        </span>
                      )}
                    </div>
                  )}
                  <div className="typography-section-title text-2xl sm:text-3xl font-bold text-foreground">
                    {tier.pricing.price}
                  </div>
                  <div className="typography-small text-muted-foreground mt-0.5">
                    • {tier.pricing.note[lang]}
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 typography-small font-semibold px-5 py-3 rounded-lg bg-foreground text-background hover:opacity-90 transition-all duration-300 cursor-pointer whitespace-nowrap shadow-sm hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>{tier.ctaText ? tier.ctaText[lang] : (lang === 'id' ? 'Konsultasi Custom via WhatsApp' : 'Discuss Custom via WhatsApp')}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Standalone Live Showcase Example (Adhara Eka) */}
            <div className="flex flex-col h-full bg-secondary/20 border border-border/70 hover:border-foreground/30 rounded-xl overflow-hidden transition-all duration-300 shadow-xs hover:shadow-md group">
              {/* Minimalist Browser Bar Header */}
              <div className="px-4 py-2.5 border-b border-border/50 bg-secondary/35 flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-border"></span>
                  <span className="text-[11px] font-mono text-muted-foreground ml-2">adharaeka.vercel.app</span>
                </div>
                <span className="text-[10px] font-mono font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20">
                  {lang === 'id' ? 'Live Showcase' : 'Live Showcase'}
                </span>
              </div>

              {/* Showcase Image with Live Preview Hover */}
              <a
                href="https://adharaeka.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-[16/10] bg-muted/20 relative overflow-hidden block cursor-pointer border-b border-border/50"
                aria-label={lang === 'id' ? 'Buka Live Preview Website Adhara Eka' : 'Open Adhara Eka Live Website'}
                title={lang === 'id' ? 'Buka Live Preview Website Adhara Eka' : 'Open Adhara Eka Live Website'}
              >
                <TemplateCardPreview
                  src="/templates/tier4/preview.webp"
                  alt="Adhara Eka - Custom Digital Experience & Personal Portfolio"
                />
                <div className="absolute inset-0 z-20 bg-black/30 dark:bg-black/50 backdrop-blur-[1px] transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-background text-foreground text-xs font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
                    <span>{lang === 'id' ? 'Buka Live Preview' : 'Open Live Preview'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </a>

              {/* Showcase Details & Note */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="typography-body-large font-bold text-foreground tracking-tight">
                      <a
                        href="https://adharaeka.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>Adhara Eka</span>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                      </a>
                    </h4>
                    <span className="text-[11px] font-mono text-muted-foreground">
                      {lang === 'id' ? 'Personal Portfolio' : 'Personal Portfolio'}
                    </span>
                  </div>

                  <p className="typography-small text-muted-foreground leading-relaxed">
                    {lang === 'id'
                      ? 'Website personal portfolio interaktif berstandar tinggi dengan arsitektur visual modern, custom motion, dan transisi dinamis.'
                      : 'Interactive high-end bespoke portfolio website featuring custom visual architecture, smooth motion, and dynamic transitions.'}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  {/* Desktop Experience Recommendation Note */}
                  <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-secondary/50 border border-border/60 text-muted-foreground text-xs leading-relaxed">
                    <Monitor className="w-4 h-4 text-foreground/80 flex-shrink-0" />
                    <span>
                      {lang === 'id'
                        ? 'Catatan: Untuk visual & experience interaktif terbaik, disarankan dibuka melalui desktop.'
                        : 'Note: For the best visual experience and interactive animations, desktop view is recommended.'}
                    </span>
                  </div>

                  {/* Direct Link Button */}
                  <a
                    href="https://adharaeka.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 typography-small font-semibold py-2.5 px-4 rounded-lg bg-foreground text-background hover:opacity-90 transition-all duration-300 cursor-pointer shadow-sm hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>{lang === 'id' ? 'Kunjungi Live Website' : 'Explore Live Website'}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TemplatesCatalog({ templates, lang = 'id' }: TemplatesCatalogProps) {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const t = templatesPageContent[lang];

  // Retrieve tiers
  const tier1 = tiersData.find(t => t.tierNumber === 1)!;
  const tier2 = tiersData.find(t => t.tierNumber === 2)!;
  const tier3 = tiersData.find(t => t.tierNumber === 3)!;
  const tier4 = tiersData.find(t => t.tierNumber === 4)!;

  // Filter templates per tier based on search query
  const query = searchQuery.toLowerCase().trim();

  const filterFn = (item: TemplateItem) => {
    if (item.hidden) return false;
    if (!query) return true;
    const titleMatch = item.title.toLowerCase().includes(query) || (item.titleEn?.toLowerCase().includes(query) ?? false);
    const descMatch = item.description[lang].toLowerCase().includes(query);
    const categoryMatch = item.categoryLabel[lang].toLowerCase().includes(query);
    return titleMatch || descMatch || categoryMatch;
  };

  const tier1Templates = useMemo(() => {
    return templates.filter((item) => !item.hidden && item.tier === 1 && filterFn(item));
  }, [templates, query, lang]);

  const tier2Templates = useMemo(() => {
    return templates.filter((item) => !item.hidden && item.tier === 2 && filterFn(item));
  }, [templates, query, lang]);

  const tier3Templates = useMemo(() => {
    return templates.filter((item) => !item.hidden && item.tier === 3 && filterFn(item));
  }, [templates, query, lang]);

  const totalFilteredCount = tier1Templates.length + tier2Templates.length + tier3Templates.length;

  return (
    <div className="w-full">

      {/* Main 3-Column Tier Grid (Tier 1, Tier 2, Tier 3) as per sketch */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Column 1: Tier 1 Container Wrapper with Subtle Cyan Border */}
        <div className="bg-secondary/10 border border-cyan-500/25 hover:border-cyan-500/45 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-4 transition-all duration-300 shadow-xs hover:shadow-cyan-500/5">
          <TierInfoCard tier={tier1} lang={lang} />
          
          <div className="flex flex-col gap-4">
            {tier1Templates.length > 0 ? (
              tier1Templates.map((template) => (
                <TemplateCard key={template.id} template={template} lang={lang} />
              ))
            ) : (
              <div className="text-center py-6 px-3 border border-dashed border-border/60 rounded-lg text-xs text-muted-foreground">
                {t.emptyStateTitle}
              </div>
            )}
          </div>
        </div>

        {/* Column 2: Tier 2 Container Wrapper with Subtle Purple Border */}
        <div className="bg-secondary/10 border border-purple-500/25 hover:border-purple-500/45 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-4 transition-all duration-300 shadow-xs hover:shadow-purple-500/5">
          <TierInfoCard tier={tier2} lang={lang} />
          
          <div className="flex flex-col gap-4">
            {tier2Templates.length > 0 ? (
              tier2Templates.map((template) => (
                <TemplateCard key={template.id} template={template} lang={lang} />
              ))
            ) : (
              <div className="text-center py-6 px-3 border border-dashed border-border/60 rounded-lg text-xs text-muted-foreground">
                {t.emptyStateTitle}
              </div>
            )}
          </div>
        </div>

        {/* Column 3: Tier 3 Container Wrapper with Subtle Rose Border */}
        <div className="bg-secondary/10 border border-rose-500/25 hover:border-rose-500/45 rounded-2xl p-3.5 sm:p-4 flex flex-col gap-4 transition-all duration-300 shadow-xs hover:shadow-rose-500/5">
          <TierInfoCard tier={tier3} lang={lang} />
          
          <div className="flex flex-col gap-4">
            {tier3Templates.length > 0 ? (
              tier3Templates.map((template) => (
                <TemplateCard key={template.id} template={template} lang={lang} />
              ))
            ) : (
              <div className="text-center py-6 px-3 border border-dashed border-border/60 rounded-lg text-xs text-muted-foreground">
                {t.emptyStateTitle}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tier 4 Custom Development: 1-Column Wide Container Below Grid 3 with Rainbow Border Effect */}
      <TierCustomWideCard tier={tier4} lang={lang} />
    </div>
  );
}

