"use client";

import { Header } from "@/components/ui/Header";
import { PortfolioOverview } from "@/features/portfolio/components/PortfolioOverview";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main className="relative bg-black">
        <PortfolioOverview />
      </main>
    </>
  );
}

