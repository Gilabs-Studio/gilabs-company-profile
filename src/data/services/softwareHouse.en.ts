import type { ServicePageData } from "./types";

export const softwareHouseEn: ServicePageData = {
  slug: "software-house-indonesia",
  category: "software",
  eyebrow: "Software House Indonesia",
  title: "Technology Partner for Businesses Serious About Growth",
  subtitle: "From concept to daily production, we engineer software that your team actually uses—not just shiny demo slides.",
  heroIllustration: "/images/services/software-house/hero-dashboard-dark.jpg",
  metaTitle: "Top Software House Indonesia | Gilabs Engineering Partner",
  metaDescription: "Trusted Indonesia software house for custom software, internal enterprise tools, web applications, and mobile apps. 100% source code ownership with zero per-user license fees.",
  keywords: [
    "software house indonesia",
    "software development company indonesia",
    "custom software engineering agency",
    "enterprise software development indonesia",
    "trusted software vendor jakarta semarang"
  ],
  primaryCtaText: "Discuss Your Needs",
  secondaryCtaText: "View Case Studies",
  problemsTitle: "Off-the-Shelf Software Doesn't Always Fit",
  problemsSubtitle: "Three critical limitations of generic off-the-shelf software that hinder business expansion.",
  problems: [
    {
      pain: "Rigid Unique Processes",
      solution: "Generic off-the-shelf software forces you to adapt to their workflow, not yours."
    },
    {
      pain: "Escalating User License Fees",
      solution: "Paying per user monthly compounds uncontrollably as your organization scales."
    },
    {
      pain: "Data Isn't Fully Yours",
      solution: "Severe vendor lock-in, migration hurdles, and commercial security vulnerabilities."
    }
  ],
  featuresTitle: "What Can We Build for You?",
  featuresSubtitle: "End-to-end engineering solutions aligned precisely with your organizational workflows.",
  features: [
    {
      title: "Custom Web Application",
      description: "Internal operations systems, client portals, and multi-tenant SaaS platforms tailored to your business."
    },
    {
      title: "Mobile Apps (iOS & Android)",
      description: "Field team operational apps, consumer mobile products, and seamless real-time syncing."
    },
    {
      title: "Lean ERP & CRM",
      description: "Built strictly around your business logic, eliminating bloated unused features that confuse staff."
    },
    {
      title: "System & API Integration",
      description: "Bridge legacy software with modern microservices, payment gateways, and third-party APIs."
    },
    {
      title: "Maintenance & Code Audit",
      description: "Rescue or refactor stagnant projects with clean architectural patterns and structured code reviews."
    }
  ],
  packagesTitle: "Investment Scaled to Your Needs",
  packagesSubtitle: "Transparent development pricing with zero recurring per-user fees. 100% full source code ownership.",
  packages: [
    {
      name: "BASIC",
      price: "From $350",
      isPopular: false,
      description: "Best for: MVP, simple internal systems, automating one specific operational workflow",
      features: [
        "1 Core Module / Primary Workflow",
        "Responsive Web Architecture",
        "Relational Database Setup",
        "Basic Authentication & RBAC",
        "1-Month Bug Fix Warranty"
      ]
    },
    {
      name: "STANDARD",
      price: "From $950",
      isPopular: true,
      description: "Best for: Operational business systems, custom SME-scale CRM / ERP",
      features: [
        "Multi-module & Multi-role User Management",
        "Web App + Responsive Analytics Dashboard",
        "API Integration & Notifications (WA/Email)",
        "Data Export/Import & PDF Reporting",
        "3-Month Warranty & Dedicated Support"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact Us",
      isPopular: false,
      description: "Best for: Enterprise platforms, complex microservices, high-traffic infrastructure",
      features: [
        "Scalable Microservices Architecture",
        "Multi-platform (Web + Mobile Apps)",
        "Legacy Systems & Third-party Integrations",
        "Security Hardening & Full Audit Logs",
        "Dedicated Engineering Support & SLA"
      ]
    }
  ],
  techStackTitle: "Modern & Scalable Tech Stack",
  techStackSubtitle: "Built on battle-tested industry standards for performance, security, and low maintenance overhead.",
  techStack: [
    { name: "Golang & Node.js", category: "Backend Engine", description: "High-throughput concurrency and resilient APIs." },
    { name: "React, Next.js, Astro", category: "Frontend Web", description: "Lightning-fast rendering and responsive interfaces." },
    { name: "Flutter & React Native", category: "Mobile Apps", description: "Native-performing iOS and Android applications from a single codebase." },
    { name: "PostgreSQL & Redis", category: "Data Tier", description: "ACID-compliant relational database and ultra-fast caching." }
  ],
  faqTitle: "Software Development FAQs",
  faqSubtitle: "Key answers regarding our software engineering engagement process.",
  faqs: [
    {
      question: "How long does a typical software project take?",
      answer: "It depends on complexity. Lean MVP projects typically take 3-6 weeks. Comprehensive custom ERP or CRM systems take 2-4 months. We always agree on a realistic, committed timeline upfront."
    },
    {
      question: "Will our company own 100% of the source code?",
      answer: "Yes, absolutely. You retain complete intellectual property and repository ownership upon project completion, including full documentation and setup manuals."
    },
    {
      question: "How do you handle scope changes or additional feature requests midway?",
      answer: "We employ an agile Change Request process. Any new requirement is scoped, estimated, and priced transparently without disrupting active milestone deadlines."
    },
    {
      question: "What technical support is provided after launch?",
      answer: "Every project includes a dedicated bug-fix warranty (1-3 months depending on plan). Thereafter, we offer flexible monthly retainer plans for continuous maintenance, monitoring, and feature iteration."
    }
  ],
  ctaTitle: "Tell Us Your Business Challenge, We'll Architect the Solution",
  ctaSubtitle: "Free initial technical consultation. No lock-in, zero confusing tech jargon.",
  ctaButton: "Schedule Free Consultation"
};
