"use client";

import { Suspense, lazy } from "react";
import { Hero } from "@/features/landing/components/Hero";
import GhostCursor from "@/components/core/ghost-cursor";
import { SectionWrapper } from "@/components/core/section-wrapper";

// Lazy load sections that are below the fold
const Services = lazy(() =>
  import("@/features/landing/components/Services").then((module) => ({
    default: module.Services,
  }))
);

const Technologies = lazy(() =>
  import("@/features/landing/components/Technologies").then((module) => ({
    default: module.Technologies,
  }))
);

const Process = lazy(() =>
  import("@/features/landing/components/Process").then((module) => ({
    default: module.Process,
  }))
);

const WhyChooseUs = lazy(() =>
  import("@/features/landing/components/WhyChooseUs").then((module) => ({
    default: module.WhyChooseUs,
  }))
);

const CallToAction = lazy(() =>
  import("@/features/landing/components/CTA").then((module) => ({
    default: module.CallToAction,
  }))
);

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <GhostCursor
        color="#B19EEF"
        brightness={0.6}
        edgeIntensity={0}
        trailLength={30}
        inertia={0.5}
        grainIntensity={0.03}
        bloomStrength={0.05}
        bloomRadius={0.5}
        bloomThreshold={0.05}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
      />
      <Hero />
      <Suspense fallback={null}>
        <SectionWrapper>
          <Services />
        </SectionWrapper>
      </Suspense>
      <Suspense fallback={null}>
        <SectionWrapper>
          <Technologies />
        </SectionWrapper>
      </Suspense>
      <Suspense fallback={null}>
        <SectionWrapper>
          <Process />
        </SectionWrapper>
      </Suspense>
      <Suspense fallback={null}>
        <SectionWrapper>
          <WhyChooseUs />
        </SectionWrapper>
      </Suspense>
      <Suspense fallback={null}>
        <SectionWrapper>
          <CallToAction />
        </SectionWrapper>
      </Suspense>
    </div>
  );
}
