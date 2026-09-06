import type { ServicePageData } from "./types";

export const posSystemId: ServicePageData = {
  slug: "jasa-pembuatan-aplikasi-kasir-pos",
  category: "software",
  eyebrow: "Aplikasi Kasir / POS Custom",
  title: "Sistem Kasir Cepat Tanpa Antrean Panjang",
  subtitle: "Transaksi cepat, stok otomatis terpotong, dan laporan penjualan real-time. Disesuaikan dengan alur bisnis Anda tanpa template kaku.",
  heroIllustration: "/images/services/pos-system/hero-pos-system.png",
  heroImageAlt: "Antarmuka Kasir POS Modern - Gilabs",
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
  primaryCtaText: "Diskusikan Kebutuhan Anda",
  secondaryCtaText: "Lihat Solusi",
  problemsEyebrow: "Masalah Operasional",
  problemsTitle: "Kasir Manual Rawan Selisih dan Antrean",
  problemsSubtitle: "Tiga kendala operasional kasir manual yang sering merugikan toko dan resto.",
  problems: [
    {
      pain: "01. Selisih Stok Sulit Dilacak",
      solution: "Pencatatan manual rawan keliru dan baru disadari saat stok opname berkala.",
      metric: "Memicu selisih barang dan potensi kebocoran omzet"
    },
    {
      pain: "02. Antrean Kasir Menumpuk",
      solution: "Proses transaksi yang lambat membuat pelanggan menunggu lama pada jam sibuk.",
      metric: "Menurunkan kepuasan dan kenyamanan pelanggan"
    },
    {
      pain: "03. Rekap Penjualan Terlambat",
      solution: "Owner baru mengetahui omzet harian setelah toko tutup dan rekap manual selesai.",
      metric: "Sulit mengambil keputusan tanpa data real-time"
    }
  ],
  solutionsEyebrow: "Solusi Kasir",
  solutionsTitle: "Operasional Kasir Lebih Cepat dan Efisien",
  solutionsSubtitle: "Antarmuka kasir responsif dengan sinkronisasi data otomatis ke inventori toko Anda.",
  solutions: [
    {
      number: "01",
      title: "Transaksi Cepat",
      subtitle: "Interface simpel, kasir baru pun bisa langsung pakai tanpa training lama.",
      image: "/images/services/pos-system/solution-fast-transactions.png",
      alt: "Antarmuka Kasir POS Cepat dan Intuitif",
      points: [
        "Desain UI kasir responsif dan minim klik untuk checkout kilat",
        "Pencarian menu dan produk instan via barcode scanner atau kategori visual",
        "Fitur split bill meja, diskon persentase, dan QRIS dinamis dalam satu klik"
      ]
    },
    {
      number: "02",
      title: "Stok Update Otomatis",
      subtitle: "Setiap transaksi langsung mengurangi stok tanpa perlu rekap atau input manual berulang.",
      image: "/images/services/pos-system/solution-auto-inventory.png",
      alt: "Sistem Pengurangan Stok Otomatis Kasir",
      points: [
        "Stok barang jadi dan bahan baku resto otomatis terpotong saat transaksi",
        "Notifikasi otomatis saat stok barang menipis di bawah batas aman",
        "Mencegah overselling dan memangkas waktu rekonsiliasi stok opname berkala"
      ]
    },
    {
      number: "03",
      title: "Laporan Real-time",
      subtitle: "Owner bisa pantau omzet dari mana saja, kapan saja, langsung dari HP.",
      image: "/images/services/pos-system/solution-realtime-insights.png",
      alt: "Dashboard Laporan Penjualan Real-time",
      points: [
        "Pantau grafik omzet harian, laba kotor, dan jam sibuk toko secara real-time",
        "Rekap shift kasir transparan untuk cegah selisih uang di laci kasir",
        "Ekspor laporan penjualan ke format Excel dan PDF siap audit dalam satu klik"
      ]
    }
  ],
  featuresEyebrow: "Fitur Utama",
  featuresTitle: "Fitur Lengkap Sistem Kasir",
  featuresSubtitle: "Dirancang untuk mempermudah kasir bertransaksi dan memberi kendali penuh pada pemilik bisnis.",
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
      title: "Split Bill & Diskon Fleksibel",
      description: "Fitur pemisahan tagihan per meja serta promo persentase, voucher, atau nominal kustom."
    },
    {
      title: "Cetak & Struk Digital",
      description: "Koneksi printer thermal instan dan opsi pengiriman struk digital via WhatsApp atau email ke pelanggan."
    },
    {
      title: "Laporan Penjualan Harian",
      description: "Pantau rekap omzet, laba kotor, metode pembayaran terpopuler, dan produk terlaris secara otomatis."
    },
    {
      title: "Multi Kasir & Hak Akses",
      description: "Kelola banyak shift kasir dengan hak akses wewenang berbeda (kasir, supervisor, owner) secara terpusat."
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
  techStackTitle: "Teknologi Kasir Cepat & Tangguh",
  techStackSubtitle: "Kombinasi antarmuka kilat dengan sinkronisasi database relasional yang aman.",
  techStack: [
    { name: "React & PWA Offline", category: "POS Terminal", description: "Bisa diinstal di tablet Android maupun PC kasir dengan persistensi data offline." },
    { name: "PostgreSQL & SQLite", category: "Data Tier", description: "Integritas data transaksi tinggi tanpa risiko duplikasi atau struk hilang." },
    { name: "Node.js / Golang", category: "Sync Engine", description: "Sinkronisasi data stok kilat antar cabang dan pusat." }
  ],
  faqEyebrow: "FAQ",
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
      answer: "Bisa, tersedia dashboard konsolidasi owner yang dapat diakses langsung dari smartphone."
    },
    {
      question: "Apakah termasuk integrasi printer struk?",
      answer: "Ya, mendukung printer thermal USB, Bluetooth, maupun LAN/Wi-Fi."
    }
  ],
  ctaTitle: "Buat Sistem Kasir yang Sesuai Bisnis Anda",
  ctaSubtitle: "Konsultasikan alur transaksi toko atau resto Anda bersama kami. Kami bantu rancang sistem kasir yang efisien.",
  ctaButton: "Mulai Diskusi Gratis"
};
