import type { ServicePageData } from "./types";

export const posSystemId: ServicePageData = {
  slug: "jasa-pembuatan-aplikasi-kasir-pos",
  category: "software",
  eyebrow: "Aplikasi Kasir / POS Custom",
  title: "Sistem Kasir yang Nggak Bikin Antrean Makin Panjang",
  subtitle: "Transaksi cepat, stok otomatis update, laporan penjualan langsung terlihat. Dibangun sesuai alur toko atau resto kamu, bukan template kaku.",
  heroIllustration: "/images/services/pos-system/hero-pos-system.png",
  metaTitle: "Jasa Pembuatan Aplikasi Kasir POS Custom | Gilabs",
  metaDescription: "Jasa pembuatan aplikasi kasir POS custom untuk retail, cafe, resto, dan toko multi cabang. Transaksi cepat, stok otomatis, mode offline, dan laporan real-time.",
  keywords: [
    "jasa pembuatan aplikasi kasir custom",
    "software POS resto dan cafe",
    "aplikasi kasir retail modern",
    "sistem kasir multi cabang",
    "pos custom mode offline",
    "aplikasi kasir tablet android",
    "software pos indonesia"
  ],
  primaryCtaText: "Diskusikan Kebutuhan Kamu",
  secondaryCtaText: "Lihat Sistem Kasir yang Sudah Dibuat",
  problemsTitle: "Kasir Manual Itu Rawan di Banyak Titik",
  problemsSubtitle: "Tiga masalah utama pencatatan manual yang sering merugikan operasional toko dan resto Anda.",
  problems: [
    {
      pain: "Selisih Stok Nggak Ketahuan",
      solution: "Pencatatan manual gampang salah, baru ketahuan pas stok opname."
    },
    {
      pain: "Antrean Menumpuk",
      solution: "Proses transaksi lambat, pelanggan nunggu lama di jam ramai."
    },
    {
      pain: "Laporan Penjualan Telat",
      solution: "Owner baru tahu omzet harian setelah kasir tutup dan rekap manual."
    }
  ],
  featuresTitle: "Yang Ada di Sistem Kasir Kami",
  featuresSubtitle: "Fitur lengkap yang dirancang khusus untuk mempermudah kasir dan memberikan kendali penuh pada pemilik bisnis.",
  features: [
    {
      title: "Transaksi Multi Metode Pembayaran",
      description: "Mendukung pembayaran tunai, QRIS dinamis/statis, transfer bank, e-wallet, dan kartu debit dalam satu layar."
    },
    {
      title: "Manajemen Stok Otomatis",
      description: "Setiap transaksi otomatis memotong stok barang jadi maupun bahan baku tanpa perlu rekap ulang."
    },
    {
      title: "Split Bill & Diskon",
      description: "Fitur pemisahan tagihan fleksibel per meja serta promo persentase, voucher, atau nominal kustom."
    },
    {
      title: "Cetak Struk / Struk Digital",
      description: "Koneksi printer thermal instan dan opsi pengiriman struk digital via WhatsApp / email ke pelanggan."
    },
    {
      title: "Laporan Penjualan Harian",
      description: "Pantau rekap omzet, laba kotor, metode pembayaran terpopuler, dan produk terlaris secara otomatis."
    },
    {
      title: "Multi Kasir & Multi Cabang",
      description: "Kelola banyak shift kasir dan pantau performa seluruh cabang toko Anda dalam satu dashboard terpusat."
    },
    {
      title: "Integrasi Printer & Barcode Scanner",
      description: "Kompatibel dengan printer thermal USB/Bluetooth, barcode scanner 1D/2D, dan cash drawer otomatis."
    },
    {
      title: "Mode Offline",
      description: "Kasir tetap dapat memproses transaksi saat koneksi internet terputus dan otomatis tersinkron saat online kembali."
    }
  ],
  packagesTitle: "Sesuaikan dengan Skala Toko atau Resto Kamu",
  packagesSubtitle: "Investasi transparan tanpa biaya langganan bulanan per outlet. Source code 100% menjadi aset milik Anda.",
  packages: [
    {
      name: "BASIC",
      price: "Mulai Rp 5.000.000",
      isPopular: false,
      description: "Untuk usaha dengan 1 titik kasir",
      features: [
        "Transaksi & Manajemen Stok Dasar",
        "1 Perangkat Kasir (Web / Android)",
        "Laporan Harian Sederhana",
        "Setup Database & Menu Toko",
        "Garansi Bug Fixes 1 Bulan"
      ]
    },
    {
      name: "STANDARD",
      price: "Mulai Rp 15.000.000",
      isPopular: true,
      description: "Untuk usaha dengan kebutuhan lebih lengkap",
      features: [
        "Multi Kasir dalam 1 Cabang",
        "Integrasi Printer & Barcode Scanner",
        "Laporan Lengkap & Export Data Excel/PDF",
        "Mode Offline Sinkronisasi Otomatis",
        "Garansi & Support 3 Bulan"
      ]
    },
    {
      name: "CUSTOM",
      price: "Hubungi Kami",
      isPopular: false,
      description: "Untuk bisnis dengan banyak cabang",
      features: [
        "Multi Cabang Terkonsolidasi Real-time",
        "Integrasi ke Sistem ERP / Akuntansi",
        "Fitur Khusus Sesuai Model Bisnis (Dine-in, Kitchen Display, dsb)",
        "Security Hardening & Role Permission Supervisor",
        "Dedicated Support & SLA Maintenance"
      ]
    }
  ],
  techStackTitle: "Teknologi Kasir Cepat & Tangguh",
  techStackSubtitle: "Kombinasi antarmuka kilat dengan sinkronisasi database relasional yang aman.",
  techStack: [
    { name: "React & PWA Offline", category: "POS Terminal", description: "Bisa diinstal di tablet Android maupun PC kasir dengan persistensi data offline." },
    { name: "PostgreSQL & SQLite", category: "Data Tier", description: "Integritas data transaksi tinggi tanpa risiko duplikasi atau struk hilang." },
    { name: "Node.js / Golang", category: "Sync Engine", description: "Sinkronisasi data stok kilat antar cabang dan pusat." }
  ],
  faqTitle: "Pertanyaan yang Sering Ditanyakan",
  faqSubtitle: "Hal penting seputar pembuatan sistem kasir POS custom di Gilabs.",
  faqs: [
    {
      question: "Apakah bisa dipakai di tablet biasa?",
      answer: "Bisa, kompatibel dengan tablet Android, iPad, maupun perangkat POS desktop khusus kasir."
    },
    {
      question: "Bagaimana kalau internet mati saat jam sibuk?",
      answer: "Tersedia mode offline, transaksi tetap berjalan lancar dan data otomatis tersinkronisasi ke cloud saat internet terhubung kembali."
    },
    {
      question: "Apakah bisa pantau beberapa cabang sekaligus?",
      answer: "Bisa, tersedia mulai dari paket Custom dengan dashboard konsolidasi owner yang dapat diakses langsung dari smartphone."
    },
    {
      question: "Apakah termasuk integrasi printer struk?",
      answer: "Termasuk mulai paket Standard, mendukung printer thermal USB, Bluetooth, maupun LAN/Wi-Fi."
    }
  ],
  ctaTitle: "Kasir yang Rapi, Laporan yang Nggak Bikin Pusing",
  ctaSubtitle: "Ceritakan alur transaksi bisnis kamu, kami bantu sistemkan biar lebih efisien. Konsultasi awal gratis, tanpa komitmen.",
  ctaButton: "Mulai Diskusi Gratis"
};
