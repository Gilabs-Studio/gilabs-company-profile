import React, { useState, useEffect, useRef, useCallback, useId } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";
import {
  Star,
  MapPin,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

interface GkeLandingProps {
  lang?: "id" | "en";
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

interface CounterProps {
  value: number;
  locale: "id" | "en";
  className?: string;
  suffix?: string;
}

function Counter({ value, locale, className, suffix = "" }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, {
        duration: 0.9,
        ease: "easeOut",
      });

      return () => controls.stop();
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return motionValue.on("change", (latest) => {
      if (ref.current) {
        const formatter = new Intl.NumberFormat(
          locale === "en" ? "en-US" : "id-ID",
          { maximumFractionDigits: 0 }
        );
        const roundedValue = Math.round(latest);
        ref.current.textContent = formatter.format(roundedValue) + suffix;
      }
    });
  }, [motionValue, locale, suffix]);

  return (
    <span ref={ref} className={className}>
      {"0" + suffix}
    </span>
  );
}

// Deterministic pattern for SVG grid
const getDeterministicPattern = (index: number) => {
  const patterns = [
    [[7, 2], [9, 4], [8, 1], [10, 3], [7, 5]],
    [[8, 3], [7, 1], [9, 5], [10, 2], [8, 4]],
    [[9, 2], [10, 5], [7, 3], [8, 1], [9, 4]],
    [[10, 1], [7, 4], [8, 5], [9, 3], [7, 2]],
  ];
  return patterns[index % patterns.length];
};

