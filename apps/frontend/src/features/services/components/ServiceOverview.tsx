"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const serviceList = [
  "Web & Mobile Apps",
  "Company Websites",
  "Business Systems (ERP / CRM)",
  "SaaS Products",
];

export function ServiceOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-8xl">
          {/* Left: Headline */}
          <div className="space-y-6 sm:space-y-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight font-display">
              We move fast — but never rush. Our goal is to build reliable products that grow with your business
            </h1>
          </div>

          {/* Right: Service List */}
          <div className="space-y-2 sm:space-y-3">
            {serviceList.map((service, index) => (
              <div
                key={service}
                className={cn(
                  "group relative transition-all duration-300 cursor-pointer",
                  "border-l-2 border-white/20 pl-6 py-4",
                  hoveredIndex === index
                    ? "border-white translate-x-2"
                    : "hover:border-white/60 hover:translate-x-1"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-4">
                  <span
                    className={cn(
                      "text-sm sm:text-base font-mono text-white/40 transition-all duration-300",
                      hoveredIndex === index ? "text-white/80" : "group-hover:text-white/60"
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={cn(
                      "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display transition-all duration-300",
                      hoveredIndex === index
                        ? "text-white"
                        : "text-white/70 group-hover:text-white/90"
                    )}
                  >
                    {service}
                  </h3>
                </div>
                {/* Hover indicator line */}
                <div
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-0.5 bg-white transition-all duration-300",
                    hoveredIndex === index ? "opacity-100" : "opacity-0 group-hover:opacity-50"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

