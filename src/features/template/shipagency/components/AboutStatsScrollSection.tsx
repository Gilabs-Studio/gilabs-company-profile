import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import {
  ArrowRight,
  Users,
  Package,
  Building2,
  ShieldCheck,
  UserCheck,
  Clock,
  Layers,
} from "lucide-react";

interface AboutStatsScrollSectionProps {
  lang?: "id" | "en";
}

const TOTAL_FRAMES = 95;

/** Helper to parse a stat string like "3.000+", "4.000+", "50+", "100%" into target number and format */
function parseStatNumber(valStr: string) {
  const cleanStr = valStr.replace(/\./g, "").replace(/,/g, "");
  const numMatch = cleanStr.match(/\d+/);
  const targetNum = numMatch ? parseInt(numMatch[0], 10) : 0;

  const hasPlus = valStr.includes("+");
  const hasPercent = valStr.includes("%");
  const isDotFormatted = valStr.includes(".");

  return { targetNum, hasPlus, hasPercent, isDotFormatted };
}

function AnimatedStatValue({
  valStr,
  progressRatio,
}: {
  valStr: string;
  progressRatio: number;
}) {
  const { targetNum, hasPlus, hasPercent, isDotFormatted } = useMemo(
    () => parseStatNumber(valStr),
    [valStr]
  );

  const currentVal = Math.round(targetNum * Math.min(Math.max(progressRatio, 0), 1));

  let formatted = currentVal.toString();
  if (isDotFormatted && currentVal >= 1000) {
    formatted = currentVal.toLocaleString("id-ID");
  }
  if (hasPlus) formatted += "+";
  if (hasPercent) formatted += "%";

  return <span>{formatted}</span>;
}

