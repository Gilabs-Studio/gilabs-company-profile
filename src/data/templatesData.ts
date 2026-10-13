export interface TemplateItem {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  category: 'service' | 'ekspor' | 'company';
  categoryLabel: {
    id: string;
    en: string;
  };
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
  { id: 'service', label: { id: 'Website Jasa & Konsultan', en: 'Services & Consultants' } },
  { id: 'ekspor', label: { id: 'Produk Ekspor & Manufaktur', en: 'Export Products & Industry' } },
  { id: 'company', label: { id: 'Company Profile Korporat', en: 'Corporate Company Profile' } },
] as const;

export const templatesData: TemplateItem[] = [
  {
    id: 'website-jasa',
    slug: 'website-jasa-konsultan',
    title: 'Website Jasa & Konsultan Bisnis',
    titleEn: 'Services & Business Consulting Website',
    category: 'service',
    categoryLabel: {
      id: 'Website Jasa',
      en: 'Services'
    },
    description: {
      id: 'Template website profil penyedia jasa, konsultan, klinik, agensi, dan kontraktor. Dilengkapi katalog layanan, tim ahli, testimoni klien, dan tombol chat WhatsApp langsung.',
      en: 'Professional website template for service providers, consultants, agencies, and clinics. Features service catalog, team profiles, client reviews, and direct WhatsApp chat.'
    },
    startingPriceIdr: 1250000,
    previewImage: '/templates/project-01/preview.svg',
    gallery: [
      '/templates/project-01/preview.svg'
    ],
    demoUrl: '/templates/demo/project-01',
    buyersCount: 196
  },
  {
    id: 'website-ekspor',
    slug: 'website-ekspor-manufaktur',
    title: 'Website Ekspor & Manufaktur',
    titleEn: 'Export & Manufacturing Website',
    category: 'ekspor',
    categoryLabel: {
      id: 'Produk Ekspor',
      en: 'Export Products'
    },
    description: {
      id: 'Template website untuk eksportir komoditas, pabrik manufaktur, dan pengrajin lokal. Dilengkapi spesifikasi produk, sertifikasi mutu, dokumen ekspor, dan inquiry buyer.',
      en: 'Website template for commodity exporters, manufacturing plants, and artisans. Features product specifications, quality certifications, and direct buyer inquiry.'
    },
    startingPriceIdr: 1250000,
    previewImage: '/templates/project-02/preview.svg',
    gallery: [
      '/templates/project-02/preview.svg'
    ],
    demoUrl: '/templates/demo/project-02',
    buyersCount: 210
  },
  {
    id: 'company-profile',
    slug: 'company-profile-korporat',
    title: 'Website Company Profile Korporat',
    titleEn: 'Corporate Company Profile Website',
    category: 'company',
    categoryLabel: {
      id: 'Company Profile',
      en: 'Company Profile'
    },
    description: {
      id: 'Template profil perusahaan modern dan elegan untuk korporat, holding company, dan B2B. Membangun kredibilitas tinggi di hadapan klien dan mitra bisnis besar.',
      en: 'Modern and credible corporate profile website template for enterprises and B2B firms. Designed to build strong authority with prospective partners.'
    },
    startingPriceIdr: 1250000,
    previewImage: '/templates/project-01/preview.svg',
    gallery: [
      '/templates/project-01/preview.svg'
    ],
    demoUrl: '/templates/demo/project-01',
    buyersCount: 184
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
    heroTitle: 'Malas Cari Vendor? Website Siap Jadi Hari Ini',
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
      buyNow: 'Pilih & Pesan',
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
    heroTitle: 'No Time for Vendors? Your Website Is Ready Today',
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
      buyNow: 'Select & Order',
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
