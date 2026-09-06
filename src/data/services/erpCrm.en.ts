import type { ServicePageData } from "./types";

export const erpCrmEn: ServicePageData = {
  slug: "custom-erp-crm-development",
  category: "enterprise",
  eyebrow: "Custom ERP & CRM System",
  title: "Unified System for Operations & Sales",
  subtitle: "Stop running your business across dozens of disconnected spreadsheets. We build bespoke ERP and CRM platforms tailored exactly to your real operational workflows.",
  heroIllustration: "/images/services/erp-crm/hero-erp-crm.png",
  heroImageAlt: "Enterprise ERP & CRM Operations Dashboard Showcase - Gilabs",
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
  secondaryCtaText: "Explore System Solutions",
  problemsEyebrow: "Operational Warning Signs",
  problemsTitle: "Signs Your Business Has Outgrown Spreadsheets",
  problemsSubtitle: "Three operational bottlenecks showing your company needs a centralized ERP and CRM platform.",
  problems: [
    {
      pain: "01. Disjointed Data",
      solution: "Inventory in Excel, sales discussions on WhatsApp, and financial ledgers completely disconnected.",
      metric: "Data silos & painful manual reconciliations"
    },
    {
      pain: "02. High-Value Leads Forgotten",
      solution: "No automated reminder system tracking who needs to be contacted, when, and with what urgency.",
      metric: "Lost revenue opportunities from cold leads"
    },
    {
      pain: "03. Slow & Manual Reporting",
      solution: "Business owners and directors wait days just to get clear figures on monthly revenue and margins.",
      metric: "Blind decision-making without live telemetry"
    }
  ],
  solutionsEyebrow: "Core Value Proposition",
  solutionsTitle: "One Single Source of Truth for All Teams",
  solutionsSubtitle: "A unified operational platform that connects all departments with transparent, centralized workflows.",
  solutions: [
    {
      number: "01",
      title: "Integrated Across Divisions",
      subtitle: "Sales, warehouse, and finance all read from and update the exact same single source of truth.",
      image: "/images/services/erp-crm/solution-integrated-divisions.png",
      alt: "Unified Data Across All Corporate Divisions",
      points: [
        "When sales closes an order, inventory reserves automatically in real-time",
        "Finance generates invoices without waiting for manual operational logs",
        "Eliminates duplicate data entry and inter-department miscommunications"
      ]
    },
    {
      number: "02",
      title: "Custom to Your Workflow",
      subtitle: "Not a rigid generic template; every module is built around your specific business rules.",
      image: "/images/services/erp-crm/solution-bespoke-workflow.png",
      alt: "Bespoke System Workflow Tailored to Your SOPs",
      points: [
        "Approval hierarchies mapped to your actual company delegation of authority",
        "Custom calculation formulas, pricing tiers, and commission rules",
        "Zero unused bloated menus that overwhelm warehouse staff or accountants"
      ]
    },
    {
      number: "03",
      title: "Real-Time Reporting",
      subtitle: "Management monitors critical metrics anytime without waiting for manual end-of-month recaps.",
      image: "/images/services/erp-crm/solution-realtime-reports.png",
      alt: "Live Telemetry and Real-Time Financial Reports",
      points: [
        "Instant visibility on daily revenue, gross margins, and outstanding receivables",
        "Automated profit-and-loss and cash flow statements updated on every transaction",
        "One-click export to structured Excel and formatted PDF executive decks"
      ]
    }
  ],
  featuresEyebrow: "System Architecture",
  featuresTitle: "ERP & CRM Module Architecture",
  featuresSubtitle: "The platform is structured into two core pillars: Operations (ERP) and Customer Relationships (CRM), deeply integrated in real time.",
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
  erpCrmModules: {
    erpGroup: {
      badge: "Column 1 - Operations",
      title: "ERP Core (Operations & Resources)",
      modules: [
        {
          title: "Inventory & Warehouse",
          description: "Real-time stock tracking, multi-depot stock mutations, and automated minimum stock reorder alerts.",
          icon: "Boxes"
        },
        {
          title: "Purchasing & Procurement",
          description: "Direct Purchase Orders (PO) to vendors and complete procurement lifecycle tracking.",
          icon: "ShoppingCart"
        },
        {
          title: "Finance & Accounting",
          description: "Automated double-entry journals, real-time profit & loss statements, and cash flow balance sheets.",
          icon: "Landmark"
        },
        {
          title: "HR & Payroll",
          description: "Employee master data, daily biometric/mobile attendance records, and automated payroll calculations.",
          icon: "Users"
        },
        {
          title: "Production Management",
          description: "Bill of Materials (BOM), production floor scheduling, work order logs, and raw material efficiency tracking.",
          icon: "Factory"
        },
        {
          title: "Multi-Branch & Warehouse Sync",
          description: "Consolidated multi-depot visibility, inter-branch transfers, and decentralized role access.",
          icon: "Network"
        }
      ]
    },
    crmGroup: {
      badge: "Column 2 - Sales & Revenue",
      title: "CRM Core (Sales & Customers)",
      modules: [
        {
          title: "Sales Pipeline",
          description: "Visual Kanban stages from inbound leads, qualification, proposal, to deal closing.",
          icon: "TrendingUp"
        },
        {
          title: "Customer Contact Management",
          description: "Comprehensive interaction history, signed contracts, uploaded files, and customer profiling.",
          icon: "UserCheck"
        },
        {
          title: "Follow-up & Reminders",
          description: "Automated calendar schedules and WhatsApp reminders ensuring zero high-value leads are forgotten.",
          icon: "BellRing"
        },
        {
          title: "Quotations & Invoicing",
          description: "Generate professional branded quotes and official invoices directly from deal records in seconds.",
          icon: "FileText"
        },
        {
          title: "Sales Performance Analytics",
          description: "Sales target versus actual achievement charts by individual agent, division, or region.",
          icon: "BarChart3"
        },
        {
          title: "WhatsApp & Email Integration",
          description: "All client communications and chat logs logged automatically into customer profiles.",
          icon: "MessageSquare"
        }
      ]
    },
    bridgeTitle: "Seamless Inter-System Connectivity",
    bridgeDescription: "Both sides are deeply connected: when sales marks a deal as 'Closed Won' in the CRM, data instantly reflects in Inventory allocation and generates draft Invoices in the ERP—eliminating duplicate human data entry."
  },
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
  ctaTitle: "Centralize Operations in One Platform",
  ctaSubtitle: "Start from a single core module and let us build a platform that scales alongside your company. Free initial consultation, zero commitment.",
  ctaButton: "Start Free Discussion"
};
