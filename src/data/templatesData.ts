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
  hidden?: boolean;
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
export type AddonUnit = 'per-page' | 'per-round' | 'per-language';

export interface AddonItem {
  id: 'extra-page' | 'extra-revision' | 'multilingual';
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
      id: 'Termasuk cloud hosting & setup',
      en: 'Cloud hosting & setup included'
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
      id: 'Termasuk cloud hosting & setup',
      en: 'Cloud hosting & setup included'
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
      id: 'Termasuk cloud hosting & setup',
      en: 'Cloud hosting & setup included'
    }
  },
  specs: {
    pages: { id: 'Hingga 8 Halaman', en: 'Up to 8 Pages' },
    animation: { id: 'Animasi scroll & transisi khusus', en: 'Custom scroll animations & transitions' },
    assets: { id: 'Kombinasi foto, video & visual dinamis', en: 'Photography, video & dynamic visuals' },
    extras: { id: 'Fitur interaktif & copywriting', en: 'Interactive elements, analytics & copywriting' },
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

export function getTierInfoByNumber(tierNumber: number): TierInfo {
  return tiersData.find((t) => t.tierNumber === tierNumber) || tiersData[0];
}

export const templatesData: TemplateItem[] = [
  {
    id: 'vistaprops',
    slug: 'vistaprops-real-estate-partner',
    title: 'Lorem • Real Estate Komersial',
    titleEn: 'Lorem • Commercial Real Estate',
    category: 'company',
    categoryLabel: {
      id: 'Enterprise & Properti',
      en: 'Enterprise & Property'
    },
    tier: 3,
    description: {
      id: 'Desain website profil perusahaan pengembang kawasan industri, perkantoran Grade-A, dan real estate komersial dengan efek hero stack reveal, tipografi editorial Libre Baskerville, animasi scroll text reveal, dan sticky footer terpadu.',
      en: 'High-end commercial and industrial real estate developer website featuring hero stack reveal animations, Libre Baskerville editorial typography, scroll-driven word transitions, and an immersive sticky reveal footer.'
    },
    previewImage: '/templates/vistaprops/preview.webp',
    gallery: [
      '/templates/vistaprops/preview.webp',
      '/templates/vistaprops/hero-building.webp',
      '/templates/vistaprops/warehouse-aerial.webp',
      '/templates/vistaprops/condo-interior.webp',
      '/templates/vistaprops/project-serra.webp'
    ],
    demoUrl: '/templates/demo/vistaprops',
    buyersCount: 156
  },
  {
    id: 'driveloop',
    slug: 'driveloop-car-rental-adventure',
    title: 'Rental Mobil Adventure',
    titleEn: 'Car Rental Adventure',
    category: 'service',
    categoryLabel: {
      id: 'Rental Mobil & Travel',
      en: 'Car Rental & Travel'
    },
    tier: 2,
    description: {
      id: 'Desain website rental mobil premium, ekspedisi overland, dan petualangan road trip dengan visual cinematic, showcase armada modern, serta formulir pemesanan rute instan.',
      en: 'Premium car rental and overland adventure website featuring cinematic visuals, modern fleet showcases, and direct trip booking integration.'
    },
    previewImage: '/templates/driveloop/preview.webp',
    gallery: [
      '/templates/driveloop/preview.webp',
      '/templates/driveloop/fleet-4x4.webp',
      '/templates/driveloop/fleet-suv.webp',
      '/templates/driveloop/real-stories-bg.webp'
    ],
    demoUrl: '/templates/demo/driveloop',
    buyersCount: 172
  },
  {
    id: 'nusantara',
    slug: 'nusantara-minimalist-apparel',
    title: 'Brand Fashion',
    titleEn: 'Fashion Brand',
    category: 'company',
    categoryLabel: {
      id: 'Fashion & Luxury Apparel',
      en: 'Fashion & Luxury Apparel'
    },
    tier: 2,
    description: {
      id: 'Desain website brand fashion, lookbook editorial, dan apparel minimalis kontemporer dengan tata letak multi-layer terpadu, tipografi brutalist berkelas, dan showcase koleksi berpresisi tinggi.',
      en: 'Modern luxury fashion and minimalist apparel brand website featuring unified multi-layer hero typography, editorial lookbooks, and high-precision product showcases.'
    },
    previewImage: '/templates/nusantara/preview.webp',
    gallery: [
      '/templates/nusantara/preview.webp',
      '/templates/nusantara/featured-model.webp',
      '/templates/nusantara/cat-outerwear.webp',
      '/templates/nusantara/journal-bg.webp'
    ],
    demoUrl: '/templates/demo/nusantara',
    buyersCount: 194
  },
  {
    id: 'la-table-eternelle',
    slug: 'la-table-eternelle-fine-dining',
    title: 'Fine Dining',
    titleEn: 'Fine Dining',
    category: 'service',
    categoryLabel: {
      id: 'Restoran & Hospitality',
      en: 'Dining & Hospitality'
    },
    tier: 1,
    description: {
      id: 'Desain website profil restoran fine dining mewah, lounge eksklusif, dan culinary hospitality dengan tipografi editorial klasik, showcase menu signature berkelas, dan sistem reservasi meja WhatsApp instan.',
      en: 'Luxury fine dining restaurant and hospitality website featuring timeless editorial typography, signature dish showcases, atmospheric ambience gallery, and direct table reservation.'
    },
    previewImage: '/templates/la-table-eternelle/preview.webp',
    gallery: [
      '/templates/la-table-eternelle/preview.webp',
      '/templates/la-table-eternelle/dish-wagyu.webp',
      '/templates/la-table-eternelle/dish-lobster.webp',
      '/templates/la-table-eternelle/dish-mousse.webp'
    ],
    demoUrl: '/templates/demo/la-table-eternelle',
    buyersCount: 165
  },
  {
    id: 'buildly-property',
    slug: 'buildly-contractor-property',
    title: 'Kontraktor Properti',
    titleEn: 'Property Contractor',
    category: 'service',
    categoryLabel: {
      id: 'Jasa & Properti',
      en: 'Services & Property'
    },
    tier: 1,
    description: {
      id: 'Desain website profil kontraktor bangunan, pengembang properti, renovasi & interior dengan visual modern, showcase portofolio proyek real estate, dan metrik kepercayaan.',
      en: 'Modern website for building contractors, property developers, and interior renovation firms featuring modern visuals, project showcases, and credible stats.'
    },
    previewImage: '/templates/buildly/preview.webp',
    gallery: [
      '/templates/buildly/preview.webp',
      '/templates/buildly/project-aurora.webp',
      '/templates/buildly/project-nusantara.webp',
      '/templates/buildly/project-lakeside.webp'
    ],
    demoUrl: '/templates/demo/buildly',
    buyersCount: 178
  },
  {
    id: 'adiguna-machinery',
    slug: 'adiguna-machinery-industrial',
    title: 'Manufaktur Industri',
    titleEn: 'Industrial Manufacturing',
    category: 'manufaktur',
    categoryLabel: {
      id: 'Manufaktur & Industri',
      en: 'Manufacturing & Industry'
    },
    tier: 1,
    description: {
      id: 'Desain website profil manufaktur mesin industri, workshop CNC, dan pabrik presisi berstandar internasional dengan nuansa profesional dan spesifikasi teknis mendalam.',
      en: 'Modern website for industrial machinery manufacturers, CNC workshops, and precision engineering plants.'
    },
    previewImage: '/templates/adiguna-machinery/preview.webp',
    gallery: ['/templates/adiguna-machinery/preview.webp'],
    demoUrl: '/templates/demo/adiguna',
    buyersCount: 142
  },
  {
    id: 'ticketing-events',
    slug: 'euforia-festival-ticketing',
    title: 'Tiket Event',
    titleEn: 'Event Ticketing',
    hidden: true,
    category: 'event',
    categoryLabel: {
      id: 'Event & Tiket',
      en: 'Events & Ticketing'
    },
    tier: 1,
    description: {
      id: 'Desain website event festival musik, konser, dan seminar dengan dynamic live countdown timer, visual ambience rave modern, dan showcase tiket terintegrasi.',
      en: 'High-energy event ticketing and festival website featuring live countdown timers, glowing ambient visual aesthetics, and ticket tier showcases.'
    },
    previewImage: '/templates/ticketing-events/preview.webp',
    gallery: ['/templates/ticketing-events/preview.webp'],
    demoUrl: '/templates/demo/ticketing',
    buyersCount: 204
  },
  {
    id: 'shipagency-maritime',
    slug: 'nautiva-ocean-shipping-agency',
    title: 'Keagenan Kapal',
    titleEn: 'Ship Agency',
    category: 'service',
    categoryLabel: {
      id: 'Jasa & Maritim',
      en: 'Services & Maritime'
    },
    tier: 3,
    description: {
      id: 'Desain website keagenan kapal pelabuhan, manajemen sertifikat perkapalan, dan logistik maritim terintegrasi dengan nuansa oceanic gelap dan metrik operasional terpercaya.',
      en: 'Specialized website for shipping agencies, vessel clearance operations, and maritime logistics companies.'
    },
    previewImage: '/templates/shipagency-maritime/preview.webp',
    gallery: ['/templates/shipagency-maritime/preview.webp'],
    demoUrl: '/templates/demo/shipagency',
    buyersCount: 129
  },
  {
    id: 'tastybite',
    slug: 'tastybite-fnb-studio',
    title: 'Studio Kuliner',
    titleEn: 'Culinary Studio',
    category: 'service',
    categoryLabel: {
      id: 'Kafe, Resto & F&B',
      en: 'Cafe, Restaurant & F&B'
    },
    tier: 2,
    description: {
      id: 'Desain website profil restoran, kafe artisan, dan studio kuliner modern dengan visual ilustratif yang playful, etalase menu signature pastel, integrasi pesanan instan, serta narasi brand yang memikat.',
      en: 'Modern website for restaurants, artisan cafes, and F&B studios featuring playful illustrative visuals, pastel signature menu showcases, instant ordering integration, and compelling brand storytelling.'
    },
    previewImage: '/templates/tastybite/preview.webp',
    gallery: [
      '/templates/tastybite/preview.webp',
      '/templates/tastybite/full-strip.webp',
      '/templates/tastybite/app-banner-card.webp'
    ],
    demoUrl: '/templates/demo/tastybite',
    buyersCount: 168
  },
  {
    id: 'sura-bay',
    slug: 'sura-bay-beach-restaurant',
    title: 'Restoran Beach Club',
    titleEn: 'Beach Club & Restaurant',
    hidden: true,
    category: 'service',
    categoryLabel: {
      id: 'Restoran & Hospitality',
      en: 'Dining & Hospitality'
    },
    tier: 1,
    description: {
      id: 'Desain website beach club mewah, restoran tepi pantai, dan dining eksklusif berkonsep tropical sunset dengan transisi torn-edge artistik, tipografi berkelas, etalase menu signature, dan reservasi meja instan.',
      en: 'Luxury beachfront restaurant and beach club website featuring artistic torn-edge transitions, editorial serif typography, signature dish showcases, and instant table reservation.'
    },
    previewImage: '/templates/sura-bay/preview.webp',
    gallery: [
      '/templates/sura-bay/preview.webp',
      '/templates/sura-bay/hero-bg.webp',
      '/templates/sura-bay/story-brush.webp',
      '/templates/sura-bay/dish-prawn.webp',
      '/templates/sura-bay/dish-tartare.webp',
      '/templates/sura-bay/dish-pasta.webp',
      '/templates/sura-bay/dish-cocktail.webp'
    ],
    demoUrl: '/templates/demo/sura-bay',
    buyersCount: 176
  },
  {
    id: 'gke-enterprise',
    slug: 'gke-enterprise-supply',
    title: 'Enterprise Logistik',
    titleEn: 'Enterprise Logistics',
    category: 'company',
    categoryLabel: {
      id: 'Enterprise & B2B',
      en: 'Enterprise & Corporate'
    },
    tier: 3,
    description: {
      id: 'Desain website profil perusahaan skala enterprise, supply chain, dan distributor suku cadang industri dengan tipografi editorial modern dan performa tinggi.',
      en: 'Corporate profile website for enterprise firms, industrial supply chains, and B2B engineering solutions.'
    },
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
    priceIdr: 1000000,
    originalPriceIdr: 1200000,
    monthlyEquivalentIdr: 83333,
    savings: {
      id: 'Biaya maintenance & cloud hosting 1 thn',
      en: '1-Year maintenance & cloud hosting fee'
    },
    features: {
      id: [
        'Cloud hosting cepat 1 tahun & SSL',
        'Bantuan setup & koneksi domain kustom',
        'Akun email bisnis',
        'Pemeliharaan & backup berkala',
        'Dukungan teknis standar'
      ],
      en: [
        '1-year fast cloud hosting & SSL',
        'Custom domain setup & DNS connection',
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
    priceIdr: 1800000,
    originalPriceIdr: 2000000,
    monthlyEquivalentIdr: 75000,
    savings: {
      id: 'Hemat Rp 200.000 (Rp 900rb/thn)',
      en: 'Save Rp 200.000 (Rp 900k/yr)'
    },
    features: {
      id: [
        'Cloud hosting 2 tahun & SSL gratis',
        'Hosting unlimited bandwidth',
        'Bantuan setup & koneksi domain kustom',
        'Akun email bisnis (hingga 3 akun)',
        'Pemeliharaan sistem & backup berkala',
        'Dukungan teknis respons cepat'
      ],
      en: [
        '2-year cloud hosting & free SSL',
        'Unlimited bandwidth hosting',
        'Custom domain setup & DNS connection',
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
    priceIdr: 2400000,
    originalPriceIdr: 3000000,
    monthlyEquivalentIdr: 66667,
    badge: {
      id: 'HEMAT PALING BANYAK',
      en: 'BEST VALUE - SAVE MOST'
    },
    savings: {
      id: 'Hemat Rp 600.000 (Rp 800rb/thn)',
      en: 'Save Rp 600.000 (Rp 800k/yr)'
    },
    features: {
      id: [
        'Cloud hosting 3 tahun & SSL gratis',
        'Hosting unlimited',
        'Bantuan setup & koneksi domain kustom',
        'Akun email bisnis',
        'Hemat paling banyak',
        'Prioritas support',
        'Pemeliharaan & maintenance rutin',
        'Garansi uptime 99.9% & proteksi keamanan'
      ],
      en: [
        '3-year cloud hosting & free SSL',
        'Hosting unlimited',
        'Custom domain setup & DNS connection',
        'Business email account',
        'Best value savings',
        'Priority support',
        'Routine maintenance & security backups',
        '99.9% Uptime guarantee & security protection'
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
    id: 'multilingual',
    unit: 'per-language',
    priceByTier: { 1: 100000, 2: 100000, 3: 100000 },
    maxQtyByTier: { 1: 5, 2: 5, 3: 5 },
    name: { id: 'Multi Bahasa', en: 'Multi-Language' },
    description: {
      id: 'Dukungan bahasa tambahan (cth. Inggris, Mandarin, Jepang) lengkap dengan selector bahasa.',
      en: 'Support for additional languages (e.g. English, Mandarin, Japanese) with a language switcher.'
    }
  }
];

export const addonUnitLabel: Record<AddonUnit, { id: string; en: string }> = {
  'per-page': { id: '/halaman', en: '/page' },
  'per-round': { id: '/putaran', en: '/round' },
  'per-language': { id: '/bahasa', en: '/language' }
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
    heroTag: 'Website Bisnis Siap Online • Terima Beres',
    heroTitle: 'Masih Pakai Website Biasa?\nYuk, Tampil Luar Biasa!',
    heroSubtitle: 'Tinggalkan proses pembuatan website berbulan-bulan yang melelahkan. Pilih referensi desain modern kelas dunia, kirimkan materi bisnis Anda, dan website profesional Anda siap online dalam hitungan hari lengkap dengan cloud hosting, SSL, dan bantuan setup domain.',
    valueProps: [
      {
        badge: '01. Pilih Desain',
        title: 'Katalog Desain Berkelas',
        description: 'Eksplorasi referensi desain modern siap pakai yang dirancang untuk memperkuat identitas brand bisnis Anda.'
      },
      {
        badge: '02. Kirim Materi',
        title: 'Bebas Pusing Teknis',
        description: 'Cukup kirimkan logo, foto, dan profil usaha Anda via WhatsApp. Tim engineer kami yang memproses seluruh setup konten.'
      },
      {
        badge: '03. Terima Beres',
        title: 'Langsung Siap Online',
        description: 'Website langsung tayang di nama domain bisnis Anda dengan cloud hosting kilat, SSL, dan maintenance berkala tanpa perlu pusing urusan teknis.'
      }
    ],
    searchPlaceholder: 'Cari referensi desain website...',
    sortOptions: {
      recommended: 'Rekomendasi',
      priceLow: 'Harga: Terendah ke Tertinggi',
      priceHigh: 'Harga: Tertinggi ke Terendah',
      popular: 'Paling Banyak Dipilih'
    },
    showingResults: 'Menampilkan {count} desain website',
    emptyStateTitle: 'Desain tidak ditemukan',
    emptyStateSubtitle: 'Coba ubah kata kunci pencarian atau pilih kategori lain.',
    card: {
      startingFrom: 'Mulai dari',
      perYear: '/ tahun',
      includedNote: 'Termasuk Setup Konten + Cloud Hosting + SSL + Maintenance',
      oneTimePayment: 'Sekali bayar',
      viewDetail: 'Detail Desain',
      buyNow: 'Pilih Desain Ini',
      livePreview: 'Lihat Demo',
      buyersNote: '{count} bisnis memilih desain ini'
    },
    modal: {
      overview: 'Ringkasan',
      features: 'Fitur Utama',
      included: 'Sudah Termasuk dalam Paket',
      close: 'Tutup',
      priceLabel: 'Mulai dari',
      buyNow: 'Pesan Website Berbasis Desain Ini',
      openDemo: 'Buka Live Demo',
      guaranteeNote: 'Sudah termasuk kustomisasi materi, cloud hosting cepat, SSL gratis, email bisnis, bantuan koneksi domain, dan tim engineer.'
    },
    faqTitle: 'Pertanyaan Umum Seputar Pemesanan Website',
    faqSubtitle: 'Penjelasan lengkap seputar alur kerja terima beres, kustomisasi konten, hosting, dan domain.',
    faqs: [
      {
        q: 'Apakah saya membeli template mentah / source code untuk diedit sendiri?',
        a: 'Tidak. Layanan kami adalah solusi Terima Beres (Turnkey Website). Anda tidak perlu mengedit file kode, menyewa hosting terpisah, atau repot secara teknis. Cukup pilih referensi desain yang Anda sukai, lalu tim engineer GiLabs yang memodifikasi teks, foto, warna, dan logo bisnis Anda sampai website online dan siap digunakan.'
      },
      {
        q: 'Bagaimana alur pengerjaan website saya?',
        a: 'Sangat praktis: (1) Anda memilih referensi desain di katalog ini, (2) Kirimkan materi bisnis (logo, teks profil, foto produk/jasa) melalui WhatsApp, (3) Tim engineer GiLabs melakukan penyesuaian desain, setup nama domain, dan konfigurasi cloud hosting, (4) Website resmi Anda langsung live dan siap menerima pengunjung.'
      },
      {
        q: 'Berapa lama waktu yang dibutuhkan sampai website resmi bisa online?',
        a: 'Setelah materi bisnis dan nama domain dikonfirmasi, website Anda biasanya siap online dalam 1–3 hari kerja tergantung kelengkapan konten dan tier paket yang Anda pilih.'
      },
      {
        q: 'Apakah biaya paket sudah termasuk nama domain dan cloud hosting?',
        a: 'Paket website sudah mencakup cloud hosting berkecepatan tinggi, sertifikat SSL gratis, email bisnis, konfigurasi server, serta maintenance rutin. Untuk nama domain, Anda dapat menggunakan domain yang sudah Anda miliki atau me-request domain baru yang kami bantu daftarkan sesuai harga resmi registrar.'
      },
      {
        q: 'Apakah website ini bisa ditambah fitur atau custom modul di masa depan?',
        a: 'Tentu saja! Website dibangun dengan teknologi modern berstandar enterprise (Next.js / Astro / Tailwind CSS), sehingga tim engineer GiLabs dapat menambahkan fitur baru, integrasi API, sistem booking, atau dashboard kustom kapan pun bisnis Anda berkembang.'
      },
      {
        q: 'Apa bedanya memesan website di GiLabs dibanding membuat website dari nol ke vendor lain?',
        a: 'Membuat website dari nol ke vendor agensi umumnya memakan waktu 1–3 bulan dengan biaya belasan hingga puluhan juta rupiah. Layanan GiLabs menghadirkan kualitas visual dan arsitektur berkelas dunia yang hemat hingga 80% dan langsung siap online dalam hitungan hari.'
      }
    ],
    customCta: {
      title: 'Punya kebutuhan fitur khusus atau custom website dari nol?',
      subtitle: 'Jika bisnis Anda membutuhkan modul spesifik, integrasi sistem internal, atau arsitektur dari nol, tim software engineer GiLabs siap membantu.',
      buttonText: 'Konsultasi via WhatsApp'
    }
  },
  en: {
    heroTag: 'Turnkey Business Websites • Fully Managed',
    heroTitle: 'Ordinary Website?\nGo Extraordinary!',
    heroSubtitle: 'Skip months of tedious web development. Choose a world-class modern design reference, send us your business materials, and your professional website will be live in days—complete with high-speed hosting, SSL, and custom domain setup.',
    valueProps: [
      {
        badge: '01. Choose Design',
        title: 'World-Class Catalog',
        description: 'Explore curated modern design references tailored to elevate your company brand identity.'
      },
      {
        badge: '02. Send Content',
        title: 'Zero Technical Hassle',
        description: 'Simply send your logo, photos, and company profile via WhatsApp. Our software engineers handle the entire implementation.'
      },
      {
        badge: '03. Turnkey Launch',
        title: 'Ready to Go Live',
        description: 'Your website launches directly on your custom domain, backed by high-speed cloud hosting, SSL, and routine maintenance without technical headaches.'
      }
    ],
    searchPlaceholder: 'Search website design references...',
    sortOptions: {
      recommended: 'Recommended',
      priceLow: 'Price: Low to High',
      priceHigh: 'Price: High to Low',
      popular: 'Most Popular'
    },
    showingResults: 'Showing {count} website designs',
    emptyStateTitle: 'No designs found',
    emptyStateSubtitle: 'Try adjusting your search terms or select another category.',
    card: {
      startingFrom: 'Starting from',
      perYear: '/ year',
      includedNote: 'Includes Content Setup + Cloud Hosting + SSL + Maintenance',
      oneTimePayment: 'One-time payment',
      viewDetail: 'Design Details',
      buyNow: 'Select This Design',
      livePreview: 'Live Preview',
      buyersNote: '{count} businesses chose this design'
    },
    modal: {
      overview: 'Overview',
      features: 'Key Features',
      included: 'Included in the Package',
      close: 'Close',
      priceLabel: 'Starting from',
      buyNow: 'Order Website Based on This Design',
      openDemo: 'Open Live Demo',
      guaranteeNote: 'Includes content personalization, high-speed cloud hosting, free SSL, business email, domain connection assistance, and engineering support.'
    },
    faqTitle: 'Frequently Asked Questions',
    faqSubtitle: 'Clear answers regarding turnkey execution, content setup, hosting, and domains.',
    faqs: [
      {
        q: 'Am I buying raw template files or source code to edit myself?',
        a: 'No. Our service is a Done-For-You Turnkey Website solution. You never have to touch code, manage separate hosting, or deal with technical complexity. Simply choose your preferred design reference, and GiLabs software engineers will customize your copy, branding, photos, and logo until the website is live and production-ready.'
      },
      {
        q: 'What is the workflow for launching my website?',
        a: 'The process is effortless: (1) Select your design reference from this catalog, (2) Send your business materials (logo, text, product photos) via WhatsApp, (3) Our engineers customize the design, connect your domain, and configure cloud hosting, (4) Your official website goes live and is ready for visitors.'
      },
      {
        q: 'How long until my website goes live?',
        a: 'Once your business materials and domain name are confirmed, your website typically goes live within 1 to 3 business days, depending on content volume and selected package tier.'
      },
      {
        q: 'Is domain registration and cloud hosting included?',
        a: 'The package includes high-speed cloud hosting, free SSL certificate, business email, server setup, and routine maintenance. For the domain name, you can use your existing domain or request a new domain, which we help register at official registrar rates.'
      },
      {
        q: 'Can this website be extended with custom features in the future?',
        a: 'Absolutely! Built with clean modern technologies (Next.js / Astro / Tailwind CSS), our engineering team can integrate custom APIs, booking workflows, e-commerce, or dashboards whenever your business scales.'
      },
      {
        q: 'How does GiLabs compare to traditional web agencies?',
        a: 'Building from scratch with an agency typically takes 1–3 months and costs significantly more. GiLabs delivers identical or superior visual elegance and engineering quality at up to 80% lower cost, ready in just a few days.'
      }
    ],
    customCta: {
      title: 'Need bespoke features or custom development from scratch?',
      subtitle: 'If your business requires proprietary workflows, internal integrations, or custom architecture from scratch, our software engineering team is ready to build it.',
      buttonText: 'Discuss via WhatsApp'
    }
  }
};
