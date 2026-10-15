export interface IndustryAdaptation {
  id: string;
  industry: { id: string; en: string };
  title: { id: string; en: string };
  description: { id: string; en: string };
  image: string;
  tags: string[];
}

export interface TemplateServiceFeature {
  title: { id: string; en: string };
  description: { id: string; en: string };
  tag: string;
  icon: string;
}

export interface TemplateTechSpec {
  label: { id: string; en: string };
  value: { id: string; en: string };
}

export interface TemplateItem {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  category: 'manufaktur' | 'company' | 'service' | 'event' | 'ekspor';
  categoryLabel: {
    id: string;
    en: string;
  };
  tier: 1 | 2 | 3;
  description: {
    id: string;
    en: string;
  };
  previewImage: string;
  gallery: string[];
  demoUrl: string;
  buyersCount: number;
  serviceFeatures?: TemplateServiceFeature[];
  industryAdaptations?: IndustryAdaptation[];
  techSpecs?: TemplateTechSpec[];
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

export type AddonTier = 1 | 2 | 3;
export type AddonUnit = 'per-page' | 'per-round' | 'flat';

export interface AddonItem {
  id: 'extra-page' | 'extra-revision' | 'copywriting' | 'bilingual';
  unit: AddonUnit;
  priceByTier: Record<AddonTier, number | null>;
  maxQtyByTier: Record<AddonTier, number>;
  includedIn?: AddonTier[];
  name: {
    id: string;
    en: string;
  };
  description: {
    id: string;
    en: string;
  };
  upgradeHint?: {
    id: string;
    en: string;
  };
}

export const templateCategories = [
  { id: 'all', label: { id: 'Semua Kategori', en: 'All Categories' } },
  { id: 'manufaktur', label: { id: 'Manufaktur & Industri', en: 'Manufacturing & Industry' } },
  { id: 'company', label: { id: 'Enterprise & B2B', en: 'Enterprise & Corporate' } },
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
    originalPrice?: string;
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
  title: 'Tier 1 • Essential',
  titleEn: 'Tier 1 • Essential',
  tagline: {
    id: 'Website satu halaman yang ringkas dan profesional',
    en: 'A clean and professional one-page website'
  },
  description: {
    id: 'Tampilkan profil bisnis, layanan, dan informasi penting dalam satu halaman yang mudah diakses.',
    en: 'Showcase your business, services, and key information on one easy-to-access page.'
  },
  pricing: {
    price: 'Rp 689.000',
    originalPrice: 'Rp 959.000',
    discountLabel: { id: 'Hemat 28%', en: '28% OFF' },
    note: {
      id: 'Termasuk domain, hosting & setup',
      en: 'Domain, hosting & setup included'
    }
  },
  specs: {
    pages: { id: '1 Halaman', en: '1 Page' },
    animation: { id: 'Desain ringan & responsif', en: 'Lightweight & responsive design' },
    assets: { id: 'Visual sesuai bisnis Anda', en: 'Business-tailored visuals' },
    extras: { id: 'Form kontak & tombol WhatsApp', en: 'Contact form & WhatsApp button' },
    revisions: { id: '1x revisi', en: '1 revision' }
  }
},
{
  tierNumber: 2,
  title: 'Tier 2 • Motion',
  titleEn: 'Tier 2 • Motion',
  tagline: {
    id: 'Website multi-halaman dengan animasi halus',
    en: 'A multi-page website with smooth animations'
  },
  description: {
    id: 'Tampilkan bisnis Anda secara lebih lengkap dengan desain dinamis dan pengalaman navigasi yang nyaman.',
    en: 'Showcase your business with dynamic visuals and a smooth browsing experience.'
  },
  pricing: {
    price: 'Rp 1.289.000',
    originalPrice: 'Rp 2.199.000',
    discountLabel: { id: 'Hemat 41%', en: '41% OFF' },
    note: {
      id: 'Termasuk domain, hosting & setup',
      en: 'Domain, hosting & setup included'
    }
  },
  specs: {
    pages: { id: '3–5 Halaman', en: '3–5 Pages' },
    animation: { id: 'Animasi & efek scroll', en: 'Animations & scroll effects' },
    assets: { id: 'Visual sesuai identitas brand', en: 'Brand-tailored visuals' },
    extras: { id: 'Form kontak & tombol WhatsApp', en: 'Contact form & WhatsApp button' },
    revisions: { id: '2x revisi', en: '2 revisions' }
  }
},
{
  tierNumber: 3,
  title: 'Tier 3 • Immersive',
  titleEn: 'Tier 3 • Immersive',
  tagline: {
    id: 'Website dengan storytelling visual yang memikat',
    en: 'A website with immersive visual storytelling'
  },
  description: {
    id: 'Perkuat karakter brand dengan visual dinamis, animasi khusus, dan transisi yang berkesan.',
    en: 'Elevate your brand with dynamic visuals, custom animations, and memorable transitions.'
  },
  pricing: {
    price: 'Rp 2.800.000',
    originalPrice: 'Rp 4.950.000',
    discountLabel: { id: 'Hemat 43%', en: '43% OFF' },
    note: {
      id: 'Termasuk domain, hosting & setup',
      en: 'Domain, hosting & setup included'
    }
  },
  specs: {
    pages: { id: 'Hingga 8 Halaman', en: 'Up to 8 Pages' },
    animation: { id: 'Animasi scroll & transisi khusus', en: 'Custom scroll animations & transitions' },
    assets: { id: 'Kombinasi foto, video & visual dinamis', en: 'Photography, video & dynamic visuals' },
    extras: { id: 'Elemen 3D & copywriting', en: '3D elements, analytics & copywriting' },
    revisions: { id: '3x revisi', en: '3 revisions' }
  }
},
{
  tierNumber: 4,
  title: 'Tier 4 • Custom Development',
  titleEn: 'Tier 4 • Custom Development',
  hookHeadline: {
    id: 'Butuh Website dengan Fitur Khusus?',
    en: 'Need a Website with Custom Features?'
  },
  tagline: {
    id: 'Solusi digital yang dibangun sesuai kebutuhan bisnis',
    en: 'Digital solutions built around your business needs'
  },
  description: {
    id: 'Bangun website, dashboard, atau sistem terintegrasi dengan fitur dan alur kerja yang dirancang khusus untuk bisnis Anda.',
    en: 'Build websites, dashboards, or integrated systems with features and workflows tailored to your business.'
  },
  pricing: {
    price: 'Mulai Rp 5.000.000',
    note: {
      id: 'Harga sesuai ruang lingkup proyek',
      en: 'Pricing based on project scope'
    }
  },
  specs: {
    pages: { id: 'Sesuai kebutuhan proyek', en: 'Based on project scope' },
    animation: { id: 'Desain UI/UX khusus', en: 'Custom UI/UX design' },
    assets: { id: 'Desain & aset sesuai kebutuhan', en: 'Tailored design & visual assets' },
    extras: { id: 'CMS, database, API & workflow kustom', en: 'Custom CMS, database, APIs & workflows' },
    revisions: { id: 'Sesuai milestone proyek', en: 'Based on project milestones' }
  },
  ctaText: {
    id: 'Konsultasi via WhatsApp',
    en: 'Discuss Your Project'
  }
}
];

