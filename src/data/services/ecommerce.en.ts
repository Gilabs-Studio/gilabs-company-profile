import type { ServicePageData } from "./types";

export const ecommerceEn: ServicePageData = {
  slug: "ecommerce-store-development",
  category: "website",
  eyebrow: "E-Commerce & Online Store",
  title: "Online Stores Ready to Sell 24/7 Without Supervision",
  subtitle: "From product catalogs to automated payment gateways, we build everything so you can focus strictly on inventory and fulfillment.",
  heroIllustration: "/images/services/ecommerce/hero-ecommerce.png",
  metaTitle: "Professional Online Store & E-Commerce Web Development | Gilabs",
  metaDescription: "Independent e-commerce web stores ready to sell 24/7. Automated payment gateways (Midtrans/Xendit), real-time courier shipping, easy stock control, and 0% marketplace fees.",
  keywords: [
    "ecommerce development agency",
    "custom online store development",
    "d2c ecommerce agency",
    "payment gateway integration ecommerce",
    "scalable ecommerce website"
  ],
  primaryCtaText: "Free Consultation",
  secondaryCtaText: "View Created Stores",
  problemsTitle: "Selling on Marketplaces Alone Is No Longer Enough",
  problemsSubtitle: "These 3 fundamental bottlenecks continually erode profit margins and lock you out of owning your customer base.",
  problems: [
    {
      pain: "01. Marketplace Dependency",
      solution: "Algorithms shift, advertising prices soar, and you lack total control over your storefront."
    },
    {
      pain: "02. Eroded Profit Margins",
      solution: "Heavy admin charges, forced shipping rules, and marketplace cuts eat into your net income."
    },
    {
      pain: "03. Zero Customer Data",
      solution: "Impossible to launch repeat remarketing funnels because buyer lists remain in the platform's hands."
    }
  ],
  featuresTitle: "Your Own Store, Your Own Rules",
  featuresSubtitle: "Three core operational pillars to build an independent, highly profitable direct sales channel.",
  features: [
    {
      title: "Full Brand Ownership",
      description: "Custom domain, bespoke styling matching your identity, zero generic cookie-cutter templates."
    },
    {
      title: "Integrated Payment Gateways",
      description: "Bank transfers, QRIS, e-wallets, credit cards verified automatically into your business ledger."
    },
    {
      title: "Effortless Product Management",
      description: "Update stock levels, retail pricing, and promotional discount codes without waiting on developers."
    }
  ],
  packagesTitle: "Start Selling Online with the Right Architecture",
  packagesSubtitle: "Transparent investment packages structured around your catalog size and operational transaction volume.",
  packages: [
    {
      name: "BASIC",
      price: "From $350",
      description: "For small businesses starting their direct online sales channel",
      features: [
        "Product catalog up to 50 items",
        "Checkout with manual transfer & WhatsApp trigger",
        "Responsive mobile-first design",
        "1-Year Domain & Cloud Hosting",
        "2x Revision rounds"
      ]
    },
    {
      name: "STANDARD",
      price: "From $950",
      isPopular: true,
      description: "For high-growth stores requiring automated volume workflows",
      features: [
        "Unlimited products and hierarchical categories",
        "Automated payment gateway (QRIS, VA, E-Wallets)",
        "Real-time multi-courier shipping integration",
        "Sales analytics, order tracking & invoice dashboard",
        "1-Year Domain & Cloud Hosting",
        "4x Revision rounds"
      ]
    },
    {
      name: "CUSTOM",
      price: "Contact Us",
      description: "For multi-warehouse logistics or enterprise ERP sync",
      features: [
        "ERP / warehouse inventory synchronization",
        "Multi-warehouse & regional fulfillment",
        "Bespoke business logic & pricing rules",
        "Dedicated project consultant & SLA"
      ]
    }
  ],
  techStackTitle: "Battle-Tested E-Commerce Stack",
  techStackSubtitle: "Engineered with resilient static pipelines capable of handling massive flash sale traffic spikes.",
  techStack: [
    { name: "Next.js / Astro", category: "Engine", description: "Sub-second product catalog rendering and fast checkout." },
    { name: "Payment Gateway API", category: "Billing", description: "Certified payment integration with bank-grade security." },
    { name: "Cloudflare Edge CDN", category: "Infra", description: "Global edge delivery and 99.9% commercial uptime." }
  ],
  faqTitle: "Online Store FAQs",
  faqSubtitle: "Common questions regarding custom online store development and operations.",
  faqs: [
    {
      question: "Which payment gateways are supported?",
      answer: "Midtrans, Xendit, Stripe, and can be customized to support QRIS, Virtual Accounts, E-Wallets, and Credit Cards."
    },
    {
      question: "Can shipping rates be calculated automatically?",
      answer: "Yes, available on the Standard plan upwards with real-time API integrations connecting to all major logistics couriers."
    },
    {
      question: "What if my inventory spans thousands of SKU items?",
      answer: "Supported effortlessly. We supply bulk CSV/Excel import tools and structured multi-tier filtering hierarchies."
    },
    {
      question: "Are there any recurring monthly commissions?",
      answer: "Gilabs takes 0% commission on your sales. Standard yearly hosting and domain renewal apply after year one."
    }
  ],
  ctaTitle: "Your Business Deserves Its Own Storefront",
  ctaSubtitle: "Break free from total dependency on third-party marketplaces today.",
  ctaButton: "Start Free Consultation"
};
