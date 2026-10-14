export interface TemplateItem {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  category: 'manufaktur' | 'company' | 'fintech' | 'service' | 'event' | 'ekspor';
  categoryLabel: {
    id: string;
    en: string;
  };
  tier: 1 | 2 | 3;
  description: {
    id: string;
    en: string;
  };
  startingPriceIdr: number;
  previewImage: string;
  gallery: string[];
  demoUrl: string;
  buyersCount: number;
}

export interface DurationPlan {
  id: '1-year' | '2-year' | '3-year';
  years: number;
  name: {
    id: string;
    en: string;
  };
  priceIdr: number;
  originalPriceIdr: number;
  monthlyEquivalentIdr: number;
  badge?: {
    id: string;
    en: string;
  };
  savings: {
    id: string;
    en: string;
  };
  features: {
    id: string[];
    en: string[];
  };
}

export interface AddonItem {
  id: string;
  priceIdr: number;
  name: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
}

export const templateCategories = [
  { id: 'all', label: { id: 'Semua Kategori', en: 'All Categories' } },
  { id: 'manufaktur', label: { id: 'Manufaktur & Industri', en: 'Manufacturing & Industry' } },
  { id: 'company', label: { id: 'Enterprise & B2B', en: 'Enterprise & Corporate' } },
  { id: 'fintech', label: { id: 'Koperasi & Keuangan', en: 'Cooperative & Finance' } },
  { id: 'service', label: { id: 'Jasa & Maritim', en: 'Services & Maritime' } },
  { id: 'event', label: { id: 'Event & Tiket', en: 'Events & Ticketing' } },
] as const;

export interface TierSpecItem {
  id: string;
  en: string;
}

export interface TierInfo {
  tierNumber: 1 | 2 | 3 | 4;
  title: string;
  titleEn: string;
  tagline: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  hookHeadline?: {
    id: string;
    en: string;
  };
  pricing: {
    price: string;
    originalPrice: string;
    discountLabel?: {
      id: string;
      en: string;
    };
    note: {
      id: string;
      en: string;
    };
  };
  specs: {
    pages: TierSpecItem;
    animation: TierSpecItem;
    assets: TierSpecItem;
    extras: TierSpecItem;
    revisions: TierSpecItem;
  };
  ctaText?: {
    id: string;
    en: string;
  };
}

