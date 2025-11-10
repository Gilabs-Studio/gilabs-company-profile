import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/seo";
import { blogData } from "@/features/blog/data/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // Static routes
  const routes = [
    "",
    "/blog",
    "/service",
    "/portfolio",
    "/contact",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
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

