import { PortfolioOverview } from "@/features/portfolio/components/PortfolioOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - Our Work, Built Fast, Built Right",
  description:
    "Real projects, real results. Explore our portfolio of web applications, mobile apps, and business systems built for clients who needed speed without sacrificing quality.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="relative bg-black">
      <PortfolioOverview />
    </main>
  );
}

