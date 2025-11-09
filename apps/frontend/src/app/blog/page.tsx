"use client";

import { Header } from "@/components/ui/Header";
import { BlogOverview } from "@/features/blog/components/BlogOverview";

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="relative bg-black">
        <BlogOverview />
      </main>
    </>
  );
}

