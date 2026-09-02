import type { ServicePageData } from "./types";

export const erpCrmId: ServicePageData = {
  slug: "jasa-pembuatan-erp-crm",
  category: "enterprise",
  eyebrow: "Sistem ERP & CRM Kustom Indonesia",
  title: "Sistem ERP & CRM Kustom yang Menghubungkan Operasional, Gudang, dan Penjualan",
  subtitle: "Otomasi rantai pasok manufaktur, manajemen stok gudang multi-cabang, dan pipeline sales lapangan dalam satu platform terpadu yang dirancang khusus mengikuti proses bisnis Anda.",
  heroIllustration: "/illustrations/erp-crm-sketch.png",
  metaTitle: "Jasa Pembuatan Sistem ERP & CRM Custom Indonesia | Gilabs",
  metaDescription: "Jasa pembuatan ERP custom manufaktur, distributor, dan CRM sales lapangan terintegrasi WhatsApp. Bebas biaya lisensi tahunan, full source code milik Anda.",
  keywords: [
    "jasa pembuatan ERP custom",
    "jasa pembuatan CRM custom",
    "vendor ERP indonesia",
    "software ERP manufaktur custom",
    "CRM sales lapangan whatsapp",
    "software ERP distributor",
    "sistem ERP multi cabang",
    "custom CRM indonesia"
  ],
  primaryCtaText: "Konsultasi ERP / CRM",
  secondaryCtaText: "Lihat Modul Sistem",
  problemsTitle: "Kendala ERP Pabrikan / Off-the-shelf di Perusahaan Indonesia",
  problemsSubtitle: "Banyak implementasi ERP gagal karena sistem terlalu kaku dan biaya lisensi per user yang sangat mahal.",
  problems: [
    {
      pain: "Biaya Lisensi Tahunan Mencapai Ratusan Juta",
      solution: "ERP Custom Gilabs dimiliki 100% tanpa biaya perpanjangan lisensi per-user selamanya."
    },
    {
      pain: "Karyawan Enggan Pakai Karena Terlalu Rumit",
      solution: "Antarmuka (UI/UX) kami desain simpel, bersih, dan intuitif sehingga staf gudang dan admin mudah beradaptasi."
    },
    {
      pain: "Tidak Nyambung dengan WhatsApp & SOP Lokal",
      solution: "Integrasi langsung dengan WhatsApp Business API untuk notifikasi approval PO dan reminder tagihan piutang."
    }
  ],
  featuresTitle: "Modul Unggulan ERP & CRM Gilabs",
  featuresSubtitle: "Dapat dikustomisasi penuh sesuai departemen dan alur kerja perusahaan Anda.",
  features: [
    {
      title: "Modul Purchasing & Inventory Gudang",
      description: "Otomasi Purchase Request (PR), Purchase Order (PO), pencatatan batch number, mutasi antar cabang, dan kartu stok real-time."
    },
    {
      title: "Modul Produksi & Bill of Materials (BOM)",
      description: "Perhitungan HPP akurat, pelacakan proses kerja mesin pabrik (Work Order), dan efisiensi bahan baku."
    },
    {
      title: "CRM Monitoring Sales Lapangan",
      description: "Check-in kunjungan klien berbasis GPS, manajemen pipeline prospek B2B, dan riwayat follow-up terpusat."
    },
    {
      title: "Finance & Laporan Laba Rugi Otomatis",
      description: "Pencatatan faktur piutang (AR), utang dagang (AP), rekonsiliasi kas bank, serta neraca keuangan instan."
    }
  ],
  packagesTitle: "Skema Implementasi ERP & CRM",
  packagesSubtitle: "Pendekatan bertahap (phased rollout) untuk memastikan adopsi sistem berjalan mulus tanpa mengganggu operasional.",
  packages: [
    {
      name: "CRM Sales & Pipeline System",
      price: "Mulai Rp 25.000.000",
      description: "Fokus pada akselerasi penjualan B2B, tracking sales lapangan, dan follow-up prospek.",
      features: [
        "Manajemen Lead & Deal Pipeline",
        "Tracking GPS & Check-In Sales Lapangan",
        "Integrasi WhatsApp Chat History",
        "Pencatatan Penawaran & Surat Jalan",
        "Dashboard Omzet & Target Sales",
        "Pengerjaan 4-6 Minggu"
      ]
    },
    {
      name: "Custom ERP Core (Manufaktur / Distribusi)",
      price: "Mulai Rp 60.000.000",
      isPopular: true,
      description: "Sistem terpadu menyeluruh untuk inventaris, purchasing, produksi, dan finance.",
      features: [
        "Modul Inventory & Multi-Gudang",
        "Modul Purchasing & Alur Approval PO",
        "Modul Produksi / BOM / Work Order",
        "Invoicing, Faktur Pajak & Akuntansi",
        "Role Permissions & Audit Trail Lengkap",
        "Full Source Code & Training Karyawan",
        "Garansi & SLA Dedicated 6-12 Bulan",
        "Pengerjaan 8-16 Minggu"
      ]
    }
  ],
  techStackTitle: "Arsitektur Enterprise Resilien",
  techStackSubtitle: "Keamanan transaksi level perbankan dengan audit log tidak dapat dimanipulasi.",
  techStack: [
    { name: "PostgreSQL ACID", category: "Database", description: "Integritas relasional tinggi untuk data finansial." },
    { name: "Golang Microservices", category: "Backend", description: "Pemrosesan ribuan transaksi per detik tanpa lag." }
  ],
  faqTitle: "FAQ Sistem ERP & CRM",
  faqSubtitle: "Hal yang sering ditanyakan seputar implementasi ERP custom.",
  faqs: [
    {
      question: "Apakah bisa migrasi data historis dari Excel atau sistem lama?",
      answer: "Bisa. Tim kami menyediakan layanan pembersihan dan migrasi data pelanggan, stok awal, dan saldo piutang ke sistem baru."
    }
  ],
  ctaTitle: "Modernisasi Operasional Perusahaan Anda",
  ctaSubtitle: "Konsultasikan alur kerja dan rancangan ERP kustom Anda bersama Technical Lead Gilabs.",
  ctaButton: "Jadwalkan Diskusi via WhatsApp"
};
