import { BlogOverview } from "@/features/blog/components/BlogOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Blog Software House - Tips Web Development & Mobile App | GiLabs",
  description:
    "Blog Software House GiLabs: Insights, tips, dan pembelajaran tentang web development, mobile app development, dan business systems. Baca artikel terbaru dari tim Software House profesional di Semarang.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <main className="relative bg-black">
      <BlogOverview />
    </main>
  );
}

