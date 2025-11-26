"use client";

import { cn } from "@/lib/utils";
import { portfolioData } from "../data/portfolio";
import type { PortfolioCategory } from "../types";

interface PortfolioFilterProps {
  selectedCategory: PortfolioCategory | "all";
  onCategoryChange: (category: PortfolioCategory | "all") => void;
}

export function PortfolioFilter({
  selectedCategory,
  onCategoryChange,
}: PortfolioFilterProps) {
  return (
    <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
      <button
        onClick={() => onCategoryChange("all")}
        className={cn(
          "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold font-display border transition-all duration-200",
          selectedCategory === "all"
            ? "bg-white text-black border-white"
            : "bg-transparent text-white border-white/30 hover:border-white/60"
        )}
      >
        All
      </button>
      {portfolioData.categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={cn(
            "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-bold font-display border transition-all duration-200",
            selectedCategory === category.id
              ? "bg-white text-black border-white"
              : "bg-transparent text-white border-white/30 hover:border-white/60"
          )}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
}

