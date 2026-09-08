import { serviceSlugPairMap, type ServiceKey } from "./index";

export interface ServiceCatalogItem {
  key: ServiceKey;
  slug: string;
  category: "enterprise" | "software" | "web";
  categoryLabel: string;
  title: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface ServicesPageCopy {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    trustPills: string[];
  };
  catalog: {
    eyebrow: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterEnterprise: string;
    filterSoftware: string;
    filterWeb: string;
    viewServiceText: string;
    items: ServiceCatalogItem[];
  };
  aiAutomation: {
    eyebrow: string;
    title: string;
    subtitle: string;
    metrics: {
      stat: string;
      label: string;
      description: string;
    }[];
    useCasesLabel: string;
    useCases: string[];
    ctaText: string;
    ctaNote: string;
  };
  cta: {
    title: string;
    subtitle: string;
    button: string;
  };
}

export const servicesCatalogId: ServicesPageCopy = {
  hero: {
    eyebrow: "Layanan Software Engineering",
    title: "Software Tangguh untuk Skala Bisnis Anda",
    subtitle: "Rekayasa perangkat lunak terpadu untuk sistem internal, aplikasi mobile, dan ekosistem web perusahaan.",
    primaryCta: "Konsultasi Kebutuhan",
    secondaryCta: "Jelajahi Katalog Layanan",
    trustPills: [
      "100% Arsitektur Kustom",
      "Keamanan & Hak Milik Penuh",
      "SLA & Pemeliharaan Terjamin"
    ]
  },
  catalog: {
    eyebrow: "Katalog Solusi",
    title: "Layanan Rekayasa Perangkat Lunak Terpadu",
    subtitle: "Pilih kapabilitas teknis yang sesuai dengan target pertumbuhan dan kebutuhan operasional perusahaan Anda.",
    filterAll: "Semua Layanan",
    filterEnterprise: "Sistem Enterprise",
    filterSoftware: "Software & Mobile",
    filterWeb: "Web & E-Commerce",
    viewServiceText: "Pelajari Layanan",
    items: [
      {
        key: "erp-crm",
        slug: serviceSlugPairMap["erp-crm"].id,
        category: "enterprise",
        categoryLabel: "Enterprise Operations",
        title: "Sistem ERP & CRM Custom",
        description: "Sentralisasi operasional gudang, inventaris, keuangan, dan pipeline penjualan dalam satu platform terpadu.",
        highlights: [
          "Multi-Warehouse Inventory",
          "Sales Pipeline & Lead Tracking",
          "Automated Financial Ledger"
        ],
        icon: "Building2"
      },
      {
        key: "pos-system",
        slug: serviceSlugPairMap["pos-system"].id,
        category: "enterprise",
        categoryLabel: "Retail & Multi-Outlet",
        title: "Aplikasi POS & Kasir Multi-Cabang",
        description: "Sistem point of sale cepat dan stabil dengan sinkronisasi stok real-time untuk bisnis retail dan F&B.",
        highlights: [
          "Real-time Cloud Inventory",
          "Offline-first Mode",
          "Multi-outlet Management"
        ],
        icon: "Store"
      },
      {
        key: "software-house",
        slug: serviceSlugPairMap["software-house"].id,
        category: "enterprise",
        categoryLabel: "Dedicated Team",
        title: "Software House & Tim Khusus",
        description: "Partner rekayasa software jangka panjang untuk pengembangan modul kompleks dan ekspansi tim IT internal.",
        highlights: [
          "Agile Scrum Delivery",
          "Tech Lead & Senior Engineers",
          "Transparent Code Ownership"
        ],
        icon: "Briefcase"
      },
      {
        key: "custom-software",
        slug: serviceSlugPairMap["custom-software"].id,
        category: "software",
        categoryLabel: "Custom Engineering",
        title: "Custom Software & Web App",
        description: "Pengembangan software berbasis web yang disesuaikan secara presisi dengan alur kerja operasional spesifik Anda.",
        highlights: [
          "Custom Operational Workflows",
          "Role-based Access Control",
          "Scalable Microservices/Modular"
        ],
        icon: "Layers"
      },
      {
        key: "mobile-apps",
        slug: serviceSlugPairMap["mobile-apps"].id,
        category: "software",
        categoryLabel: "Mobile Solutions",
        title: "Aplikasi Mobile (iOS & Android)",
        description: "Aplikasi mobile berkinerja tinggi berbasis Flutter dengan pengalaman pengguna yang mulus dan backend terintegrasi.",
        highlights: [
          "Cross-Platform iOS & Android",
          "Push Notification System",
          "Secure Biometric & Payments"
        ],
        icon: "Smartphone"
      },
      {
        key: "web-development",
        slug: serviceSlugPairMap["web-development"].id,
        category: "web",
        categoryLabel: "Web Platform",
        title: "Pengembangan Website Modern",
        description: "Website modern berkecepatan tinggi dengan arsitektur Next.js/Astro, dioptimalkan untuk performa SEO maksimal.",
        highlights: [
          "Sub-second Load Times",
          "SEO Technical Architecture",
          "Enterprise CMS Integration"
        ],
        icon: "Globe"
      },
      {
        key: "ecommerce",
        slug: serviceSlugPairMap["ecommerce"].id,
        category: "web",
        categoryLabel: "Digital Commerce",
        title: "Toko Online & E-Commerce",
        description: "Platform e-commerce mandiri tanpa komisi pihak ketiga, lengkap dengan payment gateway otomatis dan kalkulasi ongkir.",
        highlights: [
          "Multi-Payment Gateway",
          "Automated Shipping Calculation",
          "Order & Customer Analytics"
        ],
        icon: "ShoppingCart"
      },
      {
        key: "company-profile",
        slug: serviceSlugPairMap["company-profile"].id,
        category: "web",
        categoryLabel: "Brand & Corporate",
        title: "Website Company Profile",
        description: "Representasi kredibilitas perusahaan di ruang digital untuk memenangkan kepercayaan mitra B2B dan klien korporat.",
        highlights: [
          "B2B Corporate Positioning",
          "High Conversion Inquiry",
          "Bilingual Localization"
        ],
        icon: "Award"
      },
      {
        key: "landing-page",
        slug: serviceSlugPairMap["landing-page"].id,
        category: "web",
        categoryLabel: "High-Converting",
        title: "High-Converting Landing Page",
        description: "Halaman landing page presisi tinggi yang dioptimalkan untuk kampanye iklan berbayar dan lead capture.",
        highlights: [
          "Fast-Load Conversion Engine",
          "Pixel & Event Tracking Ready",
          "A/B Testing Framework"
        ],
        icon: "Target"
      }
    ]
  },
  aiAutomation: {
    eyebrow: "AI & Otomasi Cerdas",
    title: "Tingkatkan Efisiensi dengan Otomasi & AI",
    subtitle: "Integrasikan alur kerja otomatis dan AI untuk memangkas proses manual serta mempercepat operasional.",
    metrics: [
      {
        stat: "70%",
        label: "Reduksi Input Manual",
        description: "Otomasi ekstraksi data dan sinkronisasi lintas divisi."
      },
      {
        stat: "< 10 dtk",
        label: "Respon Pelanggan Cepat",
        description: "AI bot berbasis konteks dokumen dan SOP internal."
      },
      {
        stat: "24/7",
        label: "Monitoring Tanpa Henti",
        description: "Deteksi anomali data operasional dan alert otomatis."
      },
      {
        stat: "10x",
        label: "Penyusunan Laporan Cepat",
        description: "Dashboard analitik terpusat dengan ringkasan otomatis."
      }
    ],
    useCasesLabel: "Contoh Penerapan:",
    useCases: [
      "AI Customer Support WhatsApp",
      "Otomasi Ekstraksi Invoice / Nota",
      "Smart Inventory Forecasting",
      "Workflow Approval Otomatis",
      "Integrasi LLM Internal Knowledge Base"
    ],
    ctaText: "Konsultasi Integrasi AI",
    ctaNote: "Dapat ditambahkan ke software baru maupun sistem yang sudah Anda gunakan saat ini."
  },
  cta: {
    title: "Mulai Transformasi Digital Bisnis Anda Hari Ini",
    subtitle: "Diskusikan roadmap teknologi perusahaan Anda bersama tim software engineer kami. Bebas komitmen dengan estimasi solusi yang jelas.",
    button: "Konsultasikan Kebutuhan Anda"
  }
};

