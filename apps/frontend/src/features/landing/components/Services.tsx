"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useRef, useEffect, useState } from "react";
import { Globe, Smartphone, Palette, Lightbulb } from "lucide-react";

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
}

const services: Service[] = [
  {
    title: "Web Development",
    description: "Custom web applications built with modern technologies",
    features: [
      "Responsive design",
      "Performance optimization",
      "SEO-friendly",
      "Progressive web apps",
    ],
    icon: Globe,
  },
  {
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS & Android",
      "Cross-platform solutions",
      "App store optimization",
      "Performance focused",
    ],
    icon: Smartphone,
  },
  {
    title: "UI/UX Design",
    description: "User-centered design that converts",
    features: [
      "User research",
      "Prototyping",
      "Design systems",
      "Accessibility",
    ],
    icon: Palette,
  },
  {
    title: "Consulting",
    description: "Strategic guidance for your digital transformation",
    features: [
      "Technical audits",
      "Architecture planning",
      "Best practices",
      "Team training",
    ],
    icon: Lightbulb,
  },
];

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveIndex(index);
            }
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 min-h-screen py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-black dark:text-white sm:text-5xl md:text-6xl [font-family:var(--font-space-grotesk)]">
            Our Services
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`transition-all duration-500 ${
                activeIndex === index
                  ? "scale-105 md:sticky md:top-32"
                  : "scale-100 opacity-75"
              }`}
            >
              <Card className="h-full border-zinc-200 bg-white/80 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <service.icon className="h-6 w-6 text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <CardTitle className="text-xl [font-family:var(--font-space-grotesk)]">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-zinc-600 dark:text-zinc-400">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-zinc-700 dark:text-zinc-300"
                      >
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

