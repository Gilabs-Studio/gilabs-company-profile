"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { BlogPost } from "../types";
import { BlogImage } from "./BlogImage";

interface BlogRecommendationsProps {
  posts: BlogPost[];
  currentPostSlug: string;
}

export function BlogRecommendations({
  posts,
  currentPostSlug,
}: BlogRecommendationsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-white/10 pt-12 mt-12">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display mb-8">
        Recommended Reads
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {posts.map((post, index) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className={cn(
              "group relative transition-all duration-300 block",
              "border-b-2 border-white/20 pb-6",
              hoveredIndex === index
                ? "border-white"
                : "hover:border-white/60"
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="space-y-4">
              {/* Image */}
              {post.image && (
                <div className="relative w-full aspect-video overflow-hidden bg-white/5 border border-white/10">
                  <BlogImage
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
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-white/60 flex-wrap">
                  <span className="font-mono">{post.category}</span>
                  <span>•</span>
                  <time dateTime={post.publishedAt}>
                    {formatDate(post.publishedAt)}
                  </time>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display leading-tight line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-sm sm:text-base font-normal leading-relaxed text-white/70 line-clamp-2">
                  {post.excerpt}
                </p>
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
          </Link>
        ))}
      </div>
    </section>
  );
}


