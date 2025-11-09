"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { blogData } from "../data/blog";

export function BlogHeader() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(blogData.posts.map((post) => post.category))
  );

  const categoryCounts = categories.reduce(
    (acc, category) => {
      acc[category] = blogData.posts.filter(
        (post) => post.category === category
      ).length;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="border-b border-white/10 pb-8 mb-12">
      <div className="flex flex-wrap items-center gap-6 sm:gap-8">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-mono text-white/40">
            Categories
          </span>
        </div>
        {categories.map((category) => (
          <div
            key={category}
            className="group relative"
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "text-base sm:text-lg font-normal transition-colors",
                  hoveredCategory === category
                    ? "text-white"
                    : "text-white/70 group-hover:text-white/90"
                )}
              >
                {category}
              </span>
              <span
                className={cn(
                  "text-xs sm:text-sm font-mono transition-colors",
                  hoveredCategory === category
                    ? "text-white/80"
                    : "text-white/40 group-hover:text-white/60"
                )}
              >
                ({categoryCounts[category]})
              </span>
            </div>
            <div
              className={cn(
                "absolute bottom-0 left-0 h-px bg-white transition-all duration-300",
                hoveredCategory === category ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

