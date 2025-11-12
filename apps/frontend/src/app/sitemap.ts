import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogData } from "@/features/blog/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes - prioritize important pages for "software house" SEO
  const routes = [
    { path: "", priority: 1.0, changeFreq: "weekly" as const }, // Homepage - highest priority
    { path: "/service", priority: 0.9, changeFreq: "weekly" as const }, // Service page - high priority for software house
    { path: "/portfolio", priority: 0.9, changeFreq: "monthly" as const }, // Portfolio - high priority
    { path: "/contact", priority: 0.8, changeFreq: "monthly" as const }, // Contact - important
    { path: "/blog", priority: 0.8, changeFreq: "weekly" as const }, // Blog - for content marketing
    { path: "/privacy", priority: 0.3, changeFreq: "yearly" as const }, // Privacy - low priority
  ].map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
  }));

  // Dynamic blog routes
  const blogRoutes = blogData.posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}

