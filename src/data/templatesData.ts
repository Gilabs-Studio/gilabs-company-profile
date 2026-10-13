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
    heroTag: 'Katalog Template Website',
    heroTitle: 'Pilih Desain yang Mewakili Bisnismu',
    heroSubtitle: 'Solusi lengkap pembuatan website bisnis: sudah termasuk template siap pakai, domain, cloud hosting cepat, SSL keamanan, email bisnis, dan pemeliharaan rutin.',
    guarantees: [
      'Domain & Hosting Termasuk',
      'SSL Gratis & Email Bisnis',
      'Pemeliharaan & Maintenance Rutin',
      'Dukungan Teknis Langsung'
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
    faqSubtitle: 'Informasi mengenai paket domain, hosting, pemeliharaan rutin, dan jasa editing website.',
    faqs: [
      {
        q: 'Apakah harga sudah termasuk domain dan hosting?',
        a: 'Ya. Setiap paket sudah mencakup nama domain pilihan Anda (.com/.id), cloud hosting cepat, SSL keamanan, akun email bisnis, dan pemeliharaan berkala selama periode paket aktif.'
      },
      {
        q: 'Apa itu add-on Jasa Editing Website?',
        a: 'Jika Anda belum memiliki waktu untuk mengedit konten sendiri, Anda dapat memilih add-on Jasa Editing Website (+Rp 250.000). Tim kami akan membantu memasukkan seluruh teks profil, foto produk/layanan, logo, dan kontak sampai website siap tayang.'
      },
      {
        q: 'Apakah bisa ganti template setelah website aktif?',
        a: 'Bisa. Desain template dapat disesuaikan atau diganti kapan saja dengan bantuan tim support kami.'
      },
      {
        q: 'Bagaimana prosedur perpanjangan setelah masa paket habis?',
        a: 'Sebelum masa paket berakhir (1, 2, atau 3 tahun), kami akan mengirimkan pengingat perpanjangan hosting dan domain dengan biaya transparan tanpa biaya tersembunyi.'
      }
    ],
    customCta: {
      title: 'Punya kebutuhan fitur khusus atau custom website?',
      subtitle: 'Jika bisnis Anda membutuhkan modul spesifik, integrasi sistem, atau desain dari nol, tim software engineer Gilabs siap membantu.',
      buttonText: 'Konsultasi via WhatsApp'
    }
  },
  en: {
    heroTag: 'Website Template Catalog',
    heroTitle: 'Choose a Design That Represents Your Business',
    heroSubtitle: 'Complete business website solution: includes ready-to-use template, domain, high-speed cloud hosting, SSL, business email, and regular maintenance.',
    guarantees: [
      'Domain & Hosting Included',
      'Free SSL & Business Email',
      'Continuous Maintenance',
      'Direct Technical Support'
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
    faqSubtitle: 'Information regarding domain, hosting packages, regular maintenance, and editing services.',
    faqs: [
      {
        q: 'Is domain and hosting included in the price?',
        a: 'Yes. Every package includes your chosen domain name (.com/.id), fast cloud hosting, SSL certificate, business email accounts, and regular maintenance.'
      },
      {
        q: 'What is the Website Content Editing add-on?',
        a: 'If you want our team to populate your texts, photos, logo, and contact details, you can add the Editing Service (+Rp 250.000). We deliver a 100% turnkey website.'
      },
      {
        q: 'Can I switch templates later?',
        a: 'Yes. Templates can be adjusted or upgraded at any time with the assistance of our support team.'
      },
      {
        q: 'How does renewal work after the period ends?',
        a: 'We send renewal notifications prior to your plan expiry (1, 2, or 3 years) with transparent standard renewal rates.'
      }
    ],
    customCta: {
      title: 'Need custom development or proprietary features?',
      subtitle: 'If your business requires custom workflows or unique design, our engineering team is ready to build it for you.',
      buttonText: 'Discuss via WhatsApp'
    }
  }
};
