import type { ServicePageData } from "./types";

export const customSoftwareEn: ServicePageData = {
  slug: "custom-software-development",
  category: "software",
  eyebrow: "Custom Software & Web App",
  title: "Systems Built Around How You Work, Not the Other Way Around",
  subtitle: "When off-the-shelf software is too rigid for your unique business processes, it is time to build one that fits perfectly.",
  heroIllustration: "/images/services/custom-software/hero-custom-software.png",
  metaTitle: "Custom Software & Web App Development Services | Gilabs",
  metaDescription: "Custom software and web application development. Tailored operational systems, ERP/CRM, approval workflows, and client portals built for your business.",
  keywords: [
    "custom software development",
    "bespoke web app development",
    "custom business software",
    "workflow automation software",
    "client portal development",
    "business intelligence dashboard"
  ],
  primaryCtaText: "Discuss Your Needs",
  secondaryCtaText: "View Case Studies",
  problemsTitle: "When Is It Time for a Custom System?",
  problemsSubtitle: "Three clear indicators that generic software and spreadsheets are holding your business back.",
  problems: [
    {
      pain: "Excel Is No Longer Enough",
      solution: "Data scattered across files, difficult to monitor, and prone to costly human errors."
    },
    {
      pain: "Generic Software Is Too Rigid",
      solution: "Features do not match your workflow; you pay high fees for tools your team never touches."
    },
    {
      pain: "Need Seamless System Integration",
      solution: "Disjointed apps operating in silos, causing duplicate data entry and manual overhead."
    }
  ],
  featuresTitle: "What Can We Build for You?",
  featuresSubtitle: "Tailored software solutions engineered to resolve operational bottlenecks and drive efficiency.",
  features: [
    {
      title: "HRIS, Inventory & Asset Management",
      description: "Manage employees, inventory stock, and company assets from a unified real-time dashboard."
    },
    {
      title: "Marketplace & Multi-Vendor Platforms",
      description: "Commerce platforms equipped with commission logic, split payments, and multi-store management."
    },
    {
      title: "Analytics & Reporting Dashboards",
      description: "Consolidate multiple data sources and visualize core business KPIs in real-time."
    },
    {
      title: "Approval & Workflow Systems",
      description: "Leave requests, reimbursements, or purchase orders with multi-level approval hierarchies."
    },
    {
      title: "Client Portals & Member Areas",
      description: "Dedicated portals for clients or members to access services and track progress securely."
    },
    {
      title: "API Integration & Automation",
      description: "Connect legacy databases with modern apps, payment gateways, or third-party logistics."
    }
  ],
  packagesTitle: "Investment Scaled to Your Needs",
  packagesSubtitle: "Transparent development pricing with zero recurring per-user licensing fees. 100% full source code ownership.",
  packages: [
    {
      name: "BASIC",
      price: "From $350",
      isPopular: false,
      description: "Best for: MVPs, simple internal tools, or automating a single workflow.",
      features: [
        "1 Core Module / Workflow",
        "Web-Based Responsive Design",
        "Database Architecture Setup",
        "Basic Auth & Role Access",
        "1-Month Bug Warranty"
      ]
    },
    {
      name: "STANDARD",
      price: "From $950",
      isPopular: true,
      description: "Best for: Business operations systems, bespoke SMB CRM/ERP platforms.",
      features: [
        "Multi-Module & Multi-Role Users",
        "Web App + Responsive Dashboard",
        "API & Notifications (WA/Email)",
        "Data Export/Import & Reporting",
        "3-Month Warranty & Support"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact Us",
      isPopular: false,
      description: "Best for: Large-scale enterprise platforms, complex architectures, high-load requirements.",
      features: [
        "Microservices / Scalable Architecture",
        "Multi-Platform (Web + Mobile App)",
        "Legacy & Third-Party System Sync",
        "Security Hardening & Audit Logs",
        "Dedicated Support & SLA"
      ]
    }
  ],
  techStackTitle: "Modern & Scalable Tech Stack",
  techStackSubtitle: "Engineered with modern architecture for speed, resilience, and effortless maintainability.",
  techStack: [
    { name: "Next.js / React / Astro", category: "Frontend Web", description: "Interactive user interfaces and instant render performance." },
    { name: "Node.js / Golang", category: "Backend Logic", description: "High-throughput APIs and reliable business logic execution." },
    { name: "PostgreSQL & Redis", category: "Data Tier", description: "ACID-compliant relational database and ultra-fast caching." }
  ],
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Key questions about custom software development with Gilabs.",
  faqs: [
    {
      question: "What if we want to add or change features during development?",
      answer: "We use an agile, flexible approach. New features are scoped and priced transparently without disrupting ongoing sprint deliverables."
    },
    {
      question: "Can the system integrate with software we currently use?",
      answer: "Yes, as long as your existing software provides an API or accessible database. We regularly integrate WhatsApp, payment gateways, accounting systems, and POS."
    },
    {
      question: "Who owns the source code once the project is finished?",
      answer: "100% yours. Upon project completion, all source code, database schemas, and assets are fully transferred to you with zero recurring licensing fees."
    },
    {
      question: "Is maintenance provided after system launch?",
      answer: "All projects include a post-deployment bug warranty. We also offer monthly retainer packages for dedicated technical standby, updates, and continuous feature expansion."
    }
  ],
  ctaTitle: "Have a Business Process Ready for Automation?",
  ctaSubtitle: "Walk us through your workflow and we will help map the right solution. Free initial consultation, zero confusing jargon.",
  ctaButton: "Start Free Discussion"
};
