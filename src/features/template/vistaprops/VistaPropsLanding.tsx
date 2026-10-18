import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useVelocity,
  useSpring,
  useAnimationFrame,
  useMotionValue,
  type MotionValue,
} from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { getWhatsAppLink } from "../../../lib/utils";

interface VistaPropsLandingProps {
  lang?: "id" | "en";
}

// Arrow Icon matching reference SVG
function SvgArrow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center shrink-0 ${className}`}>
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.2539 6.11092L5.87125 0.728237L6.47607 0.123413L12.8768 6.52413L6.82855 12.5724L6.22373 11.9676L11.225 6.96627L0.61396 6.96627L0.61396 6.11092L11.2539 6.11092Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}

// Bespoke Lorem Architectural Logo SVG & Typography
function LoremLogo({
  symbolColor = "currentColor",
  showLetters = true,
}: {
  symbolColor?: string;
  showLetters?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      {/* Modern architectural geometry emblem representing 'L' & structural column pillars */}
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="6" height="24" rx="1" fill={symbolColor} />
        <rect x="4" y="22" width="24" height="6" rx="1" fill={symbolColor} />
        <rect x="13" y="10" width="15" height="4" rx="0.5" fill={symbolColor} fillOpacity="0.45" />
        <rect x="13" y="16" width="10" height="4" rx="0.5" fill={symbolColor} fillOpacity="0.3" />
      </svg>
      {showLetters && (
        <span
          className="text-base md:text-lg font-bold tracking-[0.28em] uppercase leading-none"
          style={{ color: symbolColor, fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
        >
          LOREM
        </span>
      )}
    </div>
  );
}

// Word-by-word scroll reveal component for "Kami mengeksekusi..."
function WordRevealHeading({ text, className = "" }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.45"],
  });

  const words = text.split(" ");

  return (
    <h3
      ref={containerRef}
      className={`text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.35] text-[#1e1e1e] font-normal max-w-4xl mb-14 sm:mb-16 flex flex-wrap gap-x-[0.3em] gap-y-1.5 ${className}`}
      style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <WordSpan key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </WordSpan>
        );
      })}
    </h3>
  );
}

function WordSpan({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className="word transition-colors duration-200 inline-block font-normal"
    >
      {children}
    </motion.span>
  );
}

// Word-by-word scroll reveal for Featured Lead Text ("Lorem adalah pengembang...")
interface LeadWordItem {
  text: string;
  isScript?: boolean;
}

function LeadWordReveal({
  items,
  className = "",
}: {
  items: LeadWordItem[];
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.95", "end 0.50"],
  });

  return (
    <div
      ref={containerRef}
      className={`featured-text text-2xl sm:text-3xl md:text-[2.25rem] leading-[1.3] text-[#1e1e1e] font-normal max-w-5xl tracking-tight flex flex-wrap gap-x-[0.28em] gap-y-1.5 ${className}`}
      style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
    >
      {items.map((item, i) => {
        const start = i / items.length;
        const end = start + 1 / items.length;
        return (
          <LeadWordSpan
            key={i}
            progress={scrollYProgress}
            range={[start, end]}
            isScript={item.isScript}
          >
            {item.text}
          </LeadWordSpan>
        );
      })}
    </div>
  );
}

function LeadWordSpan({
  children,
  progress,
  range,
  isScript = false,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isScript?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={`word transition-colors duration-200 inline-block ${
        isScript
          ? "font-script text-[#d43331] text-[1.25em] font-normal px-1"
          : "font-normal"
      }`}
    >
      {children}
    </motion.span>
  );
}

// GiLabs Official Brand Emblem SVG (from /public/favicon.svg)
function GiLabsLogoEmblem({
  className = "w-7 h-7",
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 640 640"
      fill={color}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)" stroke="none">
        <path d="M780 3200 l0 -2620 1090 0 1090 0 0 435 0 435 -655 0 -655 0 0 1750 0 1750 900 0 900 0 0 -530 0 -530 435 0 435 0 0 965 0 965 -1770 0 -1770 0 0 -2620z" />
        <path d="M2550 2965 l0 -435 450 0 450 0 0 -975 0 -975 1090 0 1090 0 0 435 0 435 -655 0 -655 0 0 975 0 975 -885 0 -885 0 0 -435z" />
      </g>
    </svg>
  );
}

// Dynamic continuous marquee that glides left on scroll down, and right on scroll up
// Dynamic continuous marquee that glides gently, left on scroll down, and right on scroll up
function DynamicScrollMarquee({
  children,
  baseSpeed = 0.025,
  className = "",
}: {
  children: React.ReactNode;
  baseSpeed?: number;
  className?: string;
}) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });

  const directionFactor = useRef<-1 | 1>(-1); // -1: moving left (scroll down), 1: moving right (scroll up)
  const isHovered = useRef(false);

  useAnimationFrame((_t, delta) => {
    const currentVelocity = smoothVelocity.get();

    // When scrolling down (currentVelocity > 10), glides left (-1)
    // When scrolling up (currentVelocity < -10), glides right (1)
    if (currentVelocity > 10) {
      directionFactor.current = -1;
    } else if (currentVelocity < -10) {
      directionFactor.current = 1;
    }

    // Very gentle velocity boost while scrolling, maintaining quiet continuous glide when idle
    const velocityBoost = Math.min(Math.abs(currentVelocity) * 0.00012, 0.08);
    const speedMultiplier = isHovered.current ? 0.3 : 1;
    const moveBy =
      directionFactor.current *
      (baseSpeed + velocityBoost) *
      (delta / 16) *
      speedMultiplier;

    baseX.set(baseX.get() + moveBy);
  });

  // Seamless wrap between -25% and 0% for 4 repeated sets of children
  const x = useTransform(baseX, (v) => {
    const min = -25;
    const max = 0;
    const range = max - min;
    const wrapped = ((((v - min) % range) + range) % range) + min;
    return `${wrapped}%`;
  });

  return (
    <div
      onMouseEnter={() => {
        isHovered.current = true;
      }}
      onMouseLeave={() => {
        isHovered.current = false;
      }}
      className={`overflow-hidden select-none whitespace-nowrap flex flex-nowrap ${className}`}
    >
      <motion.div
        className="flex flex-nowrap items-center w-max shrink-0 will-change-transform"
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// Capability row with word-by-word scroll reveal for Solutions section
function CapabilityRevealItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ["start 0.90", "end 0.45"],
  });

  const titleWords = title.split(" ");
  const descWords = description.split(" ");
  const totalWords = titleWords.length + descWords.length;

  return (
    <div
      ref={itemRef}
      className="border-t border-[#edebe4] py-10 sm:py-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start group"
    >
      {/* Index Column */}
      <div className="md:col-span-2 flex items-center gap-3">
        <span className="text-sm font-mono tracking-widest text-[#baa184] font-semibold">
          {number}
        </span>
        <div className="w-10 h-[1px] bg-[#baa184]/40" />
      </div>

      {/* Capability Title Column with Word Reveal */}
      <div className="md:col-span-5">
        <h4
          className="text-2xl sm:text-3xl lg:text-[2rem] font-normal text-[#1e1e1e] leading-[1.25] flex flex-wrap gap-x-[0.28em] gap-y-1"
          style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
        >
          {titleWords.map((word, i) => {
            const start = (i / totalWords) * 0.6;
            const end = start + 1 / totalWords;
            return (
              <WordSpan key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </WordSpan>
            );
          })}
        </h4>
      </div>

      {/* Capability Description Column with Word Reveal */}
      <div className="md:col-span-5">
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-light flex flex-wrap gap-x-[0.25em] gap-y-1">
          {descWords.map((word, i) => {
            const wordIdx = titleWords.length + i;
            const start = 0.2 + (i / descWords.length) * 0.75;
            const end = Math.min(1, start + 1 / descWords.length);
            return (
              <WordSpan key={wordIdx} progress={scrollYProgress} range={[start, end]}>
                {word}
              </WordSpan>
            );
          })}
        </p>
      </div>
    </div>
  );
}

