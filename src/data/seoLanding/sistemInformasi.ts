import type { SeoLandingPageData } from "./types";

export const sistemInformasiId: SeoLandingPageData = {
  slug: "sistem-informasi",
  canonicalUrl: "https://gilabs.id/id/sistem-informasi",
  alternateUrls: {
    id: "https://gilabs.id/id/sistem-informasi",
    en: "https://gilabs.id/en/sistem-informasi",
  },
  metaTitle: "Jasa Pembuatan Sistem Informasi Manajemen untuk Perusahaan | Gilabs",
  metaDescription: "Jasa pembuatan sistem informasi manajemen untuk perusahaan (SIM). Integrasikan alur kerja divisi, approval bertingkat, dan pelaporan otomatis secara real-time.",
  primaryKeyword: "jasa pembuatan sistem informasi manajemen untuk perusahaan",
  supportingKeywords: [
    "jasa pembuatan sistem informasi",
    "sistem informasi manajemen perusahaan",
    "software sim custom indonesia",
    "jasa bikin sistem informasi kantor",
    "pengembangan software sistem internal"
  ],
  allKeywords: [
    "jasa pembuatan sistem informasi manajemen untuk perusahaan",
    "jasa pembuatan sistem informasi",
    "sistem informasi manajemen perusahaan",
    "software house sistem informasi",
    "dashboard kpi manajemen",
    "sistem workflow approval perusahaan",
    "software internal kantor custom"
  ],

  heroTitle: "Jasa Pembuatan Sistem Informasi Manajemen untuk Perusahaan",
  heroSubtitle: "Sentralisasi alur kerja multi-divisi, approval bertingkat, dan analitik operasional ke dalam satu platform web internal yang aman dan adaptif.",
  heroIllustration: "/images/seo/hero-sistem-informasi.webp",
  heroImageAlt: "Dashboard sistem informasi manajemen untuk perusahaan buatan Gilabs",
  primaryCtaText: "Konsultasi Sistem Informasi",
  secondaryCtaText: "Lihat Arsitektur Solusi",
  secondaryCtaHref: "/id/solutions",

  problemsTitle: "Tantangan Pengelolaan Data & Operasional Kantor",
  problemsSubtitle: "Silo data antar divisi dan proses manual sering kali menghambat pengambilan keputusan strategis.",
  problems: [
    {
      pain: "Data Tersebar di Ratusan Spreadsheet Excel",
      solution: "Dokumen yang terpisah-pisah menyulitkan konsolidasi data keuangan, inventaris, dan kinerja tim secara akurat.",
      metric: "Rata-rata 4 jam per hari dihabiskan staf hanya untuk merekap laporan manual"
    },
    {
      pain: "Birokrasi Dokumen & Approval Lambat",
      solution: "Pengajuan izin belanja, lembur, dan persetujuan kontrak terhenti di meja kerja atau grup chat tanpa tracking jelas.",
      metric: "Approval digital mempercepat siklus kerja hingga 70% dengan audit trail rapi"
    },
    {
      pain: "Kebocoran Data Sensitif Perusahaan",
      solution: "Tanpa kontrol hak akses bertingkat, dokumen rahasia perusahaan rentan diakses atau disalin oleh pihak tidak berwenang.",
      metric: "Role-based permission memastikan setiap pengguna hanya melihat data sesuai wewenangnya"
    }
  ],

  solutionsTitle: "Keunggulan Sistem Informasi Manajemen Gilabs",
  solutionsSubtitle: "Dibangun dengan arsitektur web modern yang menjamin kecepatan akses, keamanan data, dan kemudahan penggunaan staf.",
  solutions: [
    {
      title: "Arsitektur Modular Terintegrasi",
      description: "Modul HRIS, Keuangan, Procurement, dan Operasional saling terhubung tanpa duplikasi input data antar divisi.",
      highlights: ["Single Source of Truth", "Database PostgreSQL Terdistribusi", "API Ready"]
    },
    {
      title: "Dashboard KPI & Business Intelligence Real-Time",
      description: "Tampilkan grafik performa penjualan, arus kas, dan produktivitas karyawan dalam visual interaktif yang mudah dipahami direksi.",
      highlights: ["Grafik Dinamis Interaktif", "Export PDF/Excel Satu Klik", "Notifikasi Anomali Data"]
    },
    {
      title: "Workflow Engine Otomatis & Notifikasi",
      description: "Alur persetujuan bertingkat (multi-tier approval) otomatis yang mengirim notifikasi via Email dan WhatsApp ke PIC yang bersangkutan.",
      highlights: ["Multi-Level Approval", "WhatsApp API Gateway", "Audit Log Lengkap"]
    }
  ],

  featuresTitle: "Fitur Unggulan Sistem Informasi Perusahaan",
  featuresSubtitle: "Standar rekayasa perangkat lunak untuk menunjang keandalan operasional setiap hari.",
  features: [
    {
      title: "Single Sign-On & Akses Bertingkat",
      description: "Otentikasi aman dengan RBAC (Role-Based Access Control) memastikan privasi data antar level jabatan."
    },
    {
      title: "Digital Form & Document Archiving",
      description: "Formulir digital dinamis dengan lampiran berkas terenkripsi dan tanda tangan digital sah."
    },
    {
      title: "Otomasi Pelaporan Finansial & Operasional",
      description: "Laporan harian, mingguan, dan bulanan terbit otomatis tanpa butuh rekap manual berkali-kali."
    },
    {
      title: "Audit Trail & Activity Log Permanen",
      description: "Rekam jejak setiap aksi buat, ubah, dan hapus data tercatat lengkap dengan timestamp dan IP address pengguna."
    },
    {
      title: "Antarmuka Responsif Desktop & Mobile Web",
      description: "Desain UI/UX ergonomis yang nyaman digunakan di monitor kantor maupun layar tablet saat meeting luar kantor."
    },
    {
      title: "Opsi On-Premise Server atau Cloud VPS",
      description: "Pilihan fleksibel apakah sistem akan di-deploy di infrastruktur server lokal kantor Anda atau cloud VPS privat."
    }
  ],

  faqTitle: "FAQ Jasa Pembuatan Sistem Informasi",
  faqSubtitle: "Pertanyaan yang sering diajukan mengenai implementasi sistem informasi manajemen.",
  faqs: [
    {
      question: "Apa perbedaan sistem informasi custom dengan software jadi?",
      answer: "Software jadi mengharuskan perusahaan Anda beradaptasi dengan template bawaan mereka. Sistem informasi custom dirancang 100% mengikuti SOP, formulir, dan struktur hierarki organisasi perusahaan Anda tanpa kompromi."
    },
    {
      question: "Apakah sistem bisa diintegrasikan dengan database atau software yang sudah ada?",
      answer: "Bisa. Kami berpengalaman mengintegrasikan sistem informasi baru dengan database eksisting, software akuntansi, mesin absensi sidik jari/face recognition, hingga WhatsApp API."
    },
    {
      question: "Bagaimana proses migrasi data dari file Excel lama ke sistem baru?",
      answer: "Tim data engineer Gilabs membantu proses sanitasi, pembersihan, dan migrasi massal dari ribuan baris Excel lama Anda ke skema database baru secara aman."
    },
    {
      question: "Apakah ada pelatihan (training) penggunaan untuk staf kami?",
      answer: "Ya. Setiap proyek mencakup sesi training komprehensif bagi administrator dan staf pengguna, lengkap dengan video rekaman dan buku panduan pengguna (user manual)."
    },
    {
      question: "Berapa biaya pembuatan sistem informasi manajemen perusahaan?",
      answer: "Biaya disesuaikan dengan kompleksitas modul dan integrasi. Gilabs menawarkan proposal transparan dengan milestone pembayaran jelas tanpa biaya siluman di kemudian hari."
    }
  ],

  ctaTitle: "Tingkatkan Efisiensi Operasional Perusahaan Anda Hari Ini",
  ctaSubtitle: "Konsultasikan blueprint sistem informasi kantor Anda bersama engineer Gilabs.",
  ctaButtonText: "Jadwalkan Konsultasi Teknis"
};

