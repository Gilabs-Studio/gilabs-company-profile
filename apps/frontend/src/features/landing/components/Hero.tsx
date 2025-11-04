"use client";

import { TextEffect } from "@/components/core/text-effect";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import type { HeroProps } from "../types";

export function Hero({ className = "" }: Readonly<HeroProps>) {
  return (
    <section
      className={`relative z-10 flex min-h-screen items-center justify-center px-4 sm:px-6 lg:px-8 ${className}`}
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
        <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 sm:text-xl md:text-2xl">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="group bg-black text-white hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            asChild
          >
            <a href="#contact">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-zinc-300 dark:border-zinc-700"
            asChild
          >
            <a href="#services">View Our Work</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
