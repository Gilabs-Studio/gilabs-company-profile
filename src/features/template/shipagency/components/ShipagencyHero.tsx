import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ShipagencyHeroProps {
  lang?: 'id' | 'en';
}

export default function ShipagencyHero({ lang = 'id' }: ShipagencyHeroProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isEn = lang === 'en';

  // Scroll progress for parallax effect on hero people (matching docs/ship)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax scroll shift on hero-people (moves with scroll [0, 140]px)
  const peopleY = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative h-[calc(100dvh-41px)] min-h-[calc(100dvh-41px)] max-h-[calc(100dvh-41px)] w-full bg-slate-950 text-slate-100 flex flex-col justify-between overflow-hidden selection:bg-emerald-500 selection:text-slate-950"
    >
      {/* ==================================================== */}
      {/* LAYER 0 (z-0): BACKGROUND SHIP IMAGE                  */}
      {/* ==================================================== */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden">
        <img
          src="/templates/shipagency/hero-bg.webp"
          alt="Ship Agency Background"
          className="w-full h-full object-cover object-center opacity-65 scale-105"
          loading="eager"
        />
        {/* Dark Backdrop Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-slate-950"></div>
      </div>

      {/* Intense Dark Bottom Shadow Gradient for Text Contrast */}
      <div className="absolute inset-x-0 bottom-0 h-36 sm:h-44 lg:h-48 bg-gradient-to-t from-slate-950 via-slate-950/95 via-50% to-transparent z-25 pointer-events-none"></div>

      {/* ==================================================== */}
      {/* LAYER 2 (z-20): HERO PEOPLE WITH PARALLAX & ENTRANCE */}
      {/* ==================================================== */}
      <motion.div
        style={{ y: peopleY }}
        className="relative z-20 w-full max-w-[1650px] h-[78vh] sm:h-[86vh] lg:h-[92vh] mx-auto pointer-events-none flex items-end justify-center px-0 mt-auto"
      >
        <motion.div
          className="relative w-[680px] sm:w-full min-w-[680px] sm:min-w-0 h-full flex items-end justify-center shrink-0"
        >
          <img
            src="/templates/shipagency/hero-people.webp"
            alt="PT. Nautiva Ocean Agency Team"
            className="w-full h-full object-contain object-bottom scale-100 sm:scale-115 lg:scale-120 translate-y-1 sm:translate-y-10 lg:translate-y-16 drop-shadow-[0_45px_100px_rgba(0,0,0,0.85)]"
            loading="eager"
          />
        </motion.div>
      </motion.div>

      {/* ==================================================== */}
      {/* LAYER 3 (z-30): TYPOGRAPHY OVERLAY                    */}
      {/* ==================================================== */}
      <div className="absolute bottom-6 sm:bottom-10 inset-x-0 z-30 px-4 sm:px-8 text-center pointer-events-none select-none">
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-black text-white tracking-tight leading-none drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] whitespace-normal sm:whitespace-nowrap">
          Nautiva Ocean Agency
        </h1>
        <p className="text-sm sm:text-lg lg:text-2xl text-slate-200/90 font-semibold tracking-wide drop-shadow-[0_8px_20px_rgba(0,0,0,0.8)] mt-2 sm:mt-3 max-w-3xl mx-auto">
          {isEn ? 'Outsourcing Port & Vessel Agency' : 'Outsourcing Agen Perkapalan'}
        </p>
      </div>
    </section>
  );
}
