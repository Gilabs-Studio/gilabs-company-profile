import { Hero } from "@/features/landing/components/Hero";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

// Must match the number of sections in Hero component
const TOTAL_SECTIONS = 4;

export const metadata: Metadata = generateMetadata({
  title: "GiLabs - Software House Terbaik di Semarang | Web Development & Mobile Apps",
  description:
    "Software House profesional di Semarang, Indonesia. Spesialis web development, mobile app development, dan business systems. Building fast without breaking things. Jasa pembuatan aplikasi dan website berkualitas tinggi dengan pengiriman cepat.",
  path: "/",
});

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
