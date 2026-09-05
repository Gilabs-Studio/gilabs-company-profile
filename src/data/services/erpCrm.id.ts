import type { ServicePageData } from "./types";

export const erpCrmId: ServicePageData = {
  slug: "jasa-pembuatan-erp-crm",
  category: "enterprise",
  eyebrow: "Sistem ERP & CRM Custom",
  title: "Satu Sistem untuk Operasional, Penjualan, dan Data Pelanggan Kamu",
  subtitle: "Berhenti kerja pakai belasan spreadsheet yang nggak saling nyambung. Kami bangun ERP dan CRM yang benar-benar sesuai proses bisnis kamu.",
  heroIllustration: "/images/services/erp-crm/hero-erp-crm.png",
  metaTitle: "Jasa Pembuatan Sistem ERP & CRM Custom Indonesia | Gilabs",
  metaDescription: "Jasa pembuatan sistem ERP dan CRM custom Indonesia. Integrasi operasional, stok gudang, penjualan, dan data pelanggan dalam satu sistem terpadu.",
  keywords: [
    "jasa pembuatan erp custom",
    "jasa pembuatan crm custom",
    "software erp indonesia",
    "sistem crm sales lapangan",
    "software inventory dan purchasing",
    "custom erp crm indonesia"
  ],
  primaryCtaText: "Diskusikan Kebutuhan Kamu",
  secondaryCtaText: "Lihat Sistem yang Sudah Dibuat",
  problemsTitle: "Tanda-tanda Bisnis Kamu Butuh ERP/CRM",
  problemsSubtitle: "Tiga kendala operasional yang menandakan bisnis Anda sudah melampaui batas kemampuan spreadsheet manual.",
  problems: [
    {
      pain: "Data Tersebar di Mana-mana",
      solution: "Stok di Excel, penjualan di WhatsApp, laporan keuangan terpisah lagi."
    },
    {
      pain: "Follow-up Pelanggan Sering Kelewat",
      solution: "Nggak ada sistem yang ingatkan siapa harus dihubungi dan kapan."
    },
    {
      pain: "Laporan Butuh Waktu Berhari-hari",
      solution: "Owner atau manajemen harus tunggu lama cuma buat lihat angka penjualan bulan ini."
    }
  ],
  featuresTitle: "Bagaimana Kami Menyusun Menu ERP & CRM Kamu",
  featuresSubtitle: "Supaya nggak membingungkan tim yang pakai, kami pisahkan sistem jadi dua sisi besar: operasional (ERP) dan hubungan pelanggan (CRM).",
  features: [
    {
      title: "Sisi ERP: Operasional & Sumber Daya",
      description: "Inventory stok real-time, purchasing PO, keuangan & akuntansi otomatis, HR & payroll, produksi BOM, dan multi-cabang."
    },
    {
      title: "Sisi CRM: Penjualan & Pelanggan",
      description: "Sales pipeline dari leads ke closing, riwayat kontak, jadwal follow-up otomatis, quotation/invoice, dan performa tim sales."
    }
  ],
  packagesTitle: "Sesuaikan dengan Skala Operasional Kamu",
  packagesSubtitle: "Investasi transparan tanpa biaya lisensi per user. Source code 100% menjadi aset milik perusahaan Anda.",
  packages: [
    {
      name: "BASIC",
      price: "Mulai Rp 5.000.000",
      isPopular: false,
      description: "Untuk bisnis kecil yang baru mulai butuh sistem terpusat",
      features: [
        "1-2 Modul Inti (misal: Inventory atau CRM Sales)",
        "Single User Role",
        "Laporan Dasar & Ekspor Data",
        "Database Setup & Cloud Hosting",
        "Garansi Bug Fixes 1 Bulan"
      ]
    },
    {
      name: "STANDARD",
      price: "Mulai Rp 15.000.000",
      isPopular: true,
      description: "Untuk bisnis dengan beberapa divisi yang perlu terintegrasi",
      features: [
        "3-5 Modul Terhubung Antar Divisi",
        "Multi User & Role Permission",
        "Dashboard Laporan Real-Time",
        "Notifikasi Otomatis (WhatsApp/Email)",
        "Garansi & Support 3 Bulan"
      ]
    },
    {
      name: "CUSTOM",
      price: "Hubungi Kami",
      isPopular: false,
      description: "Untuk enterprise dengan kebutuhan kompleks",
      features: [
        "Modul Lengkap ERP + CRM Terintegrasi Penuh",
        "Multi Cabang & Multi Gudang Real-Time",
        "Integrasi Sistem Pihak Ketiga (Akuntansi, POS, dsb)",
        "Audit Log Aktivitas & Security Hardening",
        "Dedicated Support & Maintenance SLA"
      ]
    }
  ],
  techStackTitle: "Arsitektur Enterprise Resilien",
  techStackSubtitle: "Dibangun dengan fondasi teknologi standar industri untuk konkurensi tinggi dan integritas data mutlak.",
  techStack: [
    { name: "PostgreSQL ACID", category: "Data Tier", description: "Database relasional berintegritas tinggi tanpa risiko inkonsistensi saldo." },
    { name: "Golang & Node.js", category: "Backend Engine", description: "Throughput tinggi sanggup melayani ribuan transaksi harian serentak." },
    { name: "Next.js & React", category: "Frontend Web", description: "Antarmuka dashboard cepat, interaktif, dan mudah digunakan tim operasional." }
  ],
  faqTitle: "Pertanyaan yang Sering Ditanyakan",
  faqSubtitle: "Hal penting seputar implementasi ERP dan CRM custom di Gilabs.",
  faqs: [
    {
      question: "Apakah ERP dan CRM harus dibangun sekaligus?",
      answer: "Tidak harus, bisa mulai dari salah satu modul dulu lalu dikembangkan bertahap."
    },
    {
      question: "Bagaimana kalau tim kami belum terbiasa pakai sistem digital?",
      answer: "Kami sediakan training dan dokumentasi penggunaan saat sistem live."
    },
    {
      question: "Apakah data kami aman?",
      answer: "Ya, termasuk backup berkala dan pengaturan akses berdasarkan role."
    },
    {
      question: "Bisa integrasi dengan software akuntansi yang sudah kami pakai?",
      answer: "Bisa, selama tersedia API atau akses data yang memungkinkan."
    }
  ],
  ctaTitle: "Berhenti Kejar Data yang Tersebar di Banyak Tempat",
  ctaSubtitle: "Mulai dari satu modul, kami bantu rancang sistem yang tumbuh bareng bisnis kamu. Konsultasi awal gratis, tanpa komitmen.",
  ctaButton: "Mulai Diskusi Gratis"
};
