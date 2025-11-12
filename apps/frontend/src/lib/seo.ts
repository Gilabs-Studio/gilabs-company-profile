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
  shortName: "GiLabs",
  description:
    "GiLabs - Software House Terbaik di Semarang, Indonesia. Professional web development, mobile apps, dan business systems. Building fast without breaking things.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gilabs.com",
  ogImage: "/images/og-image.jpg",
  twitterHandle: "@gilabs",
  locale: "id_ID",
  alternateLocale: "en_US",
  googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  themeColor: "#000000",
  backgroundColor: "#000000",
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
    // Title configuration
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
      absolute: title,
    },
    description,
    
    // Keywords for SEO
    keywords: [
      "software house",
      "software house Semarang",
      "software house Indonesia",
      "jasa software house",
      "web development",
      "mobile app development",
      "software development",
      "pembuatan aplikasi",
      "pembuatan website",
      "Indonesia",
      "Semarang",
      "Next.js",
      "React",
      "company profile",
    ],
    
    // Authors and publisher
    authors: [{ name: siteConfig.company.name, url: siteConfig.url }],
    creator: siteConfig.company.name,
    publisher: siteConfig.company.name,
    applicationName: siteConfig.name,
    category: "Technology",
    classification: "Business",
    
    // Robots configuration
    robots: {
      index: !noIndex,
      follow: !noIndex,
      nocache: false,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large" as const,
        "max-snippet": -1,
      } satisfies RobotsInfo,
    },
    
    // OpenGraph for social sharing
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      alternateLocale: [siteConfig.alternateLocale],
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
          type: "image/jpeg",
        },
      ],
      countryName: "Indonesia",
      emails: [siteConfig.company.email],
      phoneNumbers: [siteConfig.company.phone],
    },
    
    // Twitter Card
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage], // Can be string or array of strings
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
    },
    
    // Alternates and canonical
    alternates: {
      canonical: url,
      languages: {
        id: url,
        en: url,
        "x-default": url,
      },
    },
    
    // Base URL for metadata
    metadataBase: new URL(siteConfig.url),
    
    // Verification
    verification: {
      google: siteConfig.googleSiteVerification,
    },
    
    // Icons configuration
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      other: [
        {
          rel: "mask-icon",
          url: "/safari-pinned-tab.svg",
          color: siteConfig.themeColor,
        },
      ],
    },
    
    // Manifest for PWA (handled by Next.js route handler at /manifest.ts)
    manifest: "/manifest.json",
    
    // Apple Web App
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: siteConfig.name,
      startupImage: [
        {
          url: "/apple-touch-startup-image.png",
          media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
        },
      ],
    },
    
    // Viewport (handled by Next.js automatically, but can be overridden)
    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 5,
      userScalable: true,
      themeColor: [
        { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
        { media: "(prefers-color-scheme: dark)", color: siteConfig.themeColor },
      ],
    },
    
    // Format detection
    formatDetection: {
      telephone: true,
      date: false,
      address: false,
      email: true,
      url: false,
    },
    
    // Referrer policy
    referrer: "origin-when-cross-origin",
    
    // Color scheme
    colorScheme: "dark",
    
    // Other meta tags
    other: {
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "black-translucent",
      "msapplication-TileColor": siteConfig.themeColor,
      "msapplication-config": "/browserconfig.xml",
      "theme-color": siteConfig.themeColor,
      "color-scheme": "dark",
      "format-detection": "telephone=yes",
    },
  } satisfies Metadata;
}

/**
 * Generate Organization structured data (JSON-LD)
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: siteConfig.company.name,
    alternateName: "GiLabs Software House",
    url: siteConfig.url,
    logo: `${siteConfig.url}/images/logo.png`,
    description: "Software House profesional di Semarang, Indonesia. Spesialis web development, mobile app development, dan business systems.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.company.phone,
      contactType: "Customer Service",
      email: siteConfig.company.email,
      areaServed: ["ID", "Indonesia"],
      availableLanguage: ["Indonesian", "English"],
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.company.address.street,
      addressLocality: siteConfig.company.address.city,
      addressRegion: siteConfig.company.address.region,
      addressCountry: siteConfig.company.address.country,
    },
    openingHours: siteConfig.company.workingHours,
    priceRange: "$$",
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    knowsAbout: [
      "Software House",
      "Web Development",
      "Mobile App Development",
      "Software Development",
      "Business Systems",
      "UI/UX Design",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Software House Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description: "Pengembangan website dan aplikasi web profesional",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Mobile App Development",
            description: "Pengembangan aplikasi mobile iOS dan Android",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UI/UX Design",
            description: "Desain antarmuka pengguna yang user-friendly",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "System Integration",
            description: "Integrasi sistem dan API untuk otomasi bisnis",
          },
        },
      ],
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
    alternateName: "GiLabs Software House",
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: ["id", "en"],
    publisher: {
      "@type": "Organization",
      name: siteConfig.company.name,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate FAQ structured data (JSON-LD) for software house
 */
export function generateFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Apa itu Software House?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Software House adalah perusahaan yang menyediakan jasa pengembangan perangkat lunak, termasuk web development, mobile app development, dan business systems. GiLabs adalah Software House profesional di Semarang, Indonesia yang fokus pada pengembangan aplikasi web dan mobile dengan kualitas tinggi dan pengiriman cepat.",
        },
      },
      {
        "@type": "Question",
        name: "Dimana lokasi Software House GiLabs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GiLabs berlokasi di Semarang, Jawa Tengah, Indonesia. Kami melayani klien dari seluruh Indonesia dan internasional untuk pengembangan web, mobile app, dan sistem bisnis.",
        },
      },
      {
        "@type": "Question",
        name: "Layanan apa saja yang ditawarkan Software House GiLabs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GiLabs Software House menyediakan layanan lengkap termasuk: Web Development (Frontend, Backend, Full-stack), Mobile App Development (iOS & Android dengan Flutter), UI/UX Design, System Integration, dan Maintenance & Scaling. Kami fokus pada pengiriman cepat tanpa mengorbankan kualitas.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa biaya untuk jasa Software House?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biaya pengembangan software bervariasi tergantung kompleksitas proyek, fitur yang dibutuhkan, dan timeline. GiLabs menawarkan harga kompetitif dengan kualitas profesional. Hubungi kami untuk konsultasi gratis dan penawaran yang disesuaikan dengan kebutuhan Anda.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama waktu pengembangan aplikasi di Software House?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Waktu pengembangan bervariasi tergantung kompleksitas proyek. GiLabs dikenal dengan kecepatan pengiriman tanpa mengorbankan kualitas. Untuk aplikasi sederhana bisa selesai dalam 2-4 minggu, sedangkan aplikasi kompleks membutuhkan waktu 2-6 bulan. Kami selalu berkomunikasi dengan klien untuk memberikan update progress secara berkala.",
        },
      },
    ],
  };
}