export const defaultIndustryAdaptations: IndustryAdaptation[] = [
  {
    id: 'cafe',
    industry: { id: 'Kafe & Resto (F&B)', en: 'Cafe & Restaurant (F&B)' },
    title: { id: 'Artisan Cafe, Coffee Shop & Restoran', en: 'Artisan Cafe, Coffee Shop & Restaurant' },
    description: {
      id: 'Tata letak diubah menjadi etalase menu signature, foto ambience tempat yang estetik, jam operasional, lokasi Google Maps, dan tombol reservasi meja instan terhubung langsung ke WhatsApp.',
      en: 'Adapted into signature menu showcases, warm ambient photography, business hours, Google Maps, and direct WhatsApp table reservation.'
    },
    image: '/templates/adaptations/cafe-preview.jpg',
    tags: ['Menu Showcase', 'Reservasi WhatsApp', 'Lokasi Maps', 'Foto Ambience']
  },
  {
    id: 'retail',
    industry: { id: 'Fashion & Ritel', en: 'Fashion & Retail' },
    title: { id: 'Butik Fashion, Toko Ritel & Brand Lokal', en: 'Fashion Boutique, Retail & Local Brand' },
    description: {
      id: 'Disesuaikan menjadi galeri lookbook koleksi musiman, highlight produk best seller, ulasan testimoni pembeli, dan integrasi tombol pemesanan instan tanpa perlu checkout ribet.',
      en: 'Customized into seasonal lookbook galleries, best-seller product grids, customer reviews, and direct instant ordering buttons.'
    },
    image: '/templates/adaptations/boutique-preview.jpg',
    tags: ['Lookbook Gallery', 'Best Seller Grid', 'Testimoni Pembeli', 'Order Instan']
  },
  {
    id: 'workshop',
    industry: { id: 'Manufaktur & Teknik', en: 'Manufacturing & Workshop' },
    title: { id: 'Manufaktur Mesin, Bengkel Bubut & Pabrik', en: 'Machinery Manufacturing & CNC Workshop' },
    description: {
      id: 'Ditransformasikan menjadi katalog lini permesinan presisi, tabel spesifikasi teknis, sertifikasi standar mutu ISO, dan formulir permintaan quotation pengadaan B2B.',
      en: 'Transformed into precision machinery showcases, technical specification tables, ISO quality certifications, and B2B RFQ quotation forms.'
    },
    image: '/templates/adaptations/workshop-preview.jpg',
    tags: ['Katalog Mesin', 'Spesifikasi Teknis', 'Sertifikasi Mutu', 'Form RFQ']
  },
  {
    id: 'corporate',
    industry: { id: 'Konsultan & Korporat', en: 'Consulting & Corporate' },
    title: { id: 'Konsultan Bisnis, Jasa Hukum & Korporasi', en: 'Corporate Consulting, Legal & Business Services' },
    description: {
      id: 'Dikonversi menjadi profil kantor kredibel, metrik pencapaian proyek klien, ringkasan paket jasa konsultasi, dan formulir booking jadwal meeting konsultasi online.',
      en: 'Converted into credible corporate profiles, client success metrics, advisory package overviews, and online meeting booking forms.'
    },
    image: '/templates/adaptations/corporate-preview.jpg',
    tags: ['Profil Perusahaan', 'Metrik Kinerja', 'Paket Layanan', 'Jadwal Konsultasi']
  }
];

