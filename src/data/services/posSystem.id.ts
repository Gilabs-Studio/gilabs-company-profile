import type { ServicePageData } from "./types";

export const posSystemId: ServicePageData = {
  slug: "jasa-pembuatan-aplikasi-kasir-pos",
  category: "software",
  eyebrow: "Jasa Pembuatan Aplikasi Kasir & POS Custom",
  title: "Aplikasi Kasir Pintar yang Terkoneksi Langsung dengan Gudang & Cabang",
  subtitle: "Sistem Point of Sale (POS) kustom berbasis web dan Android untuk retail modern, toko bangunan, toko furniture, F&B, dan distributor multi-cabang tanpa batasan jumlah transaksi.",
  heroIllustration: "/illustrations/pos-system-sketch.png",
  metaTitle: "Jasa Pembuatan Aplikasi Kasir POS Custom Multi-Cabang | Gilabs",
  metaDescription: "Jasa pembuatan aplikasi kasir POS custom untuk retail, toko bangunan, grosir, dan F&B. Terhubung multi-cabang, laporan stok real-time, dan dashboard owner.",
  keywords: [
    "jasa pembuatan aplikasi kasir custom",
    "software POS untuk toko bangunan",
    "aplikasi POS minimarket",
    "sistem kasir multi cabang",
    "software kasir toko furniture",
    "POS custom laporan stok realtime",
    "aplikasi kasir web offline online"
  ],
  primaryCtaText: "Konsultasi POS Custom",
  secondaryCtaText: "Lihat Fitur Kasir",
  problemsTitle: "Mengapa Aplikasi Kasir Langganan Sering Mengecewakan?",
  problemsSubtitle: "Fitur kaku, biaya langganan per-outlet yang mahal, dan tidak bisa menangani alur penjualan spesifik toko Anda.",
  problems: [
    {
      pain: "Biaya Bulanan per Outlet Terus Membengkak",
      solution: "POS Gilabs dimiliki permanen tanpa biaya langganan bulanan berapapun jumlah outlet Anda."
    },
    {
      pain: "Tidak Bisa Satuan Fleksibel (Misal: Toko Bangunan / Grosir)",
      solution: "Mendukung konversi satuan bertingkat (dus, pack, pcs, meter) dan sistem harga grosir bertingkat secara otomatis."
    },
    {
      pain: "Sistem Mati Saat Koneksi Internet Putus",
      solution: "Fitur transaksi offline tetap berjalan dan otomatis tersinkronisasi ke server pusat saat internet terhubung kembali."
    }
  ],
  featuresTitle: "Fitur Unggulan POS Gilabs",
  featuresSubtitle: "Dirancang untuk kemudahan kasir dan transparansi pengawasan pemilik bisnis.",
  features: [
    {
      title: "Dukungan Multi-Outlet & Multi-Gudang",
      description: "Pantau omzet dan mutasi stok dari puluhan cabang dalam satu dashboard owner terpusat secara real-time."
    },
    {
      title: "Pilihan Pembayaran Lengkap",
      description: "Mendukung tunai, QRIS dinamis/statis, transfer bank, kartu debit, hingga sistem piutang tempo (kasbon)."
    },
    {
      title: "Koneksi Printer Thermal & Barcode Scanner",
      description: "Kompatibel dengan printer struk Bluetooth/USB, barcode scanner 1D/2D, dan laci uang (cash drawer)."
    },
    {
      title: "Laporan Laba Kotor & Analisis Barang Laris",
      description: "Ketahui barang paling laku (fast-moving), sisa stok menipis, dan keuntungan bersih harian secara otomatis."
    }
  ],
  packagesTitle: "Pilihan Paket POS Custom",
  packagesSubtitle: "Solusi kasir tangguh untuk berbagai jenis model bisnis retail.",
  packages: [
    {
      name: "POS Retail & Toko Khusus",
      price: "Mulai Rp 12.000.000",
      description: "Cocok untuk minimarket, toko bangunan, toko elektronik, dan toko furniture.",
      features: [
        "Aplikasi Kasir Web / Android",
        "Konversi Satuan Bertingkat & Harga Grosir",
        "Pencatatan Stok Masuk & Keluar",
        "Cetak Struk & Barcode Label",
        "Dashboard Penjualan & Laba Harian",
        "Garansi Bebas Bug 3 Bulan",
        "Waktu Pengerjaan 3-4 Minggu"
      ]
    },
    {
      name: "Enterprise Multi-Branch POS",
      price: "Mulai Rp 28.000.000",
      isPopular: true,
      description: "Sistem kasir terpusat untuk jaringan retail puluhan cabang & distributor grosir.",
      features: [
        "Multi-Branch Central Server Sync",
        "Sistem Piutang Tempo & Limit Kredit",
        "Otorisasi Supervisor & Diskon Kustom",
        "Integrasi Akuntansi & Penggajian Kasir",
        "Aplikasi Owner Realtime di Smartphone",
        "Full Source Code & Training Staf",
        "Garansi 6 Bulan",
        "Waktu Pengerjaan 6-8 Minggu"
      ]
    }
  ],
  techStackTitle: "Teknologi Kasir Handal",
  techStackSubtitle: "Koneksi stabil dan proses transaksi secepat kilat.",
  techStack: [
    { name: "React & PWA", category: "Cashier App", description: "Bisa diinstal di tablet/PC kasir dengan fitur offline." },
    { name: "PostgreSQL Database", category: "Central DB", description: "Sinkronisasi data jutaan transaksi aman dan cepat." }
  ],
  faqTitle: "FAQ Aplikasi Kasir POS",
  faqSubtitle: "Pertanyaan seputar aplikasi kasir custom.",
  faqs: [
    {
      question: "Apakah bisa digunakan dengan mesin kasir dan printer lama kami?",
      answer: "Bisa. Sistem kami kompatibel dengan mayoritas printer thermal USB/Bluetooth, barcode scanner, dan cash drawer standar industri."
    }
  ],
  ctaTitle: "Tingkatkan Kecepatan & Kontrol Kasir Toko Anda",
  ctaSubtitle: "Diskusikan alur kasir dan transaksi outlet Anda bersama tim Gilabs.",
  ctaButton: "Hubungi Kami via WhatsApp"
};
