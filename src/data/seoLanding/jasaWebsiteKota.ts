import type { SeoLandingPageData } from "./types";

export interface CityTargetData {
  cityKey: string;
  cityName: string;
  province: string;
  overviewContextId: string;
  overviewContextEn: string;
  specialtiesId: string[];
  specialtiesEn: string[];
}

export const targetCitiesList: CityTargetData[] = [
  {
    cityKey: "jakarta",
    cityName: "Jakarta",
    province: "DKI Jakarta",
    overviewContextId: "Sebagai pusat bisnis dan ekonomi nasional, korporasi dan startup di Jakarta membutuhkan website berkinerja tinggi, aman, dan siap menghadapi lonjakan trafik ribuan pengunjung per detik.",
    overviewContextEn: "As the nation's commercial capital, enterprises and startups in Jakarta require high-concurrency, resilient web portals capable of handling thousands of visitors per second.",
    specialtiesId: ["Website Holding & B2B Corporate", "Sistem ERP & CRM Terintegrasi", "Custom Web Application"],
    specialtiesEn: ["B2B Holding Group Portals", "Integrated ERP & CRM Systems", "Bespoke Web Applications"]
  },
  {
    cityKey: "surabaya",
    cityName: "Surabaya",
    province: "Jawa Timur",
    overviewContextId: "Pusat perdagangan dan industri Jawa Timur menuntut efisiensi operasional tinggi. Kami membangun website distribusi, manufaktur, dan e-commerce tangguh untuk pasar Surabaya dan sekitarnya.",
    overviewContextEn: "As the industrial and trading powerhouse of East Java, businesses in Surabaya demand high efficiency. We build distribution portals, manufacturing sites, and robust e-commerce architectures.",
    specialtiesId: ["Portal Distribusi & Manufaktur", "E-Commerce Multi-Warehouse", "Website Company Profile Pabrik"],
    specialtiesEn: ["Manufacturing & Distribution Portals", "Multi-Warehouse E-Commerce", "Industrial Company Profiles"]
  },
  {
    cityKey: "semarang",
    cityName: "Semarang",
    province: "Jawa Tengah",
    overviewContextId: "Sebagai markas utama Gilabs, kami telah dipercaya puluhan instansi, kawasan industri Wijayakusuma & Kendal, serta bisnis retail di Semarang untuk transformasi digital menyeluruh.",
    overviewContextEn: "As Gilabs' central headquarters, we have empowered numerous industrial zone enterprises (Kendal & Wijayakusuma), institutions, and retail groups in Semarang with digital engineering.",
    specialtiesId: ["Software House Kantor Pusat (HQ)", "Sistem Informasi Kawasan Industri", "Aplikasi Kasir POS Multi-Cabang"],
    specialtiesEn: ["Central HQ Engineering Studio", "Industrial Zone Management Systems", "Multi-Branch Cloud POS"]
  },
  {
    cityKey: "bandung",
    cityName: "Bandung",
    province: "Jawa Barat",
    overviewContextId: "Kota kreatif dan teknologi yang dinamis. Gilabs menghadirkan website dengan estetika visual memukau, cocok bagi brand fashion, agensi kreatif, hospitality, dan startup teknologi di Bandung.",
    overviewContextEn: "A vibrant creative and technology hub. Gilabs builds websites with world-class visual aesthetics, tailored for lifestyle apparel, hospitality, and tech startups in Bandung.",
    specialtiesId: ["Website Fashion & Brand Kreatif", "Platform Reservasi Hospitality", "MVP Startup Cepat Rilis"],
    specialtiesEn: ["Apparel & Creative Brand Portals", "Hospitality Booking Platforms", "Rapid Startup MVP Builds"]
  },
  {
    cityKey: "yogyakarta",
    cityName: "Yogyakarta",
    province: "DI Yogyakarta",
    overviewContextId: "Ekosistem pendidikan dan pariwisata terkemuka. Kami menyediakan website untuk institusi pendidikan, agen perjalanan wisata, klinik kesehatan, dan UMKM seni budaya di Jogja.",
    overviewContextEn: "A premier cultural, educational, and tourism center. We develop digital solutions for academic institutions, travel operators, health clinics, and creative studios in Jogja.",
    specialtiesId: ["Website Institusi & Pendidikan", "Sistem Booking Tour & Travel", "Website Klinik & Kesehatan"],
    specialtiesEn: ["Academic & Institutional Portals", "Tour & Travel Booking Engines", "Healthcare & Specialty Clinics"]
  },
  {
    cityKey: "medan",
    cityName: "Medan",
    province: "Sumatera Utara",
    overviewContextId: "Pusat pertumbuhan bisnis di wilayah Sumatera. Gilabs mendukung pelaku perkebunan, logistik ekspor-impor, dan bisnis komersial di Medan dengan website berstandar internasional.",
    overviewContextEn: "The primary economic gateway of Sumatra. Gilabs supports plantation conglomerates, import-export logistics, and commercial leaders in Medan with international-standard platforms.",
    specialtiesId: ["Portal Perkebunan & Komoditas", "Sistem Pelacakan Logistik", "Website B2B Tender Korporasi"],
    specialtiesEn: ["Agribusiness & Commodity Portals", "Logistics Tracking Systems", "B2B Tender-Ready Profiles"]
  },
  {
    cityKey: "bali",
    cityName: "Bali",
    province: "Bali",
    overviewContextId: "Pintu gerbang pariwisata dan gaya hidup internasional. Kami merancang website luxury hospitality, vila, restoran fine dining, dan properti real estate dengan standar visual Awwwards.",
    overviewContextEn: "An international lifestyle and hospitality paradise. We engineer bespoke websites for luxury villa resorts, fine-dining establishments, and real estate agencies with Awwwards-level craft.",
    specialtiesId: ["Website Resort & Luxury Villa", "Sistem Reservasi Restoran Eksklusif", "Website Real Estate Properti"],
    specialtiesEn: ["Luxury Resort & Villa Showcases", "Bespoke Dining Reservation Engines", "Real Estate Showcase Portals"]
  },
  {
    cityKey: "makassar",
    cityName: "Makassar",
    province: "Sulawesi Selatan",
    overviewContextId: "Hub utama perekonomian Indonesia Timur. Gilabs membantu ekspansi digital bisnis maritim, distributor pangan, dan korporasi terkemuka di Makassar dengan sistem web terpercaya.",
    overviewContextEn: "The primary commercial gateway to Eastern Indonesia. Gilabs drives digital expansion for maritime logistics, food distribution, and regional enterprises in Makassar.",
    specialtiesId: ["Website Ekspedisi & Maritim", "Portal Distributor Pangan", "Website Company Profile Perusahaan"],
    specialtiesEn: ["Maritime & Cargo Freight Portals", "Food Supply Chain Dashboards", "Corporate Enterprise Websites"]
  },
  {
    cityKey: "solo",
    cityName: "Solo",
    province: "Jawa Tengah",
    overviewContextId: "Pusat budaya dan denyut perdagangan Solo Raya. Kami memberdayakan produsen batik, industri garmen, rumah sakit, dan UMKM lokal Solo dengan website modern yang siap bersaing nasional.",
    overviewContextEn: "A storied cultural and manufacturing hub in Central Java. We empower textile manufacturers, hospitals, and heritage businesses in Solo with scalable digital platforms.",
    specialtiesId: ["Website Katalog Batik & Retail", "Website Rumah Sakit & Fasilitas Medis", "Toko Online UMKM Solo"],
    specialtiesEn: ["Textile & Heritage Brand Portals", "Hospital & Medical Web Platforms", "Direct-to-Consumer Online Stores"]
  },
  {
    cityKey: "malang",
    cityName: "Malang",
    province: "Jawa Timur",
    overviewContextId: "Kota pendidikan dan wisata berhawa sejuk dengan komunitas startup yang tumbuh pesat. Gilabs menghadirkan solusi website inovatif bagi kampus, resort wisata, dan software bisnis di Malang.",
    overviewContextEn: "A thriving university town and highland tourist destination with a growing tech community. Gilabs builds modern portals for educational academies, eco-resorts, and tech startups.",
    specialtiesId: ["Website Wisata & Akomodasi", "Sistem Pendaftaran Lembaga Kursus", "Website Agribisnis & Retail"],
    specialtiesEn: ["Eco-Resort & Tourism Portals", "Course Registration Systems", "Agribusiness & Retail E-Commerce"]
  }
];

