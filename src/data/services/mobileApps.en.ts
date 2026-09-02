import type { ServicePageData } from "./types";

export const mobileAppsEn: ServicePageData = {
  slug: "jasa-pembuatan-aplikasi-mobile",
  category: "software",
  eyebrow: "Android & iOS Mobile App Development",
  title: "Modern Mobile Applications Engineered with High Performance",
  subtitle: "We build intuitive, fluid, and scalable iOS and Android mobile applications using Flutter and React Native for customer experiences and enterprise field operations.",
  heroIllustration: "/illustrations/mobile-app-sketch.png",
  metaTitle: "Mobile App Development Services Indonesia | Gilabs",
  metaDescription: "Custom iOS and Android mobile app development using Flutter. Enterprise field sales apps, mobile commerce, and customer loyalty solutions with full source code.",
  keywords: [
    "mobile app development indonesia",
    "flutter app development agency",
    "ios android mobile development",
    "enterprise mobile application development",
    "custom mobile app development company"
  ],
  primaryCtaText: "Discuss Mobile App",
  secondaryCtaText: "Explore Features",
  problemsTitle: "Common Pitfalls in Mobile Development",
  problemsSubtitle: "Slow, crashing, or battery-draining apps get uninstalled immediately.",
  problems: [
    {
      pain: "Double Budget for iOS & Android",
      solution: "We build with Flutter cross-platform architecture, cutting cost and development time by half while maintaining native 60fps performance."
    },
    {
      pain: "App Store Rejections",
      solution: "We handle compliance, store guidelines, and the complete submission process for Google Play and Apple App Store."
    }
  ],
  featuresTitle: "Core Mobile App Features",
  featuresSubtitle: "Engineered for high engagement and field reliability.",
  features: [
    {
      title: "Offline-First Data Sync",
      description: "Allows offline field data logging that auto-syncs securely when connectivity is restored."
    },
    {
      title: "Real-time Push Notifications",
      description: "Deliver immediate order updates, task dispatches, and marketing campaigns to user lock screens."
    },
    {
      title: "GPS Geofencing & Biometrics",
      description: "Accurate field check-ins, route tracking, and secure biometric authentication (Face ID / Touch ID)."
    }
  ],
  packagesTitle: "Mobile Development Investment",
  packagesSubtitle: "Structured milestones from minimal viable products to complex enterprise apps.",
  packages: [
    {
      name: "Operational Field App",
      price: "From $1,400",
      description: "For internal field operations (sales tracking, inspections, driver logistics).",
      features: [
        "Flutter iOS & Android Codebase",
        "REST API & Database Backend",
        "GPS Geofencing & Camera Barcode",
        "Firebase Realtime Notifications",
        "Web Admin Monitoring Panel",
        "3-Month Bug Warranty",
        "4-6 Weeks Delivery"
      ]
    },
    {
      name: "Consumer & E-Commerce App",
      price: "From $3,000",
      isPopular: true,
      description: "For public customer apps with payments, user loyalty, and messaging.",
      features: [
        "Custom UI/UX & Micro-Animations",
        "Payment Gateway & Digital Wallets",
        "Social / OTP Authentication",
        "Play Store & App Store Publishing",
        "Real-Time Analytics Dashboard",
        "Full Git Handover & API Docs",
        "6-Month SLA Support",
        "8-12 Weeks Delivery"
      ]
    }
  ],
  techStackTitle: "Mobile Stack",
  techStackSubtitle: "Ensuring 60fps smoothness and rapid cross-platform updates.",
  techStack: [
    { name: "Flutter (Dart)", category: "Mobile Framework", description: "Bespoke compilation to native ARM machine code." },
    { name: "Firebase & Supabase", category: "Cloud Backend", description: "Scalable realtime backend and notification services." }
  ],
  faqTitle: "Mobile App FAQs",
  faqSubtitle: "Frequently asked questions regarding mobile app development.",
  faqs: [
    {
      question: "Do you assist with publishing on Google Play and Apple App Store?",
      answer: "Yes, we handle all store certificates, privacy policy compliance, and the app review process until approval."
    }
  ],
  ctaTitle: "Ready to Build Your Mobile App?",
  ctaSubtitle: "Talk to our Mobile Architects on WhatsApp for a free scoping session.",
  ctaButton: "Contact on WhatsApp"
};
