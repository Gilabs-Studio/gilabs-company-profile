import type { ServicePageData } from "./types";

export const erpCrmEn: ServicePageData = {
  slug: "jasa-pembuatan-erp-crm",
  category: "enterprise",
  eyebrow: "Custom ERP & CRM Software Indonesia",
  title: "Custom ERP & CRM Systems Unifying Operations, Warehouses, and Sales",
  subtitle: "Automate manufacturing supply chains, multi-warehouse stock management, and field sales pipelines in one unified platform tailored 100% to your operational SOPs.",
  heroIllustration: "/illustrations/erp-crm-sketch.png",
  metaTitle: "Custom ERP & CRM Software Development Indonesia | Gilabs",
  metaDescription: "Custom ERP and CRM development services in Indonesia. Zero recurring license fees, manufacturing and distribution modules, and WhatsApp API integration.",
  keywords: [
    "custom erp development indonesia",
    "custom crm software development",
    "manufacturing erp vendor indonesia",
    "distribution supply chain software",
    "whatsapp integrated crm system"
  ],
  primaryCtaText: "Discuss ERP / CRM",
  secondaryCtaText: "Explore System Modules",
  problemsTitle: "Why Traditional ERP Packages Fail",
  problemsSubtitle: "Bloated off-the-shelf systems cost hundreds of thousands of dollars while failing to fit local workflows.",
  problems: [
    {
      pain: "Expensive Annual Per-User Licenses",
      solution: "Gilabs builds custom ERP platforms as a perpetual corporate asset with 0 monthly per-seat licensing fees."
    },
    {
      pain: "Complicated Interfaces Staff Avoid",
      solution: "We build intuitive, clean web interfaces enabling warehouse workers and accountants to adapt quickly."
    }
  ],
  featuresTitle: "Core ERP & CRM Modules",
  featuresSubtitle: "Fully customizable across your departments and logistics workflows.",
  features: [
    {
      title: "Inventory & Purchasing Engine",
      description: "Purchase Requisitions, automated PO workflows, batch tracking, and real-time multi-depot stock registers."
    },
    {
      title: "Production & Bill of Materials (BOM)",
      description: "Precise COGS calculation, shop floor work order tracking, and raw material waste minimization."
    },
    {
      title: "Field Sales & B2B CRM",
      description: "GPS-enabled customer visit logs, quotation generators, and WhatsApp conversation history."
    },
    {
      title: "Automated Financial Statements",
      description: "Accounts Receivable, Accounts Payable, automated ledger entries, and instant balance sheets."
    }
  ],
  packagesTitle: "Implementation Roadmap",
  packagesSubtitle: "Phased rollout models ensuring zero operational disruptions.",
  packages: [
    {
      name: "CRM Sales & Pipeline",
      price: "From $1,700",
      description: "For B2B companies accelerating revenue, sales agent visits, and follow-ups.",
      features: [
        "Lead & Deal Pipeline Management",
        "GPS Sales Check-ins & Routes",
        "WhatsApp API Integration",
        "Quotations & Dispatch Tracking",
        "4-6 Weeks Delivery"
      ]
    },
    {
      name: "Full Enterprise ERP Core",
      price: "From $4,000",
      isPopular: true,
      description: "Comprehensive platform for manufacturing, distribution, and multi-depot inventory.",
      features: [
        "Inventory & Multi-Warehouse Sync",
        "Purchasing & Approval Workflows",
        "Production & Bill of Materials (BOM)",
        "Invoicing & Financial Accounting",
        "Full Audit Logs & Role Permissions",
        "Full Source Code & Staff Training",
        "6-12 Month SLA Support",
        "8-16 Weeks Delivery"
      ]
    }
  ],
  techStackTitle: "Enterprise Engineering Foundation",
  techStackSubtitle: "Bank-grade data integrity and immutable audit logs.",
  techStack: [
    { name: "PostgreSQL ACID", category: "Database", description: "Guaranteed transactional consistency." },
    { name: "Golang Microservices", category: "Backend", description: "Ultra-fast execution across millions of records." }
  ],
  faqTitle: "ERP & CRM FAQs",
  faqSubtitle: "Common questions on custom ERP implementations.",
  faqs: [
    {
      question: "Can we migrate data from legacy spreadsheets or older systems?",
      answer: "Yes, our team provides data cleansing, schema mapping, and automated migration services for your opening balances and master data."
    }
  ],
  ctaTitle: "Transform Your Enterprise Operations",
  ctaSubtitle: "Schedule an architecture scoping call with our senior tech leads.",
  ctaButton: "Talk to Us on WhatsApp"
};