export function getCityLandingData(cityKey: string, lang: "id" | "en" = "id"): SeoLandingPageData | null {
  const city = targetCitiesList.find((c) => c.cityKey === cityKey);
  if (!city) return null;

  const { cityName, province } = city;

  if (lang === "en") {
    const specialties = city.specialtiesEn;
    const overview = city.overviewContextEn;

    return {
      slug: `jasa-website-${cityKey}`,
      canonicalUrl: `https://gilabs.id/en/jasa-website-${cityKey}`,
      alternateUrls: {
        id: `https://gilabs.id/id/jasa-website-${cityKey}`,
        en: `https://gilabs.id/en/jasa-website-${cityKey}`,
      },
      metaTitle: `Website Development Services in ${cityName} | Gilabs Engineering`,
      metaDescription: `Professional website development services in ${cityName}. Software house partner for corporate websites, MIS portals, e-commerce, and custom software in ${cityName}.`,
      primaryKeyword: `website development services ${cityName.toLowerCase()}`,
      supportingKeywords: [
        `web developer ${cityName.toLowerCase()}`,
        `software house ${cityName.toLowerCase()}`,
        `custom web development company in ${cityName.toLowerCase()}`,
        `corporate website agency ${cityName.toLowerCase()}`
      ],
      allKeywords: [
        `website development services ${cityName.toLowerCase()}`,
        `web developer ${cityName.toLowerCase()}`,
        `software house ${cityName.toLowerCase()}`,
        `corporate web design ${cityName.toLowerCase()}`,
        `indonesia software house`
      ],

      heroTitle: `Professional Website Development in ${cityName}`,
      heroSubtitle: `High-performance web engineering, corporate portals, and bespoke digital software for enterprises, industries, and emerging brands across ${cityName} with 100% source code ownership.`,
      heroIllustration: "/images/seo/hero-jasa-website-kota.webp",
      heroImageAlt: `Professional website development in ${cityName} by Gilabs`,
      primaryCtaText: `Consult ${cityName} Project`,
      secondaryCtaText: "National Portfolio",
      secondaryCtaHref: "/en/portfolio",

      problemsTitle: `Digital Transformation Challenges in ${cityName}`,
      problemsSubtitle: `Business leaders in ${cityName} frequently struggle to find reliable technology partners with enterprise engineering standards.`,
      problems: [
        {
          pain: `Scarcity of Enterprise-Grade IT Partners in ${cityName}`,
          solution: `Many regional agencies rely on slow pre-made CMS themes unable to pass stringent corporate security and performance audits.`,
          metric: "Gilabs delivers senior engineering talent with clean code architectures backed by a licensed corporate entity"
        },
        {
          pain: "Unresponsive Communication & Delayed Project Timelines",
          solution: "Unpredictable contractors frequently stall deliverables without transparent sprint tracking or milestone accountability.",
          metric: "Dedicated single-point-of-contact via WhatsApp and bi-weekly staging demos ensure on-time delivery"
        },
        {
          pain: "High Overhead Charges from Capital City Agencies",
          solution: "Hiring Jakarta-based agencies often involves massive billing overheads that do not correlate to superior engineering craft.",
          metric: "Gilabs provides exceptional engineering value with competitive regional cost efficiencies"
        }
      ],

      solutionsTitle: `Gilabs Digital Capabilities for Businesses in ${cityName}`,
      solutionsSubtitle: overview,
      solutions: [
        {
          title: `Primary Technical Demands in ${cityName}`,
          description: `We align our engineering modules to the primary economic engines of ${cityName}: ${specialties.join(", ")}.`,
          highlights: specialties
        },
        {
          title: "Hybrid Consultation Flexibility (Online & On-Site)",
          description: `We maintain daily online sprint collaboration, while our Principal Architects schedule on-site requirement gathering workshops at your office in ${cityName}.`,
          highlights: ["Discovery Video Workshops", "Flexible On-Site Executive Visits", "Fast-Response WhatsApp SLA"]
        },
        {
          title: "100% Full Source Code & Zero Hidden Fees",
          description: `All source code, Git repositories, and cloud assets are transferred completely with no ongoing vendor rent.`,
          highlights: ["Total Asset Ownership", "Transparent Legal Agreements", "Post-Launch Warranty"]
        }
      ],

      featuresTitle: `Advantages of Partnering with Gilabs in ${cityName}`,
      featuresSubtitle: "Delivering speed, security, and contractual certainty for your organization.",
      features: [
        {
          title: "Sub-Second Page Speeds (Core Web Vitals)",
          description: `Page load times under 1.5 seconds ensure your prospects in ${cityName} enjoy instant access.`
        },
        {
          title: "Localized Google Search & Maps SEO",
          description: `Structured to rank prominently when prospective buyers search for products and services in ${cityName}.`
        },
        {
          title: "Bespoke Brand Visual Identity",
          description: "Zero generic templates; refined visual layouts that project authority, trust, and credibility."
        },
        {
          title: "Direct WhatsApp Conversion Triggers",
          description: "Enables customers to initiate direct sales and consultation inquiries with a single mobile tap."
        },
        {
          title: "High-Security Cloud Infrastructure",
          description: "Encrypted with modern TLS/SSL certificates and cloud firewalls guaranteeing 99.9% operational uptime."
        },
        {
          title: "Bug-Free Warranty & Ongoing SLA Support",
          description: "Comprehensive post-deployment technical support ensuring your platform runs smoothly 24/7."
        }
      ],

      faqTitle: `Frequently Asked Questions About Services in ${cityName}`,
      faqSubtitle: `Key information regarding Gilabs web development and software engineering services for ${cityName}.`,
      faqs: [
        {
          question: `Can the Gilabs team meet on-site at our office in ${cityName}?`,
          answer: `Yes. We regularly schedule on-site workshops for discovery, stakeholder alignment, and project kickoffs in ${cityName}, complemented by weekly video conference check-ins.`
        },
        {
          question: `What is the delivery timeline for a project in ${cityName}?`,
          answer: `Corporate showcase websites typically deploy within 2 to 4 weeks, while complex enterprise systems or custom web apps require 6 to 10 weeks.`
        },
        {
          question: `Will our website rank effectively for local searches in ${cityName}?`,
          answer: `Yes. We configure Local SEO architectures including Schema.org LocalBusiness markup and Google Business profile synchronizations.`
        },
        {
          question: `Do we receive full access to domains and server infrastructure?`,
          answer: `Certainly. All hosting, DNS controllers, and source code repositories are registered under your business name with full administrative credentials.`
        },
        {
          question: `How do we initiate a project in ${cityName}?`,
          answer: `Simply contact our team via WhatsApp. Our Solution Architects will lead a complimentary discovery session to outline requirements, deliverables, and transparent pricing.`
        }
      ],

      ctaTitle: `Start Your Digital Transformation in ${cityName}`,
      ctaSubtitle: `Consult your organization's digital roadmap with the Gilabs engineering team today.`,
      ctaButtonText: `Contact Gilabs (${cityName}) via WhatsApp`
    };
  }

  // Default: Indonesian
  const specialties = city.specialtiesId;
  const overview = city.overviewContextId;

  return {
    slug: `jasa-website-${cityKey}`,
    canonicalUrl: `https://gilabs.id/id/jasa-website-${cityKey}`,
    alternateUrls: {
      id: `https://gilabs.id/id/jasa-website-${cityKey}`,
      en: `https://gilabs.id/en/jasa-website-${cityKey}`,
    },
    metaTitle: `Jasa Pembuatan Website ${cityName} Terbaik & Profesional | Gilabs`,
    metaDescription: `Jasa pembuatan website ${cityName} profesional. Partner software house terpercaya untuk website company profile, sistem informasi, toko online, dan aplikasi bisnis di ${cityName}.`,
    primaryKeyword: `jasa pembuatan website ${cityName.toLowerCase()}`,
    supportingKeywords: [
      `web developer ${cityName.toLowerCase()}`,
      `software house ${cityName.toLowerCase()}`,
      `jasa bikin website ${cityName.toLowerCase()}`,
      `jasa pembuatan website profesional di ${cityName.toLowerCase()}`,
      `vendor software ${cityName.toLowerCase()}`
    ],
    allKeywords: [
      `jasa pembuatan website ${cityName.toLowerCase()}`,
      `web developer ${cityName.toLowerCase()}`,
      `software house ${cityName.toLowerCase()}`,
      `jasa bikin web murah ${cityName.toLowerCase()}`,
      `website company profile ${cityName.toLowerCase()}`,
      `jasa website ${province.toLowerCase()}`,
      `gilabs software house`
    ],

    heroTitle: `Jasa Pembuatan Website ${cityName} Profesional`,
    heroSubtitle: `Solusi rekayasa website, portal bisnis, dan sistem digital tangguh bagi perusahaan, industri, dan UMKM di wilayah ${cityName} & sekitarnya dengan standar rekayasa modern dan kepemilikan kode penuh.`,
    heroIllustration: "/images/seo/hero-jasa-website-kota.webp",
    heroImageAlt: `Jasa pembuatan website profesional di kota ${cityName} - Gilabs`,
    primaryCtaText: `Konsultasi Proyek ${cityName}`,
    secondaryCtaText: "Lihat Portofolio Nasional",
    secondaryCtaHref: "/id/portfolio",

    problemsTitle: `Tantangan Transformasi Digital di ${cityName}`,
    problemsSubtitle: `Banyak pelaku usaha di ${cityName} menghadapi kendala dalam menemukan partner teknologi yang reliabel dan transparan.`,
    problems: [
      {
        pain: `Sulit Menemukan Vendor IT Lokal Berstandar Enterprise di ${cityName}`,
        solution: `Banyak agensi lokal hanya mengandalkan template siap pakai lambat yang tidak siap diaudit oleh klien korporat besar.`,
        metric: "Gilabs menghadirkan tim software engineer senior dengan standar kode enterprise berbadan hukum resmi"
      },
      {
        pain: "Komunikasi Tidak Responsif & Proyek Molor Berbulan-bulan",
        solution: "Sering kali vendor sulit dihubungi setelah menerima uang muka, tanpa kejelasan timeline dan tahapan milestone pengerjaan.",
        metric: "Komunikasi satu pintu via WhatsApp dan update berkala memastikan proyek selesai tepat waktu"
      },
      {
        pain: "Biaya Vendor Agensi Jakarta Terlalu Tinggi",
        solution: "Membayar agensi besar di ibukota sering kali menguras anggaran dengan biaya overhead yang tidak sebanding dengan hasil.",
        metric: "Struktur biaya Gilabs jauh lebih kompetitif dengan kualitas hasil setara bahkan melebihi agensi ibukota"
      }
    ],

    solutionsTitle: `Solusi Digital Gilabs untuk Bisnis di ${cityName}`,
    solutionsSubtitle: overview,
    solutions: [
      {
        title: `Layanan Utama Paling Diminati di ${cityName}`,
        description: `Kami memetakan kebutuhan teknologi di ${cityName} ke dalam modul rekayasa teruji: ${specialties.join(", ")}.`,
        highlights: specialties
      },
      {
        title: "Fleksibilitas Meeting (Online & Kunjungan On-Site)",
        description: `Kami melayani koordinasi rutin melalui video call, dan tim Solution Architect kami siap menjadwalkan kunjungan tatap muka langsung ke kantor Anda di ${cityName}.`,
        highlights: ["Konsultasi Discovery Online", "Kunjungan On-Site Fleksibel", "Support WhatsApp Fast Response"]
      },
      {
        title: "100% Full Source Code & Zero Hidden Fees",
        description: `Seluruh kode sumber dan aset diserahkan seutuhnya tanpa sistem sewa tahunan yang memberatkan operasional bisnis Anda di ${cityName}.`,
        highlights: ["Hak Milik Penuh", "Kontrak Legal Jelas", "Garansi Pasca Peluncuran"]
      }
    ],

    featuresTitle: `Keunggulan Bekerja Sama dengan Gilabs di ${cityName}`,
    featuresSubtitle: "Kombinasi kecepatan, keamanan, dan kepastian hasil untuk bisnis Anda.",
    features: [
      {
        title: "Website Super Cepat (Core Web Vitals Optimal)",
        description: `Waktu muat halaman kurang dari 1.5 detik memastikan calon pelanggan Anda di ${cityName} tidak berpindah ke kompetitor.`
      },
      {
        title: "Optimasi SEO Google Lokal (Google Maps & Pencarian)",
        description: `Website dioptimalkan agar langsung muncul saat calon pembeli mencari produk atau layanan Anda di wilayah ${cityName}.`
      },
      {
        title: "Desain Eksklusif Sesuai Identitas Brand",
        description: "Bebas dari template pasaran; rancangan visual yang memancarkan otoritas dan kepercayaan di mata konsumen."
      },
      {
        title: "Integrasi WhatsApp & Formulir Penjualan",
        description: "Setiap calon pembeli dapat langsung terhubung ke tim sales Anda hanya dengan satu sentuhan di layar ponsel."
      },
      {
        title: "Infrastruktur Cloud Server Aman & Stabil",
        description: "Dilindungi proteksi SSL/TLS dan firewall modern dengan jaminan uptime 99.9% tanpa gangguan server down."
      },
      {
        title: "Masa Garansi Bug-Free & Dukungan Teknis",
        description: "Pendampingan teknis penuh pasca peluncuran untuk memastikan website berjalan mulus tanpa kendala eror."
      }
    ],

    faqTitle: `FAQ Jasa Pembuatan Website di ${cityName}`,
    faqSubtitle: `Pertanyaan umum seputar layanan pembuatan website dan software Gilabs untuk wilayah ${cityName}.`,
    faqs: [
      {
        question: `Apakah tim Gilabs bisa meeting langsung di kantor kami di ${cityName}?`,
        answer: `Bisa. Kami secara berkala menjadwalkan kunjungan on-site untuk requirement gathering dan kick-off proyek bagi klien korporat dan instansi di ${cityName}, di samping koordinasi harian via video call dan WhatsApp.`
      },
      {
        question: `Berapa lama waktu pembuatan website untuk bisnis di ${cityName}?`,
        answer: `Untuk website profil bisnis standar dibutuhkan waktu sekitar 1 hingga 3 minggu. Sementara untuk portal korporasi besar atau sistem kustom membutuhkan waktu 4 hingga 8 minggu kerja.`
      },
      {
        question: `Apakah website kami akan muncul di Google saat dicari dari area ${cityName}?`,
        answer: `Ya. Kami menerapkan strategi Local SEO lengkap dengan struktur Schema.org LocalBusiness dan integrasi profil Google My Business agar usaha Anda mudah ditemukan pencari lokal di ${cityName}.`
      },
      {
        question: `Apakah saya mendapatkan akses penuh ke domain dan hosting?`,
        answer: `Tentu saja. Semua akses cPanel/Hosting, domain manager, dan repositori kode sumber menjadi hak milik penuh perusahaan Anda tanpa ada yang dikunci.`
      },
      {
        question: `Bagaimana cara memulai proyek website di ${cityName}?`,
        answer: `Cukup hubungi kami melalui WhatsApp. Solution Architect Gilabs akan melakukan sesi discovery gratis untuk memetakan kebutuhan, jadwal, dan estimasi biaya yang paling efisien.`
      }
    ],

    ctaTitle: `Mulai Transformasi Digital Bisnis Anda di ${cityName}`,
    ctaSubtitle: `Konsultasikan rencana pembuatan website perusahaan Anda bersama tim Gilabs sekarang.`,
    ctaButtonText: `Hubungi Tim Gilabs (${cityName}) via WhatsApp`
  };
}