export const tiersData: TierInfo[] = [
  {
    tierNumber: 1,
    title: 'Tier 1 • Static',
    titleEn: 'Tier 1 • Static',
    tagline: {
      id: '1 halaman, tanpa animasi berat, load instan',
      en: '1 page, no heavy animations, instant loading'
    },
    description: {
      id: 'Landing page ringkas & cepat. Pilihan tepat untuk profil bisnis esensial, validasi ide, dan iklan WhatsApp.',
      en: 'Fast and lightweight landing page. Ideal for essential business profiles, idea validation, and WhatsApp ad campaigns.'
    },
    pricing: {
      price: 'Rp 689.000',
      originalPrice: 'Rp 959.000',
      discountLabel: { id: 'Hemat 28%', en: '28% OFF' },
      note: { id: 'Sudah include domain, hosting & siap online', en: 'Includes domain, hosting & full setup' }
    },
    specs: {
      pages: { id: '1 Halaman', en: '1 Page' },
      animation: { id: 'Tanpa animasi berat', en: 'No heavy animations' },
      assets: { id: 'Aset visual dari AI', en: 'AI-generated visual assets' },
      extras: { id: 'Form & tombol WhatsApp', en: 'Form & WhatsApp button' },
      revisions: { id: '1x revisi', en: '1x revision' }
    }
  },
  {
    tierNumber: 2,
    title: 'Tier 2 • Motion',
    titleEn: 'Tier 2 • Motion',
    tagline: {
      id: '3–5 halaman, animasi masuk, parallax ringan',
      en: '3–5 pages, entrance reveal, subtle parallax'
    },
    description: {
      id: 'Website interaktif multi-halaman dengan transisi visual halus untuk meningkatkan impresi dan kredibilitas bisnis.',
      en: 'Interactive multi-page website with smooth visual motion to elevate brand trust and credibility.'
    },
    pricing: {
      price: 'Rp 1.289.000',
      originalPrice: 'Rp 2.199.000',
      discountLabel: { id: 'Hemat 41%', en: '41% OFF' },
      note: { id: 'Sudah include domain, hosting & siap online', en: 'Includes domain, hosting & full setup' }
    },
    specs: {
      pages: { id: '3–5 Halaman', en: '3–5 Pages' },
      animation: { id: 'Entrance reveal & parallax ringan', en: 'Entrance reveal & subtle parallax' },
      assets: { id: 'Aset AI teroptimasi & ditailor', en: 'Tailored & optimized AI assets' },
      extras: { id: 'Form & tombol WhatsApp', en: 'Form & WhatsApp button' },
      revisions: { id: '2x revisi', en: '2x revisions' }
    }
  },
  {
    tierNumber: 3,
    title: 'Tier 3 • Immersive',
    titleEn: 'Tier 3 • Immersive',
    tagline: {
      id: 'Scroll storytelling, visual dinamis, transisi halaman',
      en: 'Scroll storytelling, dynamic visuals, page transitions'
    },
    description: {
      id: 'Pengalaman visual imersif dengan animasi scroll terkoreografi untuk perusahaan & brand skala enterprise.',
      en: 'Immersive digital experience with choreographed scroll motion for enterprise brands.'
    },
    pricing: {
      price: 'Rp 2.800.000',
      originalPrice: 'Rp 4.950.000',
      discountLabel: { id: 'Hemat 43%', en: '43% OFF' },
      note: { id: 'Sudah include domain, hosting & siap online', en: 'Includes domain, hosting & full setup' }
    },
    specs: {
      pages: { id: 'Sampai 8 Halaman', en: 'Up to 8 Pages' },
      animation: { id: 'Koreografi scroll & transisi halaman', en: 'Choreographed scroll & transitions' },
      assets: { id: 'Foto bergerak, video loop & cutout', en: 'Motion photos, video loop & cutouts' },
      extras: { id: 'Interaktif 3D ringan, analytics, copywriting', en: 'Light 3D interactive, analytics, copywriting' },
      revisions: { id: '3x revisi', en: '3x revisions' }
    }
  },
  {
    tierNumber: 4,
    title: 'Tier 4 • Custom Development',
    titleEn: 'Tier 4 • Custom Development',
    hookHeadline: {
      id: 'Punya Alur Bisnis Unik yang Tidak Bisa Pakai Template?',
      en: 'Have a Unique Business Workflow That Outgrows Templates?'
    },
    tagline: {
      id: 'Desain dari nol, CMS kustom, arsitektur sistem & integrasi API',
      en: 'Built from scratch, custom CMS, architecture & API integrations'
    },
    description: {
      id: 'Ketika kebutuhan bisnis Anda memerlukan logika sistem khusus, integrasi ERP/database, atau platform web yang scalable — engineer Gilabs merancang arsitektur kustom dari nol.',
      en: 'When your business demands bespoke logic, ERP/database integrations, or a scalable web platform — Gilabs engineers build custom architecture from scratch.'
    },
    pricing: {
      price: 'Mulai Rp 5.000.000',
      originalPrice: 'Rp 12.000.000',
      discountLabel: { id: 'Hemat 58%', en: '58% OFF' },
      note: { id: 'Milestone proyek • Termasuk setup cloud', en: 'Milestone-based • Cloud setup included' }
    },
    specs: {
      pages: { id: 'Fleksibel sesuai skala sistem', en: 'Flexible per system scope' },
      animation: { id: 'Desain UI/UX eksklusif (Figma ke Kode)', en: 'Exclusive UI/UX design (Figma to Code)' },
      assets: { id: 'Full branding & aset kustom', en: 'Full branding & bespoke assets' },
      extras: { id: 'CMS kustom, database, API, auth & workflow', en: 'Custom CMS, database, APIs, auth & workflow' },
      revisions: { id: 'Sesuai milestone proyek', en: 'Per project milestone' }
    },
    ctaText: {
      id: 'Konsultasi Custom via WhatsApp',
      en: 'Discuss Custom Project via WhatsApp'
    }
  }
];

