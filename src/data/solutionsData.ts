export interface SolutionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  keywords: string[];
  features: {
    title: string;
    description: string;
  }[];
  caseStudy?: {
    project: string;
    description: string;
  };
}

export interface SolutionsContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  ctaTitle: string;
  ctaSubtitle: string;
  ctaButton: string;
  items: SolutionItem[];
}

export const solutionsData: Record<string, SolutionsContent> = {
  id: {
    eyebrow: "Solusi Kami",
    title: "Sistem Khusus untuk Kompleksitas Bisnis Anda",
    subtitle: "Kami membangun software yang mengikuti Standard Operating Procedure (SOP) perusahaan Anda, bukan sebaliknya.",
    description: "Hubungi GiLabs untuk mendigitalisasi proses bisnis secara seamless dengan tim engineering berpengalaman.",
    ctaTitle: "Diskusikan Kebutuhan Sistem Perusahaan Anda",
    ctaSubtitle: "Konsultasi gratis bersama tim technical architect kami untuk merancang solusi software terbaik.",
    ctaButton: "Konsultasikan Sekarang",
    items: [
      {
        id: "company-profile",
        title: "Website Company Profile & Korporat",
        subtitle: "Membangun Kredibilitas & Memenangkan Tender Proyek B2B",
        description: "Mempresentasikan profil perusahaan secara profesional, cepat, aman, dan dioptimalkan untuk performa SEO. Sempurna untuk kebutuhan tender proyek, perusahaan ekspor impor, kontraktor, konstruksi, dan manufaktur.",
        keywords: [
          "jasa pembuatan website company profile perusahaan manufaktur",
          "jasa website company profile perusahaan konstruksi",
          "jasa website company profile kontraktor terpercaya",
          "jasa pembuatan company profile digital untuk perusahaan",
          "jasa redesign website company profile perusahaan",
          "vendor pembuatan website company profile profesional",
          "jasa company profile online untuk perusahaan B2B",
          "jasa website perusahaan untuk kebutuhan tender proyek",
          "jasa pembuatan website korporat dengan CMS",
          "jasa website company profile untuk perusahaan ekspor impor"
        ],
        features: [
          {
            title: "Website Korporasi Berbasis CMS",
            description: "Jasa pembuatan website korporat dengan CMS modern agar tim Anda mudah memperbarui konten profil kapan saja tanpa ketergantungan pada developer."
          },
          {
            title: "Redesign Website Company Profile",
            description: "Jasa redesign website company profile perusahaan lama Anda agar lebih modern, responsif, berkecepatan tinggi, dan ramah SEO."
          },
          {
            title: "Website B2B & Pendukung Tender",
            description: "Jasa website perusahaan untuk kebutuhan tender proyek dengan standardisasi keamanan tinggi, portofolio interaktif, dan halaman profil legalitas lengkap."
          },
          {
            title: "Optimal untuk Berbagai Sektor Industri",
            description: "Jasa pembuatan website company profile perusahaan manufaktur, konstruksi, kontraktor terpercaya, serta perusahaan ekspor impor untuk menjangkau pasar internasional secara profesional."
          }
        ],
        caseStudy: {
          project: "Sitama Internship Platform",
          description: "Membangun sistem dan company profile interaktif untuk manajemen magang institusi pendidikan."
        }
      },
      {
        id: "erp-system",
        title: "Sistem ERP Custom",
        subtitle: "Integrasi Operasional Tanpa Batas Sesuai SOP Perusahaan",
        description: "Lupakan software ERP kaku yang memaksa Anda mengubah proses kerja. Kami menyediakan jasa pembuatan sistem ERP custom Indonesia yang disesuaikan 100% dengan SOP, alur logistik, purchasing, dan operasional unik perusahaan Anda.",
        keywords: [
          "jasa pembuatan sistem ERP custom Indonesia",
          "vendor ERP custom untuk perusahaan manufaktur",
          "jasa ERP inventory dan purchasing perusahaan",
          "jasa ERP untuk distributor dan supplier",
          "jasa ERP untuk koperasi simpan pinjam",
          "jasa ERP untuk perusahaan logistik",
          "jasa ERP untuk bisnis multi cabang",
          "jasa ERP untuk tracking produksi pabrik",
          "jasa ERP untuk monitoring operasional perusahaan",
          "software ERP custom sesuai SOP perusahaan"
        ],
        features: [
          {
            title: "ERP Inventory & Purchasing",
            description: "Jasa ERP inventory dan purchasing perusahaan untuk meminimalkan penimbunan bahan baku, otomatisasi Purchase Order, dan melacak pergerakan stok real-time."
          },
          {
            title: "ERP Manufaktur & Pabrik",
            description: "Menjadi vendor ERP custom untuk perusahaan manufaktur yang andal dalam integrasi modul lantai produksi, Bill of Materials (BOM), dan tracking produksi pabrik."
          },
          {
            title: "ERP Distribusi & Multi Cabang",
            description: "Jasa ERP untuk distributor, supplier, perusahaan logistik, dan bisnis multi cabang guna mengonsolidasikan pelaporan keuangan serta stok secara terpusat."
          },
          {
            title: "ERP Finansial Koperasi",
            description: "Jasa ERP untuk koperasi simpan pinjam guna memantau arus kas, simpanan, pinjaman, dan pembagian Sisa Hasil Usaha (SHU) secara otomatis."
          }
        ],
        caseStudy: {
          project: "CRM & ERP Pharmaceutical",
          description: "Membangun sistem operasional terintegrasi ERP untuk industri farmasi nasional dengan 20+ modul."
        }
      },
      {
        id: "crm-system",
        title: "Sistem CRM Custom",
        subtitle: "Manajemen Pipeline Penjualan & Tim Sales Lapangan",
        description: "Tingkatkan konversi penjualan Anda dengan jasa pembuatan CRM custom Indonesia yang terintegrasi penuh. Pantau performa sales lapangan, kelola leads B2B, dan otomatisasi follow-up pelanggan dalam satu platform terpadu.",
        keywords: [
          "jasa pembuatan CRM custom Indonesia",
          "software CRM untuk tim sales lapangan",
          "CRM untuk monitoring sales dan lead management",
          "sistem CRM untuk perusahaan B2B",
          "CRM custom terintegrasi WhatsApp",
          "CRM untuk perusahaan jasa profesional",
          "CRM untuk tracking customer dan follow up",
          "aplikasi CRM untuk perusahaan distribusi",
          "CRM untuk manajemen pipeline penjualan",
          "jasa migrasi CRM dari spreadsheet ke sistem"
        ],
        features: [
          {
            title: "CRM Terintegrasi WhatsApp & API",
            description: "CRM custom terintegrasi WhatsApp Business API untuk pengiriman pesan otomatis, follow-up cerdas, dan pencatatan riwayat chat langsung ke kartu pelanggan."
          },
          {
            title: "Monitoring Sales Lapangan (Field Sales)",
            description: "Software CRM untuk tim sales lapangan dengan fitur pelacakan GPS, check-in kunjungan klien, dan pelaporan real-time langsung dari lokasi."
          },
          {
            title: "Lead & Pipeline Management",
            description: "CRM untuk monitoring sales dan lead management pada perusahaan B2B, membantu meminimalkan prospek yang terbengkalai dan memetakan pipeline penjualan secara transparan."
          },
          {
            title: "Migrasi & Integrasi Data",
            description: "Jasa migrasi CRM dari spreadsheet ke sistem otomatis yang andal, aman, dan tanpa risiko kehilangan data historis pelanggan Anda."
          }
        ],
        caseStudy: {
          project: "SalesView",
          description: "Sistem CRM khusus untuk industri kesehatan guna mengelola kunjungan medis, pipeline penawaran, dan target sales secara terpadu."
        }
      },
      {
        id: "pos-system",
        title: "Aplikasi POS Custom (Point of Sales)",
        subtitle: "Sistem Kasir Pintar yang Terkoneksi dengan ERP & Stok",
        description: "Membangun sistem POS kasir yang fleksibel untuk retail modern, bisnis multi cabang, distributor grosir, hingga toko khusus (furniture, bahan bangunan, dll). Kami membantu Anda mengendalikan stok dan transaksi dalam satu dashboard owner terpusat.",
        keywords: [
          "jasa pembuatan aplikasi kasir custom",
          "software POS untuk toko bangunan",
          "aplikasi POS untuk minimarket",
          "sistem kasir untuk usaha multi cabang",
          "POS custom dengan laporan stok realtime",
          "aplikasi kasir terintegrasi ERP",
          "POS untuk distributor dan grosir",
          "software kasir untuk toko furniture",
          "POS berbasis web untuk bisnis retail",
          "aplikasi kasir dengan dashboard owner"
        ],
        features: [
          {
            title: "POS Custom Toko Spesifik",
            description: "Software POS untuk toko bangunan (penanganan satuan dinamis) dan software kasir untuk toko furniture (sistem inden & pengiriman barang secara parsial)."
          },
          {
            title: "Aplikasi Kasir Minimarket & Retail",
            description: "Aplikasi POS untuk minimarket dan retail berbasis web yang ringan, cepat, dan mendukung pemindaian barcode offline serta pembayaran e-wallet terintegrasi."
          },
          {
            title: "Kasir Multi Cabang & Gudang",
            description: "Sistem kasir untuk usaha multi cabang terhubung langsung dengan POS untuk distributor dan grosir guna sinkronisasi data inventaris secara real-time."
          },
          {
            title: "Dashboard Owner & Integrasi ERP",
            description: "Aplikasi kasir terintegrasi ERP dengan dashboard owner real-time untuk memantau omzet, laba kotor, dan rasio perputaran barang dari mana saja."
          }
        ]
      },
      {
        id: "dashboard-monitoring",
        title: "Dashboard Monitoring & Analitik Data",
        subtitle: "Visualisasi Data Operasional Real-Time untuk Keputusan Bisnis Cepat",
        description: "Ubah tumpukan data mentah menjadi keputusan strategis. Kami menyediakan jasa pembuatan dashboard monitoring perusahaan, dashboard KPI eksekutif, serta visualisasi data IoT industri secara real-time.",
        keywords: [
          "jasa pembuatan dashboard monitoring perusahaan",
          "dashboard KPI realtime untuk manajemen",
          "dashboard monitoring produksi pabrik",
          "dashboard monitoring mesin industri",
          "dashboard monitoring armada kendaraan",
          "dashboard monitoring proyek konstruksi",
          "dashboard business intelligence custom",
          "dashboard executive perusahaan",
          "dashboard analitik untuk operasional bisnis",
          "jasa visualisasi data perusahaan"
        ],
        features: [
          {
            title: "Dashboard KPI Manajemen & Eksekutif",
            description: "Dashboard executive perusahaan dan dashboard KPI realtime untuk manajemen guna memonitor performa finansial, sales, dan SDM secara sekilas."
          },
          {
            title: "Monitoring Produksi & Mesin Pabrik",
            description: "Dashboard monitoring produksi pabrik dan dashboard monitoring mesin industri untuk melacak output, mendeteksi downtime alat, dan menganalisis OEE."
          },
          {
            title: "Monitoring Armada & Logistik",
            description: "Dashboard monitoring armada kendaraan (fleet management) terintegrasi GPS untuk memantau rute, konsumsi bahan bakar, dan pengiriman barang."
          },
          {
            title: "Visualisasi Proyek Konstruksi",
            description: "Dashboard monitoring proyek konstruksi untuk melacak deviasi progres aktual vs rencana (S-Curve) dan penyerapan anggaran secara interaktif."
          }
        ],
        caseStudy: {
          project: "Fiber Project Monitoring",
          description: "Dashboard monitoring proyek instalasi kabel fiber optik berskala nasional dengan pemetaan wilayah geospasial real-time."
        }
      },
      {
        id: "sistem-manajemen-internal",
        title: "Sistem Manajemen Internal & HRIS",
        subtitle: "Transformasi Digital Proses Bisnis dan Kinerja Karyawan",
        description: "Tingkatkan efisiensi kerja tim Anda dengan software operasional perusahaan custom. Kami merancang sistem workflow approval, manajemen dokumen terpusat, hingga aplikasi HRIS custom untuk perusahaan berskala menengah dan besar.",
        keywords: [
          "jasa pembuatan aplikasi manajemen perusahaan",
          "software operasional perusahaan custom",
          "sistem digitalisasi proses bisnis perusahaan",
          "aplikasi workflow approval perusahaan",
          "software manajemen dokumen perusahaan",
          "aplikasi monitoring kinerja karyawan",
          "sistem manajemen tugas perusahaan",
          "aplikasi HRIS custom perusahaan",
          "software internal perusahaan berbasis web",
          "jasa transformasi digital perusahaan"
        ],
        features: [
          {
            title: "Workflow Approval & Digitalisasi Proses",
            description: "Aplikasi workflow approval perusahaan untuk menggantikan birokrasi kertas fisik dengan tanda tangan digital dan alur persetujuan bertingkat otomatis."
          },
          {
            title: "Aplikasi HRIS Custom Perusahaan",
            description: "Aplikasi HRIS custom perusahaan yang mencakup rekrutmen karyawan, absensi geofencing, penilaian KPI, klaim medis, hingga sistem payroll terintegrasi PPh 21."
          },
          {
            title: "Manajemen Dokumen & Tugas",
            description: "Software manajemen dokumen perusahaan bersertifikat enkripsi tinggi, terintegrasi dengan sistem manajemen tugas perusahaan untuk efisiensi kolaborasi tim."
          },
          {
            title: "Software Internal Berbasis Web",
            description: "Jasa transformasi digital perusahaan melalui pengembangan software internal perusahaan berbasis web yang responsif, andal, dan dapat diakses aman dari mana saja."
          }
        ],
        caseStudy: {
          project: "Evalique Assessment",
          description: "Platform manajemen internal untuk asesmen kompetensi karyawan berbasis AI secara otomatis."
        }
      },
      {
        id: "manufaktur",
        title: "Industri Manufaktur",
        subtitle: "Otomasi & Digitalisasi Lantai Produksi Hingga Warehouse",
        description: "Menghubungkan lini produksi fisik dengan manajemen strategis. Kami menyediakan sistem digitalisasi pabrik manufaktur custom untuk menekan downtime, melacak inventory bahan baku, dan menjamin kualitas produk (quality control).",
        keywords: [
          "software manufaktur custom Indonesia",
          "sistem monitoring produksi pabrik",
          "aplikasi tracking produksi manufaktur",
          "ERP manufaktur custom",
          "software quality control pabrik",
          "sistem maintenance mesin pabrik",
          "dashboard OEE manufaktur",
          "aplikasi warehouse pabrik",
          "software inventory bahan baku",
          "sistem digitalisasi pabrik manufaktur"
        ],
        features: [
          {
            title: "Tracking Produksi & OEE Pabrik",
            description: "Aplikasi tracking produksi manufaktur dan dashboard OEE manufaktur secara realtime untuk memantau efektivitas mesin produksi di lantai pabrik."
          },
          {
            title: "Inventory Bahan Baku & Warehouse",
            description: "Software inventory bahan baku terintegrasi dengan aplikasi warehouse pabrik guna memantau stok bahan, melacak batch number, dan optimasi tata letak barang."
          },
          {
            title: "Quality Control & Predictive Maintenance",
            description: "Software quality control pabrik untuk mencatat cacat produksi secara digital dan sistem maintenance mesin pabrik guna menjadwalkan perbaikan rutin preventif."
          },
          {
            title: "Digitalisasi Pabrik Manufaktur",
            description: "Pengembangan software manufaktur custom Indonesia untuk transformasi digital pabrik secara menyeluruh, meningkatkan yield produksi hingga 25%."
          }
        ]
      },
      {
        id: "koperasi",
        title: "Industri Koperasi",
        subtitle: "Digitalisasi Koperasi Simpan Pinjam Modern",
        description: "Bawa koperasi Anda naik kelas dengan sistem keuangan koperasi berbasis web dan aplikasi anggota online. Kami merancang ERP koperasi Indonesia untuk memudahkan pelacakan pembukuan, pengajuan pinjaman, dan transparansi laporan RAT.",
        keywords: [
          "aplikasi koperasi simpan pinjam custom",
          "software manajemen koperasi modern",
          "ERP koperasi Indonesia",
          "sistem keuangan koperasi berbasis web",
          "aplikasi anggota koperasi online",
          "dashboard pengurus koperasi",
          "software koperasi multi cabang",
          "digitalisasi koperasi modern",
          "aplikasi koperasi karyawan perusahaan",
          "sistem laporan koperasi otomatis"
        ],
        features: [
          {
            title: "Koperasi Simpan Pinjam Custom",
            description: "Aplikasi koperasi simpan pinjam custom dengan perhitungan bunga menurun/flat otomatis, cetak kuitansi, dan histori angsuran harian/bulanan."
          },
          {
            title: "Aplikasi Anggota Koperasi Online",
            description: "Aplikasi anggota koperasi online berbasis mobile/web bagi anggota untuk memantau simpanan pokok, simpanan wajib, serta mengajukan pinjaman mandiri."
          },
          {
            title: "Sistem Laporan Koperasi Otomatis",
            description: "Sistem laporan koperasi otomatis yang menghasilkan neraca keuangan, laporan laba rugi, laporan pembagian SHU, dan pelaporan RAT berkala secara instan."
          },
          {
            title: "Software Koperasi Multi Cabang",
            description: "Software koperasi multi cabang untuk konsolidasi data kas dan anggota dari puluhan cabang pembantu ke dashboard pengurus koperasi pusat secara real-time."
          }
        ]
      },
      {
        id: "distributor",
        title: "Industri Distributor",
        subtitle: "Sistem Distribusi Barang & Monitoring Sales Lapangan",
        description: "Kelola rantai pasok Anda dengan software distributor custom terintegrasi. Pantau pergerakan armada pengiriman barang, otomatisasi order management, serta kelola stok pergudangan besar dari satu sistem terpusat.",
        keywords: [
          "software distributor custom",
          "ERP distributor Indonesia",
          "aplikasi sales distributor",
          "software monitoring sales lapangan",
          "sistem distribusi barang realtime",
          "aplikasi gudang distributor",
          "dashboard distributor multi cabang",
          "software order management distributor",
          "aplikasi supplier and distributor",
          "sistem tracking pengiriman distributor"
        ],
        features: [
          {
            title: "Monitoring Sales & Order Management",
            description: "Aplikasi sales distributor dan software order management distributor terintegrasi untuk input pesanan langsung dari toko ritel (taking order/canvaser)."
          },
          {
            title: "Aplikasi Gudang & Distribusi Real-time",
            description: "Aplikasi gudang distributor untuk manajemen stok masuk-keluar, cross-docking, pick & pack, terhubung langsung dengan sistem distribusi barang realtime."
          },
          {
            title: "Sistem Tracking Pengiriman Barang",
            description: "Sistem tracking pengiriman distributor terintegrasi peta digital untuk melacak posisi driver, tanda terima digital (Proof of Delivery), dan optimasi rute."
          },
          {
            title: "Dashboard Multi Cabang Distributor",
            description: "ERP distributor Indonesia dengan dashboard distributor multi cabang untuk sinkronisasi penjualan, target agen, piutang dagang, dan inventaris lintas depo."
          }
        ]
      },
      {
        id: "money-keywords",
        title: "Bermitra dengan Software House Indonesia Terbaik",
        subtitle: "Vendor Software Development Terpercaya untuk Transformasi Digital Bisnis Anda",
        description: "GiLabs (PT Griya Innovations Labs) adalah mitra pengembangan software terpercaya untuk mentransformasikan proses bisnis manual Anda menjadi aset digital bernilai tinggi dengan jaminan full source code transfer.",
        keywords: [
          "vendor software house Indonesia",
          "software house Semarang",
          "software house Jakarta",
          "software house ERP Indonesia",
          "software development company Indonesia",
          "jasa pembuatan aplikasi perusahaan",
          "jasa pembuatan software custom",
          "vendor pengembangan software perusahaan",
          "perusahaan software development Indonesia",
          "software house untuk digitalisasi bisnis"
        ],
        features: [
          {
            title: "Jasa Pembuatan Software Custom Premium",
            description: "Kami mendesain dan membangun software dari nol menggunakan arsitektur andal yang disesuaikan dengan SOP operasional internal perusahaan Anda."
          },
          {
            title: "Jasa Pembuatan Aplikasi Perusahaan",
            description: "Membantu korporasi B2B, manufaktur, dan logistik di Jakarta, Semarang, dan seluruh Indonesia mengotomasi administrasi dan logistik internal mereka."
          },
          {
            title: "Full Source Code Ownership",
            description: "Berbeda dari vendor lain, kami melakukan serah terima penuh seluruh kode sumber dan dokumentasi teknis sistem Anda tanpa ikatan lisensi tahunan."
          },
          {
            title: "Software House untuk Digitalisasi Bisnis",
            description: "Sebagai vendor pengembangan software perusahaan berlisensi resmi PT Griya Innovations Labs, kami memberikan transparansi progres mingguan secara berkala."
          }
        ]
      }
    ]
  },
  en: {
    eyebrow: "Our Solutions",
    title: "Tailored Systems Built for Your Complexity",
    subtitle: "We construct software that adapts to your company's Standard Operating Procedures (SOP), not the other way around.",
    description: "Contact GiLabs to digitize your business processes seamlessly with our senior engineering team.",
    ctaTitle: "Discuss Your Enterprise System Needs",
    ctaSubtitle: "Schedule a free consultation with our technical architects to design the best custom software solution.",
    ctaButton: "Get Free Consultation",
    items: [
      {
        id: "company-profile",
        title: "Corporate & Company Profile Website",
        subtitle: "Build Credibility & Win B2B Project Tenders",
        description: "Represent your business professionally with lightning-fast, highly secure, and SEO-optimized company profiles. Perfect for project tenders, export-import companies, contractors, construction, and manufacturing.",
        keywords: [
          "manufacturing company profile website services",
          "construction company profile web agency",
          "trusted contractor company profile website",
          "digital corporate profile design",
          "company profile website redesign",
          "professional corporate website vendor",
          "B2B online company profile",
          "tender bidding corporate website services",
          "corporate CMS website development",
          "import export company website solutions"
        ],
        features: [
          {
            title: "CMS-Powered Corporate Websites",
            description: "Allow your marketing team to update legal profiles, team details, and certificates easily without constant coding dependence."
          },
          {
            title: "SEO-Optimized Company Profile Redesign",
            description: "Revamp outdated slow websites into high-performance, fast-loading, responsive assets optimized for search engines and AI agents."
          },
          {
            title: "B2B Tender-Ready Portals",
            description: "Establish corporate legitimacy with structured credentials, portfolios, security baselines, and legal information sections."
          }
        ],
        caseStudy: {
          project: "Sitama Internship Platform",
          description: "Designed a public portal and interactive profile system for educational internship management."
        }
      },
      {
        id: "erp-system",
        title: "Custom ERP System Development",
        subtitle: "End-to-End Enterprise Integration Built Around Your SOPs",
        description: "Say goodbye to rigid, generic ERP packages that force you to alter your business workflows. We build custom ERP solutions that map 100% to your logistics, purchasing, sales, and manufacturing routines.",
        keywords: [
          "custom ERP development Indonesia",
          "manufacturing ERP custom vendor",
          "enterprise inventory and purchasing ERP",
          "distributor and supplier ERP system",
          "saving and loan cooperative ERP",
          "logistics company ERP development",
          "multi-branch business ERP solutions",
          "factory production tracking ERP",
          "operational monitoring ERP systems",
          "SOP-compliant custom ERP software"
        ],
        features: [
          {
            title: "Inventory & Purchasing Automation",
            description: "Track raw materials in real-time, generate automatic purchase orders, and minimize supply chain waste."
          },
          {
            title: "Manufacturing Production & Factory Floor ERP",
            description: "Custom ERP modules tracking work orders, scheduling production runs, and detailing bill of materials (BOM)."
          },
          {
            title: "Logistics & Multi-Branch Systems",
            description: "Consolidate stock levels, transfer invoices, and financial reporting across multiple warehouse locations."
          }
        ],
        caseStudy: {
          project: "CRM & ERP Pharmaceutical",
          description: "Engineered an integrated enterprise system with 20+ modules managing logistics, sales, and compliance."
        }
      },
      {
        id: "crm-system",
        title: "Custom CRM & Lead Management",
        subtitle: "Empower Field Sales & Maximize Conversion Pipelines",
        description: "Scale your revenue operations with custom CRM systems. Keep track of sales agent routes, capture leads automatically, and build persistent communication pipelines that sync directly with chat APIs.",
        keywords: [
          "custom CRM software development Indonesia",
          "field sales team CRM software",
          "lead management and sales tracking CRM",
          "B2B company CRM system",
          "WhatsApp integrated custom CRM",
          "professional services CRM development",
          "follow up and customer tracking system",
          "distribution CRM application",
          "sales pipeline management software",
          "spreadsheet to CRM system migration"
        ],
        features: [
          {
            title: "WhatsApp & API Integrations",
            description: "Trigger customer outreach instantly, record client logs automatically, and coordinate chats inside CRM pipelines."
          },
          {
            title: "GPS-Enabled Field Sales Monitoring",
            description: "Enable sales teams to register check-ins, record field requirements, and coordinate customer responses in real-time."
          },
          {
            title: "Pipeline & Follow-Up Automation",
            description: "Map sales pipelines transparently. Set reminders and trigger updates so high-value corporate leads never slip away."
          }
        ],
        caseStudy: {
          project: "SalesView",
          description: "A healthcare-focused sales monitoring system for medical visits, quotations, and target fulfillment tracking."
        }
      },
      {
        id: "pos-system",
        title: "Custom Point of Sale (POS) Software",
        subtitle: "Smart Checkout Applications Connected to Your Live Inventory",
        description: "Build robust web-based checkout terminals optimized for complex transactions. Perfect for multi-outlet retail, building supply depots, furniture shops with down-payment cycles, and wholesale distributors.",
        keywords: [
          "custom cash register app development",
          "building supply shop POS software",
          "minimarket POS application",
          "multi-branch cash register system",
          "realtime stock reporting custom POS",
          "ERP integrated cash register app",
          "distributor and wholesaler POS system",
          "furniture retail POS software",
          "web-based retail POS application",
          "cashier app with owner dashboard"
        ],
        features: [
          {
            title: "Specialized Depot & Retail Cashier Apps",
            description: "Handle dynamic metric units for building materials or support deposit structures and staged shipping for furniture retail."
          },
          {
            title: "ERP-Synced Multi-Branch POS",
            description: "Ensure stock levels update across depohs, warehouses, and storefronts immediately upon every retail sale."
          },
          {
            title: "Owner Dashboards & Analytics",
            description: "Consolidate sales analytics, margin percentages, and cashier logs from all business branches into a secure owner view."
          }
        ]
      },
      {
        id: "dashboard-monitoring",
        title: "Operational Dashboards & Business Intelligence",
        subtitle: "Translate Fragmented Metrics Into Decisive Operations",
        description: "Aggregate data from spreadsheets, third-party APIs, and industrial machinery into beautiful, actionable dashboards. Monitor KPIs, track assets, and get alert parameters in real-time.",
        keywords: [
          "corporate dashboard monitoring services",
          "realtime management KPI dashboard",
          "factory production monitoring dashboard",
          "industrial machinery dashboard monitoring",
          "vehicle fleet monitoring dashboard",
          "construction project dashboard monitoring",
          "custom business intelligence dashboard",
          "corporate executive dashboard",
          "operational business analytics dashboard",
          "enterprise data visualization services"
        ],
        features: [
          {
            title: "Executive & Financial Dashboards",
            description: "Gain a single source of truth for revenue run-rates, outstanding liabilities, and department KPIs."
          },
          {
            title: "Industrial Machinery & OEE Displays",
            description: "Monitor equipment status, display OEE benchmarks, and visualize downtime root causes."
          },
          {
            title: "Construction Project Progress (S-Curve)",
            description: "Compare baseline targets with actual progress curves, tracking materials, budget consumption, and vendor performance."
          }
        ],
        caseStudy: {
          project: "Fiber Project Monitoring",
          description: "Geospatial dashboard tracking fiber-optic deployments, technician milestones, and budget logs nationwide."
        }
      },
      {
        id: "sistem-manajemen-internal",
        title: "Internal Management Systems & Custom HRIS",
        subtitle: "Eliminate Paper Bottlenecks & Structure Team Performance",
        description: "Re-engineer your administrative and collaboration processes. We design custom task coordinators, automated document hubs, multi-stage approval managers, and comprehensive HRIS systems.",
        keywords: [
          "corporate management app development",
          "custom operational software development",
          "business process digitalization system",
          "corporate approval workflow application",
          "enterprise document management software",
          "employee performance monitoring app",
          "corporate task management system",
          "custom enterprise HRIS application",
          "web-based internal company software",
          "corporate digital transformation services"
        ],
        features: [
          {
            title: "Automated Approval Pipelines",
            description: "Move requests, budget checks, and sign-offs through hierarchical, mobile-friendly pipelines instantly."
          },
          {
            title: "Custom HRIS & Payroll Engines",
            description: "Track employee attendance via geolocation boundaries, coordinate performance metrics, and automate local tax (PPh 21) payroll."
          },
          {
            title: "Enforce Task & Project Continuity",
            description: "Centralize project milestones, link shared document attachments, and monitor individual performance logs securely."
          }
        ],
        caseStudy: {
          project: "Evalique Assessment",
          description: "An AI-powered assessment tool evaluating employee skillset progression and generating learning reports."
        }
      },
      {
        id: "manufaktur",
        title: "Manufacturing & Smart Factory Systems",
        subtitle: "Link Industrial Equipment to Strategic Decisions",
        description: "Connect shop floors with business ledgers. We write software that automates quality control parameters, structures preventive maintenance logs, and logs OEE performance.",
        keywords: [
          "custom manufacturing software Indonesia",
          "factory production monitoring system",
          "manufacturing tracking application",
          "custom manufacturing ERP system",
          "factory quality control software",
          "machinery maintenance logging system",
          "manufacturing OEE dashboard",
          "factory warehouse software solutions",
          "raw material inventory management",
          "smart factory digitalization solutions"
        ],
        features: [
          {
            title: "Production Tracking & Yield Insights",
            description: "Audit raw material input against final outputs, identifying batch defects and optimizing material utilization."
          },
          {
            title: "Preventive Equipment Maintenance",
            description: "Keep machinery run-times logged and automatically trigger maintenance tickets to reduce emergency downtime."
          },
          {
            title: "Smart Warehouse Coordination",
            description: "Integrate raw stock tracking, batch numbers, and shelf distributions with production requirements."
          }
        ]
      },
      {
        id: "koperasi",
        title: "Cooperative (Koperasi) Management Software",
        subtitle: "Digitalize Member Operations and Financial Ledgers",
        description: "Modernize cooperative banking and member communications. We build accounting networks, online loan applications, and centralized board dashboards complying with local cooperative codes.",
        keywords: [
          "custom saving and loan cooperative app",
          "modern cooperative management software",
          "Indonesian cooperative ERP solutions",
          "web-based cooperative ledger system",
          "online cooperative member application",
          "board of directors cooperative dashboard",
          "multi-branch cooperative software",
          "modern cooperative digitalization",
          "corporate employee cooperative app",
          "automated cooperative reporting system"
        ],
        features: [
          {
            title: "Saving & Loan Audits",
            description: "Automate loan interests, manage flat or declining calculation models, and record deposit schedules."
          },
          {
            title: "Online Member Portal",
            description: "Provide member access for tracking individual savings, outstanding loans, and reviewing annual dividend (SHU) logs."
          },
          {
            title: "Automated Board Reporting",
            description: "Generate balance sheets, profit-and-loss files, and audit reports ready for annual board reviews (RAT)."
          }
        ]
      },
      {
        id: "distributor",
        title: "Wholesale & Distributor Software",
        subtitle: "Track Wholesale Operations & Sales Representatives",
        description: "Establish absolute control over distribution chains. We build logistics trackers, customer sales networks, multi-depot inventory managers, and dispatch loggers.",
        keywords: [
          "custom distributor software development",
          "distributor ERP systems Indonesia",
          "distributor sales representative app",
          "field agent monitoring software",
          "realtime product distribution system",
          "distributor warehouse management app",
          "multi-branch distributor dashboard",
          "distributor order management software",
          "supplier and distributor coordination app",
          "distributor dispatch tracking system"
        ],
        features: [
          {
            title: "Order Entry for Sales Representatives",
            description: "Provide sales agents with order entry modules that sync inventory, price charts, and customer accounts on location."
          },
          {
            title: "Real-time Supply Chain Loggers",
            description: "Coordinate depot transfers, verify incoming shipments, and manage picker routes inside warehouse centers."
          },
          {
            title: "Driver Trackers & Dispatch Logs",
            description: "Optimize delivery routes, log driver positions via GPS, and capture digital signatures upon successful package arrivals."
          }
        ]
      },
      {
        id: "money-keywords",
        title: "Collaborate with a Premium Indonesia Software House",
        subtitle: "A Dedicated Team Building Long-Term Enterprise Digital Assets",
        description: "GiLabs (PT Griya Innovations Labs) is a licensed, high-performing software agency in Central Java, Indonesia. We help companies replace administrative manual workflows with custom, fully owned technology assets.",
        keywords: [
          "trusted software house Indonesia",
          "software house Semarang",
          "software house Jakarta",
          "software house ERP Indonesia",
          "software development company Indonesia",
          "corporate application development services",
          "custom software development company",
          "enterprise software development vendor",
          "software engineering services Indonesia",
          "business digitalization software house"
        ],
        features: [
          {
            title: "Premium Engineering Standards",
            description: "We write clean, documented, and resilient applications suited to your specific operational scale."
          },
          {
            title: "Full Code Transfer & Autonomy",
            description: "At launch, we handover the complete source repository and technical blueprint, ensuring zero platform lock-in."
          },
          {
            title: "Agile, Structured Progress",
            description: "Review a deployed build every week. We operate under fixed-scope, fixed-cost transparency to eliminate revisions and delay."
          }
        ]
      }
    ]
  }
};
