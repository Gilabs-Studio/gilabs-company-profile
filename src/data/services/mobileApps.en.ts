import type { ServicePageData } from "./types";

export const mobileAppsEn: ServicePageData = {
  slug: "jasa-pembuatan-aplikasi-mobile",
  category: "software",
  eyebrow: "Android & iOS Mobile Apps",
  title: "Mobile Apps People Keep Using, Not Just Download and Delete",
  subtitle: "We build Android and iOS apps crafted around intuitive user experiences, not just bloated feature lists that confuse users.",
  heroIllustration: "/images/services/mobile-apps/hero-mobile-apps.png",
  metaTitle: "Android & iOS Mobile App Development Services | Gilabs",
  metaDescription: "Professional mobile app development for Android & iOS. High-performance cross-platform Flutter engineering, intuitive UX, and scalable architecture.",
  keywords: [
    "mobile app development services",
    "android ios app development",
    "flutter app developers",
    "custom mobile application",
    "app store publishing services",
    "enterprise mobile apps"
  ],
  primaryCtaText: "Discuss Your App Idea",
  secondaryCtaText: "View Published Apps",
  problemsTitle: "Why Do Many Mobile Apps Fail in Users' Hands?",
  problemsSubtitle: "Three primary reasons users abandon apps shortly after installation.",
  problems: [
    {
      pain: "Confusing UX",
      solution: "Users install, struggle with navigation, and uninstall within minutes."
    },
    {
      pain: "Sluggish Performance",
      solution: "Laggy interactions, frequent force closes, and tanking app store ratings."
    },
    {
      pain: "Zero Maintenance Strategy",
      solution: "New OS updates break functionality because the codebase is never maintained."
    }
  ],
  featuresTitle: "App Categories We Regularly Build",
  featuresSubtitle: "Engineered mobile solutions tailored to diverse operational and customer engagement models.",
  features: [
    {
      title: "E-Commerce & Marketplace Apps",
      description: "Interactive catalogs, smart carts, instant checkout, and automated payment gateways."
    },
    {
      title: "On-Demand Service Apps",
      description: "Real-time service booking, live GPS route tracking, and instant automated pricing."
    },
    {
      title: "Internal Enterprise Apps",
      description: "Geofenced attendance, operational approvals, field inspections, and sales dispatch."
    },
    {
      title: "Booking & Reservation Apps",
      description: "Ticket purchasing, schedule booking, real-time quota sync, and automated reminders."
    },
    {
      title: "Community & Social Apps",
      description: "Activity feeds, discussion threads, member profiles, direct messaging, and private groups."
    },
    {
      title: "IoT Connected Apps",
      description: "Hardware pairing via Bluetooth/Wi-Fi, live telemetry monitoring, and remote device control."
    }
  ],
  packagesTitle: "Investment Scaled to App Complexity",
  packagesSubtitle: "Transparent mobile engineering pricing with full source code ownership.",
  packages: [
    {
      name: "BASIC",
      price: "From $350",
      isPopular: false,
      description: "For apps with simple core feature sets",
      features: [
        "1 Platform (Android or iOS)",
        "Up to 5 Primary Screens",
        "Essential Responsive UI Design",
        "Local & Cloud Storage Setup",
        "1-Month Bug Fix Warranty"
      ]
    },
    {
      name: "STANDARD",
      price: "From $950",
      isPopular: true,
      description: "For apps with complete functional requirements",
      features: [
        "Android & iOS Simultaneously (Cross-Platform)",
        "Backend API & Database Integration",
        "Targeted Push Notifications",
        "App Store & Play Store Publishing Assistance",
        "3-Month Warranty & Technical Support"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact Us",
      isPopular: false,
      description: "For large-scale apps with complex architecture",
      features: [
        "Real-Time Engines (Chat, Live GPS Tracking)",
        "Payment Gateway & Multi-Vendor Logic",
        "High Concurrency Infrastructure for Millions of Users",
        "Security Hardening & Biometric Auth",
        "Dedicated Support & Maintenance SLA"
      ]
    }
  ],
  techStackTitle: "High-Performance Mobile Tech Stack",
  techStackSubtitle: "Combining native visual fidelity with modern cross-platform efficiency.",
  techStack: [
    { name: "Flutter (Dart)", category: "Cross-Platform", description: "Consistent 60fps rendering across iOS & Android from a unified codebase." },
    { name: "Kotlin & Swift", category: "Native Interop", description: "Direct hardware interop and optimized platform performance." },
    { name: "Firebase & Supabase", category: "Mobile Backend", description: "Real-time push notifications, secure authentication, and cloud storage." }
  ],
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Key questions regarding Android & iOS mobile app development with Gilabs.",
  faqs: [
    {
      question: "Can you build for Android and iOS simultaneously?",
      answer: "Yes, available starting from our Standard tier using a cross-platform Flutter approach, giving you two high-performance apps with optimal budget efficiency."
    },
    {
      question: "How long does it take to publish to the App Store?",
      answer: "Typically 1-2 weeks for Apple App Store review and 3-5 business days for Google Play Store. We handle and assist through the entire submission process."
    },
    {
      question: "Is UI/UX design included in the package?",
      answer: "Yes, included across all tiers with varying depth, from clean wireframing to high-fidelity clickable interactive prototypes."
    },
    {
      question: "What about maintenance after launch?",
      answer: "We offer monthly maintenance retainers covering new OS updates, server monitoring, security patching, and ongoing feature iterations."
    }
  ],
  ctaTitle: "Ready to Bring Your App Idea to Life?",
  ctaSubtitle: "From initial concept to live release on the App Store and Google Play Store. Free consultation, zero commitment.",
  ctaButton: "Start Free Discussion"
};
