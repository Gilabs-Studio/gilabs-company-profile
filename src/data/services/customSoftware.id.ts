import type { ServicePageData } from "./types";

export const customSoftwareId: ServicePageData = {
  slug: "jasa-pembuatan-custom-software",
  category: "software",
  eyebrow: "Custom Software & Web App",
  title: "Software Custom Sesuai Alur Kerja Bisnis",
  subtitle: "Bangun sistem yang pas saat software siap pakai tidak lagi cukup mendukung operasional Anda.",
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
  secondaryCtaText: "Pelajari Solusi",
  problemsEyebrow: "Masalah Operasional",
  problemsTitle: "Kapan Butuh Software Custom?",
  problemsSubtitle: "Tanda operasional bisnis Anda mulai terhambat alat kerja yang terbatas.",
  problems: [
    {
      pain: "01. Spreadsheet Berantakan",
      solution: "Banyak file tersebar, sulit dipantau, dan rawan salah input data.",
      metric: "Risiko data ganda & human error"
    },
    {
      pain: "02. Template Software Kaku",
      solution: "Alur kerja dipaksa ikut template software, bayar mahal untuk fitur yang tidak terpakai.",
      metric: "Biaya langganan terbuang & alur kerja terhambat"
    },
    {
      pain: "03. Sistem Belum Terintegrasi",
      solution: "Aplikasi jalan sendiri-sendiri, tim terpaksa input ulang data yang sama berkali-kali.",
      metric: "Waktu terbuang untuk salin data manual"
    }
  ],
  solutionsEyebrow: "Solusi Gilabs",
  solutionsTitle: "Kenapa Bangun Bersama Gilabs?",
  solutionsSubtitle: "Kami buatkan sistem yang efisien, mudah dipakai tim, dan siap berkembang.",
  solutions: [
    {
      number: "01",
      title: "Sesuai Alur Kerja",
      subtitle: "Kami petakan alur kerja Anda sebelum mulai membuat sistem.",
      image: "/images/services/custom-software/solution-tailored-process.png",
      alt: "Sistem yang Dirancang Sesuai Alur Kerja Nyata",
      points: [
        "Sistem mengikuti SOP perusahaan tanpa kompromi",
        "Formulir, validasi, dan hak akses sesuai struktur tim",
        "Tampilan simpel dan mudah dipahami staf lapangan"
      ]
    },
    {
      number: "02",
      title: "Mudah Dikembangkan",
      subtitle: "Bisa mulai dari fitur inti (MVP) lalu ditambah seiring bisnis jalan.",
      image: "/images/services/custom-software/solution-scalable-growth.png",
      alt: "Arsitektur Software Modular dan Skalabel",
      points: [
        "Investasi awal terukur dengan fokus ke fitur utama",
        "Tambah cabang, gudang, dan user tanpa kendala performa",
        "Struktur kode rapi siap diekspansi kapan saja"
      ]
    },
    {
      number: "03",
      title: "Terintegrasi Penuh",
      subtitle: "Bisa dihubungkan ke WhatsApp, payment gateway, sistem akuntansi, dan POS.",
      image: "/images/services/custom-software/solution-fully-integrated.png",
      alt: "Ekosistem Terintegrasi Penuh dengan API",
      points: [
        "Notifikasi otomatis ke WhatsApp dan email untuk approval cepat",
        "Sinkronisasi langsung ke sistem kasir, bank, atau akuntansi",
        "Koneksi API aman ke partner logistik dan pihak ketiga"
      ]
    }
  ],
  featuresEyebrow: "Jenis Sistem",
  featuresTitle: "Apa yang Bisa Kami Buatkan?",
  featuresSubtitle: "Dari sistem operasional internal hingga platform berskala besar.",
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
  processEyebrow: "Cara Kerja",
  processTitle: "Dari Diskusi Sampai Sistem Berjalan",
  processSubtitle: "Tahapan jelas dan transparan agar hasil sesuai target kebutuhan Anda.",
  processSteps: [
    {
      step: "01",
      stage: "Tahap 1",
      title: "Analisis Kebutuhan",
      description: "Bedah alur kerja, kendala operasional, dan kebutuhan pengguna sistem."
    },
    {
      step: "02",
      stage: "Tahap 2",
      title: "Perancangan Sistem",
      description: "Buat wireframe dan rancangan database agar alur jelas sebelum coding."
    },
    {
      step: "03",
      stage: "Tahap 3",
      title: "Development Bertahap",
      description: "Pengerjaan per modul dengan demo berkala untuk cek progress nyata."
    },
    {
      step: "04",
      stage: "Tahap 4",
      title: "Testing & Deployment",
      description: "Uji coba bareng tim Anda, panduan pemakaian, lalu rilis ke production."
    }
  ],
  techStackTitle: "Teknologi Modern & Skalabel",
  techStackSubtitle: "Dibangun dengan arsitektur modern untuk kecepatan, keandalan, dan kemudahan skalabilitas.",
  techStack: [
    { name: "Next.js / React / Astro", category: "Frontend Web", description: "Antarmuka responsif dan performa render instan." },
    { name: "Node.js / Golang", category: "Backend Logic", description: "API tangguh dan throughput tinggi." },
    { name: "PostgreSQL & Redis", category: "Data Tier", description: "Database relasional ACID dan caching super cepat." }
  ],
  faqEyebrow: "FAQ",
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
  ctaTitle: "Punya Alur Bisnis yang Butuh Sistem Khusus?",
  ctaSubtitle: "Ceritakan kebutuhan operasional Anda, kami bantu petakan solusinya. Konsultasi awal gratis.",
  ctaButton: "Mulai Diskusi Gratis"
};
