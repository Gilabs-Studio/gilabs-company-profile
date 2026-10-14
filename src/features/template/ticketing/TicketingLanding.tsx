import React, {
  useState,
  useEffect,
  useRef,
  type FC,
} from "react";
import {
  Calendar,
  MapPin,
  Users,
  Zap,
  Star,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  X,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

interface TicketingLandingProps {
  locale?: "id" | "en";
}

interface TicketTier {
  id: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  isPopular?: boolean;
}

export default function TicketingLanding({
  locale = "id",
}: TicketingLandingProps) {
  // Navigation active tab
  const [activeTab, setActiveTab] = useState("ticket");

  // Countdown timer matching reference image (44 Hari 23 Jam 58 Menit 16 Detik)
  const [timeLeft, setTimeLeft] = useState({
    days: 44,
    hours: 23,
    minutes: 58,
    seconds: 16,
  });


  useEffect(() => {
    const timer = window.setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  // Ticket Tiers data
  const ticketTiers: TicketTier[] = [
    {
      id: "general",
      name: "General Admission",
      price: 499000,
      formattedPrice: "Rp 499.000",
      description: locale === "en" 
        ? "Akses penuh ke semua sesi acara dan area pameran."
        : "Akses penuh ke semua sesi acara dan area pameran.",
    },
    {
      id: "vip",
      name: "VIP",
      price: 999000,
      formattedPrice: "Rp 999.000",
      description: locale === "en"
        ? "Akses eksklusif + lounge VIP, prioritas seating, dan goodie bag."
        : "Akses eksklusif + lounge VIP, prioritas seating, dan goodie bag.",
      isPopular: true,
    },
    {
      id: "student",
      name: "Student",
      price: 299000,
      formattedPrice: "Rp 299.000",
      description: locale === "en"
        ? "Khusus mahasiswa dengan kartu pelajar/mahasiswa."
        : "Khusus mahasiswa dengan kartu pelajar/mahasiswa.",
    },
    {
      id: "group",
      name: "Group (5+ People)",
      price: 1999000,
      formattedPrice: "Rp 1.999.000",
      description: locale === "en"
        ? "Diskon khusus untuk pembelian grup (minimal 5 orang)."
        : "Diskon khusus untuk pembelian grup (minimal 5 orang).",
    },
  ];

  // Purchase Modal State
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState("");
  const [buyerEmail, setBuyerEmail] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const openPurchaseModal = (tier: TicketTier) => {
    setSelectedTier(tier);
    setQuantity(1);
    setIsSuccess(false);
  };

  const closePurchaseModal = () => {
    setSelectedTier(null);
    setIsSuccess(false);
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!buyerName || !buyerEmail) return;
    setIsSuccess(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterSubscribed(false);
      setNewsletterEmail("");
    }, 4000);
  };

  return (
    <div className="dark bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      {/* 00. Floating Header matching reference image */}
      <header className="fixed top-[41px] left-0 right-0 z-40 bg-black/60 backdrop-blur-md transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Navigation Links (Left) */}
          <nav className="flex items-center gap-6 sm:gap-8 text-xs font-light tracking-wider uppercase">
            <a
              href="#hero"
              onClick={() => setActiveTab("home")}
              className={`transition-colors cursor-pointer relative py-1 ${
                activeTab === "home" ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Home
              {activeTab === "home" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400" />
              )}
            </a>
            <a
              href="#event"
              onClick={() => setActiveTab("merchandise")}
              className={`transition-colors cursor-pointer relative py-1 ${
                activeTab === "merchandise" ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Merchandise
              {activeTab === "merchandise" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400" />
              )}
            </a>
            <a
              href="#tickets"
              onClick={() => setActiveTab("ticket")}
              className={`transition-colors cursor-pointer relative py-1 ${
                activeTab === "ticket" ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              Ticket
              {activeTab === "ticket" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400" />
              )}
            </a>
            <a
              href="#event"
              onClick={() => setActiveTab("about")}
              className={`transition-colors cursor-pointer relative py-1 ${
                activeTab === "about" ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              About Us
              {activeTab === "about" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-amber-400" />
              )}
            </a>
          </nav>

          {/* Action Button: Login (Right) */}
          <div className="flex items-center gap-3">
            <a
              href="#tickets"
              className="inline-flex items-center justify-center h-8 px-4 rounded border border-white/20 text-xs font-light uppercase tracking-wider text-white hover:border-amber-400 hover:text-amber-400 bg-white/5 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* 01. WINDOW 1: HERO SECTION */}
      {/* Background image loads INSTANTLY on first paint; WebGL live beams render smoothly on top */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-41px)] w-full overflow-hidden flex items-center justify-center bg-black bg-[url('/templates/ticketing/hero-bg.webp')] bg-cover bg-center pt-16"
      >

        {/* Ambient Overlay Layer */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-[1]" />

        {/* Hero Content: 100% Matching Reference Image */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto py-20">
          {/* Huge Main Title */}
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-10 drop-shadow-[0_15px_40px_rgba(0,0,0,0.95)]">
            LOREM IPSUM
          </h1>

          {/* Countdown Numbers (44 HARI, 23 JAM, 58 MENIT, 16 DETIK) */}
          <div className="flex items-center justify-center gap-6 sm:gap-10 md:gap-12 mb-10">
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white tabular-nums">
                {String(timeLeft.days).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs font-light text-neutral-400 uppercase tracking-widest mt-1.5">
                HARI
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white tabular-nums">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs font-light text-neutral-400 uppercase tracking-widest mt-1.5">
                JAM
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white tabular-nums">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs font-light text-neutral-400 uppercase tracking-widest mt-1.5">
                MENIT
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-5xl md:text-6xl font-extralight tracking-tight text-white tabular-nums">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="text-[10px] sm:text-xs font-light text-neutral-400 uppercase tracking-widest mt-1.5">
                DETIK
              </div>
            </div>
          </div>

          {/* Single Clean Button: [ DAPATKAN TIKET → ] */}
          <a
            href="#tickets"
            className="inline-flex items-center justify-center h-11 px-8 rounded-md bg-black/60 hover:bg-neutral-900 border border-white/20 hover:border-amber-400/60 text-white text-xs font-light uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer gap-2 backdrop-blur-sm"
          >
            <span>DAPATKAN TIKET</span>
            <ArrowRight className="h-3.5 w-3.5 text-neutral-300" />
          </a>
        </div>
      </section>

      {/* 02. WINDOW 2: THE EVENT SECTION (Clean, Direct Photo Without Border, Naked Icons) */}
      <section
        id="event"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Text & Details */}
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
              THE EVENT
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-6">
              Lebih dari Sekadar<br />Sebuah Acara
            </h2>
            <p className="text-sm sm:text-base font-light text-neutral-300 leading-relaxed mb-12 max-w-xl">
              Lorem ipsum adalah sebuah pengalaman yang dirancang untuk menginspirasi, menghubungkan, dan membuka peluang baru. Bergabunglah dengan kami dalam sebuah acara eksklusif yang menghadirkan pembicara terbaik, sesi interaktif, dan networking berkualitas.
            </p>

            {/* 3 Metric Rows: Direct Naked Icons without background boxes or border */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {/* 1. Date */}
              <div className="flex items-start gap-3">
                <Calendar className="h-6 w-6 text-neutral-400 stroke-[1.25] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-normal text-white">23 Agustus 2025</div>
                  <div className="text-xs font-light text-neutral-400 mt-1">Sabtu, 08:00 – 17:00</div>
                </div>
              </div>

              {/* 2. Venue */}
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 text-neutral-400 stroke-[1.25] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-normal text-white">The Ritz-Carlton Jakarta</div>
                  <div className="text-xs font-light text-neutral-400 mt-1">Jl. Dr. Ide Anak Agung Gde Agung No.1, Jakarta</div>
                </div>
              </div>

              {/* 3. Capacity */}
              <div className="flex items-start gap-3">
                <Users className="h-6 w-6 text-neutral-400 stroke-[1.25] shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-normal text-white">1.000+</div>
                  <div className="text-xs font-light text-neutral-400 mt-1">Peserta dari berbagai industri</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Stage Photo: Direct photo with rounded corners, NO border */}
          <div className="relative">
            <img
              src="/templates/ticketing/stage-ideas.webp"
              alt="Ideas Connect People Stage"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* 03. WINDOW 3: WHY ATTEND SECTION (Clean, Minimalist Naked Columns, No Cards) */}
      <section
        id="why-attend"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                WHY ATTEND
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                Apa yang Akan Kamu Dapatkan?
              </h2>
            </div>
            <p className="text-sm font-light text-neutral-400 max-w-md leading-relaxed">
              Dari sesi inspiratif hingga kesempatan networking, acara ini dirancang untuk memberikan pengalaman terbaik bagi setiap peserta.
            </p>
          </div>

          {/* 4 Items: Direct, Clean, Minimalist (No card border) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div>
              <Zap className="h-6 w-6 text-amber-400/90 stroke-[1.5] mb-4" />
              <h3 className="text-base sm:text-lg font-normal text-white mb-2">Keynote Speakers</h3>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                Dengarkan langsung dari para ahli dan praktisi industri.
              </p>
            </div>

            <div>
              <Users className="h-6 w-6 text-amber-400/90 stroke-[1.5] mb-4" />
              <h3 className="text-base sm:text-lg font-normal text-white mb-2">Networking</h3>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                Bangun koneksi dengan profesional dari berbagai latar belakang.
              </p>
            </div>

            <div>
              <Star className="h-6 w-6 text-amber-400/90 stroke-[1.5] mb-4" />
              <h3 className="text-base sm:text-lg font-normal text-white mb-2">Interactive Session</h3>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                Ikuti sesi diskusi dan workshop yang aplikatif.
              </p>
            </div>

            <div>
              <Sparkles className="h-6 w-6 text-amber-400/90 stroke-[1.5] mb-4" />
              <h3 className="text-base sm:text-lg font-normal text-white mb-2">Exclusive Experience</h3>
              <p className="text-xs font-light text-neutral-400 leading-relaxed">
                Dapatkan akses ke konten premium dan komunitas khusus.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. WINDOW 4: SPEAKERS SECTION */}
      <section
        id="speakers"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                SPEAKERS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                Pembicara Utama
              </h2>
            </div>
            <a
              href="#speakers"
              className="inline-flex items-center gap-1.5 text-xs font-light text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer"
            >
              <span>Lihat Selengkapnya</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* 4 Speaker Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Speaker 1 */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-all duration-300 hover:-translate-y-1 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 mb-4">
                <img
                  src="/templates/ticketing/speaker-1.webp"
                  alt="Alex Pratama"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-normal text-white mb-0.5">Alex Pratama</h3>
              <p className="text-xs font-light text-neutral-400 mb-4">CEO, Techverse</p>
              <span className="inline-block px-2.5 py-1 rounded border border-neutral-800 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Technology
              </span>
            </div>

            {/* Speaker 2 */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-all duration-300 hover:-translate-y-1 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 mb-4">
                <img
                  src="/templates/ticketing/speaker-2.webp"
                  alt="Sarah Wijaya"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-normal text-white mb-0.5">Sarah Wijaya</h3>
              <p className="text-xs font-light text-neutral-400 mb-4">Founder, Lumina Studio</p>
              <span className="inline-block px-2.5 py-1 rounded border border-neutral-800 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Business
              </span>
            </div>

            {/* Speaker 3 */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-all duration-300 hover:-translate-y-1 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 mb-4">
                <img
                  src="/templates/ticketing/speaker-3.webp"
                  alt="Ryan Maulana"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-normal text-white mb-0.5">Ryan Maulana</h3>
              <p className="text-xs font-light text-neutral-400 mb-4">Product Lead, Nusantara AI</p>
              <span className="inline-block px-2.5 py-1 rounded border border-neutral-800 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Product
              </span>
            </div>

            {/* Speaker 4 */}
            <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-4 transition-all duration-300 hover:-translate-y-1 group">
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-neutral-900 mb-4">
                <img
                  src="/templates/ticketing/speaker-4.webp"
                  alt="Diana Lestari"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-base font-normal text-white mb-0.5">Diana Lestari</h3>
              <p className="text-xs font-light text-neutral-400 mb-4">Creative Director, Kreasi.id</p>
              <span className="inline-block px-2.5 py-1 rounded border border-neutral-800 text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                Creative
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 05. WINDOW 5: TICKET SECTION (Pilih Tiketmu) */}
      <section
        id="tickets"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                TICKET
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                Pilih Tiketmu
              </h2>
            </div>
            <p className="text-sm font-light text-neutral-400 max-w-md leading-relaxed">
              Semua tiket sudah termasuk akses ke semua sesi, seremoni pembukaan, dan area networking.
            </p>
          </div>

          {/* 4 Ticket Cards matching reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketTiers.map((tier) => {
              const isVip = tier.isPopular;
              return (
                <div
                  key={tier.id}
                  className={`rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative bg-neutral-950 ${
                    isVip
                      ? "border border-amber-500/80 shadow-xl shadow-amber-500/10"
                      : "border border-neutral-800"
                  }`}
                >
                  {/* Top Tier Info */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-medium text-white">{tier.name}</span>
                        {isVip && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-400 text-black font-semibold">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div
                        className={`h-4 w-4 rounded-full border flex items-center justify-center ${
                          isVip ? "border-amber-400" : "border-neutral-700"
                        }`}
                      >
                        {isVip && <div className="h-2 w-2 rounded-full bg-amber-400" />}
                      </div>
                    </div>

                    <p className="text-xs font-light text-neutral-400 leading-relaxed mb-6 min-h-[36px]">
                      {tier.description}
                    </p>
                  </div>

                  {/* Price & CTA Button */}
                  <div className="pt-6">
                    <div className="text-xl font-light text-white tracking-tight mb-4">
                      {tier.formattedPrice}
                    </div>

                    <button
                      type="button"
                      onClick={() => openPurchaseModal(tier)}
                      className={`w-full h-10 rounded-md text-xs font-light uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 ${
                        isVip
                          ? "bg-[#F4B342] hover:bg-amber-400 text-black font-semibold shadow-lg shadow-amber-500/20"
                          : "border border-neutral-800 text-white hover:border-neutral-700 bg-neutral-900"
                      }`}
                    >
                      <span>Beli Tiket</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 06. WINDOW 6: VENUE SECTION (Direct Photo Without Border) */}
      <section
        id="venue"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black"
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Exterior Venue Image: Direct clean photo, NO border */}
          <div className="relative">
            <img
              src="/templates/ticketing/venue-exterior.webp"
              alt="The Ritz-Carlton Jakarta Venue"
              className="w-full h-auto rounded-2xl shadow-2xl object-cover"
            />
          </div>

          {/* Right Venue Details */}
          <div>
            <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
              VENUE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight tracking-tight mb-4">
              The Ritz-Carlton Jakarta
            </h2>
            <div className="flex items-center gap-2 text-xs font-light text-neutral-300 mb-6">
              <MapPin className="h-4 w-4 text-neutral-400 shrink-0" />
              <span>Jl. Dr. Ide Anak Agung Gde Agung No.1, Jakarta</span>
            </div>

            <p className="text-sm sm:text-base font-light text-neutral-400 leading-relaxed mb-8 max-w-xl">
              Berlokasi di jantung Jakarta, The Ritz-Carlton menawarkan pengalaman kelas dunia dengan fasilitas premium yang akan membuat acara ini semakin berkesan.
            </p>

            <a
              href="https://maps.google.com/?q=The+Ritz-Carlton+Jakarta+Mega+Kuningan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-10 px-6 rounded-md border border-neutral-800 text-xs font-light uppercase tracking-wider text-white hover:border-amber-400 hover:text-amber-400 bg-neutral-900 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer gap-2"
            >
              <span>Lihat Lokasi</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* 07. NEWSLETTER BANNER (Clean Container) */}
      <section className="relative w-full py-16 px-6 sm:px-12 lg:px-20 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 p-8 sm:p-12 bg-neutral-950">
            {/* Ambient Gold Radial Flare */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div>
                <div className="text-[10px] font-mono tracking-[0.25em] text-amber-400 uppercase mb-2">
                  JANGAN SAMPAI KETINGGALAN
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-white mb-2">
                  Dapatkan Update Terbaru
                </h3>
                <p className="text-xs sm:text-sm font-light text-neutral-400 max-w-xl">
                  Ikuti kami untuk mendapatkan informasi terbaru seputar acara, pembicara, dan penawaran spesial.
                </p>
              </div>

              {/* Form Input & Subscribe Button */}
              <form onSubmit={handleNewsletterSubmit} className="flex w-full lg:w-auto items-center gap-3">
                <input
                  type="email"
                  required
                  placeholder="Masukkan email kamu"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="h-11 px-4 rounded-md bg-black border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-neutral-600 w-full sm:w-72"
                />
                <button
                  type="submit"
                  className="h-11 px-6 rounded-md bg-white hover:bg-neutral-200 text-black text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0"
                >
                  {newsletterSubscribed ? "Terdaftar!" : "Subscribe"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FOOTER */}
      <footer className="relative w-full bg-black py-12 px-6 sm:px-12 lg:px-20 text-xs font-light text-neutral-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-900">
          {/* Logo */}
          <div className="text-base font-light tracking-widest text-white">
            LOREM IPSUM
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8 tracking-wider uppercase">
            <a href="#hero" className="hover:text-white transition-colors cursor-pointer">
              Home
            </a>
            <a href="#event" className="hover:text-white transition-colors cursor-pointer">
              Merchandise
            </a>
            <a href="#tickets" className="hover:text-white transition-colors cursor-pointer">
              Ticket
            </a>
            <a href="#event" className="hover:text-white transition-colors cursor-pointer">
              About Us
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="h-8 w-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-colors cursor-pointer">
              <Instagram className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="h-8 w-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-colors cursor-pointer">
              <Twitter className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="h-8 w-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-colors cursor-pointer">
              <Youtube className="h-3.5 w-3.5" />
            </a>
            <a href="#" className="h-8 w-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 transition-colors cursor-pointer">
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-[11px] text-neutral-500">
          <div>© 2025 Lorem Ipsum. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer">
              Terms & Conditions
            </a>
          </div>
        </div>
      </footer>

      {/* 09. INTERACTIVE TICKET PURCHASE MODAL DIALOG */}
      {selectedTier && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl text-left">
            {/* Close Button */}
            <button
              onClick={closePurchaseModal}
              className="absolute top-5 right-5 text-neutral-400 hover:text-white transition-colors cursor-pointer p-1 rounded-md hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>

            {!isSuccess ? (
              <div>
                {/* Modal Title */}
                <div className="text-[10px] font-mono tracking-widest text-amber-400 uppercase mb-1">
                  KONFIRMASI PEMBELIAN
                </div>
                <h3 className="text-xl font-light text-white mb-1">
                  {selectedTier.name}
                </h3>
                <p className="text-xs font-light text-neutral-400 mb-6">
                  {selectedTier.description}
                </p>

                {/* Ticket Quantity & Pricing */}
                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900/60 mb-6 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-light text-neutral-400">Harga Satuan</div>
                    <div className="text-base font-medium text-white">{selectedTier.formattedPrice}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="h-8 w-8 rounded border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-base font-mono font-medium text-white px-2">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(10, quantity + 1))}
                      className="h-8 w-8 rounded border border-neutral-700 flex items-center justify-center text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Calculation */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-850">
                  <span className="text-xs font-light text-neutral-300">Total Pembayaran ({quantity} tiket)</span>
                  <span className="text-lg font-semibold text-amber-400">
                    Rp {(selectedTier.price * quantity).toLocaleString("id-ID")}
                  </span>
                </div>

                {/* Buyer Form */}
                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-[11px] font-light text-neutral-400 mb-1">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={buyerName}
                      onChange={(e) => setBuyerName(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-light text-neutral-400 mb-1">
                      Alamat Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nama@email.com"
                      value={buyerEmail}
                      onChange={(e) => setBuyerEmail(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-light text-neutral-400 mb-1">
                      Nomor WhatsApp (Opsional)
                    </label>
                    <input
                      type="tel"
                      placeholder="0812xxxxxxxx"
                      value={buyerPhone}
                      onChange={(e) => setBuyerPhone(e.target.value)}
                      className="w-full h-10 px-3 rounded-lg bg-neutral-900 border border-neutral-800 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-11 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer mt-4 flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
                  >
                    <span>Lanjutkan Pembayaran</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="py-6 text-center">
                <div className="h-16 w-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="text-xl font-light text-white mb-2">
                  Pesanan Tiket Berhasil Didaftarkan!
                </h4>
                <p className="text-xs font-light text-neutral-300 mb-6 max-w-sm mx-auto leading-relaxed">
                  Terima kasih, <strong className="text-white">{buyerName}</strong>. Detail tiket <strong className="text-amber-400">{selectedTier.name} ({quantity}x)</strong> dan instruksi pembayaran telah dikirim ke <strong className="text-white">{buyerEmail}</strong>.
                </p>

                <div className="p-4 rounded-xl border border-neutral-800 bg-neutral-900 text-left mb-6 text-xs space-y-1.5 font-light">
                  <div className="flex justify-between text-neutral-400">
                    <span>ID Transaksi:</span>
                    <span className="font-mono text-white">#TKT-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Kategori:</span>
                    <span className="text-white">{selectedTier.name}</span>
                  </div>
                  <div className="flex justify-between text-neutral-400">
                    <span>Jumlah:</span>
                    <span className="text-white">{quantity} Tiket</span>
                  </div>
                  <div className="flex justify-between text-neutral-400 pt-2 border-t border-neutral-800">
                    <span>Total:</span>
                    <span className="text-amber-400 font-semibold">Rp {(selectedTier.price * quantity).toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closePurchaseModal}
                  className="w-full h-10 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-light uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Selesai
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