export default function VistaPropsLanding({ lang = "id" }: VistaPropsLandingProps) {
  const isEn = lang === "en";

  // 1. Revealing Navbar scroll monitoring without layout overlap
  const [isScrolled, setIsScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);


  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const scrollThreshold = 140;

      if (currentScroll > scrollThreshold) {
        setIsScrolled(true);
        if (currentScroll > lastScroll) {
          // Scrolling down -> hide navbar
          setNavVisible(false);
        } else {
          // Scrolling up -> show fixed navbar floating below demo bar
          setNavVisible(true);
        }
      } else {
        setIsScrolled(false);
        setNavVisible(true);
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Parallax scroll hooks
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Reveal Parallax Y for <main id="reveal-section">:
  // At scroll 0: -200px (tucked behind the 100px bottom curve of hero)
  // Moving to 0px as user scrolls to 500px
  const revealY = useTransform(scrollY, [0, 500], [-200, 0]);

  // Scroll-linked opacity & subtle Y for featured-text:
  // Starts at 0 (invisible when hero is at top), increases to 1.0
  const featuredTextOpacity = useTransform(scrollY, [60, 380], [0, 1]);
  const featuredTextY = useTransform(scrollY, [60, 380], [25, 0]);

  // Featured warehouse image zoom-in parallax:
  // Starts at scale 0.90 (as shown in user snippet scale3d(0.9, 0.9, 1)) and scales up to 1.0
  const warehouseScale = useTransform(scrollY, [70, 1000], [0.85, 1.0]);

  // Purpose section parallax
  const purposeRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: purposeScroll } = useScroll({
    target: purposeRef,
    offset: ["start end", "end start"],
  });
  const purposeTextX = useTransform(purposeScroll, [0, 1], ["0%", "-15%"]);
  const purposeImgY = useTransform(purposeScroll, [0, 1], ["80px", "-60px"]);

  // Details section parallax
  const detailsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: detailsScroll } = useScroll({
    target: detailsRef,
    offset: ["start end", "end start"],
  });
  const detailsTextX = useTransform(detailsScroll, [0, 1], ["-10%", "5%"]);
  const detailsImgY = useTransform(detailsScroll, [0, 1], ["80px", "-60px"]);

  // Relationships section parallax
  const relRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: relScroll } = useScroll({
    target: relRef,
    offset: ["start end", "end start"],
  });
  const relTextX = useTransform(relScroll, [0, 1], ["0%", "-12%"]);
  const relImgY = useTransform(relScroll, [0, 1], ["80px", "-60px"]);

  // GiLabs Official Brands for the dynamic scroll-direction marquee
  const gilabsBrands = [
    { name: "GiLabs Studio", sub: "Creative & Engineering" },
    { name: "gilabs.id", sub: "Digital Ecosystem" },
    { name: "GiLabs Capital", sub: "Strategic Growth" },
    { name: "GiLabs Enterprise", sub: "Enterprise Software" },
    { name: "GiLabs Properties", sub: "Commercial Assets" },
    { name: "GiLabs Research", sub: "Applied Intelligence" },
    { name: "GiLabs Cloud", sub: "Infrastructure" },
    { name: "GiLabs Architecture", sub: "Spatial Development" },
  ];

  // Deals section scroll-based animation:
  // Frame 1: Cards start sejajar (y = 0px for all cards)
  // Frame 2: On scroll, cards transition into a stepped layout where elevated cards scroll faster and stick up ("menonjol ke atas")
  const dealsSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress: dealsScrollProgress } = useScroll({
    target: dealsSectionRef,
    offset: ["start end", "end start"],
  });
  const dealsParallaxLow = useTransform(dealsScrollProgress, [0, 0.45, 1], ["0px", "35px", "55px"]);
  const dealsParallaxHigh = useTransform(dealsScrollProgress, [0, 0.45, 1], ["0px", "-120px", "-165px"]);
  const dealsParallaxMid = useTransform(dealsScrollProgress, [0, 0.45, 1], ["0px", "-45px", "-70px"]);

  // Track record deals list (stepped staircase dynamic layout on scroll)
  const deals = [
    {
      title: "Church Street",
      location: "CBD",
      spec: "24,000 m² Bulk",
      category: isEn ? "Development Site" : "Lahan Pengembangan",
      image: "/templates/vistaprops/deals/deal-1-church-street.webp",
      parallax: dealsParallaxLow,
    },
    {
      title: "Lower Main Road",
      location: "Observatory",
      spec: "573 m²",
      category: isEn ? "Restaurant & Bar" : "Restoran & Bar",
      image: "/templates/vistaprops/deals/deal-2-lower-main-road.webp",
      parallax: dealsParallaxHigh,
    },
    {
      title: "The Silo",
      location: "V&A Waterfront",
      spec: "1,120 m²",
      category: isEn ? "Office" : "Perkantoran",
      image: "/templates/vistaprops/deals/deal-3-the-silo.webp",
      parallax: dealsParallaxMid,
    },
    {
      title: "Buitengracht Street",
      location: "CBD",
      spec: "4,864 m²",
      category: isEn ? "Mixed Use" : "Kawasan Terpadu",
      image: "/templates/vistaprops/deals/deal-4-buitengracht-street.webp",
      parallax: dealsParallaxLow,
    },
    {
      title: "Loop Street",
      location: "CBD",
      spec: isEn ? "Prime Retail" : "Komersial Utama",
      category: isEn ? "Retail" : "Ritel Komersial",
      image: "/templates/vistaprops/deals/deal-5-loop-street.webp",
      parallax: dealsParallaxHigh,
    },
    {
      title: "Burg Street",
      location: "CBD",
      spec: "1,078 m²",
      category: isEn ? "Residential" : "Residensial",
      image: "/templates/vistaprops/deals/deal-6-burg-street.webp",
      parallax: dealsParallaxMid,
    },
    {
      title: "Wembley Square",
      location: "Gardens",
      spec: isEn ? "Lifestyle Hub" : "Pusat Gaya Hidup",
      category: isEn ? "Retail" : "Ritel Komersial",
      image: "/templates/vistaprops/deals/deal-7-wembley-square.webp",
      parallax: dealsParallaxLow,
    },
  ];

  // Editorial 5 capabilities list replacing bento cards
  const solutionCapabilities = isEn
    ? [
        {
          number: "01",
          title: "Underwriting & Due Diligence",
          description:
            "Disciplined capital allocation, comprehensive financial risk modeling, and thorough real-time market underwriting for high-yield returns.",
        },
        {
          number: "02",
          title: "Pre-development & Entitlement",
          description:
            "Navigating complex municipal zoning, regulatory approvals, and land assembly with precision to accelerate execution timelines.",
        },
        {
          number: "03",
          title: "Building Planning & Architectural Design",
          description:
            "Master-planned spatial layouts optimizing gross floor efficiency, enduring architectural aesthetics, and sustainable structural engineering.",
        },
        {
          number: "04",
          title: "Construction & Project Management",
          description:
            "Rigorous on-site oversight delivering projects on schedule, strictly within capital budgets, and to uncompromising build quality standards.",
        },
        {
          number: "05",
          title: "Property & Asset Management",
          description:
            "Long-term operational excellence, tenant retention strategies, and proactive asset management to maximize lasting commercial valuation.",
        },
      ]
    : [
        {
          number: "01",
          title: "Underwriting & Uji Kelayakan",
          description:
            "Alokasi modal terukur, pemodelan risiko finansial mendalam, dan analisis kelayakan komprehensif berbasis data pasar aktual untuk imbal hasil optimal.",
        },
        {
          number: "02",
          title: "Pra-Pengembangan & Perizinan",
          description:
            "Navigasi regulasi tata ruang zonasi, percepatan perizinan legalitas pemerintah, dan konsolidasi lahan strategis tanpa kendala birokrasi.",
        },
        {
          number: "03",
          title: "Perencanaan & Desain Gedung",
          description:
            "Rancang bangun terpadu yang memaksimalkan efisiensi ruang fungsional, estetika arsitektur berkelas, dan keberlanjutan struktur jangka panjang.",
        },
        {
          number: "04",
          title: "Manajemen Konstruksi & Proyek",
          description:
            "Pengawasan lapangan ketat untuk memastikan proyek rampung tepat waktu, disiplin sesuai anggaran biaya, dan memenuhi standar mutu tertinggi.",
        },
        {
          number: "05",
          title: "Pengelolaan Aset & Fasilitas",
          description:
            "Keunggulan operasional berkesinambungan, strategi retensi penyewa prima, dan optimalisasi aset komersial demi pertumbuhan nilai investasi.",
        },
      ];

  // Horizontal scroll for Deals track
  const dealsTrackRef = useRef<HTMLDivElement>(null);
  const scrollDeals = (direction: "left" | "right") => {
    if (dealsTrackRef.current) {
      const scrollAmount = direction === "left" ? -400 : 400;
      dealsTrackRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Lead text items for word-by-word reveal
  const leadWords: LeadWordItem[] = isEn
    ? [
        ..."Lorem is a privately owned investor pursuing opportunities across prime Indonesian markets. Established in 1998, our portfolio today spans over"
          .split(" ")
          .map((w) => ({ text: w, isScript: false })),
        ..."18 million square feet".split(" ").map((w) => ({ text: w, isScript: true })),
        ..."of modern industrial hubs, corporate offices, and master-planned developments."
          .split(" ")
          .map((w) => ({ text: w, isScript: false })),
      ]
    : [
        ..."Lorem adalah pengembang dan investor properti terintegrasi di Indonesia. Berdiri sejak 1998, portofolio kami kini mencakup lebih dari"
          .split(" ")
          .map((w) => ({ text: w, isScript: false })),
        ..."1,8 juta meter persegi".split(" ").map((w) => ({ text: w, isScript: true })),
        ..."kawasan industri, logistik modern, dan ruang komersial strategis."
          .split(" ")
          .map((w) => ({ text: w, isScript: false })),
      ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 4000);
    }
  };

  const ctaWhatsApp = getWhatsAppLink(
    "template",
    lang,
    isEn ? "Lorem Commercial Real Estate Template" : "Template Real Estate Lorem Properties"
  );

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-white text-[#1e1e1e] antialiased selection:bg-[#d43331] selection:text-white"
      style={{
        fontFamily: '"Libre Franklin", sans-serif',
      }}
    >
      {/* Global CSS helper for font-script & marquee */}
      <style>{`
        .font-script {
          font-family: 'Pinyon Script', cursive !important;
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ========================================================
          1. NAVIGATION (SEJAJAR KONSISTEN DENGAN CONTENT)
          - Ketika di posisi atas: absolute top-6 md:top-8.
          - Menggunakan pembungkus max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 yang SAMA PERSIS dengan konten di bawahnya.
          - Inner px-0 memastikan logo berada tepat di garis batas kiri konten (flush alignment).
          - Ketika scroll > 140px: fixed top-[46px] floating rapi tepat di bawah demo bar, bergeser keluar saat scroll ke bawah dan muncul saat scroll ke atas.
          ======================================================== */}
      <header
        className={`w-full transition-all duration-300 pointer-events-none ${
          isScrolled
            ? `fixed top-[46px] left-0 right-0 z-40 ${
                navVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
              }`
            : "absolute top-6 md:top-8 left-0 right-0 z-30"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 pointer-events-auto">
          <div
            className={`w-full flex items-center justify-between transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 backdrop-blur-md shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-neutral-200/60 rounded-xl px-5 py-3"
                : "bg-transparent px-0 py-2"
            }`}
          >
            {/* Brand Logo & Architectural Emblem */}
            <a href="#hero" className="flex items-center gap-2 cursor-pointer transition-transform hover:opacity-90">
              <LoremLogo
                symbolColor={isScrolled ? "#d43331" : "#ffffff"}
                showLetters={true}
              />
            </a>

            {/* Desktop Nav Links & CTA */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#deals"
                className={`text-sm font-medium transition-all relative group cursor-pointer ${
                  isScrolled ? "text-[#1e1e1e]" : "text-white"
                }`}
              >
                <span>{isEn ? "Deals" : "Transaksi"}</span>
                <span
                  className={`absolute left-0 bottom-[-4px] w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#1e1e1e]" : "bg-white"
                  }`}
                />
              </a>

              <a
                href="#solutions"
                className={`text-sm font-medium transition-all relative group cursor-pointer ${
                  isScrolled ? "text-[#1e1e1e]" : "text-white"
                }`}
              >
                <span>{isEn ? "Services" : "Layanan"}</span>
                <span
                  className={`absolute left-0 bottom-[-4px] w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#1e1e1e]" : "bg-white"
                  }`}
                />
              </a>

              <a
                href="#contact"
                className={`text-sm font-medium transition-all relative group cursor-pointer ${
                  isScrolled ? "text-[#1e1e1e]" : "text-white"
                }`}
              >
                <span>{isEn ? "Contact Us" : "Hubungi Kami"}</span>
                <span
                  className={`absolute left-0 bottom-[-4px] w-0 h-[1px] transition-all duration-300 group-hover:w-full ${
                    isScrolled ? "bg-[#1e1e1e]" : "bg-white"
                  }`}
                />
              </a>

              {/* Available Properties Button */}
              <div className="rounded-full overflow-hidden p-[1px]">
                <a
                  href={ctaWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2.5 px-5 py-2.5 text-xs font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                    isScrolled
                      ? "bg-[#d43331] text-white hover:bg-[#1e1e1e]"
                      : "border border-white/70 text-white hover:bg-white hover:text-[#1e1e1e] backdrop-blur-xs"
                  }`}
                >
                  <span>{isEn ? "Available Properties" : "Properti Tersedia"}</span>
                  <SvgArrow />
                </a>
              </div>

              {/* Language indicator */}
              <div className="flex items-center gap-1.5 text-xs font-medium">
                <span className={isEn ? (isScrolled ? "text-neutral-400" : "text-white/60") : (isScrolled ? "text-[#d43331] font-bold" : "text-white font-bold")}>ID</span>
                <span className={isScrolled ? "text-neutral-300" : "text-white/40"}>/</span>
                <span className={isEn ? (isScrolled ? "text-[#d43331] font-bold" : "text-white font-bold") : (isScrolled ? "text-neutral-400" : "text-white/60")}>EN</span>
              </div>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-full cursor-pointer focus:outline-none"
              aria-label="Toggle menu"
            >
              <div
                className={`w-5 h-[1.5px] transition-all duration-300 ${
                  isScrolled ? "bg-[#1e1e1e]" : "bg-white"
                } ${mobileMenuOpen ? "rotate-45 translate-y-[6px]" : ""}`}
              />
              <div
                className={`w-5 h-[1.5px] my-1 transition-all duration-300 ${
                  isScrolled ? "bg-[#1e1e1e]" : "bg-white"
                } ${mobileMenuOpen ? "opacity-0" : ""}`}
              />
              <div
                className={`w-5 h-[1.5px] transition-all duration-300 ${
                  isScrolled ? "bg-[#1e1e1e]" : "bg-white"
                } ${mobileMenuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-[#265073] text-white flex flex-col justify-between pt-28 pb-10 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <a
                href="#deals"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light py-3 border-b border-white/10 flex justify-between items-center cursor-pointer"
              >
                <span>{isEn ? "Track Record Deals" : "Rekam Jejak Transaksi"}</span>
                <SvgArrow />
              </a>
              <a
                href="#solutions"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light py-3 border-b border-white/10 flex justify-between items-center cursor-pointer"
              >
                <span>{isEn ? "Development Solutions" : "Solusi Pengembangan"}</span>
                <SvgArrow />
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-light py-3 border-b border-white/10 flex justify-between items-center cursor-pointer"
              >
                <span>{isEn ? "Contact Us" : "Hubungi Kami"}</span>
                <SvgArrow />
              </a>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href={ctaWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3.5 bg-[#d43331] text-white rounded-full font-medium text-sm cursor-pointer shadow-lg"
              >
                {isEn ? "Available Properties" : "Properti Tersedia"}
              </a>
              <p className="text-xs text-white/50 text-center">
                © Lorem Properties 2026.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================
          2. HERO SECTION
          - z-20 di atas <main id="reveal-section"> (z-10).
          - Lengkungan bawah rounded-b-[6.25rem] (100px) menutupi awal reveal-section.
          - Copywriting simpel, bersih, tanpa badge slop.
          - Menggunakan font-script untuk aksen.
          ======================================================== */}
      <section
        id="hero"
        className="hero-section relative z-20 w-full min-h-screen flex flex-col justify-center text-white bg-cover bg-center overflow-hidden shadow-2xl rounded-b-[2.5rem] sm:rounded-b-[4rem] lg:rounded-b-[6.25rem]"
        style={{
          backgroundImage: "url('/templates/vistaprops/hero-building.webp')",
        }}
      >
        {/* Subtle vignette gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/35 pointer-events-none" />

        {/* Hero Content Container - Aligned exactly with content grid */}
        <div className="hero-container relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 flex flex-col justify-center items-start pt-16 md:pt-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="hero-heading text-4xl sm:text-6xl md:text-[5.25rem] leading-[1.08] tracking-tight font-normal text-white max-w-4xl"
            style={{
              fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif',
            }}
          >
            {isEn ? (
              <>
                A{" "}
                <span className="font-script text-white text-[1.25em] font-normal tracking-wide inline-block px-1">
                  trusted
                </span>{" "}
                commercial
                <br />
                real estate partner
              </>
            ) : (
              <>
                Mitra{" "}
                <span className="font-script text-white text-[1.25em] font-normal tracking-wide inline-block px-1">
                  tepercaya
                </span>
                <br />
                real estate komersial
              </>
            )}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="btn-round mt-8 sm:mt-10"
          >
            <div className="rounded-full overflow-hidden p-[1px]">
              <a
                href={ctaWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn white inline-flex items-center gap-3 px-8 py-4 bg-white text-[#1e1e1e] font-medium text-sm rounded-full transition-all duration-300 hover:bg-[#1e1e1e] hover:text-white cursor-pointer shadow-xl hover:shadow-2xl"
              >
                <span className="btn-text font-semibold">{isEn ? "Available Properties" : "Properti Tersedia"}</span>
                <SvgArrow />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================
          3. MAIN REVEAL SECTION (<main id="reveal-section" class="main">)
          - Sesuai struktur Webflow inspect element pada referensi user:
            `<main id="reveal-section" class="main" style="will-change: transform; transform: translate3d(0px, -200px, 0px)...">`
          - z-10 di belakang hero (z-20), bergerak dengan parallax translateY dari -200px ke 0px saat scroll.
          - .featured-text memiliki opacity scroll-linked dari 0 ke 1.
          - Membungkus seluruh section: featured-text, featured-image, purpose, details, relationships, solutions, featured projects.
          - 5 grid-line arsitektural membentang di seluruh tinggi section main.
          ======================================================== */}
      <motion.main
        id="reveal-section"
        style={{ y: revealY }}
        className="main relative z-10 bg-white flex flex-col gap-20 sm:gap-28 pt-20 sm:pt-28 pb-20 sm:pb-28 overflow-hidden shadow-2xl"
      >
        {/* 5-column architectural background grid lines running down the entire main section */}
        <div className="grid absolute inset-0 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 pointer-events-none opacity-40">
          <div className="w-full h-full grid grid-cols-5 border-r border-[#edebe4]">
            <div className="grid-line border-l border-[#edebe4] h-full" />
            <div className="grid-line border-l border-[#edebe4] h-full" />
            <div className="grid-line border-l border-[#edebe4] h-full" />
            <div className="grid-line border-l border-[#edebe4] h-full" />
            <div className="grid-line border-l border-[#edebe4] h-full" />
          </div>
        </div>

        {/* --- 1. CONTAINER: FEATURED TEXT (REVEAL BEHIND HERO CURVE WITH WORD REVEAL) --- */}
        <div className="container relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
          <LeadWordReveal items={leadWords} />
        </div>

        {/* --- 2. CONTAINER FEATURE: FEATURED IMAGE (WAREHOUSE AERIAL ZOOM PARALLAX) --- */}
        <div className="container feature relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
          <div className="featured-image w-full h-[320px] sm:h-[480px] md:h-[520px] rounded-xl overflow-hidden">
            <motion.img
              style={{ scale: warehouseScale }}
              src="/templates/vistaprops/warehouse-aerial.webp"
              alt="Lorem premier logistics and commercial hub"
              className="responsive-img w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* --- 2B. BRAND MARQUEE: SOME OF THE PEOPLE WE'VE WORKED WITH (DYNAMIC SCROLL-DIRECTION) --- */}
        <div className="brand-marquee-section relative z-10 py-10 sm:py-14 overflow-hidden border-t border-b border-[#edebe4]/60">
          <div className="container max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 mb-8">
            <h3
              className="text-xs sm:text-sm uppercase tracking-[0.25em] text-[#baa184] font-semibold text-center"
              style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
            >
              {isEn ? "Some of the people we've worked with" : "Mitra korporasi & institusi yang telah berkolaborasi bersama kami"}
            </h3>
          </div>

          {/* Continuous Dynamic Scroll-Direction Marquee Track (Left on scroll down, Right on scroll up) */}
          <div className="relative w-full overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <DynamicScrollMarquee>
              <div className="flex items-center gap-8 sm:gap-14 pr-8 sm:pr-14 shrink-0">
                {gilabsBrands.map((brand, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 px-4 py-2 opacity-50 hover:opacity-100 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#edebe4]/70 group-hover:bg-[#d43331]/10 flex items-center justify-center p-1.5 transition-colors duration-300 shrink-0">
                      <GiLabsLogoEmblem className="w-full h-full text-[#1e1e1e] group-hover:text-[#d43331] transition-colors duration-300" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span
                        className="text-sm sm:text-base font-bold text-[#1e1e1e] tracking-tight group-hover:text-[#d43331] transition-colors duration-300 leading-none whitespace-nowrap"
                        style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
                      >
                        {brand.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#baa184] mt-1 whitespace-nowrap">
                        {brand.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </DynamicScrollMarquee>
          </div>
        </div>

        {/* --- 2C. TRACK RECORD DEALS SECTION: HERE ARE A FEW DEALS WE'VE HELPED CLIENTS CLOSE --- */}
        <section id="deals" ref={dealsSectionRef} className="deals-section relative z-10 py-16 sm:py-24 overflow-hidden">
          <div className="container max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 mb-10 sm:mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="section-heading-wrapper flex flex-col items-start">
                <h2
                  className="section-title text-2xl sm:text-3xl md:text-4xl text-[#1e1e1e] font-normal"
                  style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
                >
                  {isEn ? "Here are a few" : "Beberapa"}
                </h2>
                <div className="heading-flex flex items-center gap-4 sm:gap-6 mt-1">
                  <div className="heading-line w-12 sm:w-16 h-[2px] bg-[#baa184]" />
                  <span className="font-script text-[#1e1e1e] text-5xl sm:text-7xl md:text-8xl font-normal leading-none">
                    {isEn ? "portofolio" : "portofolio"}
                  </span>
                </div>
                <p className="section-paragraph text-sm sm:text-base text-neutral-600 font-light mt-3 max-w-md">
                  {isEn
                    ? "Strategic commercial properties and development sites we’ve helped clients close."
                    : "Aset komersial dan kawasan bisnis strategis yang sukses kami buat."}
                </p>

                <div className="btn-round outline rounded-full p-[1px] mt-6">
                  <a
                    href={ctaWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline inline-flex items-center gap-2.5 px-6 py-3 border border-[#baa184] text-[#1e1e1e] text-xs font-semibold rounded-full hover:bg-[#baa184] hover:text-[#1e1e1e] transition-all duration-300 cursor-pointer shadow-xs"
                  >
                    <span className="btn-text">{isEn ? "See All Transactions" : "Lihat Semua Portofolio"}</span>
                    <SvgArrow />
                  </a>
                </div>
              </div>

              {/* Prev / Next Scroll Arrows */}
              <div className="hidden sm:flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => scrollDeals("left")}
                  aria-label="Previous Deals"
                  className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white hover:border-[#1e1e1e] transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollDeals("right")}
                  aria-label="Next Deals"
                  className="w-12 h-12 rounded-full border border-neutral-300 flex items-center justify-center text-[#1e1e1e] hover:bg-[#1e1e1e] hover:text-white hover:border-[#1e1e1e] transition-all duration-300 cursor-pointer shadow-xs active:scale-95"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Drag/Scroll Deal Cards List with Stepped Staircase Layout ("seperti tangga") & Pixel Parallax */}
          <div
            ref={dealsTrackRef}
            className="deals-track flex items-start gap-6 sm:gap-8 overflow-x-auto scrollbar-none px-6 sm:px-12 md:px-24 pb-16 pt-6 select-none cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: "x mandatory" }}
          >
            {deals.map((deal, idx) => (
              <motion.div
                key={idx}
                style={{
                  y: deal.parallax,
                  scrollSnapAlign: "start",
                }}
                className="done-deals_component w-[280px] sm:w-[340px] md:w-[380px] shrink-0 flex flex-col will-change-transform mt-20 sm:mt-24 md:mt-28"
              >
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl group transition-transform duration-500 ease-out hover:scale-[1.02] hover:shadow-2xl cursor-pointer relative bg-[#edebe4]">
                  {/* Full Card Cover Image */}
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale"
                    loading="lazy"
                  />

                  {/* Top-Right Circular Action Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#1e1e1e] shadow-md transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-[#1e1e1e] group-hover:text-white z-20">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>

                  {/* Integrated Editorial Bottom Scrim & Typography (No Badges, No Clunky Status Bar) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-6 z-10">
                    <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase text-[#baa184]">
                      <span>{deal.location}</span>
                      <span>•</span>
                      <span>{deal.category}</span>
                    </div>
                    <h4
                      className="text-2xl font-normal text-white mt-1 tracking-tight"
                      style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
                    >
                      {deal.title}
                    </h4>
                    <p className="text-xs text-neutral-300 font-light mt-0.5">
                      {deal.spec}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- 3. SECTION-FULL: PURPOSE --- */}
        <div ref={purposeRef} className="section-full relative overflow-visible">
          {/* Giant Outline Watermark Text */}
          <motion.div
            style={{ x: purposeTextX }}
            className="background-text absolute top-[-4rem] sm:top-[-6rem] left-0 right-0 pointer-events-none select-none text-[10rem] sm:text-[16rem] md:text-[22rem] font-bold leading-none uppercase tracking-tighter opacity-15 overflow-visible whitespace-nowrap"
            aria-hidden="true"
          >
            <span
              style={{
                WebkitTextStroke: "1.5px #1e1e1e",
                color: "transparent",
              }}
            >
              purpose
            </span>
          </motion.div>

          <div className="container relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
            <div className="image-with-column grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Image Col */}
              <div className="image-col lg:col-span-3">
                <motion.div
                  style={{ y: purposeImgY }}
                  className="image-card w-full sm:w-[85%] aspect-square rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/templates/vistaprops/office-corner.webp"
                    alt="Lorem modern commercial facility architecture"
                    className="responsive-img w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Content Col */}
              <div className="content-col lg:col-span-2 flex flex-col items-start">
                <div className="section-heading-wrapper mb-6">
                  <h2
                    className="section-title text-2xl sm:text-3xl md:text-4xl text-[#1e1e1e] font-normal"
                    style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
                  >
                    {isEn ? "Investing with" : "Berinvestasi dengan"}
                  </h2>
                  <div className="heading-flex flex items-center gap-4 sm:gap-6 mt-1">
                    <div className="heading-line w-12 sm:w-16 h-[2px] bg-[#baa184]" />
                    <span className="font-script text-[#1e1e1e] text-5xl sm:text-7xl md:text-8xl font-normal leading-none">
                      {isEn ? "purpose" : "tujuan"}
                    </span>
                  </div>
                </div>

                <p className="section-paragraph text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-8 max-w-lg">
                  {isEn
                    ? "Throughout our history, we’ve watched markets evolve – shaping the experience that guides our investment discipline. We pursue assets with compelling value and enduring growth potential, making dynamic decisions free of unnecessary red tape."
                    : "Sepanjang perjalanan kami, kami memahami dinamika pasar yang terus berkembang. Kami berinvestasi secara terukur dan disiplin, memilih aset dengan nilai pertumbuhan tinggi serta bergerak dinamis memanfaatkan setiap peluang strategis."}
                </p>

                <div className="btn-round outline rounded-full p-[1px]">
                  <a
                    href={ctaWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline inline-flex items-center gap-2.5 px-6 py-3 border border-[#baa184] text-[#1e1e1e] text-xs font-semibold rounded-full hover:bg-[#baa184] hover:text-[#1e1e1e] transition-all duration-300 cursor-pointer"
                  >
                    <span className="btn-text">{isEn ? "Available Properties" : "Properti Tersedia"}</span>
                    <SvgArrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 4. SECTION-FULL: DETAILS --- */}
        <div ref={detailsRef} className="section-full relative overflow-visible">
          {/* Giant Outline Watermark Text */}
          <motion.div
            style={{ x: detailsTextX }}
            className="background-text absolute top-[-4rem] sm:top-[-6rem] left-0 right-0 pointer-events-none select-none text-[10rem] sm:text-[16rem] md:text-[22rem] font-bold leading-none uppercase tracking-tighter opacity-15 overflow-visible whitespace-nowrap"
            aria-hidden="true"
          >
            <span
              style={{
                WebkitTextStroke: "1.5px #1e1e1e",
                color: "transparent",
              }}
            >
              details
            </span>
          </motion.div>

          <div className="container relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
            <div className="image-with-column grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Content Col (Left on desktop) */}
              <div className="content-col lg:col-span-2 order-2 lg:order-1 flex flex-col items-start">
                <div className="section-heading-wrapper mb-6">
                  <h2
                    className="section-title text-2xl sm:text-3xl md:text-4xl text-[#1e1e1e] font-normal"
                    style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
                  >
                    {isEn ? "Delivering on" : "Menghadirkan"}
                  </h2>
                  <div className="heading-flex flex items-center gap-4 sm:gap-6 mt-1">
                    <div className="heading-line w-12 sm:w-16 h-[2px] bg-[#baa184]" />
                    <span className="font-script text-[#1e1e1e] text-5xl sm:text-7xl md:text-8xl font-normal leading-none">
                      {isEn ? "details" : "presisi"}
                    </span>
                  </div>
                </div>

                <p className="section-paragraph text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-8 max-w-lg">
                  {isEn
                    ? "We thrive on solving complex development challenges. Our vertically integrated team drives projects through every stage, blending internal engineering mastery with an extensive industry network to create lasting, functional architecture."
                    : "Kami unggul dalam menangani proyek berskala kompleks. Tim terintegrasi kami mengawal setiap fase pengembangan, memadukan keahlian teknis dengan jaringan industri yang luas untuk menghasilkan arsitektur fungsional yang berdaya tahan tinggi."}
                </p>

                <div className="btn-round outline rounded-full p-[1px]">
                  <a
                    href={ctaWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline inline-flex items-center gap-2.5 px-6 py-3 border border-[#baa184] text-[#1e1e1e] text-xs font-semibold rounded-full hover:bg-[#baa184] hover:text-[#1e1e1e] transition-all duration-300 cursor-pointer"
                  >
                    <span className="btn-text">{isEn ? "Available Properties" : "Properti Tersedia"}</span>
                    <SvgArrow />
                  </a>
                </div>
              </div>

              {/* Image Col (Right on desktop) */}
              <div className="image-col lg:col-span-3 order-1 lg:order-2 flex justify-end">
                <motion.div
                  style={{ y: detailsImgY }}
                  className="image-card right w-full sm:w-[85%] aspect-square rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/templates/vistaprops/facade-geometry.webp"
                    alt="Precision architectural facade"
                    className="responsive-img w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. SECTION-FULL: RELATIONSHIPS --- */}
        <div ref={relRef} className="section-full relative overflow-visible">
          {/* Giant Outline Watermark Text */}
          <motion.div
            style={{ x: relTextX }}
            className="background-text absolute top-[-4rem] sm:top-[-6rem] left-0 right-0 pointer-events-none select-none text-[8rem] sm:text-[14rem] md:text-[20rem] font-bold leading-none uppercase tracking-tighter opacity-15 overflow-visible whitespace-nowrap"
            aria-hidden="true"
          >
            <span
              style={{
                WebkitTextStroke: "1.5px #1e1e1e",
                color: "transparent",
              }}
            >
              relationships
            </span>
          </motion.div>

          <div className="container relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
            <div className="image-with-column grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
              {/* Image Col */}
              <div className="image-col lg:col-span-3">
                <motion.div
                  style={{ y: relImgY }}
                  className="image-card w-full sm:w-[85%] aspect-square rounded-xl overflow-hidden shadow-2xl"
                >
                  <img
                    src="/templates/vistaprops/condo-interior.webp"
                    alt="Modern executive interior spaces"
                    className="responsive-img w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              </div>

              {/* Content Col */}
              <div className="content-col lg:col-span-2 flex flex-col items-start">
                <div className="section-heading-wrapper mb-6">
                  <span className="font-script text-[#1e1e1e] text-5xl sm:text-7xl md:text-8xl font-normal leading-none block mb-1">
                    {isEn ? "Relationships" : "Kemitraan"}
                  </span>
                  <div className="heading-flex flex items-center gap-4 sm:gap-6 mt-1">
                    <div className="heading-line w-12 sm:w-16 h-[2px] bg-[#baa184]" />
                    <h2
                      className="section-title text-2xl sm:text-3xl md:text-4xl text-[#1e1e1e] font-normal"
                      style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
                    >
                      {isEn ? "are what matter" : "adalah yang utama"}
                    </h2>
                  </div>
                </div>

                <p className="section-paragraph text-sm sm:text-base text-neutral-600 leading-relaxed font-light mb-8 max-w-lg">
                  {isEn
                    ? "We believe every successful venture is founded on a trusted partnership. Built on honesty, transparency, and committed collaboration, our relationships stand strong for decades. Integrity underlines all we do."
                    : "Kami meyakini setiap kesepakatan terbaik berakar pada kemitraan yang kuat. Dibangun di atas fondasi keterbukaan, kejujuran, dan komitmen jangka panjang, integritas menjadi landasan utama setiap langkah kami."}
                </p>

                <div className="btn-round outline rounded-full p-[1px]">
                  <a
                    href={ctaWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn outline inline-flex items-center gap-2.5 px-6 py-3 border border-[#baa184] text-[#1e1e1e] text-xs font-semibold rounded-full hover:bg-[#baa184] hover:text-[#1e1e1e] transition-all duration-300 cursor-pointer"
                  >
                    <span className="btn-text">{isEn ? "Available Properties" : "Properti Tersedia"}</span>
                    <SvgArrow />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* --- 6. SECTION-FULL OVERFLOW-NONE: SOLUTIONS / 5-CARD MOSAIC --- */}
        <div id="solutions" className="section-full overflow-visible relative py-12 sm:py-16">
          {/* Watermark solutions */}
          <div className="background-text alt absolute bottom-[-4rem] sm:bottom-[-6.5rem] left-0 right-0 pointer-events-none select-none text-[10rem] sm:text-[16rem] md:text-[22rem] font-bold leading-none uppercase tracking-tighter opacity-10 overflow-visible whitespace-nowrap">
            <span style={{ WebkitTextStroke: "1.5px #baa184", color: "transparent" }}>
              solutions
            </span>
          </div>

          <div className="container alt relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24">
            <WordRevealHeading
              text={
                isEn
                  ? "We execute every project with a focus on costs, schedules, quality, and market-tailored solutions."
                  : "Kami mengeksekusi setiap proyek dengan fokus pada efisiensi biaya, ketepatan waktu, kualitas, dan solusi tepat guna."
              }
              className="text-2xl sm:text-3xl md:text-4xl leading-[1.3] text-[#1e1e1e] font-normal max-w-4xl tracking-tight mb-12 sm:mb-16"
            />

            {/* Editorial 5 Capabilities Text Reveal List replacing Bento Grid */}
            <div className="capabilities-list border-b border-[#edebe4] flex flex-col w-full">
              {solutionCapabilities.map((cap) => (
                <CapabilityRevealItem
                  key={cap.number}
                  number={cap.number}
                  title={cap.title}
                  description={cap.description}
                />
              ))}
            </div>
          </div>
        </div>

      </motion.main>

      {/* ========================================================
          4. PRE-FOOTER CTA SECTION
          ======================================================== */}
      <div className="section-full bg relative z-10 bg-[#edebe4] overflow-hidden py-24 sm:py-32">
        {/* Exclusive Silk Curtain Background Effect */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/templates/vistaprops/cta-curtain.webp"
            alt="Exclusive Silk Curtain Texture"
            className="w-full h-full object-cover object-right-top md:object-center opacity-45 mix-blend-multiply filter contrast-105"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#edebe4] via-[#edebe4]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#edebe4]/60 via-transparent to-[#edebe4]/60" />
        </div>

        <div className="container alt footer-logo relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 flex flex-col items-start">
          <div className="section-heading-wrapper mb-6">
            <h2
              className="section-title text-3xl sm:text-4xl md:text-5xl text-[#1e1e1e] font-normal"
              style={{ fontFamily: '"Avenir ltpro Roman", "Libre Franklin", sans-serif' }}
            >
              {isEn ? "Find your" : "Temukan ruang bisnis"}
            </h2>
            <div className="heading-flex flex items-center gap-4 sm:gap-6 mt-1">
              <div className="heading-line w-12 sm:w-16 h-[2px] bg-[#baa184]" />
              <span className="font-script text-[#1e1e1e] text-5xl sm:text-7xl md:text-8xl font-normal leading-none">
                {isEn ? "ideal space" : "ideal Anda"}
              </span>
            </div>
          </div>

          <p className="section-paragraph text-base sm:text-lg text-neutral-600 font-light mb-10 max-w-xl">
            {isEn
              ? "See what's available or contact us for personalized commercial leasing and development assistance."
              : "Lihat portofolio properti yang tersedia atau hubungi konsultan kami untuk kebutuhan sewa dan pengembangan kustom."}
          </p>

          <div className="flex-buttons flex flex-wrap items-center gap-4">
            <div className="btn-round rounded-full overflow-hidden p-[1px]">
              <a
                href={ctaWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex items-center gap-2.5 px-8 py-4 bg-[#1e1e1e] text-white text-xs font-semibold rounded-full hover:bg-[#d43331] transition-all duration-300 cursor-pointer shadow-lg"
              >
                <span className="btn-text">{isEn ? "Available Properties" : "Properti Tersedia"}</span>
                <SvgArrow />
              </a>
            </div>

            <div className="btn-round outline rounded-full p-[1px]">
              <a
                href="#contact"
                className="btn outline inline-flex items-center gap-2.5 px-8 py-4 border border-[#1e1e1e] text-[#1e1e1e] text-xs font-semibold rounded-full hover:bg-[#1e1e1e] hover:text-white transition-all duration-300 cursor-pointer"
              >
                <span className="btn-text">{isEn ? "Contact Us" : "Hubungi Kami"}</span>
                <SvgArrow />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================
          5. STICKY REVEAL FOOTER (.footer)
          ======================================================== */}
      <footer className="footer sticky bottom-0 z-0 bg-[#1e1e1e] text-white overflow-hidden">
        <div className="footer-container max-w-[1440px] mx-auto px-6 sm:px-12 md:px-24 py-16 sm:py-20">
          <div className="footer-grid grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 mb-16">
            {/* Col 1: Brand Monogram */}
            <div className="footer-col flex flex-col items-start">
              <LoremLogo symbolColor="#ffffff" showLetters={true} />
              <p className="text-xs text-neutral-400 mt-4 leading-relaxed font-light max-w-xs">
                {isEn
                  ? "Premier institutional developer and manager of high-yield commercial hubs, logistics terminals, and multi-residential assets."
                  : "Mitra tepercaya pengembangan dan investasi real estate komersial, pergudangan modern, dan hunian perkotaan prestisius."}
              </p>
            </div>

            {/* Col 2: About us */}
            <div className="footer-col flex flex-col gap-3">
              <h4 className="footer-header text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                {isEn ? "Portfolio & Deals" : "Portofolio & Transaksi"}
              </h4>
              <a href="#deals" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                {isEn ? "Logistics Centers" : "Kawasan Industri & Gudang"}
              </a>
              <a href="#deals" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                {isEn ? "Corporate Headquarters" : "Gedung Kantor Grade-A"}
              </a>
              <a href="#deals" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                {isEn ? "Luxury Living" : "Hunian Bertingkat"}
              </a>
            </div>

            {/* Col 3: Legal */}
            <div className="footer-col flex flex-col gap-3">
              <h4 className="footer-header text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                {isEn ? "Services" : "Layanan"}
              </h4>
              <a href="#solutions" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                {isEn ? "Feasibility & Zoning" : "Studi Kelayakan & Zonasi"}
              </a>
              <a href="#solutions" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                {isEn ? "Turnkey Development" : "Pembangunan Terpadu"}
              </a>
              <a href="#solutions" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                {isEn ? "Facility Management" : "Manajemen Fasilitas"}
              </a>
            </div>

            {/* Col 4: Get in Touch */}
            <div className="footer-col flex flex-col gap-3">
              <h4 className="footer-header text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-1">
                {isEn ? "Direct Contact" : "Kontak Langsung"}
              </h4>
              <a href="tel:+6289526770703" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                +62 895-2677-0703
              </a>
              <a href="mailto:info@loremproperties.com" className="footer-link text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer">
                info@loremproperties.com
              </a>
              <span className="text-xs text-neutral-500 mt-1">
                Jakarta • Surabaya • Medan
              </span>
            </div>

            {/* Col 5: Newsletter */}
            <div className="footer-col flex flex-col">
              <h4 className="footer-header text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-3">
                {isEn ? "Market Reports & Releases" : "Kabar Pasar & Rilis Properti"}
              </h4>

              <form onSubmit={handleNewsletterSubmit} className="relative w-full flex items-center">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={isEn ? "Enter business email" : "Alamat email kantor"}
                  required
                  className="w-full bg-transparent border-b border-white/40 pb-2.5 pr-10 text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Submit newsletter"
                  className="absolute right-0 bottom-2 text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  <SvgArrow />
                </button>
              </form>

              {newsletterSuccess && (
                <div className="flex items-center gap-1.5 text-xs text-emerald-400 mt-2 font-medium">
                  <Check className="w-3.5 h-3.5" />
                  <span>{isEn ? "Subscription confirmed. Thank you!" : "Terima kasih telah bergabung!"}</span>
                </div>
              )}
            </div>
          </div>

          {/* Copyright Grid */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400 font-light">
            <div>
              Designed with precision by <span className="text-white font-medium">GiLabs Studio</span>
            </div>
            <div>
              © Lorem Properties 2026. <span className="text-neutral-500">All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-white font-medium">Bahasa Indonesia</span>
              <span className="text-neutral-600">|</span>
              <span className="text-neutral-400">English</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
