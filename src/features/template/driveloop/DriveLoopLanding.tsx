"use client";

import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Car,
  Compass,
  MapPin,
  Calendar,
  Star,
  Play,
  X,
  Instagram,
  Facebook,
  Youtube,
  Maximize2,
  Tag,
  Eye,
  LifeBuoy,
  Timer,
  KeyRound,
  Headphones,
  ShieldCheck,
  Check,
} from "lucide-react";

interface DriveLoopLandingProps {
  lang?: "id" | "en";
}

interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  description: { id: string; en: string };
  pricePerDay: number;
  image: string;
  seats: number;
  transmission: string;
  fuel: string;
}

export default function DriveLoopLanding({ lang = "id" }: DriveLoopLandingProps) {
  const isEn = lang === "en";

  // Parallax Hero Motion Transforms (Standard vertical scroll parallax, no zoom)
  const { scrollY } = useScroll();
  const heroParallaxY = useTransform(scrollY, [0, 800], [0, 160]);

  // Lightbox / Video Modal State
  const [selectedVehicle, setSelectedVehicle] = useState<FleetVehicle | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Booking Form State
  const [tripType, setTripType] = useState<"round" | "oneway">("round");
  const [pickupLocation, setPickupLocation] = useState("Lombok Airport (LOP)");
  const [dropoffLocation, setDropoffLocation] = useState("Senggigi Center");
  const [pickupDate, setPickupDate] = useState("2026-10-20");
  const [dropoffDate, setDropoffDate] = useState("2026-10-25");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  // Testimonial State
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const testimonials = [
    {
      id: 1,
      quote: isEn
        ? "The car was in perfect condition, and the booking process was super easy. We had an amazing trip around Lombok. Highly recommended!"
        : "Mobilnya dalam kondisi prima, dan proses sewanya sangat mudah tanpa kendala. Kami menikmati perjalanan tak terlupakan di Lombok. Sangat direkomendasikan!",
      author: "Andi Pratama",
      location: "Jakarta",
      avatar: "/templates/driveloop/avatar-andi.webp",
      rating: 5,
    },
    {
      id: 2,
      quote: isEn
        ? "Driving the 4x4 up to Bromo sunrise point was seamless. The vehicle handled steep gravel roads effortlessly. Unbeatable adventure service!"
        : "Menyetir 4x4 sampai ke sunrise point Bromo sangat mulus. Mobil melewati tanjakan bebatuan dengan sangat bertenaga. Servis luar biasa!",
      author: "Budi Santoso",
      location: "Surabaya",
      avatar: "/templates/driveloop/avatar-andi.webp",
      rating: 5,
    },
    {
      id: 3,
      quote: isEn
        ? "Exceptional 24/7 support. When our flight was delayed by 3 hours, DriveLoop rescheduled our pickup immediately with zero penalty."
        : "Layanan support 24 jam sangat solutif. Waktu penerbangan kami delay 3 jam, tim DriveLoop langsung menyesuaikan jam penjemputan tanpa biaya tambahan.",
      author: "Rina Wijaya",
      location: "Bandung",
      avatar: "/templates/driveloop/avatar-andi.webp",
      rating: 5,
    },
  ];

  const fleetVehicles: FleetVehicle[] = [
    {
      id: "city-car",
      name: "City Car",
      category: "Compact Hatchback",
      description: {
        id: "Pilihan lincah dan hemat bahan bakar untuk keliling kota dan liburan akhir pekan.",
        en: "Perfect for urban trips and short getaways.",
      },
      pricePerDay: 35,
      image: "/templates/driveloop/fleet-city-car.webp",
      seats: 5,
      transmission: "Automatic",
      fuel: "Petrol",
    },
    {
      id: "suv",
      name: "SUV",
      category: "Premium Crossover",
      description: {
        id: "Kenyamanan ekstra, bagasi luas, dan kabin lega untuk perjalanan bersama keluarga.",
        en: "More space, more comfort for your family and friends.",
      },
      pricePerDay: 60,
      image: "/templates/driveloop/fleet-suv.webp",
      seats: 7,
      transmission: "Automatic",
      fuel: "Diesel",
    },
    {
      id: "4x4",
      name: "4x4 / Off-Road",
      category: "Rugged 4WD Adventure",
      description: {
        id: "Dirancang tangguh untuk menaklukkan jalur terjal, pasir pantai, dan medan pegunungan.",
        en: "Built for adventure, ready for any terrain.",
      },
      pricePerDay: 85,
      image: "/templates/driveloop/fleet-4x4.webp",
      seats: 5,
      transmission: "4WD Manual/Auto",
      fuel: "Diesel Turbo",
    },
    {
      id: "van",
      name: "Van",
      category: "Spacious Minibus",
      description: {
        id: "Solusi perjalanan rombongan besar dengan kabin lapang dan bagasi berkapasitas ekstra.",
        en: "For bigger groups and more stories.",
      },
      pricePerDay: 100,
      image: "/templates/driveloop/fleet-van.webp",
      seats: 12,
      transmission: "Manual",
      fuel: "Diesel",
    },
  ];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    const textMsg = encodeURIComponent(
      `Halo DriveLoop! Saya ingin menyewa kendaraan:\n` +
        `• Tipe Perjalanan: ${tripType === "round" ? "Pick-up & Drop-off" : "One Way"}\n` +
        `• Lokasi Jemput: ${pickupLocation}\n` +
        `• Lokasi Kembali: ${dropoffLocation}\n` +
        `• Tanggal: ${pickupDate} s/d ${dropoffDate}\n\n` +
        `Mohon konfirmasi ketersediaan unit dan penawaran terbaiknya.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/6289526770703?text=${textMsg}`, "_blank");
      setBookingSuccess(false);
    }, 600);
  };

  const handlePrevTestimonial = () => {
    setTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNextTestimonial = () => {
    setTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="driveloop-scope w-full bg-[#0B0F17] text-white font-sans antialiased overflow-x-clip selection:bg-[#2563EB] selection:text-white">
      {/* =========================================================================
          SECTION 1: HERO & NAVBAR
          ========================================================================= */}
      <section
        id="hero"
        className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden isolate"
        style={{ minHeight: "100vh" }}
      >
        {/* Background Image & Cinematic Parallax Effect (Pure vertical parallax, no zoom, comfortable car framing) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <motion.div
            style={{ y: heroParallaxY }}
            className="w-full h-full relative will-change-transform"
          >
            <img
              src="/templates/driveloop/hero-bg.webp"
              alt="DriveLoop Alpine Mountain Adventure with Off-road SUV"
              className="w-full h-full object-cover object-[75%_center] sm:object-[80%_bottom] select-none"
              loading="eager"
            />
          </motion.div>
          {/* Subtle vignette & left readability gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F17]/80 via-transparent to-black/30 pointer-events-none" />
        </div>

        {/* Floating Top Navigation */}
        <header className="relative z-10 w-full pt-6 sm:pt-8 pb-4">
          <div className="max-w-[1360px] mx-auto px-6 sm:px-12 flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="flex items-center gap-2.5 group cursor-pointer"
              aria-label="DriveLoop Home"
            >
              <div className="w-8 h-8 text-white flex items-center justify-center">
                <svg
                  viewBox="0 0 36 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-white"
                >
                  <path
                    d="M18 2L32 23H4L18 2Z"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M11 23C13.5 16 22.5 16 25 23"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="18" cy="11" r="2.2" fill="currentColor" />
                </svg>
              </div>
              <span className="text-[16px] sm:text-[17px] font-bold tracking-[0.24em] text-white font-sans uppercase">
                DRIVELOOP
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13px] font-normal text-white/85">
              <a
                href="#hero"
                className="text-white hover:text-white transition-colors cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:right-0 after:h-[1.5px] after:bg-white"
              >
                {isEn ? "Home" : "Home"}
              </a>
              <a
                href="#fleet"
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isEn ? "Vehicles" : "Vehicles"}
              </a>
              <a
                href="#freedom"
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isEn ? "About Us" : "About Us"}
              </a>
              <a
                href="#freedom"
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isEn ? "Rental Guide" : "Rental Guide"}
              </a>
              <a
                href="#stories"
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isEn ? "Blog" : "Blog"}
              </a>
              <a
                href="#footer"
                className="hover:text-white transition-colors cursor-pointer py-1"
              >
                {isEn ? "Contact" : "Contact"}
              </a>
            </nav>

            {/* Right Action Button */}
            <div className="flex items-center gap-3">
              <a
                href="#booking"
                className="driveloop-pill hidden sm:inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-[13px] px-5 sm:px-6 py-2.5 shadow-md transition-all duration-200 active:scale-[0.98] cursor-pointer"
                style={{ borderRadius: "9999px" }}
              >
                <span>{isEn ? "Book Now" : "Book Now"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="driveloop-circle md:hidden w-9 h-9 bg-white/10 border border-white/20 text-white flex items-center justify-center cursor-pointer"
                style={{ borderRadius: "50%" }}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4" />
                ) : (
                  <div className="space-y-1 w-4">
                    <div className="h-0.5 bg-white w-full rounded-full" />
                    <div className="h-0.5 bg-white w-full rounded-full" />
                  </div>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Drawer */}
          {mobileMenuOpen && (
            <div
              className="md:hidden mt-3 mx-4 p-5 bg-[#0F1522]/95 border border-white/15 backdrop-blur-xl shadow-2xl flex flex-col gap-3 text-sm"
              style={{ borderRadius: "18px" }}
            >
              <a
                href="#hero"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white font-medium border-b border-white/10"
              >
                Home
              </a>
              <a
                href="#fleet"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white/80 hover:text-white border-b border-white/10"
              >
                Vehicles
              </a>
              <a
                href="#freedom"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white/80 hover:text-white border-b border-white/10"
              >
                About Us
              </a>
              <a
                href="#freedom"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white/80 hover:text-white border-b border-white/10"
              >
                Rental Guide
              </a>
              <a
                href="#stories"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white/80 hover:text-white border-b border-white/10"
              >
                Blog
              </a>
              <a
                href="#footer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-white/80 hover:text-white"
              >
                Contact
              </a>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="driveloop-pill mt-2 text-center py-2.5 bg-[#2563EB] text-white font-semibold text-xs"
                style={{ borderRadius: "9999px" }}
              >
                Book Now ↗
              </a>
            </div>
          )}
        </header>

        {/* Hero Center Content */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-12 my-auto py-8 sm:py-16">
          <div className="max-w-xl text-left">
            {/* Eyebrow */}
            <div className="text-[12.5px] sm:text-[13.5px] font-normal text-white/85 tracking-wide mb-3">
              Your Journey, Our Drive
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.08] tracking-[-0.03em] mb-4">
              Premium Car Rental
              <br />
              for Every Adventure
            </h1>

            {/* Subtitle */}
            <p className="text-[13.5px] sm:text-[15px] font-normal text-white/80 leading-relaxed max-w-[460px] mb-8">
              From city getaways to mountain trails, choose from our wide range of
              well-maintained vehicles and explore more, worry-less.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center flex-wrap gap-3.5">
              <a
                href="#booking"
                className="driveloop-pill inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-[13.5px] px-6 py-3 shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                style={{ borderRadius: "9999px" }}
              >
                <span>{isEn ? "Rent a Car" : "Rent a Car"}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#fleet"
                className="driveloop-pill inline-flex items-center gap-2 bg-black/25 hover:bg-black/40 backdrop-blur-sm border border-white/30 text-white font-medium text-[13.5px] px-5 sm:px-6 py-3 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                style={{ borderRadius: "9999px" }}
              >
                <span>{isEn ? "Explore Our Fleet" : "Explore Our Fleet"}</span>
                <ArrowRight className="w-4 h-4 text-white/80" />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Bar */}
        <div className="relative z-10 w-full max-w-[1360px] mx-auto px-6 sm:px-12 pb-8 sm:pb-10 flex items-center justify-between">
          {/* Watch Journey Trigger */}
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(true)}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Watch Our Journey Video"
          >
            <div
              className="driveloop-circle w-10 h-10 border border-white/60 bg-black/20 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2563EB] group-hover:border-white"
              style={{ borderRadius: "50%" }}
            >
              <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
            </div>
            <div className="text-left">
              <span className="text-[13px] font-medium text-white block leading-tight transition-colors group-hover:text-white">
                Watch Our Journey
              </span>
              <span className="text-[11px] text-white/60 block">2 min</span>
            </div>
          </button>

          {/* Slider Pagination Indicator */}
          <div className="flex items-center gap-3 font-mono text-xs font-medium text-white/75">
            <span className="text-white font-bold">01</span>
            <div className="w-16 sm:w-20 h-[1.5px] bg-white/30 relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1/3 bg-white" />
            </div>
            <span>04</span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: OUR FLEET ("Find The Perfect Ride For Your Next Trip")
          ========================================================================= */}
      <section
        id="fleet"
        className="w-full bg-[#EAECEE] text-[#111827] py-20 sm:py-28 px-6 sm:px-12 transition-colors"
      >
        <div className="max-w-[1360px] mx-auto">
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 pb-12">
            {/* Left Header */}
            <div className="max-w-xl text-left">
              <span className="block text-[11px] font-bold font-mono uppercase tracking-[0.22em] text-[#6B7280] mb-2">
                OUR FLEET
              </span>
              <h2 className="text-3xl sm:text-[40px] font-bold text-[#111827] leading-[1.12] tracking-tight">
                Find The Perfect Ride
                <br />
                For Your Next Trip
              </h2>
              <p className="text-sm sm:text-[14.5px] text-[#4B5563] font-normal leading-relaxed mt-3.5 max-w-md">
                From compact cars to rugged 4x4s, we have the right vehicle for
                every destination and every kind of journey.
              </p>
              <a
                href="#booking"
                className="inline-flex items-center gap-2 text-[#2563EB] hover:text-blue-700 font-medium text-[13.5px] mt-4 transition-colors cursor-pointer group"
              >
                <span>View All Vehicles</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Features Row: Large icons without circular wrappers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-7 sm:gap-10 lg:pt-3">
              {/* Feature 1: Large Eye / Speedometer icon */}
              <div className="flex flex-col items-start gap-3 text-left">
                <Eye className="w-8 h-8 text-[#111827] stroke-[1.6]" />
                <span className="text-[12.5px] font-medium leading-snug text-[#1F2937]">
                  Well Maintained
                  <br />
                  Vehicles
                </span>
              </div>

              {/* Feature 2: Large Lifebuoy Roadside Assistance icon */}
              <div className="flex flex-col items-start gap-3 text-left">
                <LifeBuoy className="w-8 h-8 text-[#111827] stroke-[1.6]" />
                <span className="text-[12.5px] font-medium leading-snug text-[#1F2937]">
                  24/7 Roadside
                  <br />
                  Assistance
                </span>
              </div>

              {/* Feature 3: Large Flexible Rental Periods Timer icon */}
              <div className="flex flex-col items-start gap-3 text-left">
                <Timer className="w-8 h-8 text-[#111827] stroke-[1.6]" />
                <span className="text-[12.5px] font-medium leading-snug text-[#1F2937]">
                  Flexible Rental
                  <br />
                  Periods
                </span>
              </div>

              {/* Feature 4: Large Easy Booking Key icon */}
              <div className="flex flex-col items-start gap-3 text-left">
                <KeyRound className="w-8 h-8 text-[#111827] stroke-[1.6]" />
                <span className="text-[12.5px] font-medium leading-snug text-[#1F2937]">
                  Easy Booking
                  <br />
                  Process
                </span>
              </div>
            </div>
          </div>

          {/* Vehicle Cards Grid: BORDERLESS cards with clean rounded corners */}
          <div className="relative mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {fleetVehicles.map((vehicle) => (
                <div
                  key={vehicle.id}
                  onClick={() => setSelectedVehicle(vehicle)}
                  className="driveloop-card group relative aspect-[4/3] sm:aspect-[3/4.5] overflow-hidden bg-black shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-end p-5 cursor-pointer border-0 border-none"
                  style={{ borderRadius: "20px" }}
                >
                  {/* Vehicle Image */}
                  <img
                    src={vehicle.image}
                    alt={vehicle.name}
                    className="absolute inset-0 w-full h-full object-cover select-none transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/40 to-transparent pointer-events-none" />

                  {/* Inspect Icon */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVehicle(vehicle);
                    }}
                    className="driveloop-circle absolute top-3.5 right-3.5 z-20 w-8 h-8 bg-black/40 backdrop-blur-md border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-[#2563EB] transition-opacity duration-200 cursor-pointer"
                    style={{ borderRadius: "50%" }}
                    title="Buka gambar mobil full window"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>

                  {/* Card Content at bottom */}
                  <div className="relative z-10 text-white text-left">
                    <h3 className="text-xl sm:text-[21px] font-bold text-white tracking-tight leading-snug">
                      {vehicle.name}
                    </h3>
                    <p className="text-[12px] text-white/80 font-normal leading-relaxed mt-1 line-clamp-2">
                      {isEn ? vehicle.description.en : vehicle.description.id}
                    </p>

                    {/* Price & Action Row */}
                    <div className="mt-3.5 pt-3.5 border-t border-white/15 flex items-center justify-between">
                      <div className="text-[13px] font-medium text-white/95">
                        <span className="font-semibold text-white">
                          From ${vehicle.pricePerDay}
                        </span>
                        <span className="text-xs text-white/60 ml-1">/ day</span>
                      </div>

                      <button
                        type="button"
                        className="driveloop-circle w-7 h-7 bg-white/10 hover:bg-[#2563EB] backdrop-blur-sm border border-white/20 group-hover:border-[#2563EB] text-white flex items-center justify-center transition-all duration-200 group-hover:scale-105 cursor-pointer"
                        style={{ borderRadius: "50%" }}
                        aria-label={`Details of ${vehicle.name}`}
                      >
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Side Navigation Chevron Controls (Desktop) */}
            <div className="hidden xl:flex flex-col gap-2 absolute -right-10 top-1/2 -translate-y-1/2">
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("fleet");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="driveloop-circle w-8 h-8 bg-white/90 hover:bg-white text-[#4B5563] hover:text-[#111827] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
                style={{ borderRadius: "50%" }}
                aria-label="Previous Vehicle"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById("freedom");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="driveloop-circle w-8 h-8 bg-white/90 hover:bg-white text-[#4B5563] hover:text-[#111827] shadow-sm flex items-center justify-center transition-colors cursor-pointer"
                style={{ borderRadius: "50%" }}
                aria-label="Next Vehicle"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          UNIFIED SECTION: FROM "MORE THAN JUST A RENTAL" TO "READY FOR YOUR NEXT TRIP?"
          Sticky Full-Window Background (real-stories-bg.webp)
          ========================================================================= */}
      <div className="relative w-full">
        {/* Sticky Full-Window Background */}
        <div className="sticky top-0 h-screen w-full pointer-events-none z-0 overflow-hidden">
          <img
            src="/templates/driveloop/real-stories-bg.webp"
            alt="Travelers enjoying road trip on car roof in alpine mountains"
            className="w-full h-full object-cover object-[center_55%] select-none brightness-100 filter"
            loading="eager"
            decoding="async"
          />
          {/* Subtle ambient darkening vignette to ensure high legibility of content across all sections */}
          <div className="absolute inset-0 bg-black/45 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/50 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0B0F17]/80 to-transparent pointer-events-none" />
        </div>

        {/* Content scrolling over the sticky background */}
        <div className="relative z-10 -mt-[100vh]">
          {/* =========================================================================
              SECTION 3: MORE THAN JUST A RENTAL (Full-Window over Sticky Landscape)
              ========================================================================= */}
          <section
            id="freedom"
            className="w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 flex items-center"
          >
            <div className="max-w-[1360px] mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Column: Copywriting & 3 Clean Minimal Items */}
                <div className="lg:col-span-6 text-left space-y-7">
                  <div>
                    <span className="block text-[11px] font-bold font-mono uppercase tracking-[0.22em] text-white/80 mb-2.5 drop-shadow">
                      MORE THAN JUST A RENTAL
                    </span>
                    <h2 className="text-3xl sm:text-[42px] font-bold text-white leading-[1.12] tracking-tight drop-shadow-md">
                      It's Your Freedom
                      <br />
                      to Explore
                    </h2>
                    <p className="text-sm sm:text-[14.5px] text-white/90 font-normal leading-relaxed mt-3.5 max-w-md drop-shadow">
                      We believe every journey creates a better you. With reliable
                      cars and flexible plans, your next adventure is always within
                      reach.
                    </p>
                  </div>

                  {/* 3 Key Pillar Features - Clean & Minimalist (No chunky AI-slop card borders) */}
                  <div className="space-y-6 pt-2">
                    {/* Item 1 */}
                    <div className="flex items-center gap-4">
                      <div
                        className="driveloop-circle w-10 h-10 rounded-full border border-white/35 bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 text-white"
                        style={{ borderRadius: "50%" }}
                      >
                        <Car className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[14.5px] font-semibold text-white leading-tight drop-shadow-sm">
                          Reliable Fleet
                        </h4>
                        <p className="text-[12.5px] text-white/75 font-normal mt-0.5">
                          Checked & maintained regularly before every trip
                        </p>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-4">
                      <div
                        className="driveloop-circle w-10 h-10 rounded-full border border-white/35 bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 text-white"
                        style={{ borderRadius: "50%" }}
                      >
                        <Tag className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[14.5px] font-semibold text-white leading-tight drop-shadow-sm">
                          Affordable Rates
                        </h4>
                        <p className="text-[12.5px] text-white/75 font-normal mt-0.5">
                          Transparent pricing with zero hidden surcharges
                        </p>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-4">
                      <div
                        className="driveloop-circle w-10 h-10 rounded-full border border-white/35 bg-white/5 backdrop-blur-sm flex items-center justify-center shrink-0 text-white"
                        style={{ borderRadius: "50%" }}
                      >
                        <Headphones className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-[14.5px] font-semibold text-white leading-tight drop-shadow-sm">
                          24/7 Support
                        </h4>
                        <p className="text-[12.5px] text-white/75 font-normal mt-0.5">
                          On-call roadside assistance throughout your adventure
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Rental Guide Link */}
                  <div className="pt-2">
                    <a
                      href="#booking"
                      className="inline-flex items-center gap-2 text-white font-medium text-[13.5px] hover:text-[#60A5FA] transition-colors cursor-pointer group drop-shadow"
                    >
                      <span>Our Rental Guide</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Calligraphy & Location Pin (Spacious & Clean over Sticky Landscape) */}
                <div className="lg:col-span-6 flex flex-col items-center lg:items-end justify-center pr-0 lg:pr-6">
                  {/* Calligraphy Brush Script Title */}
                  <div
                    className="text-white text-4xl sm:text-6xl font-normal tracking-wide transform -rotate-[6deg] select-none text-center lg:text-right drop-shadow-xl"
                    style={{
                      fontFamily: "'Caveat', cursive",
                      textShadow: "0 2px 18px rgba(0,0,0,0.85)",
                    }}
                  >
                    More Miles
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;More Stories
                  </div>

                  {/* Clean location pin matching the reference */}
                  <div className="flex items-center gap-2 text-white/90 text-sm mt-8 drop-shadow font-medium">
                    <MapPin className="w-4 h-4 text-red-400 fill-red-400" />
                    <span>Bromo, East Java</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 4: REAL STORIES ("Journeys Shared by Our Travelers")
              (Full-Window over Sticky Landscape)
              ========================================================================= */}
          <section
            id="stories"
            className="w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 flex items-center"
          >
            <div className="max-w-[1360px] mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Left Column: Heading & Testimonial Card */}
                <div className="lg:col-span-7 text-left space-y-7">
                  <div>
                    <span className="block text-[11px] font-bold font-mono uppercase tracking-[0.22em] text-white/90 mb-2 drop-shadow">
                      REAL STORIES
                    </span>
                    <h2 className="text-3xl sm:text-[42px] font-bold text-white leading-[1.12] tracking-tight drop-shadow-md">
                      Journeys Shared
                      <br />
                      by Our Travelers
                    </h2>
                    <p className="text-sm sm:text-[14.5px] text-white/90 font-normal leading-relaxed mt-3 max-w-md drop-shadow">
                      Real experiences, real people. Here's what our customers have
                      to say about their journey with DriveLoop.
                    </p>
                  </div>

                  {/* Frosted Glass Testimonial Box */}
                  <div
                    className="driveloop-box max-w-lg p-6 sm:p-7 backdrop-blur-md bg-black/40 border border-white/25 shadow-2xl text-left"
                    style={{ borderRadius: "22px" }}
                  >
                    <p className="text-[14px] sm:text-[15px] font-light italic text-white leading-relaxed">
                      "{testimonials[testimonialIdx].quote}"
                    </p>

                    <div className="mt-5 pt-5 border-t border-white/20 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonials[testimonialIdx].avatar}
                          alt={testimonials[testimonialIdx].author}
                          className="driveloop-circle w-10 h-10 ring-2 ring-white/40 object-cover"
                          style={{ borderRadius: "50%" }}
                          loading="eager"
                          decoding="async"
                        />
                        <div>
                          <span className="block text-[13.5px] font-semibold text-white">
                            {testimonials[testimonialIdx].author}
                          </span>
                          <span className="block text-[11.5px] text-white/70">
                            {testimonials[testimonialIdx].location}
                          </span>
                        </div>
                      </div>

                      {/* 5 Stars Rating */}
                      <div className="flex items-center gap-1 text-[#FBBF24]">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column: Stats & Slider Navigation */}
                <div className="lg:col-span-5 flex flex-col items-start lg:items-end justify-between space-y-10 text-left lg:text-right">
                  {/* Numerical Metrics with readable text shadows */}
                  <div className="space-y-4">
                    <div>
                      <div className="text-4xl sm:text-[46px] font-bold text-white tracking-tight drop-shadow-md">
                        10K+
                      </div>
                      <div className="text-xs sm:text-[13px] text-white/80 font-medium mt-0.5 drop-shadow-sm">
                        Happy Customers
                      </div>
                    </div>

                    <div className="w-16 h-[1px] bg-white/30 my-4 ml-0 lg:ml-auto" />

                    <div>
                      <div className="text-4xl sm:text-[46px] font-bold text-white tracking-tight drop-shadow-md">
                        4.8/5
                      </div>
                      <div className="text-xs sm:text-[13px] text-white/80 font-medium mt-0.5 drop-shadow-sm">
                        Average Rating
                      </div>
                    </div>

                    <div className="w-16 h-[1px] bg-white/30 my-4 ml-0 lg:ml-auto" />

                    <div>
                      <div className="text-4xl sm:text-[46px] font-bold text-white tracking-tight drop-shadow-md">
                        500+
                      </div>
                      <div className="text-xs sm:text-[13px] text-white/80 font-medium mt-0.5 drop-shadow-sm">
                        Vehicles Available
                      </div>
                    </div>
                  </div>

                  {/* Slider Controls */}
                  <div className="flex flex-col items-start lg:items-end gap-2.5 pt-2">
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={handlePrevTestimonial}
                        className="driveloop-circle w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                        style={{ borderRadius: "50%" }}
                        aria-label="Previous Testimonial"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-white/50">|</span>
                      <button
                        type="button"
                        onClick={handleNextTestimonial}
                        className="driveloop-circle w-8 h-8 bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
                        style={{ borderRadius: "50%" }}
                        aria-label="Next Testimonial"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-white/80">
                      <span className="text-white font-bold">
                        0{testimonialIdx + 1}
                      </span>
                      <div className="w-12 h-[1px] bg-white/40" />
                      <span>0{testimonials.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
              SECTION 5: READY FOR YOUR NEXT TRIP? (Full-Window over Sticky Landscape)
              ========================================================================= */}
          <section
            id="booking"
            className="w-full min-h-screen py-24 sm:py-32 px-6 sm:px-12 flex items-center"
          >
            <div className="max-w-[1360px] mx-auto w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                {/* Left Column: Heading & Call to Action */}
                <div className="lg:col-span-6 text-left space-y-6">
                  <div>
                    <span className="block text-[11px] font-bold font-mono uppercase tracking-[0.22em] text-white/80 mb-2 drop-shadow">
                      READY FOR YOUR NEXT TRIP?
                    </span>
                    <h2 className="text-3xl sm:text-[42px] font-bold text-white leading-[1.12] tracking-tight drop-shadow-md">
                      Book Your Car Today
                      <br />
                      and Hit the Road
                    </h2>
                    <p className="text-sm sm:text-[14.5px] text-white/90 font-normal leading-relaxed mt-3 max-w-md drop-shadow">
                      Simple, fast, and secure. Get your ideal vehicle in just a few
                      clicks and start your adventure.
                    </p>
                  </div>

                  <div>
                    <a
                      href="#booking"
                      className="driveloop-pill inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white font-medium text-[13.5px] px-6 py-3 shadow-lg shadow-blue-600/30 transition-all duration-200 active:scale-[0.98] cursor-pointer"
                      style={{ borderRadius: "9999px" }}
                    >
                      <span>Book Now</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Dark Frosted Glass Booking Card (Consistent with Real Stories) */}
                <div className="lg:col-span-6">
                  <div
                    className="driveloop-box max-w-lg mx-auto lg:ml-auto w-full p-6 sm:p-7 backdrop-blur-md bg-black/40 border border-white/20 text-white shadow-2xl"
                    style={{ borderRadius: "24px" }}
                  >
                    {/* Tabs */}
                    <div className="flex items-center gap-3 border-b border-white/15 pb-4 mb-4 text-xs font-semibold">
                      <button
                        type="button"
                        onClick={() => setTripType("round")}
                        className={`flex items-center gap-2 px-3.5 py-2 transition-all cursor-pointer ${
                          tripType === "round"
                            ? "bg-white/15 text-white font-bold border border-white/25 shadow-sm"
                            : "text-white/60 hover:text-white"
                        }`}
                        style={{ borderRadius: "10px" }}
                      >
                        <Car className="w-3.5 h-3.5" />
                        <span>Pick-up & Drop-off</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTripType("oneway")}
                        className={`flex items-center gap-2 px-3.5 py-2 transition-all cursor-pointer ${
                          tripType === "oneway"
                            ? "bg-white/15 text-white font-bold border border-white/25 shadow-sm"
                            : "text-white/60 hover:text-white"
                        }`}
                        style={{ borderRadius: "10px" }}
                      >
                        <Compass className="w-3.5 h-3.5" />
                        <span>One Way</span>
                      </button>
                    </div>

                    {/* Form Fields */}
                    <form onSubmit={handleBookingSubmit} className="space-y-3">
                      {/* Pick-up Location */}
                      <div
                        className="bg-white/5 border border-white/15 hover:border-white/30 focus-within:border-white/40 focus-within:bg-white/10 p-3 flex items-center gap-3 transition-all"
                        style={{ borderRadius: "12px" }}
                      >
                        <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                        <div className="flex-1 text-left">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">
                            Pick-up Location
                          </span>
                          <select
                            id="pickup-location-select"
                            name="pickupLocation"
                            value={pickupLocation}
                            onChange={(e) => setPickupLocation(e.target.value)}
                            className="w-full bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer [color-scheme:dark]"
                          >
                            <option value="Lombok Airport (LOP)" className="bg-[#111827] text-white">
                              Lombok Airport (LOP) - Praya
                            </option>
                            <option value="Bali Ngurah Rai (DPS)" className="bg-[#111827] text-white">
                              Bali Ngurah Rai Airport (DPS)
                            </option>
                            <option value="Jakarta Soekarno-Hatta (CGK)" className="bg-[#111827] text-white">
                              Jakarta Soekarno-Hatta (CGK)
                            </option>
                            <option value="Surabaya Juanda (SUB)" className="bg-[#111827] text-white">
                              Surabaya Juanda Airport (SUB)
                            </option>
                            <option value="Labuan Bajo Komodo (LBJ)" className="bg-[#111827] text-white">
                              Labuan Bajo Komodo Airport (LBJ)
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Drop-off Location */}
                      <div
                        className="bg-white/5 border border-white/15 hover:border-white/30 focus-within:border-white/40 focus-within:bg-white/10 p-3 flex items-center gap-3 transition-all"
                        style={{ borderRadius: "12px" }}
                      >
                        <MapPin className="w-4 h-4 text-white/60 shrink-0" />
                        <div className="flex-1 text-left">
                          <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">
                            Drop-off Location
                          </span>
                          <select
                            id="dropoff-location-select"
                            name="dropoffLocation"
                            value={dropoffLocation}
                            onChange={(e) => setDropoffLocation(e.target.value)}
                            className="w-full bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer [color-scheme:dark]"
                          >
                            <option value="Senggigi Center" className="bg-[#111827] text-white">
                              Senggigi Tourism Hub, Lombok
                            </option>
                            <option value="Kuta Beach Lombok" className="bg-[#111827] text-white">
                              Kuta Beach Mandalika, Lombok
                            </option>
                            <option value="Lombok Airport (LOP)" className="bg-[#111827] text-white">
                              Lombok Airport (LOP) - Return
                            </option>
                            <option value="Seminyak / Canggu" className="bg-[#111827] text-white">
                              Seminyak &amp; Canggu, Bali
                            </option>
                            <option value="Sanur Port" className="bg-[#111827] text-white">
                              Sanur Harbor Marina, Bali
                            </option>
                          </select>
                        </div>
                      </div>

                      {/* Dates: Pick-up & Drop-off */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div
                          className="bg-white/5 border border-white/15 hover:border-white/30 focus-within:border-white/40 focus-within:bg-white/10 p-3 flex items-center gap-3 transition-all"
                          style={{ borderRadius: "12px" }}
                        >
                          <Calendar className="w-4 h-4 text-white/60 shrink-0" />
                          <div className="flex-1 text-left">
                            <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">
                              Pick-up Date
                            </span>
                            <input
                              id="pickup-date-input"
                              name="pickupDate"
                              type="date"
                              value={pickupDate}
                              onChange={(e) => setPickupDate(e.target.value)}
                              className="w-full bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer [color-scheme:dark]"
                            />
                          </div>
                        </div>

                        <div
                          className="bg-white/5 border border-white/15 hover:border-white/30 focus-within:border-white/40 focus-within:bg-white/10 p-3 flex items-center gap-3 transition-all"
                          style={{ borderRadius: "12px" }}
                        >
                          <Calendar className="w-4 h-4 text-white/60 shrink-0" />
                          <div className="flex-1 text-left">
                            <span className="block text-[10px] font-mono uppercase tracking-wider text-white/50">
                              Drop-off Date
                            </span>
                            <input
                              id="dropoff-date-input"
                              name="dropoffDate"
                              type="date"
                              value={dropoffDate}
                              onChange={(e) => setDropoffDate(e.target.value)}
                              className="w-full bg-transparent text-xs sm:text-sm font-medium text-white focus:outline-none cursor-pointer [color-scheme:dark]"
                            />
                          </div>
                        </div>
                      </div>

                      {bookingSuccess && (
                        <div
                          className="p-3 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-medium text-center"
                          style={{ borderRadius: "12px" }}
                        >
                          Vehicle availability verified! Connecting you to booking...
                        </div>
                      )}

                      {/* Search Vehicles CTA Button */}
                      <button
                        type="submit"
                        className="driveloop-pill w-full mt-2 bg-[#2563EB] hover:bg-blue-600 active:scale-[0.99] text-white font-semibold text-[14px] py-3.5 shadow-lg shadow-blue-600/30 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                        style={{ borderRadius: "9999px" }}
                      >
                        <span>Search Vehicles</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer
            id="footer"
            className="w-full bg-black/85 backdrop-blur-xl pt-10 pb-12 px-6 sm:px-12"
          >
            <div className="max-w-[1360px] mx-auto">
              {/* Main Footer Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pb-10 border-b border-white/10">
                {/* Logo */}
                <a href="#hero" className="flex items-center gap-2.5 cursor-pointer">
                  <div className="w-7 h-7 text-white flex items-center justify-center">
                    <svg
                      viewBox="0 0 36 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full text-white"
                    >
                      <path
                        d="M18 2L32 23H4L18 2Z"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 23C13.5 16 22.5 16 25 23"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <circle cx="18" cy="11" r="2.2" fill="currentColor" />
                    </svg>
                  </div>
                  <span className="text-[15px] font-bold tracking-[0.24em] text-white font-sans uppercase">
                    DRIVELOOP
                  </span>
                </a>

                {/* Footer Navigation */}
                <nav className="flex flex-wrap items-center gap-6 sm:gap-8 text-[12.5px] font-normal text-white/70">
                  <a href="#hero" className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </a>
                  <a href="#fleet" className="hover:text-white transition-colors cursor-pointer">
                    Vehicles
                  </a>
                  <a href="#freedom" className="hover:text-white transition-colors cursor-pointer">
                    About Us
                  </a>
                  <a href="#freedom" className="hover:text-white transition-colors cursor-pointer">
                    Rental Guide
                  </a>
                  <a href="#stories" className="hover:text-white transition-colors cursor-pointer">
                    Blog
                  </a>
                  <a href="#footer" className="hover:text-white transition-colors cursor-pointer">
                    Contact
                  </a>
                </nav>

                {/* Social Icons */}
                <div className="flex items-center gap-4 text-white/70">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label="YouTube"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors cursor-pointer"
                    aria-label="Twitter / X"
                  >
                    {/* X Icon SVG */}
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Bottom Copyright & Tagline */}
              <div className="pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[12px] text-white/50">
                <div>© 2025 DriveLoop. All rights reserved.</div>
                <div className="italic font-light tracking-wide text-white/60">
                  Drive Further, Live More.
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* =========================================================================
          IMAGE LIGHTBOX MODAL
          ========================================================================= */}
      {selectedVehicle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/92 backdrop-blur-xl p-4 sm:p-8 animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setSelectedVehicle(null)}
            className="driveloop-circle absolute top-5 right-5 sm:top-7 sm:right-7 z-50 w-10 h-10 bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-all cursor-pointer"
            style={{ borderRadius: "50%" }}
            aria-label="Close Fullscreen Viewer"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="relative max-w-5xl max-h-[90vh] w-full flex flex-col items-center justify-center">
            <div
              className="relative overflow-hidden border border-white/20 shadow-2xl max-h-[75vh]"
              style={{ borderRadius: "20px" }}
            >
              <img
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                className="w-auto h-auto max-h-[75vh] max-w-full object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-xl">
              <h4 className="text-base sm:text-xl font-bold text-white tracking-tight">
                {selectedVehicle.name} • {selectedVehicle.category}
              </h4>
              <p className="text-xs sm:text-sm text-white/70 mt-1 leading-relaxed">
                {isEn
                  ? selectedVehicle.description.en
                  : selectedVehicle.description.id}
              </p>
              <div className="mt-3 flex items-center justify-center gap-4 text-xs font-mono text-white/80">
                <span>Seats: {selectedVehicle.seats}</span>
                <span>•</span>
                <span>Trans: {selectedVehicle.transmission}</span>
                <span>•</span>
                <span>From ${selectedVehicle.pricePerDay}/day</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          VIDEO PLAYER MODAL
          ========================================================================= */}
      {isVideoModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 sm:p-8 animate-fade-in"
        >
          <button
            type="button"
            onClick={() => setIsVideoModalOpen(false)}
            className="driveloop-circle absolute top-6 right-6 w-10 h-10 bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
            style={{ borderRadius: "50%" }}
            aria-label="Close Video"
          >
            <X className="w-5 h-5" />
          </button>

          <div
            className="w-full max-w-3xl aspect-video overflow-hidden border border-white/20 shadow-2xl bg-black relative flex items-center justify-center"
            style={{ borderRadius: "20px" }}
          >
            <img
              src="/templates/driveloop/hero-bg.webp"
              alt="DriveLoop Alpine Expedition"
              className="absolute inset-0 w-full h-full object-cover filter brightness-50"
            />
            <div className="relative z-10 text-center p-6 space-y-3">
              <div
                className="driveloop-circle w-16 h-16 bg-[#2563EB] flex items-center justify-center mx-auto text-white shadow-xl shadow-blue-600/50"
                style={{ borderRadius: "50%" }}
              >
                <Play className="w-7 h-7 fill-white ml-1" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                DriveLoop • Experience The Freedom
              </h3>
              <p className="text-xs sm:text-sm text-white/70 max-w-md mx-auto">
                Embark on an overland journey across remote mountain summits and coastal highways.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