export const templatesData: TemplateItem[] = [
  {
    id: 'adiguna-machinery',
    slug: 'adiguna-machinery-industrial',
    title: 'Website Industri & Manufaktur Presisi',
    titleEn: 'Precision Industrial Machinery Website',
    category: 'manufaktur',
    categoryLabel: {
      id: 'Manufaktur & Industri',
      en: 'Manufacturing & Industry'
    },
    tier: 1,
    description: {
      id: 'Template website profil manufaktur mesin industri, workshop CNC, dan pabrik presisi berstandar internasional dengan nuansa profesional dan spesifikasi teknis mendalam.',
      en: 'Modern website template for industrial machinery manufacturers, CNC workshops, and precision engineering plants.'
    },
    startingPriceIdr: 689000,
    previewImage: '/templates/adiguna-machinery/preview.webp',
    gallery: ['/templates/adiguna-machinery/preview.webp'],
    demoUrl: '/templates/demo/adiguna',
    buyersCount: 142
  },
  {
    id: 'koperasi-digital',
    slug: 'koperasi-fintech-cooperative',
    title: 'Website Koperasi Digital & Keuangan',
    titleEn: 'Digital Cooperative & Financial Platform',
    category: 'fintech',
    categoryLabel: {
      id: 'Koperasi & Finansial',
      en: 'Cooperative & Finance'
    },
    tier: 1,
    description: {
      id: 'Template website profil koperasi simpan pinjam modern dan institusi keuangan komunitas dengan estetika bersih, pratinjau modul konsol, dan transparansi laporan.',
      en: 'Modern website template for savings & credit cooperatives and digital financial institutions with daylight architectural aesthetics.'
    },
    startingPriceIdr: 689000,
    previewImage: '/templates/koperasi-digital/preview.webp',
    gallery: ['/templates/koperasi-digital/preview.webp'],
    demoUrl: '/templates/demo/koperasi',
    buyersCount: 165
  },
  {
    id: 'ticketing-events',
    slug: 'euforia-festival-ticketing',
    title: 'Website Tiket Konser & Festival Event',
    titleEn: 'Concert & Festival Event Ticketing Website',
    category: 'event',
    categoryLabel: {
      id: 'Event & Tiket',
      en: 'Events & Ticketing'
    },
    tier: 1,
    description: {
      id: 'Template website event festival musik, konser, dan seminar dengan dynamic live countdown timer, visual ambience rave modern, dan showcase tiket terintegrasi.',
      en: 'High-energy event ticketing and festival website template featuring live countdown timers, glowing ambient visual aesthetics, and ticket tier showcases.'
    },
    startingPriceIdr: 689000,
    previewImage: '/templates/ticketing-events/preview.webp',
    gallery: ['/templates/ticketing-events/preview.webp'],
    demoUrl: '/templates/demo/ticketing',
    buyersCount: 204
  },
  {
    id: 'shipagency-maritime',
    slug: 'nautiva-ocean-shipping-agency',
    title: 'Website Keagenan Kapal & Logistik Maritim',
    titleEn: 'Maritime Ship Agency & Port Logistics Website',
    category: 'service',
    categoryLabel: {
      id: 'Jasa & Maritim',
      en: 'Services & Maritime'
    },
    tier: 2,
    description: {
      id: 'Template website keagenan kapal pelabuhan, manajemen sertifikat perkapalan, dan logistik maritim terintegrasi dengan nuansa oceanic gelap dan metrik operasional terpercaya.',
      en: 'Specialized website template for shipping agencies, vessel clearance operations, and maritime logistics companies.'
    },
    startingPriceIdr: 1289000,
    previewImage: '/templates/shipagency-maritime/preview.webp',
    gallery: ['/templates/shipagency-maritime/preview.webp'],
    demoUrl: '/templates/demo/shipagency',
    buyersCount: 129
  },
  {
    id: 'gke-enterprise',
    slug: 'gke-enterprise-supply',
    title: 'Website Enterprise & Supply Chain',
    titleEn: 'Enterprise Engineering & Supply Chain Website',
    category: 'company',
    categoryLabel: {
      id: 'Enterprise & B2B',
      en: 'Enterprise & Corporate'
    },
    tier: 3,
    description: {
      id: 'Template website profil perusahaan skala enterprise, supply chain, dan distributor suku cadang industri dengan tipografi editorial modern dan performa tinggi.',
      en: 'Corporate profile website template for enterprise firms, industrial supply chains, and B2B engineering solutions.'
    },
    startingPriceIdr: 2800000,
    previewImage: '/templates/gke-enterprise/preview.webp',
    gallery: ['/templates/gke-enterprise/preview.webp'],
    demoUrl: '/templates/demo/gke',
    buyersCount: 188
  }
];

