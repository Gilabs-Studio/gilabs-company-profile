import { serviceSlugPairMap } from "./index";

export interface DirectoryItem {
  id: string;
  slug: string;
  title: string;
  description: string;
  tag: string;
  href: string;
  image: string;
}

export interface DirectoryGroup {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  items: DirectoryItem[];
}

export interface ServicesDirectoryCopy {
  hero: {
    title: string;
    subtitle: string;
  };
  groups: DirectoryGroup[];
  cta: {
    title: string;
    subtitle: string;
    buttonText: string;
  };
}

export const servicesDirectoryId: ServicesDirectoryCopy = {
  hero: {
    title: "Software Tangguh untuk Skala Bisnis Anda",
    subtitle: "Katalog terpadu layanan rekayasa perangkat lunak, sistem operasional terintegrasi, dan arsitektur website performa tinggi yang dibangun presisi dari nol tanpa kompromi.",
  },
  groups: [
    {
      id: "bespoke-websites",
      number: "01",
      title: "Website Khusus & Solusi Industri",
      subtitle: "Pengembangan website bespoke dengan arsitektur headless modern, optimasi teknis Core Web Vitals 95+, dan struktur konversi tinggi.",
      items: [
        {
          id: "website-premium",
          slug: "website-premium",
          title: "Website Premium Custom",
          description: "Desain bespoke eksklusif dari nol tanpa template, animasi mikro presisi, arsitektur headless secepat kilat.",
          tag: "Bespoke Web",
          href: "/id/website-premium",
          image: "/images/seo/hero-website-premium.webp"
        },
        {
          id: "website-corporate",
          slug: "website-corporate",
          title: "Website Corporate & Holding",
          description: "Representasi korporasi multi-entitas, tata kelola investor relations, dan kepatuhan standar keamanan data enterprise.",
          tag: "Corporate",
          href: "/id/website-corporate",
          image: "/images/seo/hero-website-corporate.webp"
        },
        {
          id: "website-klinik",
          slug: "website-klinik",
          title: "Website Klinik & Rumah Sakit",
          description: "Integrasi jadwal dokter real-time, registrasi reservasi pasien online, dan direktori poli fasilitas kesehatan.",
          tag: "Healthcare",
          href: "/id/website-klinik",
          image: "/images/seo/hero-website-klinik.webp"
        },
        {
          id: "website-kontraktor-properti",
          slug: "website-kontraktor-properti",
          title: "Website Kontraktor & Properti",
          description: "Portofolio proyek konstruksi beresolusi tinggi, listing spesifikasi unit properti, kalkulator KPR, dan formulir inquiry.",
          tag: "Real Estate",
          href: "/id/website-kontraktor-properti",
          image: "/images/seo/hero-kontraktor-properti.webp"
        },
        {
          id: "website-umkm",
          slug: "website-umkm",
          title: "Website UMKM Cepat Online",
          description: "Solusi go-digital profesional, terjangkau, dan siap pakai untuk menangkap prospek lokal via WhatsApp dan Google.",
          tag: "SME Ready",
          href: "/id/website-umkm",
          image: "/images/seo/hero-website-umkm.webp"
        },
        {
          id: "website-toko-online",
          slug: "website-toko-online",
          title: "Website Toko Online Mandiri",
          description: "Platform e-commerce mandiri, kalkulasi ongkir otomatis seluruh Indonesia, dan payment gateway tanpa potongan komisi marketplace.",
          tag: "E-Commerce",
          href: "/id/website-toko-online",
          image: "/images/seo/hero-website-toko-online.webp"
        },
        {
          id: "web-development-core",
          slug: serviceSlugPairMap["web-development"].id,
          title: "Jasa Pembuatan Website Kustom (Full-Stack)",
          description: "Rekayasa website dan aplikasi web modern berbasis Next.js dan Astro dengan kecepatan tinggi dan SEO-first.",
          tag: "Full-Stack Web",
          href: `/id/services/${serviceSlugPairMap["web-development"].id}`,
          image: "/images/seo/hero-aplikasi-custom.webp"
        },
        {
          id: "company-profile-core",
          slug: serviceSlugPairMap["company-profile"].id,
          title: "Web Company Profile Profesional",
          description: "Pengembangan profil digital perusahaan dengan copywriting persuasif dan reputasi kredibel di hadapan klien korporat.",
          tag: "Branding",
          href: `/id/services/${serviceSlugPairMap["company-profile"].id}`,
          image: "/images/seo/hero-website-corporate.webp"
        }
      ]
    },
    {
      id: "software-engineering",
      number: "02",
      title: "Software House & Sistem Operasional Internal",
      subtitle: "Rekayasa perangkat lunak enterprise untuk otomasi alur kerja, integrasi logistik gudang, kasir cabang, dan mobilitas tim.",
      items: [
        {
          id: "software-house",
          slug: "software-house",
          title: "Software House untuk UMKM & Startup",
          description: "Partner teknologi tangguh dengan tim developer dedikasi, sprint delivery terukur, dan source code 100% milik Anda.",
          tag: "Tech Partner",
          href: "/id/software-house",
          image: "/images/seo/hero-software-house.webp"
        },
        {
          id: "aplikasi-custom",
          slug: "aplikasi-custom",
          title: "Aplikasi Mobile Perusahaan (iOS & Android)",
          description: "Aplikasi cross-platform Flutter berkinerja native untuk sales lapangan, logistik, inspeksi, dan workflow approval.",
          tag: "Mobile Apps",
          href: "/id/aplikasi-custom",
          image: "/images/seo/hero-aplikasi-custom.webp"
        },
        {
          id: "sistem-informasi",
          slug: "sistem-informasi",
          title: "Sistem Informasi Manajemen (SIM)",
          description: "Sentralisasi operasional terpadu, dashboard analitik eksekutif real-time, dan digitalisasi administrasi perusahaan.",
          tag: "Management System",
          href: "/id/sistem-informasi",
          image: "/images/seo/hero-sistem-informasi.webp"
        },
        {
          id: "erp-crm-core",
          slug: serviceSlugPairMap["erp-crm"].id,
          title: "Sistem ERP & CRM Custom Terintegrasi",
          description: "Manajemen inventaris multi-gudang, otomatisasi jurnal keuangan akuntansi, dan pipeline sales CRM terintegrasi.",
          tag: "Enterprise ERP",
          href: `/id/services/${serviceSlugPairMap["erp-crm"].id}`,
          image: "/images/seo/hero-sistem-informasi.webp"
        },
        {
          id: "pos-system-core",
          slug: serviceSlugPairMap["pos-system"].id,
          title: "Aplikasi Kasir / POS Multi-Cabang",
          description: "Sistem kasir cloud point-of-sale dengan dukungan offline mode, sinkronisasi stok instan, dan pelaporan harian per cabang.",
          tag: "Retail POS",
          href: `/id/services/${serviceSlugPairMap["pos-system"].id}`,
          image: "/images/seo/hero-website-toko-online.webp"
        },
        {
          id: "custom-software-core",
          slug: serviceSlugPairMap["custom-software"].id,
          title: "Custom Software & Web Application Engineering",
          description: "Pengembangan software kustom spesifik bisnis, API mikroservis berkecepatan tinggi, dan integrasi sistem warisan (legacy).",
          tag: "Custom Engineering",
          href: `/id/services/${serviceSlugPairMap["custom-software"].id}`,
          image: "/images/seo/hero-software-house.webp"
        }
      ]
    }
  ],
  cta: {
    title: "Diskusikan Kebutuhan Software & Website Perusahaan Anda",
    subtitle: "Punya kebutuhan fitur khusus atau custom software dari nol? Konsultasikan arsitektur sistem bersama principal software engineer kami tanpa komitmen awal.",
    buttonText: "Konsultasi Kebutuhan Anda"
  }
};

