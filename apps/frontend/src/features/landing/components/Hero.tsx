"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { useParallax } from "@/features/landing/hooks/useParallax";

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Apply parallax effect to hero image
  useParallax(imageRef, {
    scrollSpeed: 0.5,
    mouseIntensity: 15,
    enableScroll: true,
    enableMouse: true,
  });

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate headline
    if (headlineRef.current) {
      // Manual HTML construction to preserve coloring while enabling animation
      const lines = [
        "We're <span class='text-primary'>Fast.</span>",
        "And We Build",
        "Things That <span class='text-primary'>Last.</span>"
      ];
      
      headlineRef.current.innerHTML = lines
        .map(line => `<div class="overflow-hidden"><span class="inline-block transform-gpu">${line}</span></div>`)
        .join('');

      // Select the parent spans for animation
      const spans = headlineRef.current.querySelectorAll('div > span');
      
      timeline.fromTo(
        spans,
        {
          y: 100,
          opacity: 0,
          rotateX: -45,
        },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        }
      );
    }

    // Animate subtext
    if (subtextRef.current) {
      timeline.fromTo(
        subtextRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.6"
      );
    }

    // Animate button
    if (buttonRef.current) {
      timeline.fromTo(
        buttonRef.current,
        {
          opacity: 0,
          scale: 0.9,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.4"
      );
    }
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image with Parallax */}
      <div 
        ref={imageRef} 
        className="absolute inset-0 z-0 will-change-transform"
        style={{ scale: '1.1' }} // Scale up slightly to avoid edges showing during parallax
      >
        <Image
          src="/hero1.webp"
          alt="Hero Background"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/10 to-black" />
        {/* Left side gradient for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-full items-center justify-start px-4 sm:px-6 lg:px-8 lg:pl-16">
        <div className="max-w-4xl w-full space-y-6">
          {/* Headline */}
          <h1 
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight font-display"
          >
            We're Fast.
            And We Build
            Things That Last.
          </h1>

          {/* Body */}
          <div className="space-y-4 max-w-3xl">
            <p 
              ref={subtextRef}
              className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-gray-200"
            >
              We don't have decades of experience.
              What we have is speed, teamwork, and good energy.
              We code fast — and we care about what we ship.
            </p>
          </div>

          {/* CTA Button */}
          <div ref={buttonRef} className="pt-4">
            <Button
              asChild
              size="lg"
              className="border-none bg-primary hover:bg-primary/90 text-white font-bold text-base sm:text-lg px-8 py-6 rounded-none transition-all duration-200 shadow-[0_0_20px_rgba(255,85,0,0.3)] hover:shadow-[0_0_30px_rgba(255,85,0,0.5)]"
            >
              <Link href="/contact">
                Build My Software
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
