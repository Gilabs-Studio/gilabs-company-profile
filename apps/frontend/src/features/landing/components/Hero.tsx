"use client";

import { useEffect } from "react";
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
  const isActive = isWithinHeroSections; // Only active when within Hero sections

  // Reset global stores and scroll position when navigating to homepage to ensure morphing works correctly
  useEffect(() => {
    if (pathname === "/") {
      // Clear global stores to reset morphing state
      globalTextStore.clear();
      globalMinHeightStore.clear();
      
      // Reset scroll position to top immediately (without smooth scroll to avoid delay)
      // This ensures the scroll section hook calculates the correct activeSection
      // Use both methods for maximum compatibility
      if (globalThis.window !== undefined) {
        // Try instant behavior first (modern browsers)
        try {
          globalThis.window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
        } catch {
          // Fallback for older browsers
          globalThis.window.scrollTo(0, 0);
        }
        // Also set scrollTop directly as backup
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }
    }
  }, [pathname]);

  return (
    <section 
      className={cn(
        "fixed inset-0 bg-black text-white transition-opacity duration-500",
        isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}
      style={{
        top: "var(--header-height, 4rem)",
        height: "calc(100vh - var(--header-height, 4rem))",
        // Prevent internal scrolling, use page scroll only
        overflow: "hidden",
      }}
    >
      <ScrollProgress 
        totalSections={TOTAL_SECTIONS} 
        activeSection={activeSection}
      />
      {/* Container with proper constraints */}
      <div className="w-full h-full flex items-center justify-start px-4 sm:px-6 lg:px-8 lg:pl-16">
        <div 
          className="max-w-4xl w-full space-y-4 sm:space-y-6"
          style={{
            // Ensure content fits within viewport with proper padding
            maxHeight: "calc(100vh - var(--header-height, 4rem) - 4rem)",
            paddingTop: "clamp(2rem, 5vh, 4rem)",
            paddingBottom: "clamp(2rem, 5vh, 4rem)",
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

          {/* Body with Morphing */}
          <div className="space-y-3 sm:space-y-4 max-w-3xl">
            {/* Render body texts - always use consistent textId for morphing */}
            {currentSection.body.map((bodyText, index) => (
              <div key={`${activeSection}-body-${index}`} className="relative min-h-8">
                <MorphingText
                  text={bodyText}
                  isActive={isActive}
                  textId={`body-${index + 1}`}
                  className="h-full text-lg sm:text-xl md:text-2xl font-normal leading-relaxed"
                />
              </div>
            ))}
          </div>

          {/* CTA Button with fade in/out animation */}
          <div 
            className={cn(
              "transition-opacity duration-1000 ease-in-out pt-2 sm:pt-4",
              currentSection.button ? "opacity-100" : "opacity-0 pointer-events-none"
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
