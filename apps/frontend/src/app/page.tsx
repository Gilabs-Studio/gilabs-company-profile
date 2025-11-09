"use client";

import { Hero } from "@/features/landing/components/Hero";
import { Header } from "@/components/ui/Header";

// Must match the number of sections in Hero component
const TOTAL_SECTIONS = 4;

export default function HomePage() {
  return (
    <>
      <Header />
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
        
        {/* Placeholder sections for navigation - can be replaced with actual content later */}
        <section id="services" className="min-h-screen section-snap bg-black text-white flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4">Services</h2>
            <p className="text-lg sm:text-xl text-white/60">Coming soon...</p>
          </div>
        </section>
        
        <section id="portofolio" className="min-h-screen section-snap bg-black text-white flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4">Portofolio</h2>
            <p className="text-lg sm:text-xl text-white/60">Coming soon...</p>
          </div>
        </section>
        
        <section id="blog" className="min-h-screen section-snap bg-black text-white flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4">Blog</h2>
            <p className="text-lg sm:text-xl text-white/60">Coming soon...</p>
          </div>
        </section>
        
        <section id="contact" className="min-h-screen section-snap bg-black text-white flex items-center justify-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-display mb-4">Contact</h2>
            <p className="text-lg sm:text-xl text-white/60">Coming soon...</p>
          </div>
        </section>
      </main>
    </>
  );
}
