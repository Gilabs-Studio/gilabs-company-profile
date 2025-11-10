import type { Metadata } from "next";

/**
 * SEO Configuration and Constants
 * Centralized SEO metadata for the GiLabs company profile website
 */

type RobotsInfo = {
  index?: boolean;
  follow?: boolean;
  "max-video-preview"?: number;
  "max-image-preview"?: "large" | "none" | "standard";
  "max-snippet"?: number;
};

export const siteConfig = {
  name: "GiLabs",
  description:
    "GiLabs - Professional web development, mobile apps, and business systems. Building fast without breaking things. Based in Semarang, Indonesia.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gilabs.com",
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@gilabs",
  locale: "id_ID",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  company: {
    name: "GiLabs",
    email: "hello@gilabs.com",
    phone: "+62 812-3741-1352",
    address: {
      street: "Semarang",
      city: "Semarang",
      region: "Central Java",
      country: "Indonesia",
    },
    workingHours: "Mon - Fri, 9:00 AM - 6:00 PM WIB",
  },
} as const;

/**
 * Generate metadata for pages
 */
export function generateMetadata({
  title,
  description,
  path = "",
  image,
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
}) {
  const url = `${siteConfig.url}${path}`;
  // Handle both absolute and relative image URLs
  let ogImage: string;
  if (image) {
    ogImage = image.startsWith("http") ? image : `${siteConfig.url}${image}`;
  } else {
    ogImage = `${siteConfig.url}${siteConfig.ogImage}`;
  }

  return {
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "web development",
      "mobile app development",
      "software development",
      "Indonesia",
      "Semarang",
      "Next.js",
      "React",
      "company profile",
    ],
    authors: [{ name: siteConfig.company.name }],
    creator: siteConfig.company.name,
    publisher: siteConfig.company.name,
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      } satisfies RobotsInfo,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      title,
      description,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      creator: siteConfig.twitterHandle,
    },
    alternates: {
      canonical: url,
    },
    metadataBase: new URL(siteConfig.url),
    verification: {
      google: siteConfig.googleSiteVerification,
    },
  } satisfies Metadata;
}

/**
 * Generate Organization structured data (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.company.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.company.phone,
      contactType: "Customer Service",
      email: siteConfig.company.email,
      areaServed: "ID",
      availableLanguage: ["Indonesian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.company.address.city,
      addressRegion: siteConfig.company.address.region,
      addressCountry: siteConfig.company.address.country,
    },
    sameAs: [
      "https://linkedin.com/company/gilabs",
      "https://twitter.com/gilabs",
      "https://github.com/gilabs",
    ],
  };
}

/**
 * Generate WebSite structured data (JSON-LD)
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
    },
  };
}

