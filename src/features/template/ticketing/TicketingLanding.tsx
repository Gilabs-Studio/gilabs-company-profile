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
  code: string;
  name: string;
  price: number;
  formattedPrice: string;
  description: string;
  isPopular?: boolean;
  features: string[];
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

  // Why Attend Pillars Data
  const whyAttendPillars = [
    {
      index: "01",
      code: "KEYNOTES",
      title: locale === "en" ? "World-Class Speakers" : "World-Class Keynotes",
      description: locale === "en"
        ? "Gain firsthand foresight from visionary founders and industry executives shaping modern technology."
        : "Dengarkan paparan mendalam dari pendiri visioner dan pemimpin industri mengenai peta masa depan.",
      icon: Zap,
      stat: "12+ Keynote Sesi",
    },
    {
      index: "02",
      code: "NETWORK",
      title: locale === "en" ? "Curated Networking" : "Elite Networking Hub",
      description: locale === "en"
        ? "Connect directly with 1,000+ ambitious entrepreneurs, engineers, and high-level investors."
        : "Bangun koneksi bernilai tinggi bersama 1.000+ pendiri startup, praktisi, dan investor terkemuka.",
      icon: Users,
      stat: "1.000+ Peserta",
    },
    {
      index: "03",
      code: "WORKSHOPS",
      title: locale === "en" ? "Actionable Deep Dives" : "Interactive Workshops",
      description: locale === "en"
        ? "Engage in rigorous case studies and tactical framework discussions applicable to your business."
        : "Ikuti bedah studi kasus nyata dan sesi aplikatif yang siap dieksekusi di industri Anda.",
      icon: Star,
      stat: "4 Track Praktis",
    },
    {
      index: "04",
      code: "PRIVILEGE",
      title: locale === "en" ? "Exclusive Access" : "Exclusive Privileges",
      description: locale === "en"
        ? "Unlock proprietary summit recordings, VIP private lounge hospitality, and lifelong alumni community."
        : "Akses eksklusif materi premium, VIP lounge hospitality, dan jaringan komunitas tertutup pasca-acara.",
      icon: Sparkles,
      stat: "VIP Lounge & Merch",
    },
  ];

  // Keynote Speakers Data
  const keynoteSpeakers = [
    {
      id: "alex",
      name: "Alex Pratama",
      role: "CEO & Co-Founder",
      company: "Techverse",
      category: "Technology",
      image: "/templates/ticketing/speaker-1.webp",
      topic: "The Future of Spatial Systems & Next-Gen Computing",
    },
    {
      id: "sarah",
      name: "Sarah Wijaya",
      role: "Founder & Creative Lead",
      company: "Lumina Studio",
      category: "Brand & Design",
      image: "/templates/ticketing/speaker-2.webp",
      topic: "Building Resilient Brands in the Autonomous Age",
    },
    {
      id: "ryan",
      name: "Ryan Maulana",
      role: "VP of Product",
      company: "Nusantara AI",
      category: "Artificial Intelligence",
      image: "/templates/ticketing/speaker-3.webp",
      topic: "Practical AI Architecture for High-Scale Platforms",
    },
    {
      id: "diana",
      name: "Diana Lestari",
      role: "Chief Experience Officer",
      company: "Kreasi.id",
      category: "Experience Design",
      image: "/templates/ticketing/speaker-4.webp",
      topic: "Human Resonance: Crafting Sensory Digital Journeys",
    },
  ];

  // Ticket Tiers data with curated features
  const ticketTiers: TicketTier[] = [
    {
      id: "general",
      code: "PASS 01",
      name: "General Admission",
      price: 499000,
      formattedPrice: "Rp 499.000",
      description: locale === "en" 
        ? "Comprehensive access to all keynote sessions, panels, and tech expo zones."
        : "Akses komprehensif ke panggung utama dan seluruh zona festival.",
      features: [
        "Akses penuh ke semua sesi keynote & panel",
        "Akses ke area pameran & teknologi",
        "E-Sertifikat kehadiran resmi",
        "Akses open networking space",
      ],
    },
    {
      id: "vip",
      code: "PASS 02 // VIP",
      name: "VIP All-Access",
      price: 999000,
      formattedPrice: "Rp 999.000",
      description: locale === "en"
        ? "The most exclusive summit experience with front-row seating and private lounge perks."
        : "Pengalaman paling eksklusif dengan kenyamanan dan privilese lounge utama.",
      isPopular: true,
      features: [
        "Semua keuntungan tiket General",
        "Akses eksklusif VIP Lounge & refreshments",
        "Prioritas kursi baris terdepan (Row A-C)",
        "Sesi Meet & Greet intim bersama speakers",
        "Exclusive summit goodie bag & merchandise",
      ],
    },
    {
      id: "student",
      code: "PASS 03",
      name: "Student Pass",
      price: 299000,
      formattedPrice: "Rp 299.000",
      description: locale === "en"
        ? "Dedicated special tariff for active college and university students."
        : "Akses terjangkau khusus pelajar & mahasiswa aktif berprestasi.",
      features: [
        "Akses penuh panggung seminar & workshop",
        "Akses student innovation hub",
        "Digital badge & e-sertifikat",
        "Wajib verifikasi Kartu Mahasiswa aktif",
      ],
    },
    {
      id: "group",
      code: "PASS 04",
      name: "Group Delegation (5+)",
      price: 1999000,
      formattedPrice: "Rp 1.999.000",
      description: locale === "en"
        ? "Collective delegation pass with special group discount for teams of five."
        : "Paket delegasi tim dan kolektif dengan harga hemat khusus grup.",
      features: [
        "5x Tiket akses penuh untuk tim",
        "Reserved table khusus di Main Hall",
        "Sesi konsultasi grup khusus",
        "Hemat hingga 20% dibanding tiket satuan",
      ],
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

      {/* 03. WINDOW 3: WHY ATTEND SECTION (Architectural Minimalist Columns, Scaled Naked Icons) */}
      <section
        id="why-attend"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                WHY ATTEND
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                {locale === "en" ? "What Will You Experience?" : "Apa yang Akan Kamu Dapatkan?"}
              </h2>
            </div>
            <p className="text-sm font-light text-neutral-400 max-w-md leading-relaxed">
              {locale === "en"
                ? "From profound keynotes to elite networking, every facet is curated for innovators shaping the future."
                : "Dari sesi inspiratif mendalam hingga koneksi bernilai tinggi, setiap detail dirancang untuk para inovator masa depan."}
            </p>
          </div>

          {/* 4 Architectural Columns: Clean, Scaled Icons, Hairline Top Border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {whyAttendPillars.map((pillar) => {
              const IconComponent = pillar.icon;
              return (
                <div
                  key={pillar.index}
                  className="group relative pt-8 border-t border-white/10 hover:border-amber-400/60 transition-colors duration-500 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    {/* Monospace Index & Pill Stat */}
                    <div className="flex items-center justify-between mb-8">
                      <span className="text-xs font-mono tracking-widest text-neutral-500 group-hover:text-amber-400 transition-colors">
                        {pillar.index} // {pillar.code}
                      </span>
                      <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded border border-white/10 text-neutral-400 bg-white/[0.02] group-hover:border-amber-400/40 group-hover:text-amber-300 transition-colors">
                        {pillar.stat}
                      </span>
                    </div>

                    {/* Scaled Naked Icon */}
                    <div className="mb-6">
                      <IconComponent className="h-8 w-8 text-neutral-300 group-hover:text-amber-400 stroke-[1.25] transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1" />
                    </div>

                    {/* Pillar Title & Description */}
                    <h3 className="text-lg sm:text-xl font-normal text-white mb-2.5 tracking-tight group-hover:text-amber-100 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-light text-neutral-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Micro Accent Indicator */}
                  <div className="pt-6">
                    <div className="w-0 group-hover:w-12 h-[1px] bg-amber-400 transition-all duration-500" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 04. WINDOW 4: SPEAKERS SECTION (Exclusive Full-Bleed Edge-to-Edge Portrait Cards, Minimalist Borders) */}
      <section
        id="speakers"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                SPEAKERS
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                {locale === "en" ? "Keynote Lineup" : "Pembicara Utama"}
              </h2>
            </div>
            <a
              href="#speakers"
              className="inline-flex items-center gap-1.5 text-xs font-light text-neutral-400 hover:text-amber-400 transition-colors cursor-pointer group"
            >
              <span>{locale === "en" ? "View All Speakers" : "Lihat Selengkapnya"}</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* 4 Speaker Cards: Full Bleed without padding/margin, minimal hairline border */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {keynoteSpeakers.map((speaker) => (
              <div
                key={speaker.id}
                className="group relative aspect-[3/4] sm:aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-amber-400/50 transition-all duration-500 shadow-2xl bg-neutral-950"
              >
                {/* Full-Bleed Image: No inner padding/margin */}
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Floating Category Tag (Top Left) */}
                <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-neutral-300 group-hover:border-amber-400/40 group-hover:text-amber-300 transition-colors">
                  {speaker.category}
                </div>

                {/* Micro Action Button (Top Right, revealed on hover) */}
                <div className="absolute top-4 right-4 z-10 h-8 w-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-neutral-400 group-hover:text-amber-400 group-hover:border-amber-400/40 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>

                {/* Cinematic Bottom Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none transition-opacity duration-300" />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Speaker Information: Laid directly over photo bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight group-hover:text-amber-200 transition-colors">
                    {speaker.name}
                  </h3>
                  <p className="text-xs font-light text-neutral-300 mt-1">
                    {speaker.role} • <span className="text-neutral-400">{speaker.company}</span>
                  </p>
                  <p className="text-[11px] font-light text-neutral-400 line-clamp-1 mt-2.5 pt-2.5 border-t border-white/10 group-hover:text-neutral-200 transition-colors">
                    "{speaker.topic}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. WINDOW 5: TICKET SECTION (Luxury Admission Passes, Perforated Details, Curated Benefits) */}
      <section
        id="tickets"
        className="relative min-h-screen w-full flex items-center justify-center py-24 px-6 sm:px-12 lg:px-20 bg-black scroll-mt-16"
      >
        <div className="max-w-7xl mx-auto w-full">
          {/* Header Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                TICKET
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight">
                {locale === "en" ? "Select Your Pass" : "Pilih Tiketmu"}
              </h2>
            </div>
            <p className="text-sm font-light text-neutral-400 max-w-md leading-relaxed">
              {locale === "en"
                ? "Every pass includes full admission to all keynotes, exhibition spaces, and the official opening ceremony."
                : "Semua tiket sudah termasuk akses ke semua sesi, seremoni pembukaan, dan area pameran inovasi."}
            </p>
          </div>

          {/* 4 Ticket Cards: Designed as Luxury Admission Passes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ticketTiers.map((tier) => {
              const isVip = tier.isPopular;
              return (
                <div
                  key={tier.id}
                  className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden group ${
                    isVip
                      ? "border border-amber-500/80 bg-gradient-to-b from-amber-950/25 via-neutral-950 to-neutral-950 shadow-[0_0_40px_rgba(245,158,11,0.12)]"
                      : "border border-neutral-800/90 bg-neutral-950/90 hover:border-neutral-700"
                  }`}
                >
                  {/* Subtle Background Glow for VIP */}
                  {isVip && (
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-amber-500/10 blur-2xl pointer-events-none" />
                  )}

                  {/* Top Tier Header */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono tracking-widest text-neutral-500 group-hover:text-amber-400 transition-colors uppercase">
                        {tier.code}
                      </span>
                      {isVip ? (
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-amber-400 text-black font-semibold shadow-sm">
                          {locale === "en" ? "Most Popular" : "Pilihan Utama"}
                        </span>
                      ) : (
                        <span className="text-[10px] font-mono tracking-wider text-neutral-500 uppercase">
                          LIMITED
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg sm:text-xl font-normal text-white mb-2 tracking-tight group-hover:text-amber-100 transition-colors">
                      {tier.name}
                    </h3>
                    <p className="text-xs font-light text-neutral-400 leading-relaxed mb-6 min-h-[36px]">
                      {tier.description}
                    </p>

                    {/* Perforated Ticket Stub Line */}
                    <div className="relative my-6 border-t border-dashed border-white/10">
                      <div className="absolute -left-9 sm:-left-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-r border-white/10" />
                      <div className="absolute -right-9 sm:-right-10 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-black border-l border-white/10" />
                    </div>

                    {/* Curated Features Checklist */}
                    <div className="space-y-2.5 mb-6">
                      <div className="text-[10px] font-mono tracking-wider uppercase text-neutral-500 mb-3">
                        {locale === "en" ? "What's Included:" : "Fasilitas Termasuk:"}
                      </div>
                      {tier.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2.5 text-xs font-light text-neutral-300">
                          <CheckCircle2
                            className={`h-3.5 w-3.5 shrink-0 stroke-[2] mt-0.5 ${
                              isVip ? "text-amber-400" : "text-neutral-500 group-hover:text-amber-400/80 transition-colors"
                            }`}
                          />
                          <span className="leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action Button */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="mb-4">
                      <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-wider block mb-1">
                        Investment
                      </span>
                      <div className="text-2xl font-light text-white tracking-tight flex items-baseline gap-1.5">
                        <span>{tier.formattedPrice}</span>
                        <span className="text-[11px] font-light text-neutral-500">/ person</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => openPurchaseModal(tier)}
                      className={`w-full h-11 rounded-lg text-xs uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 ${
                        isVip
                          ? "bg-amber-400 hover:bg-amber-300 text-black font-semibold shadow-lg shadow-amber-500/20"
                          : "border border-neutral-800 text-white hover:border-amber-400/60 bg-neutral-900/80 hover:bg-neutral-900"
                      }`}
                    >
                      <span>{locale === "en" ? "Reserve Pass" : "Beli Tiket"}</span>
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

      {/* 07. CLOSING CTA BANNER (Exclusive Dark Silk Curtain Background & Minimalist Eyebrow) */}
      <section id="cta" className="relative w-full py-20 px-6 sm:px-12 lg:px-20 bg-black scroll-mt-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-14 lg:p-16 bg-black bg-[url('/templates/ticketing/cta-silk-dark.webp')] bg-cover bg-center">
            {/* Ambient Dark Overlay for subtle silk fold sheen & perfect typography contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/85 pointer-events-none" />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-2xl">
                {/* Simplified Minimalist Eyebrow without dot matching THE EVENT */}
                <div className="text-xs font-mono tracking-[0.25em] text-neutral-400 uppercase mb-3">
                  {locale === "en" ? "LIMITED PRESALE" : "KUOTA TERBATAS"}
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight mb-4">
                  {locale === "en"
                    ? "Be Part of an Extraordinary Gathering"
                    : "Siap Menjadi Bagian dari Pengalaman Eksklusif Ini?"}
                </h3>
                <p className="text-sm sm:text-base font-light text-neutral-400 leading-relaxed">
                  {locale === "en"
                    ? "Secure your premier seat today before the registration phase concludes. Join 1,000+ top creators and innovators."
                    : "Amankan kursi terbaikmu sekarang sebelum periode registrasi berakhir. Bergabunglah dengan 1.000+ pemikir dan inovator terkemuka."}
                </p>
              </div>

              {/* Action Hub: Direct Button + Sleek Form */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0">
                <a
                  href="#tickets"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-amber-400 hover:bg-amber-300 text-black text-xs font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer gap-2 shadow-xl shadow-amber-500/25"
                >
                  <span>{locale === "en" ? "Reserve Tickets Now" : "Dapatkan Tiket Sekarang"}</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                {/* Newsletter Form */}
                <form onSubmit={handleNewsletterSubmit} className="flex items-center gap-2">
                  <input
                    type="email"
                    required
                    placeholder={locale === "en" ? "Enter your email for perks" : "Email untuk info & perks"}
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="h-11 px-4 rounded-lg bg-black/80 border border-neutral-800 text-xs text-white placeholder:text-neutral-500 focus:outline-none focus:border-amber-400/80 w-full sm:w-64"
                  />
                  <button
                    type="submit"
                    className="h-11 px-5 rounded-lg border border-white/20 hover:border-amber-400 text-white hover:text-amber-400 text-xs font-medium uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0 bg-white/5"
                  >
                    {newsletterSubscribed ? "✓ Subscribed" : "Update"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08. FOOTER (Architectural Typography & Refined Minimalist Structure) */}
      <footer className="relative w-full bg-black py-16 px-6 sm:px-12 lg:px-20 text-xs font-light text-neutral-400">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
            {/* Brand & Event Meta (Cols 1-5) */}
            <div className="md:col-span-5">
              <div className="text-xl font-light tracking-[0.25em] text-white mb-3">
                LOREM IPSUM
              </div>
              <p className="text-xs font-light text-neutral-400 leading-relaxed max-w-sm mb-6">
                {locale === "en"
                  ? "An international gathering dedicated to fostering innovation, design excellence, and high-impact partnerships."
                  : "Platform konferensi eksklusif yang mempertemukan inovator, kreator, dan para pemimpin industri masa depan."}
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md border border-neutral-800 bg-neutral-950 text-[11px] font-mono text-neutral-300">
                <MapPin className="h-3.5 w-3.5 text-amber-400" />
                <span>23 Agustus 2025 • The Ritz-Carlton Jakarta</span>
              </div>
            </div>

            {/* Navigation Links (Cols 6-8) */}
            <div className="md:col-span-3">
              <div className="text-[10px] font-mono tracking-widest text-amber-400 uppercase mb-4">
                NAVIGATION
              </div>
              <ul className="space-y-2.5 text-xs uppercase tracking-wider">
                <li>
                  <a href="#hero" className="hover:text-white transition-colors cursor-pointer">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#event" className="hover:text-white transition-colors cursor-pointer">
                    The Event
                  </a>
                </li>
                <li>
                  <a href="#why-attend" className="hover:text-white transition-colors cursor-pointer">
                    Why Attend
                  </a>
                </li>
                <li>
                  <a href="#speakers" className="hover:text-white transition-colors cursor-pointer">
                    Speakers
                  </a>
                </li>
                <li>
                  <a href="#tickets" className="hover:text-white transition-colors cursor-pointer">
                    Ticket Tiers
                  </a>
                </li>
              </ul>
            </div>

            {/* Social & Connect (Cols 9-12) */}
            <div className="md:col-span-4">
              <div className="text-[10px] font-mono tracking-widest text-amber-400 uppercase mb-4">
                CONNECT & INQUIRIES
              </div>
              <p className="text-xs font-light text-neutral-400 mb-4">
                {locale === "en"
                  ? "For sponsorship, media partnership, or concierge ticket inquiries:"
                  : "Untuk pertanyaan sponsorship, kemitraan media, atau bantuan tiket VIP:"}
              </p>
              <div className="text-xs font-mono text-neutral-200 mb-6">
                concierge@loremipsum.id
              </div>

              {/* Social Icon Pills */}
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-9 w-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  className="h-9 w-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  className="h-9 w-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
                >
                  <Youtube className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-9 w-9 rounded-full border border-neutral-800 flex items-center justify-center hover:border-amber-400 hover:text-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.2)] transition-all cursor-pointer"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Legal */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-neutral-500">
            <div>© 2025 Lorem Ipsum Summit. All rights reserved.</div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer">
                Terms of Service
              </a>
              <a href="#" className="hover:text-neutral-300 transition-colors cursor-pointer">
                Security & Compliance
              </a>
            </div>
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