export default function AboutStatsScrollSection({ lang = "id" }: AboutStatsScrollSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  const [scrollProgress, setScrollProgress] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const isEn = lang === "en";

  const content = useMemo(() => ({
    about: {
      tag: "ABOUT US",
      title: isEn ? "Trusted Maritime Industry Partner" : "Mitra Terpercaya Industri Maritim",
      description: isEn
        ? "PT. Nautiva Ocean Agency is a strategic partner for shipping companies, providing professional, efficient ship agency outsourcing services focused on safety and regulatory compliance."
        : "PT. Nautiva Ocean Agency hadir sebagai mitra strategis bagi perusahaan pelayaran dalam menyediakan layanan outsourcing agen perkapalan yang profesional, efisien, dan berorientasi pada keselamatan serta kepatuhan regulasi.",
      ctaButton: isEn ? "Learn More About Us" : "Selengkapnya Tentang Kami",
    },
    stats: {
      tag: "Trusted By Numbers",
      title: isEn ? "Proven Performance & Trust" : "Performa & Kepercayaan Teruji",
      items: [
        {
          icon: Users,
          number: isEn ? "3,000+" : "3.000+",
          label: isEn ? "Registered Clients" : "Pelanggan Terdaftar",
        },
        {
          icon: Package,
          number: isEn ? "4,000+" : "4.000+",
          label: isEn ? "Products & Services" : "Variasi Produk & Layanan",
        },
        {
          icon: Building2,
          number: "50+",
          label: isEn ? "Companies Served" : "Perusahaan Dilayani",
        },
        {
          icon: ShieldCheck,
          number: "100%",
          label: isEn ? "Commitment & Satisfaction" : "Komitmen & Kepuasan",
        },
      ],
    },
    whyChooseUs: {
      tag: "WHY CHOOSE US",
      title: isEn ? "Why Choose Nautiva Ocean Agency?" : "Mengapa Memilih Nautiva Ocean Agency?",
      description: isEn
        ? "We are committed to delivering top-tier services with high standards, centered on trust and client satisfaction."
        : "Kami berkomitmen memberikan layanan terbaik dengan standar tinggi dan berorientasi pada kepercayaan serta kepuasan klien.",
      items: [
        {
          icon: UserCheck,
          title: isEn ? "Professional & Experienced" : "Profesional & Berpengalaman",
          desc: isEn
            ? "Our team possesses extensive expertise and hands-on experience in the maritime industry."
            : "Tim kami memiliki keahlian dan pengalaman luas di industri pelayaran.",
        },
        {
          icon: Clock,
          title: isEn ? "Efficient & Punctual" : "Efisien & Tepat Waktu",
          desc: isEn
            ? "We prioritize speed, precision, and timeliness in every service execution."
            : "Kami mengutamakan kecepatan dan ketepatan dalam setiap layanan.",
        },
        {
          icon: ShieldCheck,
          title: isEn ? "High Safety Standards" : "Standar Keamanan Tinggi",
          desc: isEn
            ? "Safety and regulatory compliance are our foremost priorities."
            : "Keselamatan dan kepatuhan regulasi adalah prioritas utama kami.",
        },
        {
          icon: Layers,
          title: isEn ? "Integrated Services" : "Layanan Terintegrasi",
          desc: isEn
            ? "Comprehensive end-to-end solutions tailored for your vessels and shipping business."
            : "Solusi menyeluruh untuk memenuhi kebutuhan kapal dan perusahaan Anda.",
        },
      ],
    },
    cta: {
      title: isEn ? "Ready to Partner with a Trusted Ally?" : "Siap Bekerja Sama dengan Mitra Terpercaya?",
      description: isEn
        ? "Contact us today to get the optimal solutions for your vessel operational and maritime business needs."
        : "Hubungi kami sekarang untuk mendapatkan solusi terbaik bagi kebutuhan operasional kapal dan bisnis Anda.",
      button: isEn ? "Contact Us Now" : "Hubungi Kami Sekarang",
    },
  }), [isEn]);

  // Preload WebP frames into memory with immediate priority for Frame 1
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameIndexStr = i.toString().padStart(3, "0");
      img.src = `/templates/shipagency/frames/frame_${frameIndexStr}.webp`;

      if (i === 1) {
        img.onload = () => {
          if (!isMounted) return;
          setImagesLoaded(true);
        };
      }

      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw frame on canvas with object-fit cover
  const drawFrame = useCallback((frameIdx: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let img = imagesRef.current[frameIdx];
    if (!img || !img.complete || img.naturalWidth === 0) {
      // Graceful fallback to nearest available loaded frame
      for (let j = frameIdx - 1; j >= 0; j--) {
        const fallback = imagesRef.current[j];
        if (fallback && fallback.complete && fallback.naturalWidth > 0) {
          img = fallback;
          break;
        }
      }
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    const hRatio = width / img.naturalWidth;
    const vRatio = height / img.naturalHeight;
    const ratio = Math.max(hRatio, vRatio);

    const centerShiftX = (width - img.naturalWidth * ratio) / 2;
    const centerShiftY = (height - img.naturalHeight * ratio) / 2;

    ctx.drawImage(
      img,
      0,
      0,
      img.naturalWidth,
      img.naturalHeight,
      centerShiftX,
      centerShiftY,
      img.naturalWidth * ratio,
      img.naturalHeight * ratio
    );
  }, []);

  // Update canvas sizing & DPR
  const updateCanvasSize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);

    const frameProgress = Math.min(scrollProgress / 0.40, 1);
    const frameIdx = Math.min(
      Math.floor(frameProgress * (TOTAL_FRAMES - 1)),
      TOTAL_FRAMES - 1
    );
    drawFrame(frameIdx);
  }, [scrollProgress, drawFrame]);

  // Scroll event listener for Video Frame Playback & Blur Background Phases
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollable = rect.height - windowHeight;

      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);

      setScrollProgress(progress);

      // Video frames play during progress 0.00 -> 0.40, then lock at Frame 95 (index 94)
      const frameProgress = Math.min(progress / 0.40, 1);
      const frameIdx = Math.min(
        Math.floor(frameProgress * (TOTAL_FRAMES - 1)),
        TOTAL_FRAMES - 1
      );
      drawFrame(frameIdx);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", updateCanvasSize, { passive: true });

    handleScroll();
    updateCanvasSize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, [drawFrame, updateCanvasSize]);

  useEffect(() => {
    if (imagesLoaded) {
      updateCanvasSize();
    }
  }, [imagesLoaded, updateCanvasSize]);

  // Canvas background blur filter: starts blurring at progress 0.40 -> 0.50 up to 16px
  const blurAmount = useMemo(() => {
    if (scrollProgress < 0.40) return 0;
    if (scrollProgress < 0.50) return ((scrollProgress - 0.40) / 0.10) * 16;
    return 16;
  }, [scrollProgress]);

  // --- PHASE OPACITIES ---
  // Phase 1 (About Us): progress 0.00 to 0.24
  const aboutOpacity = useMemo(() => {
    if (scrollProgress <= 0.18) return 1;
    if (scrollProgress <= 0.24) return (0.24 - scrollProgress) / 0.06;
    return 0;
  }, [scrollProgress]);

  // Phase 2 (Trusted By Numbers): progress 0.24 to 0.49
  const statsOpacity = useMemo(() => {
    if (scrollProgress < 0.24) return 0;
    if (scrollProgress < 0.29) return (scrollProgress - 0.24) / 0.05;
    if (scrollProgress <= 0.44) return 1;
    if (scrollProgress <= 0.49) return (0.49 - scrollProgress) / 0.05;
    return 0;
  }, [scrollProgress]);

  const countProgress = useMemo(() => {
    if (scrollProgress < 0.26) return 0;
    return Math.min((scrollProgress - 0.26) / 0.18, 1);
  }, [scrollProgress]);

  // Phase 3 (Why Choose Us): progress 0.49 to 0.75 (Blurred background)
  const whyChooseUsOpacity = useMemo(() => {
    if (scrollProgress < 0.49) return 0;
    if (scrollProgress < 0.54) return (scrollProgress - 0.49) / 0.05;
    if (scrollProgress <= 0.70) return 1;
    if (scrollProgress <= 0.75) return (0.75 - scrollProgress) / 0.05;
    return 0;
  }, [scrollProgress]);

  // Phase 4 (CTA - Ready to Partner): progress 0.75 to 1.00 (Blurred background)
  const ctaOpacity = useMemo(() => {
    if (scrollProgress < 0.75) return 0;
    if (scrollProgress < 0.80) return (scrollProgress - 0.75) / 0.05;
    return 1;
  }, [scrollProgress]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="relative z-10 h-[450vh] sm:h-[500vh] w-full bg-[#030618] selection:bg-emerald-500 selection:text-slate-950"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Canvas background with dynamic blur transition */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover transition-[filter,transform] duration-300 pointer-events-none"
          style={{
            filter: `blur(${blurAmount}px)`,
            transform: blurAmount > 0 ? "scale(1.05)" : "scale(1)",
          }}
        />

        {/* Dark Maritime Backdrop Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#030618]/85 via-[#030618]/60 to-[#030618]/90 pointer-events-none z-0" />

        {/* --- PHASE 1: ABOUT US OVERLAY --- */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 flex flex-col justify-center transition-opacity duration-300 pointer-events-none h-full"
          style={{
            opacity: aboutOpacity,
            display: aboutOpacity > 0.01 ? "flex" : "none",
          }}
        >
          <div className="max-w-2xl text-left pointer-events-auto">
            <span className="text-emerald-400 font-mono text-[11px] sm:text-sm font-semibold uppercase tracking-wider block mb-2 sm:mb-3">
              {content.about.tag}
            </span>
            <h2 className="text-white text-2xl sm:text-5xl font-bold tracking-tight leading-tight mb-3 sm:mb-5">
              {content.about.title}
            </h2>
            <p className="text-slate-300 text-xs sm:text-lg leading-relaxed mb-6 sm:mb-8 max-w-xl">
              {content.about.description}
            </p>
            <div>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-slate-950 px-4 py-2.5 sm:px-6 sm:py-3.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{content.about.ctaButton}</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* --- PHASE 2: TRUSTED BY NUMBERS OVERLAY --- */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 flex flex-col items-center justify-center transition-opacity duration-300 pointer-events-none h-full"
          style={{
            opacity: statsOpacity,
            display: statsOpacity > 0.01 ? "flex" : "none",
          }}
        >
          <div className="text-center mb-4 sm:mb-10 pointer-events-auto">
            <span className="text-emerald-400 font-mono text-[10px] sm:text-sm font-semibold uppercase tracking-wider block mb-1 sm:mb-2">
              {content.stats.tag}
            </span>
            <h2 className="text-white text-xl sm:text-4xl font-bold tracking-tight">
              {content.stats.title}
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 w-full max-w-6xl text-center pointer-events-auto">
            {content.stats.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-b from-[#14223d]/90 via-[#0d162a]/90 to-[#070c19]/95 border border-[#1d2f50]/60 p-3 sm:p-7 flex flex-col items-center justify-center min-h-[110px] sm:min-h-[200px] shadow-xl shadow-black/40 backdrop-blur-md group hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div className="rounded-full w-7 h-7 sm:w-12 sm:h-12 bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 sm:mb-4 shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                    <Icon className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="text-xl sm:text-4xl font-extrabold text-white tracking-tight mb-0.5 sm:mb-2 font-mono group-hover:text-emerald-300 transition-colors">
                    <AnimatedStatValue
                      valStr={item.number}
                      progressRatio={countProgress}
                    />
                  </div>
                  <div className="text-slate-300 text-[11px] sm:text-sm font-medium leading-tight">
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- PHASE 3: WHY CHOOSE US OVERLAY (Blurred Frame 95 Canvas) --- */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-10 flex flex-col justify-center transition-opacity duration-300 pointer-events-none h-full"
          style={{
            opacity: whyChooseUsOpacity,
            display: whyChooseUsOpacity > 0.01 ? "flex" : "none",
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 sm:gap-6 mb-4 sm:mb-12 pointer-events-auto text-center lg:text-left">
            <div className="mx-auto lg:mx-0">
              <span className="text-emerald-400 font-mono text-[10px] sm:text-sm font-semibold uppercase tracking-wider block mb-1 sm:mb-2">
                {content.whyChooseUs.tag}
              </span>
              <h2 className="text-white text-xl sm:text-4xl font-bold tracking-tight max-w-md leading-tight mx-auto lg:mx-0">
                {content.whyChooseUs.title}
              </h2>
            </div>
            <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-lg lg:text-right hidden sm:block">
              {content.whyChooseUs.description}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 w-full pointer-events-auto">
            {content.whyChooseUs.items.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-gradient-to-b from-[#14223d]/90 via-[#0d162a]/90 to-[#070c19]/95 border border-[#1d2f50]/60 p-3.5 sm:p-7 flex flex-col justify-between min-h-[125px] sm:min-h-[220px] shadow-xl shadow-black/40 backdrop-blur-md group hover:border-emerald-500/50 transition-all duration-300"
                >
                  <div>
                    <div className="rounded-full w-7 h-7 sm:w-12 sm:h-12 bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-2 sm:mb-5 shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-950 transition-all duration-300">
                      <Icon className="w-3.5 h-3.5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-white text-xs sm:text-lg font-bold mb-1 sm:mb-2 tracking-tight group-hover:text-emerald-300 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-slate-300/90 text-[10px] sm:text-sm leading-snug line-clamp-3 sm:line-clamp-none font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- PHASE 4: CTA OVERLAY (Blurred Frame 95 Canvas) --- */}
        <div
          className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-12 flex items-center justify-between transition-opacity duration-300 pointer-events-none h-full"
          style={{
            opacity: ctaOpacity,
            display: ctaOpacity > 0.01 ? "flex" : "none",
          }}
        >
          <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-8 pointer-events-auto bg-gradient-to-b from-[#14223d]/80 via-[#0d162a]/85 to-[#070c19]/90 border border-[#1d2f50]/70 p-5 sm:p-12 rounded-2xl sm:rounded-3xl shadow-2xl backdrop-blur-md">
            <div className="max-w-xl">
              <h2 className="text-white text-xl sm:text-5xl font-bold tracking-tight leading-tight mb-2 sm:mb-4">
                {content.cta.title}
              </h2>
              <p className="text-slate-300 text-xs sm:text-lg leading-relaxed max-w-md">
                {content.cta.description}
              </p>
            </div>

            <a
              href="#kontak"
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold px-5 py-3 sm:px-8 sm:py-4 rounded-xl text-xs sm:text-base transition-all duration-300 shadow-xl shadow-emerald-500/25 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer shrink-0"
            >
              <span>{content.cta.button}</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