export function getTierInfoByNumber(tierNumber: number): TierInfo {
  return tiersData.find((t) => t.tierNumber === tierNumber) || tiersData[0];
}

export const templatesData: TemplateItem[] = [
  {
    id: 'buildly-property',
    slug: 'buildly-contractor-property',
    title: 'Website Kontraktor & Pengembang Properti',
    titleEn: 'Modern Property Contractor & Real Estate Website',
    category: 'service',
    categoryLabel: {
      id: 'Jasa & Properti',
      en: 'Services & Property'
    },
    tier: 1,
    description: {
      id: 'Template website profil kontraktor bangunan, pengembang properti, renovasi & interior dengan visual 3D modern, showcase portofolio proyek real estate, dan metrik kepercayaan.',
      en: 'Modern website template for building contractors, property developers, and interior renovation firms featuring 3D visuals, project showcases, and credible stats.'
    },
    previewImage: '/templates/buildly/preview.webp',
    gallery: [
      '/templates/buildly/preview.webp',
      '/templates/buildly/project-aurora.webp',
      '/templates/buildly/project-nusantara.webp',
      '/templates/buildly/project-lakeside.webp'
    ],
    demoUrl: '/templates/demo/buildly',
    buyersCount: 178,
    serviceFeatures: [
      {
        title: { id: 'Konstruksi Bangunan', en: 'Building Construction' },
        description: { id: 'Pembangunan rumah, ruko, kantor dan fasilitas komersial dengan standar terbaik.', en: 'High-standard construction of residences, commercial shophouses, and corporate offices.' },
        tag: 'Core',
        icon: 'Building2'
      },
      {
        title: { id: 'Pengembangan Properti', en: 'Property Development' },
        description: { id: 'Dari perencanaan hingga serah terima, mengelola setiap tahap secara profesional.', en: 'End-to-end management from planning and design to unit handover.' },
        tag: 'Turnkey',
        icon: 'Home'
      },
      {
        title: { id: 'Renovasi & Interior', en: 'Renovation & Interior' },
        description: { id: 'Meningkatkan fungsi dan nilai properti Anda dengan desain modern dan pengerjaan rapi.', en: 'Enhancing functional value and aesthetics with modern interior design.' },
        tag: 'Modern',
        icon: 'Paintbrush'
      },
      {
        title: { id: 'Konsultasi & Perencanaan', en: 'Consultation & Planning' },
        description: { id: 'Solusi perencanaan yang tepat, efisien, dan sesuai dengan kebutuhan anggaran.', en: 'Precise planning, efficient cost estimation, and technical advisory.' },
        tag: 'Advisory',
        icon: 'Compass'
      }
    ],
    techSpecs: [
      { label: { id: 'Tipe Layout', en: 'Layout Architecture' }, value: { id: 'Single Page Unified Hero Canvas', en: 'Single Page Unified Hero Canvas' } },
      { label: { id: 'Gaya Desain', en: 'Design Style' }, value: { id: '3D Isometric Clay & Lavender Theme', en: '3D Isometric Clay & Lavender Theme' } },
      { label: { id: 'Optimasi Kecepatan', en: 'Performance' }, value: { id: 'Skor 98+ Google Lighthouse', en: 'Score 98+ Google Lighthouse' } },
      { label: { id: 'Dukungan Mobile', en: 'Mobile Responsive' }, value: { id: '100% Responsif di Semua Perangkat', en: '100% Responsive Across All Devices' } }
    ],
    industryAdaptations: defaultIndustryAdaptations
  },
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
    previewImage: '/templates/adiguna-machinery/preview.webp',
    gallery: ['/templates/adiguna-machinery/preview.webp'],
    demoUrl: '/templates/demo/adiguna',
    buyersCount: 142,
    industryAdaptations: defaultIndustryAdaptations
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
    previewImage: '/templates/ticketing-events/preview.webp',
    gallery: ['/templates/ticketing-events/preview.webp'],
    demoUrl: '/templates/demo/ticketing',
    buyersCount: 204,
    industryAdaptations: defaultIndustryAdaptations
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
    previewImage: '/templates/shipagency-maritime/preview.webp',
    gallery: ['/templates/shipagency-maritime/preview.webp'],
    demoUrl: '/templates/demo/shipagency',
    buyersCount: 129,
    industryAdaptations: defaultIndustryAdaptations
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
    previewImage: '/templates/gke-enterprise/preview.webp',
    gallery: ['/templates/gke-enterprise/preview.webp'],
    demoUrl: '/templates/demo/gke',
    buyersCount: 188,
    industryAdaptations: defaultIndustryAdaptations
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

/**
 * Add-on katalog template (Tier 1–3).
 * - Harga tetap (bukan rentang) agar jelas di checkout.
 * - `null` pada priceByTier = tidak tersedia; `includedIn` = sudah termasuk paket tier tersebut.
 * - Fitur di luar ini (blog/CMS, booking, pembayaran) diarahkan ke Tier 4 / konsultasi.
 * - Pengisian konten (teks, logo, foto) sudah termasuk di semua tier, jadi tidak dijual terpisah.
 */
export const templateAddons: AddonItem[] = [
  {
    id: 'extra-page',
    unit: 'per-page',
    priceByTier: { 1: 200000, 2: 200000, 3: 200000 },
    maxQtyByTier: { 1: 2, 2: 3, 3: 4 },
    name: { id: 'Halaman Tambahan', en: 'Extra Page' },
    description: {
      id: 'Tambah halaman baru seperti Tentang Kami, Galeri, atau Detail Layanan dengan gaya desain yang sama.',
      en: 'Add new pages such as About Us, Gallery, or Service Details using the same design style.'
    },
    upgradeHint: {
      id: 'Butuh lebih banyak halaman? Upgrade ke tier berikutnya lebih hemat.',
      en: 'Need more pages? Upgrading to the next tier is more cost-effective.'
    }
  },
  {
    id: 'extra-revision',
    unit: 'per-round',
    priceByTier: { 1: 150000, 2: 150000, 3: 150000 },
    maxQtyByTier: { 1: 3, 2: 3, 3: 3 },
    name: { id: 'Revisi Tambahan', en: 'Extra Revision' },
    description: {
      id: 'Satu putaran revisi tambahan di luar jatah revisi paket Anda.',
      en: 'One additional revision round beyond your package allowance.'
    }
  },
  {
    id: 'copywriting',
    unit: 'per-page',
    priceByTier: { 1: 150000, 2: 150000, 3: null },
    maxQtyByTier: { 1: 3, 2: 8, 3: 0 },
    includedIn: [3],
    name: { id: 'Copywriting', en: 'Copywriting' },
    description: {
      id: 'Tim kami menuliskan teks yang persuasif dan sesuai karakter bisnis Anda, per halaman.',
      en: 'Our team writes persuasive, on-brand copy for your business, per page.'
    }
  },
  {
    id: 'bilingual',
    unit: 'flat',
    priceByTier: { 1: 200000, 2: 390000, 3: 850000 },
    maxQtyByTier: { 1: 1, 2: 1, 3: 1 },
    name: { id: 'Dua Bahasa (ID & EN)', en: 'Bilingual (ID & EN)' },
    description: {
      id: 'Website tersedia dalam Bahasa Indonesia dan Inggris dengan tombol ganti bahasa. Sekitar 30% dari harga paket.',
      en: 'Website available in Indonesian and English with a language switcher. Around 30% of the package price.'
    }
  }
];

export const addonUnitLabel: Record<AddonUnit, { id: string; en: string }> = {
  'per-page': { id: '/halaman', en: '/page' },
  'per-round': { id: '/putaran', en: '/round' },
  flat: { id: '', en: '' }
};

/** Status add-on untuk tier tertentu. */
export function getAddonTierInfo(addon: AddonItem, tier: AddonTier) {
  const price = addon.priceByTier[tier];
  const isIncluded = addon.includedIn?.includes(tier) ?? false;
  return {
    price,
    maxQty: addon.maxQtyByTier[tier],
    isIncluded,
    isAvailable: price !== null && !isIncluded
  };
}

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
