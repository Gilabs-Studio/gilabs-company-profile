import type { ServicePageData } from "./types";

export const softwareHouseEn: ServicePageData = {
  slug: "software-development-company",
  category: "software",
  eyebrow: "Software House Indonesia",
  title: "Custom Software Development Partner for Business",
  subtitle: "We build reliable, mission-focused software tailored to streamline your team's operational workflows.",
  heroIllustration: "/images/services/software-house/hero-dashboard-dark.png",
  heroImageAlt: "Enterprise System and Operations Dashboard Showcase - Gilabs Software House",
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
  secondaryCtaText: "Explore Services",
  problemsEyebrow: "Common Industry Bottlenecks",
  problemsTitle: "Limitations of Off-the-Shelf Software",
  problemsSubtitle: "Three common bottlenecks of off-the-shelf software that hinder business operations.",
  problems: [
    {
      pain: "01. Rigid Business Workflows",
      solution: "Generic off-the-shelf software forces your staff into pre-set workflows instead of adapting to your operational procedures.",
      metric: "Staff spend extra effort adapting to template constraints"
    },
    {
      pain: "02. Escalating Per-User Licensing",
      solution: "Monthly per-seat fees accumulate uncontrollably as your team grows, without ever building equity in your software asset.",
      metric: "Recurring license overhead compounds year-over-year"
    },
    {
      pain: "03. Limited Data Control",
      solution: "Data is locked within third-party vendor platforms, creating major migration barriers as systems evolve.",
      metric: "Risk of vendor lock-in and restricted database migration"
    }
  ],
  featuresEyebrow: "Our Services",
  featuresTitle: "What Can We Build for You?",
  featuresSubtitle: "Software engineering tailored to your organization's operational workflows.",
  features: [
    {
      number: "01",
      icon: "laptop",
      title: "Custom Web Application",
      subtitle: "Internal Systems, Client Portals, SaaS Platforms",
      description: "High-performance web applications tailored to your specific business workflows, client portals, and scalable multi-tenant SaaS platforms.",
      href: "/en/services/custom-software-development",
      ctaText: "Explore Service"
    },
    {
      number: "02",
      icon: "smartphone",
      title: "Mobile Apps (iOS & Android)",
      subtitle: "Field Operations & Customer Mobile Apps",
      description: "Cross-platform mobile applications engineered for field staff operations, task dispatching, and customer engagement with real-time sync.",
      href: "/en/services/mobile-app-development",
      ctaText: "Explore Service"
    },
    {
      number: "03",
      icon: "database",
      title: "Lean ERP & Custom CRM",
      subtitle: "Fits Your Workflow, Zero Unnecessary Bloat",
      description: "Centralized operations and customer management tracking built strictly around your business logic, eliminating unused complex modules.",
      href: "/en/services/custom-erp-crm-systems",
      ctaText: "Explore Service"
    },
    {
      number: "04",
      icon: "workflow",
      title: "System & API Integration",
      subtitle: "Connect Legacy Tools to Modern Stacks",
      description: "Seamless connections between legacy internal software, payment gateways, messaging bots, and modern cloud microservices.",
      href: "/en/services/custom-software-development",
      ctaText: "Explore Service"
    },
    {
      number: "05",
      icon: "shield-check",
      title: "Maintenance & Code Audit",
      subtitle: "System Optimization & Codebase Refactoring",
      description: "Architectural reviews, bug refactoring, security hardening, and database query optimizations for production software.",
      href: "whatsapp:service-audit",
      ctaText: "Explore Service"
    }
  ],
  solutionsEyebrow: "Why Choose Us",
  solutionsTitle: "Software Engineered for Business Needs",
  solutionsSubtitle: "Effective software solves real operational friction and delivers tangible impact to team efficiency.",
  solutions: [
    {
      number: "01",
      badge: "Requirements First",
      title: "Understanding Business Process First",
      description: "We thoroughly analyze your actual operational workflows, identifying genuine bottlenecks before architecting technical solutions.",
      points: [
        "Detailed mapping of operational workflows and human-error risks",
        "Streamlining redundant manual steps before writing production code",
        "Intuitive interfaces designed for fast team adoption without steep learning curves"
      ]
    },
    {
      number: "02",
      badge: "Industry Standards",
      title: "Clean Code and Scalable Architecture",
      description: "Engineered to clean industry standards, comprehensively documented, and ready for your in-house engineers to maintain anytime.",
      points: [
        "Modular and maintainable architectural design patterns",
        "Comprehensive API documentation and standardized database schemas",
        "100% intellectual property ownership and Git repository transfer"
      ]
    },
    {
      number: "03",
      badge: "Full Transparency",
      title: "Full Transparency Throughout Development",
      description: "Regular sprint updates, working feature demos, and direct access to project tracking boards with zero surprises.",
      points: [
        "Structured development milestones with testable staging module demos",
        "Direct real-time transparency into project progress and changelogs",
        "Clear scope of work with committed deliverable milestones"
      ]
    }
  ],
  processEyebrow: "Development Methodology",
  processTitle: "From Discussion to Production-Ready Software",
  processSubtitle: "A structured, transparent engineering lifecycle from discovery to active production deployment.",
  processSteps: [
    {
      step: "01",
      stage: "Phase 1",
      title: "Discovery & Business Analysis",
      description: "Map operational workflows, identify technical requirements, and define a clear, realistic project scope."
    },
    {
      step: "02",
      stage: "Phase 2",
      title: "System Design & Prototyping",
      description: "Architect database schemas, API contracts, and interactive UI prototypes before code implementation begins."
    },
    {
      step: "03",
      stage: "Phase 3",
      title: "Agile Sprint Development",
      description: "Structured development sprints with clear milestones. Review and test working modules on staging environments."
    },
    {
      step: "04",
      stage: "Phase 4",
      title: "Testing & Deployment",
      description: "Rigorous functional, stress, and security testing before production release to your dedicated servers."
    },
    {
      step: "05",
      stage: "Phase 5",
      title: "Handover & Warranty",
      description: "Team onboarding training, comprehensive documentation, full source code handover, and bug-fix warranty."
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
  faqEyebrow: "Common Inquiries",
  faqTitle: "Software Development FAQs",
  faqSubtitle: "Key answers regarding our software engineering engagement and technical process.",
  faqs: [
    {
      question: "How long does a software project typically take?",
      answer: "It depends on scope complexity. Lean MVP projects typically take 3-6 weeks. Comprehensive custom ERP or CRM systems take 2-4 months. We commit to a realistic timeline upfront before development begins."
    },
    {
      question: "Will our company own 100% of the source code?",
      answer: "Yes, 100%. All source code, technical documentation, and repository access are transferred to your company upon project completion with zero recurring license fees."
    },
    {
      question: "How are scope changes or additional feature requests handled midway?",
      answer: "We use a structured Change Request workflow. New feature requests are evaluated for scope and cost transparently without disrupting active milestone deadlines."
    },
    {
      question: "What technical support is provided after launch?",
      answer: "Every project includes a dedicated bug-fix warranty (1-3 months). Beyond warranty, we offer retainer maintenance plans for continuous server monitoring, security updates, and feature enhancements."
    }
  ],
  ctaTitle: "Consult Your Business Software Needs",
  ctaSubtitle: "Discuss your operational challenges with our team to find the right technical solution.",
  ctaButton: "Schedule Free Consultation"
};
