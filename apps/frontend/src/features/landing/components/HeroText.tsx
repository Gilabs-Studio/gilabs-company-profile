"use client";

import { useEffect, useState } from "react";
import type { HeroTextProps } from "../types";

export function HeroText({
  text,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
}: HeroTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const words = text.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div className={className}>
      {words.map((word, index) => (
        <span
          key={index}
          className="inline-block opacity-0"
          style={{
            animationDelay: isVisible
              ? `${index * staggerDelay}s`
              : "999999s",
            animation: isVisible
              ? "fadeInUp 0.6s ease-out forwards"
              : "none",
          }}
        >
          {word}
          {index < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </div>
  );
}
