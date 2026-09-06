import type { ServicePageData } from "./types";

export const erpCrmId: ServicePageData = {
  slug: "jasa-pembuatan-erp-crm",
  category: "enterprise",
  eyebrow: "Sistem ERP & CRM Custom",
  title: "Sistem Terpadu Operasional & Sales",
  subtitle: "Tinggalkan belasan spreadsheet terpisah yang memperlambat tim. Kami bangun ERP dan CRM terintegrasi yang presisi mengikuti proses bisnis kamu.",
  heroIllustration: "/images/services/erp-crm/hero-erp-crm.png",
  heroImageAlt: "Enterprise ERP & CRM Operations Dashboard Showcase - Gilabs",
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
  secondaryCtaText: "Lihat Solusi Sistem",
  problemsEyebrow: "Masalah yang Sering Ditemui",
  problemsTitle: "Tanda-tanda Bisnis Kamu Butuh ERP/CRM",
  problemsSubtitle: "Tiga kendala operasional yang menandakan bisnis Anda sudah melampaui batas kemampuan spreadsheet manual.",
  problems: [
    {
      pain: "01. Data Tidak Terintegrasi",
      solution: "Stok di Excel, penjualan di WhatsApp, laporan keuangan terpisah lagi.",
      metric: "Data terisolasi & proses rekonsiliasi manual yang melelahkan"
    },
    {
      pain: "02. Prospek Potensial Terlupakan",
      solution: "Tanpa pengingat otomatis, tim sales mudah lupa jadwal follow-up prospek potensial.",
      metric: "Peluang omzet terbuang karena prospek terlupakan"
    },
    {
      pain: "03. Laporan Lambat & Manual",
      solution: "Owner atau manajemen harus tunggu lama cuma buat lihat angka penjualan bulan ini.",
      metric: "Keputusan bisnis lambat akibat laporan tidak real-time"
    }
  ],
  solutionsEyebrow: "Solusi & Nilai Tambah",
  solutionsTitle: "Satu Sumber Data untuk Seluruh Tim",
  solutionsSubtitle: "Sistem operasi bisnis yang menghubungkan seluruh departemen dengan alur kerja terpusat dan transparan.",
  solutions: [
    {
      number: "01",
      title: "Terintegrasi Antar Divisi",
      subtitle: "Sales, gudang, keuangan, semua baca dari satu sumber data yang sama.",
      image: "/images/services/erp-crm/solution-integrated-divisions.png",
      alt: "Integrasi Data Menyeluruh Antar Divisi",
      points: [
        "Saat sales closing order, stok gudang otomatis terpotong secara real-time",
        "Divisi keuangan langsung menerbitkan invoice tanpa perlu input ulang",
        "Mencegah kesalahan rekap antar tim dan data ganda yang merugikan"
      ]
    },
    {
      number: "02",
      title: "Custom Sesuai Alur Kerja",
      subtitle: "Bukan template generik, modul dibangun mengikuti proses bisnis kamu.",
      image: "/images/services/erp-crm/solution-bespoke-workflow.png",
      alt: "Modul Sistem Disesuaikan Presisi dengan SOP",
      points: [
        "Alur approval berjenjang mengikuti struktur wewenang nyata di kantor Anda",
        "Rumus kalkulasi HPP, margin diskon, dan komisi sales sesuai aturan bisnis",
        "Tanpa fitur mubazir yang membingungkan staf operasional di lapangan"
      ]
    },
    {
      number: "03",
      title: "Laporan Real-time",
      subtitle: "Manajemen bisa pantau angka penting kapan saja tanpa nunggu rekap manual.",
      image: "/images/services/erp-crm/solution-realtime-reports.png",
      alt: "Dashboard Laporan Keuangan dan Penjualan Real-time",
      points: [
        "Pantau omzet harian, laba kotor, dan saldo piutang hanya dalam satu layar",
        "Laporan laba rugi dan arus kas otomatis terupdate setiap ada transaksi masuk",
        "Ekspor laporan ke format Excel dan PDF siap presentasi dalam satu kali klik"
      ]
    }
  ],
  featuresEyebrow: "Struktur Modul Sistem",
  featuresTitle: "Struktur Modul ERP & CRM",
  featuresSubtitle: "Sistem dirancang dalam dua pilar utama: operasional (ERP) dan hubungan pelanggan (CRM), yang saling terhubung otomatis.",
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
  erpCrmModules: {
    erpGroup: {
      badge: "Kolom 1 - Operasional",
      title: "Sisi ERP (Operasional & Sumber Daya)",
      modules: [
        {
          title: "Inventory & Gudang",
          description: "Stok real-time, mutasi barang antar gudang, dan notifikasi otomatis minimum stok.",
          icon: "Boxes"
        },
        {
          title: "Purchasing",
          description: "Penerbitan PO ke supplier, approval pengadaan bertingkat, dan tracking status barang masuk.",
          icon: "ShoppingCart"
        },
        {
          title: "Keuangan & Akuntansi",
          description: "Jurnal otomatis tiap transaksi, laporan laba rugi real-time, dan neraca arus kas terpadu.",
          icon: "Landmark"
        },
        {
          title: "HR & Payroll",
          description: "Data karyawan terpusat, absensi digital, dan perhitungan penggajian otomatis.",
          icon: "Users"
        },
        {
          title: "Produksi (Manufaktur)",
          description: "Bill of Material (BOM), jadwal lini produksi, work order mesin, dan efisiensi bahan baku.",
          icon: "Factory"
        },
        {
          title: "Multi Cabang / Gudang",
          description: "Konsolidasi data antar lokasi cabang secara real-time tanpa delay sinkronisasi.",
          icon: "Network"
        }
      ]
    },
    crmGroup: {
      badge: "Kolom 2 - Penjualan",
      title: "Sisi CRM (Penjualan & Pelanggan)",
      modules: [
        {
          title: "Sales Pipeline",
          description: "Tahapan prospek interaktif dari leads, kualifikasi, penawaran, hingga deal closing.",
          icon: "TrendingUp"
        },
        {
          title: "Manajemen Kontak Pelanggan",
          description: "Riwayat komunikasi, arsip dokumen, kontrak kerja sama, dan profil pelanggan terpusat.",
          icon: "UserCheck"
        },
        {
          title: "Follow-up & Reminder",
          description: "Jadwal otomatis via WhatsApp dan notifikasi agar tidak ada prospek potensial yang terlewat.",
          icon: "BellRing"
        },
        {
          title: "Quotation & Invoice",
          description: "Pembuatan surat penawaran harga dan tagihan resmi langsung dari sistem dalam hitungan detik.",
          icon: "FileText"
        },
        {
          title: "Laporan Sales Performance",
          description: "Grafik target vs realisasi omzet per staf sales, divisi penjualan, maupun wilayah kerja.",
          icon: "BarChart3"
        },
        {
          title: "Integrasi WhatsApp & Email",
          description: "Komunikasi tercatat otomatis ke profil klien tanpa perlu copy-paste manual dari smartphone.",
          icon: "MessageSquare"
        }
      ]
    },
    bridgeTitle: "Koneksi Otomatis Tanpa Input Dobel",
    bridgeDescription: "Kedua sisi saling terhubung otomatis: saat sales closing deal di CRM, stok gudang di modul Inventory otomatis terpotong dan draf invoice di modul Keuangan langsung terbit tanpa perlu input ulang manual."
  },
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
  ctaTitle: "Sentralisasi Operasional dalam Satu Platform",
  ctaSubtitle: "Mulai dari satu modul, kami bantu rancang sistem yang tumbuh bersama bisnis Anda. Konsultasi awal gratis, tanpa komitmen.",
  ctaButton: "Mulai Diskusi Gratis"
};
