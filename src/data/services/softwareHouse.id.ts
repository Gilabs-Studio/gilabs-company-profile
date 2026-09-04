import type { ServicePageData } from "./types";

export const softwareHouseId: ServicePageData = {
  slug: "software-house-indonesia",
  category: "software",
  eyebrow: "Software House Indonesia",
  title: "Partner Teknologi untuk Bisnis yang Serius Bertumbuh",
  subtitle: "Dari ide sampai sistem yang jalan tiap hari, kami bangun software yang benar-benar dipakai tim kamu, bukan cuma demo yang bagus di presentasi.",
  heroIllustration: "/images/services/software-house/hero-dashboard-dark.png",
  metaTitle: "Software House Indonesia Terpercaya | Gilabs Engineering Partner",
  metaDescription: "Software house Indonesia terpercaya untuk custom software, sistem internal, web app, dan mobile app. 100% kepemilikan source code tanpa biaya lisensi per user.",
  keywords: [
    "software house indonesia",
    "jasa pembuatan custom software",
    "software development agency",
    "software house jakarta",
    "software house semarang",
    "vendor software terpercaya",
    "custom erp crm indonesia",
    "web application developer"
  ],
  primaryCtaText: "Diskusikan Kebutuhan Kamu",
  secondaryCtaText: "Lihat Studi Kasus",
  problemsTitle: "Software Off-the-Shelf Nggak Selalu Cocok",
  problemsSubtitle: "Tiga batasan utama software siap pakai yang sering menghambat ekspansi bisnis kamu.",
  problems: [
    {
      pain: "Proses Bisnis Unik",
      solution: "Software siap pakai dipaksa ikut alur mereka, bukan alur kamu."
    },
    {
      pain: "Biaya Lisensi Menumpuk",
      solution: "Bayar per user tiap bulan, makin besar tim makin mahal tanpa batas."
    },
    {
      pain: "Data Nggak Sepenuhnya Milik Kamu",
      solution: "Terikat vendor, sulit migrasi, serta risiko keamanan data bisnis."
    }
  ],
  featuresTitle: "Apa yang Bisa Kami Bangun untuk Kamu?",
  featuresSubtitle: "Solusi engineering menyeluruh yang disesuaikan dengan alur operasional bisnis Anda.",
  features: [
    {
      title: "Custom Web Application",
      description: "Sistem internal, portal klien, dan platform SaaS yang dirancang spesifik untuk kebutuhan bisnismu."
    },
    {
      title: "Mobile Apps (iOS & Android)",
      description: "Aplikasi operasional lapangan, customer app, dan manajemen tim mobile responsif."
    },
    {
      title: "ERP & CRM Sederhana",
      description: "Sesuai alur bisnismu, tanpa fitur mubazir yang bikin bingung tim operasional."
    },
    {
      title: "Integrasi Sistem & API",
      description: "Hubungkan software lama ke sistem baru, payment gateway, atau layanan pihak ketiga tanpa batas."
    },
    {
      title: "Maintenance & Code Audit",
      description: "Lanjutkan atau perbaiki project yang mangkrak dengan standar kode bersih dan refactoring terarah."
    }
  ],
  packagesTitle: "Investasi Sesuai Skala Kebutuhan",
  packagesSubtitle: "Estimasi biaya transparan tanpa biaya lisensi per-user bulanan. Source code 100% milik Anda.",
  packages: [
    {
      name: "BASIC",
      price: "Mulai Rp 5.000.000",
      isPopular: false,
      description: "Cocok untuk: MVP, sistem internal sederhana, automasi satu alur kerja spesifik",
      features: [
        "1 Modul/Alur Utama",
        "Web-based Responsive",
        "Database Setup",
        "Basic Authentication & Role",
        "Garansi Bug Fixes 1 Bulan"
      ]
    },
    {
      name: "STANDARD",
      price: "Mulai Rp 15.000.000",
      isPopular: true,
      description: "Cocok untuk: Sistem operasional bisnis, CRM/ERP custom skala UKM",
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
      description: "Cocok untuk: Platform skala besar, arsitektur kompleks, kebutuhan high traffic",
      features: [
        "Arsitektur Microservices / Scalable",
        "Multi-platform (Web + Mobile App)",
        "Integrasi Sistem Legacy & Third-party",
        "Security Hardening & Audit Log",
        "Dedicated Support & SLA"
      ]
    }
  ],
  techStackTitle: "Tech Stack Modern & Skalabel",
  techStackSubtitle: "Dibangun dengan teknologi berstandar industri demi performa, stabilitas, dan kemudahan perawatan.",
  techStack: [
    { name: "Golang & Node.js", category: "Backend Engine", description: "Performa konkurensi tinggi dan throughput cepat." },
    { name: "React, Next.js, Astro", category: "Frontend Web", description: "Antarmuka responsif dan performa render instan." },
    { name: "Flutter & React Native", category: "Mobile Apps", description: "Aplikasi cross-platform iOS & Android dengan satu basis kode." },
    { name: "PostgreSQL & Redis", category: "Data Tier", description: "Penyimpanan data relasional berintegritas tinggi dan caching kilat." }
  ],
  faqTitle: "FAQ Pengembangan Software",
  faqSubtitle: "Hal penting seputar proses kemitraan pengembangan software di Gilabs.",
  faqs: [
    {
      question: "Berapa lama estimasi pengerjaan sebuah project software?",
      answer: "Tergantung kompleksitas. Project sederhana (MVP) biasanya 3-6 minggu. Sistem yang lebih kompleks seperti ERP/CRM custom butuh 2-4 bulan. Kami selalu tentukan timeline yang realistis di awal sebelum mulai."
    },
    {
      question: "Apakah source code jadi milik kami setelah project selesai?",
      answer: "Ya, 100%. Source code sepenuhnya menjadi aset milik perusahaan kamu setelah pelunasan, lengkap dengan dokumentasi dan akses repository."
    },
    {
      question: "Bagaimana kalau di tengah jalan ada fitur tambahan yang ingin dibuat?",
      answer: "Kami menggunakan pendekatan fleksibel (Change Request). Fitur baru akan diestimasi scope dan biayanya secara transparan tanpa mengganggu timeline milestone yang sedang berjalan."
    },
    {
      question: "Apakah ada dukungan teknis setelah software resmi digunakan?",
      answer: "Setiap project dilengkapi masa garansi bug fixes (1-3 bulan tergantung paket). Setelahnya, kami menyediakan paket retainer bulanan untuk maintenance, server monitoring, dan penambahan fitur berkelanjutan."
    }
  ],
  ctaTitle: "Ceritakan Masalah Bisnis Kamu, Kami Bantu Cari Solusinya",
  ctaSubtitle: "Konsultasi awal gratis. Tanpa komitmen, tanpa jargon teknis yang membingungkan.",
  ctaButton: "Jadwalkan Diskusi Gratis"
};
