import type { ServicePageData } from "./types";

export const ecommerceId: ServicePageData = {
  slug: "jasa-toko-online-ecommerce",
  category: "website",
  eyebrow: "Jasa Toko Online E-Commerce",
  title: "Toko Online yang Siap Jualan 24 Jam Tanpa Kamu Jaga",
  subtitle: "Dari katalog produk sampai pembayaran otomatis, semua kami siapkan biar kamu fokus urus stok dan kirim pesanan.",
  heroIllustration: "/images/services/ecommerce/hero-ecommerce.jpg",
  metaTitle: "Jasa Pembuatan Toko Online E-Commerce Profesional | Gilabs",
  metaDescription: "Toko online mandiri yang siap jualan 24 jam. Payment gateway Midtrans/Xendit otomatis, cek ongkir real-time, kelola stok mudah, dan 0% potongan marketplace.",
  keywords: [
    "jasa pembuatan toko online",
    "jasa web ecommerce",
    "jasa bikin website olshop",
    "jasa toko online midtrans",
    "jasa web toko online murah",
    "toko online profesional indonesia"
  ],
  primaryCtaText: "Konsultasi Gratis",
  secondaryCtaText: "Lihat Toko yang Sudah Dibuat",
  problemsTitle: "Jualan di Marketplace Aja Nggak Cukup",
  problemsSubtitle: "Tiga masalah mendasar ini yang sering mengikis margin keuntungan dan membatasi kendali bisnis Anda.",
  problems: [
    {
      pain: "01. Bergantung Marketplace",
      solution: "Algoritma berubah, biaya iklan naik, kamu nggak punya kendali penuh."
    },
    {
      pain: "02. Margin Tergerus",
      solution: "Biaya admin, ongkir, dan komisi platform makan untung kamu."
    },
    {
      pain: "03. Nggak Punya Data Pelanggan",
      solution: "Sulit bikin campaign ulang karena data pembeli ada di tangan platform lain."
    }
  ],
  featuresTitle: "Toko Sendiri, Aturan Sendiri",
  featuresSubtitle: "Tiga fondasi utama untuk membangun saluran penjualan mandiri yang menguntungkan.",
  features: [
    {
      title: "Branding Penuh",
      description: "Domain sendiri, desain sesuai identitas brand, bukan template generik."
    },
    {
      title: "Payment Gateway Terintegrasi",
      description: "Transfer bank, e-wallet, kartu kredit, semua otomatis masuk sistem."
    },
    {
      title: "Kelola Produk Mudah",
      description: "Update stok, harga, dan promo tanpa perlu tunggu developer."
    }
  ],
  packagesTitle: "Mulai Jualan Online dengan Sistem yang Tepat",
  packagesSubtitle: "Pilihan investasi transparan yang dirancang sesuai volume dan skala transaksi toko Anda.",
  packages: [
    {
      name: "BASIC",
      price: "Mulai Rp 5.000.000",
      description: "Untuk UMKM yang baru mulai jualan online",
      features: [
        "Katalog produk hingga 50 item",
        "Checkout dengan transfer manual & WhatsApp",
        "Desain mobile-first responsive",
        "Domain & hosting 1 tahun",
        "Revisi 2x"
      ]
    },
    {
      name: "STANDARD",
      price: "Mulai Rp 15.000.000",
      isPopular: true,
      description: "Untuk toko dengan volume transaksi lebih tinggi",
      features: [
        "Produk & kategori unlimited",
        "Payment gateway otomatis (QRIS, VA, E-Wallet)",
        "Integrasi cek ongkir real-time multi-kurir",
        "Dashboard laporan penjualan & invoice",
        "Domain & hosting 1 tahun",
        "Revisi 4x"
      ]
    },
    {
      name: "CUSTOM",
      price: "Hubungi Kami",
      description: "Untuk kebutuhan multi gudang atau multi cabang",
      features: [
        "Integrasi ERP / sistem inventory",
        "Multi-warehouse & multi-cabang",
        "Fitur sesuai model bisnis spesifik",
        "Dedicated project consultant & SLA"
      ]
    }
  ],
  techStackTitle: "Infrastruktur E-Commerce Tangguh",
  techStackSubtitle: "Dibangun dengan framework modern untuk menangani ribuan transaksi flash sale tanpa henti.",
  techStack: [
    { name: "Next.js / Astro", category: "Engine", description: "Performa rendering secepat kilat untuk halaman katalog." },
    { name: "Payment Gateway API", category: "Billing", description: "Integrasi resmi Midtrans & Xendit dengan enkripsi bank-grade." },
    { name: "Cloudflare Edge CDN", category: "Infra", description: "Keamanan transaksi dan uptime 99.9% di seluruh Indonesia." }
  ],
  faqTitle: "Pertanyaan Seputar Toko Online",
  faqSubtitle: "Hal yang sering ditanyakan seputar pembuatan dan operasional toko online mandiri.",
  faqs: [
    {
      question: "Payment gateway apa saja yang didukung?",
      answer: "Midtrans, Xendit, dan bisa disesuaikan kebutuhan (QRIS, Virtual Account BCA/Mandiri/BRI, GoPay, OVO, ShopeePay, dan Kartu Kredit)."
    },
    {
      question: "Apakah bisa integrasi ongkir otomatis?",
      answer: "Bisa, tersedia dari paket Standard ke atas dengan kalkulasi ongkir real-time terhubung kurir seperti JNE, J&T, SiCepat, dll."
    },
    {
      question: "Bagaimana kalau produk saya ribuan item?",
      answer: "Bisa, kami siapkan sistem import massal lewat Excel/CSV dan navigasi kategori bertingkat yang rapi."
    },
    {
      question: "Apakah ada biaya bulanan tambahan?",
      answer: "Ada biaya hosting tahunan setelah tahun pertama, transparan sejak awal tanpa komisi potongan penjualan dari Gilabs."
    }
  ],
  ctaTitle: "Bisnis Kamu Layak Punya Toko Sendiri",
  ctaSubtitle: "Nggak perlu lagi bergantung penuh sama marketplace orang lain.",
  ctaButton: "Mulai Konsultasi Gratis"
};