export const servicesCatalogEn: ServicesPageCopy = {
  hero: {
    eyebrow: "Software Engineering Services",
    title: "Resilient Software to Scale Your Business",
    subtitle: "Bespoke engineering for enterprise systems, high-performance mobile apps, and modern web architectures.",
    primaryCta: "Discuss Your Project",
    secondaryCta: "Explore All Services",
    trustPills: [
      "100% Custom Architecture",
      "Full Code & IP Ownership",
      "Guaranteed SLAs & Support"
    ]
  },
  catalog: {
    eyebrow: "Solutions Directory",
    title: "Comprehensive Software Engineering Services",
    subtitle: "Choose from our specialized technical capabilities engineered to streamline operations and drive business growth.",
    filterAll: "All Services",
    filterEnterprise: "Enterprise Systems",
    filterSoftware: "Software & Mobile",
    filterWeb: "Web & E-Commerce",
    viewServiceText: "Explore Service",
    items: [
      {
        key: "erp-crm",
        slug: serviceSlugPairMap["erp-crm"].en,
        category: "enterprise",
        categoryLabel: "Enterprise Operations",
        title: "Custom ERP & CRM Systems",
        description: "Unify warehouse inventory, purchasing, accounting, and sales pipelines into a single centralized operational source of truth.",
        highlights: [
          "Multi-Warehouse Inventory",
          "Sales Pipeline & Lead Tracking",
          "Automated Financial Ledger"
        ],
        icon: "Building2"
      },
      {
        key: "pos-system",
        slug: serviceSlugPairMap["pos-system"].en,
        category: "enterprise",
        categoryLabel: "Retail & Multi-Outlet",
        title: "Multi-Outlet POS & Cashier Systems",
        description: "High-speed point-of-sale systems with cloud inventory synchronization designed for retail and F&B chains.",
        highlights: [
          "Real-time Cloud Inventory",
          "Offline-first Mode",
          "Multi-outlet Management"
        ],
        icon: "Store"
      },
      {
        key: "software-house",
        slug: serviceSlugPairMap["software-house"].en,
        category: "enterprise",
        categoryLabel: "Dedicated Team",
        title: "Software House & Dedicated Engineers",
        description: "Long-term software engineering partner providing vetted technical leads and developers to augment your team.",
        highlights: [
          "Agile Scrum Delivery",
          "Tech Lead & Senior Engineers",
          "Transparent Code Ownership"
        ],
        icon: "Briefcase"
      },
      {
        key: "custom-software",
        slug: serviceSlugPairMap["custom-software"].en,
        category: "software",
        categoryLabel: "Custom Engineering",
        title: "Custom Software & Web Applications",
        description: "Bespoke web applications and operational tools engineered specifically around your unique workflow logic.",
        highlights: [
          "Custom Operational Workflows",
          "Role-based Access Control",
          "Scalable Microservices/Modular"
        ],
        icon: "Layers"
      },
      {
        key: "mobile-apps",
        slug: serviceSlugPairMap["mobile-apps"].en,
        category: "software",
        categoryLabel: "Mobile Solutions",
        title: "Mobile App Development (iOS & Android)",
        description: "High-performance cross-platform Flutter mobile applications featuring fluid user experiences and reliable backend APIs.",
        highlights: [
          "Cross-Platform iOS & Android",
          "Push Notification System",
          "Secure Biometric & Payments"
        ],
        icon: "Smartphone"
      },
      {
        key: "web-development",
        slug: serviceSlugPairMap["web-development"].en,
        category: "web",
        categoryLabel: "Web Platform",
        title: "Modern Web Development",
        description: "High-speed, SEO-optimized websites built on modern tech stacks designed for superior search indexing and speed.",
        highlights: [
          "Sub-second Load Times",
          "SEO Technical Architecture",
          "Enterprise CMS Integration"
        ],
        icon: "Globe"
      },
      {
        key: "ecommerce",
        slug: serviceSlugPairMap["ecommerce"].en,
        category: "web",
        categoryLabel: "Digital Commerce",
        title: "E-Commerce & Online Stores",
        description: "Independent online storefronts with zero third-party commission fees, automated payment gateways, and real-time shipping.",
        highlights: [
          "Multi-Payment Gateway",
          "Automated Shipping Calculation",
          "Order & Customer Analytics"
        ],
        icon: "ShoppingCart"
      },
      {
        key: "company-profile",
        slug: serviceSlugPairMap["company-profile"].en,
        category: "web",
        categoryLabel: "Brand & Corporate",
        title: "Company Profile Websites",
        description: "Authoritative digital corporate presence crafted to win client trust, establish authority, and capture B2B inquiries.",
        highlights: [
          "B2B Corporate Positioning",
          "High Conversion Inquiry",
          "Bilingual Localization"
        ],
        icon: "Award"
      },
      {
        key: "landing-page",
        slug: serviceSlugPairMap["landing-page"].en,
        category: "web",
        categoryLabel: "High-Converting",
        title: "High-Converting Landing Pages",
        description: "High-speed, conversion-focused landing pages engineered specifically for performance marketing and paid ad campaigns.",
        highlights: [
          "Fast-Load Conversion Engine",
          "Pixel & Event Tracking Ready",
          "A/B Testing Framework"
        ],
        icon: "Target"
      }
    ]
  },
  aiAutomation: {
    eyebrow: "AI & Smart Automation",
    title: "Supercharge Operations with Automation & AI",
    subtitle: "Integrate intelligent workflows and AI into your systems to eliminate repetitive manual processes.",
    metrics: [
      {
        stat: "70%",
        label: "Manual Work Reduction",
        description: "Automated data extraction and cross-system sync."
      },
      {
        stat: "< 10s",
        label: "Instant Customer Response",
        description: "Context-aware AI assistance trained on internal knowledge."
      },
      {
        stat: "24/7",
        label: "Continuous Monitoring",
        description: "Proactive anomaly detection and automated operational alerts."
      },
      {
        stat: "10x",
        label: "Faster Report Assembly",
        description: "Centralized analytical summaries ready at the click of a button."
      }
    ],
    useCasesLabel: "Popular Applications:",
    useCases: [
      "WhatsApp AI Customer Support",
      "Automated Invoice & Document Extraction",
      "Smart Inventory Forecasting",
      "Automated Approval Workflows",
      "Internal Company Knowledge Base LLM"
    ],
    ctaText: "Discuss AI Integration",
    ctaNote: "Available as an add-on for new software or integrated into your existing systems."
  },
  cta: {
    title: "Ready to Scale Your Digital Infrastructure?",
    subtitle: "Schedule an exploratory technical call with our engineering team. No commitment, clear roadmap, and transparent scoping.",
    button: "Discuss Your Project"
  }
};
