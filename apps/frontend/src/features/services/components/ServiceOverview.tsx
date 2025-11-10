"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { MorphingText } from "@/components/ui/morphing-text";

const serviceList = [
  "Web & Mobile Apps",
  "Company Websites",
  "Business Systems (ERP / CRM)",
  "SaaS Products",
];

const defaultText = "We move fast — but never rush. Our goal is to build reliable products that grow with your business";

const serviceDescriptions: Record<string, string> = {
  "Web & Mobile Apps": "We build cross-platform apps that feel native everywhere. One codebase, smooth performance, and updates that reach all users instantly.",
  "Company Websites": "From landing pages to full-stack platforms, we create web experiences that are clean, fast, and built to convert visitors into customers.",
  "Business Systems (ERP / CRM)": "We connect your tools, databases, and workflows into systems that automate processes and give you real-time insights into your business.",
  "SaaS Products": "We build scalable SaaS platforms that grow with your user base. Fast to launch, easy to iterate, and designed to handle growth from day one.",
};

export function ServiceOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getCurrentText = () => {
    if (selectedIndex === null) {
      return defaultText;
    }
    const serviceName = serviceList[selectedIndex];
    return serviceDescriptions[serviceName] || defaultText;
  };

  const currentText = getCurrentText();

  const handleServiceClick = (index: number) => {
    setSelectedIndex(selectedIndex === index ? null : index);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleServiceClick(index);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-8xl">
          {/* Left: Headline with Morphing Text */}
          <div className="space-y-6 sm:space-y-8">
            <div className="relative min-h-16 sm:min-h-20 md:min-h-24 lg:min-h-28 xl:min-h-32">
              <MorphingText
                text={currentText}
                isActive={true}
                textId="service-headline"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight font-display"
              />
            </div>
          </div>

          {/* Right: Service List */}
          <div className="space-y-2 sm:space-y-3">
            {serviceList.map((service, index) => {
              const isHovered = hoveredIndex === index;
              const isSelected = selectedIndex === index;
              
              const getBorderClasses = () => {
                if (isSelected) return "border-white translate-x-2";
                if (isHovered) return "border-white/80 translate-x-2";
                return "hover:border-white/60 hover:translate-x-1";
              };

              const getNumberClasses = () => {
                if (isSelected) return "text-white";
                if (isHovered) return "text-white/80";
                return "group-hover:text-white/60";
              };

              const getTitleClasses = () => {
                if (isSelected) return "text-white";
                if (isHovered) return "text-white";
                return "text-white/70 group-hover:text-white/90";
              };

              const getIndicatorOpacity = () => {
                if (isSelected) return "opacity-100";
                if (isHovered) return "opacity-100";
                return "opacity-0 group-hover:opacity-50";
              };
              
              return (
                <button
                  key={service}
                  type="button"
                  className={cn(
                    "group relative transition-all duration-300 cursor-pointer w-full text-left",
                    "border-l-2 border-white/20 pl-6 py-4",
                    getBorderClasses()
                  )}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleServiceClick(index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        "text-sm sm:text-base font-mono text-white/40 transition-all duration-300",
                        getNumberClasses()
                      )}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className={cn(
                        "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display transition-all duration-300",
                        getTitleClasses()
                      )}
                    >
                      {service}
                    </h3>
                  </div>
                  {/* Hover/Selected indicator line */}
                  <div
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-0.5 bg-white transition-all duration-300",
                      getIndicatorOpacity()
                    )}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

