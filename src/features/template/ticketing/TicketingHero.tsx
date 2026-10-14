import React, { useEffect, useState, useMemo } from "react";
import Beams from "./Beams";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface TicketingHeroProps {
  locale?: string;
}

export function ShineBorder({
  borderWidth = 2,
  duration = 14,
  shineColor = [
    "oklch(0.50 0.12 288)",
    "oklch(0.55 0.13 337)",
    "oklch(0.65 0.15 11)",
  ],
  className = "",
  style = {},
}: {
  borderWidth?: number;
  duration?: number;
  shineColor?: string | string[];
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={
        {
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          backgroundImage: `radial-gradient(transparent,transparent, ${
            Array.isArray(shineColor) ? shineColor.join(",") : shineColor
          },transparent,transparent)`,
          backgroundSize: "300% 300%",
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "var(--border-width)",
          ...style,
        } as React.CSSProperties
      }
      className={`animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position] ${className}`}
    />
  );
}

export default function TicketingHero({ locale = "id" }: TicketingHeroProps) {
  // Target date set to 45 days in future for demo
  const targetDate = useMemo(() => {
    return Date.now() + 45 * 24 * 60 * 60 * 1000;
  }, []);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 45,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const now = Date.now();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft();
    const timer = window.setInterval(calculateTimeLeft, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="dark relative w-full h-screen overflow-hidden bg-black text-white">
      {/* Beams Background (100% exact copy from docs/ticketing) */}
      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={3}
          beamHeight={30}
          beamNumber={20}
          lightColor="#F4B342"
          speed={2}
          noiseIntensity={1.75}
          scale={0.2}
          rotation={30}
          backgroundImage="/templates/ticketing/bg.webp"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight text-white mb-8 text-center drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)]">
          LOREM IPSUM
        </h1>

        {/* Countdown */}
        <div className="flex gap-4 md:gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-extralight tabular-nums text-white">
              {mounted ? String(timeLeft.days).padStart(2, "0") : "45"}
            </div>
            <div className="text-xs md:text-sm font-light text-neutral-400 mt-2 uppercase tracking-wider">
              {locale === "id" ? "Hari" : "Days"}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-extralight tabular-nums text-white">
              {mounted ? String(timeLeft.hours).padStart(2, "0") : "12"}
            </div>
            <div className="text-xs md:text-sm font-light text-neutral-400 mt-2 uppercase tracking-wider">
              {locale === "id" ? "Jam" : "Hours"}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-extralight tabular-nums text-white">
              {mounted ? String(timeLeft.minutes).padStart(2, "0") : "30"}
            </div>
            <div className="text-xs md:text-sm font-light text-neutral-400 mt-2 uppercase tracking-wider">
              {locale === "id" ? "Menit" : "Minutes"}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="text-4xl md:text-6xl font-extralight tabular-nums text-white">
              {mounted ? String(timeLeft.seconds).padStart(2, "0") : "45"}
            </div>
            <div className="text-xs md:text-sm font-light text-neutral-400 mt-2 uppercase tracking-wider">
              {locale === "id" ? "Detik" : "Seconds"}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="relative inline-block rounded-md">
          <ShineBorder
            borderWidth={2}
            duration={14}
            shineColor={[
              "oklch(0.50 0.12 288)",
              "oklch(0.55 0.13 337)",
              "oklch(0.65 0.15 11)",
            ]}
            className="rounded-md"
          />
          <a
            href="#tickets"
            className="relative z-10 inline-flex items-center justify-center h-11 px-8 rounded-md bg-neutral-900/90 text-white text-sm font-light uppercase tracking-wider hover:bg-neutral-800 transition-colors cursor-pointer border border-white/10"
          >
            {locale === "id" ? "Dapatkan Tiket" : "Get Tickets"}
          </a>
        </div>
      </div>
    </section>
  );
}