function GridPattern({
  width,
  height,
  x,
  y,
  squares,
  ...props
}: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
  className?: string;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sqX, sqY]) => (
            <rect
              strokeWidth="0"
              key={`${sqX}-${sqY}`}
              width={width + 1}
              height={height + 1}
              x={sqX * width}
              y={sqY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

function Grid({ pattern, size }: { pattern?: number[][]; size?: number }) {
  return (
    <div className="pointer-events-none absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom,white,transparent)]">
      <div className="absolute inset-0 mask-[radial-gradient(farthest-side_at_top_right,white,transparent)] opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={pattern}
          className="absolute inset-0 h-full w-full stroke-blue-600/15 fill-blue-600/10"
        />
      </div>
    </div>
  );
}

interface TestimonialItem {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

function AnimatedTestimonials({
  testimonials,
  autoplay = true,
}: {
  testimonials: TestimonialItem[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = window.setInterval(handleNext, 5000);
      return () => window.clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = (index: number) => {
    const rotations = [-6, 8, -3, 5, -8, 2, -5, 6, -4, 7];
    return rotations[index % rotations.length];
  };

  return (
    <div className="mx-auto antialiased font-sans py-8">
      <div className="relative grid grid-cols-1 gap-12 lg:gap-20 md:grid-cols-2">
        <div>
          <div className="relative aspect-square w-full max-w-[400px] sm:max-w-[450px] mx-auto">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(index),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(index),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(index),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <img
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-lg object-cover object-center border border-slate-200 shadow-md"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3 className="text-2xl font-bold text-slate-900 font-heading uppercase tracking-tight">
              {testimonials[active].name}
            </h3>
            <p className="text-xs font-black uppercase tracking-wider text-[#2563EB]">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-base sm:text-lg leading-relaxed text-slate-600 font-light italic">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group/btn hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4 text-slate-700 group-hover/btn:-translate-x-0.5 transition-transform" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center group/btn hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <ArrowRight className="h-4 w-4 text-slate-700 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GkeLanding({ lang = "id" }: GkeLandingProps) {
  const [hasVideoError, setHasVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Navbar scroll tracking
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [isNavAtTop, setIsNavAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    setIsNavAtTop(lastScrollY < 20);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsNavAtTop(currentScrollY < 20);

      if (currentScrollY < 50) {
        setIsNavVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      const diff = Math.abs(currentScrollY - lastScrollY);
      if (diff > 8) {
        if (currentScrollY > lastScrollY) {
          setIsNavVisible(false);
        } else {
          setIsNavVisible(true);
        }
        lastScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Video autoplay
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  // 300vh Sticky Scroll Section
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity0 = useTransform(scrollYProgress, [0.12, 0.22, 0.42, 0.5], [0, 1, 1, 0]);
  const y0 = useTransform(scrollYProgress, [0.12, 0.22, 0.42, 0.5], [30, 0, 0, -30]);

  const opacity1 = useTransform(scrollYProgress, [0.42, 0.5, 0.7, 0.78], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.42, 0.5, 0.7, 0.78], [30, 0, 0, -30]);

  const opacity2 = useTransform(scrollYProgress, [0.7, 0.78, 1.0], [0, 1, 1]);
  const y2 = useTransform(scrollYProgress, [0.7, 0.78, 1.0], [30, 0, 0]);

  const imgOpacity0 = useTransform(scrollYProgress, [0.12, 0.22, 0.42, 0.5], [0, 1, 1, 0]);
  const imgScale0 = useTransform(scrollYProgress, [0.12, 0.5], [1.05, 1.0]);

  const imgOpacity1 = useTransform(scrollYProgress, [0.42, 0.5, 0.7, 0.78], [0, 1, 1, 0]);
  const imgScale1 = useTransform(scrollYProgress, [0.42, 0.78], [1.05, 1.0]);

  const imgOpacity2 = useTransform(scrollYProgress, [0.7, 0.78, 1.0], [0, 1, 1]);
  const imgScale2 = useTransform(scrollYProgress, [0.7, 1.0], [1.05, 1.0]);

  const introTitleOpacity = useTransform(scrollYProgress, [0, 0.06, 0.12, 0.16], [1, 1, 0.3, 0]);
  const introTitleScale = useTransform(scrollYProgress, [0, 0.16], [1, 0.9]);
  const introTitleY = useTransform(scrollYProgress, [0, 0.16], [0, -48]);

  const dockedTitleOpacity = useTransform(scrollYProgress, [0.06, 0.14], [0, 1]);
  const dockedTitleX = useTransform(scrollYProgress, [0.06, 0.14], [180, 0]);
  const dockedTitleY = useTransform(scrollYProgress, [0.06, 0.14], [140, 0]);
  const dockedTitleScale = useTransform(scrollYProgress, [0.06, 0.14], [1.12, 1]);

  const servicesRevealOpacity = useTransform(scrollYProgress, [0.12, 0.22], [0, 1]);
  const servicesRevealY = useTransform(scrollYProgress, [0.12, 0.22], [48, 0]);

  // Radar Arena Scroll Rotation
  const brandSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: brandScrollY } = useScroll({
    target: brandSectionRef,
    offset: ["start end", "end start"],
  });

  const rotateOuter = useTransform(brandScrollY, [0, 1], [-25, 25]);
  const rotateInner = useTransform(brandScrollY, [0, 1], [20, -20]);

  const counterRotateOuter = useTransform(brandScrollY, [0, 1], [25, -25]);
  const counterRotateInner = useTransform(brandScrollY, [0, 1], [-20, 20]);

  const serviceItems = [
    {
      index: "01",
      title: lang === "en" ? "Precision Fabrication & Machining" : "Fabrikasi & Machining Presisi",
      description:
        lang === "en"
          ? "High-precision custom component manufacturing conforming strictly to international ISO standards and rigorous quality controls."
          : "Pengerjaan suku cadang kustom berpresisi tinggi dengan sertifikasi bahan standar ISO serta kendali mutu menyeluruh.",
      image: "/templates/gke/company/img3.png",
    },
    {
      index: "02",
      title: lang === "en" ? "B2B Supply Chain & Inventory" : "Manajemen Rantai Pasok B2B",
      description:
        lang === "en"
          ? "Automated inventory networks ensuring continuous supply without machinery pauses or manufacturing line interruptions."
          : "Sistem pergudangan cerdas memastikan ketersediaan suku cadang tanpa jeda operasional pabrik atau hambatan jalur produksi.",
      image: "/templates/gke/company/img.png",
    },
    {
      index: "03",
      title: lang === "en" ? "Technical Audit & Maintenance" : "Audit Teknis & Pemeliharaan",
      description:
        lang === "en"
          ? "Experienced engineering teams assisting with diagnostics, periodic inspection, wiring setups, and production line optimization."
          : "Dukungan insinyur berpengalaman untuk inspeksi berkala, pengujian kondisi mesin, serta optimalisasi lini operasional industri.",
      image: "/templates/gke/company/service-product-consultation.png",
    },
  ];

  const brandLogos = [
    { name: "Lorem Brand 01", logo: "/templates/gke/logo/BSQ-Logo-e1710849402525.webp" },
    { name: "Lorem Brand 02", logo: "/templates/gke/logo/autonics-seeklogo.png" },
    { name: "Lorem Brand 03", logo: "/templates/gke/logo/ckd-seeklogo.png" },
    { name: "Lorem Brand 04", logo: "/templates/gke/logo/images.png" },
    { name: "Lorem Brand 05", logo: "/templates/gke/logo/kubler-8-5020-8341-1000-encoder.png" },
    { name: "Lorem Brand 06", logo: "/templates/gke/logo/download_500x500.webp" },
    { name: "Lorem Brand 07", logo: "/templates/gke/logo/mitsubishi-electric-changes-for-the-better-logo-png_seeklogo-93542.png" },
    { name: "Lorem Brand 08", logo: "/templates/gke/logo/omron-logo-png_seeklogo-103109.png" },
    { name: "Lorem Brand 09", logo: "/templates/gke/logo/thk-seeklogo.png" },
  ];

  const proofItems = [
    {
      title: lang === "en" ? "Fast Part Matching" : "Identifikasi Part Akurat",
      description:
        lang === "en"
          ? "Send component specifications or nameplate photos directly for rapid automated parts verification."
          : "Kirim nomor part atau foto nameplate mesin via saluran sales untuk pencocokan spesifikasi secara instan.",
    },
    {
      title: lang === "en" ? "Substitution Options" : "Opsi Substitusi Andal",
      description:
        lang === "en"
          ? "Transparent comparison between primary components and equivalent certified industrial substitutions."
          : "Informasi terbuka mengenai brand utama dan alternatif substitusi bersertifikasi mutu yang setara.",
    },
    {
      title: lang === "en" ? "Rapid RFQ Turnaround" : "Respon RFQ Tercepat",
      description:
        lang === "en"
          ? "Instant processing of corporate request-for-quotes with clear lead times and competitive enterprise rates."
          : "Setiap penawaran harga industri diproses kilat dengan kepastian waktu pengiriman dan garansi mutu.",
    },
    {
      title: lang === "en" ? "Nationwide Support" : "Jaringan Distribusi Luas",
      description:
        lang === "en"
          ? "Centralized distribution centers ensuring prompt logistics and on-site engineering coordination."
          : "Pusat pergudangan strategis mempermudah pengiriman cepat serta koordinasi insinyur langsung ke lokasi.",
    },
  ];

  const testimonials: TestimonialItem[] = [
    {
      quote:
        lang === "en"
          ? "Operational uptime has remained flawlessly consistent thanks to punctual deliveries and exact precision parts. Their engineering response was outstanding."
          : "Kelancaran operasional lini produksi kami selalu terjaga berkat pasokan komponen presisi yang selalu tepat waktu dan berstandar mutu terpercaya.",
      name: "Lorem Santoso",
      designation: "Chief Maintenance Officer",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        lang === "en"
          ? "We were thoroughly impressed by the rapid response when emergency replacement parts were required. Highly reliable and transparent partnership."
          : "Sangat terbantu dengan respon kilat tim teknis saat kami membutuhkan penggantian suku cadang mendesak. Rekomendasi substitusinya sangat transparan.",
      name: "Lorem Wijaya",
      designation: "Procurement Director",
      src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        lang === "en"
          ? "Their technical assessment helped us spot potential machine fatigue early, preventing costly downtime. An invaluable industrial partner."
          : "Audit berkala dan pemantauan kondisi mesin membantu mendeteksi keausan komponen sejak awal, mencegah risiko downtime mahal pabrik kami.",
      name: "Lorem Rahmawati",
      designation: "Head of Operations",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3560&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-white text-slate-900 font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Dynamic Animated Header */}
      <motion.header
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={isNavVisible ? "visible" : "hidden"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`pointer-events-none fixed inset-x-0 top-[41px] z-40 transition-all duration-300 ease-in-out ${
          isNavAtTop
            ? "px-5 py-4 sm:px-8 lg:px-12"
            : "px-4 py-3 sm:px-6 lg:px-8"
        }`}
      >
        {/* Progressive Blur Layer */}
        <div
          className={`absolute inset-0 z-[-1] pointer-events-none transition-all duration-300 ease-in-out ${
            isNavAtTop ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            maskImage: "linear-gradient(to bottom, black 50%, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black 50%, transparent)",
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, transparent 100%)",
          }}
        />

        <div
          className={`pointer-events-auto mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-5 transition-all duration-300 ease-in-out ${
            isNavAtTop
              ? "bg-transparent border-transparent px-0 py-2 shadow-none rounded-none"
              : "bg-white/85 border border-slate-200/80 backdrop-blur-md px-6 py-3 rounded-lg shadow-sm"
          }`}
        >
          <a
            href="#hero"
            className="flex min-w-0 cursor-pointer items-center gap-3 text-slate-900 duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span className="font-heading text-sm font-light uppercase tracking-widest text-slate-900">
              LOREM IPSUM
            </span>
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-8 text-xs font-medium uppercase tracking-wider text-slate-700 md:flex"
          >
            <a
              href="#hero"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-[#2563EB]"
            >
              {lang === "en" ? "Home" : "Beranda"}
            </a>
            <a
              href="#metrik"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-slate-700 hover:text-[#2563EB]"
            >
              {lang === "en" ? "Metrics" : "Metrik"}
            </a>
            <a
              href="#solusi"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-slate-700 hover:text-[#2563EB]"
            >
              {lang === "en" ? "Solutions" : "Solusi"}
            </a>
            <a
              href="#distribusi"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-slate-700 hover:text-[#2563EB]"
            >
              {lang === "en" ? "Distribution" : "Distribusi"}
            </a>
            <a
              href="#kontak"
              className="cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 text-slate-700 hover:text-[#2563EB]"
            >
              {lang === "en" ? "Contact" : "Kontak"}
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#kontak"
              className="inline-flex h-9 cursor-pointer items-center gap-2 bg-[#2563EB] px-4 text-xs font-light text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <span>{lang === "en" ? "Contact Us" : "Hubungi Kami"}</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </motion.header>

      {/* 01. Hero Section with Video & Progressive Gradient */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-41px)] overflow-hidden flex items-center bg-white"
      >
        {!hasVideoError ? (
          <video
            ref={videoRef}
            muted
            playsInline
            autoPlay
            onError={() => setHasVideoError(true)}
            className="absolute inset-0 h-full w-full object-cover object-right opacity-35 sm:opacity-55 lg:opacity-90 xl:opacity-100"
          >
            <source src="/templates/gke/company/hero.mp4" type="video/mp4" />
            <img
              src="/templates/gke/company/gke-industrial-parts.png"
              alt="Industrial parts hero"
              className="object-cover object-right h-full w-full"
            />
          </video>
        ) : (
          <img
            src="/templates/gke/company/gke-industrial-parts.png"
            alt="Industrial parts hero"
            className="absolute inset-0 h-full w-full object-cover object-right opacity-35 sm:opacity-55 lg:opacity-90 xl:opacity-100"
          />
        )}

        {/* Gradient overlays matching docs/gke */}
        <div className="absolute inset-0 bg-white/60 sm:bg-white/40 lg:bg-transparent pointer-events-none" />
        <div
          className="absolute inset-0 hidden lg:block pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ffffff 0%, #ffffff 24%, rgba(255, 255, 255, 0.84) 46%, rgba(255, 255, 255, 0.48) 66%, rgba(255, 255, 255, 0.14) 82%, transparent 100%)",
          }}
        />

        <div className="relative z-10 flex min-h-[calc(100vh-41px)] w-full flex-col justify-center px-5 pb-14 pt-24 sm:px-8 lg:px-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mx-auto w-full max-w-screen-2xl"
          >
            {/* Rating eyebrow */}
            <div className="mb-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-light text-slate-700">
              <div className="flex items-center gap-1">
                <Star className="h-3.5 w-3.5 fill-amber-500 stroke-amber-500 text-amber-500 shrink-0" />
                <span className="font-semibold text-slate-900">5.0</span>
              </div>
              <span className="text-slate-300 select-none">•</span>
              <span className="text-slate-600 flex items-center gap-1">
                <MapPin className="h-3 w-3 text-[#2563EB] shrink-0" />
                Lorem Ipsum, Indonesia
              </span>
            </div>

            <h1 className="max-w-3xl font-heading text-[clamp(2.4rem,5vw,4.8rem)] font-light leading-[0.95] tracking-tight text-slate-900">
              Lorem Ipsum Dolor Sit Amet Consectetur
            </h1>

            <p className="mt-6 max-w-lg text-sm font-medium leading-7 text-slate-700 sm:text-base">
              {lang === "en"
                ? "Trusted B2B engineering supply chain partner providing certified industrial components, precision spare parts, and fast logistics."
                : "Mitra rantai pasok industri dan rekayasa terpercaya dengan distribusi ribuan komponen bersertifikasi standar mutu internasional."}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#kontak"
                className="inline-flex h-11 cursor-pointer items-center gap-2 bg-[#2563EB] px-5 text-xs font-light tracking-normal text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <span>{lang === "en" ? "Consult Now" : "Konsultasi Sekarang"}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#solusi"
                className="inline-flex h-11 cursor-pointer items-center justify-center border border-slate-300 bg-white/80 px-5 text-xs font-light tracking-normal text-slate-800 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                {lang === "en" ? "Learn Services" : "Pelajari Layanan"}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 02. Metrics Section with Animated Framer Motion Counters */}
      <section
        id="metrik"
        className="bg-white py-16 px-5 text-slate-900 sm:px-8 lg:px-12 border-t border-slate-200/80"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mx-auto max-w-screen-2xl"
        >
          <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3 md:divide-x md:divide-slate-200">
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center md:px-4"
            >
              <span className="font-heading text-5xl font-light tracking-tight text-[#2563EB]">
                <Counter value={3000} locale={lang} suffix="+" />
              </span>
              <span className="mt-2 text-xs font-light tracking-wider text-slate-500 uppercase">
                {lang === "en" ? "Registered Clients" : "Pelanggan Terdaftar"}
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center md:px-4"
            >
              <span className="font-heading text-5xl font-light tracking-tight text-[#2563EB]">
                <Counter value={4000} locale={lang} suffix="+" />
              </span>
              <span className="mt-2 text-xs font-light tracking-wider text-slate-500 uppercase">
                {lang === "en" ? "Component Variations" : "Variasi Produk"}
              </span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center text-center md:px-4"
            >
              <span className="font-heading text-5xl font-light tracking-tight text-[#2563EB]">
                <Counter value={50} locale={lang} suffix="+" />
              </span>
              <span className="mt-2 text-xs font-light tracking-wider text-slate-500 uppercase">
                {lang === "en" ? "Corporate Partners" : "Perusahaan Dilayani"}
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 03. Thesis / Impact Statement Section */}
      <section className="flex items-center justify-center bg-white px-5 py-24 text-slate-900 sm:px-8 lg:px-12 border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-light leading-none tracking-tighter text-slate-900"
          >
            {lang === "en"
              ? "Behind every smooth operation lies the precise component."
              : "Di balik produksi yang lancar, ada komponen yang tepat."}
          </motion.h2>
        </div>
      </section>

      {/* 04. Services Sticky Scroll Section (300vh) */}
      <section
        id="solusi"
        ref={containerRef}
        className="relative h-[300vh] bg-white text-slate-900 border-t border-slate-200/80"
      >
        {/* Desktop Sticky Viewport */}
        <div className="sticky top-0 hidden h-screen w-full overflow-hidden md:block">
          <motion.div
            className="absolute inset-y-0 right-0 w-[65%] overflow-hidden"
            style={{
              opacity: servicesRevealOpacity,
              WebkitMaskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.62) 28%, black 42%, black 100%)",
              maskImage:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.3) 18%, rgba(0,0,0,0.62) 28%, black 42%, black 100%)",
            }}
          >
            {serviceItems.map((item, idx) => {
              const opacity =
                idx === 0 ? imgOpacity0 : idx === 1 ? imgOpacity1 : imgOpacity2;
              const scale =
                idx === 0 ? imgScale0 : idx === 1 ? imgScale1 : imgScale2;

              return (
                <motion.div
                  key={item.index}
                  style={{ opacity, scale }}
                  className="absolute inset-0 h-full w-full"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover opacity-95"
                  />
                </motion.div>
              );
            })}
            <div className="pointer-events-none absolute inset-0 bg-white/10" />
          </motion.div>

          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center px-6">
            <motion.h2
              style={{
                opacity: introTitleOpacity,
                scale: introTitleScale,
                y: introTitleY,
              }}
              className="max-w-[7ch] text-center font-heading text-[clamp(3rem,8vw,6.4rem)] font-light leading-[0.9] tracking-tight text-slate-900"
            >
              {lang === "en" ? "Services & Solutions" : "Layanan Teknis"}
            </motion.h2>
          </div>

          {/* Foreground copy paired with a half-width progressive image */}
          <div className="relative z-10 flex h-full max-w-136 select-none flex-col justify-between px-12 py-24 lg:px-20 xl:px-24">
            <motion.div
              style={{
                opacity: dockedTitleOpacity,
                x: dockedTitleX,
                y: dockedTitleY,
                scale: dockedTitleScale,
              }}
              className="max-w-xl"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {lang === "en" ? "INDUSTRIAL CAPABILITY" : "KAPABILITAS INDUSTRI"}
              </span>
              <h2 className="mt-4 max-w-[10ch] font-heading text-[clamp(2.5rem,4.6vw,5.4rem)] font-light leading-[0.92] tracking-tight text-slate-900">
                {lang === "en" ? "Services & Solutions" : "Layanan Teknis"}
              </h2>
              <p className="mt-6 max-w-md text-sm font-medium leading-7 text-slate-600">
                {lang === "en"
                  ? "Integrated engineering supply from custom machining to intelligent warehousing."
                  : "Solusi pasokan industri terpadu mulai dari perakitan presisi hingga pergudangan cerdas."}
              </p>
            </motion.div>

            <motion.div
              style={{ opacity: servicesRevealOpacity, y: servicesRevealY }}
            >
              <div className="relative h-[230px] w-full max-w-xl">
                {serviceItems.map((item, idx) => {
                  const opacity =
                    idx === 0 ? opacity0 : idx === 1 ? opacity1 : opacity2;
                  const y = idx === 0 ? y0 : idx === 1 ? y1 : y2;

                  return (
                    <motion.div
                      key={item.index}
                      style={{ opacity, y }}
                      className="absolute inset-0 flex flex-col justify-center pointer-events-none"
                    >
                      <span className="mb-3 block text-xs font-bold tracking-widest text-[#2563EB]">
                        {item.index} —
                      </span>
                      <h3 className="mb-4 max-w-[18ch] font-heading text-2xl font-light leading-tight tracking-tight text-slate-900 lg:text-3xl">
                        {item.title}
                      </h3>
                      <p className="max-w-md text-sm font-medium leading-relaxed text-slate-600 lg:text-base">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Mobile Static Viewport */}
        <div className="md:hidden w-full text-slate-900">
          <div className="px-5 pb-10 pt-20">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {lang === "en" ? "INDUSTRIAL CAPABILITY" : "KAPABILITAS INDUSTRI"}
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2.2rem,12vw,3.7rem)] font-light leading-[0.95] tracking-tight text-slate-900">
              {lang === "en" ? "Services & Solutions" : "Layanan Teknis"}
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              {lang === "en"
                ? "Integrated engineering supply from custom machining to intelligent warehousing."
                : "Solusi pasokan industri terpadu mulai dari perakitan presisi hingga pergudangan cerdas."}
            </p>
          </div>

          <div className="flex flex-col w-full">
            {serviceItems.map((item) => (
              <div key={item.index} className="flex flex-col w-full">
                <div className="relative w-full aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-2 border-b border-slate-200 bg-white px-5 py-8">
                  <span className="block text-xs font-bold tracking-widest text-[#2563EB]">
                    {item.index} —
                  </span>
                  <h3 className="font-heading text-xl font-light leading-tight tracking-tight text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. Radar Orbit Arena (Brands & Distribution with Scroll Rotation) */}
      <section
        id="distribusi"
        ref={brandSectionRef}
        className="px-5 py-24 sm:px-8 lg:px-12 bg-white flex flex-col items-center justify-center overflow-hidden border-t border-slate-200/80"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .orbit-container {
              --r-outer: 38vw;
              --r-inner: 24vw;
              --node-size: 3.2rem;
            }
            @media (min-width: 768px) {
              .orbit-container {
                --r-outer: 22rem;
                --r-inner: 13.5rem;
                --node-size: 5rem;
              }
            }
          `,
          }}
        />

        <div className="mx-auto w-full max-w-screen-2xl flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {lang === "en" ? "PARTNERS & ECOSYSTEM" : "JARINGAN & EKOSISTEM"}
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-none tracking-tight text-slate-900">
              {lang === "en"
                ? "Ecosystem of Industrial Engineering Partners"
                : "Jaringan Distribusi & Brand Komponen Industri"}
            </h2>
          </div>

          {/* Orbit / Radar Arena */}
          <div
            className="orbit-container relative w-full flex items-end justify-center overflow-visible pb-12 md:pb-20"
            style={{
              height: "calc(var(--r-outer) + 4rem)",
            }}
          >
            {/* Background Glow */}
            <div
              className="absolute bg-linear-to-t from-blue-600/10 to-transparent blur-3xl"
              style={{
                width: "calc(var(--r-outer) * 2)",
                height: "var(--r-outer)",
                left: "50%",
                bottom: 0,
                transform: "translateX(-50%)",
                borderTopLeftRadius: "50% 100%",
                borderTopRightRadius: "50% 100%",
                pointerEvents: "none",
              }}
            />

            {/* Outer Orbit Dashed Line */}
            <div
              className="absolute border-2 border-dashed border-blue-600/40"
              style={{
                width: "calc(var(--r-outer) * 2)",
                height: "calc(var(--r-outer) * 2)",
                left: "50%",
                bottom: 0,
                transform: "translate(-50%, 50%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            {/* Inner Orbit Dashed Line */}
            <div
              className="absolute border-2 border-dashed border-blue-600/25"
              style={{
                width: "calc(var(--r-inner) * 2)",
                height: "calc(var(--r-inner) * 2)",
                left: "50%",
                bottom: 0,
                transform: "translate(-50%, 50%)",
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            {/* Center Node (LIPSUM / LI) */}
            <div
              className="absolute flex items-center justify-center bg-white border-2 border-blue-600/40 shadow-lg shadow-blue-500/15 z-10"
              style={{
                width: "var(--node-size)",
                height: "var(--node-size)",
                left: "50%",
                bottom: 0,
                transform: "translate(-50%, 50%)",
                borderRadius: "50%",
              }}
            >
              <span className="font-heading text-xs md:text-sm font-semibold tracking-widest text-[#2563EB]">
                LI
              </span>

              {/* Pulsing Ping Glow Ring */}
              <div
                className="absolute border border-blue-600/30 animate-ping opacity-40"
                style={{
                  width: "calc(var(--node-size) + 1.5rem)",
                  height: "calc(var(--node-size) + 1.5rem)",
                  borderRadius: "50%",
                  animationDuration: "3s",
                }}
              />
            </div>

            {/* Outer Orbit Wrapper with scroll rotation */}
            <motion.div
              style={{
                position: "absolute",
                width: "calc(var(--r-outer) * 2)",
                height: "calc(var(--r-outer) * 2)",
                left: "50%",
                bottom: 0,
                x: "-50%",
                y: "50%",
                rotate: rotateOuter,
              }}
            >
              {brandLogos
                .filter((_, idx) => idx % 2 === 0)
                .map((brand, idx, arr) => {
                  const total = arr.length;
                  const angle = 180 - 15 - idx * (150 / (total - 1));
                  const rad = (angle * Math.PI) / 180;
                  const cos = Math.cos(rad).toFixed(4);
                  const sin = Math.sin(rad).toFixed(4);

                  return (
                    <motion.div
                      key={brand.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.08, duration: 0.6 }}
                      whileHover={{ scale: 1.15, zIndex: 30 }}
                      className="absolute bg-white border border-slate-200 shadow-md flex items-center justify-center p-1 md:p-1.5 cursor-pointer transition-colors duration-300 hover:border-blue-600 group"
                      style={{
                        width: "var(--node-size)",
                        height: "var(--node-size)",
                        left: `calc(50% + var(--r-outer) * ${cos})`,
                        top: `calc(50% - var(--r-outer) * ${sin})`,
                        x: "-50%",
                        y: "-50%",
                        borderRadius: "50%",
                        rotate: counterRotateOuter,
                      }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center p-1">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="object-contain max-h-[82%] max-w-[82%] transition-all duration-300"
                        />
                      </div>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap shadow-sm">
                        {brand.name}
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>

            {/* Inner Orbit Wrapper with opposite scroll rotation */}
            <motion.div
              style={{
                position: "absolute",
                width: "calc(var(--r-inner) * 2)",
                height: "calc(var(--r-inner) * 2)",
                left: "50%",
                bottom: 0,
                x: "-50%",
                y: "50%",
                rotate: rotateInner,
              }}
            >
              {brandLogos
                .filter((_, idx) => idx % 2 !== 0)
                .map((brand, idx, arr) => {
                  const total = arr.length;
                  const angle = 180 - 25 - idx * (130 / (total - 1));
                  const rad = (angle * Math.PI) / 180;
                  const cos = Math.cos(rad).toFixed(4);
                  const sin = Math.sin(rad).toFixed(4);

                  return (
                    <motion.div
                      key={brand.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: (idx + 0.5) * 0.08, duration: 0.6 }}
                      whileHover={{ scale: 1.15, zIndex: 30 }}
                      className="absolute bg-white border border-slate-200 shadow-md flex items-center justify-center p-1 md:p-1.5 cursor-pointer transition-colors duration-300 hover:border-blue-600 group"
                      style={{
                        width: "var(--node-size)",
                        height: "var(--node-size)",
                        left: `calc(50% + var(--r-inner) * ${cos})`,
                        top: `calc(50% - var(--r-inner) * ${sin})`,
                        x: "-50%",
                        y: "-50%",
                        borderRadius: "50%",
                        rotate: counterRotateInner,
                      }}
                    >
                      <div className="relative w-full h-full flex items-center justify-center p-1">
                        <img
                          src={brand.logo}
                          alt={brand.name}
                          className="object-contain max-h-[82%] max-w-[82%] transition-all duration-300"
                        />
                      </div>
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap shadow-sm">
                        {brand.name}
                      </div>
                    </motion.div>
                  );
                })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 06. Proof / Why Us Cards with Dynamic SVG Grid Patterns */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 bg-white flex items-center border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl mb-12"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {lang === "en" ? "OPERATIONAL ASSURANCE" : "STANDAR MUTU"}
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-none tracking-tight text-slate-900">
              {lang === "en"
                ? "Reliable Processes, Certified Quality"
                : "Proses Terstandarisasi, Jaminan Kualitas Andal"}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-4"
          >
            {proofItems.map((item, index) => (
              <motion.div
                variants={fadeInUp}
                key={index}
                className="relative bg-white border border-slate-200 p-6 rounded-lg overflow-hidden flex flex-col justify-center min-h-[200px] transition-colors duration-200 hover:border-blue-600/40 shadow-xs"
              >
                <Grid pattern={getDeterministicPattern(index)} size={20} />
                <div className="relative z-20 space-y-3">
                  <p className="text-base font-bold text-slate-900 font-heading">
                    {item.title}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 07. Animated Testimonials with 3D RotateY and Word Blur */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 bg-white flex items-center border-t border-slate-200/80">
        <div className="mx-auto w-full max-w-screen-2xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            className="max-w-2xl mb-12 text-left"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
              {lang === "en" ? "CLIENT TESTIMONIALS" : "TESTIMONI MITRA"}
            </span>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.2rem)] font-light leading-none tracking-tight text-slate-900">
              {lang === "en"
                ? "Trusted by Manufacturing Leaders"
                : "Dipercaya oleh Korporasi & Industri Terkemuka"}
            </h2>
          </motion.div>

          <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
        </div>
      </section>

      {/* 08. Footer matching docs/gke public-shell.tsx */}
      <footer
        id="kontak"
        className="w-full bg-slate-950 text-white font-sans py-16 px-6 sm:px-12 lg:px-20 border-t border-slate-800"
      >
        <div className="mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start pb-12">
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <span className="font-heading text-lg font-light uppercase tracking-wider text-white">
                  LOREM IPSUM
                </span>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
                  {lang === "en"
                    ? "PT Lorem Ipsum supplies reliable industrial automation parts, custom panel wiring, machinery assessments, and technical solutions."
                    : "PT Lorem Ipsum menyediakan suku cadang otomasi industri yang andal, perakitan panel listrik kustom, serta solusi teknis untuk menjaga proses produksi lancar."}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === "en" ? "Head Office & Logistics" : "Kantor & Pusat Logistik"}
              </span>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Kawasan Industri Megapolitan Phase III, Blok C No. 23<br />
                Bekasi, Jawa Barat 17530, Indonesia
              </p>
              <div className="space-y-1 text-xs text-slate-400">
                <p>sales@loremipsum.com</p>
                <p>+62 21-8888-9999</p>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {lang === "en" ? "Business Hours" : "Jam Operasional"}
              </span>
              <div className="space-y-1 text-xs text-slate-300">
                <p>{lang === "en" ? "Monday - Friday: 08:30 - 17:00" : "Senin - Jumat: 08:30 - 17:00"}</p>
                <p>{lang === "en" ? "Saturday: 08:30 - 13:00" : "Sabtu: 08:30 - 13:00"}</p>
                <p className="text-slate-500">{lang === "en" ? "Sunday: Closed" : "Minggu: Tutup"}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>&copy; {new Date().getFullYear()} LOREM IPSUM. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span>{lang === "en" ? "Terms of Service" : "Ketentuan Layanan"}</span>
              <span>{lang === "en" ? "Privacy Policy" : "Kebijakan Privasi"}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
