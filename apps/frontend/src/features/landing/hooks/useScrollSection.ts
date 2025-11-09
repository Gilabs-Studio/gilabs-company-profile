"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export function useScrollSection(totalSections: number) {
  const [activeSection, setActiveSection] = useState(0);
  const [isWithinHeroSections, setIsWithinHeroSections] = useState(true);
  const rafIdRef = useRef<number | null>(null);
  const lastScrollTimeRef = useRef(0);
  const isScrollingRef = useRef(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Throttle scroll events using requestAnimationFrame
      if (rafIdRef.current) {
        return;
      }

      rafIdRef.current = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        
        // Calculate which section should be active based on scroll position
        // Each section takes up 100vh
        const sectionIndex = Math.floor(scrollPosition / windowHeight);
        
        // Check if we're still within Hero sections
        const maxHeroScroll = totalSections * windowHeight;
        const isWithin = scrollPosition < maxHeroScroll;
        setIsWithinHeroSections(isWithin);
        
        // Clamp to valid section indices (0 to totalSections - 1)
        // This ensures we only track Hero sections, not sections beyond
        const clampedIndex = Math.max(
          0,
          Math.min(sectionIndex, totalSections - 1)
        );
        
        setActiveSection(clampedIndex);
        rafIdRef.current = null;
      });
    };

    // Detect aggressive scrolling (rapid scroll events)
    const handleScrollStart = () => {
      isScrollingRef.current = true;
      const now = Date.now();
      const timeSinceLastScroll = now - lastScrollTimeRef.current;
      
      // If scrolling too fast (< 50ms between events), slow it down
      if (timeSinceLastScroll < 50 && timeSinceLastScroll > 0) {
        // Slightly delay the section update to allow morphing to catch up
        setTimeout(() => {
          handleScroll();
        }, 100);
      } else {
        handleScroll();
      }
      
      lastScrollTimeRef.current = now;
    };

    const handleScrollEnd = () => {
      isScrollingRef.current = false;
      // Final update after scroll ends
      handleScroll();
    };

    let scrollEndTimeout: NodeJS.Timeout;
    const scrollEndHandler = () => {
      clearTimeout(scrollEndTimeout);
      scrollEndTimeout = setTimeout(handleScrollEnd, 150);
    };

    window.addEventListener("scroll", handleScrollStart, { passive: true });
    window.addEventListener("scroll", scrollEndHandler, { passive: true });
    
    // Initial call - use setTimeout to ensure DOM is ready and scroll position is set
    // This is especially important when navigating from another page
    // Small delay ensures scroll reset from Hero component has completed
    const initTimeout = setTimeout(() => {
      handleScroll();
    }, pathname === "/" ? 10 : 0);

    return () => {
      clearTimeout(initTimeout);
      window.removeEventListener("scroll", handleScrollStart);
      window.removeEventListener("scroll", scrollEndHandler);
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      clearTimeout(scrollEndTimeout);
    };
  }, [totalSections, pathname]);

  return { activeSection, isWithinHeroSections };
}

