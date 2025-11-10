import { BlogOverview } from "@/features/blog/components/BlogOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Blog - Insights, Stories, and What We're Learning",
  description:
    "Thoughts on building products, working with clients, and the lessons we've learned along the way. Read our latest insights on web development, mobile apps, and business systems.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="relative bg-black">
      <BlogOverview />
    </main>
  );
}

