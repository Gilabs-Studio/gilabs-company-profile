import type { ServicePageData } from "./types";

export const mobileAppsEn: ServicePageData = {
  slug: "mobile-app-development",
  category: "software",
  eyebrow: "Android & iOS Mobile Apps",
  title: "Intuitive, High-Performance Mobile Apps",
  subtitle: "We engineer responsive Android and iOS applications designed for usability, speed, and business growth.",
  heroIllustration: "/images/services/mobile-apps/hero-mobile-apps.png",
  heroImageAlt: "Android and iOS Mobile App Showcase - Gilabs",
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
  primaryCtaText: "Discuss Your App",
  secondaryCtaText: "Explore Solutions",
  problemsEyebrow: "Common Challenges",
  problemsTitle: "Why Mobile Apps Lose Users",
  problemsSubtitle: "Three core issues that cause users to abandon or uninstall applications shortly after downloading.",
  problems: [
    {
      pain: "01. Confusing UX",
      solution: "Cumbersome navigation leads users to frustration and quick uninstallation.",
      metric: "High drop-off on first launch"
    },
    {
      pain: "02. Slow Performance",
      solution: "Laggy interactions and unexpected crashes destroy user trust and harm store ratings.",
      metric: "Poor ratings on app stores"
    },
    {
      pain: "03. Lack of Maintenance",
      solution: "Without routine updates, applications frequently break following major OS releases.",
      metric: "Breakages during OS updates"
    }
  ],
  solutionsEyebrow: "Our Approach",
  solutionsTitle: "Built for Everyday Use",
  solutionsSubtitle: "We combine intuitive design with resilient engineering so your app remains a staple on users' devices.",
  solutions: [
    {
      number: "01",
      title: "UX as Top Priority",
      subtitle: "User flows designed as simply as possible from day one, ensuring zero friction.",
      image: "/images/services/mobile-apps/solution-ux-priority.png",
      alt: "Intuitive and Seamless Mobile UX Design",
      points: [
        "Frictionless onboarding that guides users directly to core value",
        "Thumb-friendly navigation optimized for single-handed use",
        "Clean visual hierarchy with responsive haptic & motion feedback"
      ]
    },
    {
      number: "02",
      title: "Native & Cross-Platform",
      subtitle: "Choose what fits your goals: optimal 60fps performance on both Android and iOS.",
      image: "/images/services/mobile-apps/solution-native-crossplatform.png",
      alt: "Cross-Platform Harmony with Flutter & Native",
      points: [
        "Single codebase with Flutter for up to 50% budget & time savings",
        "Hardware access: GPS geofencing, camera scanner, and biometric ID",
        "Guaranteed compliance with Apple and Google Store guidelines"
      ]
    },
    {
      number: "03",
      title: "Ready to Scale",
      subtitle: "Backend architecture engineered from the start to accommodate rapid user growth.",
      image: "/images/services/mobile-apps/solution-scale-growth.png",
      alt: "Scalable Cloud Architecture for Mobile Apps",
      points: [
        "Real-time sync with offline caching for erratic network environments",
        "High-concurrency cloud API backend (Node.js / Golang / Supabase)",
        "Integrated push notification pipelines via Firebase Cloud Messaging"
      ]
    }
  ],
  featuresEyebrow: "App Categories",
  featuresTitle: "App Categories We Build",
  featuresSubtitle: "Mobile app architectures tailored to diverse business and operational requirements.",
  features: [
    {
      number: "01",
      title: "E-Commerce & Marketplace Apps",
      description: "Interactive product catalogs, intuitive carts, automated shipping rates, and seamless payment gateway checkout."
    },
    {
      number: "02",
      title: "On-Demand Service Apps",
      description: "Instant booking, driver dispatch, real-time GPS tracking, and automated fare calculation."
    },
    {
      number: "03",
      title: "Internal Enterprise Apps",
      description: "Geofenced attendance, multi-level approvals, field inspections, and sales force monitoring."
    },
    {
      number: "04",
      title: "Booking & Reservation Apps",
      description: "Ticket booking, appointment scheduling, real-time quota sync, and automated push reminders."
    },
    {
      number: "05",
      title: "Community & Social Apps",
      description: "Activity feeds, discussion boards, user profiles, real-time direct messaging, and member channels."
    },
    {
      number: "06",
      title: "IoT & Connected Device Apps",
      description: "Hardware pairing via Bluetooth/Wi-Fi, real-time telemetry monitoring, and remote device controls."
    }
  ],
  processEyebrow: "Workflow",
  processTitle: "Mobile Development Process",
  processSubtitle: "A structured process from initial requirements to launch on the Google Play Store and Apple App Store.",
  processSteps: [
    {
      step: "01",
      stage: "Phase 1",
      title: "Research & Planning",
      description: "We analyze user requirements, business workflows, and map out clear user flows."
    },
    {
      step: "02",
      stage: "Phase 2",
      title: "UI/UX Design",
      description: "Interface designs are crafted and validated through clickable prototypes before coding begins."
    },
    {
      step: "03",
      stage: "Phase 3",
      title: "Sprint Development",
      description: "Built in disciplined sprints with regular functional testing on actual Android and iOS devices."
    },
    {
      step: "04",
      stage: "Phase 4",
      title: "Store Submission & Launch",
      description: "Applications are submitted and guided through review guidelines until approved on both stores."
    }
  ],
  techStackTitle: "High-Performance Mobile Tech Stack",
  techStackSubtitle: "Combining native visual fidelity with modern cross-platform efficiency.",
  techStack: [
    { name: "Flutter (Dart)", category: "Cross-Platform", description: "Consistent 60fps rendering across iOS & Android from a unified codebase." },
    { name: "Kotlin & Swift", category: "Native Interop", description: "Direct hardware interop and optimized platform performance." },
    { name: "Firebase & Supabase", category: "Mobile Backend", description: "Real-time push notifications, secure authentication, and cloud storage." }
  ],
  faqEyebrow: "FAQ",
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Key insights into our Android & iOS app development process at Gilabs.",
  faqs: [
    {
      question: "Can you build for both Android and iOS simultaneously?",
      answer: "Yes. We utilize cross-platform development with Flutter, delivering high-performance apps for both platforms from a unified codebase."
    },
    {
      question: "How long does the app store publishing process take?",
      answer: "Google Play reviews generally take 3-5 business days, while the Apple App Store takes 1-2 weeks. We guide you through the entire submission process until live."
    },
    {
      question: "Is UI/UX design included?",
      answer: "Yes, every project includes thorough UI/UX design and interactive prototyping before development begins."
    },
    {
      question: "What maintenance is provided after launch?",
      answer: "We offer warranty support as well as monthly maintenance options for OS compatibility updates, server monitoring, and bug fixes."
    }
  ],
  ctaTitle: "Ready to Build Your Mobile App?",
  ctaSubtitle: "Discuss your app idea and technical requirements with our team. Free consultation, zero commitment.",
  ctaButton: "Start Free Consultation"
};
