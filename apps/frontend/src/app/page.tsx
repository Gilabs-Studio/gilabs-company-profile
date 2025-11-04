"use client";

import { Hero } from "@/features/landing/components/Hero";
import GhostCursor from "@/components/core/ghost-cursor";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <GhostCursor
        color="#B19EEF"
        brightness={1}
        edgeIntensity={0}
        trailLength={50}
        inertia={0.5}
        grainIntensity={0.05}
        bloomStrength={0.1}
        bloomRadius={1}
        bloomThreshold={0.025}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
      <Hero />
    </div>
  );
}
