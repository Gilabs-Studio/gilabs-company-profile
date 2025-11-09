"use client";

import { Hero } from "@/features/landing/components/Hero";

// Must match the number of sections in Hero component
const TOTAL_SECTIONS = 4;

export default function HomePage() {
  return (
    <main className="relative bg-black">
      <Hero />
      
      {/* Scroll snap points - each section is 100vh */}
      {Array.from({ length: TOTAL_SECTIONS }).map((_, index) => (
        <div
          key={index}
          className="section-snap"
          style={{ height: "100vh" }}
          aria-hidden="true"
        />
      ))}
    </main>
  );
}