export const sistemInformasiEn: SeoLandingPageData = {
  slug: "sistem-informasi",
  canonicalUrl: "https://gilabs.id/en/sistem-informasi",
  alternateUrls: {
    id: "https://gilabs.id/id/sistem-informasi",
    en: "https://gilabs.id/en/sistem-informasi",
  },
  metaTitle: "Enterprise Management Information System (MIS) Development | Gilabs",
  metaDescription: "Custom Management Information System (MIS) development for enterprises. Unify departmental workflows, tiered approvals, and automated reporting.",
  primaryKeyword: "enterprise management information system development",
  supportingKeywords: [
    "custom mis development company",
    "internal company workflow software",
    "bespoke enterprise web portal",
    "management information system software house"
  ],
  allKeywords: [
    "enterprise management information system development",
    "custom mis software",
    "workflow approval software",
    "internal operational dashboard",
    "corporate software engineering indonesia"
  ],

  heroTitle: "Enterprise Management Information System Development",
  heroSubtitle: "Centralize multi-departmental workflows, tiered approvals, and operational business intelligence into a single, high-security web platform.",
  heroIllustration: "/images/seo/hero-sistem-informasi.webp",
  heroImageAlt: "Gilabs Enterprise Management Information System MIS Dashboard Mockup",
  primaryCtaText: "Free MIS Consultation",
  secondaryCtaText: "Explore Architecture",
  secondaryCtaHref: "/en/solutions",

  problemsTitle: "Operational Bottlenecks in Enterprise Data Management",
  problemsSubtitle: "Information silos across corporate divisions stall informed decision-making.",
  problems: [
    {
      pain: "Critical Data Fragmented Across Spreadsheets",
      solution: "Unsynchronized Excel files impede rapid financial consolidation, stock tracking, and divisional productivity reviews.",
      metric: "Staff lose up to 4 hours daily manually reconciling fragmented spreadsheets"
    },
    {
      pain: "Sluggish Bureaucracy in Multi-Tier Approvals",
      solution: "Purchase orders, operational expense requests, and vendor contracts get stalled in disorganized chat groups.",
      metric: "Digital approval workflows accelerate decision velocity by up to 70%"
    },
    {
      pain: "Vulnerability to Confidential Data Leaks",
      solution: "Without role-based data shielding, sensitive corporate financials remain vulnerable to unauthorized viewing.",
      metric: "Strict RBAC architectures ensure each user only views authorized departmental data"
    }
  ],

  solutionsTitle: "Gilabs MIS Architectural Advantages",
  solutionsSubtitle: "Engineered with modern cloud protocols guaranteeing sub-second queries, data integrity, and intuitive team adoption.",
  solutions: [
    {
      title: "Modular Integrated Architecture",
      description: "HRIS, Finance, Procurement, and Operational modules communicate in real time, eliminating duplicate data entry.",
      highlights: ["Single Source of Truth", "Distributed PostgreSQL DB", "Extensible REST/GraphQL APIs"]
    },
    {
      title: "Real-Time KPI Dashboards & BI",
      description: "Visual dashboards rendering revenue trajectories, cash flow metrics, and SLA performance for executive leadership.",
      highlights: ["Interactive Dynamic Charts", "One-Click PDF/Excel Exports", "Anomaly Alerts"]
    },
    {
      title: "Automated Workflow Engine & Notifications",
      description: "Configurable multi-level approval queues that dispatch instant alerts via email and WhatsApp to authorized decision makers.",
      highlights: ["Configurable Approval Matrix", "WhatsApp Gateway Integration", "Immutable Audit Logs"]
    }
  ],

  featuresTitle: "Core MIS System Capabilities",
  featuresSubtitle: "Enterprise software engineering standards supporting 24/7 business continuity.",
  features: [
    {
      title: "Single Sign-On & Tiered Access",
      description: "Secure corporate authentication with RBAC ensuring airtight divisional privacy."
    },
    {
      title: "Digital Forms & Document Archiving",
      description: "Dynamic electronic submission forms with encrypted file storage and digital signature compliance."
    },
    {
      title: "Automated Financial & Operational Reports",
      description: "Generates recurring daily, weekly, and monthly operational ledgers without manual intervention."
    },
    {
      title: "Permanent Audit Trail & Activity Logs",
      description: "Detailed chronological logging of all create, update, and delete actions with timestamps and IP records."
    },
    {
      title: "Ergonomic Desktop & Mobile Web UI",
      description: "Responsive layouts optimized for widescreen desktop monitors as well as boardroom tablets."
    },
    {
      title: "On-Premise or Private Cloud Deployment",
      description: "Flexible deployment on your company's internal server hardware or dedicated private cloud VPS."
    }
  ],

  faqTitle: "Frequently Asked Questions About MIS Systems",
  faqSubtitle: "Key insights regarding implementation scopes, data migration, and training.",
  faqs: [
    {
      question: "How does custom MIS differ from ready-made SaaS platforms?",
      answer: "Generic SaaS forces your organization to reshape internal SOPs to fit arbitrary vendor templates. A custom MIS from Gilabs is modeled 100% around your proprietary organizational chart, approval tiers, and business forms."
    },
    {
      question: "Can the MIS integrate with existing software and biometric scanners?",
      answer: "Yes. We regularly connect custom systems to existing accounting suites, warehouse barcode scanners, biometric fingerprint/facial recognition terminals, and WhatsApp business APIs."
    },
    {
      question: "How is legacy data migrated from Excel spreadsheets?",
      answer: "Our data engineers assist in cleaning, sanitizing, and bulk-migrating historical spreadsheet records directly into your newly configured database schemas without operational downtime."
    },
    {
      question: "Is user training provided for our employees?",
      answer: "Yes. Every engagement includes hands-on training sessions for system administrators and daily users, supported by video walkthroughs and written SOP manuals."
    },
    {
      question: "What is the typical investment for a corporate MIS?",
      answer: "Pricing is structured transparently based on modular complexity and third-party integrations, backed by clear milestone deliverables and zero hidden fees."
    }
  ],

  ctaTitle: "Accelerate Your Corporate Operational Efficiency Today",
  ctaSubtitle: "Consult on your custom MIS architectural blueprint with Gilabs engineers.",
  ctaButtonText: "Schedule Technical Consultation"
};

export const sistemInformasiData = sistemInformasiId;
