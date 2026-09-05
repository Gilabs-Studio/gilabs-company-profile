import type { ServicePageData } from "./types";

export const erpCrmEn: ServicePageData = {
  slug: "custom-erp-crm-development",
  category: "enterprise",
  eyebrow: "Custom ERP & CRM System",
  title: "One Unified System for Operations, Sales, and Customer Data",
  subtitle: "Stop running your business across dozens of disconnected spreadsheets. We build bespoke ERP and CRM platforms tailored exactly to your real operational workflows.",
  heroIllustration: "/images/services/erp-crm/hero-erp-crm.png",
  metaTitle: "Custom ERP & CRM System Development | Gilabs",
  metaDescription: "Custom ERP and CRM development services. Seamlessly unify multi-warehouse inventory, purchasing, financial ledgering, sales pipelines, and customer tracking.",
  keywords: [
    "custom erp development",
    "custom crm development",
    "enterprise operations software",
    "b2b sales pipeline software",
    "multi warehouse inventory system",
    "bespoke erp crm indonesia"
  ],
  primaryCtaText: "Discuss Your Needs",
  secondaryCtaText: "View Built Systems",
  problemsTitle: "Signs Your Business Has Outgrown Spreadsheets",
  problemsSubtitle: "Three operational bottlenecks showing your company needs a centralized ERP and CRM platform.",
  problems: [
    {
      pain: "Data Scattered Everywhere",
      solution: "Inventory in Excel, sales discussions on WhatsApp, and financial ledgers completely disconnected."
    },
    {
      pain: "Customer Follow-ups Frequently Missed",
      solution: "No automated reminder system tracking who needs to be contacted, when, and with what urgency."
    },
    {
      pain: "Reporting Takes Days to Reconcile",
      solution: "Business owners and directors wait days just to get clear figures on monthly revenue and margins."
    }
  ],
  featuresTitle: "How We Architect Your ERP & CRM Navigation",
  featuresSubtitle: "To keep daily usage intuitive for every team member, we separate the system into two major pillars: Operations (ERP) and Customer Relationships (CRM).",
  features: [
    {
      title: "ERP Core: Operations & Resources",
      description: "Real-time inventory balances, PO purchasing, automated journals and P&L, HR & payroll, BOM manufacturing, and multi-depot sync."
    },
    {
      title: "CRM Core: Sales & Customers",
      description: "Visual sales pipeline from lead to closing, contact history, automated follow-up schedules, quotations/invoices, and team metrics."
    }
  ],
  packagesTitle: "Investment Scaled to Operational Scale",
  packagesSubtitle: "Transparent development investment with zero recurring per-user licensing fees. 100% full source code ownership.",
  packages: [
    {
      name: "BASIC",
      price: "From $350",
      isPopular: false,
      description: "For small businesses taking their first step toward centralized digital operations",
      features: [
        "1-2 Core Modules (e.g. Inventory or Sales CRM)",
        "Single User Role",
        "Essential Reports & Data Export",
        "Database Architecture & Cloud Setup",
        "1-Month Bug Fix Warranty"
      ]
    },
    {
      name: "STANDARD",
      price: "From $950",
      isPopular: true,
      description: "For businesses with multiple divisions requiring seamless cross-departmental sync",
      features: [
        "3-5 Interconnected Cross-Department Modules",
        "Multi-User & Role Permissions",
        "Real-Time Executive Reporting Dashboard",
        "Automated Notifications (WhatsApp/Email)",
        "3-Month Warranty & Dedicated Support"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact Us",
      isPopular: false,
      description: "For large enterprise platforms with complex operational requirements",
      features: [
        "Full ERP + CRM Suite with End-to-End Automation",
        "Multi-Branch & Multi-Warehouse Live Sync",
        "Third-Party Integrations (Accounting, POS, etc.)",
        "Audit Logging & Security Hardening",
        "Dedicated Support & Enterprise SLA"
      ]
    }
  ],
  techStackTitle: "Resilient Enterprise Architecture",
  techStackSubtitle: "Engineered with industry-standard technologies for high concurrency and strict data integrity.",
  techStack: [
    { name: "PostgreSQL ACID", category: "Data Tier", description: "High-integrity relational database with zero risk of balance inconsistency." },
    { name: "Golang & Node.js", category: "Backend Engine", description: "High-throughput APIs capable of handling thousands of concurrent ledger transactions." },
    { name: "Next.js & React", category: "Frontend Web", description: "Fast, interactive dashboard interface designed for operational ease of use." }
  ],
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Key inquiries regarding bespoke ERP and CRM development with Gilabs.",
  faqs: [
    {
      question: "Do ERP and CRM have to be built at the same time?",
      answer: "No, you can start with a single core module first (e.g. Inventory or CRM Pipeline) and expand incrementally as your team adapts."
    },
    {
      question: "What if our operational team is not used to digital systems?",
      answer: "We provide comprehensive on-site or remote training and clear step-by-step user documentation when the system goes live."
    },
    {
      question: "How secure is our company operational data?",
      answer: "Highly secure, featuring automated regular database backups, SSL encryption, and strict role-based access control (RBAC)."
    },
    {
      question: "Can this integrate with accounting software we currently use?",
      answer: "Yes, as long as your existing software provides an accessible API or data export/import mechanism."
    }
  ],
  ctaTitle: "Stop Chasing Fragmented Data Across Disjointed Files",
  ctaSubtitle: "Start from a single module and let us build a system that scales alongside your business. Free initial consultation, zero commitment.",
  ctaButton: "Start Free Discussion"
};
