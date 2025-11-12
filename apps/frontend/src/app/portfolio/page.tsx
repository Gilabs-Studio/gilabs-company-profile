import { PortfolioOverview } from "@/features/portfolio/components/PortfolioOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio Software House - Projek Web & Mobile App | GiLabs",
  description:
    "Portfolio Software House GiLabs: Projek web development, mobile app development, dan business systems yang telah kami selesaikan. Real projects, real results. Built fast, built right.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <main className="relative bg-black">
      <PortfolioOverview />
    </main>
  );
}

