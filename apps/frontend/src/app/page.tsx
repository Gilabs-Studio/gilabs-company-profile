"use client";

import { Hero } from "@/features/landing/components/Hero";

// Must match the number of sections in Hero component
const TOTAL_SECTIONS = 4;

export default function HomePage() {
  return (
    <main className="relative bg-black">
      <Hero />
      
      {/* Scroll snap points for Hero sections - each section is exactly 100vh */}
      {Array.from({ length: TOTAL_SECTIONS }, (_, index) => (
        <div
          key={`hero-snap-section-${index}`}
          className="section-snap"
          style={{ 
            height: "100vh",
            minHeight: "100vh",
            maxHeight: "100vh"
          }}
          aria-hidden="true"
        />
      ))}
    </main>
  );
}
