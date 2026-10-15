"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Clock, ArrowRight, Instagram, Facebook, Calendar, Users, X } from 'lucide-react';

interface LaTableEternelleLandingProps {
  lang?: 'id' | 'en';
}

export default function LaTableEternelleLanding({ lang = 'id' }: LaTableEternelleLandingProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Hero quick reservation state
  const [guestCount, setGuestCount] = useState('2');
  const [reservationDate, setReservationDate] = useState('2026-10-16');
  const [reservationTime, setReservationTime] = useState('19:30');
  const [guestName, setGuestName] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  const testimonials = [
    {
      id: 1,
      quote: lang === 'en'
        ? "“Every dish here is an evocative experience that awakens all the senses.”"
        : "“Setiap hidangan di sini adalah pengalaman yang menggugah semua indra.”",
      author: "Andi Pratama",
      role: lang === 'en' ? "Food Enthusiast" : "Food Enthusiast",
      avatar: "/templates/la-table-eternelle/avatar-andi.webp"
    },
    {
      id: 2,
      quote: lang === 'en'
        ? "“An unmatched atmosphere of intimacy, impeccable wine pairings, and culinary mastery.”"
        : "“Suasana keintiman yang tiada tanding, paduan anggur sempurna, dan keahlian kuliner sejati.”",
      author: "Clarissa Wijaya",
      role: lang === 'en' ? "Sommelier & Critic" : "Sommelier & Kritikus Kuliner",
      avatar: "/templates/la-table-eternelle/avatar-andi.webp"
    },
    {
      id: 3,
      quote: lang === 'en'
        ? "“The Wagyu Beef and Lobster Thermidor redefine the pinnacle of French fine dining.”"
        : "“Wagyu Beef dan Lobster Thermidor mendefinisikan ulang puncak cita rasa fine dining Prancis.”",
      author: "Bramantyo Salim",
      role: lang === 'en' ? "Executive Epicure" : "Pecinta Gastronomi",
      avatar: "/templates/la-table-eternelle/avatar-andi.webp"
    }
  ];

  const handlePrevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleBookTable = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const details = [
      `Halo La Table Éternelle, saya ingin melakukan reservasi meja:`,
      guestName ? `• Nama: ${guestName}` : '',
      `• Tanggal: ${reservationDate}`,
      `• Jam: ${reservationTime}`,
      `• Jumlah Tamu: ${guestCount} Orang`,
      specialRequest ? `• Catatan Khusus: ${specialRequest}` : ''
    ].filter(Boolean).join('\n');

    const message = encodeURIComponent(details);
    window.open(`https://wa.me/6289526770703?text=${message}`, '_blank');
    setIsModalOpen(false);
  };

  // Reusable typography inline style helpers to guarantee 100% font rendering
  const scriptStyle: React.CSSProperties = {
    fontFamily: "'Pinyon Script', cursive",
  };

  const serifLatinStyle: React.CSSProperties = {
    fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    fontStyle: 'italic',
  };

  const goldGradientStyle: React.CSSProperties = {
    ...serifLatinStyle,
    background: 'linear-gradient(135deg, #FFF6EC 0%, #E8C8A9 35%, #D4AF37 70%, #9F7244 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

  const scriptGoldStyle: React.CSSProperties = {
    ...scriptStyle,
    background: 'linear-gradient(135deg, #FFF6EC 0%, #E8C8A9 35%, #D4AF37 70%, #9F7244 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    display: 'inline-block',
  };

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-[#901513] selection:text-white font-sans antialiased overflow-x-hidden">
      
      {/* ========================================================= */}
      {/* 1. NAVIGATION BAR                                         */}
      {/* ========================================================= */}
      <nav className="absolute top-[41px] inset-x-0 z-40 px-6 sm:px-10 lg:px-16 py-6 bg-transparent">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo in Pinyon Script */}
          <a
            href="#home"
            style={scriptStyle}
            className="text-3xl sm:text-4xl text-white tracking-wide hover:opacity-90 transition-opacity cursor-pointer leading-none"
          >
            La Table Éternelle
          </a>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-7 lg:gap-10 text-[11px] tracking-[0.22em] uppercase font-medium text-neutral-300">
            <a href="#home" className="text-[#C5A880] flex items-center gap-1.5 cursor-pointer transition-colors">
              <span className="text-[9px]">•</span>
              <span>HOME</span>
              <span className="text-[9px]">•</span>
            </a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">
              OUR STORY
            </a>
            <a href="#menu" className="hover:text-white transition-colors cursor-pointer">
              MENU
            </a>
            <a href="#ambience" className="hover:text-white transition-colors cursor-pointer">
              GALLERY
            </a>
            <a href="#reservation" className="hover:text-white transition-colors cursor-pointer">
              RESERVATION
            </a>
          </div>

          {/* Book a table pill button */}
          <div className="flex items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="border border-neutral-400/70 hover:border-white text-white hover:bg-white hover:text-black rounded-full px-5 py-2 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              {lang === 'en' ? 'BOOK A TABLE' : 'BOOK A TABLE'}
            </button>
          </div>
        </div>
      </nav>

      {/* ========================================================= */}
      {/* 2. HERO SECTION (ALIGNED TO MAX-W-7XL CENTER GRID)        */}
      {/* ========================================================= */}
      <section id="home" className="relative min-h-[calc(100vh-41px)] flex flex-col justify-between pt-24 sm:pt-28 pb-5 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Full Hero Background Image */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/templates/la-table-eternelle/hero-bg.webp"
            alt="La Table Éternelle Dining Experience"
            className="w-full h-full object-cover object-[72%_center] md:object-center"
          />
          {/* Refined gradient: dark left vignette for text legibility, while letting the warm center dining table and ambient light emerge */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/92 via-[#080808]/45 to-transparent sm:via-[#080808]/30 max-w-5xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/25" />
        </div>

        {/* Hero Middle Content: Headline on Left, 50th Heritage Emblem on Right - Perfectly Centered in max-w-7xl mx-auto */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10 my-auto">
          {/* Left Column: Headline & Direct Booking CTAs */}
          <div className="max-w-xl xl:max-w-2xl py-6 sm:py-8">
            <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400 uppercase mb-4">
              {lang === 'en' ? 'FINE DINING EXPERIENCE' : 'FINE DINING EXPERIENCE'}
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[70px] font-medium text-white tracking-tight leading-[1.08] mb-5">
              Rasa yang<br />
              <span
                style={goldGradientStyle}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[86px] font-normal leading-[1.02] pr-4 drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
              >
                Menyatukan
              </span><br />
              Cerita
            </h1>

            <p className="text-neutral-300 text-sm md:text-[15px] leading-relaxed max-w-md mb-8">
              {lang === 'en' ? (
                <>
                  More than just dining.<br />
                  A sensory journey crafted for moments worthy of remembrance.
                </>
              ) : (
                <>
                  Lebih dari sekadar bersantap.<br />
                  Sebuah perjalanan rasa untuk momen yang layak dikenang.
                </>
              )}
            </p>

            {/* Action Row: Direct Book Button + Explore Menu */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">

              <a
                href="#menu"
                className="inline-flex items-center gap-3 group text-xs tracking-[0.22em] uppercase font-semibold text-neutral-300 hover:text-white cursor-pointer transition-colors py-2"
              >
                <span className="w-8 h-8 rounded-full border border-neutral-500/80 flex items-center justify-center text-xs group-hover:border-white group-hover:bg-white/10 transition-all duration-300">
                  →
                </span>
                <span>{lang === 'en' ? 'EXPLORE OUR MENU' : 'EXPLORE OUR MENU'}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 50th Anniversary Emblem + Editorial Heritage Note */}
          <div className="hidden lg:block absolute right-10 xl:right-16 bottom-20 select-none pointer-events-none z-10">
          <img
            src="/templates/la-table-eternelle/emblem-50th.png"
            alt="50th Anniversary"
            className="w-36 h-36 xl:w-40 xl:h-40 object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.8)]"
          />
          </div>
        </div>

      </section>

      {/* ========================================================= */}
      {/* 3. ABOUT US SECTION (UNCLIPPED, FULL WIDTH DISPLAY)       */}
      {/* ========================================================= */}
      <section id="about" className="relative bg-[#080808] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14">
          
          {/* Left: Text & Story */}
          <div className="w-full lg:max-w-md xl:max-w-lg flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400 uppercase mb-4">
              ABOUT US
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white tracking-tight leading-[1.12]">
              Tradisi Kuliner<br />
              dengan Sentuhan<br />
              <span
                style={goldGradientStyle}
                className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.05] pr-3"
              >
                Modern
              </span>
            </h2>

            {/* Red accent line */}
            <div className="w-10 h-[2px] bg-[#901513] my-6" />

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md mb-8">
              {lang === 'en'
                ? 'La Table Éternelle is a fine dining restaurant harmonizing classic French culinary art with the finest authentic Indonesian ingredients. We believe each dish is a work of art, meticulously curated to deliver an unforgettable journey.'
                : 'La Table Éternelle adalah restoran fine dining yang menghadirkan perpaduan cita rasa klasik Prancis dengan bahan-bahan terbaik dari Indonesia. Kami percaya bahwa setiap hidangan adalah sebuah karya seni, yang dirancang untuk memberikan pengalaman tak terlupakan.'}
            </p>

            <div>
              <a
                href="#ambience"
                className="text-xs tracking-[0.22em] uppercase font-semibold text-neutral-300 hover:text-white inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>OUR STORY</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Center & Right Container: Chef Plating + Classic Technique Tagline */}
          <div className="w-full lg:flex-1 flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-12">
            
            {/* Chef Plating Steak Photo */}
            <div className="overflow-hidden shadow-2xl max-w-[340px] sm:max-w-[300px] lg:max-w-[360px] w-full shrink-0">
              <img
                src="/templates/la-table-eternelle/about-chef.webp"
                alt="Chef seasoning Wagyu dish"
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>

            {/* Right: Vertical Tagline with left divider - GUARANTEED NO CLIPPING */}
            <div className="border-l border-neutral-800/80 pl-6 lg:pl-8 py-3 flex flex-col justify-center shrink-0">
              <p
                style={scriptGoldStyle}
                className="text-3xl sm:text-4xl lg:text-[46px] leading-[1.28] tracking-wide whitespace-nowrap"
              >
                Classic<br />
                Technique<br />
                Local<br />
                Ingredients
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SIGNATURE DISHES SECTION                               */}
      {/* ========================================================= */}
      <section id="menu" className="relative bg-[#080808] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Title Column */}
          <div className="lg:col-span-4 flex flex-col justify-start pt-2">
            <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400 uppercase mb-4">
              SIGNATURE DISHES
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white tracking-tight leading-[1.12]">
              Rasa Otentik<br />
              dalam Setiap<br />
              <span
                style={goldGradientStyle}
                className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.05] pr-3"
              >
                Hidangan
              </span>
            </h2>

            {/* Red accent line */}
            <div className="w-10 h-[2px] bg-[#901513] my-6" />

            <div className="mt-4">
              <a
                href="#reservation"
                className="text-xs tracking-[0.22em] uppercase font-semibold text-neutral-300 hover:text-white inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>VIEW FULL MENU</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right: 3 Dish Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Dish 1: Wagyu Beef */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-neutral-950 aspect-square">
                <img
                  src="/templates/la-table-eternelle/dish-wagyu.webp"
                  alt="Wagyu Beef"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-white text-base mt-4">Wagyu Beef</h3>
              <p className="text-xs text-neutral-400 mt-1">Truffle Jus, Seasonal Vegetables</p>
              <p className="text-xs font-medium text-neutral-200 mt-2.5 font-mono">IDR 1.250.000</p>
            </div>

            {/* Dish 2: Lobster Thermidor */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-neutral-950 aspect-square">
                <img
                  src="/templates/la-table-eternelle/dish-lobster.webp"
                  alt="Lobster Thermidor"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-white text-base mt-4">Lobster Thermidor</h3>
              <p className="text-xs text-neutral-400 mt-1">Herbs, Lemon, Cream Sauce</p>
              <p className="text-xs font-medium text-neutral-200 mt-2.5 font-mono">IDR 980.000</p>
            </div>

            {/* Dish 3: Dark Chocolate Mousse */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden bg-neutral-950 aspect-square">
                <img
                  src="/templates/la-table-eternelle/dish-mousse.webp"
                  alt="Dark Chocolate Mousse"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-white text-base mt-4">Dark Chocolate Mousse</h3>
              <p className="text-xs text-neutral-400 mt-1">Raspberry, Vanilla Ice Cream</p>
              <p className="text-xs font-medium text-neutral-200 mt-2.5 font-mono">IDR 220.000</p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. THE AMBIENCE SECTION                                   */}
      {/* ========================================================= */}
      <section id="ambience" className="relative bg-[#080808] py-24 sm:py-32 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Wide Restaurant Ambience Photo */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden shadow-2xl">
              <img
                src="/templates/la-table-eternelle/ambience.webp"
                alt="La Table Éternelle Restaurant Ambience"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
          </div>

          {/* Right: Text & Details */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400 uppercase mb-4">
              THE AMBIENCE
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white tracking-tight leading-[1.12]">
              Suasana Elegan<br />
              untuk Momen<br />
              <span
                style={goldGradientStyle}
                className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.05] pr-3"
              >
                Istimewa
              </span>
            </h2>

            <p className="text-neutral-400 text-sm leading-relaxed max-w-md mt-6 mb-8">
              {lang === 'en'
                ? 'With luxurious interior craftsmanship and intimate warm illumination, La Table Éternelle crafts an enchanting, exclusive ambiance for every distinguished guest.'
                : 'Dengan desain interior yang mewah dan pencahayaan yang hangat, La Table Éternelle menciptakan suasana intim dan eksklusif untuk setiap tamu.'}
            </p>

            <div>
              <a
                href="#reservation"
                className="text-xs tracking-[0.22em] uppercase font-semibold text-neutral-300 hover:text-white inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <span>THE GALLERY</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. TESTIMONIAL SECTION                                    */}
      {/* ========================================================= */}
      <section className="relative bg-[#080808] py-20 sm:py-28 px-6 sm:px-10 lg:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Quote & Reviewer */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Red accent line */}
            <div className="w-10 h-[2px] bg-[#901513] mb-8" />

            <blockquote
              style={serifLatinStyle}
              className="text-2xl sm:text-3xl lg:text-[38px] text-white font-normal leading-snug mb-10 max-w-xl"
            >
              {testimonials[currentTestimonial].quote}
            </blockquote>

            {/* Author info + carousel navigation */}
            <div className="flex items-center justify-between max-w-xl border-t border-neutral-900 pt-6">
              <div className="flex items-center gap-3.5">
                <img
                  src={testimonials[currentTestimonial].avatar}
                  alt={testimonials[currentTestimonial].author}
                  className="w-10 h-10 rounded-full object-cover border border-neutral-700/80"
                />
                <div>
                  <p className="text-sm font-semibold text-white leading-tight">
                    {testimonials[currentTestimonial].author}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>

              {/* Carousel controls */}
              <div className="flex items-center gap-3 text-xs font-mono text-neutral-400">
                <button
                  onClick={handlePrevTestimonial}
                  aria-label="Previous Testimonial"
                  className="hover:text-white transition-colors cursor-pointer p-1"
                >
                  &lt;
                </button>
                <span>
                  0{currentTestimonial + 1} / 0{testimonials.length}
                </span>
                <button
                  onClick={handleNextTestimonial}
                  aria-label="Next Testimonial"
                  className="hover:text-white transition-colors cursor-pointer p-1"
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>

          {/* Right: Plating Tweezers Macro Photo */}
          <div className="lg:col-span-5 flex justify-end">
            <div className="overflow-hidden shadow-2xl w-full">
              <img
                src="/templates/la-table-eternelle/testimonial-dish.webp"
                alt="Culinary tweezers garnish"
                className="w-full h-auto object-cover aspect-[16/10]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. RESERVATION SECTION                                    */}
      {/* ========================================================= */}
      <section id="reservation" className="relative bg-[#080808] py-24 sm:py-32 px-6 sm:px-10 lg:px-16 overflow-hidden">
        {/* Reservation Background Texture with Crimson Ribbon on left */}
        <div className="absolute inset-0 pointer-events-none select-none">
          <img
            src="/templates/la-table-eternelle/reservation-bg.webp"
            alt="Reservation Background Texture"
            className="w-full h-full object-cover object-left md:object-center opacity-85"
          />
          <div className="absolute inset-0 bg-[#080808]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Form / CTA Info */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <p className="text-[11px] font-medium tracking-[0.28em] text-neutral-400 uppercase mb-4">
              RESERVATION
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-medium text-white tracking-tight leading-[1.12] mb-4">
              Saatnya Merasakan<br />
              Pengalaman{' '}
              <span
                style={goldGradientStyle}
                className="text-4xl sm:text-5xl lg:text-[58px] font-normal leading-[1.05] pr-3"
              >
                Istimewa
              </span>
            </h2>

            <p className="text-neutral-300 text-sm leading-relaxed max-w-md mb-8">
              {lang === 'en'
                ? 'Reserve your private table now and embark on an unforgettable sensory journey at La Table Éternelle.'
                : 'Pesan meja Anda sekarang dan nikmati perjalanan rasa yang tak terlupakan di La Table Éternelle.'}
            </p>

            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-3 bg-[#761314] hover:bg-[#901513] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-red-950/60 cursor-pointer"
              >
                <span>BOOK A TABLE</span>
                <span>→</span>
              </button>
            </div>
          </div>

          {/* Right: Contact Information with vertical divider */}
          <div className="lg:col-span-5 border-l border-neutral-800/80 pl-8 lg:pl-12 space-y-6">
            
            {/* Address */}
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" />
              <div className="text-xs text-neutral-300 leading-relaxed">
                <p>Jl. Senopati No. 88</p>
                <p>Jakarta Selatan, Indonesia</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-neutral-400 shrink-0" />
              <div className="text-xs text-neutral-300 font-mono">
                <p>+62 21 1234 5678</p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-neutral-400 shrink-0" />
              <div className="text-xs text-neutral-300">
                <p>Everyday 11.00 - 23.00</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 8. FOOTER                                                 */}
      {/* ========================================================= */}
      <footer className="bg-[#050505] py-10 px-6 sm:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left: Script Logo */}
          <a
            href="#home"
            style={scriptStyle}
            className="text-3xl text-white tracking-wide hover:opacity-90 transition-opacity cursor-pointer leading-none"
          >
            La Table Éternelle
          </a>

          {/* Center: Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] tracking-[0.2em] uppercase font-medium text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors cursor-pointer">HOME</a>
            <a href="#menu" className="hover:text-white transition-colors cursor-pointer">MENU</a>
            <a href="#about" className="hover:text-white transition-colors cursor-pointer">OUR STORY</a>
            <a href="#ambience" className="hover:text-white transition-colors cursor-pointer">GALLERY</a>
            <a href="#reservation" className="hover:text-white transition-colors cursor-pointer">RESERVATION</a>
          </div>

          {/* Right: Social Icons & City Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-4 text-neutral-400">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors cursor-pointer">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors cursor-pointer">
                <Facebook className="w-4 h-4" />
              </a>
              {/* TikTok Custom SVG */}
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:text-white transition-colors cursor-pointer">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
            <span className="text-[11px] text-neutral-500 font-medium">
              Fine Dining • Jakarta, Indonesia
            </span>
          </div>

        </div>
      </footer>

      {/* ========================================================= */}
      {/* 9. LUXURY RESERVATION MODAL                               */}
      {/* ========================================================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0e0e0e] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">Table Reservation</p>
              <h3 className="text-2xl font-medium text-white mt-1">La Table Éternelle</h3>
              <p className="text-xs text-neutral-400 mt-1">
                {lang === 'en'
                  ? 'Reserve your fine dining experience. Our concierge will confirm immediately via WhatsApp.'
                  : 'Pesan meja makan malam eksklusif Anda. Concierge kami akan segera mengonfirmasi melalui WhatsApp.'}
              </p>
            </div>

            <form onSubmit={handleBookTable} className="space-y-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-1.5">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Andi Pratama"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-1.5">Tanggal</label>
                  <input
                    type="date"
                    required
                    value={reservationDate}
                    onChange={(e) => setReservationDate(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-1.5">Jam</label>
                  <select
                    value={reservationTime}
                    onChange={(e) => setReservationTime(e.target.value)}
                    className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                  >
                    <option value="18:00">18:00 WIB</option>
                    <option value="19:00">19:00 WIB</option>
                    <option value="19:30">19:30 WIB</option>
                    <option value="20:00">20:00 WIB</option>
                    <option value="21:00">21:00 WIB</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-1.5">Jumlah Tamu</label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-[#D4AF37] cursor-pointer"
                >
                  <option value="1">1 Orang</option>
                  <option value="2">2 Orang (Romantic / Business)</option>
                  <option value="4">4 Orang (Dining Group)</option>
                  <option value="6">6 Orang (Family & Friends)</option>
                  <option value="8+">Private Dining Room (8+ Orang)</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-neutral-300 mb-1.5">Permintaan Khusus / Alergi (Opsional)</label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Meja dekat jendela, anniversary surprise, alergi kacang..."
                  value={specialRequest}
                  onChange={(e) => setSpecialRequest(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded-xl px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#761314] hover:bg-[#901513] text-white py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-red-950/60 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>KONFIRMASI RESERVASI VIA WHATSAPP</span>
                  <span>→</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
