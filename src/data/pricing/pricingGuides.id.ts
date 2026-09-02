export interface PricingTierDetail {
  title: string;
  priceRange: string;
  timeframe: string;
  idealFor: string;
  included: string[];
}

export interface PricingGuidePage {
  slug: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroIllustration: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  factorsTitle: string;
  factorsSubtitle: string;
  factors: { title: string; description: string }[];
  tiersTitle: string;
  tiersSubtitle: string;
  tiers: PricingTierDetail[];
  comparisonTitle: string;
  comparisonSubtitle: string;
  comparisonTable: { feature: string; template: string; customGilabs: string }[];
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
}

export const pricingGuidesId: Record<string, PricingGuidePage> = {
  "biaya-pembuatan-website": {
    slug: "biaya-pembuatan-website",
    eyebrow: "Panduan Biaya & Estimasi Harga 2026",
    title: "Berapa Sebenarnya Biaya Pembuatan Website Profesional di Indonesia?",
    subtitle: "Rincian transparan harga pembuatan website: dari landing page UMKM, company profile korporasi, hingga portal custom tanpa biaya tersembunyi.",
    heroIllustration: "/illustrations/pricing-calculator-sketch.png",
    metaTitle: "Biaya Pembuatan Website Perusahaan & Harga Jasa Web 2026 | Gilabs",
    metaDescription: "Panduan lengkap estimasi biaya pembuatan website perusahaan, harga jasa pembuatan website murah vs profesional, dan simulasi ROI investasi digital.",
    keywords: [
      "biaya pembuatan website perusahaan",
      "harga jasa pembuatan website",
      "biaya bikin web profesional",
      "estimasi harga website murah",
      "biaya website company profile",
      "daftar harga jasa web developer"
    ],
    factorsTitle: "Faktor Penentu Biaya Pembuatan Website",
    factorsSubtitle: "Mengapa harga website bisa bervariasi mulai dari jutaan hingga puluhan juta rupiah?",
    factors: [
      {
        title: "Tingkat Kustomisasi Desain",
        description: "Template gratisan tentu murah namun pasaran. Desain kustom eksklusif yang dirancang dari nol sesuai identitas brand membutuhkan keahlian UI/UX desainer khusus."
      },
      {
        title: "Performa & Kecepatan Loading (Stack)",
        description: "Website dengan teknologi modern (Next.js / Astro) memuat dalam waktu di bawah 1 detik, membutuhkan arsitektur engineer handal dibanding CMS jadul."
      },
      {
        title: "Kebutuhan Integrasi Fitur",
        description: "Fitur kalkulator otomatis, sistem multi-bahasa, payment gateway, atau sinkronisasi database internal mempengaruhi kompleksitas waktu pengerjaan."
      },
      {
        title: "Kepemilikan Source Code & Lisensi",
        description: "Apakah Anda memiliki hak milik penuh atas kode program, atau terikat sistem sewa/langganan bulanan dari vendor?"
      }
    ],
    tiersTitle: "Estimasi Biaya Berdasarkan Jenis Website",
    tiersSubtitle: "Standar kisaran investasi realistis di industri software development saat ini.",
    tiers: [
      {
        title: "Landing Page Promosi / Iklan",
        priceRange: "Rp 1.800.000 - Rp 3.500.000",
        timeframe: "3 - 5 Hari Kerja",
        idealFor: "UMKM, produk tunggal, peluncuran event, atau kampanye Google/Meta Ads.",
        included: [
          "1 Halaman Long-Form Responsif",
          "Copywriting Berorientasi Penjualan",
          "Load Speed Sub-Detik",
          "Integrasi WhatsApp & Form Kontak",
          "Domain (.com) & Hosting 1 Tahun"
        ]
      },
      {
        title: "Company Profile Bisnis & Korporat",
        priceRange: "Rp 4.500.000 - Rp 10.000.000",
        timeframe: "7 - 14 Hari Kerja",
        idealFor: "Perusahaan B2B, kontraktor, manufaktur, dan instansi untuk tender proyek.",
        included: [
          "Hingga 5 - 10 Halaman Terstruktur",
          "CMS Berita, Galeri & Portofolio",
          "Dukungan Multi-Bahasa (Bilingual)",
          "On-Page SEO Pro + Schema Data",
          "Email Bisnis Resmi (@perusahaan.com)"
        ]
      },
      {
        title: "Custom Web App / Portal Sistem",
        priceRange: "Rp 15.000.000 - Rp 50.000.000+",
        timeframe: "3 - 8 Minggu",
        idealFor: "Perusahaan yang membutuhkan portal klien, integrasi API, atau otomasi operasional.",
        included: [
          "Arsitektur Kustom Frontend + Backend",
          "Role-Based User Permissions",
          "Integrasi Database & API Pihak Ketiga",
          "Full Source Code Transfer",
          "Dedicated SLA & Security Auditing"
        ]
      }
    ],
    comparisonTitle: "Perbandingan: Template Murahan vs Custom Gilabs",
    comparisonSubtitle: "Memilih vendor yang tepat menghemat puluhan juta rupiah dari biaya perbaikan di kemudian hari.",
    comparisonTable: [
      { feature: "Kecepatan Render (PageSpeed)", template: "Lambat (Skor 30-50, 4-8 detik)", customGilabs: "Super Cepat (Skor 95-100, < 1 detik)" },
      { feature: "Keamanan dari Serangan Malware", template: "Rentan plugin kadaluarsa & deface", customGilabs: "Headless Architecture + Cloudflare Pro" },
      { feature: "Kepemilikan Source Code", template: "Sering ditahan / lisensi terkunci", customGilabs: "100% Full Git Code Transfer Milik Anda" },
      { feature: "Dukungan SEO Google", template: "Struktur semantik berantakan", customGilabs: "JSON-LD Schema + Clean On-Page SEO" }
    ],
    faqTitle: "FAQ Biaya Pembuatan Website",
    faqs: [
      {
        question: "Apakah ada biaya perpanjangan tahunan?",
        answer: "Hanya biaya standar domain dan cloud server di tahun kedua (sekitar Rp 600rb - Rp 1.5jt per tahun). Tidak ada biaya lisensi software ke Gilabs."
      },
      {
        question: "Bisa bayar bertahap (termin)?",
        answer: "Bisa. Skema standar kami adalah DP 50% di awal kontrak, dan pelunasan 50% setelah website selesai diuji dan siap live."
      }
    ],
    ctaTitle: "Ingin Hitung Estimasi Website Anda?",
    ctaSubtitle: "Konsultasikan kebutuhan fitur Anda untuk mendapatkan penawaran resmi yang transparan.",
    ctaButton: "Hitung Biaya via WhatsApp"
  },
  "biaya-buat-aplikasi-mobile": {
    slug: "biaya-buat-aplikasi-mobile",
    eyebrow: "Panduan Biaya Aplikasi Mobile 2026",
    title: "Estimasi Biaya Pembuatan Aplikasi Mobile Android & iOS",
    subtitle: "Ketahui secara rinci komponen biaya pembuatan aplikasi mobile mulai dari UI/UX, backend API, hingga biaya rilis ke Play Store dan App Store.",
    heroIllustration: "/illustrations/pricing-calculator-sketch.png",
    metaTitle: "Biaya Buat Aplikasi Mobile Android & iOS 2026 | Gilabs",
    metaDescription: "Panduan lengkap biaya pembuatan aplikasi mobile Android dan iOS. Estimasi harga MVP startup, aplikasi bisnis, dan e-commerce dengan Flutter.",
    keywords: [
      "biaya buat aplikasi mobile",
      "harga jasa pembuatan aplikasi android",
      "biaya pembuatan aplikasi ios",
      "estimasi harga aplikasi flutter",
      "biaya rilis aplikasi play store app store"
    ],
    factorsTitle: "Komponen Biaya Pengembangan Mobile App",
    factorsSubtitle: "Elemen teknis yang membentuk total biaya pembuatan aplikasi mobile profesional.",
    factors: [
      {
        title: "Platform Target (Android vs iOS vs Keduanya)",
        description: "Mengembangkan secara native terpisah memakan biaya ganda. Dengan teknologi Flutter, Gilabs menghasilkan kedua platform dengan 1 basis kode hemat biaya."
      },
      {
        title: "Kebutuhan Backend API & Database Realtime",
        description: "Aplikasi mobile membutuhkan server backend yang memproses login pengguna, transaksi pembayaran, dan sinkronisasi data secara aman."
      },
      {
        title: "Integrasi Hardware & Fitur Khusus",
        description: "Penggunaan GPS geofencing, integrasi kamera barcode scanner, push notification, dan payment gateway mempengaruhi durasi sprint developer."
      }
    ],
    tiersTitle: "Kisaran Biaya Aplikasi Mobile",
    tiersSubtitle: "Estimasi anggaran realistis untuk pembuatan aplikasi mobile.",
    tiers: [
      {
        title: "Aplikasi Operasional Tim Lapangan (MVP)",
        priceRange: "Rp 18.000.000 - Rp 35.000.000",
        timeframe: "4 - 6 Minggu",
        idealFor: "Presensi karyawan, tracking sales lapangan, pencatatan stok gudang.",
        included: [
          "Aplikasi Flutter (Android & iOS)",
          "Backend REST API & Database",
          "Fitur GPS & Kamera Scanner",
          "Web Panel Admin Pengawas",
          "Garansi Bebas Bug 3 Bulan"
        ]
      },
      {
        title: "Aplikasi Konsumen / E-Commerce / Startup",
        priceRange: "Rp 40.000.000 - Rp 90.000.000+",
        timeframe: "8 - 14 Minggu",
        idealFor: "Aplikasi publik dengan payment gateway, chat, dan membership poin.",
        included: [
          "UI/UX Desain Kustom Interaktif",
          "Integrasi Midtrans / Xendit Payment",
          "Push Notification Firebase",
          "Setup Play Store & App Store Account",
          "Garansi & Pendampingan 6 Bulan"
        ]
      }
    ],
    comparisonTitle: "Keuntungan Flutter Gilabs vs Native Terpisah",
    comparisonSubtitle: "Mengapa arsitektur Flutter menjadi standar industri startup & korporat global saat ini.",
    comparisonTable: [
      { feature: "Biaya Pengembangan", template: "2x Lipat (Tim iOS + Tim Android)", customGilabs: "Hemat 40-50% (Single Codebase)" },
      { feature: "Kecepatan Rilis Fitur Baru", template: "Rilis Android & iOS sering beda waktu", customGilabs: "Rilis Serentak di Play Store & App Store" },
      { feature: "Performa & Kemulusan Animasi", template: "Native 60fps", customGilabs: "Native Compiled 60-120fps" }
    ],
    faqTitle: "FAQ Biaya Aplikasi Mobile",
    faqs: [
      {
        question: "Berapa biaya akun developer Google Play dan Apple App Store?",
        answer: "Akun Google Play Console berbiaya $25 (sekali seumur hidup). Akun Apple Developer berbiaya $99 per tahun. Biaya ini dibayarkan langsung ke pihak Google dan Apple."
      }
    ],
    ctaTitle: "Miliki Aplikasi Mobile untuk Bisnis Anda",
    ctaSubtitle: "Diskusikan roadmap fitur aplikasi Anda bersama Mobile Architect Gilabs.",
    ctaButton: "Konsultasi Biaya Aplikasi"
  },
  "estimasi-harga-software-custom": {
    slug: "estimasi-harga-software-custom",
    eyebrow: "Estimasi Biaya Software House 2026",
    title: "Panduan Estimasi Harga Pembuatan Custom Software, ERP, & CRM",
    subtitle: "Pahami cara menghitung anggaran pengembangan sistem informasi perusahaan kustom berdasarkan Scope of Work (SOW) dan kompleksitas alur bisnis.",
    heroIllustration: "/illustrations/pricing-calculator-sketch.png",
    metaTitle: "Estimasi Harga Software Custom, ERP & CRM Enterprise | Gilabs",
    metaDescription: "Simulasi dan estimasi harga pembuatan software custom perusahaan, sistem ERP, CRM, dan sistem informasi manajemen di Indonesia. Transparan & full code ownership.",
    keywords: [
      "estimasi harga software custom",
      "biaya pembuatan ERP custom",
      "harga software CRM perusahaan",
      "biaya pembuatan software house",
      "biaya sistem informasi manajemen"
    ],
    factorsTitle: "Variabel Biaya Pengembangan Custom Software",
    factorsSubtitle: "Bagaimana software house profesional mengkalkulasi anggaran proyek enterprise.",
    factors: [
      {
        title: "Jumlah Modul & Kompleksitas Logika Bisnis",
        description: "Modul inventaris multi-gudang dan rumus Bill of Materials pabrik membutuhkan arsitektur data lebih mendalam dibanding modul data karyawan standar."
      },
      {
        title: "Jumlah Pengguna & Skala Transaksi",
        description: "Sistem yang menangani ribuan transaksi per detik memerlukan database sharding, caching Redis, dan infrastruktur cloud yang kuat."
      },
      {
        title: "Kebutuhan Integrasi API & Hardware",
        description: "Sinkronisasi mesin fingerprint, barcode scanner industri, WhatsApp API, atau integrasi core banking."
      }
    ],
    tiersTitle: "Rentang Biaya Software Enterprise",
    tiersSubtitle: "Perkiraan investasi untuk digitalisasi proses bisnis perusahaan Anda.",
    tiers: [
      {
        title: "Sistem Informasi Departemen",
        priceRange: "Rp 15.000.000 - Rp 35.000.000",
        timeframe: "3 - 5 Minggu",
        idealFor: "Sistem pengajuan cuti & payroll HR, sistem ticketing, atau inventaris cabang tunggal.",
        included: [
          "5-8 Modul Fungsional",
          "Role Admin & Multi-Staff",
          "Ekspor Laporan PDF & Excel",
          "Full Source Code Handover"
        ]
      },
      {
        title: "Integrated ERP / CRM Core",
        priceRange: "Rp 45.000.000 - Rp 150.000.000+",
        timeframe: "8 - 16 Minggu",
        idealFor: "Perusahaan manufaktur, distribusi besar, dan retail puluhan cabang.",
        included: [
          "Modul Inventory, Purchasing, Sales, Finance",
          "Integrasi WhatsApp API Otomatis",
          "Multi-Branch Cloud Data Consolidation",
          "Audit Trail Log Aktivitas Keuangan",
          "Garansi & SLA Dedicated 6-12 Bulan"
        ]
      }
    ],
    comparisonTitle: "Beli Putus Custom Software vs Software SaaS Bulanan",
    comparisonSubtitle: "Analisis penghematan biaya operasional perusahaan dalam jangka waktu 3-5 tahun.",
    comparisonTable: [
      { feature: "Biaya Lisensi Tahun ke-2 ke atas", template: "Tetap bayar ratusan juta setiap tahun", customGilabs: "Rp 0 (Sistem milik Anda sepenuhnya)" },
      { feature: "Kustomisasi Alur SOP", template: "Sangat terbatas / tidak bisa", customGilabs: "100% Bebas Dikembangkan Sesuai SOP" },
      { feature: "Kerahasiaan Database Bisnis", template: "Disimpan di server pihak ketiga", customGilabs: "Disimpan di Server Milik Perusahaan Anda" }
    ],
    faqTitle: "FAQ Estimasi Harga Software",
    faqs: [
      {
        question: "Bagaimana cara mendapatkan penawaran harga resmi (Proposal SOW)?",
        answer: "Silakan hubungi kami untuk sesi diskusi kebutuhan (online via Zoom atau offline di kantor Anda). Tim kami akan menyusun dokumen Scope of Work dan rincian biaya resmi dalam 1-2 hari kerja."
      }
    ],
    ctaTitle: "Dapatkan Dokumen Estimasi Biaya Resmi",
    ctaSubtitle: "Hubungi tim technical architect Gilabs untuk konsultasi scoping proyek Anda secara gratis.",
    ctaButton: "Minta Estimasi SOW via WhatsApp"
  }
};
