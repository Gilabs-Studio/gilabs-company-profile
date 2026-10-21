"use client";

import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  Check, 
  Globe
} from 'lucide-react';

interface SuraBayLandingProps {
  lang?: 'id' | 'en';
}

interface DishItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'pasta' | 'drinks';
  description: string;
  price: string;
  image: string;
}

interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  location: string;
  avatar: string;
}

// Reusable prominent Palm Tree Icon for Sura Bay Brand
function SuraPalmIcon({ className = "w-9 h-9" }: { className?: string }) {
  return (
    <svg 
      className={`${className} text-[#C59A53] transition-transform duration-300 group-hover:scale-105`} 
      viewBox="0 0 48 48" 
      fill="none" 
      stroke="currentColor"
    >
      <g strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        {/* Trunk */}
        <path d="M24 44 C23.5 35 24.5 24 24 14" />
        {/* Top frond */}
        <path d="M24 14 C23 8 25 4 24 3" />
        {/* Left fronds */}
        <path d="M24 14 C16 9 8 11 3 17" />
        <path d="M24 16 C14 16 5 22 2 30" />
        <path d="M24 20 C15 24 9 32 7 40" />
        {/* Right fronds */}
        <path d="M24 14 C32 9 40 11 45 17" />
        <path d="M24 16 C34 16 43 22 46 30" />
        <path d="M24 20 C33 24 39 32 41 40" />
      </g>
    </svg>
  );
}

