"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { portfolioData } from "../data/portfolio";
import { PortfolioFilter } from "./PortfolioFilter";
import type { PortfolioCategory } from "../types";

export function PortfolioOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] =
    useState<PortfolioCategory | "all">("all");

  const filteredCategories =
    selectedCategory === "all"
      ? portfolioData.categories
      : portfolioData.categories.filter(
          (cat) => cat.id === selectedCategory
        );

  return (
    <section className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-8">
        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight font-display mb-6 sm:mb-8">
            {portfolioData.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/80 whitespace-pre-line">
            {portfolioData.hero.subtext}
          </p>
        </div>

        {/* Category Filter */}
        <PortfolioFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Categories Grid */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-20">
          {filteredCategories.map((category, categoryIndex) => (
            <div
              key={category.id}
              id={category.id}
              className="border-t border-white/10 pt-8 sm:pt-12 scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
                {/* Left: Category Info - Sticky */}
                <div className="lg:col-span-4">
                  <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
                    <a
                      href={`#${category.id}`}
                      className="group block cursor-pointer no-underline"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm sm:text-base font-mono text-white/40 group-hover:text-white transition-colors">
                          {category.number}
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white group-hover:opacity-90 transition-opacity">
                          {category.title}
                        </h2>
                      </div>
                    </a>
                    <p className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/70">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Right: Portfolio Items */}
                <div className="lg:col-span-8 space-y-8 sm:space-y-12">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={item.id}
                      className={cn(
                        "group relative transition-all duration-300",
                        "border-l-2 border-white/20 pl-6 sm:pl-8 py-4 sm:py-6",
                        hoveredIndex === categoryIndex * 100 + itemIndex
                          ? "border-white translate-x-2"
                          : "hover:border-white/60 hover:translate-x-1"
                      )}
                      onMouseEnter={() =>
                        setHoveredIndex(categoryIndex * 100 + itemIndex)
                      }
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <div className="space-y-4 sm:space-y-6">
                        {/* Image */}
                        <div className="relative w-full aspect-video overflow-hidden bg-white/5 border border-white/10">
                          <Image
                            src={item.image}
                            alt={item.imageAlt || item.title}
                            fill
                            className={cn(
                              "object-cover transition-all duration-500",
                              hoveredIndex === categoryIndex * 100 + itemIndex
                                ? "scale-105 brightness-110"
                                : "group-hover:scale-[1.02] brightness-100"
                            )}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                          />
                        </div>

                        {/* Content */}
                        <div className="space-y-2 sm:space-y-3">
                          <div className="flex items-start justify-between gap-4">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-display">
                              {item.title}
                            </h3>
                            {item.year && (
                              <span className="text-sm sm:text-base font-mono text-white/40 whitespace-nowrap">
                                {item.year}
                              </span>
                            )}
                          </div>
                          <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-white/70">
                            {item.description}
                          </p>
                          {item.tags && item.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-xs sm:text-sm font-mono text-white/50 border border-white/20 px-2 sm:px-3 py-1 rounded-none"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                      {/* Hover indicator line */}
                      <div
                        className={cn(
                          "absolute left-0 top-0 bottom-0 w-0.5 bg-white transition-all duration-300",
                          hoveredIndex === categoryIndex * 100 + itemIndex
                            ? "opacity-100"
                            : "opacity-0 group-hover:opacity-50"
                        )}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

