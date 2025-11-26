"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MorphingText, globalTextStore, globalMinHeightStore } from "@/components/ui/morphing-text";
import { cn } from "@/lib/utils";
import { useScrollSection } from "@/features/landing/hooks/useScrollSection";
import { ScrollProgress } from "./ScrollProgress";

// All content sections
const contentSections = [
  {
    heading: "We're Fast. And We Build Things That Last.",
    body: [
      "We don't have decades of experience.",
      "What we have is speed, teamwork, and good energy.",
      "We code fast — and we care about what we ship.",
    ],
    button: "Let's Build Something",
  },
  {
    heading: "We're not a big company. We're a small team that loves building stuff.",
    body: [
      "We started because we like making things work — and making them fast.",
      "We don't hide behind buzzwords or fake professionalism.",
      "Just real people, solving real problems, with code and coffee.",
    ],
  },
  {
    heading: "We move quick. We stay in flow.",
    body: [
      "No long meetings. No endless waiting.",
      "Just focus, good vibe, and getting things done.",
      "When an idea clicks, we build. When we ship, we move on.",
    ],
  },
  {
    heading: "Wanna build something fast with us?",
    body: [
      "Drop us a message. Tell us your idea.",
      "We'll see how far we can take it — together.",
    ],
    button: "Let's Talk",
  },
];

const TOTAL_SECTIONS = contentSections.length;

export function Hero() {
  const pathname = usePathname();
  const { activeSection, isWithinHeroSections } = useScrollSection(TOTAL_SECTIONS);
  const currentSection = contentSections[activeSection];
  const isActive = isWithinHeroSections;
  const contentRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // Reset global stores and scroll position when navigating to homepage
  useEffect(() => {
    if (pathname === "/") {
      globalTextStore.clear();
      globalMinHeightStore.clear();
      
      if (globalThis.window !== undefined) {
        try {
          globalThis.window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        } catch {
          globalThis.window.scrollTo(0, 0);
        }
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
  }, [pathname]);

  // Auto-scale content to fit viewport
  useEffect(() => {
    const calculateScale = () => {
      if (!contentRef.current) return;
      
      const container = contentRef.current;
      const viewportHeight = window.innerHeight;
      const headerHeight = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--header-height')
          .replace('rem', '')
      ) * 16 || 64;
      
      const availableHeight = viewportHeight - headerHeight - 64; // 64px for padding buffer
      const contentHeight = container.scrollHeight;
      
      if (contentHeight > availableHeight) {
        const newScale = availableHeight / contentHeight;
        setScale(Math.max(newScale, 0.7)); // Minimum scale 0.7 (70%)
      } else {
        setScale(1);
      }
    };

    // Calculate on mount and when active section changes
    calculateScale();
    
    // Recalculate on window resize
    window.addEventListener('resize', calculateScale);
    
    // Small delay to ensure morphing animation has settled
    const timeoutId = setTimeout(calculateScale, 100);
    
    return () => {
      window.removeEventListener('resize', calculateScale);
      clearTimeout(timeoutId);
    };
  }, [activeSection, currentSection]);

  return (
    <section 
      className={cn(
        "fixed inset-0 bg-black text-white transition-opacity duration-500",
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      style={{
        top: "var(--header-height, 4rem)",
        height: "calc(100vh - var(--header-height, 4rem))",
        overflow: "hidden",
      }}
    >
      <ScrollProgress 
        totalSections={TOTAL_SECTIONS} 
        activeSection={activeSection}
      />
      
      {/* Single container with centering and overflow prevention */}
      <div className="w-full h-full flex items-center justify-start px-4 sm:px-6 lg:px-8 lg:pl-16">
        <div 
          ref={contentRef}
          className="max-w-4xl w-full space-y-4 sm:space-y-6 transition-transform duration-300 origin-left"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          {/* Headline with Morphing Text */}
          <div className="relative min-h-16 sm:min-h-20 md:min-h-24 lg:min-h-28 xl:min-h-32">
            <MorphingText
              text={currentSection.heading}
              isActive={isActive}
              textId="heading"
              className="h-full text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight font-display"
            />
          </div>

          {/* Body with Morphing - always render 3 slots for consistency */}
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            {[0, 1, 2].map((index) => {
              const bodyText = currentSection.body[index];
              return (
                <div 
                  key={`body-slot-${index}`} 
                  className={cn(
                    "relative transition-all duration-500 ease-out",
                    bodyText 
                      ? "min-h-8 opacity-100 scale-y-100" 
                      : "h-0 opacity-0 scale-y-0 overflow-hidden pointer-events-none"
                  )}
                  style={{
                    transformOrigin: "top",
                  }}
                >
                  {bodyText && (
                    <MorphingText
                      text={bodyText}
                      isActive={isActive}
                      textId={`body-${index + 1}`}
                      className="h-full text-lg sm:text-xl md:text-2xl font-normal leading-relaxed"
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Button with fade in/out animation */}
          <div 
            className={cn(
              "transition-all duration-1000 ease-in-out pt-2 sm:pt-4",
              currentSection.button 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-95 pointer-events-none h-0 overflow-hidden"
            )}
          >
            {currentSection.button && (
              <Button
                asChild
                size="lg"
                className="border border-white bg-black hover:bg-white hover:text-black font-bold text-base sm:text-lg px-8 py-6 rounded-none transition-all duration-200"
              >
                <Link href="/contact">
                  {currentSection.button}
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