export const durationPlans: DurationPlan[] = [
  {
    id: '1-year',
    years: 1,
    name: {
      id: 'Paket 1 Tahun',
      en: '1-Year Package'
    },
    priceIdr: 1250000,
    originalPriceIdr: 1500000,
    monthlyEquivalentIdr: 104000,
    savings: {
      id: 'Hemat Rp 250.000',
      en: 'Save Rp 250.000'
    },
    features: {
      id: [
        'Domain aktif 1 tahun (.com / .id)',
        'Cloud hosting berkecepatan tinggi',
        'SSL keamanan gratis',
        'Akun email bisnis',
        'Pemeliharaan & backup berkala',
        'Dukungan teknis standar'
      ],
      en: [
        '1-year active domain (.com / .id)',
        'High-speed cloud hosting',
        'Free SSL security certificate',
        'Business email account',
        'Routine maintenance and backups',
        'Standard technical support'
      ]
    }
  },
  {
    id: '2-year',
    years: 2,
    name: {
      id: 'Paket 2 Tahun',
      en: '2-Year Package'
    },
    priceIdr: 2250000,
    originalPriceIdr: 2800000,
    monthlyEquivalentIdr: 93750,
    savings: {
      id: 'Hemat Rp 550.000',
      en: 'Save Rp 550.000'
    },
    features: {
      id: [
        'Domain aktif 2 tahun',
        'Hosting unlimited bandwidth',
        'SSL keamanan gratis',
        'Akun email bisnis (hingga 3 akun)',
        'Pemeliharaan sistem & backup berkala',
        'Dukungan teknis respons cepat'
      ],
      en: [
        '2-year active domain',
        'Unlimited bandwidth hosting',
        'Free SSL certificate',
        'Business email accounts (up to 3)',
        'Routine maintenance and backups',
        'Fast-response technical support'
      ]
    }
  },
  {
    id: '3-year',
    years: 3,
    name: {
      id: 'Paket 3 Tahun',
      en: '3-Year Package'
    },
    priceIdr: 2950000,
    originalPriceIdr: 4200000,
    monthlyEquivalentIdr: 81900,
    badge: {
      id: 'HEMAT PALING BANYAK',
      en: 'BEST VALUE - SAVE MOST'
    },
    savings: {
      id: 'Hemat Rp 1.250.000',
      en: 'Save Rp 1.250.000'
    },
    features: {
      id: [
        'Domain 3 tahun',
        'Hosting unlimited',
        'SSL gratis',
        'Akun email bisnis',
        'Hemat paling banyak',
        'Prioritas support',
        'Pemeliharaan & maintenance rutin',
        'Garansi uptime 99.9% & proteksi keamanan'
      ],
      en: [
        'Domain 3 years',
        'Hosting unlimited',
        'Free SSL certificate',
        'Business email accounts',
        'Maximum savings',
        'Priority support',
        'Routine maintenance and updates',
        '99.9% Uptime guarantee'
      ]
    }
  }
];

export const websiteEditingAddon: AddonItem = {
  id: 'editing',
  priceIdr: 250000,
  name: {
    id: 'Jasa Editing Website',
    en: 'Website Content Editing Service'
  },
  description: {
    id: 'Tim Gilabs bantu input seluruh teks, upload foto produk/layanan, pasang logo perusahaan, dan penyesuaian layout sampai website siap online.',
    en: 'The Gilabs team assists in inputting texts, uploading product photos, applying your logo, and adjusting layout ready for launch.'
  }
};

