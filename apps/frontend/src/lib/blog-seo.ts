import type { Metadata } from "next";
import type { BlogPost } from "@/features/blog/types";
import { siteConfig } from "./seo";

/**
 * Generate comprehensive bilingual SEO metadata for blog posts
 */
export function generateBlogMetadata(post: BlogPost): Metadata {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  
  // Use SEO data if available, otherwise fallback to default
  const seoEn = post.seo?.en || {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags || [],
    imageAlt: post.imageAlt || post.title,
  };

  const seoId = post.seo?.id || {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags || [],
    imageAlt: post.imageAlt || post.title,
  };

  // Handle image URL
  let ogImage: string;
  if (post.image) {
    ogImage = post.image.startsWith("http")
      ? post.image
      : `${siteConfig.url}${post.image}`;
  } else {
    ogImage = `${siteConfig.url}${siteConfig.ogImage}`;
  }

  // Primary language (English) metadata
  const primaryTitle = `${seoEn.title} | ${siteConfig.name}`;
  const primaryDescription = seoEn.description;

  return {
    title: {
      default: primaryTitle,
      template: `%s | ${siteConfig.name}`,
    },
    description: primaryDescription,
    keywords: [
      ...seoEn.keywords,
      ...seoId.keywords,
      "blog",
      "tech blog",
      "software development",
      "web development",
      "Indonesia",
      "Semarang",
    ],
    authors: [{ name: post.author.name }],
    creator: post.author.name,
    publisher: siteConfig.company.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      alternateLocale: ["id_ID"],
      url,
      title: primaryTitle,
      description: primaryDescription,
      siteName: siteConfig.name,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags || [],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: seoEn.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: primaryTitle,
      description: primaryDescription,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
      languages: {
        en: url,
        id: url,
        "x-default": url,
      },
    },
    metadataBase: new URL(siteConfig.url),
    other: {
      // Additional meta tags for Indonesian SEO
      "og:title:id": seoId.title,
      "og:description:id": seoId.description,
      // Article specific
      "article:published_time": post.publishedAt,
      "article:author": post.author.name,
      "article:section": post.category,
      ...(post.tags && {
        "article:tag": post.tags.join(", "),
      }),
    },
  };
}

/**
 * Generate Article structured data (JSON-LD) for blog posts
 */
export function generateArticleSchema(post: BlogPost) {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const seoEn = post.seo?.en;
  const seoId = post.seo?.id;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: seoEn?.title || post.title,
    description: seoEn?.description || post.excerpt,
    image: post.image
      ? post.image.startsWith("http")
        ? post.image
        : `${siteConfig.url}${post.image}`
      : `${siteConfig.url}${siteConfig.ogImage}`,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Organization",
      name: post.author.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    keywords: [
      ...(seoEn?.keywords || []),
      ...(seoId?.keywords || []),
      post.category,
      ...(post.tags || []),
    ].join(", "),
    articleSection: post.category,
    inLanguage: ["en", "id"],
    ...(post.readTime && {
      timeRequired: `PT${post.readTime}M`,
    }),
  };
}

