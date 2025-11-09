"use client";

import { Header } from "@/components/ui/Header";
import { ContactOverview } from "@/features/contact/components/ContactOverview";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="relative bg-black">
        <ContactOverview />
      </main>
    </>
  );
}

