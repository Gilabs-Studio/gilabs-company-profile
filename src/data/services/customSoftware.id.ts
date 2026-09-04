import type { ServicePageData } from "./types";

export const customSoftwareId: ServicePageData = {
  slug: "jasa-pembuatan-custom-software",
  category: "software",
  eyebrow: "Custom Software & Web App",
  title: "Sistem yang Dibangun Mengikuti Cara Kerja Kamu, Bukan Sebaliknya",
  subtitle: "Kalau proses bisnis kamu udah terlalu unik buat software siap pakai, saatnya bangun yang benar-benar pas.",
  heroIllustration: "/images/services/custom-software/hero-custom-software.png",
  metaTitle: "Jasa Pembuatan Custom Software & Web App Indonesia | Gilabs",
  metaDescription: "Jasa pembuatan custom software dan web app Indonesia. Sistem operasional, ERP/CRM, workflow approval, dan portal client sesuai cara kerja bisnis Anda.",
  keywords: [
    "jasa pembuatan custom software",
    "jasa pembuatan web app",
    "custom software development indonesia",
    "jasa software operasional",
    "aplikasi web custom",
    "sistem workflow approval",
    "portal client custom",
    "dashboard analitik bisnis"
  ],
  primaryCtaText: "Diskusikan Kebutuhan Kamu",
  secondaryCtaText: "Lihat Contoh Sistem",
  problemsTitle: "Kapan Waktunya Butuh Sistem Custom?",
  problemsSubtitle: "Tiga tanda nyata ketika solusi off-the-shelf dan spreadsheet mulai membatasi pertumbuhan bisnis Anda.",
  problems: [
    {
      pain: "Excel Udah Nggak Cukup",
      solution: "Data tersebar di banyak file, sulit dipantau, rawan human error."
    },
    {
      pain: "Software Umum Terlalu Kaku",
      solution: "Fitur yang ada nggak sesuai alur kerja, bayar mahal tapi banyak yang nggak kepakai."
    },
    {
      pain: "Butuh Integrasi Antar Sistem",
      solution: "Punya beberapa aplikasi tapi nggak nyambung satu sama lain, kerjaan jadi dobel."
    }
  ],
  featuresTitle: "Apa yang Bisa Kami Buatkan?",
  featuresSubtitle: "Solusi sistem custom yang dirancang presisi untuk menyelesaikan masalah operasional harian Anda.",
  features: [
    {
      title: "HRIS, Inventory & Asset Management",
      description: "Kelola karyawan, stok barang, atau aset perusahaan dalam satu dashboard."
    },
    {
      title: "Marketplace & Platform Multi-vendor",
      description: "Platform jual-beli dengan sistem komisi, split payment, dan multi-toko."
    },
    {
      title: "Dashboard Analitik & Reporting",
      description: "Tarik data dari berbagai sumber, visualisasikan performa bisnis secara real-time."
    },
    {
      title: "Sistem Approval & Workflow",
      description: "Pengajuan izin, reimburse, atau purchase order dengan alur approval bertingkat."
    },
    {
      title: "Portal Client & Member Area",
      description: "Area khusus untuk pelanggan atau member mengakses layanan dan tracking progress."
    },
    {
      title: "Integrasi API & Otomasi Pihak Ketiga",
      description: "Hubungkan software lama ke sistem baru, payment gateway, atau layanan logistik."
    }
  ],
  packagesTitle: "Investasi Sesuai Skala Kebutuhan",
  packagesSubtitle: "Estimasi biaya transparan tanpa biaya lisensi per-user bulanan. Source code 100% milik Anda.",
  packages: [
    {
      name: "BASIC",
      price: "Mulai Rp 5.000.000",
      isPopular: false,
      description: "Cocok untuk: MVP, sistem internal sederhana, automasi satu alur kerja spesifik.",
      features: [
        "1 Modul/Alur Utama",
        "Web-based Responsive",
        "Database Setup",
        "Basic Auth & Role",
        "Garansi Bug Fixes 1 Bulan"
      ]
    },
    {
      name: "STANDARD",
      price: "Mulai Rp 15.000.000",
      isPopular: true,
      description: "Cocok untuk: Sistem operasional bisnis, CRM/ERP custom skala UKM.",
      features: [
        "Multi-modul & Multi-role User",
        "Web App + Responsive Dashboard",
        "Integrasi API & Notifikasi (WA/Email)",
        "Export/Import Data & Reporting",
        "Garansi & Support 3 Bulan"
      ]
    },
    {
      name: "CUSTOM",
      price: "Hubungi Kami",
      isPopular: false,
      description: "Cocok untuk: Platform skala besar, arsitektur kompleks, kebutuhan high traffic.",
      features: [
        "Arsitektur Microservices / Scalable",
        "Multi-platform (Web + Mobile App)",
        "Integrasi Sistem Legacy & Third-party",
        "Security Hardening & Audit Log",
        "Dedicated Support & SLA"
      ]
    }
  ],
  techStackTitle: "Teknologi Modern & Skalabel",
  techStackSubtitle: "Dibangun dengan arsitektur modern untuk kecepatan, keandalan, dan kemudahan skalabilitas.",
  techStack: [
    { name: "Next.js / React / Astro", category: "Frontend Web", description: "Antarmuka responsif dan performa render instan." },
    { name: "Node.js / Golang", category: "Backend Logic", description: "API tangguh dan throughput tinggi." },
    { name: "PostgreSQL & Redis", category: "Data Tier", description: "Database relasional ACID dan caching super cepat." }
  ],
  faqTitle: "Pertanyaan yang Sering Ditanyakan",
  faqSubtitle: "Hal penting seputar proses pembuatan custom software di Gilabs.",
  faqs: [
    {
      question: "Kalau di tengah jalan ada fitur yang mau diubah atau ditambah, gimana?",
      answer: "Kami pakai pendekatan fleksibel. Fitur baru akan diestimasi scope dan biayanya secara transparan tanpa mengganggu timeline milestone yang sedang berjalan."
    },
    {
      question: "Apakah sistemnya bisa diintegrasikan dengan software yang udah kami pakai?",
      answer: "Bisa, selama software tersebut punya API atau database yang bisa diakses. Kami sering integrasikan ke WhatsApp, payment gateway, software akuntansi, dan sistem POS."
    },
    {
      question: "Source code-nya jadi milik siapa setelah project selesai?",
      answer: "100% milik kamu. Setelah pelunasan, seluruh source code, database schema, dan aset diserahkan sepenuhnya tanpa biaya lisensi berkelanjutan."
    },
    {
      question: "Apakah ada maintenance setelah sistemnya live?",
      answer: "Ada masa garansi bug fixes setelah deployment. Kami juga menyediakan opsi retainer bulanan kalau kamu butuh tim teknis untuk standby, update berkala, atau penambahan fitur berkelanjutan."
    }
  ],
  ctaTitle: "Punya Proses Bisnis yang Belum Ada Sistemnya?",
  ctaSubtitle: "Ceritakan alur kerja kamu, kami bantu petakan solusinya. Konsultasi awal gratis, tanpa jargon teknis yang membingungkan.",
  ctaButton: "Mulai Diskusi Gratis"
};
