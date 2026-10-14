import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface ShipagencyTestimonialsProps {
  lang?: "id" | "en";
}

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quoteEn: string;
  quoteId: string;
}

const TESTIMONIALS: TestimonialItem[] = [
  {
    name: "Capt. Hendrik van der Berg",
    role: "Fleet Operations Director",
    company: "North Sea Tankers B.V.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
    quoteEn:
      "PT Nautiva has redefined vessel turnaround efficiency for our tanker fleet in Indonesian waters. Port clearance was handled with high precision, cutting our customary berth waiting time in half.",
    quoteId:
      "PT Nautiva menetapkan standar baru efisiensi turnaround armada tanker kami di perairan Indonesia. Kliring kepelabuhanan tuntas dengan presisi tinggi, memotong separuh dari waktu tunggu sandar biasanya.",
  },
  {
    name: "Elena Rostova",
    role: "Head of Crewing & Compliance",
    company: "Baltic Ocean Lines",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    quoteEn:
      "Mobilizing certified officers and ratings on tight notice used to be our biggest vulnerability. Nautiva's vetted talent pipeline and strict STCW certification protocols eliminated delays permanently.",
    quoteId:
      "Memobilisasi perwira bersertifikasi STCW dalam waktu mendesak dulu menjadi celah terbesar kami. Standardisasi rekrutmen dan verifikasi kompetensi Nautiva menyelesaikan masalah tersebut secara permanen.",
  },
  {
    name: "Marcus Takahashi",
    role: "VP of Maritime Logistics",
    company: "Pacific Bulk Carriers Ltd.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
    quoteEn:
      "Their 24/7 technical dispatch and synchronized bunker supply prevented a critical 3-day laytime penalty for our Capesize bulk vessel. Their transparency and real-time disbursements are best-in-class.",
    quoteId:
      "Dukungan teknis 24/7 dan sinkronisasi pasokan bunker mereka mencegah penalti demurrage 3 hari pada armada curah Capesize kami. Transparansi dan laporan disbursement real-time mereka patut diacungi jempol.",
  },
  {
    name: "Capt. Bambang Kusuma",
    role: "Fleet Technical Superintendent",
    company: "PT Samudera Nusantara Lines",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
    quoteEn:
      "Entrusting our domestic port agencies across 14 remote archipelago ports to Nautiva gave our operations flawless reliability. Zero surprise fees, swift documentation, and genuine care for crew welfare.",
    quoteId:
      "Mempercayakan keagenan kapal kami di 14 pelabuhan domestik kepada Nautiva memberikan kepastian operasional prima. Tanpa biaya tak terduga, penerbitan dokumen cepat, dan koordinasi kru sangat terpelihara.",
  },
];

