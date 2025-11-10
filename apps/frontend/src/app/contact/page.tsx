import { ContactOverview } from "@/features/contact/components/ContactOverview";
import { generateMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: "Contact Us - Let's Build Something Together",
  description:
    "Have a project in mind? Want to discuss your ideas? Contact GiLabs in Semarang, Indonesia. We're here to help turn your vision into reality.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="relative bg-black">
      <ContactOverview />
    </main>
  );
}

