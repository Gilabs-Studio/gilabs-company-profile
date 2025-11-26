import { ContactOverview } from "@/features/contact/components/ContactOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Kontak Software House GiLabs - Konsultasi Gratis | Semarang",
  description:
    "Hubungi Software House GiLabs di Semarang, Indonesia. Konsultasi gratis untuk proyek web development, mobile app, dan business systems. Let's build something together.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="relative bg-black">
      <ContactOverview />
    </main>
  );
}

