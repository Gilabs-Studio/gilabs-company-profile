"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { blogData } from "../data/blog";
import { BlogHeader } from "./BlogHeader";

export function BlogOverview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = Array.from(
    new Set(blogData.posts.map((post) => post.category))
  );

  const filteredPosts =
    selectedCategory === "all"
      ? blogData.posts
      : blogData.posts.filter((post) => post.category === selectedCategory);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <section className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-8">
        {/* Hero Section */}
        <div className="max-w-4xl mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight font-display mb-6 sm:mb-8">
            {blogData.hero.headline}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/80 whitespace-pre-line">
            {blogData.hero.subtext}
          </p>
        </div>

        {/* Blog Header - Category Overview */}
        <BlogHeader />

        {/* Category Filter */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-white/10 pb-6">
          <button
            onClick={() => setSelectedCategory("all")}
            className={cn(
              "text-sm sm:text-base font-normal transition-colors pb-2 border-b-2",
              selectedCategory === "all"
                ? "text-white border-white"
                : "text-white/60 border-transparent hover:text-white/80"
            )}
          >
            All Posts
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "text-sm sm:text-base font-normal transition-colors pb-2 border-b-2",
                selectedCategory === category
                  ? "text-white border-white"
                  : "text-white/60 border-transparent hover:text-white/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {filteredPosts.map((post, index) => (
            <article
              key={post.id}
              className={cn(
                "group relative transition-all duration-300",
                "border-b-2 border-white/20 pb-6 sm:pb-8",
                hoveredIndex === index
                  ? "border-white"
                  : "hover:border-white/60"
              )}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="space-y-4 sm:space-y-5">
                {/* Image */}
                {post.image && (
                  <div className="relative w-full aspect-video overflow-hidden bg-white/5 border border-white/10">
                    <Image
                      src={post.image}
                      alt={post.imageAlt || post.title}
                      fill
                      className={cn(
                        "object-cover transition-all duration-500",
                        hoveredIndex === index
                          ? "scale-105 brightness-110"
                          : "group-hover:scale-[1.02] brightness-100"
                      )}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-white/60 flex-wrap">
                    <span className="font-mono">{post.category}</span>
                    <span>•</span>
                    <time dateTime={post.publishedAt}>
                      {formatDate(post.publishedAt)}
                    </time>
                    {post.readTime && (
                      <>
                        <span>•</span>
                        <span>{post.readTime} min read</span>
                      </>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-display leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-sm sm:text-base md:text-lg font-normal leading-relaxed text-white/70 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono text-white/50 border border-white/20 px-2 py-1 rounded-none"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <div className="text-xs sm:text-sm text-white/80">
                      {post.author.name}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover indicator line */}
              <div
                className={cn(
                  "absolute bottom-0 left-0 right-0 h-0.5 bg-white transition-all duration-300",
                  hoveredIndex === index
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-50"
                )}
              />
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-white/60">
              No posts found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