export default function SuraBayLanding({ lang = 'id' }: SuraBayLandingProps) {
  // Navigation & Modals
  const [activeNav, setActiveNav] = useState('home');
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Testimonial Carousel State
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  // Parallax on Hero Section
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const heroBgY = useTransform(heroScroll, [0, 1], ['0%', '18%']);
  const heroTextY = useTransform(heroScroll, [0, 1], ['0%', '28%']);
  const heroOpacity = useTransform(heroScroll, [0, 0.8], [1, 0.15]);

  // Reservation Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: new Date().toISOString().split('T')[0],
    time: '19:00',
    guests: '2',
    seating: 'beachfront',
    specialNotes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Testimonials Data
  const testimonials: TestimonialItem[] = [
    {
      id: '1',
      quote: lang === 'id' 
        ? "Makanan, pemandangan sunset, dan suasananya benar-benar sempurna. Bukan sekadar restoran, ini pengalaman kuliner tak terlupakan."
        : "The food, the view, and the atmosphere were all perfect. It’s not just a restaurant, it’s an experience.",
      name: "Sarah L.",
      location: "Jakarta, Indonesia",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=240&h=240&q=80"
    },
    {
      id: '2',
      quote: lang === 'id'
        ? "Pemandangan matahari terbenam yang luar biasa dan udang harimau bakarnya sangat lezat. Racikan cocktail-nya menyempurnakan malam kami."
        : "Unbelievable sunset views and the grilled tiger prawns are to die for. The cocktail pairings elevated our entire evening.",
      name: "Marcus Vance",
      location: "Sydney, Australia",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&h=240&q=80"
    },
    {
      id: '3',
      quote: lang === 'id'
        ? "Cahaya lilin romantis, angin sepoi laut, dan pelayanan bintang lima. Restoran tepi pantai favorit kami di pulau ini."
        : "Romantic candlelight, ocean breeze, and world-class service. Easily our favorite seaside dining destination on the island.",
      name: "Elena Rostova",
      location: "Geneva, Switzerland",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=240&h=240&q=80"
    }
  ];

  // 4 Signature Dishes shown on the homepage
  const signatureDishes: DishItem[] = [
    {
      id: 'dish-1',
      name: 'Grilled Tiger Prawn',
      category: 'mains',
      description: 'With herbs & citrus butter',
      price: '$18',
      image: '/templates/sura-bay/dish-prawn.webp'
    },
    {
      id: 'dish-2',
      name: 'Tuna Tartare',
      category: 'starters',
      description: 'Avocado, sesame, lime',
      price: '$16',
      image: '/templates/sura-bay/dish-tartare.webp'
    },
    {
      id: 'dish-3',
      name: 'Truffle Pasta',
      category: 'pasta',
      description: 'Wild mushrooms, parmesan',
      price: '$14',
      image: '/templates/sura-bay/dish-pasta.webp'
    },
    {
      id: 'dish-4',
      name: 'Tropical Sunset',
      category: 'drinks',
      description: 'Mango, pineapple, coconut',
      price: '$9',
      image: '/templates/sura-bay/dish-cocktail.webp'
    }
  ];

  // Full Menu for the Menu Modal
  const fullMenuItems: DishItem[] = [
    ...signatureDishes,
    {
      id: 'dish-5',
      name: 'Crispy Calamari Fritti',
      category: 'starters',
      description: 'Lightly battered with smoked paprika aioli and charred lemon',
      price: '$14',
      image: '/templates/sura-bay/dish-prawn.webp'
    },
    {
      id: 'dish-6',
      name: 'Pan-Seared Sea Bass',
      category: 'mains',
      description: 'Asparagus spear, saffron velouté, caviar pearls',
      price: '$26',
      image: '/templates/sura-bay/dish-tartare.webp'
    },
    {
      id: 'dish-7',
      name: 'Wagyu Beef Ribeye MB7',
      category: 'mains',
      description: 'Charred broccolini, truffle jus, smoked sea salt',
      price: '$38',
      image: '/templates/sura-bay/dish-pasta.webp'
    },
    {
      id: 'dish-8',
      name: 'Balinese Coconut Mojito',
      category: 'drinks',
      description: 'White rum, fresh mint, lime, toasted coconut rim',
      price: '$11',
      image: '/templates/sura-bay/dish-cocktail.webp'
    }
  ];

  const handleNextTestimonial = () => {
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleReservationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    // Create WhatsApp message string
    const textMsg = `Halo Sura Bay Beach Restaurant,%0A%0ASaya ingin konfirmasi reservasi meja:%0ANama: ${formData.name}%0ANo. WhatsApp: ${formData.phone}%0ATanggal: ${formData.date}%0AJam: ${formData.time}%0AJumlah Tamu: ${formData.guests} orang%0APilihan Area: ${formData.seating}%0ACatatan: ${formData.specialNotes || '-'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/6281367954062?text=${textMsg}`, '_blank');
      setIsReservationOpen(false);
      setIsSubmitted(false);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    setActiveNav(id);
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#0e0f0d] text-white selection:bg-[#C59A53] selection:text-[#0E0F0D] overflow-x-hidden">
      
      {/* =========================================================================
          2. HERO SECTION WITH PARALLAX & FLOW NAVBAR (NO OVERLAP WITH DEMO HEADER)
         ========================================================================= */}
      <section 
        id="home"
        ref={heroRef}
        className="relative min-h-[96vh] flex flex-col justify-between overflow-hidden"
      >
        {/* Parallax Background Layer */}
        <motion.div 
          className="absolute inset-0 -top-16 -bottom-16 bg-cover bg-center pointer-events-none"
          style={{ backgroundImage: `url('/templates/sura-bay/hero-bg.webp')`, y: heroBgY }}
        />

        {/* Subtle Dark Vignette & Atmospheric Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75 pointer-events-none" />

        {/* =========================================================================
            1. NAVIGATION BAR (PERFECTLY CENTERED 3-COLUMN GRID IN DOCUMENT FLOW)
           ========================================================================= */}
        <nav className="relative z-40 w-full px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 pb-4 transition-all duration-300">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
            
            {/* Left: Nav Links */}
            <div className="hidden md:flex items-center gap-7 text-xs font-medium tracking-[0.2em] uppercase">
              <button 
                onClick={() => scrollToSection('home')}
                className={`transition-colors cursor-pointer pb-0.5 ${activeNav === 'home' ? 'text-[#C59A53] border-b border-[#C59A53]' : 'text-neutral-300 hover:text-[#C59A53]'}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className={`transition-colors cursor-pointer pb-0.5 ${activeNav === 'menu' ? 'text-[#C59A53] border-b border-[#C59A53]' : 'text-neutral-300 hover:text-[#C59A53]'}`}
              >
                Menu
              </button>
              <button 
                onClick={() => setIsGalleryOpen(true)}
                className="text-neutral-300 hover:text-[#C59A53] transition-colors cursor-pointer"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('story')}
                className={`transition-colors cursor-pointer pb-0.5 ${activeNav === 'story' ? 'text-[#C59A53] border-b border-[#C59A53]' : 'text-neutral-300 hover:text-[#C59A53]'}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors cursor-pointer pb-0.5 ${activeNav === 'contact' ? 'text-[#C59A53] border-b border-[#C59A53]' : 'text-neutral-300 hover:text-[#C59A53]'}`}
              >
                Contact
              </button>
            </div>

            {/* Center: Brand Logo (Exactly centered on screen with PROMINENT palm tree icon) */}
            <div 
              onClick={() => scrollToSection('home')} 
              className="flex flex-col items-start md:items-center justify-center cursor-pointer group select-none"
            >
              <SuraPalmIcon className="w-9 h-9 sm:w-10 sm:h-10 mb-1" />
              <span className="font-serif text-[#C59A53] text-sm sm:text-base font-medium tracking-[0.24em] uppercase leading-none">
                Sura Bay
              </span>
              <span className="text-[#C59A53]/80 text-[7.5px] font-sans tracking-[0.3em] uppercase mt-0.5 leading-none">
                Beach Restaurant
              </span>
            </div>

            {/* Right: Search & Book a Table CTA */}
            <div className="flex items-center justify-end gap-5">
              <button 
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search Menu"
                className="text-neutral-300 hover:text-[#C59A53] transition-colors p-1.5 cursor-pointer"
              >
                <Search className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsReservationOpen(true)}
                className="bg-[#D4A359] hover:bg-[#e0b269] text-[#0E0F0D] text-[11px] sm:text-xs font-semibold px-5 sm:px-6 py-2 sm:py-2.5 rounded-full tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer shadow-md hover:shadow-[#D4A359]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Book a Table
              </button>
            </div>

          </div>
        </nav>

        {/* Right Vertical SCROLL Indicator */}
        <div className="hidden lg:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-3 pointer-events-none z-20">
          <SuraPalmIcon className="w-5 h-5" />
          <div className="w-[1px] h-8 bg-neutral-500" />
          <span className="text-[9px] tracking-[0.35em] text-neutral-300 uppercase [writing-mode:vertical-rl] font-medium">
            SCROLL
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-neutral-500 to-transparent" />
        </div>

        {/* Hero Content with Parallax Motion */}
        <motion.div 
          style={{ y: heroTextY, opacity: heroOpacity }}
          className="relative z-20 max-w-3xl mx-auto text-center flex flex-col items-center my-auto px-4 py-8"
        >
          {/* Cursive Accent */}
          <span className="font-script text-[#D4A359] text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide mb-1 drop-shadow-md select-none">
            Good Food
          </span>

          {/* Main Headline */}
          <h1 className="font-serif text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.14em] uppercase leading-tight drop-shadow-xl select-none">
            GREAT MOMENTS
          </h1>

          {/* Subtext */}
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light max-w-md mx-auto mt-3.5 leading-relaxed drop-shadow">
            Savor exquisite flavors, crafted with passion,<br />
            by the beach.
          </p>

          {/* Outline Button */}
          <button 
            onClick={() => setIsReservationOpen(true)}
            className="inline-flex items-center gap-2.5 px-7 py-2.5 rounded-full border border-[#D4A359] text-[#E5B869] hover:bg-[#D4A359] hover:text-[#0E0F0D] text-xs md:text-sm tracking-[0.16em] font-medium uppercase transition-all duration-300 mt-6 cursor-pointer hover:-translate-y-0.5 active:translate-y-0 shadow-lg hover:shadow-[#D4A359]/20"
          >
            <span>Book a Table</span>
            <span className="text-sm font-light">⟶</span>
          </button>
        </motion.div>

        {/* Torn Paper Bottom Edge Transition - UNCLIPPED FULL NATURAL CONTOUR */}
        <div className="relative w-full pointer-events-none select-none z-30 mt-auto -mb-1">
          <img 
            src="/templates/sura-bay/torn-edge-hero.png" 
            alt="Torn edge transition" 
            className="w-full h-auto block"
          />
        </div>
      </section>

      {/* =========================================================================
          3. VALUE PROPOSITIONS / FEATURES (LARGE ICONS PERSIS REF 2)
         ========================================================================= */}
      <section className="bg-[#F1F1ED] text-[#1C1C1A] py-12 md:py-16 px-4 sm:px-8 relative z-30">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E1DC]">
          
          {/* Feature 1: Fresh Ingredients (Large Line Icon) */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 group">
            <div className="w-14 h-14 flex items-center justify-center text-[#B58D54] mb-3">
              <svg className="w-11 h-11 text-[#C59A53]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2v20M21 2v6a3 3 0 0 1-3 3M6 2v7a3 3 0 0 0 6 0V2M9 12v10" />
              </svg>
            </div>
            <h3 className="font-serif text-[#1C1C1A] text-base md:text-lg font-medium tracking-wide mb-1.5">
              Fresh Ingredients
            </h3>
            <p className="text-[#7A7873] text-xs leading-normal max-w-[210px]">
              Locally sourced, globally inspired.
            </p>
          </div>

          {/* Feature 2: Ocean View Dining (Large Line Icon) */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 group">
            <div className="w-14 h-14 flex items-center justify-center text-[#B58D54] mb-3">
              <svg className="w-11 h-11 text-[#C59A53]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M20 12h2M19.07 4.93l-1.41 1.41" />
                <path d="M16 12a4 4 0 0 0-8 0" />
                <path d="M2 17c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
                <path d="M2 21c2-1 4-1 6 0s4 1 6 0 4-1 6 0" />
              </svg>
            </div>
            <h3 className="font-serif text-[#1C1C1A] text-base md:text-lg font-medium tracking-wide mb-1.5">
              Ocean View Dining
            </h3>
            <p className="text-[#7A7873] text-xs leading-normal max-w-[210px]">
              Breathtaking views, unforgettable bites.
            </p>
          </div>

          {/* Feature 3: Signature Menu (Large Line Icon) */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 group">
            <div className="w-14 h-14 flex items-center justify-center text-[#B58D54] mb-3">
              <svg className="w-11 h-11 text-[#C59A53]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 13.8a4.5 4.5 0 0 1-2.8-5.3A4.5 4.5 0 0 1 7.4 5a4.5 4.5 0 0 1 9.2 0 4.5 4.5 0 0 1 4.2 3.5 4.5 4.5 0 0 1-2.8 5.3" />
                <path d="M6 17h12a2 2 0 0 0 2-2v-1H4v1a2 2 0 0 0 2 2Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[#1C1C1A] text-base md:text-lg font-medium tracking-wide mb-1.5">
              Signature Menu
            </h3>
            <p className="text-[#7A7873] text-xs leading-normal max-w-[210px]">
              A fusion of local and international cuisine.
            </p>
          </div>

          {/* Feature 4: Crafted Beverages (Large Line Icon) */}
          <div className="flex flex-col items-center text-center p-4 sm:p-6 group">
            <div className="w-14 h-14 flex items-center justify-center text-[#B58D54] mb-3">
              <svg className="w-11 h-11 text-[#C59A53]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 22h8M12 15v7M19 3l-7 8-7-8h14Z" />
              </svg>
            </div>
            <h3 className="font-serif text-[#1C1C1A] text-base md:text-lg font-medium tracking-wide mb-1.5">
              Crafted Beverages
            </h3>
            <p className="text-[#7A7873] text-xs leading-normal max-w-[210px]">
              Refreshing drinks, perfect for every moment.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================================================
          4. OUR STORY SECTION (FULL WINDOW SECTION WITH FADE-IN REVEAL MOTION)
         ========================================================================= */}
      <section id="story" className="w-full bg-[#F1F1ED] text-[#1C1C1A] min-h-[640px] lg:min-h-[720px] flex items-center py-20 lg:py-28 px-6 sm:px-12 lg:px-20 relative z-30">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Distressed Brush Mask Image with FADE IN REVEAL animation */}
          <div className="flex justify-center md:justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 45, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[560px] w-full"
            >
              <img 
                src="/templates/sura-bay/story-brush.webp" 
                alt="Sunset Family Dinner by the Sea at Sura Bay" 
                className="w-full h-auto drop-shadow-md select-none"
              />
            </motion.div>
          </div>

          {/* Right: Story Typography & Narrative */}
          <div className="flex flex-col items-start text-left md:pl-6">
            <span className="font-script text-[#C59A53] text-3xl md:text-4xl font-normal block mb-2 select-none">
              Our Story
            </span>
            <h2 className="font-serif text-[#1C1C1A] text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] mb-6">
              More Than Just<br />A Meal
            </h2>
            <p className="text-[#5A5854] text-sm sm:text-base leading-relaxed max-w-lg mb-8 font-light">
              Sura Bay was born from a simple belief — that great food brings people together. Set against the stunning coastline, our restaurant offers a relaxed yet refined dining experience, where every dish tells a story of flavor, culture, and the sea.
            </p>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2.5 text-sm text-[#8C6D3B] hover:text-[#C59A53] font-medium tracking-wider uppercase transition-colors cursor-pointer group"
            >
              <span>Learn More</span>
              <span className="group-hover:translate-x-1.5 transition-transform duration-300">⟶</span>
            </button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          5. OUR MENU / SIGNATURE DISHES (NEW IMAGES & NO HOVER SCALE EFFECTS)
         ========================================================================= */}
      <section id="menu" className="bg-[#111210] text-white py-20 md:py-28 px-6 sm:px-10 lg:px-14 relative z-30">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 md:mb-14 border-b border-neutral-800 pb-6">
            <div>
              <span className="font-script text-[#C59A53] text-2xl md:text-3xl block mb-1">
                Our Menu
              </span>
              <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide">
                Signature Dishes
              </h2>
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="mt-4 sm:mt-0 text-xs md:text-sm text-[#C59A53] hover:text-white transition-colors flex items-center gap-1.5 font-medium tracking-wider uppercase cursor-pointer group"
            >
              <span>View Full Menu</span>
              <span className="group-hover:translate-x-1 transition-transform">⟶</span>
            </button>
          </div>

          {/* 4 Dish Cards Grid (STABLE, NO HOVER SCALE) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {signatureDishes.map((dish) => (
              <div 
                key={dish.id} 
                onClick={() => setIsMenuOpen(true)}
                className="group flex flex-col cursor-pointer transition-colors duration-200"
              >
                {/* Dish Photo (NO HOVER SCALE) */}
                <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 mb-3.5 shadow-md">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Dish Title */}
                <h3 className="font-serif text-white text-base font-normal tracking-wide mb-1 group-hover:text-[#C59A53] transition-colors">
                  {dish.name}
                </h3>

                {/* Dish Ingredients */}
                <p className="text-neutral-400 text-xs font-light mb-2.5 line-clamp-1">
                  {dish.description}
                </p>

                {/* Dish Price */}
                <div className="flex items-center gap-1 text-white font-medium text-xs tracking-wider">
                  <span>{dish.price}</span>
                  <span className="text-[#C59A53] group-hover:translate-x-1 transition-transform duration-300">⟶</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. DINE BY THE BEACH (CONSISTENT WITH OUR MENU UI & BG)
         ========================================================================= */}
      <section id="experiences" className="bg-[#111210] text-white py-20 md:py-28 px-6 sm:px-10 lg:px-14 relative z-30 border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header (Consistent flex-between with Our Menu) */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 md:mb-14 border-b border-neutral-800 pb-6">
            <div>
              <span className="font-script text-[#C59A53] text-2xl md:text-3xl block mb-1">
                Dine by the Beach
              </span>
              <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide">
                Coastal Spaces
              </h2>
            </div>
            
            <button 
              onClick={() => setIsReservationOpen(true)}
              className="mt-4 sm:mt-0 text-xs md:text-sm text-[#C59A53] hover:text-white transition-colors flex items-center gap-1.5 font-medium tracking-wider uppercase cursor-pointer group"
            >
              <span>Book An Experience</span>
              <span className="group-hover:translate-x-1 transition-transform">⟶</span>
            </button>
          </div>

          {/* 3 Coastal Spaces Cards Grid (Consistent Card UI with Our Menu) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Oceanfront Cabanas */}
            <div 
              onClick={() => setIsReservationOpen(true)}
              className="group flex flex-col cursor-pointer transition-colors duration-200"
            >
              {/* Photo Box */}
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 mb-3.5 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1515862313161-889d84b4b1fc?auto=format&fit=crop&w=800&q=80" 
                  alt="Oceanfront Cabanas" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#111210]/90 backdrop-blur-xs text-[#C59A53] border border-[#C59A53]/30 text-[9.5px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded-sm">
                  VIP Cabana
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-white text-base font-normal tracking-wide mb-1 group-hover:text-[#C59A53] transition-colors">
                Oceanfront Cabanas
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-xs font-light mb-2.5 line-clamp-2">
                {lang === 'id' 
                  ? 'Daybed privat di garis pantai dengan layanan butler pribadi dan champagne dingin.'
                  : 'Private shoreline daybeds featuring dedicated host service and chilled champagne.'}
              </p>

              {/* Action Link */}
              <div className="flex items-center gap-1 text-white font-medium text-xs tracking-wider">
                <span className="text-neutral-300">12:00 – 19:30</span>
                <span className="text-neutral-500 mx-1.5">•</span>
                <span className="text-[#C59A53]">Reserve</span>
                <span className="text-[#C59A53] group-hover:translate-x-1 transition-transform duration-300">⟶</span>
              </div>
            </div>

            {/* Card 2: The Sunset Teak Deck */}
            <div 
              onClick={() => setIsReservationOpen(true)}
              className="group flex flex-col cursor-pointer transition-colors duration-200"
            >
              {/* Photo Box */}
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 mb-3.5 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1550293750-dde2bed30d54?auto=format&fit=crop&w=800&q=80" 
                  alt="The Sunset Deck" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#C59A53] text-[#0E0F0D] text-[9.5px] uppercase tracking-[0.2em] font-semibold px-2.5 py-1 rounded-sm shadow-md">
                  Most Desired
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-white text-base font-normal tracking-wide mb-1 group-hover:text-[#C59A53] transition-colors">
                The Sunset Teak Deck
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-xs font-light mb-2.5 line-clamp-2">
                {lang === 'id' 
                  ? 'Dek kayu jati bertingkat menghadap panorama matahari terbenam dengan alunan live acoustic.'
                  : 'Elevated aged teak decking with unhindered sunset horizons and mellow acoustic rhythms.'}
              </p>

              {/* Action Link */}
              <div className="flex items-center gap-1 text-white font-medium text-xs tracking-wider">
                <span className="text-neutral-300">16:30 – 21:00</span>
                <span className="text-neutral-500 mx-1.5">•</span>
                <span className="text-[#C59A53]">Reserve</span>
                <span className="text-[#C59A53] group-hover:translate-x-1 transition-transform duration-300">⟶</span>
              </div>
            </div>

            {/* Card 3: Candlelit Sand Tables */}
            <div 
              onClick={() => setIsReservationOpen(true)}
              className="group flex flex-col cursor-pointer transition-colors duration-200"
            >
              {/* Photo Box */}
              <div className="relative aspect-square w-full rounded-sm overflow-hidden bg-neutral-900 border border-neutral-800 mb-3.5 shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1542557497-4c7b03d0d245?auto=format&fit=crop&w=800&q=80" 
                  alt="Candlelit Sand Tables" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-[#111210]/90 backdrop-blur-xs text-[#C59A53] border border-[#C59A53]/30 text-[9.5px] uppercase tracking-[0.2em] font-medium px-2.5 py-1 rounded-sm">
                  Starlit Night
                </div>
              </div>

              {/* Title */}
              <h3 className="font-serif text-white text-base font-normal tracking-wide mb-1 group-hover:text-[#C59A53] transition-colors">
                Candlelit Sand Tables
              </h3>

              {/* Description */}
              <p className="text-neutral-400 text-xs font-light mb-2.5 line-clamp-2">
                {lang === 'id' 
                  ? 'Santap malam intim bertelanjang kaki di atas pasir pantai diterangi pendar hangat lentera lilin.'
                  : 'An intimate barefoot dinner experience on powdery sand illuminated by glowing hurricane lanterns.'}
              </p>

              {/* Action Link */}
              <div className="flex items-center gap-1 text-white font-medium text-xs tracking-wider">
                <span className="text-neutral-300">18:30 – Late</span>
                <span className="text-neutral-500 mx-1.5">•</span>
                <span className="text-[#C59A53]">Reserve</span>
                <span className="text-[#C59A53] group-hover:translate-x-1 transition-transform duration-300">⟶</span>
              </div>
            </div>
          </div>

          {/* Exclusive Ambiance Features Strip (Consistent with Our Menu divider) */}
          <div className="mt-14 pt-8 border-t border-neutral-800 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center">
              <span className="text-[#C59A53] font-serif text-base md:text-lg font-medium mb-1">100% Oceanfront</span>
              <span className="text-neutral-400 text-xs font-light">Uninterrupted shoreline views</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#C59A53] font-serif text-base md:text-lg font-medium mb-1">Catch of the Day</span>
              <span className="text-neutral-400 text-xs font-light">Fresh seafood landed every dawn</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#C59A53] font-serif text-base md:text-lg font-medium mb-1">Artisanal Cellar</span>
              <span className="text-neutral-400 text-xs font-light">Sommelier curated natural wines</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[#C59A53] font-serif text-base md:text-lg font-medium mb-1">Resort Elegant</span>
              <span className="text-neutral-400 text-xs font-light">Relaxed chic evening dress code</span>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. TESTIMONIALS SECTION
         ========================================================================= */}
      <section className="bg-[#F1F1ED] text-[#1C1C1A] py-16 md:py-24 px-4 sm:px-6 relative z-30">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          
          <span className="font-script text-[#C59A53] text-2xl md:text-3xl block mb-1">
            What Our Guests Say
          </span>
          
          <h2 className="font-serif text-[#1C1C1A] text-3xl sm:text-4xl font-normal mb-8">
            Real People. Great Food.
          </h2>

          {/* Carousel Slider */}
          <div className="relative w-full flex items-center justify-between px-2 sm:px-6">
            
            {/* Left Nav Arrow */}
            <button 
              onClick={handlePrevTestimonial}
              aria-label="Previous Testimonial"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-[#C59A53] flex items-center justify-center text-neutral-600 hover:text-[#C59A53] transition-all cursor-pointer hover:-translate-x-0.5 active:translate-x-0 bg-white/70 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Testimonial Quote */}
            <div className="px-6 sm:px-12 max-w-xl transition-all duration-300">
              <p className="font-serif text-[#4A4844] text-sm sm:text-base md:text-lg italic leading-relaxed mb-6">
                "{testimonials[testimonialIndex].quote}"
              </p>

              {/* Author & Avatar */}
              <div className="flex flex-col items-center gap-2">
                <img 
                  src={testimonials[testimonialIndex].avatar} 
                  alt={testimonials[testimonialIndex].name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#C59A53]/50 shadow-sm"
                />
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[#1C1C1A]">
                    {testimonials[testimonialIndex].name}
                  </h4>
                  <p className="text-[11px] text-[#7A7873] font-light">
                    {testimonials[testimonialIndex].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Nav Arrow */}
            <button 
              onClick={handleNextTestimonial}
              aria-label="Next Testimonial"
              className="w-9 h-9 rounded-full border border-neutral-300 hover:border-[#C59A53] flex items-center justify-center text-neutral-600 hover:text-[#C59A53] transition-all cursor-pointer hover:translate-x-0.5 active:translate-x-0 bg-white/70 shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

          {/* Pagination Dots */}
          <div className="flex items-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  testimonialIndex === idx 
                    ? 'w-6 bg-[#C59A53]' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. RESERVATION CALL-TO-ACTION ("YOUR TABLE AWAITS")
         ========================================================================= */}
      <section 
        className="relative min-h-[420px] flex items-center justify-center py-24 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url('/templates/sura-bay/footer-bg.webp')` }}
      >
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />

        <div className="relative z-20 max-w-2xl mx-auto text-center flex flex-col items-center">
          <span className="font-script text-[#D4A359] text-2xl sm:text-3xl md:text-4xl block mb-2 drop-shadow-md select-none">
            Make a Reservation
          </span>
          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl font-normal tracking-[0.14em] uppercase leading-tight drop-shadow-lg select-none">
            YOUR TABLE AWAITS
          </h2>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base font-light max-w-md mx-auto mt-2.5 mb-6 leading-relaxed drop-shadow">
            Good food, great company, and a view like no other.
          </p>
          <button 
            onClick={() => setIsReservationOpen(true)}
            className="inline-flex items-center gap-2.5 px-8 py-3 rounded-full bg-[#D4A359] hover:bg-[#e0b269] text-[#0E0F0D] text-xs md:text-sm tracking-[0.16em] font-semibold uppercase transition-all duration-300 cursor-pointer shadow-xl hover:shadow-[#D4A359]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Book a Table</span>
            <span className="text-sm font-bold">⟶</span>
          </button>
        </div>
      </section>

      {/* =========================================================================
          9. FOOTER (CLEAN DARK LUXURY BACKGROUND, NO IMAGE)
         ========================================================================= */}
      <footer 
        id="contact" 
        className="relative py-10 md:py-12 px-6 sm:px-10 lg:px-14 bg-[#0E0F0D] border-t border-neutral-800/70"
      >
        <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
          
          {/* Left: Brand Logo */}
          <div className="flex items-center gap-5">
            <div 
              onClick={() => scrollToSection('home')}
              className="flex flex-col items-center cursor-pointer group"
            >
              <SuraPalmIcon className="w-8 h-8 mb-1" />
              <span className="font-serif text-[#C59A53] text-sm font-medium tracking-[0.24em] uppercase">
                Sura Bay
              </span>
              <span className="text-[#C59A53]/80 text-[7px] font-sans tracking-[0.3em] uppercase">
                Beach Restaurant
              </span>
            </div>

            <div className="hidden sm:block w-[1px] h-10 bg-neutral-800" />
          </div>

          {/* Center: Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs font-medium tracking-[0.18em] uppercase text-neutral-300">
            <button 
              onClick={() => scrollToSection('home')} 
              className="hover:text-[#C59A53] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('menu')} 
              className="hover:text-[#C59A53] transition-colors cursor-pointer"
            >
              Menu
            </button>
            <button 
              onClick={() => setIsGalleryOpen(true)} 
              className="hover:text-[#C59A53] transition-colors cursor-pointer"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('story')} 
              className="hover:text-[#C59A53] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="hover:text-[#C59A53] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </div>

          {/* Right: Social & Copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-3">
              {/* Instagram SVG */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C59A53] text-neutral-300 hover:text-[#C59A53] flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C59A53] text-neutral-300 hover:text-[#C59A53] flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* TripAdvisor / Globe */}
              <a 
                href="https://tripadvisor.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Tripadvisor"
                className="w-8 h-8 rounded-full border border-neutral-700 hover:border-[#C59A53] text-neutral-300 hover:text-[#C59A53] flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>

            <p className="text-[11px] text-neutral-400 font-light">
              © 2025 Sura Bay. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

      {/* =========================================================================
          10. RESERVATION MODAL
         ========================================================================= */}
      {isReservationOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#161715] border border-[#C59A53]/30 rounded-xl p-6 sm:p-8 shadow-2xl text-white">
            
            <button 
              onClick={() => setIsReservationOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <span className="font-script text-[#C59A53] text-2xl block mb-1">
                Book a Table
              </span>
              <h3 className="font-serif text-2xl font-normal text-white uppercase tracking-wider">
                Table Reservation
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">
                Experience sunset beach dining at Sura Bay.
              </p>
            </div>

            <form onSubmit={handleReservationSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-neutral-300 font-medium mb-1 tracking-wide">
                  Your Full Name
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1 tracking-wide">
                  WhatsApp Number
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="e.g. 0813-6795-4062"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1 tracking-wide flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#C59A53]" />
                    Date
                  </label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1 tracking-wide flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C59A53]" />
                    Time
                  </label>
                  <select 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                  >
                    <option value="17:00">17:00 (Sunset Golden Hour)</option>
                    <option value="18:00">18:00 (Sunset Twilight)</option>
                    <option value="19:00">19:00 (Candlelight Dinner)</option>
                    <option value="20:00">20:00 (Night Breeze)</option>
                    <option value="21:00">21:00 (Late Supper)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-neutral-300 font-medium mb-1 tracking-wide flex items-center gap-1">
                    <Users className="w-3 h-3 text-[#C59A53]" />
                    Guests
                  </label>
                  <select 
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons (Couple)</option>
                    <option value="4">4 Persons (Family/Friends)</option>
                    <option value="6">6 Persons (Small Party)</option>
                    <option value="8+">8+ Persons (VIP Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-neutral-300 font-medium mb-1 tracking-wide flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C59A53]" />
                    Seating Area
                  </label>
                  <select 
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                  >
                    <option value="beachfront">Beachfront Sand Tables</option>
                    <option value="terrace">Covered Wooden Terrace</option>
                    <option value="lounge">Sunset Cocktail Lounge</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-neutral-300 font-medium mb-1 tracking-wide">
                  Special Requests (Optional)
                </label>
                <textarea 
                  rows={2}
                  placeholder="Anniversary, dietary preferences, birthday cake..."
                  value={formData.specialNotes}
                  onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                  className="w-full bg-[#20221E] border border-neutral-700 focus:border-[#C59A53] rounded px-3 py-2 text-white outline-none transition-colors"
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className="w-full bg-[#D4A359] hover:bg-[#e0b269] text-[#0E0F0D] font-semibold py-3 rounded-md uppercase tracking-[0.16em] text-xs transition-all duration-300 cursor-pointer shadow-lg hover:shadow-[#D4A359]/30 flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitted ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-950" />
                    <span>Connecting to WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Send to WhatsApp</span>
                    <span>⟶</span>
                  </>
                )}
              </button>
            </form>

          </div>
        </div>
      )}

      {/* =========================================================================
          11. FULL MENU MODAL
         ========================================================================= */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#141513] border border-[#C59A53]/30 rounded-xl p-6 sm:p-10 shadow-2xl text-white">
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="sticky top-0 float-right text-neutral-400 hover:text-white transition-colors cursor-pointer z-10"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <span className="font-script text-[#C59A53] text-3xl block mb-1">
                Culinary Portfolio
              </span>
              <h3 className="font-serif text-3xl font-normal text-white uppercase tracking-wider">
                Full Dining & Cocktail Menu
              </h3>
              <p className="text-xs text-neutral-400 font-light mt-1">
                Freshly caught seafood, artisan pastas, and sunset cocktails.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {fullMenuItems.map((item) => (
                <div key={item.id} className="flex gap-4 p-3 rounded-lg bg-[#1D1E1B] border border-neutral-800">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-16 h-16 rounded object-cover flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-sm font-medium text-white">
                        {item.name}
                      </h4>
                      <span className="text-xs font-semibold text-[#C59A53]">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-[11px] text-neutral-400 font-light mt-1 leading-snug">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center pt-6 border-t border-neutral-800">
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  setIsReservationOpen(true);
                }}
                className="bg-[#D4A359] hover:bg-[#e0b269] text-[#0E0F0D] text-xs font-semibold px-6 py-2.5 rounded-full tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                Reserve a Table for Dinner
              </button>
            </div>

          </div>
        </div>
      )}

      {/* =========================================================================
          12. GALLERY LIGHTBOX MODAL
         ========================================================================= */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#141513] border border-neutral-800 rounded-xl p-6 sm:p-8 text-white">
            <button 
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="text-center mb-8">
              <span className="font-script text-[#C59A53] text-3xl block mb-1">
                Visual Journey
              </span>
              <h3 className="font-serif text-3xl font-normal text-white uppercase tracking-wider">
                Sura Bay Atmosphere & Dishes
              </h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="rounded overflow-hidden aspect-video col-span-2 sm:col-span-2">
                <img src="/templates/sura-bay/hero-bg.webp" alt="Atmosphere" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden aspect-square">
                <img src="/templates/sura-bay/dish-cocktail.webp" alt="Cocktail" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden aspect-square">
                <img src="/templates/sura-bay/dish-prawn.webp" alt="Prawns" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden aspect-square">
                <img src="/templates/sura-bay/dish-tartare.webp" alt="Tartare" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden aspect-square">
                <img src="/templates/sura-bay/dish-pasta.webp" alt="Pasta" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden aspect-video col-span-2 sm:col-span-3">
                <img src="/templates/sura-bay/footer-bg.webp" alt="Sunset Panorama" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          13. SEARCH DIALOG
         ========================================================================= */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#191A17] border border-[#C59A53]/40 rounded-xl p-5 shadow-2xl text-white">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <h4 className="font-serif text-lg font-medium text-[#C59A53] mb-3">
              Search Sura Bay Menu
            </h4>

            <div className="relative mb-4">
              <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input 
                type="text"
                autoFocus
                placeholder="Search tiger prawn, pasta, cocktails..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#242621] border border-neutral-700 focus:border-[#C59A53] rounded pl-9 pr-3 py-2 text-sm text-white outline-none"
              />
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2">
              {fullMenuItems
                .filter(item => 
                  item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                  item.description.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map(item => (
                  <div 
                    key={item.id} 
                    onClick={() => {
                      setIsSearchOpen(false);
                      setIsMenuOpen(true);
                    }}
                    className="p-2.5 rounded bg-[#20221D] hover:bg-[#282B24] border border-neutral-800 flex items-center justify-between cursor-pointer transition-colors"
                  >
                    <div>
                      <p className="font-medium text-xs text-white">{item.name}</p>
                      <p className="text-[10px] text-neutral-400">{item.description}</p>
                    </div>
                    <span className="text-xs font-semibold text-[#C59A53]">{item.price}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
