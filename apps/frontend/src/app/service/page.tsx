import { ServiceOverview } from "@/features/services/components/ServiceOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Services - Web Development, Mobile Apps & Business Systems",
  description:
    "We offer professional web development, mobile app development, and business systems. Fast delivery without compromising quality. Based in Semarang, Indonesia.",
  path: "/service",
});

export default function ServicePage() {
  return (
    <main className="relative bg-black">
      <ServiceOverview />
    </main>
  );
}

