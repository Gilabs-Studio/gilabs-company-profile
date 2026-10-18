import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Search, ShoppingBag, ArrowRight, Instagram, Youtube, X as CloseIcon } from 'lucide-react';

interface NusantaraLandingProps {
  lang?: 'id' | 'en';
}

export default function NusantaraLanding({ lang = 'id' }: NusantaraLandingProps) {
  // 1. Hero Parallax Scroll Transforms (PURE vertical scroll parallax - NO scale zoom)
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });

  const heroTitleY = useTransform(heroScroll, [0, 1], [0, -180]);
  const heroModelY = useTransform(heroScroll, [0, 1], [0, 200]);
  // Captions have a slower parallax scroll effect than the model image
  const heroCaptionY = useTransform(heroScroll, [0, 1], [0, 350]);

  // 2. Featured Collection Window Parallax Effect
  const featuredRef = useRef<HTMLElement>(null);
  const { scrollYProgress: featuredScroll } = useScroll({
    target: featuredRef,
    offset: ['start end', 'end start']
  });
  // Image inside placeholder scrolls with subtle window parallax lag
  const featuredImgY = useTransform(featuredScroll, [0, 1], ['-9%', '9%']);

  // 3. Philosophy Multi-Step Storytelling & Journal Card Stacking
  const philosophyContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: philosophyScroll } = useScroll({
    target: philosophyContainerRef,
    offset: ['start start', 'end end']
  });

  // Story 1: "MORE THAN CLOTHES" visible initially, fades out & drifts up
  const story1Opacity = useTransform(philosophyScroll, [0, 0.22, 0.32], [1, 1, 0]);
  const story1Y = useTransform(philosophyScroll, [0, 0.22, 0.32], [0, 0, -35]);
  const story1PointerEvents = useTransform(philosophyScroll, (v) => (v < 0.33 ? 'auto' : 'none'));

  // Story 2: "CRAFTED WITH PURPOSE" fades in, stays, then smoothly dissolves as Journal stacks
  const story2Opacity = useTransform(philosophyScroll, [0.34, 0.44, 0.54, 0.64], [0, 1, 1, 0]);
  const story2Y = useTransform(philosophyScroll, [0.34, 0.44, 0.54, 0.64], [35, 0, 0, -30]);
  const story2PointerEvents = useTransform(philosophyScroll, (v) => (v >= 0.33 && v < 0.60 ? 'auto' : 'none'));

  // Journal Card: Natural Stacking Entrance (Solid Opacity, Normal Scroll Speed, No Spring Lag)
  const journalY = useTransform(philosophyScroll, [0.55, 0.75], ['100%', '0%']);
  const journalPointerEvents = useTransform(philosophyScroll, (v) => (v >= 0.65 ? 'auto' : 'none'));
  const journalBackdropOpacity = useTransform(philosophyScroll, [0.55, 0.75], [0, 0.45]);

  // UI Interactive States
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Category Collection Cards (Upgraded with high-resolution editorial assets)
  const categories = [
    {
      id: 'outerwear',
      name: 'OUTERWEAR',
      image: '/templates/nusantara/cat-outerwear.webp'
    },
    {
      id: 'tops',
      name: 'TOPS',
      image: '/templates/nusantara/cat-tops.webp'
    },
    {
      id: 'bottoms',
      name: 'BOTTOMS',
      image: '/templates/nusantara/cat-bottoms.webp'
    },
    {
      id: 'accessories',
      name: 'ACCESSORIES',
      image: '/templates/nusantara/cat-accessories.webp'
    }
  ];

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
    setCartOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setNewsletterEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-[#D5D4CF] text-[#111111] font-sans antialiased selection:bg-black selection:text-[#D5D4CF] overflow-x-clip">
      {/* ========================================================
          1. HERO SECTION (1.5x–2x Window Height, Aligned Typography, Centered Captions)
          ======================================================== */}
      <section 
        id="hero"
        ref={heroRef}
        className="relative w-full min-h-[135vh] lg:min-h-[145vh] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-[#DBD9D4] via-[#D8D7D2] to-[#D4D2CD] border-b border-black/10"
      >
        {/* --- Top Navigation Bar --- */}
        <header className="relative z-30 w-full px-6 sm:px-10 md:px-16 pt-7 pb-4 flex items-center justify-between">
          {/* Brand Logo & Subtitle */}
          <div className="flex flex-col">
            <a href="#hero" className="text-sm md:text-[15px] font-extrabold tracking-[0.25em] uppercase text-black leading-none cursor-pointer">
              NUSANTARA
            </a>
            <span className="text-[7.5px] md:text-[8px] tracking-[0.26em] text-neutral-600 font-medium uppercase mt-1 leading-none">
              APPAREL FOR A GREATER TOMORROW
            </span>
          </div>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-10 lg:gap-14 text-[11px] md:text-xs font-semibold tracking-[0.22em] text-black uppercase">
            <a href="#featured" className="hover:opacity-60 transition-opacity cursor-pointer">
              SHOP
            </a>
            <a href="#philosophy" className="hover:opacity-60 transition-opacity cursor-pointer">
              OUR STORY
            </a>
            <a href="#journal" className="hover:opacity-60 transition-opacity cursor-pointer">
              JOURNAL
            </a>
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-5 sm:gap-6 text-black">
            <button 
              type="button"
              onClick={() => setSearchOpen(!searchOpen)} 
              aria-label="Search"
              className="hover:opacity-60 transition-opacity cursor-pointer p-1"
            >
              <Search className="w-4 h-4 stroke-[2]" />
            </button>
            <button 
              type="button"
              onClick={() => setCartOpen(true)}
              aria-label="Shopping Bag"
              className="relative hover:opacity-60 transition-opacity cursor-pointer p-1"
            >
              <ShoppingBag className="w-4 h-4 stroke-[2]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1.5 w-3.5 h-3.5 bg-black text-white rounded-full text-[9px] font-bold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
              className="flex flex-col gap-1 cursor-pointer p-1 group"
            >
              <div className="w-5 h-[1.8px] bg-black transition-all group-hover:w-4" />
              <div className="w-5 h-[1.8px] bg-black transition-all group-hover:w-3" />
            </button>
          </div>
        </header>

        {/* --- Search Bar Dropdown --- */}
        {searchOpen && (
          <div className="relative z-40 px-6 sm:px-12 md:px-16 py-3 bg-[#C7C6C1]/90 backdrop-blur-md border-b border-black/10 transition-all">
            <div className="max-w-md mx-auto flex items-center gap-3">
              <Search className="w-4 h-4 text-neutral-600" />
              <input
                type="text"
                placeholder={lang === 'en' ? 'Search lookbook, archive, essentials...' : 'Cari lookbook, archive, essentials...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs font-medium placeholder:text-neutral-500 focus:outline-none"
                autoFocus
              />
              <button 
                type="button" 
                onClick={() => setSearchOpen(false)}
                className="text-neutral-500 hover:text-black cursor-pointer text-xs"
              >
                <CloseIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* --- Layer 1: Giant Background Typography ("NUSANTARA" Aligned with Navigation Padding) --- */}
        <motion.div 
          style={{ y: heroTitleY }}
          className="absolute top-[10%] sm:top-[11%] md:top-[12%] left-0 right-0 z-10 px-6 sm:px-10 md:px-16 pointer-events-none select-none flex items-center"
        >
          <h1 className="sr-only">NUSANTARA</h1>
          <svg 
            viewBox="0 0 1000 120" 
            className="w-full h-auto max-h-[22vw] select-none pointer-events-none overflow-visible"
            aria-hidden="true"
          >
            <text 
              x="0" 
              y="110" 
              textLength="1000" 
              lengthAdjust="spacingAndGlyphs" 
              fontFamily="'Plus Jakarta Sans', sans-serif" 
              fontWeight="900" 
              fontSize="140"
              fill="black"
            >
              NUSANTARA
            </text>
          </svg>
        </motion.div>

        {/* --- Layer 2: Model Image (Grand Scale 1.5x–2x, Anchored to Bottom, with Parallax - NO scale zoom) --- */}
        <motion.div 
          style={{ y: heroModelY }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none flex items-end justify-center w-full max-w-[1500px]"
        >
          <img 
            src="/templates/nusantara/hero-model.webp" 
            alt="Nusantara Monochrome Stoic Model" 
            className="h-[95vh] sm:h-[105vh] md:h-[115vh] lg:h-[125vh] max-h-[1200px] w-auto max-w-none object-contain object-bottom -mb-1"
            loading="eager"
          />
        </motion.div>

        {/* --- Layer 3: Editorial Captions Left & Right (Centered Vertically on desktop, ergonomically spaced on mobile) --- */}
        {/* Left Editorial Caption */}
        <motion.div 
          style={{ y: heroCaptionY }}
          className="absolute left-6 sm:left-10 md:left-16 top-[23%] sm:top-1/2 -translate-y-1/2 z-30 max-w-[170px] sm:max-w-[210px] pointer-events-none select-none"
        >
          <p className="text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase text-black leading-[1.55]">
            WEAR<br />
            THE CULTURE,<br />
            CARRY THE FUTURE.
          </p>
        </motion.div>

        {/* Right Editorial Caption */}
        <motion.div 
          style={{ y: heroCaptionY }}
          className="absolute right-6 sm:right-10 md:right-16 bottom-12 sm:bottom-auto sm:top-1/2 sm:-translate-y-1/2 z-30 max-w-[190px] sm:max-w-[230px] text-right pointer-events-none select-none"
        >
          <p className="text-[10px] sm:text-[11px] md:text-xs font-medium tracking-[0.18em] uppercase text-black leading-[1.55]">
            INDONESIAN HERITAGE<br />
            MODERN ESSENTIALS<br />
            TIMELESS STYLE
          </p>
        </motion.div>

        {/* Empty flex spacer so header sits at top and hero content fills window cleanly */}
        <div className="flex-1 w-full pointer-events-none" />

        {/* Bottom padding anchor */}
        <div className="relative z-30 w-full h-4 sm:h-6 pointer-events-none" />
      </section>

      {/* ========================================================
          2. FEATURED COLLECTION SECTION (Full Window Height)
          ======================================================== */}
      <section 
        id="featured" 
        ref={featuredRef}
        className="relative w-full min-h-screen lg:h-screen py-16 lg:py-0 flex items-center px-6 sm:px-10 md:px-16 bg-[#D5D4CF] border-b border-black/10"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left Column: Typography & Action */}
          <div className="md:col-span-7 flex flex-col justify-between pt-2">
            <div>
              <span className="text-[10px] md:text-[11px] font-bold tracking-[0.22em] uppercase text-neutral-600 block mb-4">
                FEATURED COLLECTION
              </span>
              <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[78px] xl:text-[88px] font-black uppercase text-black tracking-[-0.04em] leading-[0.92] mb-6 sm:mb-8">
                ESSENTIALS<br />
                FOR A HIGHER<br />
                STANDARD
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-neutral-700 leading-relaxed max-w-md mb-8 font-normal">
                Minimal silhouettes. Refined materials.<br className="hidden sm:inline" />
                Designed for those who move differently.
              </p>
            </div>

            <div>
              <a 
                href="#categories"
                className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-black border-b border-black pb-1 hover:opacity-60 transition-opacity cursor-pointer group"
              >
                <span>SHOP NOW</span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Model Portrait with Window Parallax Effect */}
          <div className="md:col-span-5 flex justify-end">
            <div className="w-full max-w-[420px] aspect-[4/5] overflow-hidden bg-[#C9C8C2] relative">
              <motion.img 
                src="/templates/nusantara/featured-model.webp" 
                alt="Essentials Higher Standard Model" 
                style={{ y: featuredImgY }}
                className="w-full h-full object-cover object-top scale-125 select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. CATEGORIES ROW (4 Columns)
          ======================================================== */}
      <section id="categories" className="px-6 sm:px-10 md:px-16 pb-20 sm:pb-28 bg-[#D5D4CF]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
          {categories.map((cat) => (
            <div 
              key={cat.id} 
              className="group relative aspect-[3/4] overflow-hidden bg-[#222222] cursor-pointer"
              onClick={handleAddToCart}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Gradient Scrim for crisp text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              {/* Label & Arrow */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase">
                <span>{cat.name}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================
          4. BRAND PHILOSOPHY & JOURNAL (Multi-Step Storytelling & Card Stacking)
          ======================================================== */}
      <section 
        id="philosophy" 
        ref={philosophyContainerRef} 
        className="relative h-[340vh] bg-[#D1CFCA]"
      >
        {/* Anchor point for Journal deep-links */}
        <div id="journal" className="absolute top-[65%] pointer-events-none" />

        {/* Sticky viewport pinned while scrolling through the 340vh storytelling track */}
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center border-y border-black/10 z-10">
          {/* Full-width Window Background: Contemplative Marble Bust */}
          <img 
            src="/templates/nusantara/philosophy-bust.webp" 
            alt="Contemplative Marble Bust in Stone Light" 
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
            style={{ objectPosition: '48% center' }}
            loading="lazy"
          />

          {/* Natural Vignette & Soft Tint Over Bust */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D1CFCA]/20 to-[#D1CFCA]/70 md:to-transparent pointer-events-none" />

          {/* Soft Dim Layer that smoothly appears when the Journal card stacks */}
          <motion.div 
            style={{ opacity: journalBackdropOpacity }} 
            className="absolute inset-0 bg-black/45 pointer-events-none z-15" 
          />

          {/* Content Overlay on the Right: Stories 01 & 02 */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-16 flex justify-end items-center h-full">
            <div className="relative w-full md:w-[48%] lg:w-[44%] min-h-[340px] sm:min-h-[380px] flex items-center">
              
              {/* Story 1: MORE THAN CLOTHES */}
              <motion.div 
                style={{ opacity: story1Opacity, y: story1Y, pointerEvents: story1PointerEvents }}
                className="absolute inset-0 flex flex-col justify-center bg-[#D1CFCA]/85 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-6 md:p-0"
              >
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.24em] uppercase text-neutral-600 block mb-4">
                  PHILOSOPHY
                </span>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black uppercase text-black tracking-[-0.04em] leading-[0.92] mb-6 sm:mb-8">
                  MORE THAN<br />
                  CLOTHES
                </h2>
                <p className="text-xs sm:text-sm md:text-[15px] text-neutral-700 leading-relaxed max-w-md mb-8 font-normal">
                  We create timeless pieces for a generation that values substance over trends. Our designs are inspired by art, culture, and the relentless pursuit of quiet perfection.
                </p>
                <div>
                  <a 
                    href="#journal"
                    className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-black border-b border-black pb-1 hover:opacity-60 transition-opacity cursor-pointer group"
                  >
                    <span>KEEP SCROLLING</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-y-1">↓</span>
                  </a>
                </div>
              </motion.div>

              {/* Story 2: CRAFTED WITH PURPOSE */}
              <motion.div 
                style={{ opacity: story2Opacity, y: story2Y, pointerEvents: story2PointerEvents }}
                className="absolute inset-0 flex flex-col justify-center bg-[#D1CFCA]/85 md:bg-transparent backdrop-blur-xs md:backdrop-blur-none p-6 md:p-0"
              >
                <span className="text-[10px] md:text-[11px] font-bold tracking-[0.24em] uppercase text-neutral-600 block mb-4">
                  PHILOSOPHY
                </span>
                <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black uppercase text-black tracking-[-0.04em] leading-[0.92] mb-6 sm:mb-8">
                  CRAFTED A<br />
                  PURPOSE
                </h2>
                <p className="text-xs sm:text-sm md:text-[15px] text-neutral-700 leading-relaxed max-w-md mb-8 font-normal">
                  Every seam is intentional. Every fiber ethically sourced across the archipelago. We reject the fleeting nature of fast fashion in favor of garments that endure generations.
                </p>
                <div>
                  <a 
                    href="#journal"
                    className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-black border-b border-black pb-1 hover:opacity-60 transition-opacity cursor-pointer group"
                  >
                    <span>EXPLORE JOURNAL</span>
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </a>
                </div>
              </motion.div>

            </div>
          </div>

          {/* --- Layer 3: EDITORIAL JOURNAL — VOL. 04 (Card Stacking Animation over OUR PHILOSOPHY — 02) --- */}
          <motion.div 
            style={{ 
              y: journalY, 
              pointerEvents: journalPointerEvents 
            }}
            className="absolute inset-0 z-20 flex items-center justify-center px-6 sm:px-10 md:px-16 pointer-events-none"
          >
            {/* Bounded Card (Bukan Full Page, Tanpa Shadow, Tanpa Fade-In) */}
            <div className="w-full max-w-7xl overflow-hidden bg-[#141414] text-white border border-black/15 pointer-events-auto">
              <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px] md:min-h-[500px] lg:min-h-[560px] items-stretch">
                
                {/* Left Column: Narrative Box */}
                <div className="md:col-span-5 p-6 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-center bg-[#141414]">
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.24em] uppercase text-neutral-400 block mb-3">
                    JOURNAL
                  </span>
                  <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] xl:text-[76px] font-black uppercase text-white tracking-[-0.04em] leading-[0.92] mb-6 sm:mb-8">
                    ART OF<br />
                    SIMPLICITY
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-neutral-400 leading-relaxed max-w-sm mb-8 font-normal">
                    In a world of excess, simplicity is a form of power. Exploring minimalist silhouettes, raw texture, and brutalist aesthetics.
                  </p>
                  <div>
                    <a 
                      href="#hero"
                      className="inline-flex items-center gap-3 text-xs md:text-sm font-bold tracking-[0.18em] uppercase text-white border-b border-white pb-1 hover:opacity-60 transition-opacity cursor-pointer group"
                    >
                      <span>READ MORE</span>
                      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </a>
                  </div>
                </div>

                {/* Right Column: Architectural Model Photo */}
                <div className="md:col-span-7 relative min-h-[300px] md:min-h-full w-full h-full overflow-hidden bg-[#181818]">
                  <img 
                    src="/templates/nusantara/journal-bg.webp" 
                    alt="The Art of Simplicity Editorial" 
                    className="absolute inset-0 w-full h-full object-cover object-[18%_center]"
                    loading="lazy"
                  />
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          7. FOOTER SECTION
          ======================================================== */}
      <footer className="px-6 sm:px-10 md:px-16 pt-16 sm:pt-20 pb-12 bg-[#CECDC9] border-t border-black/10">
        <div className="max-w-7xl mx-auto">
          {/* Top Columns Grid */}
          <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-10 pb-14 sm:pb-16 border-b border-black/10">
            {/* Column 1: Brand & Tagline */}
            <div className="col-span-2 md:col-span-3">
              <h4 className="text-lg sm:text-xl font-extrabold uppercase tracking-[0.12em] text-black leading-none mb-3">
                MONOLITH
              </h4>
              <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-neutral-600 leading-snug">
                TIMELESS APPAREL<br />
                FOR MODERN MINDS.
              </p>
            </div>

            {/* Column 2: Shop */}
            <div className="col-span-1 md:col-span-2">
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">
                SHOP
              </h5>
              <ul className="space-y-2.5 text-xs text-neutral-700 font-medium">
                <li><a href="#featured" className="hover:text-black cursor-pointer">Featured</a></li>
                <li><a href="#categories" className="hover:text-black cursor-pointer">Categories</a></li>
                <li><a href="#featured" className="hover:text-black cursor-pointer">Best Sellers</a></li>
              </ul>
            </div>

            {/* Column 3: About */}
            <div className="col-span-1 md:col-span-2">
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">
                ABOUT
              </h5>
              <ul className="space-y-2.5 text-xs text-neutral-700 font-medium">
                <li><a href="#philosophy" className="hover:text-black cursor-pointer">Our Story</a></li>
                <li><a href="#philosophy" className="hover:text-black cursor-pointer">Sustainability</a></li>
                <li><a href="#journal" className="hover:text-black cursor-pointer">Journal</a></li>
              </ul>
            </div>

            {/* Column 4: Help */}
            <div className="col-span-1 md:col-span-2">
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black mb-4">
                HELP
              </h5>
              <ul className="space-y-2.5 text-xs text-neutral-700 font-medium">
                <li><a href="#hero" className="hover:text-black cursor-pointer">Shipping</a></li>
                <li><a href="#hero" className="hover:text-black cursor-pointer">Returns</a></li>
                <li><a href="#hero" className="hover:text-black cursor-pointer">FAQ</a></li>
              </ul>
            </div>

            {/* Column 5: Newsletter */}
            <div className="col-span-2 md:col-span-3">
              <h5 className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-black mb-2">
                JOIN OUR NEWSLETTER
              </h5>
              <p className="text-[11px] text-neutral-600 leading-snug mb-4">
                Get early access to new drops and exclusive offers.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="relative flex items-center border-b border-black pb-1">
                <input 
                  type="email"
                  placeholder="Your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent text-xs text-black placeholder:text-neutral-500 focus:outline-none w-full pr-8 py-1"
                  required
                />
                <button 
                  type="submit" 
                  aria-label="Subscribe"
                  className="absolute right-0 hover:opacity-60 transition-opacity cursor-pointer p-1"
                >
                  <ArrowRight className="w-3.5 h-3.5 text-black" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[10px] text-black font-semibold mt-2">
                  ✓ {lang === 'en' ? 'Thank you for subscribing.' : 'Terima kasih telah bergabung.'}
                </p>
              )}
            </div>
          </div>

          {/* Bottom Copyright & Socials Row */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 font-medium gap-4">
            <p>© 2026 Monolith. All rights reserved.</p>
            <div className="flex items-center gap-5 text-neutral-800">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-black cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:text-black cursor-pointer text-xs font-bold">
                𝕏
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-black cursor-pointer">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================
          SLIDE-OVER DRAWERS (Mobile Navigation & Shopping Cart)
          ======================================================== */}
      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-xs bg-[#CECDC9] h-full p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-black/10">
                <span className="text-sm font-extrabold tracking-widest uppercase">NUSANTARA</span>
                <button 
                  type="button" 
                  onClick={() => setMobileMenuOpen(false)} 
                  className="cursor-pointer p-1 hover:opacity-60"
                >
                  <CloseIcon className="w-5 h-5 text-black" />
                </button>
              </div>

              <nav className="mt-8 flex flex-col gap-6 text-sm font-bold tracking-[0.2em] uppercase">
                <a 
                  href="#featured" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:opacity-60 cursor-pointer"
                >
                  SHOP
                </a>
                <a 
                  href="#categories" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:opacity-60 cursor-pointer"
                >
                  CATEGORIES
                </a>
                <a 
                  href="#philosophy" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:opacity-60 cursor-pointer"
                >
                  OUR STORY
                </a>
                <a 
                  href="#journal" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="hover:opacity-60 cursor-pointer"
                >
                  JOURNAL
                </a>
              </nav>
            </div>

            <div className="pt-6 border-t border-black/10 text-xs text-neutral-600">
              <p className="font-semibold uppercase tracking-wider mb-2">INDONESIAN HERITAGE</p>
              <p>Modern Essentials & Timeless Style</p>
            </div>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-[#CECDC9] h-full p-6 sm:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-black/10">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4" />
                  <span className="text-xs font-black tracking-widest uppercase">
                    {lang === 'en' ? 'YOUR BAG' : 'KERANJANG'} ({cartCount})
                  </span>
                </div>
                <button 
                  type="button" 
                  onClick={() => setCartOpen(false)} 
                  className="cursor-pointer p-1 hover:opacity-60"
                >
                  <CloseIcon className="w-5 h-5 text-black" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                {cartCount === 0 ? (
                  <p className="text-xs text-neutral-600 py-8 text-center">
                    {lang === 'en' ? 'Your bag is currently empty.' : 'Keranjang Anda saat ini kosong.'}
                  </p>
                ) : (
                  <div className="flex items-center gap-4 bg-[#C2C1BB] p-3">
                    <img 
                      src="/templates/nusantara/cat-outerwear.webp" 
                      alt="Selected item" 
                      className="w-14 h-14 object-cover" 
                    />
                    <div className="flex-1">
                      <p className="text-xs font-bold tracking-wider uppercase">THE ARCHIVE OUTERWEAR</p>
                      <p className="text-[11px] text-neutral-700">IDR 1.299.000</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-6 border-t border-black/10">
              <button 
                type="button"
                onClick={() => setCartOpen(false)}
                className="w-full bg-black text-white text-xs font-bold tracking-widest uppercase py-3.5 hover:bg-neutral-800 transition-colors cursor-pointer"
              >
                {lang === 'en' ? 'CONTINUE BROWSING' : 'LANJUTKAN BELANJA'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
