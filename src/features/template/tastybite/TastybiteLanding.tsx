import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  Leaf,
  Heart,
  Smile,
  Phone,
  ShoppingCart,
  UtensilsCrossed,
  Package,
  Plus,
  Instagram,
  Facebook,
  Twitter,
  ArrowRight,
} from "lucide-react";

interface TastybiteLandingProps {
  lang?: "id" | "en";
}

export default function TastybiteLanding({ lang = "id" }: TastybiteLandingProps) {
  const isEn = lang === "en";

  const [activeCategory, setActiveCategory] = useState("BURGERS");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll-based motion for scalloped ribbon strip
  const ribbonRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ribbonRef,
    offset: ["start end", "end start"],
  });

  // Top teeth move horizontally as user scrolls; bottom teeth move in opposite direction
  const xTop = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const xBottom = useTransform(scrollYProgress, [0, 1], [120, -120]);

  const testimonials = [
    {
      quote: "“TastyBite is my go-to place for good food and great vibes. The burgers are simply the best!”",
      name: "Sarah Wijaya",
      rating: 5,
    },
    {
      quote: "“The ramen bowl mascot got my attention, but the chicken rice bowl and iced latte won my heart completely!”",
      name: "Dimas Pratama",
      rating: 5,
    },
    {
      quote: "“Fastest delivery in town, super aesthetic packaging, and everything tastes freshly prepared.”",
      name: "Jessica Tan",
      rating: 5,
    },
  ];

  const categories = [
    "BURGERS",
    "RICE BOWLS",
    "COFFEE",
    "DESSERTS",
    "SNACKS",
    "BEVERAGES",
  ];

  const handleNextTestimonial = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-white text-[#121518] font-sans overflow-x-hidden selection:bg-[#ffd000] selection:text-[#121518]">
      
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR                                            */}
      {/* ======================================================== */}
      <nav className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 py-5 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 sm:w-9 sm:h-9 bg-[#121518] rounded-lg flex items-center justify-center text-white shadow-sm">
            <svg
              className="w-5 h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <path d="M7 8h10" />
              <path d="M7 12h5" />
              <path d="M7 16h10" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-outfit font-extrabold text-[15px] sm:text-base leading-none text-[#121518] tracking-tight">
              TastyBite
            </span>
            <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-600 leading-none mt-1">
              F&B Studio
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-[13px] sm:text-sm font-semibold text-neutral-700">
          <a href="#menu" className="hover:text-[#121518] transition-colors cursor-pointer">
            Menu
          </a>
          <a href="#about" className="hover:text-[#121518] transition-colors cursor-pointer">
            About
          </a>
          <a href="#locations" className="hover:text-[#121518] transition-colors cursor-pointer">
            Locations
          </a>
          <a href="#careers" className="hover:text-[#121518] transition-colors cursor-pointer">
            Careers
          </a>
        </div>

        {/* Navbar Right Actions: CTA Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="bg-[#121518] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors">
            Order Now
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-neutral-200 text-[#121518] hover:bg-neutral-100 transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-5 pb-5 pt-2 border-b border-neutral-200 bg-white flex flex-col gap-3 font-semibold text-sm text-neutral-800">
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-neutral-100 hover:text-[#121518] transition-colors"
          >
            Menu
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-neutral-100 hover:text-[#121518] transition-colors"
          >
            About
          </a>
          <a
            href="#locations"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-neutral-100 hover:text-[#121518] transition-colors"
          >
            Locations
          </a>
          <a
            href="#careers"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-[#121518] transition-colors"
          >
            Careers
          </a>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. HERO SECTION (MASSIVE HEADLINE & UNIFIED CANVAS)      */}
      {/* ======================================================== */}
      <section className="relative w-full bg-white pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 relative min-h-[480px] md:min-h-[540px] lg:min-h-[620px] flex flex-col justify-center">
          
          {/* Main Massive Headline Content */}
          <div className="max-w-[720px] relative z-10">
            <h1 className="font-outfit font-black text-5xl sm:text-7xl md:text-8xl lg:text-[112px] xl:text-[124px] 2xl:text-[136px] leading-[0.88] tracking-[-0.04em] text-[#121518]">
              Freshly<br />
              Made<br />
            </h1>

            {/* Description with <br> matching exact mockup */}
            <p className="mt-6 text-neutral-600 sm:text-neutral-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed">
              Fresh ingredients, creative recipes,<br />
              and a whole lot of love in every bite.
            </p>

            {/* CTA Button & Spaced Horizontal Category Chips in One Harmonious Row */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8 mt-8">
              <button className="bg-[#121518] text-white text-xs sm:text-sm md:text-base font-bold px-7 sm:px-8 py-3.5 sm:py-4 rounded-full inline-flex items-center justify-center gap-2.5 cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors shrink-0 w-fit">
                <span>Order Now</span>
                <span className="text-sm sm:text-base">→</span>
              </button>

              <div className="flex items-center gap-4 sm:gap-6 text-[10px] sm:text-xs font-bold text-neutral-300 tracking-[0.22em] uppercase overflow-x-auto no-scrollbar py-1 shrink-0 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`cursor-pointer transition-colors whitespace-nowrap ${
                      activeCategory === cat ? "text-[#121518] font-black" : "hover:text-neutral-600"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Integrated Hero Mascot Canvas (Right Side of Same Background, NO border, NO shadow) */}
          <div className="relative md:absolute md:top-2 md:right-6 lg:right-8 mt-8 md:mt-0 flex flex-col items-center justify-center">
            <div className="relative w-[300px] sm:w-[380px] md:w-[460px] lg:w-[530px] xl:w-[580px] aspect-square flex items-center justify-center">
              <img
                src="/templates/tastybite/hero-ramen-mascot.webp"
                alt="TastyBite Ramen Bowl Mascot"
                className="w-full h-full object-contain block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. FULL-WIDTH SCALLOPED HIGHLIGHT RIBBON STRIP           */}
      {/* ======================================================== */}
      {/* Scroll-based animation using Framer Motion                */}
      {/* Single full-width strip image without split columns      */}
      <section ref={ribbonRef} className="relative w-full overflow-hidden my-6">
        
        {/* Pure UI Scalloped Top Wave with scroll-driven sideways sliding motion */}
        <div className="absolute top-0 left-0 w-full h-4 sm:h-5 overflow-hidden z-20 pointer-events-none">
          <motion.div
            style={{ x: xTop }}
            className="w-[calc(100%+320px)] h-full -ml-[160px]"
          >
            <svg className="w-full h-full block" preserveAspectRatio="none" viewBox="0 0 1200 20">
              <defs>
                <pattern id="ui-scallop-top" width="24" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 0 C 6 16, 18 16, 24 0 Z" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ui-scallop-top)" />
            </svg>
          </motion.div>
        </div>

        {/* Single Full Strip Image Asset (100% full bleed, seamless) */}
        <div className="w-full h-[180px] sm:h-[220px] md:h-[270px] lg:h-[320px] xl:h-[360px] relative z-10">
          <img
            src="/templates/tastybite/full-strip.webp"
            alt="TastyBite Specialties Strip"
            className="w-full h-full object-cover block"
            loading="lazy"
          />
        </div>

        {/* Pure UI Scalloped Bottom Wave with scroll-driven sideways sliding motion */}
        <div className="absolute bottom-0 left-0 w-full h-4 sm:h-5 overflow-hidden z-20 pointer-events-none">
          <motion.div
            style={{ x: xBottom }}
            className="w-[calc(100%+320px)] h-full -ml-[160px]"
          >
            <svg className="w-full h-full block" preserveAspectRatio="none" viewBox="0 0 1200 20">
              <defs>
                <pattern id="ui-scallop-bottom" width="24" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 0 20 C 6 4, 18 4, 24 20 Z" fill="#ffffff" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ui-scallop-bottom)" />
            </svg>
          </motion.div>
        </div>

      </section>

      {/* ======================================================== */}
      {/* 4. MORE THAN JUST FOOD (WHY TASTYBITE?)                   */}
      {/* ======================================================== */}
      <section id="about" className="w-full bg-white py-16 sm:py-24">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          
          {/* Top Row: Pill Tag + 2 Columns (Headline & Story Brief) */}
          <div>
            <div className="inline-block bg-[#f3f3f1] text-[#121518] text-xs font-bold px-4 py-1.5 rounded-full">
              Why TastyBite?
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div>
                <h2 className="font-outfit font-black text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-tight text-[#121518]">
                  More Than<br />
                  Just Food.
                </h2>
              </div>

              <div className="md:pt-3">
                <p className="text-neutral-600 text-base sm:text-lg leading-relaxed max-w-lg">
                  We're not just serving meals, we're creating experiences. From our fresh ingredients to our cozy spaces, every detail is made to make your day a little brighter.
                </p>
                <div className="mt-6">
                  <button className="bg-[#121518] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors">
                    <span>Our Story</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row: 4 Feature Items with pastel blob icons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mt-16 sm:mt-20">
            
            {/* 1. Fresh Ingredients */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 rounded-full bg-[#d1fae5] flex items-center justify-center text-[#059669] mb-5 shadow-xs">
                <Leaf className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Fresh Ingredients
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed mt-2">
                Only the freshest, highest quality ingredients.
              </p>
            </div>

            {/* 2. Creative Recipes */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 rounded-full bg-[#fce7f3] flex items-center justify-center text-[#db2777] mb-5 shadow-xs">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Creative Recipes
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed mt-2">
                Unique flavors, crafted with passion.
              </p>
            </div>

            {/* 3. Cozy Spaces */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#d97706] mb-5 shadow-xs">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Cozy Spaces
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed mt-2">
                A comfortable place for every moment.
              </p>
            </div>

            {/* 4. Great Service */}
            <div className="flex flex-col items-start">
              <div className="w-16 h-16 rounded-full bg-[#dbeafe] flex items-center justify-center text-[#2563eb] mb-5 shadow-xs">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Great Service
              </h3>
              <p className="text-neutral-600 text-sm sm:text-[15px] leading-relaxed mt-2">
                Friendly team, always ready for you.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SIGNATURE FAVORITES (OUR MENU)                        */}
      {/* ======================================================== */}
      <section id="menu" className="w-full bg-white py-16 sm:py-24">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          
          {/* Header Row */}
          <div>
            <div className="inline-block bg-[#f0f0ee] text-[#121518] text-xs font-bold px-4 py-1.5 rounded-full">
              Our Menu
            </div>

            <div className="flex items-end justify-between mt-3">
              <h2 className="font-outfit font-black text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-tight text-[#121518]">
                Signature<br className="sm:hidden" /> Favorites.
              </h2>
              <a
                href="#all-menu"
                className="text-sm sm:text-base font-bold text-neutral-600 hover:text-black inline-flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <span>View Full Menu</span>
                <span className="text-base sm:text-lg">↗</span>
              </a>
            </div>
          </div>

          {/* 4 Product Cards Grid matching the exact mockup */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 mt-12 sm:mt-14">
            
            {/* Card 1: Classic Burger */}
            <div className="flex flex-col justify-between">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xs bg-[#ffd4e0]">
                <img
                  src="/templates/tastybite/sig-burger.webp"
                  alt="Classic Burger"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex-1">
                <h4 className="font-outfit font-black text-lg sm:text-xl text-[#121518]">
                  Classic Burger
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm mt-1.5 leading-normal">
                  Juicy beef, fresh veggies, secret sauce.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-outfit font-black text-base sm:text-lg text-[#121518]">
                  $6.80
                </span>
                <button
                  aria-label="Add Classic Burger"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#121518] text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 2: Chicken Rice Bowl */}
            <div className="flex flex-col justify-between">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xs bg-[#ffea79]">
                <img
                  src="/templates/tastybite/sig-ricebowl.webp"
                  alt="Chicken Rice Bowl"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex-1">
                <h4 className="font-outfit font-black text-lg sm:text-xl text-[#121518]">
                  Chicken Rice Bowl
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm mt-1.5 leading-normal">
                  Tender chicken, savory rice, fresh greens.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-outfit font-black text-base sm:text-lg text-[#121518]">
                  $8.90
                </span>
                <button
                  aria-label="Add Chicken Rice Bowl"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#121518] text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Iced Latte */}
            <div className="flex flex-col justify-between">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xs bg-[#a2d8fc]">
                <img
                  src="/templates/tastybite/sig-latte.webp"
                  alt="Iced Latte"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex-1">
                <h4 className="font-outfit font-black text-lg sm:text-xl text-[#121518]">
                  Iced Latte
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm mt-1.5 leading-normal">
                  Smooth coffee, perfect for any time.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-outfit font-black text-base sm:text-lg text-[#121518]">
                  $3.80
                </span>
                <button
                  aria-label="Add Iced Latte"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#121518] text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 4: Strawberry Pancake */}
            <div className="flex flex-col justify-between">
              <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-xs bg-[#dacaff]">
                <img
                  src="/templates/tastybite/sig-pancake.webp"
                  alt="Strawberry Pancake"
                  className="w-full h-full object-cover block"
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex-1">
                <h4 className="font-outfit font-black text-lg sm:text-xl text-[#121518]">
                  Strawberry Pancake
                </h4>
                <p className="text-neutral-600 text-xs sm:text-sm mt-1.5 leading-normal">
                  Fluffy pancakes, fresh strawberries, maple syrup.
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-outfit font-black text-base sm:text-lg text-[#121518]">
                  $4.90
                </span>
                <button
                  aria-label="Add Strawberry Pancake"
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#121518] text-white flex items-center justify-center cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. HOW IT WORKS (SIMPLE STEPS) - FULL WINDOW EXPERIENCE  */}
      {/* ======================================================== */}
      <section id="how-it-works" className="w-full bg-white py-20 sm:py-28 lg:py-32 flex flex-col justify-center">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          
          {/* Top Header */}
          <div>
            <div className="inline-block bg-[#f3f3f1] text-[#121518] text-xs font-bold px-4 py-1.5 rounded-full">
              Simple Steps
            </div>

            <div className="mt-4 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <h2 className="font-outfit font-black text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] leading-[0.95] tracking-tight text-[#121518]">
                  How It<br />
                  Works.
                </h2>
              </div>
              <div className="flex flex-col sm:items-end gap-3.5">
                <p className="text-neutral-600 sm:text-neutral-600 text-base sm:text-lg font-medium">
                  Ordering your favorite food is easier than ever.
                </p>
                <button className="bg-[#121518] text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full inline-flex items-center gap-2 cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors">
                  <span>Order Now</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Steps Flow with large icons and connecting horizontal arrows */}
          <div className="mt-20 sm:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 relative">
            
            {/* Step 1: Choose Your Menu */}
            <div className="flex flex-col items-start relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#ffeef0] flex items-center justify-center text-[#ff4b72] mb-6 shadow-xs">
                <Phone className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Choose Your Menu
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-[220px] leading-relaxed">
                Browse our delicious options.
              </p>
              <div className="hidden lg:flex items-center justify-center absolute -right-6 top-11 sm:top-14 text-neutral-300 text-2xl font-light">
                →
              </div>
            </div>

            {/* Step 2: Place Your Order */}
            <div className="flex flex-col items-start relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#e3f2fd] flex items-center justify-center text-[#1e88e5] mb-6 shadow-xs">
                <ShoppingCart className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Place Your Order
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-[220px] leading-relaxed">
                Quick and easy checkout.
              </p>
              <div className="hidden lg:flex items-center justify-center absolute -right-6 top-11 sm:top-14 text-neutral-300 text-2xl font-light">
                →
              </div>
            </div>

            {/* Step 3: We Prepare It */}
            <div className="flex flex-col items-start relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#fff8e1] flex items-center justify-center text-[#f59e0b] mb-6 shadow-xs">
                <UtensilsCrossed className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                We Prepare It
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-[220px] leading-relaxed">
                Freshly made just for you.
              </p>
              <div className="hidden lg:flex items-center justify-center absolute -right-6 top-11 sm:top-14 text-neutral-300 text-2xl font-light">
                →
              </div>
            </div>

            {/* Step 4: Enjoy Your Meal */}
            <div className="flex flex-col items-start">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#e8f5e9] flex items-center justify-center text-[#2e7d32] mb-6 shadow-xs">
                <Package className="w-10 h-10 sm:w-12 sm:h-12 stroke-[2.2]" />
              </div>
              <h3 className="font-outfit font-black text-xl sm:text-2xl text-[#121518]">
                Enjoy Your Meal
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base mt-2 max-w-[220px] leading-relaxed">
                Delivered or ready for pickup.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. SMALL BITES, BIG DREAMS (OUR STORY SECTION)           */}
      {/* ======================================================== */}
      <section id="story" className="w-full bg-white py-18 sm:py-24 relative overflow-hidden">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Food Composition Asset (Clean on white canvas) */}
            <div className="lg:col-span-5 flex justify-center lg:justify-start">
              <div className="relative max-w-[360px] sm:max-w-[440px]">
                <img
                  src="/templates/tastybite/story-composition.webp"
                  alt="Food Brings People Together"
                  className="w-full h-auto object-contain block"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Middle Content */}
            <div className="lg:col-span-5">
              <div className="inline-block bg-[#f0f0ee] text-[#121518] text-xs font-bold px-4 py-1.5 rounded-full">
                Our Story
              </div>

              <h2 className="font-outfit font-black text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-tight text-[#121518] mt-4">
                Small Bites,<br />
                Big Dreams.
              </h2>

              <p className="text-neutral-600 text-base sm:text-lg leading-relaxed mt-5 max-w-lg">
                TastyBite started with a simple idea: good food brings people together. Since day one, we've been on a mission to serve fresh, delicious meals that make everyday moments special.
              </p>

              <div className="mt-8">
                <button className="bg-[#121518] text-white text-xs sm:text-sm font-bold px-6 sm:px-7 py-3.5 rounded-full inline-flex items-center gap-2 cursor-pointer shadow-sm hover:bg-neutral-800 transition-colors">
                  <span>Learn More</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Pink Bowl Mascot Floating (Clean on white canvas) */}
            <div className="lg:col-span-2 hidden lg:flex justify-end relative">
              <div className="relative w-36 h-36 sm:w-44 sm:h-44">
                <img
                  src="/templates/tastybite/story-pink-bowl.webp"
                  alt="TastyBite Pink Poke Bowl Mascot"
                  className="w-full h-full object-contain block"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 8. ORDER FASTER, EAT HAPPIER (GET OUR APP - PROTRUDING UI)*/}
      {/* ======================================================== */}
      {/* Mobile phone sticks out of container at top & bottom      */}
      {/* Store badges stacked vertically next to text              */}
      <section id="get-app" className="w-full bg-white py-16 sm:py-24 overflow-visible">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 overflow-visible">
          
          <div className="w-full rounded-[36px] sm:rounded-[44px] bg-[#d2ecfd] relative overflow-visible flex flex-col lg:flex-row items-center justify-between px-6 sm:px-10 lg:px-12 py-10 lg:py-12 shadow-xs">
            
            {/* Left: Tilted Smartphone Mockup Protruding OUT of container */}
            <div className="relative -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 -mb-10 sm:-mb-14 md:-mb-18 lg:-mb-22 w-[190px] sm:w-[230px] md:w-[260px] lg:w-[280px] xl:w-[310px] shrink-0 rotate-[-5deg] flex justify-center z-20">
              <img
                src="/templates/tastybite/app-phone.webp"
                alt="TastyBite Food App Phone Mockup"
                className="w-full h-auto object-contain block drop-shadow-xl"
                loading="lazy"
              />
            </div>

            {/* Middle: Text Content + Stacked Official Store Badges */}
            <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-8 my-8 lg:my-0 lg:px-8 xl:px-10 z-10 w-full text-center lg:text-left">
              
              {/* Text Area */}
              <div className="flex flex-col items-center lg:items-start max-w-md">
                <div className="inline-block bg-white/80 backdrop-blur-xs text-[#121518] text-xs font-bold px-4 py-1.5 rounded-full mb-3 shadow-2xs">
                  Get Our App
                </div>

                <h2 className="font-outfit font-black text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] leading-[1.0] tracking-tight text-[#121518]">
                  Order Faster,<br />
                  Eat Happier.
                </h2>

                <p className="text-neutral-600 text-sm sm:text-base mt-3 leading-relaxed">
                  Exclusive offers, easy ordering, and rewards just for you.
                </p>
              </div>

              {/* Stacked Official Store Badges (Positioned next to text) */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 items-center justify-center w-full sm:w-auto">
                {/* App Store Badge */}
                <a
                  href="#app-store"
                  className="bg-[#121518] text-white px-5 py-2.5 sm:py-3 rounded-2xl flex items-center gap-3 hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm w-[170px]"
                >
                  <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.98.6-2.62 1.34-.56.64-.99 1.7-0.86 2.73 1.01.08 2.03-.51 2.56-1.22z" />
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] text-neutral-600 font-normal">Download on the</span>
                    <span className="text-[14px] font-bold tracking-tight mt-1">App Store</span>
                  </div>
                </a>

                {/* Google Play Badge */}
                <a
                  href="#google-play"
                  className="bg-[#121518] text-white px-5 py-2.5 sm:py-3 rounded-2xl flex items-center gap-3 hover:bg-neutral-800 transition-colors cursor-pointer shadow-sm w-[170px]"
                >
                  <svg className="w-6 h-6 fill-current shrink-0" viewBox="0 0 24 24">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a1.996 1.996 0 0 1-.61-.383V2.197c.189-.147.399-.279.609-.383zm11.235 11.238l2.25 2.25-11.704 6.643 9.454-8.893zm0-2.104L5.39 2.055l11.704 6.643-2.25 2.25zm1.484 1.052l3.411 1.936a1.18 1.18 0 0 1 0 2.088l-3.411 1.936-2.023-2.023 2.023-2.037z" />
                  </svg>
                  <div className="flex flex-col text-left leading-none">
                    <span className="text-[10px] text-neutral-600 font-normal">GET IT ON</span>
                    <span className="text-[14px] font-bold tracking-tight mt-1">Google Play</span>
                  </div>
                </a>
              </div>

            </div>

            {/* Right: Cheerful Jumping Cup Mascot */}
            <div className="relative w-[160px] sm:w-[190px] md:w-[220px] lg:w-[240px] xl:w-[260px] shrink-0 mt-4 lg:mt-0 flex justify-center z-10">
              <img
                src="/templates/tastybite/app-cup.webp"
                alt="TastyBite Jumping Cup Mascot"
                className="w-full h-auto object-contain block drop-shadow-sm"
                loading="lazy"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 9. LOVED BY MANY (TESTIMONIALS)                          */}
      {/* ======================================================== */}
      <section className="w-full bg-white py-16 sm:py-24">
        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Headline */}
            <div className="lg:col-span-4">
              <div className="inline-block bg-[#f3f3f1] text-[#121518] text-xs font-bold px-4 py-1.5 rounded-full">
                What They Say
              </div>
              <h2 className="font-outfit font-black text-5xl sm:text-6xl lg:text-[72px] xl:text-[80px] leading-[0.95] tracking-tight text-[#121518] mt-4">
                Loved<br />
                by Many.
              </h2>
            </div>

            {/* Right Testimonial Card with Navigation */}
            <div className="lg:col-span-8 flex items-center gap-3 sm:gap-5">
              
              {/* Prev Button (Outside card) */}
              <button
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial"
                className="w-10 h-10 rounded-full border border-neutral-200 bg-white shadow-2xs flex items-center justify-center text-neutral-700 cursor-pointer hover:border-neutral-400 transition-colors shrink-0"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Card */}
              <div className="flex-1 bg-white border border-neutral-100 shadow-sm rounded-[32px] sm:rounded-[36px] p-7 sm:p-9 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-full overflow-hidden shrink-0 border border-neutral-200">
                  <img
                    src="/templates/tastybite/avatar-sarah.webp"
                    alt={testimonials[currentSlide].name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-neutral-700 text-sm sm:text-base font-medium leading-relaxed italic">
                    {testimonials[currentSlide].quote}
                  </p>
                  <div className="mt-4 flex items-center justify-center sm:justify-start gap-3">
                    <span className="font-outfit font-black text-sm sm:text-base text-[#121518]">
                      {testimonials[currentSlide].name}
                    </span>
                    <div className="flex items-center text-[#f59e0b]">
                      {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Next Button (Outside card) */}
              <button
                onClick={handleNextTestimonial}
                aria-label="Next Testimonial"
                className="w-10 h-10 rounded-full border border-neutral-200 bg-white shadow-2xs flex items-center justify-center text-neutral-700 cursor-pointer hover:border-neutral-400 transition-colors shrink-0"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

            </div>

          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  currentSlide === i ? "w-6 bg-[#121518]" : "w-2 bg-neutral-200"
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ======================================================== */}
      {/* 10. FOOTER WITH SCALLOPED TOP WAVE                      */}
      {/* ======================================================== */}
      <footer className="w-full bg-[#16181b] text-white relative pt-8 pb-10">
        
        {/* Scalloped Top Wave Edge for Footer (Pure UI SVG) */}
        <div className="absolute -top-3.5 left-0 w-full h-4 overflow-hidden leading-none z-10 pointer-events-none">
          <svg className="w-full h-4 text-[#16181b]" preserveAspectRatio="none" viewBox="0 0 1200 16">
            <defs>
              <pattern id="scallop-footer-pattern" width="24" height="16" patternUnits="userSpaceOnUse">
                <path d="M 0 16 C 6 4, 18 4, 24 16 Z" fill="#16181b" />
              </pattern>
            </defs>
            <rect width="100%" height="16" fill="url(#scallop-footer-pattern)" />
          </svg>
        </div>

        <div className="w-full max-w-[1240px] mx-auto px-5 sm:px-8 pt-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-neutral-800">
            
            {/* Col 1: Logo & Tagline */}
            <div className="md:col-span-4 flex flex-col items-start">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#16181b] shadow-sm">
                  <svg
                    className="w-5 h-5 text-[#16181b]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="3" />
                    <path d="M7 8h10" />
                    <path d="M7 12h5" />
                    <path d="M7 16h10" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-outfit font-extrabold text-[15px] sm:text-base leading-none text-white tracking-tight">
                    TastyBite
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-neutral-600 leading-none mt-1">
                    F&B Studio
                  </span>
                </div>
              </div>
              <p className="text-neutral-600 text-xs sm:text-[13px] mt-4 font-normal">
                Good food. Better mood.
              </p>
            </div>

            {/* Col 2: Menu */}
            <div className="md:col-span-2">
              <h4 className="font-outfit font-bold text-xs sm:text-sm text-neutral-200 tracking-wider">
                Menu
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-neutral-600 font-medium">
                <li><a href="#menu" className="hover:text-white transition-colors cursor-pointer">Burgers</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors cursor-pointer">Rice Bowls</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors cursor-pointer">Coffee</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors cursor-pointer">Desserts</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors cursor-pointer">Beverages</a></li>
              </ul>
            </div>

            {/* Col 3: About */}
            <div className="md:col-span-2">
              <h4 className="font-outfit font-bold text-xs sm:text-sm text-neutral-200 tracking-wider">
                About
              </h4>
              <ul className="mt-3 space-y-2 text-xs text-neutral-600 font-medium">
                <li><a href="#about" className="hover:text-white transition-colors cursor-pointer">Our Story</a></li>
                <li><a href="#locations" className="hover:text-white transition-colors cursor-pointer">Locations</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors cursor-pointer">Careers</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>

            {/* Col 4: Follow Us */}
            <div className="md:col-span-2">
              <h4 className="font-outfit font-bold text-xs sm:text-sm text-neutral-200 tracking-wider">
                Follow Us
              </h4>
              <div className="mt-3 flex items-center gap-2.5">
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-600 hover:text-white transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-600 hover:text-white transition-colors cursor-pointer"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-600 hover:text-white transition-colors cursor-pointer"
                >
                  <Twitter className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Col 5: Stay Updated */}
            <div className="md:col-span-2">
              <h4 className="font-outfit font-bold text-xs sm:text-sm text-neutral-200 tracking-wider">
                Stay Updated
              </h4>
              <div className="mt-3 relative flex items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full bg-[#22252a] text-neutral-200 text-xs px-3.5 py-2 rounded-full border border-neutral-700 focus:outline-none focus:border-neutral-400 pr-9"
                />
                <button
                  aria-label="Submit newsletter"
                  className="absolute right-1 w-6 h-6 rounded-full bg-white text-[#16181b] flex items-center justify-center cursor-pointer"
                >
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Legal / Copyright Bar */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-600 gap-3">
            <span>© 2025 TastyBite. All rights reserved.</span>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-neutral-600 transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-neutral-600 transition-colors cursor-pointer">
                Terms of Service
              </a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
