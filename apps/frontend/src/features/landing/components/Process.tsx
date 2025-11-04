"use client";

import { Separator } from "@/components/ui/separator";
import { useRef, useEffect, useState } from "react";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and project requirements through comprehensive research and consultation.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Our team creates a detailed project roadmap, defining timelines, milestones, and technical architecture to ensure smooth execution.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We craft user-centered designs with modern UI/UX principles, creating prototypes and design systems that align with your brand.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Using agile methodologies, we build your solution iteratively, ensuring code quality, performance, and maintainability at every step.",
  },
  {
    number: "05",
    title: "Testing",
    description:
      "Rigorous testing across devices and browsers ensures your application works flawlessly for all users before launch.",
  },
  {
    number: "06",
    title: "Launch & Support",
    description:
      "We deploy your solution and provide ongoing support, monitoring, and optimization to ensure long-term success.",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = stepRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-30% 0px -30% 0px",
      }
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      stepRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative z-10 min-h-screen py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl [font-family:var(--font-space-grotesk)]">
            Our Process
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-zinc-200 dark:bg-zinc-800 md:block" />
          
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                ref={(el) => {
                  stepRefs.current[index] = el;
                }}
                className={`relative flex items-start gap-8 transition-all duration-500 ${
                  activeStep === index ? "md:sticky md:top-32" : ""
                }`}
              >
                <div className="relative flex-shrink-0">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full border-2 transition-all duration-500 ${
                      activeStep >= index
                        ? "border-black bg-black text-white dark:border-white dark:bg-white dark:text-black"
                        : "border-zinc-300 bg-white text-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-600"
                    }`}
                  >
                    <span className="text-lg font-bold [font-family:var(--font-space-grotesk)]">
                      {step.number}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-1/2 top-16 hidden h-24 w-0.5 -translate-x-1/2 bg-zinc-200 dark:bg-zinc-800 md:block" />
                  )}
                </div>

                <div
                  className={`flex-1 transition-all duration-500 ${
                    activeStep === index ? "scale-105" : "scale-100 opacity-75"
                  }`}
                >
                  <h3 className="mb-3 text-2xl font-bold text-black dark:text-white [font-family:var(--font-space-grotesk)]">
                    {step.title}
                  </h3>
                  <Separator className="mb-4" />
                  <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

