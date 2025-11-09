"use client";

import { Header } from "@/components/ui/Header";
import { ServiceOverview } from "@/features/services/components/ServiceOverview";

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="relative bg-black">
        <ServiceOverview />
      </main>
    </>
  );
}

