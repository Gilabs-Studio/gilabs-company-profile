import { ServiceOverview } from "@/features/services/components/ServiceOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Layanan Software House - Web Development, Mobile Apps & Business Systems | GiLabs",
  description:
    "Layanan lengkap Software House GiLabs: Web Development, Mobile App Development, UI/UX Design, System Integration, dan Maintenance. Fast delivery tanpa mengorbankan kualitas. Software House terpercaya di Semarang, Indonesia.",
  path: "/service",
});

export default function ServicePage() {
  return (
    <main className="relative bg-black">
      <ServiceOverview />
    </main>
  );
}

