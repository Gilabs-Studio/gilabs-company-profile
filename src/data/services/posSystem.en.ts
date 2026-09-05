import type { ServicePageData } from "./types";

export const posSystemEn: ServicePageData = {
  slug: "jasa-pembuatan-aplikasi-kasir-pos",
  category: "software",
  eyebrow: "Custom POS & Cashier System",
  title: "A POS System That Never Makes Customer Queues Longer",
  subtitle: "Lightning-fast checkouts, automated stock deductions, and live sales telemetry. Built to match your specific retail or restaurant flow, not a generic rigid template.",
  heroIllustration: "/images/services/pos-system/hero-pos-system.png",
  metaTitle: "Custom POS & Cashier Software Development | Gilabs",
  metaDescription: "Custom Point of Sale (POS) software for retail, cafes, restaurants, and multi-outlet stores. Rapid checkout, automatic inventory sync, offline mode, and real-time reports.",
  keywords: [
    "custom pos software development",
    "retail point of sale system",
    "restaurant pos application",
    "offline point of sale software",
    "multi branch pos system",
    "bespoke pos software indonesia"
  ],
  primaryCtaText: "Discuss Your Needs",
  secondaryCtaText: "View Built Systems",
  problemsTitle: "Manual Cashier Operations Are Prone to Costly Bottlenecks",
  problemsSubtitle: "Three operational headaches caused by manual pen-and-paper notes or rigid off-the-shelf POS software.",
  problems: [
    {
      pain: "Unnoticed Stock Discrepancies",
      solution: "Manual tracking errors go completely unnoticed until stressful monthly physical stock audits."
    },
    {
      pain: "Congested Checkout Queues",
      solution: "Sluggish transaction processes cause frustrating customer lines during peak rush hours."
    },
    {
      pain: "Delayed Sales Reporting",
      solution: "Business owners only see daily revenue long after store closing and tedious manual bookkeeping."
    }
  ],
  featuresTitle: "Core Features in Our POS Systems",
  featuresSubtitle: "Engineered to empower cashiers with effortless speed while providing owners with full operational oversight.",
  features: [
    {
      title: "Multi-Method Payment Checkout",
      description: "Support cash, dynamic/static QRIS, bank transfers, e-wallets, and debit cards in a single fluid screen."
    },
    {
      title: "Automated Inventory Deduction",
      description: "Every single completed transaction instantly deducts finished goods or raw ingredients with zero double-entry."
    },
    {
      title: "Split Bill & Flexible Discounts",
      description: "Seamless bill splitting per table/group, percentage promotions, promotional coupons, and custom discounts."
    },
    {
      title: "Thermal & Digital Receipts",
      description: "Instant connection to thermal receipt printers, with digital receipt delivery directly via WhatsApp or email."
    },
    {
      title: "Daily Sales & Profit Reports",
      description: "Automated daily summaries covering total revenue, gross margins, top-selling items, and payment method breakdowns."
    },
    {
      title: "Multi-Cashier & Multi-Branch",
      description: "Manage multiple cashier shifts and oversee sales across all branch locations from a centralized dashboard."
    },
    {
      title: "Printer & Barcode Scanner Integration",
      description: "Full hardware support for USB/Bluetooth thermal printers, 1D/2D barcode scanners, and automatic cash drawers."
    },
    {
      title: "Offline Resilient Mode",
      description: "Cashiers process transactions smoothly even when internet drops, syncing automatically upon reconnection."
    }
  ],
  packagesTitle: "Scale with Your Store or Restaurant Size",
  packagesSubtitle: "Transparent software investment with zero recurring per-outlet subscription fees. 100% full source code ownership.",
  packages: [
    {
      name: "BASIC",
      price: "From $350",
      isPopular: false,
      description: "For small businesses with a single checkout station",
      features: [
        "Core Transaction & Inventory Tracking",
        "1 Cashier Device (Web / Android)",
        "Daily Sales Reports",
        "Menu & Product Database Setup",
        "1-Month Bug Fix Warranty"
      ]
    },
    {
      name: "STANDARD",
      price: "From $950",
      isPopular: true,
      description: "For expanding stores needing complete hardware integration",
      features: [
        "Multi-Cashier Shifts per Branch",
        "Thermal Printer & Barcode Scanner Sync",
        "Comprehensive Reports & Excel/PDF Export",
        "Offline Mode with Auto Cloud Sync",
        "3-Month Warranty & Dedicated Support"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact Us",
      isPopular: false,
      description: "For multi-outlet retail chains & restaurant franchises",
      features: [
        "Consolidated Multi-Branch Real-Time Network",
        "ERP & Financial Accounting Integration",
        "Bespoke Business Logic (Kitchen Display System, Table Management, etc.)",
        "Supervisor Permissions & Security Hardening",
        "Dedicated Support & Maintenance SLA"
      ]
    }
  ],
  techStackTitle: "Fast & Resilient Cashier Stack",
  techStackSubtitle: "Combining instant UI responsiveness with ACID-compliant central synchronization.",
  techStack: [
    { name: "React & PWA Offline", category: "POS Terminal", description: "Installable on Android tablets or PC terminals with offline data caching." },
    { name: "PostgreSQL & SQLite", category: "Data Tier", description: "Strict transaction integrity ensuring zero lost receipts or duplicate orders." },
    { name: "Node.js / Golang", category: "Sync Engine", description: "Instant synchronization between outlets, central warehouses, and owner dashboards." }
  ],
  faqTitle: "Frequently Asked Questions",
  faqSubtitle: "Key inquiries regarding bespoke POS system engineering with Gilabs.",
  faqs: [
    {
      question: "Can this system run on regular tablets?",
      answer: "Yes, fully compatible with regular Android tablets, iPads, and dedicated all-in-one desktop POS terminals."
    },
    {
      question: "What happens if the internet cuts out during peak hours?",
      answer: "Our offline mode allows transactions to proceed uninterrupted, automatically synchronizing all records to the cloud when internet returns."
    },
    {
      question: "Can we monitor multiple branch outlets simultaneously?",
      answer: "Yes, available starting from our Custom tier with an executive multi-outlet dashboard accessible directly from your smartphone."
    },
    {
      question: "Is receipt printer integration included?",
      answer: "Included starting from our Standard tier, supporting USB, Bluetooth, and network LAN/Wi-Fi thermal printers."
    }
  ],
  ctaTitle: "Tidy Cashiers, Stress-Free Reporting",
  ctaSubtitle: "Walk us through your transaction flow and we will build a tailored system to maximize efficiency. Free consultation, zero commitment.",
  ctaButton: "Start Free Discussion"
};