export const templatesPageContent = {
  id: {
    heroTag: 'Website Siap Pakai • Langsung Online Hari Ini',
    heroTitle: 'Malas Cari Vendor? Website Siap Jadi Hari Ini!',
    heroSubtitle: 'Pilih template siap pakai, langsung online hari ini lengkap dengan domain dan hosting. Bisa kami bantu editkan konten atau custom sesuai kebutuhan.',
    valueProps: [
      {
        badge: '01. Cepat & Hemat',
        title: 'Tanpa Ribet Cari Vendor',
        description: 'Tanpa meeting panjang atau biaya overbudget. Website profesional siap pakai dalam sekejap.'
      },
      {
        badge: '02. Instan',
        title: 'Langsung Online Hari Ini',
        description: 'Pilih desain, hubungkan domain dan hosting, website langsung aktif hari ini.'
      },
      {
        badge: '03. Terima Beres',
        title: 'Bisa Dieditkan & Custom',
        description: 'Malas edit sendiri? Tim kami bantu isi konten dan logo. Butuh fitur khusus juga bisa.'
      }
    ],
    searchPlaceholder: 'Cari template website...',
    sortOptions: {
      recommended: 'Rekomendasi',
      priceLow: 'Harga: Terendah ke Tertinggi',
      priceHigh: 'Harga: Tertinggi ke Terendah',
      popular: 'Paling Banyak Dipilih'
    },
    showingResults: 'Menampilkan {count} template',
    emptyStateTitle: 'Template tidak ditemukan',
    emptyStateSubtitle: 'Coba ubah kata kunci pencarian atau pilih kategori lain.',
    card: {
      startingFrom: 'Mulai dari',
      perYear: '/ tahun',
      includedNote: 'Termasuk Domain + Hosting + Maintenance',
      oneTimePayment: 'Sekali bayar',
      viewDetail: 'Detail',
      buyNow: 'Beli Template Ini',
      livePreview: 'Lihat Demo',
      buyersNote: '{count} orang memilih ini'
    },
    modal: {
      overview: 'Ringkasan',
      features: 'Fitur Utama',
      included: 'Sudah Termasuk dalam Paket',
      close: 'Tutup',
      priceLabel: 'Mulai dari',
      buyNow: 'Pilih Paket & Konfigurasi',
      openDemo: 'Buka Live Demo',
      guaranteeNote: 'Sudah termasuk nama domain, cloud hosting, SSL, email bisnis, dan bantuan tim teknis.'
    },
    faqTitle: 'Pertanyaan Umum Seputar Pemesanan Website',
    faqSubtitle: 'Jawaban seputar aktivasi instan, bantuan edit konten, opsi custom, dan hosting.',
    faqs: [
      {
        q: 'Berapa lama waktu yang dibutuhkan sampai website bisa langsung aktif?',
        a: 'Website langsung aktif hari ini setelah domain terhubung. Jika menggunakan jasa editing konten, proses selesai dalam hitungan jam hingga maksimal 24 jam.'
      },
      {
        q: 'Bagaimana jika saya malas atau tidak punya waktu mengedit konten sendiri?',
        a: 'Pilih add-on "Jasa Editing Website". Cukup kirim materi via WhatsApp, tim kami yang menginput teks, foto, dan logo sampai siap tayang.'
      },
      {
        q: 'Apakah harga paket sudah termasuk domain dan hosting?',
        a: 'Ya, sudah termasuk nama domain (.com/.id), cloud hosting cepat, SSL gratis, email bisnis, dan pemeliharaan rutin tanpa biaya tersembunyi.'
      },
      {
        q: 'Apakah template ini bisa di-custom atau ditambah fitur baru di kemudian hari?',
        a: 'Bisa. Dibuat dengan kode modern standar software house, Anda bisa menambahkan modul baru, integrasi API, atau custom fitur kapan saja.'
      },
      {
        q: 'Apa bedanya beli template Gilabs dibanding membuat website custom dari nol ke vendor lain?',
        a: 'Bikin website dari nol ke vendor butuh 1-3 bulan dan biaya tinggi. Template Gilabs hemat hingga 80% dengan kualitas setara, siap online hari ini.'
      },
      {
        q: 'Bagaimana prosedur perpanjangan setelah masa paket habis?',
        a: 'Kami akan kirimkan pengingat sebelum masa paket habis dengan biaya perpanjangan domain dan hosting yang transparan tanpa biaya tersembunyi.'
      }
    ],
    customCta: {
      title: 'Punya kebutuhan fitur khusus atau custom website?',
      subtitle: 'Jika bisnis Anda membutuhkan modul spesifik, integrasi sistem, atau desain dari nol, tim software engineer Gilabs siap membantu.',
      buttonText: 'Konsultasi via WhatsApp'
    }
  },
  en: {
    heroTag: 'Turnkey Website Templates • Go Live Today',
    heroTitle: 'No Time for Vendors? Your Website Is Ready Today!',
    heroSubtitle: 'Ready-to-use business templates, live today with domain and hosting included. We can edit content or build custom features for you.',
    valueProps: [
      {
        badge: '01. Fast & Affordable',
        title: 'Skip the Vendor Hassle',
        description: 'No endless meetings or high costs. Launch a professional website in minutes.'
      },
      {
        badge: '02. Instant Launch',
        title: 'Launch Online Today',
        description: 'Pick a design, connect your domain and hosting, and go live today.'
      },
      {
        badge: '03. Turnkey',
        title: 'We Edit & Customize for You',
        description: 'No time to edit? We populate your content and logo, or build custom features on demand.'
      }
    ],
    searchPlaceholder: 'Search website templates...',
    sortOptions: {
      recommended: 'Recommended',
      priceLow: 'Price: Low to High',
      priceHigh: 'Price: High to Low',
      popular: 'Most Popular'
    },
    showingResults: 'Showing {count} templates',
    emptyStateTitle: 'No templates found',
    emptyStateSubtitle: 'Try adjusting your search terms or select another category.',
    card: {
      startingFrom: 'Starting from',
      perYear: '/ year',
      includedNote: 'Includes Domain + Hosting + Maintenance',
      oneTimePayment: 'One-time payment',
      viewDetail: 'Details',
      buyNow: 'Buy This Template',
      livePreview: 'Live Preview',
      buyersNote: '{count} users chose this'
    },
    modal: {
      overview: 'Overview',
      features: 'Key Features',
      included: 'Included in the Package',
      close: 'Close',
      priceLabel: 'Starting from',
      buyNow: 'Select Plan & Configure',
      openDemo: 'Open Live Demo',
      guaranteeNote: 'Includes domain registration, cloud hosting, SSL, business email, and support.'
    },
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Quick answers about instant setup, content editing, custom features, and hosting.',
    faqs: [
      {
        q: 'How fast can the website go live?',
        a: 'Your website can go live today once the domain is connected. If you choose our editing service, content setup takes only a few hours up to 24 hours.'
      },
      {
        q: 'What if I do not have time or prefer not to edit content myself?',
        a: 'Select the "Website Content Editing" add-on. Simply send your materials via WhatsApp, and our team will handle texts, images, and branding for you.'
      },
      {
        q: 'Is domain and hosting included in the price?',
        a: 'Yes, all-in. Every plan includes your domain (.com/.id), high-speed cloud hosting, free SSL, business email, and regular maintenance.'
      },
      {
        q: 'Can this template be customized or extended with new features later?',
        a: 'Yes. Built with clean modern code, our engineering team can add custom features, integrations, or workflows whenever your business grows.'
      },
      {
        q: 'How does a Gilabs template differ from hiring an agency to build from scratch?',
        a: 'Agencies take 1-3 months with high overhead. Gilabs templates save you up to 80% with identical professional quality, ready today.'
      },
      {
        q: 'How does renewal work after the period ends?',
        a: 'We will send a renewal reminder before your plan expires with transparent rates and no hidden fees.'
      }
    ],
    customCta: {
      title: 'Need custom development or proprietary features?',
      subtitle: 'If your business requires custom workflows or unique design, our engineering team is ready to build it for you.',
      buttonText: 'Discuss via WhatsApp'
    }
  }
};
