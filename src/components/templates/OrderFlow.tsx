"use client";

import React, { useState, useEffect, useMemo } from 'react';
import type { TemplateItem, DurationPlan } from '../../data/templatesData';
import { templatesData, durationPlans, templateCategories, addonUnitLabel, tiersData } from '../../data/templatesData';
import { useOrderAddons } from './hooks/useOrderAddons';
import { getWebsiteOrderWhatsAppLink, getWhatsAppLink } from '../../lib/utils';
import { 
  Check, 
  ExternalLink, 
  X, 
  RotateCcw,
  Languages,
  FileText,
  Loader2,
  ArrowLeft,
  ArrowUpRight,
  ArrowDownRight,
  Search,
  Minus,
  Plus,
  MessageCircle,
  Sparkles,
} from 'lucide-react';

interface OrderFlowProps {
  initialTemplateId?: string;
  lang?: 'id' | 'en';
}

function OrderMiniPreview({ demoUrl, title }: { demoUrl: string; title: string }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.15);

  React.useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    if (width > 0) {
      setScale(width / 1280);
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden bg-muted/30 pointer-events-none select-none">
      <iframe
        src={demoUrl}
        title={title}
        tabIndex={-1}
        loading="lazy"
        className="border-0 absolute top-0 left-0 origin-top-left pointer-events-none"
        style={{
          width: '1280px',
          height: '800px',
          transform: `scale(${scale})`,
        }}
      />
    </div>
  );
}

function OrderTemplateImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const imgRef = React.useRef<HTMLImageElement>(null);
  const thumbSrc = useMemo(() => src.replace(/\/([^\/]+)$/, '/thumb/$1'), [src]);

  // Independent lazy loading via IntersectionObserver
  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '250px' }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Instant display if cached or already completed
  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [isInView, src]);

  return (
    <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* 1. Instant micro-thumbnail (~300B) rendered immediately with blur filter */}
      <img
        src={encodeURI(thumbSrc)}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover filter blur-md scale-105 transition-opacity duration-300 pointer-events-none ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />
      {/* 2. High-res WebP image: Loads in parallel, displays immediately when ready without waiting for other images */}
      {isInView && (
        <img
          ref={imgRef}
          src={encodeURI(src)}
          alt={alt}
          decoding="async"
          onLoad={() => setIsLoaded(true)}
          className={`relative z-10 w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:blur-[3px] ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
}

export default function OrderFlow({ initialTemplateId, lang = 'id' }: OrderFlowProps) {
  // 1. Order State
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    initialTemplateId || templatesData.find((t) => !t.hidden)?.id || 'adiguna-machinery'
  );
  // Initialize to null to avoid SSR hydration mismatch; synchronized via useEffect on mount
  const [customTier, setCustomTier] = useState<1 | 2 | 3 | null>(null);
  // Default to 1-year so base price matches detail page tier price exactly
  const [selectedDurationId, setSelectedDurationId] = useState<'1-year' | '2-year' | '3-year'>('1-year');

  // Addon specification details
  const [targetLanguages, setTargetLanguages] = useState<string>('');
  const [extraPagesNotes, setExtraPagesNotes] = useState<string>('');

  // Customer Contact Info
  const [customerName, setCustomerName] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerEmail, setCustomerEmail] = useState<string>('');

  // Domain Checker State
  const popularTlds = useMemo(() => [
    { ext: '.id' },
    { ext: '.com' },
    { ext: '.co.id' },
    { ext: '.net' },
    { ext: '.org' },
    { ext: '.biz.id' },
  ], []);

  const [consultDomainLater, setConsultDomainLater] = useState<boolean>(false);
  const [domainInput, setDomainInput] = useState<string>('');
  const [selectedTld, setSelectedTld] = useState<string>('.id');
  const [domainCheckStatus, setDomainCheckStatus] = useState<'idle' | 'checking' | 'available' | 'taken' | 'error'>('idle');
  const [checkedDomain, setCheckedDomain] = useState<string>('');
  const [selectedDomain, setSelectedDomain] = useState<string>('');

  // Form Validation & Touch State
  const [touchedFields, setTouchedFields] = useState<{ name?: boolean; phone?: boolean }>({});

  const cleanDomainKeyword = (raw: string) => {
    return raw
      .toLowerCase()
      .replace(/^https?:\/\//i, '')
      .replace(/^www\./i, '')
      .replace(/[^a-z0-9-.]/g, '')
      .replace(/^\.+|\.+$/g, '');
  };

  const handleCheckDomain = async (targetKeyword?: string, targetTld?: string) => {
    const kw = targetKeyword !== undefined ? targetKeyword : domainInput;
    const tld = targetTld !== undefined ? targetTld : selectedTld;
    
    let cleaned = cleanDomainKeyword(kw);
    if (!cleaned) return;

    let domainToCheck = cleaned;
    if (!cleaned.includes('.')) {
      domainToCheck = `${cleaned}${tld.startsWith('.') ? tld : `.${tld}`}`;
    } else {
      const parts = cleaned.split('.');
      const ext = `.${parts.slice(1).join('.')}`;
      if (popularTlds.some(p => p.ext === ext)) {
        setSelectedTld(ext);
      }
    }

    setDomainCheckStatus('checking');
    setCheckedDomain(domainToCheck);

    try {
      const res = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domainToCheck)}&type=SOA`, {
        headers: { Accept: 'application/dns-json' },
      });
      if (!res.ok) throw new Error('DNS query failed');
      const data = await res.json();
      
      // Status 3 is NXDOMAIN (domain does not exist -> available!)
      // Status 0 is NOERROR (domain exists -> taken!)
      if (data.Status === 3) {
        setDomainCheckStatus('available');
        setSelectedDomain(domainToCheck);
      } else if (data.Status === 0) {
        setDomainCheckStatus('taken');
        if (selectedDomain === domainToCheck) {
          setSelectedDomain('');
        }
      } else {
        const nsRes = await fetch(`https://cloudflare-dns.com/dns-query?name=${encodeURIComponent(domainToCheck)}&type=NS`, {
          headers: { Accept: 'application/dns-json' },
        });
        const nsData = await nsRes.json();
        if (nsData.Status === 3) {
          setDomainCheckStatus('available');
          setSelectedDomain(domainToCheck);
        } else {
          setDomainCheckStatus('taken');
          if (selectedDomain === domainToCheck) {
            setSelectedDomain('');
          }
        }
      }
    } catch {
      setDomainCheckStatus('error');
    }
  };

  // UI State for Template Switcher
  const [isChangingTemplate, setIsChangingTemplate] = useState<boolean>(false);
  const [templateSearchQuery, setTemplateSearchQuery] = useState<string>('');
  const [templateFilterCategory, setTemplateFilterCategory] = useState<string>('all');

  // Read URL query parameter on mount if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTemplate = params.get('template');
      const urlTier = parseInt(params.get('tier') || '', 10);

      if (urlTemplate === 'custom') {
        setSelectedTemplateId('custom');
      } else if (urlTemplate && templatesData.some(t => t.id === urlTemplate)) {
        setSelectedTemplateId(urlTemplate);
      } else if (!urlTemplate && [1, 2, 3].includes(urlTier)) {
        setSelectedTemplateId('custom');
      }

      if ([1, 2, 3].includes(urlTier)) {
        setCustomTier(urlTier as 1 | 2 | 3);
      }
    }
  }, []);

  // Derived objects
  const isCustomDesign = selectedTemplateId === 'custom';

  const selectedTemplate = useMemo(() => {
    if (selectedTemplateId === 'custom') {
      return {
        id: 'custom',
        slug: 'custom',
        title: lang === 'en' ? 'Custom Design / Own Reference' : 'Desain Kustom / Referensi Sendiri',
        titleEn: 'Custom Design / Own Reference',
        category: 'service' as const,
        categoryLabel: {
          id: 'Kustom Sesuai Permintaan',
          en: 'Custom on Demand',
        },
        tier: (customTier ?? 1) as 1 | 2 | 3,
        description: {
          id: 'Dibuat khusus mengikuti brand identity, preferensi gaya visual, dan materi bisnis Anda (atau referensi website yang Anda sukai) dengan spesifikasi paket ini.',
          en: 'Crafted specifically to match your brand identity, visual style, and business materials (or website reference of your choice) following this tier’s feature specifications.',
        },
        previewImage: '',
        gallery: [],
        demoUrl: '',
        buyersCount: 24,
      };
    }
    return templatesData.find(t => t.id === selectedTemplateId) || templatesData[0];
  }, [selectedTemplateId, customTier, lang]);

  const activeTier = (customTier ?? selectedTemplate.tier) as 1 | 2 | 3;
  const activeTierInfo = useMemo(() => {
    return tiersData.find((t) => t.tierNumber === activeTier) || tiersData[0];
  }, [activeTier]);
  const activeTierTitle = lang === 'en' ? activeTierInfo.titleEn : activeTierInfo.title;

  const templateDisplayTitle = isCustomDesign
    ? (lang === 'en' ? `Custom Design (${activeTierInfo.titleEn})` : `Desain Kustom (${activeTierInfo.title})`)
    : (lang === 'en' && selectedTemplate.titleEn ? selectedTemplate.titleEn : selectedTemplate.title);

  // Upgrade / Downgrade status determination
  const isUpgrade = !isCustomDesign && activeTier > selectedTemplate.tier;
  const isDowngrade = !isCustomDesign && activeTier < selectedTemplate.tier;
  const tierStatusBadge = isCustomDesign
    ? (lang === 'id' ? `Tier ${activeTier}` : `Tier ${activeTier}`)
    : isUpgrade
    ? (lang === 'id' ? `Upgrade dari Tier ${selectedTemplate.tier}` : `Upgraded from Tier ${selectedTemplate.tier}`)
    : isDowngrade
    ? (lang === 'id' ? `Downgrade dari Tier ${selectedTemplate.tier}` : `Downgraded from Tier ${selectedTemplate.tier}`)
    : (lang === 'id' ? 'Sesuai Desain Asli' : 'Base Design');

  // Dynamic duration plans: 1jt for Year 1 across all tiers (annual maintenance & hosting), with discounted schemes for 2 & 3 years
  const tierBasePrice = useMemo(() => {
    return parseInt(activeTierInfo.pricing.price.replace(/[^0-9]/g, ''), 10);
  }, [activeTierInfo]);

  const dynamicDurationPlans = useMemo(() => {
    return [
      {
        id: '1-year' as const,
        years: 1,
        name: { id: 'Paket 1 Tahun', en: '1-Year Package' },
        priceIdr: 1000000,
        monthlyEquivalentIdr: 83333,
        savings: { id: 'Biaya maintenance & hosting 1 thn', en: '1-Year maintenance & hosting fee' },
        features: durationPlans[0].features
      },
      {
        id: '2-year' as const,
        years: 2,
        name: { id: 'Paket 2 Tahun', en: '2-Year Package' },
        priceIdr: 1800000,
        monthlyEquivalentIdr: 75000,
        savings: { id: 'Hemat Rp 200.000 (Rp 900rb/thn)', en: 'Save Rp 200.000 (Rp 900k/yr)' },
        features: durationPlans[1].features
      },
      {
        id: '3-year' as const,
        years: 3,
        name: { id: 'Paket 3 Tahun', en: '3-Year Package' },
        priceIdr: 2400000,
        monthlyEquivalentIdr: 66667,
        badge: { id: 'HEMAT PALING BANYAK', en: 'BEST VALUE - SAVE MOST' },
        savings: { id: 'Hemat Rp 600.000 (Rp 800rb/thn)', en: 'Save Rp 600.000 (Rp 800k/yr)' },
        features: durationPlans[2].features
      }
    ];
  }, []);

  const selectedDuration = useMemo(() => {
    return dynamicDurationPlans.find((p) => p.id === selectedDurationId) || dynamicDurationPlans[0];
  }, [dynamicDurationPlans, selectedDurationId]);

  // Pricing calculations: Desain/Tier Website + Paket Durasi Maintenance + Add-on
  const {
    addons: addonOptions,
    quantities: addonQuantities,
    setQty: setAddonQty,
    selectedLines: selectedAddonLines,
    addonTotal: addonPrice,
    whatsappAddons,
  } = useOrderAddons(activeTier, lang);

  const durationPrice = selectedDuration.priceIdr;
  const totalPrice = tierBasePrice + durationPrice + addonPrice;

  // Track specific addon counts
  const multilingualQty = addonQuantities['multilingual'] ?? 0;
  const extraPageQty = addonQuantities['extra-page'] ?? 0;

  // Formatted WhatsApp addon lines with customer inputs
  const formattedWhatsappAddons = useMemo(() => {
    return selectedAddonLines.map((line) => {
      let extraNote = '';
      if (line.addon.id === 'multilingual' && targetLanguages.trim()) {
        extraNote = ` (Bahasa: ${targetLanguages.trim()})`;
      } else if (line.addon.id === 'extra-page' && extraPagesNotes.trim()) {
        extraNote = ` (Rencana: ${extraPagesNotes.trim()})`;
      }
      return {
        label: `${line.addon.name[lang]} x${line.qty}${extraNote}`,
        subtotalIdr: line.subtotal,
      };
    });
  }, [selectedAddonLines, targetLanguages, extraPagesNotes, lang]);

  // Filter templates when user clicks "Ganti Template"
  const selectableTemplates = useMemo(() => {
    return templatesData.filter((item) => {
      if (item.hidden) return false;
      const matchesCategory = templateFilterCategory === 'all' || item.category === templateFilterCategory;
      const query = templateSearchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      const title = (lang === 'en' && item.titleEn ? item.titleEn : item.title).toLowerCase();
      return matchesCategory && title.includes(query);
    });
  }, [templateFilterCategory, templateSearchQuery, lang]);

  const visibleCategories = useMemo(() => {
    return templateCategories.filter((cat) => {
      if (cat.id === 'all') return true;
      return templatesData.some((t) => !t.hidden && t.category === cat.id);
    });
  }, []);

  const formatPrice = (val: number) => `Rp ${val.toLocaleString('id-ID')}`;

  // Form Validation Flags
  const isNameValid = customerName.trim().length >= 2;
  const isPhoneValid = customerPhone.trim().replace(/[^0-9]/g, '').length >= 8;
  const isDomainValid = consultDomainLater || Boolean(selectedDomain.trim());
  const isFormValid = isNameValid && isPhoneValid && isDomainValid;

  const validationHint = useMemo(() => {
    if (!isNameValid && !isPhoneValid) {
      return lang === 'en'
        ? 'Please enter your name and WhatsApp number to order.'
        : 'Lengkapi nama dan nomor WhatsApp untuk memesan.';
    }
    if (!isNameValid) {
      return lang === 'en'
        ? 'Please enter your full name to order.'
        : 'Lengkapi nama lengkap untuk memesan.';
    }
    if (!isPhoneValid) {
      return lang === 'en'
        ? 'Please enter your WhatsApp number to order.'
        : 'Lengkapi nomor WhatsApp untuk memesan.';
    }
    if (!isDomainValid) {
      return lang === 'en'
        ? 'Specify a requested domain or choose WhatsApp consultation.'
        : 'Tentukan request nama domain atau centang konsultasi via WhatsApp.';
    }
    return '';
  }, [isNameValid, isPhoneValid, isDomainValid, lang]);

  // WhatsApp Checkout Link
  const whatsappUrl = useMemo(() => {
    return getWebsiteOrderWhatsAppLink({
      templateTitle: isCustomDesign
        ? `${templateDisplayTitle} (Tier ${activeTier}) [Referensi / Materi Klien]`
        : `${templateDisplayTitle} (${activeTierTitle} • ${tierStatusBadge})`,
      tierPriceIdr: tierBasePrice,
      durationPlanName: selectedDuration.name[lang],
      durationYears: selectedDuration.years,
      durationPriceIdr: durationPrice,
      domainName: selectedDomain ? selectedDomain : undefined,
      addons: formattedWhatsappAddons,
      addonPriceIdr: addonPrice,
      totalPriceIdr: totalPrice,
      customerName: customerName.trim() || undefined,
      companyName: companyName.trim() || undefined,
      customerEmail: customerEmail.trim() || undefined,
      lang,
    });
  }, [templateDisplayTitle, activeTierTitle, tierStatusBadge, isCustomDesign, activeTier, tierBasePrice, selectedDuration, durationPrice, selectedDomain, formattedWhatsappAddons, addonPrice, totalPrice, customerName, companyName, customerEmail, lang]);

  // Localized texts
  const t = {
    id: {
      backToCatalog: 'Kembali ke Katalog Desain',
      badge: 'Pemesanan Website Siap Online',
      pageTitle: 'Konfigurasi Website Siap Online',
      pageSubtitle: 'Layanan pembuatan website profesional terima beres: berbasis referensi desain terpilih, termasuk kustomisasi konten & logo, cloud hosting cepat, SSL keamanan, email bisnis, bantuan setup domain, dan pemeliharaan berkala.',
      
      // Section 1
      sectionTemplateNum: '01',
      sectionTemplateTitle: 'Referensi Desain Terpilih',
      sectionTemplateDesc: 'Referensi desain yang Anda pilih akan kami modifikasi dan sesuaikan penuh dengan materi dan identitas brand Anda.',
      changeTemplateBtn: 'Ganti Referensi Desain',
      closeChangeTemplateBtn: 'Tutup Pilihan',
      viewDemo: 'Lihat Demo Langsung',
      buyersCount: 'bisnis memilih desain ini',
      searchTemplatePlaceholder: 'Cari referensi desain lain...',
      activeTemplateBadge: 'Aktif Terpilih',
      
      // Section 2
      sectionDurationNum: '02',
      sectionDurationTitle: 'Pilihan Durasi Paket & Layanan Tambahan',
      sectionDurationDesc: 'Biaya pemeliharaan rutin, cloud hosting kencang, email bisnis, dan keamanan SSL per tahun (Rp 1.000.000/tahun). Pilih paket multi-tahun untuk penghematan lebih besar.',
      perMonth: 'bln',
      includedHeader: 'Fitur sudah termasuk dalam',
      
      // Add-on
      addonHeader: 'Layanan Tambahan Opsional',
      addonDesc: 'Harga add-on menyesuaikan tier desain yang Anda pilih. Kustomisasi teks, logo, dan foto usaha sudah termasuk dalam paket dasar.',
      addonIncluded: 'Sudah termasuk',
      addonMax: 'Maks.',
      addonDecrease: 'Kurangi',
      addonIncrease: 'Tambah',
      addonCustomTitle: 'Butuh blog, booking, katalog, atau pembayaran online?',
      addonCustomDesc: 'Fitur seperti ini disesuaikan per proyek. Konsultasikan gratis dengan tim kami.',
      addonCustomCta: 'Konsultasi',
      
      // Section 3: Domain
      sectionDomainNum: '03',
      sectionDomainTitle: 'Request Nama Domain',
      sectionDomainDesc: 'Tulis usulan nama domain bisnis yang Anda inginkan. Biaya registrasi domain belum termasuk dalam paket template dan akan dikonfirmasi ketersediaan serta biayanya via WhatsApp.',
      domainPlaceholder: 'Ketik usulan nama domain (cth. usahasukses)',
      domainCheckBtn: 'Cek',
      domainCheckingBtn: 'Memeriksa...',
      domainAvailableText: 'tersedia',
      domainTakenText: 'sudah terdaftar',
      domainSelectBtn: 'Gunakan Request Ini',
      domainChangeBtn: 'Ganti',
      domainConsultCheckbox: 'Konsultasikan rekomendasi nama domain nanti via WhatsApp',
      domainConsultDesc: 'Tim software engineer GiLabs akan membantu memeriksa ketersediaan dan merekomendasikan pilihan nama domain bisnis terbaik (.com, .id, dll.) beserta biaya registrasinya saat koordinasi via WhatsApp.',
      
      // Section 4: Contact
      sectionContactNum: '04',
      sectionContactTitle: 'Data Kontak',
      sectionContactDesc: 'Informasi untuk verifikasi kepemilikan nama domain, sertifikat SSL, dan penerbitan invoice resmi.',
      nameLabel: 'Nama Lengkap',
      namePlaceholder: 'cth. Hendra Gunawan',
      nameError: 'Nama lengkap wajib diisi (minimal 2 karakter)',
      companyLabel: 'Nama Usaha / Perusahaan',
      companyPlaceholder: 'cth. PT Citra Mandiri Sejahtera',
      phoneLabel: 'Nomor WhatsApp Aktif',
      phonePlaceholder: 'cth. 081367954062',
      phoneError: 'Nomor WhatsApp wajib diisi (minimal 8 digit)',
      emailLabel: 'Alamat Email',
      emailPlaceholder: 'cth. hendra@bisnis.com',
      optionalText: '(Opsional)',
      privacyNote: 'Data kontak Anda hanya digunakan untuk aktivasi website dan pengiriman invoice resmi GiLabs.',

      // Sidebar Summary
      summaryTitle: 'Ringkasan Pesanan',
      summaryTemplate: 'Desain & Setup Website',
      summaryIncluded: 'Termasuk Paket',
      summaryDuration: 'Paket Durasi Maintenance',
      summaryDomain: 'Request Domain',
      summaryDomainVal: 'Konsultasi Rekomendasi via WA',
      summaryDomainStatus: 'Belum Termasuk (via WA)',
      summaryAddon: 'Add-on',
      summaryTotalLabel: 'Total Investasi',
      summaryTotalNote: 'Investasi awal mencakup Desain Website + Cloud Hosting & Maintenance + SSL + Setup Konten. Perpanjangan tahun berikutnya hanya biaya maintenance & hosting (Rp 1.000.000/thn).',
      ctaWhatsapp: 'Pesan via WhatsApp',
      ctaNote: 'Terhubung langsung dengan tim engineer GiLabs untuk invoice resmi & aktivasi.',
      trustPoints: [
        'Invoice resmi dari PT Griya Innovations Labs',
        'Bantuan aktivasi & setup langsung oleh engineer',
        'Garansi uptime 99.9% & maintenance rutin'
      ]
    },
    en: {
      backToCatalog: 'Back to Design Catalog',
      badge: 'Turnkey Website Order',
      pageTitle: 'Configure Your Turnkey Website',
      pageSubtitle: 'Fully-managed turnkey business website solution: based on your selected design reference, including content & branding setup, high-speed cloud hosting, SSL security, business email, custom domain setup, and routine maintenance.',
      
      // Section 1
      sectionTemplateNum: '01',
      sectionTemplateTitle: 'Selected Design Reference',
      sectionTemplateDesc: 'The design reference you selected will be tailored to match your company branding and content.',
      changeTemplateBtn: 'Switch Design Reference',
      closeChangeTemplateBtn: 'Close Selector',
      viewDemo: 'View Live Demo',
      buyersCount: 'businesses chose this design',
      searchTemplatePlaceholder: 'Search other design references...',
      activeTemplateBadge: 'Selected',
      
      // Section 2
      sectionDurationNum: '02',
      sectionDurationTitle: 'Plan Duration & Inclusions',
      sectionDurationDesc: 'Annual routine maintenance, fast cloud hosting, business email, and SSL security (Rp 1.000.000/year). Multi-year plans offer substantial savings.',
      perMonth: 'mo',
      includedHeader: "What's included in the",
      
      // Add-on
      addonHeader: 'Optional Add-ons',
      addonDesc: 'Add-on pricing follows the tier of your selected design. Text, logo, and photo input are already included in the base package.',
      addonIncluded: 'Included',
      addonMax: 'Max.',
      addonDecrease: 'Decrease',
      addonIncrease: 'Increase',
      addonCustomTitle: 'Need a blog, booking, catalog, or online payments?',
      addonCustomDesc: 'These features are scoped per project. Get a free consultation with our team.',
      addonCustomCta: 'Consult',
      
      // Section 3: Domain
      sectionDomainNum: '03',
      sectionDomainTitle: 'Domain Name Request',
      sectionDomainDesc: 'Specify your preferred business domain name. Domain registration fee is not included in the template package and will be confirmed along with availability via WhatsApp.',
      domainPlaceholder: 'Enter domain name (e.g. yourbusiness)',
      domainCheckBtn: 'Check',
      domainCheckingBtn: 'Checking...',
      domainAvailableText: 'is available',
      domainTakenText: 'is already registered',
      domainSelectBtn: 'Use This Request',
      domainChangeBtn: 'Change',
      domainConsultCheckbox: 'Consult domain recommendations later via WhatsApp',
      domainConsultDesc: 'GiLabs software engineers will help check availability and recommend the best domain options (.com, .id, etc.) along with registration fees during kickoff via WhatsApp.',
      
      // Section 4: Contact
      sectionContactNum: '04',
      sectionContactTitle: 'Contact Details',
      sectionContactDesc: 'Required for official domain ownership validation, SSL security certificates, and invoice generation.',
      nameLabel: 'Full Name',
      namePlaceholder: 'e.g. John Doe',
      nameError: 'Full name is required (min. 2 characters)',
      companyLabel: 'Business / Company Name',
      companyPlaceholder: 'e.g. Acme Corporation Ltd.',
      phoneLabel: 'Active WhatsApp Number',
      phonePlaceholder: 'e.g. +6281367954062',
      phoneError: 'Active WhatsApp number is required (min. 8 digits)',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. contact@business.com',
      optionalText: '(Optional)',
      privacyNote: 'Your details are solely used for domain setup and official GiLabs invoicing.',

      // Sidebar Summary
      summaryTitle: 'Order Summary',
      summaryTemplate: 'Design & Website Setup',
      summaryIncluded: 'Included',
      summaryDuration: 'Maintenance Plan Duration',
      summaryDomain: 'Domain Request',
      summaryDomainVal: 'Consult Recommendation via WA',
      summaryDomainStatus: 'Not Included (via WA)',
      summaryAddon: 'Add-on',
      summaryTotalLabel: 'Total Investment',
      summaryTotalNote: 'Initial investment covers Website Design + Cloud Hosting & Maintenance + SSL + Content Setup. Subsequent renewal is only the maintenance & hosting fee (Rp 1.000.000/yr).',
      ctaWhatsapp: 'Order via WhatsApp',
      ctaNote: 'Connect directly with GiLabs software engineers for official invoice & kickoff.',
      trustPoints: [
        'Official invoice from PT Griya Innovations Labs',
        'Direct onboarding & setup by software engineers',
        '99.9% Uptime guarantee & continuous maintenance'
      ]
    }
  }[lang];

  const catalogUrl = lang === 'en' ? '/en/templates' : '/templates';

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      
      {/* Top Header & Breadcrumbs */}
      <div className="mb-8">
        <a
          href={catalogUrl}
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-3.5 cursor-pointer font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>{t.backToCatalog}</span>
        </a>

        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
          {t.badge}
        </p>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
          {t.pageTitle}
        </h1>
        <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-3xl">
          {t.pageSubtitle}
        </p>
      </div>

      {/* Main 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* ========================================================= */}
        {/* LEFT COLUMN (7 COLS): CONFIGURATOR FLOW                   */}
        {/* ========================================================= */}
        <div className="lg:col-span-7 space-y-10">
          
          {/* ------------------------------------------------------- */}
          {/* SECTION 01: SELECTED TEMPLATE DESIGN                    */}
          {/* ------------------------------------------------------- */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground/70">
                  {t.sectionTemplateNum}
                </span>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {isCustomDesign 
                    ? (lang === 'id' ? 'Paket Website Terpilih' : 'Selected Website Package')
                    : t.sectionTemplateTitle}
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setIsChangingTemplate(!isChangingTemplate)}
                className="text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors inline-flex items-center gap-1"
              >
                {isChangingTemplate ? (
                  <>
                    <X className="w-3.5 h-3.5" />
                    <span>{t.closeChangeTemplateBtn}</span>
                  </>
                ) : (
                  <>
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>{isCustomDesign
                      ? (lang === 'id' ? 'Pilih Desain Siap Pakai' : 'Browse Turnkey Designs')
                      : t.changeTemplateBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Template Card: Sleek, non-bulky layout */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5 transition-all">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                {/* Thumbnail */}
                {isCustomDesign ? (
                  <div className="w-full sm:w-44 aspect-16/10 bg-gradient-to-br from-primary/10 via-brand/5 to-secondary/80 rounded-lg overflow-hidden border border-border/60 shrink-0 flex flex-col items-center justify-center p-3 text-center">
                    <Sparkles className="w-6 h-6 text-primary mb-1.5" />
                    <span className="text-xs font-semibold text-foreground">
                      {lang === 'id' ? 'Desain Kustom' : 'Custom Design'}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono mt-0.5">
                      Tier {activeTier} • {activeTierTitle}
                    </span>
                  </div>
                ) : (
                  <a
                    href={selectedTemplate.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-44 aspect-16/10 bg-muted/40 rounded-lg overflow-hidden border border-border/60 shrink-0 block group relative cursor-pointer"
                  >
                    {selectedTemplate.previewImage ? (
                      <OrderTemplateImage
                        src={selectedTemplate.previewImage}
                        alt={templateDisplayTitle}
                      />
                    ) : (
                      <OrderMiniPreview demoUrl={selectedTemplate.demoUrl} title={templateDisplayTitle} />
                    )}
                    <div className="absolute inset-0 z-20 bg-black/25 dark:bg-black/40 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-background text-foreground text-[11px] font-semibold px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
                        <span>{t.viewDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </a>
                )}

                {/* Details */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {isCustomDesign 
                        ? (lang === 'id' ? 'Kustom Sesuai Permintaan' : 'Custom on Demand')
                        : selectedTemplate.categoryLabel[lang]}
                    </span>
                    <span className="text-[11px] text-muted-foreground">
                      {selectedTemplate.buyersCount} {t.buyersCount}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-foreground">
                    {templateDisplayTitle}
                  </h3>

                  <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                    {selectedTemplate.description[lang]}
                  </p>

                  <div className="pt-1.5 flex items-center gap-4">
                    {isCustomDesign ? (
                      <a
                        href={getWhatsAppLink('template', lang, activeTierTitle)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>{lang === 'id' ? 'Konsultasi Konsep via WhatsApp' : 'Discuss Concept on WhatsApp'}</span>
                      </a>
                    ) : (
                      <a
                        href={selectedTemplate.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>{t.viewDemo}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  {/* Upgrade / Downgrade / Custom Indicator Banner */}
                  <div className="pt-2">
                    {isCustomDesign ? (
                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-primary/10 border border-primary/20 text-xs">
                        <Sparkles className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <div className="font-bold text-primary flex items-center gap-1.5">
                            <span>{lang === 'id' ? 'Status: Pemesanan Desain Kustom' : 'Status: Custom Design Order'}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-primary/20 text-primary font-semibold uppercase">
                              Tier {activeTier}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {lang === 'id'
                              ? `Website akan dirancang khusus dari nol mengikuti brand identity & preferensi Anda dengan spesifikasi ${activeTierInfo.title} (${activeTierInfo.specs.pages[lang]}, ${activeTierInfo.specs.animation[lang]}).`
                              : `Website will be crafted from scratch following your brand identity & preferences with ${activeTierInfo.titleEn} specifications (${activeTierInfo.specs.pages[lang]}, ${activeTierInfo.specs.animation[lang]}).`}
                          </p>
                        </div>
                      </div>
                    ) : isUpgrade ? (
                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-success/10 border border-success/20 text-xs">
                        <ArrowUpRight className="w-4 h-4 text-success shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <div className="font-bold text-success flex items-center gap-1.5">
                            <span>{lang === 'id' ? 'Status: Upgrade Paket' : 'Status: Package Upgrade'}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-success/20 text-success font-semibold uppercase">
                              Tier {activeTier}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {lang === 'id'
                              ? `Template dasar ${selectedTemplate.title} (Tier ${selectedTemplate.tier}) ditingkatkan ke ${activeTierInfo.title}. Fitur bertambah: ${activeTierInfo.specs.pages[lang]}, ${activeTierInfo.specs.animation[lang]}.`
                              : `Base template ${selectedTemplate.title} (Tier ${selectedTemplate.tier}) upgraded to ${activeTierInfo.titleEn}. Includes: ${activeTierInfo.specs.pages[lang]}, ${activeTierInfo.specs.animation[lang]}.`}
                          </p>
                        </div>
                      </div>
                    ) : isDowngrade ? (
                      <div className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs">
                        <ArrowDownRight className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <div className="font-bold text-amber-500 flex items-center gap-1.5">
                            <span>{lang === 'id' ? 'Status: Downgrade Lebih Hemat' : 'Status: Cost-Effective Downgrade'}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-500 font-semibold uppercase">
                              Tier {activeTier}
                            </span>
                          </div>
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {lang === 'id'
                              ? `Template ${selectedTemplate.title} disederhanakan ke ${activeTierInfo.title} (${activeTierInfo.specs.pages[lang]}) untuk efisiensi biaya awal.`
                              : `Template ${selectedTemplate.title} simplified to ${activeTierInfo.titleEn} (${activeTierInfo.specs.pages[lang]}) for cost efficiency.`}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 border border-border/60 text-xs">
                        <Check className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="text-muted-foreground text-[11px]">
                          {lang === 'id'
                            ? `Paket standar bawaan template: ${activeTierInfo.title} (${activeTierInfo.specs.pages[lang]}).`
                            : `Standard base template tier: ${activeTierInfo.titleEn} (${activeTierInfo.specs.pages[lang]}).`}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Tier Selection - Simple & To The Point */}
                  <div className="pt-2 border-t border-border/50 space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-muted-foreground uppercase tracking-wider text-[11px] font-semibold">
                        {lang === 'id' ? 'Ubah Tier Website:' : 'Change Website Tier:'}
                      </span>
                      <span className="text-[11px] font-medium font-mono text-muted-foreground">
                        {tierStatusBadge}
                      </span>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5">
                      {([1, 2, 3] as const).map((tierNum) => {
                        const isSelected = activeTier === tierNum;
                        const tInfo = tiersData.find((t) => t.tierNumber === tierNum) || tiersData[0];
                        const isBase = !isCustomDesign && tierNum === selectedTemplate.tier;
                        return (
                          <button
                            key={tierNum}
                            type="button"
                            onClick={() => setCustomTier(tierNum)}
                            className={`p-2 rounded-lg text-left transition-all cursor-pointer border ${
                              isSelected
                                ? 'bg-primary/10 border-primary ring-1 ring-primary/20 text-foreground'
                                : 'bg-background border-border/80 hover:border-foreground/40 text-muted-foreground'
                            }`}
                          >
                            <div className="flex items-center justify-between text-[11px]">
                              <span className="font-bold">Tier {tierNum}</span>
                              {isBase && (
                                <span className="text-[9px] font-mono px-1 py-0.2 rounded bg-muted text-muted-foreground">
                                  {lang === 'id' ? 'Asli' : 'Base'}
                                </span>
                              )}
                            </div>
                            <div className="text-[11px] font-mono font-bold text-foreground mt-0.5">
                              {tInfo.pricing.price}
                            </div>
                            <div className="text-[9px] text-muted-foreground truncate">
                              {tInfo.specs.pages[lang]}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Switcher Expander */}
            {isChangingTemplate && (
              <div className="bg-secondary/30 border border-border/80 rounded-xl p-4 sm:p-5 space-y-3.5 animate-in fade-in duration-200">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={templateSearchQuery}
                      onChange={(e) => setTemplateSearchQuery(e.target.value)}
                      placeholder={t.searchTemplatePlaceholder}
                      className="w-full text-xs bg-background border border-border rounded-lg pl-8 pr-3 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                    />
                  </div>

                  <div className="flex items-center gap-1 overflow-x-auto">
                    {visibleCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setTemplateFilterCategory(cat.id)}
                        className={`text-xs px-2.5 py-1 rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                          templateFilterCategory === cat.id
                            ? 'bg-foreground text-background font-medium'
                            : 'bg-background border border-border text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {cat.label[lang]}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {/* Option: Desain Kustom (Bebas Referensi) */}
                  {(!templateSearchQuery || (lang === 'en' ? 'custom design reference' : 'desain kustom referensi').includes(templateSearchQuery.toLowerCase())) && (
                    <div
                      onClick={() => {
                        setSelectedTemplateId('custom');
                        setIsChangingTemplate(false);
                      }}
                      className={`bg-card border rounded-lg p-3 flex flex-col justify-between cursor-pointer transition-all hover:border-foreground/50 ${
                        selectedTemplateId === 'custom' ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                      }`}
                    >
                      <div className="aspect-16/10 bg-gradient-to-br from-primary/10 via-brand/5 to-secondary/80 rounded flex flex-col items-center justify-center p-3 text-center mb-2.5 border border-border/50">
                        <Sparkles className="w-6 h-6 text-primary mb-1" />
                        <span className="text-xs font-semibold text-foreground">
                          {lang === 'id' ? 'Desain Kustom' : 'Custom Design'}
                        </span>
                        <span className="text-[10px] text-muted-foreground font-mono">
                          {lang === 'id' ? 'Gunakan Referensi Sendiri' : 'Use Your Own Reference'}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-foreground">
                            {lang === 'id' ? 'Desain Kustom' : 'Custom Design'}
                          </span>
                          <span className="text-[10px] font-mono font-semibold text-primary">
                            {lang === 'id' ? 'Bebas Referensi' : 'Any Reference'}
                          </span>
                        </div>
                        <p className="text-[11px] text-muted-foreground line-clamp-2">
                          {lang === 'id' 
                            ? 'Pilih opsi ini jika Anda ingin website dirancang sesuai preferensi atau referensi bisnis Anda sendiri.' 
                            : 'Choose this option if you want a custom website tailored to your own business references.'}
                        </p>
                      </div>
                    </div>
                  )}

                  {selectableTemplates.map((item) => {
                    const isChosen = item.id === selectedTemplateId;
                    const itemTitle = lang === 'en' && item.titleEn ? item.titleEn : item.title;

                    return (
                      <div
                        key={item.id}
                        onClick={() => {
                          setSelectedTemplateId(item.id); setCustomTier(null);
                          setIsChangingTemplate(false);
                        }}
                        className={`bg-card border rounded-lg p-3 flex flex-col justify-between cursor-pointer transition-all hover:border-foreground/50 ${
                          isChosen ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                        }`}
                      >
                        <div className="aspect-16/10 bg-muted/40 rounded overflow-hidden mb-2.5 border border-border/50 relative group">
                          {item.previewImage ? (
                            <OrderTemplateImage
                              src={item.previewImage}
                              alt={itemTitle}
                            />
                          ) : (
                            <div className="w-full h-full transition-all duration-300 group-hover:scale-105 group-hover:blur-[3px]">
                              <OrderMiniPreview demoUrl={item.demoUrl} title={itemTitle} />
                            </div>
                          )}
                          <div className="absolute inset-0 z-20 bg-black/25 dark:bg-black/40 backdrop-blur-[1px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <span className="bg-background text-foreground text-[10px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1">
                              <span>{t.viewDemo}</span>
                              <ExternalLink className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-foreground truncate mr-2">
                            {itemTitle}
                          </h4>
                          {isChosen && (
                            <span className="text-[10px] font-bold text-primary shrink-0">
                              ✓ {t.activeTemplateBadge}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* ------------------------------------------------------- */}
          {/* SECTION 02: DURATION PLANS & INCLUSIONS (REDESIGNED)    */}
          {/* -> NO CONTAINER OVERLOAD! REFINED & UNIFIED LAYOUT     */}
          {/* ------------------------------------------------------- */}
          <section className="border-t border-border/60 pt-8 space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground/70">
                  {t.sectionDurationNum}
                </span>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {t.sectionDurationTitle}
                </h2>
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.sectionDurationDesc}
              </p>
            </div>

            {/* 3 Duration Plan Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {dynamicDurationPlans.map((plan) => {
                const isSelected = plan.id === selectedDurationId;

                return (
                  <button
                    type="button"
                    key={plan.id}
                    onClick={() => setSelectedDurationId(plan.id)}
                    className={`text-left w-full rounded-xl p-4 flex flex-col justify-between cursor-pointer transition-all border relative ${
                      isSelected
                        ? 'border-primary bg-card shadow-xs ring-2 ring-primary/15'
                        : 'border-border bg-card/60 hover:border-foreground/40'
                    }`}
                  >
                    {/* Badge on 3-Year plan */}
                    {plan.badge && (
                      <div className="absolute -top-2.5 right-3 bg-primary text-primary-foreground text-[9px] font-extrabold px-2 py-0.5 rounded shadow-xs uppercase tracking-wider">
                        {plan.badge[lang]}
                      </div>
                    )}

                    <div>
                      {/* Plan Title & Radio */}
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-bold text-foreground">
                          {plan.name[lang]}
                        </span>
                        <div
                          className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                            isSelected
                              ? 'border-primary bg-primary text-primary-foreground'
                              : 'border-muted-foreground/50'
                          }`}
                        >
                          {isSelected && <Check className="w-2.5 h-2.5" />}
                        </div>
                      </div>

                      {/* Pricing */}
                      <div className="my-2">
                        <div className="text-base sm:text-lg font-extrabold text-foreground tracking-tight">
                          {formatPrice(plan.priceIdr)}
                        </div>
                        <div className="text-[11px] text-muted-foreground">
                          ~Rp {plan.monthlyEquivalentIdr.toLocaleString('id-ID')}/{t.perMonth}
                        </div>
                      </div>
                    </div>

                    {/* Savings tag */}
                    <div className="pt-2 border-t border-border/50 text-[11px] font-semibold text-success">
                      {plan.savings[lang]}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Included Features: Rendered directly in a clean 2-column checklist WITHOUT a box container */}
            <div className="pt-2 space-y-2.5">
              <div className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>{t.includedHeader} {selectedDuration.name[lang]}:</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 pt-0.5">
                {selectedDuration.features[lang].map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80 leading-relaxed">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Optional Add-ons */}
            <div className="pt-4 space-y-3">
              <div>
                <h3 className="text-xs font-semibold text-foreground">{t.addonHeader}</h3>
                <p className="mt-0.5 text-[11px] text-muted-foreground leading-relaxed">{t.addonDesc}</p>
              </div>

              <div className="space-y-2.5">
                {addonOptions.map(({ addon, price, maxQty, isIncluded, isAvailable }) => {
                  const qty = addonQuantities[addon.id] ?? 0;
                  const isActive = qty > 0;
                  const unit = addonUnitLabel[addon.unit][lang];


                  if (isIncluded || !isAvailable) {
                    return (
                      <div
                        key={addon.id}
                        className="flex items-start justify-between gap-3 p-4 rounded-xl border border-dashed border-border bg-muted/20"
                      >
                        <div className="space-y-1">
                          <span className="text-xs font-bold text-foreground">{addon.name[lang]}</span>
                          <p className="text-xs text-muted-foreground leading-relaxed">{addon.description[lang]}</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-success whitespace-nowrap">
                          <Check className="w-3.5 h-3.5" />
                          {t.addonIncluded}
                        </span>
                      </div>
                    );
                  }

                  const cardClass = `flex flex-col p-4 rounded-xl border transition-all ${
                    isActive
                      ? 'border-primary bg-card shadow-xs ring-2 ring-primary/15'
                      : 'border-border hover:border-foreground/40 bg-card/60'
                  }`;

                  const info = (
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold text-foreground">{addon.name[lang]}</span>
                        <span className="text-xs font-bold text-primary whitespace-nowrap">
                          +{formatPrice(price ?? 0)}
                          {unit && <span className="font-medium text-muted-foreground">{unit}</span>}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{addon.description[lang]}</p>
                      {addon.upgradeHint && qty >= maxQty && (
                        <p className="text-[11px] text-warning font-medium">{addon.upgradeHint[lang]}</p>
                      )}
                    </div>
                  );



                  return (
                    <div key={addon.id} className={cardClass}>
                      <div className="flex items-start gap-3.5 justify-between w-full">
                        {info}
                        <div className="flex flex-col items-end gap-1 shrink-0 ml-2">
                          <div className="inline-flex items-center rounded-lg border border-border/80 bg-background">
                            <button
                              type="button"
                              aria-label={`${t.addonDecrease} ${addon.name[lang]}`}
                              onClick={() => setAddonQty(addon.id, qty - 1)}
                              disabled={qty === 0}
                              className="w-7 h-7 flex items-center justify-center text-foreground cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 hover:bg-secondary rounded-l-lg transition-colors"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-7 text-center text-xs font-mono font-bold text-foreground" aria-live="polite">
                              {qty}
                            </span>
                            <button
                              type="button"
                              aria-label={`${t.addonIncrease} ${addon.name[lang]}`}
                              onClick={() => setAddonQty(addon.id, qty + 1)}
                              disabled={qty >= maxQty}
                              className="w-7 h-7 flex items-center justify-center text-foreground cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 hover:bg-secondary rounded-r-lg transition-colors"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                          <span className="text-[10px] text-muted-foreground">
                            {t.addonMax} {maxQty}
                          </span>
                        </div>
                      </div>

                      {/* Integrated Contextual Sub-form for Multi Bahasa */}
                      {isActive && addon.id === 'multilingual' && (
                        <div className="mt-3.5 pt-3.5 border-t border-border/60 space-y-2 animate-in fade-in duration-200">
                          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                            <label htmlFor="target-languages" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                              <Languages className="w-3.5 h-3.5 text-primary" />
                              <span>
                                {lang === 'id'
                                  ? `Tentukan ${qty} Bahasa Tambahan:`
                                  : `Specify ${qty} Additional Language${qty > 1 ? 's' : ''}:`}
                              </span>
                            </label>
                            <span className="text-[10px] font-mono text-muted-foreground">
                              {lang === 'id' ? 'Bahasa default: Indonesia' : 'Default: English'}
                            </span>
                          </div>
                          <input
                            id="target-languages"
                            type="text"
                            value={targetLanguages}
                            onChange={(e) => setTargetLanguages(e.target.value)}
                            placeholder={
                              lang === 'id'
                                ? 'cth: Inggris, Mandarin, Jepang, Arab'
                                : 'e.g. English, Mandarin, Japanese, Arabic'
                            }
                            className="w-full text-xs sm:text-sm bg-background/50 hover:bg-background focus:bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-all font-medium"
                          />
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {lang === 'id'
                              ? 'Tuliskan bahasa apa saja yang ingin disediakan pada tombol pengganti bahasa website.'
                              : 'Enter the languages you want to provide in the website language switcher.'}
                          </p>
                        </div>
                      )}

                      {/* Integrated Contextual Sub-form for Halaman Tambahan */}
                      {isActive && addon.id === 'extra-page' && (
                        <div className="mt-3.5 pt-3.5 border-t border-border/60 space-y-2 animate-in fade-in duration-200">
                          <label htmlFor="extra-pages-notes" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                            <FileText className="w-3.5 h-3.5 text-primary" />
                            <span>
                              {lang === 'id'
                                ? `Rencana Konten ${qty} Halaman Tambahan:`
                                : `Planned Content for ${qty} Additional Page${qty > 1 ? 's' : ''}:`}
                            </span>
                          </label>
                          <input
                            id="extra-pages-notes"
                            type="text"
                            value={extraPagesNotes}
                            onChange={(e) => setExtraPagesNotes(e.target.value)}
                            placeholder={
                              lang === 'id'
                                ? 'cth: Portofolio Klien, Tim & Karir, Galeri Sertifikasi'
                                : 'e.g. Client Portfolio, Team & Careers, Certification Gallery'
                            }
                            className="w-full text-xs sm:text-sm bg-background/50 hover:bg-background focus:bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-all font-medium"
                          />
                          <p className="text-[11px] text-muted-foreground leading-relaxed">
                            {lang === 'id'
                              ? 'Daftar nama halaman baru yang ingin dibuat sesuai kebutuhan bisnis Anda.'
                              : 'List of new page names to be created tailored to your business needs.'}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Custom features → Tier 4 / consultation */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                <div className="space-y-0.5">
                  <p className="text-xs font-semibold text-foreground">{t.addonCustomTitle}</p>
                  <p className="text-[11px] text-muted-foreground leading-relaxed">{t.addonCustomDesc}</p>
                </div>
                <a
                  href={getWhatsAppLink('template', lang, templateDisplayTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-primary transition-colors cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {t.addonCustomCta}
                </a>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SECTION 03: DOMAIN SELECTION & CHECKER                  */}
          {/* ------------------------------------------------------- */}
          <section className="bg-card border border-border rounded-xl p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground/70">
                  {t.sectionDomainNum}
                </span>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {t.sectionDomainTitle}
                </h2>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.sectionDomainDesc}
              </p>
            </div>

            {!consultDomainLater ? (
              <div className="space-y-3 pt-1">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <input
                    type="text"
                    value={domainInput}
                    onChange={(e) => {
                      setDomainInput(e.target.value);
                      if (domainCheckStatus !== 'idle') setDomainCheckStatus('idle');
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleCheckDomain();
                      }
                    }}
                    placeholder={t.domainPlaceholder}
                    className="flex-1 text-xs sm:text-sm bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-primary font-mono transition-colors"
                  />

                  <div className="flex items-center gap-2 shrink-0">
                    <select
                      value={selectedTld}
                      onChange={(e) => {
                        setSelectedTld(e.target.value);
                        if (domainCheckStatus !== 'idle') setDomainCheckStatus('idle');
                      }}
                      className="text-xs font-mono font-medium bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3 py-2.5 text-foreground focus:outline-none cursor-pointer"
                    >
                      {popularTlds.map((tld) => (
                        <option key={tld.ext} value={tld.ext}>
                          {tld.ext}
                        </option>
                      ))}
                    </select>

                    <button
                      type="button"
                      onClick={() => handleCheckDomain()}
                      disabled={domainCheckStatus === 'checking' || !domainInput.trim()}
                      className="py-2.5 px-4 rounded-lg bg-foreground text-background font-medium text-xs flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-[0.98] transition-all cursor-pointer disabled:cursor-not-allowed disabled:opacity-40 shrink-0"
                    >
                      {domainCheckStatus === 'checking' ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                          <span>{t.domainCheckingBtn}</span>
                        </>
                      ) : (
                        <span>{t.domainCheckBtn}</span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Results inline */}
                {domainCheckStatus === 'available' && (
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs p-3 rounded-lg bg-muted/40 border border-border">
                    <div className="flex items-center gap-2 min-w-0 flex-wrap">
                      <span className="font-mono font-bold text-foreground truncate">{checkedDomain}</span>
                      <span className="text-muted-foreground">{t.domainAvailableText}</span>
                      <span className="text-[11px] text-muted-foreground">
                        ({lang === 'id' ? 'Belum termasuk paket — biaya registrasi via WA' : 'Not included — fee confirmed via WA'})
                      </span>
                    </div>
                    {selectedDomain === checkedDomain ? (
                      <span className="text-xs font-medium text-foreground flex items-center gap-1 shrink-0">
                        <Check className="w-3.5 h-3.5 text-primary" />
                        <span>{lang === 'id' ? 'Request Terpilih' : 'Request Selected'}</span>
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedDomain(checkedDomain)}
                        className="text-xs font-semibold text-primary hover:underline cursor-pointer shrink-0"
                      >
                        {t.domainSelectBtn}
                      </button>
                    )}
                  </div>
                )}

                {domainCheckStatus === 'taken' && (
                  <div className="text-xs p-3 rounded-lg bg-muted/40 border border-border text-muted-foreground">
                    <span className="font-mono font-bold text-foreground">{checkedDomain}</span> {t.domainTakenText}. {lang === 'id' ? 'Silakan coba ekstensi lain atau ubah nama usulan.' : 'Try another extension or enter a different name.'}
                  </div>
                )}

                {selectedDomain && domainCheckStatus !== 'available' && (
                  <div className="flex items-center justify-between gap-3 text-xs p-3 rounded-lg bg-muted/30 border border-border">
                    <div className="flex items-center gap-2 min-w-0 flex-wrap">
                      <span className="text-muted-foreground">{lang === 'id' ? 'Request domain aktif:' : 'Active domain request:'}</span>
                      <span className="font-mono font-bold text-foreground truncate">{selectedDomain}</span>
                      <span className="text-[11px] text-muted-foreground">
                        ({lang === 'id' ? 'Biaya registrasi via WA' : 'Fee confirmed via WA'})
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => { setSelectedDomain(''); setDomainCheckStatus('idle'); }}
                      className="text-xs text-muted-foreground hover:text-foreground underline cursor-pointer shrink-0"
                    >
                      {t.domainChangeBtn}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="p-3.5 rounded-lg bg-muted/30 border border-border text-xs text-muted-foreground leading-relaxed">
                {t.domainConsultDesc}
              </div>
            )}

            {/* Consultation Checkbox */}
            <div className="pt-2 border-t border-border/60">
              <label className="flex items-center gap-2.5 text-xs text-muted-foreground hover:text-foreground cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={consultDomainLater}
                  onChange={(e) => {
                    const checked = e.target.checked;
                    setConsultDomainLater(checked);
                    if (checked) {
                      setSelectedDomain('');
                      setDomainCheckStatus('idle');
                    }
                  }}
                  className="w-4 h-4 rounded border-border text-foreground focus:ring-0 cursor-pointer"
                />
                <span>{t.domainConsultCheckbox}</span>
              </label>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SECTION 04: CONTACT DETAILS                             */}
          {/* ------------------------------------------------------- */}
          <section className="bg-card border border-border rounded-xl p-5 sm:p-6 space-y-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground/70">
                  {t.sectionContactNum}
                </span>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {t.sectionContactTitle}
                </h2>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {t.sectionContactDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {/* Name */}
              <div className="space-y-1.5">
                <label htmlFor="customer-name" className="text-xs font-medium text-foreground">
                  {t.nameLabel} <span className="text-destructive">*</span>
                </label>
                <input
                  id="customer-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  onBlur={() => setTouchedFields(prev => ({ ...prev, name: true }))}
                  placeholder={t.namePlaceholder}
                  className={`w-full text-xs sm:text-sm bg-background border rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors ${
                    touchedFields.name && !isNameValid
                      ? 'border-destructive focus:border-destructive'
                      : 'border-border/90 hover:border-foreground/40 focus:border-primary'
                  }`}
                />
                {touchedFields.name && !isNameValid && (
                  <p className="text-[11px] text-destructive">{t.nameError}</p>
                )}
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="company-name" className="text-xs font-medium text-foreground">
                    {t.companyLabel}
                  </label>
                  <span className="text-[10px] text-muted-foreground">{t.optionalText}</span>
                </div>
                <input
                  id="company-name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t.companyPlaceholder}
                  className="w-full text-xs sm:text-sm bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-1.5">
                <label htmlFor="customer-phone" className="text-xs font-medium text-foreground">
                  {t.phoneLabel} <span className="text-destructive">*</span>
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  onBlur={() => setTouchedFields(prev => ({ ...prev, phone: true }))}
                  placeholder={t.phonePlaceholder}
                  className={`w-full text-xs sm:text-sm bg-background border rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors font-mono ${
                    touchedFields.phone && !isPhoneValid
                      ? 'border-destructive focus:border-destructive'
                      : 'border-border/90 hover:border-foreground/40 focus:border-primary'
                  }`}
                />
                {touchedFields.phone && !isPhoneValid && (
                  <p className="text-[11px] text-destructive">{t.phoneError}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="customer-email" className="text-xs font-medium text-foreground">
                    {t.emailLabel}
                  </label>
                  <span className="text-[10px] text-muted-foreground">{t.optionalText}</span>
                </div>
                <input
                  id="customer-email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full text-xs sm:text-sm bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <p className="pt-2 text-[11px] text-muted-foreground leading-relaxed border-t border-border/60">
              {t.privacyNote}
            </p>
          </section>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN (5 COLS): STICKY ORDER SUMMARY & CHECKOUT     */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
          <div className="bg-card border border-border rounded-xl p-5 sm:p-6">
            {/* Header */}
            <div className="pb-4 border-b border-border/60">
              <h3 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                {t.summaryTitle}
              </h3>
            </div>

            {/* Order Items Breakdown */}
            <div className="py-4 space-y-3.5 text-xs border-b border-border/60">
              {/* Template Item */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-muted-foreground">
                    {t.summaryTemplate}
                  </span>
                  <div className="text-foreground font-semibold line-clamp-1" title={templateDisplayTitle}>
                    {templateDisplayTitle}
                  </div>
                  <div className="text-[11px] text-muted-foreground">
                    {activeTierTitle} • {tierStatusBadge}
                  </div>
                </div>
                <div className="text-right font-semibold text-foreground whitespace-nowrap">
                  {formatPrice(tierBasePrice)}
                </div>
              </div>

              {/* Package Duration Item */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-muted-foreground">
                    {t.summaryDuration}
                  </span>
                  <div className="text-foreground font-semibold">
                    {selectedDuration.name[lang]}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    ~Rp {selectedDuration.monthlyEquivalentIdr.toLocaleString('id-ID')}/{t.perMonth}
                  </div>
                </div>
                <div className="text-right font-semibold text-foreground whitespace-nowrap">
                  {formatPrice(selectedDuration.priceIdr)}
                </div>
              </div>

              {/* Domain Item */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] text-muted-foreground">
                    {t.summaryDomain}
                  </span>
                  <div className="text-foreground font-medium text-[11px]">
                    {selectedDomain ? (
                      <span className="font-mono font-semibold">{selectedDomain}</span>
                    ) : consultDomainLater ? (
                      <span>{t.summaryDomainVal}</span>
                    ) : (
                      <span className="text-muted-foreground italic">
                        {lang === 'id' ? 'Belum ditentukan' : 'Not selected yet'}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right text-[11px] text-muted-foreground whitespace-nowrap">
                  {selectedDomain || consultDomainLater ? t.summaryDomainStatus : '-'}
                </div>
              </div>

              {/* Add-on Item */}
              {selectedAddonLines.length > 0 && (
                <div className="pt-2 space-y-2 border-t border-dashed border-border/60">
                  <span className="text-[11px] text-muted-foreground">
                    {t.summaryAddon}
                  </span>
                  {selectedAddonLines.map((line) => (
                    <div key={line.addon.id} className="flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="text-foreground font-semibold">
                          {line.addon.name[lang]}
                        </div>
                        {line.addon.id === 'multilingual' && targetLanguages.trim() && (
                          <div className="text-[10px] text-primary truncate max-w-[180px]">
                            {lang === 'id' ? 'Bahasa:' : 'Languages:'} {targetLanguages.trim()}
                          </div>
                        )}
                        {line.addon.id === 'extra-page' && extraPagesNotes.trim() && (
                          <div className="text-[10px] text-primary truncate max-w-[180px]">
                            {lang === 'id' ? 'Halaman:' : 'Pages:'} {extraPagesNotes.trim()}
                          </div>
                        )}
                        <div className="text-[10px] text-muted-foreground">
                          {line.qty} × {formatPrice(line.unitPrice)}
                        </div>
                      </div>
                      <div className="text-right font-semibold text-foreground whitespace-nowrap">
                        {formatPrice(line.subtotal)}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Total Row */}
            <div className="pt-4 pb-5 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {t.summaryTotalLabel}
                </span>
                <span className="text-2xl font-bold text-foreground tracking-tight">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground text-right leading-tight">
                {t.summaryTotalNote}
              </p>
            </div>

            {/* Direct WhatsApp CTA Button with Validation State */}
            <div className="space-y-2.5">
              {isFormValid ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-lg bg-foreground text-background font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <span>{t.ctaWhatsapp}</span>
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="w-full py-3 px-4 rounded-lg bg-muted text-muted-foreground font-semibold text-xs flex items-center justify-center gap-2 cursor-not-allowed opacity-50 select-none border border-border"
                >
                  <span>{t.ctaWhatsapp}</span>
                </button>
              )}

              {!isFormValid && (
                <p className="text-[11px] text-center text-muted-foreground leading-relaxed">
                  {validationHint}
                </p>
              )}

              {isFormValid && (
                <p className="text-[11px] text-center text-muted-foreground leading-tight px-1">
                  {t.ctaNote}
                </p>
              )}
            </div>

            {/* Trust Points */}
            <div className="mt-5 pt-4 border-t border-border/60 space-y-1.5 text-[11px] text-muted-foreground">
              {t.trustPoints.map((point, idx) => (
                <p key={idx} className="leading-relaxed">
                  • {point}
                </p>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
