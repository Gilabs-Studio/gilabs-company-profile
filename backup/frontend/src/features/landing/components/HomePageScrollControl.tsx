"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface HomePageScrollControlProps {
  totalSections: number;
}

/**
 * Component to control scroll behavior on homepage
 * Prevents overflow and manages scroll boundaries
 */
export function HomePageScrollControl({ totalSections }: HomePageScrollControlProps) {
  const pathname = usePathname();
  
  useEffect(() => {
    // Only apply on homepage
    if (pathname !== "/") {
      document.documentElement.classList.remove("homepage-active");
      return;
    }
    
    // Add class to html for CSS targeting
    document.documentElement.classList.add("homepage-active");
    
    // Calculate max scroll position with more accurate detection
    const getMaxScrollPosition = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      // Max scroll is when bottom of viewport reaches bottom of document
      return documentHeight - windowHeight;
    };
    
    let maxScrollPosition = getMaxScrollPosition();
    
    // Update max scroll on resize
    const handleResize = () => {
      maxScrollPosition = getMaxScrollPosition();
    };
    
    // Prevent scroll beyond max position
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Recalculate in case of dynamic content
      maxScrollPosition = documentHeight - windowHeight;
      
      if (currentScroll > maxScrollPosition) {
        window.scrollTo({
          top: maxScrollPosition,
          behavior: 'auto'
        });
      }
      
      // Prevent negative scroll (bounce effect on some browsers)
      if (currentScroll < 0) {
        window.scrollTo({
          top: 0,
          behavior: 'auto'
        });
      }
    };
    
    // Prevent wheel events from causing over-scroll
    const handleWheel = (e: WheelEvent) => {
      const currentScroll = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const delta = e.deltaY;
      const atBottom = Math.ceil(currentScroll + windowHeight) >= documentHeight;
      
      // Prevent scroll down if at bottom
      if (delta > 0 && atBottom) {
        e.preventDefault();
      }
      
      // Prevent scroll up if at top
      if (delta < 0 && currentScroll <= 0) {
        e.preventDefault();
      }
    };
    
    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("resize", handleResize, { passive: true });
    
    // Initial check
    handleResize();
    
    // Cleanup
    return () => {
      document.documentElement.classList.remove("homepage-active");
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("resize", handleResize);
    };
  }, [pathname, totalSections]);
  
  return null;
}
