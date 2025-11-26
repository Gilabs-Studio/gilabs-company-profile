"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  totalSections: number;
  activeSection: number;
  className?: string;
}

/**
 * Minimalist scroll progress indicator
 * Shows current section position with subtle dots
 */
export function ScrollProgress({
  totalSections,
  activeSection,
  className,
}: ScrollProgressProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide indicator after 3 seconds of no scroll
    let hideTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      setIsVisible(true);
      clearTimeout(hideTimeout);
      hideTimeout = setTimeout(() => setIsVisible(false), 3000);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    hideTimeout = setTimeout(() => setIsVisible(false), 3000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-500",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
      aria-label="Scroll progress"
    >
      <div className="flex flex-col gap-2">
        {Array.from({ length: totalSections }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "w-1 h-8 transition-all duration-300",
              index === activeSection
                ? "bg-white h-12"
                : "bg-white/30 hover:bg-white/50"
            )}
            aria-current={index === activeSection ? "step" : undefined}
          />
        ))}
      </div>
    </div>
  );
}

