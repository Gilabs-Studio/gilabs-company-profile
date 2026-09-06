import type { ServicePageData } from "./types";

export const posSystemEn: ServicePageData = {
  slug: "custom-pos-system-development",
  category: "software",
  eyebrow: "Custom POS & Cashier System",
  title: "Fast Cashier System Without Long Queues",
  subtitle: "Fast checkouts, automatic inventory sync, and real-time sales reports. Built for your specific store or restaurant workflow without rigid templates.",
  heroIllustration: "/images/services/pos-system/hero-pos-system.png",
  heroImageAlt: "Modern POS Cashier Station Terminal - Gilabs",
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
  secondaryCtaText: "Explore Solutions",
  problemsEyebrow: "Operational Pitfalls",
  problemsTitle: "Manual Cashier Operations Cause Costly Bottlenecks",
  problemsSubtitle: "Three operational headaches caused by manual pen-and-paper notes or rigid off-the-shelf POS software.",
  problems: [
    {
      pain: "01. Unnoticed Stock Discrepancies",
      solution: "Manual tracking errors go unnoticed until stressful monthly physical stock audits.",
      metric: "Causes inventory leakage and revenue loss"
    },
    {
      pain: "02. Congested Checkout Queues",
      solution: "Sluggish transaction processes cause frustrating customer lines during peak rush hours.",
      metric: "Reduces customer satisfaction and retention"
    },
    {
      pain: "03. Delayed Sales Reporting",
      solution: "Business owners only see daily revenue long after store closing and tedious manual bookkeeping.",
      metric: "Harder to make swift business decisions without live data"
    }
  ],
  solutionsEyebrow: "POS Solutions",
  solutionsTitle: "Faster, More Efficient Cashier Operations",
  solutionsSubtitle: "Responsive cashier interfaces with automatic backend synchronization to your store inventory.",
  solutions: [
    {
      number: "01",
      title: "Fast Checkouts",
      subtitle: "Intuitive interface so even newly hired cashiers can start immediately without lengthy training.",
      image: "/images/services/pos-system/solution-fast-transactions.png",
      alt: "Fast Checkout POS Terminal Experience",
      points: [
        "Minimalist cashier UI optimized for rapid touch and high-speed keystrokes",
        "Instant menu & product search via barcode scan or visual quick categories",
        "One-click split bill, percentage promotions, and dynamic QRIS display"
      ]
    },
    {
      number: "02",
      title: "Automatic Inventory Sync",
      subtitle: "Every completed transaction instantly deducts stock, eliminating manual double entry.",
      image: "/images/services/pos-system/solution-auto-inventory.png",
      alt: "Automated POS Stock Deduction Engine",
      points: [
        "Finished retail goods and kitchen raw materials deducted automatically",
        "Automated threshold alerts when product quantities reach minimum safety stock",
        "Prevents overselling and eliminates discrepancies during periodic stock audits"
      ]
    },
    {
      number: "03",
      title: "Real-Time Reporting",
      subtitle: "Business owners monitor revenue anytime, from anywhere, directly on their mobile phone.",
      image: "/images/services/pos-system/solution-realtime-insights.png",
      alt: "Real-time Mobile Sales Analytics",
      points: [
        "Live daily revenue telemetry, gross profit margins, and peak shopping hours",
        "Transparent cashier shift recaps to eliminate end-of-day drawer shortages",
        "Instant export to structured Excel spreadsheets and formatted audit PDFs"
      ]
    }
  ],
  featuresEyebrow: "Core Features",
  featuresTitle: "Complete Cashier System Features",
  featuresSubtitle: "Engineered to empower cashiers with speed while providing owners with full operational oversight.",
  features: [
    {
      title: "Multi-Method Payment Checkout",
      description: "Support cash, dynamic/static QRIS, bank transfers, e-wallets, and debit/credit cards in a single fluid screen."
    },
    {
      title: "Automated Inventory Deduction",
      description: "Every single completed transaction instantly deducts finished goods or raw ingredients with zero double-entry."
    },
    {
      title: "Split Bill & Flexible Discounts",
      description: "Seamless bill splitting per table or group, percentage promotions, promotional coupons, and custom discounts."
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
      title: "Multi-Cashier & Role Access",
      description: "Manage multiple cashier shifts with distinct access permissions (cashier, supervisor, owner) from a centralized system."
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
  techStackTitle: "Fast & Resilient Cashier Stack",
  techStackSubtitle: "Combining instant UI responsiveness with ACID-compliant central synchronization.",
  techStack: [
    { name: "React & PWA Offline", category: "POS Terminal", description: "Installable on Android tablets or PC terminals with offline data caching." },
    { name: "PostgreSQL & SQLite", category: "Data Tier", description: "Strict transaction integrity ensuring zero lost receipts or duplicate orders." },
    { name: "Node.js / Golang", category: "Sync Engine", description: "Instant synchronization between outlets, central warehouses, and owner dashboards." }
  ],
  faqEyebrow: "FAQ",
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
      answer: "Yes, an executive multi-outlet dashboard is available to monitor all branch operations directly from your smartphone."
    },
    {
      question: "Is receipt printer integration included?",
      answer: "Yes, supporting USB, Bluetooth, and network LAN/Wi-Fi thermal printers."
    }
  ],
  ctaTitle: "Build a POS System Tailored to Your Business",
  ctaSubtitle: "Walk us through your transaction flow and we will build a tailored system to maximize efficiency. Free consultation, zero commitment.",
  ctaButton: "Start Free Discussion"
};