export const servicesDirectoryEn: ServicesDirectoryCopy = {
  hero: {
    title: "Robust Software for Your Business Scale",
    subtitle: "Unified catalog of custom software engineering, integrated operational systems, and high-performance web architecture built strictly from scratch.",
  },
  groups: [
    {
      id: "bespoke-websites",
      number: "01",
      title: "Bespoke Websites & Industry Solutions",
      subtitle: "Bespoke web engineering with modern headless architecture, 95+ Core Web Vitals optimization, and high-conversion structures.",
      items: [
        {
          id: "website-premium",
          slug: "website-premium",
          title: "Premium Bespoke Website",
          description: "Exclusive custom design crafted from scratch, refined micro-animations, blazing fast headless speed.",
          tag: "Bespoke Web",
          href: "/en/website-premium",
          image: "/images/seo/hero-website-premium.webp"
        },
        {
          id: "website-corporate",
          slug: "website-corporate",
          title: "Corporate & Holding Website",
          description: "Multi-entity enterprise representation, investor relations governance, and corporate compliance standards.",
          tag: "Corporate",
          href: "/en/website-corporate",
          image: "/images/seo/hero-website-corporate.webp"
        },
        {
          id: "website-klinik",
          slug: "website-klinik",
          title: "Clinics & Hospitals Website",
          description: "Real-time doctor schedule integration, online patient reservation booking, and healthcare facility polyclinic directories.",
          tag: "Healthcare",
          href: "/en/website-klinik",
          image: "/images/seo/hero-website-klinik.webp"
        },
        {
          id: "website-kontraktor-properti",
          slug: "website-kontraktor-properti",
          title: "Contractor & Real Estate Website",
          description: "High-resolution construction project portfolios, property unit spec listings, mortgage calculators, and inquiry forms.",
          tag: "Real Estate",
          href: "/en/website-kontraktor-properti",
          image: "/images/seo/hero-kontraktor-properti.webp"
        },
        {
          id: "website-umkm",
          slug: "website-umkm",
          title: "Affordable SME Business Website",
          description: "Cost-effective, rapid go-live digital solution ready to capture local leads via WhatsApp and Google Search.",
          tag: "SME Ready",
          href: "/en/website-umkm",
          image: "/images/seo/hero-website-umkm.webp"
        },
        {
          id: "website-toko-online",
          slug: "website-toko-online",
          title: "Independent E-Commerce Web Store",
          description: "Self-hosted online store, automated shipping calculations across Indonesia, and direct payment gateway with zero commission fees.",
          tag: "E-Commerce",
          href: "/en/website-toko-online",
          image: "/images/seo/hero-website-toko-online.webp"
        },
        {
          id: "web-development-core",
          slug: serviceSlugPairMap["web-development"].en,
          title: "Custom Full-Stack Web Development",
          description: "Modern web applications powered by Next.js and Astro with unmatched speed, clean code, and search engine excellence.",
          tag: "Full-Stack Web",
          href: `/en/services/${serviceSlugPairMap["web-development"].en}`,
          image: "/images/seo/hero-aplikasi-custom.webp"
        },
        {
          id: "company-profile-core",
          slug: serviceSlugPairMap["company-profile"].en,
          title: "Professional Company Profile Web",
          description: "Authoritative digital corporate identity with persuasive copywriting and high credibility for enterprise partners.",
          tag: "Branding",
          href: `/en/services/${serviceSlugPairMap["company-profile"].en}`,
          image: "/images/seo/hero-website-corporate.webp"
        }
      ]
    },
    {
      id: "software-engineering",
      number: "02",
      title: "Software House & Enterprise Internal Systems",
      subtitle: "Enterprise software engineering for workflow automation, warehouse logistics, multi-outlet POS, and mobile field forces.",
      items: [
        {
          id: "software-house",
          slug: "software-house",
          title: "Software House for Startups & SMEs",
          description: "Agile software engineering partner with dedicated squad sprint delivery, transparent roadmap, and 100% code ownership.",
          tag: "Tech Partner",
          href: "/en/software-house",
          image: "/images/seo/hero-software-house.webp"
        },
        {
          id: "aplikasi-custom",
          slug: "aplikasi-custom",
          title: "Enterprise Mobile Applications (iOS & Android)",
          description: "Native-performance Flutter mobile apps for field sales, logistics tracking, safety inspections, and workflow approvals.",
          tag: "Mobile Apps",
          href: "/en/aplikasi-custom",
          image: "/images/seo/hero-aplikasi-custom.webp"
        },
        {
          id: "sistem-informasi",
          slug: "sistem-informasi",
          title: "Management Information System (MIS)",
          description: "Centralized internal operations, executive real-time analytics dashboard, and paperless business process automation.",
          tag: "Management System",
          href: "/en/sistem-informasi",
          image: "/images/seo/hero-sistem-informasi.webp"
        },
        {
          id: "erp-crm-core",
          slug: serviceSlugPairMap["erp-crm"].en,
          title: "Custom Integrated ERP & CRM System",
          description: "Multi-warehouse inventory control, automated financial ledger journal, and full-funnel sales pipeline management.",
          tag: "Enterprise ERP",
          href: `/en/services/${serviceSlugPairMap["erp-crm"].en}`,
          image: "/images/seo/hero-sistem-informasi.webp"
        },
        {
          id: "pos-system-core",
          slug: serviceSlugPairMap["pos-system"].en,
          title: "Multi-Branch Point of Sale (POS)",
          description: "Cloud cashier system with offline-first reliability, instant stock sync, and daily end-of-day register audit reports.",
          tag: "Retail POS",
          href: `/en/services/${serviceSlugPairMap["pos-system"].en}`,
          image: "/images/seo/hero-website-toko-online.webp"
        },
        {
          id: "custom-software-core",
          slug: serviceSlugPairMap["custom-software"].en,
          title: "Custom Software & Web App Engineering",
          description: "Tailored proprietary business platforms, high-throughput microservice APIs, and secure enterprise legacy system integrations.",
          tag: "Custom Engineering",
          href: `/en/services/${serviceSlugPairMap["custom-software"].en}`,
          image: "/images/seo/hero-software-house.webp"
        }
      ]
    }
  ],
  cta: {
    title: "Discuss Your Company's Software & Website Requirements",
    subtitle: "Have specific feature requirements or need custom software from scratch? Consult system architecture directly with our principal software architect.",
    buttonText: "Discuss Your Requirements"
  }
};
