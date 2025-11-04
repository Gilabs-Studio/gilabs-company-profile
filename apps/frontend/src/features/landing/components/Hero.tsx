"use client";

import { TextEffect } from "@/components/core/text-effect";
import type { HeroProps } from "../types";

export function Hero({ className = "" }: Readonly<HeroProps>) {
  return (
    <section
      className={`flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="mx-auto w-full max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl lg:text-7xl [font-family:var(--font-space-grotesk)]">
          <TextEffect
            per="char"
            delay={0.5}
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            We build apps
            <br />
            and websites
          </TextEffect>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl md:text-2xl">
          <TextEffect
            per="char"
            delay={1.5}
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
          >
            that boost conversion with super minimalist and modern UI
          </TextEffect>
        </p>
      </div>
    </section>
  );
}
