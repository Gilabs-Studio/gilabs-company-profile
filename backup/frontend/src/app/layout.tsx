import type { Metadata } from "next";
import { Noto_Sans_Syriac } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/Header";
import { FooterWrapper } from "@/components/ui/FooterWrapper";
import { generateMetadata as generateSEOMetadata, generateOrganizationSchema, generateWebsiteSchema, generateFAQSchema } from "@/lib/seo";
import Script from "next/script";

const notoSansSyriac = Noto_Sans_Syriac({
  variable: "--font-noto-sans-syriac",
  subsets: ["latin"],
  weight: ["100", "200", "400"],
});

export const metadata: Metadata = generateSEOMetadata({
  title: "GiLabs - Software House Terbaik di Semarang | Web Development & Mobile Apps",
  description:
    "Software House profesional di Semarang, Indonesia. Spesialis web development, mobile app development, dan business systems. Building fast without breaking things. Jasa pembuatan aplikasi dan website berkualitas tinggi.",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationSchema = generateOrganizationSchema();
  const websiteSchema = generateWebsiteSchema();
  const faqSchema = generateFAQSchema();

  return (
    <html lang="id">
      <body
        className={`${notoSansSyriac.variable} antialiased`}
      >
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        <Header />
        {children}
        <FooterWrapper />
      </body>
    </html>
  );
}