export default function ShipagencyTestimonials({ lang = "id" }: ShipagencyTestimonialsProps) {
  const isEn = lang === "en";
  const [activeIdx, setActiveIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const tag = "TESTIMONIALS";
  const title = isEn
    ? "Trusted by Global Fleet Owners"
    : "Kepercayaan Pemilik Kapal & Pelayaran";
  const description = isEn
    ? "Real operational feedback from shipowners and fleet operations directors who rely on our agency and vessel management."
    : "Ulasan nyata dari pemilik armada dan operator pelayaran yang mengandalkan keagenan perkapalan dan manajemen kapal kami.";

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIdx((prev) => (prev + 1) % TESTIMONIALS.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIdx((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  const selectTestimonial = useCallback(
    (idx: number) => {
      setDirection(idx > activeIdx ? 1 : -1);
      setActiveIdx(idx);
    },
    [activeIdx]
  );

  // Auto-play interval with hover-pause support
  useEffect(() => {
    if (isPaused) {
      if (timerRef.current) window.clearInterval(timerRef.current);
      return;
    }
    timerRef.current = window.setInterval(nextTestimonial, 6500);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [isPaused, nextTestimonial]);

  const current = TESTIMONIALS[activeIdx];
  const activeQuote = isEn ? current.quoteEn : current.quoteId;

  return (
    <section
      id="testimonials"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="relative z-20 bg-[#030618] py-12 sm:py-20 px-4 sm:px-10 shadow-2xl shadow-black/90 overflow-hidden selection:bg-emerald-500 selection:text-slate-950"
    >
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        {/* Header - EXACT MATCH with ServicesSection */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-2 sm:gap-6 mb-6 sm:mb-14 text-center lg:text-left">
          <div className="mx-auto lg:mx-0">
            <span className="text-emerald-400 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-wider block mb-1 sm:mb-2">
              {tag}
            </span>
            <h2 className="text-white text-xl sm:text-4xl font-bold tracking-tight max-w-xl leading-tight mx-auto lg:mx-0">
              {title}
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-lg mx-auto lg:text-right">
            {description}
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div
          style={{ borderRadius: "0.875rem" }}
          className="relative bg-gradient-to-b from-[#14223d]/90 via-[#0d162a]/90 to-[#070c19]/95 border border-[#1d2f50]/60 p-5 sm:p-10 shadow-xl shadow-black/40 backdrop-blur-md overflow-hidden"
        >
          {/* Subtle Watermark Quote Icon */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-8 pointer-events-none opacity-10 text-emerald-400">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28 rotate-180" />
          </div>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIdx}
              custom={direction}
              initial={{ opacity: 0, x: direction > 0 ? 30 : -30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -30 : 30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-center"
            >
              {/* Left Column: Client Avatar & Identity */}
              <div className="md:col-span-4 flex flex-row md:flex-col items-center md:items-start text-left gap-4 sm:gap-5">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden border border-[#1d2f50] shadow-md bg-slate-900 shrink-0">
                  <img
                    src={current.avatar}
                    alt={current.name}
                    width={160}
                    height={160}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-white text-base sm:text-xl font-bold tracking-tight leading-snug">
                    {current.name}
                  </h3>
                  <p className="text-emerald-400 text-xs sm:text-sm font-medium mt-0.5">
                    {current.role}
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm mt-0.5">
                    {current.company}
                  </p>
                </div>
              </div>

              {/* Right Column: Quote with Word Reveal Animation */}
              <div className="md:col-span-8 flex flex-col justify-between h-full space-y-6">
                <blockquote className="text-slate-100 text-sm sm:text-lg lg:text-xl leading-relaxed tracking-tight font-normal">
                  &ldquo;
                  {activeQuote.split(" ").map((word, wIdx) => (
                    <motion.span
                      key={wIdx}
                      initial={{ filter: "blur(5px)", opacity: 0, y: 3 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        delay: 0.018 * wIdx,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                  &rdquo;
                </blockquote>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800/60">
                  <button
                    onClick={prevTestimonial}
                    aria-label="Previous testimonial"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0e172e] border border-slate-700/60 text-slate-300 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    aria-label="Next testimonial"
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#0e172e] border border-slate-700/60 text-slate-300 flex items-center justify-center hover:bg-emerald-500 hover:text-slate-950 hover:border-emerald-400 transition-all duration-300 cursor-pointer shadow-md hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 4 Cards Selector Grid - 2 columns on mobile, 4 columns on desktop (Exact match with Services) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 w-full mt-4 sm:mt-6">
          {TESTIMONIALS.map((item, idx) => {
            const isSelected = idx === activeIdx;
            return (
              <button
                key={idx}
                onClick={() => selectTestimonial(idx)}
                style={{ borderRadius: "0.875rem" }}
                className={`relative text-left p-3.5 sm:p-5 flex items-center gap-3 transition-all duration-300 cursor-pointer backdrop-blur-md shadow-xl shadow-black/40 ${
                  isSelected
                    ? "bg-gradient-to-b from-[#182a4d] via-[#101c36] to-[#0a1224] border border-emerald-500/60"
                    : "bg-gradient-to-b from-[#14223d]/90 via-[#0d162a]/90 to-[#070c19]/95 border border-[#1d2f50]/60 hover:border-emerald-500/40"
                }`}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-slate-700 shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h4
                    className={`text-xs sm:text-sm font-bold truncate transition-colors leading-snug ${
                      isSelected
                        ? "text-emerald-300"
                        : "text-white group-hover:text-emerald-300"
                    }`}
                  >
                    {item.name}
                  </h4>
                  <p className="text-[10px] sm:text-xs text-slate-300/85 truncate mt-0.5">
                    {item.company}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
