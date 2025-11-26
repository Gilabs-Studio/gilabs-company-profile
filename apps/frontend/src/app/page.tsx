import { Hero } from "@/features/landing/components/Hero";
import { Pricing } from "@/features/landing/components/Pricing";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "GiLabs - Software House Terbaik di Semarang | Web Development & Mobile Apps",
  description:
    "Software House profesional di Semarang, Indonesia. Spesialis web development, mobile app development, dan business systems. Building fast without breaking things. Jasa pembuatan aplikasi dan website berkualitas tinggi dengan pengiriman cepat.",
  path: "/",
});

export default function HomePage() {
  return (
    <main className="relative bg-black min-h-screen">
      <Hero />
      <Pricing />
    </main>
  );
}
