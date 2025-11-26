"use client";

import React from "react";
import Link from "next/link";
import type { BlogPost } from "../types";
import { BlogRecommendations } from "./BlogRecommendations";
import { BlogImage } from "./BlogImage";

interface BlogDetailProps {
  post: BlogPost;
  relatedPosts: BlogPost[];
}

export function BlogDetail({ post, relatedPosts }: BlogDetailProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  // Convert markdown-style content to React elements
  const formatContent = (content: string) => {
    // Split by double newlines to get paragraphs
    const paragraphs = content.split("\n\n").filter((p) => p.trim());

    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();

      // Check if it's a heading (# through ######)
      const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1]!.length;
        const headingText = headingMatch[2]!;
        
        const headingClasses = {
          1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display mt-10 mb-6 first:mt-0",
          2: "text-2xl sm:text-3xl md:text-4xl font-bold font-display mt-8 mb-4 first:mt-0",
          3: "text-xl sm:text-2xl md:text-3xl font-bold font-display mt-6 mb-3 first:mt-0",
          4: "text-lg sm:text-xl md:text-2xl font-bold font-display mt-5 mb-3 first:mt-0",
          5: "text-base sm:text-lg md:text-xl font-bold font-display mt-4 mb-2 first:mt-0",
          6: "text-sm sm:text-base md:text-lg font-bold font-display mt-4 mb-2 first:mt-0",
        };

        const HeadingTag = `h${level}` as keyof React.JSX.IntrinsicElements;
        return (
          <HeadingTag
            key={index}
            className={headingClasses[level as keyof typeof headingClasses]}
          >
            {parseInlineMarkdown(headingText)}
          </HeadingTag>
        );
      }

      // Check if it's a list item (starts with - or 1.)
      if (trimmed.match(/^[-*]\s+/) || trimmed.match(/^\d+\.\s+/)) {
        const items = trimmed.split(/\n(?=[-*]|\d+\.)/).filter((item) => item.trim());
        return (
          <ul key={index} className="list-none space-y-2 mb-6 ml-4">
            {items.map((item, itemIndex) => {
              const cleanItem = item.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "");
              return (
                <li key={itemIndex} className="flex items-start gap-2">
                  <span className="text-white/60 mt-2">•</span>
                  <span className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/80">
                    {parseInlineMarkdown(cleanItem)}
                  </span>
                </li>
              );
            })}
          </ul>
        );
      }

      // Regular paragraph with inline markdown
      return (
        <p
          key={index}
          className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/80 mb-6"
        >
          {parseInlineMarkdown(trimmed)}
        </p>
      );
    });
  };

  // Parse inline markdown (bold, italic, links, code)
  const parseInlineMarkdown = (text: string): React.ReactNode[] => {
    const parts: React.ReactNode[] = [];
    let key = 0;

    // Pattern untuk bold (**text** atau __text__)
    const boldPattern = /\*\*([^*]+)\*\*|__([^_]+)__/g;
    // Pattern untuk inline code (`code`) - process first to avoid conflicts
    const codePattern = /`([^`]+)`/g;
    // Pattern untuk links [text](url)
    const linkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    // Pattern untuk italic (*text* atau _text_) - but not if part of bold
    // Match single * or _ that are not part of double ** or __
    const italicPattern = /\*([^*]+?)\*|_([^_]+?)_/g;

    // Combine all matches with their positions
    const matches: Array<{
      start: number;
      end: number;
      type: "bold" | "italic" | "code" | "link";
      content: string;
      url?: string;
    }> = [];

    // Find all code matches first (highest priority)
    codePattern.lastIndex = 0;
    let match: RegExpExecArray | null;
    while ((match = codePattern.exec(text)) !== null) {
      matches.push({
        start: match.index,
        end: match.index + match[0].length,
        type: "code",
        content: match[1]!,
      });
    }

    // Find all link matches
    linkPattern.lastIndex = 0;
    match = null;
    while ((match = linkPattern.exec(text)) !== null) {
      // Check if link overlaps with code
      const overlapsCode = matches.some(
        (m) =>
          m.type === "code" &&
          m.start < match!.index + match![0].length &&
          m.end > match!.index
      );
      if (!overlapsCode) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          type: "link",
          content: match[1]!,
          url: match[2]!,
        });
      }
    }

    // Find all bold matches
    boldPattern.lastIndex = 0;
    match = null;
    while ((match = boldPattern.exec(text)) !== null) {
      // Check if bold overlaps with code or link
      const overlaps = matches.some(
        (m) =>
          (m.type === "code" || m.type === "link") &&
          m.start < match!.index + match![0].length &&
          m.end > match!.index
      );
      if (!overlaps) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          type: "bold",
          content: match[1] || match[2] || "",
        });
      }
    }

    // Find all italic matches (not already part of bold or code)
    italicPattern.lastIndex = 0;
    match = null;
    while ((match = italicPattern.exec(text)) !== null) {
      // Check if this is actually part of a bold pattern (double ** or __)
      const matchStart = match.index;
      const matchEnd = match.index + match[0].length;
      const beforeChar = matchStart > 0 ? text[matchStart - 1] : "";
      const afterChar = matchEnd < text.length ? text[matchEnd] : "";
      
      // Check if surrounded by same character (making it bold)
      const isBold =
        (match[0].startsWith("*") && (beforeChar === "*" || afterChar === "*")) ||
        (match[0].startsWith("_") && (beforeChar === "_" || afterChar === "_"));

      // Also check if it overlaps with existing bold/code/link matches
      const isPartOfOther = matches.some(
        (m) =>
          (m.type === "bold" || m.type === "code" || m.type === "link") &&
          m.start <= matchStart &&
          m.end >= matchEnd
      );

      if (!isBold && !isPartOfOther) {
        matches.push({
          start: matchStart,
          end: matchEnd,
          type: "italic",
          content: match[1] || match[2] || "",
        });
      }
    }

    // Sort matches by position and remove overlaps (keep first match)
    matches.sort((a, b) => a.start - b.start);
    const nonOverlappingMatches: typeof matches = [];
    matches.forEach((match) => {
      const overlaps = nonOverlappingMatches.some(
        (m) =>
          (m.start < match.end && m.end > match.start) ||
          (match.start < m.end && match.end > m.start)
      );
      if (!overlaps) {
        nonOverlappingMatches.push(match);
      }
    });

    // Build React elements
    let lastIndex = 0;
    nonOverlappingMatches.forEach((match) => {
      // Add text before match
      if (match.start > lastIndex) {
        const beforeText = text.substring(lastIndex, match.start);
        if (beforeText) {
          parts.push(beforeText);
        }
      }

      // Add matched element
      switch (match.type) {
        case "bold":
          parts.push(
            <strong key={key++} className="font-bold">
              {match.content}
            </strong>
          );
          break;
        case "italic":
          parts.push(
            <em key={key++} className="italic">
              {match.content}
            </em>
          );
          break;
        case "code":
          parts.push(
            <code
              key={key++}
              className="font-mono text-sm bg-white/10 px-1.5 py-0.5 rounded"
            >
              {match.content}
            </code>
          );
          break;
        case "link":
          parts.push(
            <Link
              key={key++}
              href={match.url || "#"}
              className="text-white underline hover:text-white/80 transition-colors"
              target={match.url?.startsWith("http") ? "_blank" : undefined}
              rel={match.url?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {match.content}
            </Link>
          );
          break;
      }

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex));
    }

    return parts.length > 0 ? parts : [text];
  };

  return (
    <article className="min-h-screen bg-black text-white pt-20 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 lg:pl-8">
        <div>
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm sm:text-base text-white/60 hover:text-white transition-colors mb-8"
        >
          <span>←</span>
          <span>Back to Blog</span>
        </Link>

        {/* Header */}
        <header className="mb-8 sm:mb-12">
          <div className="flex items-center gap-3 text-sm sm:text-base text-white/60 mb-4 flex-wrap">
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

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight font-display mb-6">
            {post.title}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl font-normal leading-relaxed text-white/70 mb-6">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-4">
            <div className="text-sm sm:text-base text-white/80">
              {post.author.name}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.image && (
          <div className="relative w-full aspect-video overflow-hidden bg-white/5 border border-white/10 mb-8 sm:mb-12">
            <BlogImage
              src={post.image}
              alt={post.imageAlt || post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 896px"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-base sm:text-lg md:text-xl font-normal leading-relaxed text-white/80">
            {formatContent(post.content)}
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs sm:text-sm font-mono text-white/50 border border-white/20 px-3 py-1 rounded-none"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Related Posts Recommendations */}
        {relatedPosts.length > 0 && (
          <BlogRecommendations
            posts={relatedPosts}
            currentPostSlug={post.slug}
          />
        )}

        {/* Back Link Footer */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm sm:text-base text-white/60 hover:text-white transition-colors"
          >
            <span>←</span>
            <span>Back to Blog</span>
          </Link>
        </div>
        </div>
      </div>
    </article>
  );
}

