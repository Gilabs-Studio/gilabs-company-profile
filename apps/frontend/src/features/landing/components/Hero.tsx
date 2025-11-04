"use client";

import { HeroText } from "./HeroText";
import type { HeroProps } from "../types";

export function Hero({ className = "" }: HeroProps) {
  return (
    <section
      className={`flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl [font-family:var(--font-space-grotesk)]">
          <HeroText
            text="We build apps and websites"
            delay={0.2}
            staggerDelay={0.08}
          />
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl md:text-2xl">
          <HeroText
            text="that boost conversion with super minimalist and modern UI"
            delay={0.8}
            staggerDelay={0.06}
          />
        </p>
      </div>
    </section>
  );
}
