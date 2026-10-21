"use client";

import React, { useState, useEffect, useMemo } from 'react';
import type { TemplateItem, DurationPlan } from '../../data/templatesData';
import { templatesData, durationPlans, templateCategories, addonUnitLabel, tiersData } from '../../data/templatesData';
import { useOrderAddons } from './hooks/useOrderAddons';
import { getWebsiteOrderWhatsAppLink, getWhatsAppLink } from '../../lib/utils';
import { 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Search, 
  X, 
  RotateCcw,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Minus,
  Plus,
  MessageCircle,
  Languages,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
  User,
  Building2,
  Mail
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
  // Read tier immediately on client initialization to prevent lag/flash
  const [customTier, setCustomTier] = useState<1 | 2 | 3 | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTier = parseInt(params.get('tier') || '', 10);
      if ([1, 2, 3].includes(urlTier)) return urlTier as 1 | 2 | 3;
    }
    return null;
  });
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

  // UI State for Template Switcher
  const [isChangingTemplate, setIsChangingTemplate] = useState<boolean>(false);
  const [templateSearchQuery, setTemplateSearchQuery] = useState<string>('');
  const [templateFilterCategory, setTemplateFilterCategory] = useState<string>('all');

  // Read URL query parameter on mount if available
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTemplate = params.get('template');
      if (urlTemplate && templatesData.some(t => t.id === urlTemplate)) {
        setSelectedTemplateId(urlTemplate);
      }
      const urlTier = parseInt(params.get('tier') || '', 10);
      if ([1, 2, 3].includes(urlTier)) {
        setCustomTier(urlTier as 1 | 2 | 3);
      }
    }
  }, []);

  // Derived objects
  const selectedTemplate = useMemo(() => {
    return templatesData.find(t => t.id === selectedTemplateId) || templatesData[0];
  }, [selectedTemplateId]);

  const activeTier = (customTier ?? selectedTemplate.tier) as 1 | 2 | 3;
  const activeTierInfo = useMemo(() => {
    return tiersData.find((t) => t.tierNumber === activeTier) || tiersData[0];
  }, [activeTier]);
  const activeTierTitle = lang === 'en' ? activeTierInfo.titleEn : activeTierInfo.title;

  const templateDisplayTitle = lang === 'en' && selectedTemplate.titleEn 
    ? selectedTemplate.titleEn 
    : selectedTemplate.title;

  // Upgrade / Downgrade status determination
  const isUpgrade = activeTier > selectedTemplate.tier;
  const isDowngrade = activeTier < selectedTemplate.tier;
  const tierStatusBadge = isUpgrade
    ? (lang === 'id' ? `Upgrade dari Tier ${selectedTemplate.tier}` : `Upgraded from Tier ${selectedTemplate.tier}`)
    : isDowngrade
    ? (lang === 'id' ? `Downgrade dari Tier ${selectedTemplate.tier}` : `Downgraded from Tier ${selectedTemplate.tier}`)
    : (lang === 'id' ? 'Sesuai Desain Asli' : 'Base Design');

  // Dynamic duration plans synchronized with active tier base price
  const tierBasePrice = useMemo(() => {
    return parseInt(activeTierInfo.pricing.price.replace(/[^0-9]/g, ''), 10);
  }, [activeTierInfo]);

  const dynamicDurationPlans = useMemo(() => {
    return [
      {
        id: '1-year' as const,
        years: 1,
        name: { id: 'Paket 1 Tahun', en: '1-Year Package' },
        priceIdr: tierBasePrice,
        monthlyEquivalentIdr: Math.round(tierBasePrice / 12),
        savings: { id: 'Termasuk Domain & Hosting 1 Thn', en: 'Includes 1-Year Domain & Hosting' },
        features: durationPlans[0].features
      },
      {
        id: '2-year' as const,
        years: 2,
        name: { id: 'Paket 2 Tahun', en: '2-Year Package' },
        priceIdr: tierBasePrice + 550000,
        monthlyEquivalentIdr: Math.round((tierBasePrice + 550000) / 24),
        savings: { id: 'Hemat Rp 250.000 Perpanjangan', en: 'Save Rp 250.000 on Renewal' },
        features: durationPlans[1].features
      },
      {
        id: '3-year' as const,
        years: 3,
        name: { id: 'Paket 3 Tahun', en: '3-Year Package' },
        priceIdr: tierBasePrice + 950000,
        monthlyEquivalentIdr: Math.round((tierBasePrice + 950000) / 36),
        badge: { id: 'HEMAT PALING BANYAK', en: 'BEST VALUE - SAVE MOST' },
        savings: { id: 'Hemat Rp 650.000 Perpanjangan', en: 'Save Rp 650.000 on Renewal' },
        features: durationPlans[2].features
      }
    ];
  }, [tierBasePrice]);

  const selectedDuration = useMemo(() => {
    return dynamicDurationPlans.find((p) => p.id === selectedDurationId) || dynamicDurationPlans[0];
  }, [dynamicDurationPlans, selectedDurationId]);

  // Pricing calculations
  const {
    addons: addonOptions,
    quantities: addonQuantities,
    setQty: setAddonQty,
    selectedLines: selectedAddonLines,
    addonTotal: addonPrice,
    whatsappAddons,
  } = useOrderAddons(activeTier, lang);

  const durationPrice = selectedDuration.priceIdr;
  const totalPrice = durationPrice + addonPrice;

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

  // WhatsApp Checkout Link
  const whatsappUrl = useMemo(() => {
    return getWebsiteOrderWhatsAppLink({
      templateTitle: `${templateDisplayTitle} (${activeTierTitle} • ${tierStatusBadge})`,
      durationPlanName: selectedDuration.name[lang],
      durationYears: selectedDuration.years,
      durationPriceIdr: durationPrice,
      addons: formattedWhatsappAddons,
      addonPriceIdr: addonPrice,
      totalPriceIdr: totalPrice,
      customerName: customerName.trim() || undefined,
      companyName: companyName.trim() || undefined,
      customerEmail: customerEmail.trim() || undefined,
      lang,
    });
  }, [templateDisplayTitle, activeTierTitle, tierStatusBadge, selectedDuration, formattedWhatsappAddons, addonPrice, totalPrice, customerName, companyName, customerEmail, lang]);

  // Localized texts
  const t = {
    id: {
      backToCatalog: 'Kembali ke Katalog Template',
      badge: 'Solusi Website Siap Pakai GiLabs',
      pageTitle: 'Konfigurasi Pemesanan Website',
      pageSubtitle: 'Solusi menyeluruh pembuatan website bisnis profesional: sudah termasuk template siap pakai, domain (.com/.id), cloud hosting cepat, SSL keamanan, email bisnis, dan pemeliharaan berkala.',
      
      // Section 1
      sectionTemplateNum: '01',
      sectionTemplateTitle: 'Desain Template Terpilih',
      sectionTemplateDesc: 'Template yang Anda pilih dapat langsung disesuaikan dengan identitas brand Anda.',
      changeTemplateBtn: 'Ganti Template',
      closeChangeTemplateBtn: 'Tutup Pilihan',
      viewDemo: 'Lihat Demo Langsung',
      buyersCount: 'bisnis memilih desain ini',
      searchTemplatePlaceholder: 'Cari template lain...',
      activeTemplateBadge: 'Aktif Terpilih',
      
      // Section 2
      sectionDurationNum: '02',
      sectionDurationTitle: 'Pilihan Durasi Paket & Layanan Tambahan',
      sectionDurationDesc: 'Tentukan masa aktif domain, hosting, dan pemeliharaan website. Semakin panjang durasi, semakin hemat investasinya.',
      perMonth: 'bln',
      includedHeader: 'Fitur sudah termasuk dalam',
      
      // Add-on
      addonHeader: 'Layanan Tambahan Opsional',
      addonDesc: 'Harga add-on menyesuaikan tier template yang Anda pilih. Pengisian teks, logo, dan foto sudah termasuk paket.',
      addonIncluded: 'Sudah termasuk',
      addonMax: 'Maks.',
      addonDecrease: 'Kurangi',
      addonIncrease: 'Tambah',
      addonCustomTitle: 'Butuh blog, booking, katalog, atau pembayaran online?',
      addonCustomDesc: 'Fitur seperti ini disesuaikan per proyek. Konsultasikan gratis dengan tim kami.',
      addonCustomCta: 'Konsultasi',
      
      // Section 3
      sectionContactNum: '03',
      sectionContactTitle: 'Data Diri & Kontak Aktivasi',
      sectionContactDesc: 'Data ini dibutuhkan untuk verifikasi kepemilikan nama domain, sertifikat SSL, dan penerbitan invoice resmi.',
      nameLabel: 'Nama Lengkap / Penanggung Jawab',
      namePlaceholder: 'cth. Hendra Gunawan',
      companyLabel: 'Nama Usaha / Perusahaan',
      companyPlaceholder: 'cth. PT Citra Mandiri Sejahtera',
      phoneLabel: 'Nomor WhatsApp Aktif',
      phonePlaceholder: 'cth. 081367954062',
      emailLabel: 'Alamat Email',
      emailPlaceholder: 'cth. hendra@bisnis.com',
      privacyNote: 'Privasi terjamin. Data kontak Anda hanya dipergunakan untuk keperluan aktivasi website dan pengiriman invoice resmi GiLabs.',

      // Sidebar Summary
      summaryTitle: 'Ringkasan Pesanan',
      summaryTemplate: 'Template',
      summaryIncluded: 'Termasuk Paket',
      summaryDuration: 'Paket Durasi',
      summaryDomain: 'Domain (.com / .id)',
      summaryDomainVal: 'Gratis (Konsultasi via WA)',
      summaryDomainStatus: 'Termasuk',
      summaryAddon: 'Add-on',
      summaryTotalLabel: 'Total Investasi',
      summaryTotalNote: 'Sudah mencakup Template + Domain + Cloud Hosting + SSL + Maintenance',
      ctaWhatsapp: 'Pesan via WhatsApp',
      ctaNote: 'Terhubung langsung dengan tim engineer GiLabs untuk invoice resmi & aktivasi.',
      trustPoints: [
        'Invoice resmi dari PT Griya Innovations Labs',
        'Bantuan aktivasi & setup langsung oleh engineer',
        'Garansi uptime 99.9% & maintenance rutin'
      ]
    },
    en: {
      backToCatalog: 'Back to Template Catalog',
      badge: 'GiLabs Turnkey Website Solution',
      pageTitle: 'Configure Your Website Package',
      pageSubtitle: 'All-inclusive turnkey business website solution: includes ready-to-use template, domain registration (.com/.id), high-speed cloud hosting, SSL security, business email, and routine maintenance.',
      
      // Section 1
      sectionTemplateNum: '01',
      sectionTemplateTitle: 'Selected Template Design',
      sectionTemplateDesc: 'The template you selected will be tailored to match your company branding.',
      changeTemplateBtn: 'Switch Template',
      closeChangeTemplateBtn: 'Close Selector',
      viewDemo: 'View Live Demo',
      buyersCount: 'businesses chose this design',
      searchTemplatePlaceholder: 'Search other templates...',
      activeTemplateBadge: 'Selected',
      
      // Section 2
      sectionDurationNum: '02',
      sectionDurationTitle: 'Plan Duration & Inclusions',
      sectionDurationDesc: 'Choose your hosting and maintenance duration. Longer plans provide the highest savings and uninterrupted service.',
      perMonth: 'mo',
      includedHeader: "What's included in the",
      
      // Add-on
      addonHeader: 'Optional Add-ons',
      addonDesc: 'Add-on pricing follows the tier of your selected template. Text, logo, and photo input are already included.',
      addonIncluded: 'Included',
      addonMax: 'Max.',
      addonDecrease: 'Decrease',
      addonIncrease: 'Increase',
      addonCustomTitle: 'Need a blog, booking, catalog, or online payments?',
      addonCustomDesc: 'These features are scoped per project. Get a free consultation with our team.',
      addonCustomCta: 'Consult',
      
      // Section 3
      sectionContactNum: '03',
      sectionContactTitle: 'Contact Details for Activation',
      sectionContactDesc: 'Required for official domain ownership validation, SSL security certificates, and invoice generation.',
      nameLabel: 'Full Name / Contact Person',
      namePlaceholder: 'e.g. John Doe',
      companyLabel: 'Business / Company Name',
      companyPlaceholder: 'e.g. Acme Corporation Ltd.',
      phoneLabel: 'Active WhatsApp Number',
      phonePlaceholder: 'e.g. +6281367954062',
      emailLabel: 'Email Address',
      emailPlaceholder: 'e.g. contact@business.com',
      privacyNote: 'Privacy guaranteed. Your details are solely used for domain setup and GiLabs invoicing.',

      // Sidebar Summary
      summaryTitle: 'Order Summary',
      summaryTemplate: 'Template',
      summaryIncluded: 'Package Included',
      summaryDuration: 'Package Duration',
      summaryDomain: 'Domain (.com / .id)',
      summaryDomainVal: 'Free (Consultation via WA)',
      summaryDomainStatus: 'Included',
      summaryAddon: 'Add-on',
      summaryTotalLabel: 'Total Investment',
      summaryTotalNote: 'All-inclusive: Template + Domain + Cloud Hosting + SSL + Maintenance',
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

        <div className="flex items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-primary/10 text-primary">
            {t.badge}
          </span>
        </div>

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
                  {t.sectionTemplateTitle}
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
                    <span>{t.changeTemplateBtn}</span>
                  </>
                )}
              </button>
            </div>

            {/* Template Card: Sleek, non-bulky layout */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-5 transition-all">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
                {/* Thumbnail */}
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

                {/* Details */}
                <div className="flex-1 space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-secondary text-secondary-foreground">
                      {selectedTemplate.categoryLabel[lang]}
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
                    <a
                      href={selectedTemplate.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>{t.viewDemo}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>

                  {/* Upgrade / Downgrade Indicator Banner */}
                  <div className="pt-2">
                    {isUpgrade ? (
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
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
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
                        const isBase = tierNum === selectedTemplate.tier;
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
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
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
          {/* SECTION 03: CONTACT DETAILS (ENHANCED CARD UI)          */}
          {/* ------------------------------------------------------- */}
          <section className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-xs space-y-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-muted-foreground/70">
                  {t.sectionContactNum}
                </span>
                <h2 className="text-sm font-bold text-foreground uppercase tracking-wider">
                  {t.sectionContactTitle}
                </h2>
              </div>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                {t.sectionContactDesc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="customer-name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{t.nameLabel}</span>
                  </label>
                  <span className="text-[10px] font-mono text-destructive font-medium">
                    {lang === 'id' ? '*Wajib' : '*Required'}
                  </span>
                </div>
                <input
                  id="customer-name"
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full text-xs sm:text-sm bg-background/50 hover:bg-background focus:bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-all font-medium"
                />
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="company-name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span>{t.companyLabel}</span>
                  </label>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {lang === 'id' ? 'Opsional' : 'Optional'}
                  </span>
                </div>
                <input
                  id="company-name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t.companyPlaceholder}
                  className="w-full text-xs sm:text-sm bg-background/50 hover:bg-background focus:bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-all font-medium"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="customer-phone" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>{t.phoneLabel}</span>
                  </label>
                  <span className="text-[10px] font-mono text-destructive font-medium">
                    {lang === 'id' ? '*Wajib' : '*Required'}
                  </span>
                </div>
                <input
                  id="customer-phone"
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="w-full text-xs sm:text-sm bg-background/50 hover:bg-background focus:bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-all font-mono font-medium"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label htmlFor="customer-email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span>{t.emailLabel}</span>
                  </label>
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {lang === 'id' ? 'Opsional' : 'Optional'}
                  </span>
                </div>
                <input
                  id="customer-email"
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full text-xs sm:text-sm bg-background/50 hover:bg-background focus:bg-background border border-border/90 hover:border-foreground/40 focus:border-primary rounded-lg px-3.5 py-2.5 sm:py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/15 transition-all font-medium"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-border/50 text-[11px] text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>{t.privacyNote}</span>
            </div>
          </section>

        </div>

        {/* ========================================================= */}
        {/* RIGHT COLUMN (5 COLS): STICKY ORDER SUMMARY & CHECKOUT     */}
        {/* ========================================================= */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-4">
          <div className="bg-card border border-border rounded-xl p-5 sm:p-6 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-border/60">
              <h3 className="text-xs font-bold tracking-wider text-muted-foreground uppercase">
                {t.summaryTitle}
              </h3>
              <span className="text-[10px] font-semibold text-success bg-success/10 px-2 py-0.5 rounded">
                {selectedDuration.savings[lang]}
              </span>
            </div>

            {/* Order Items Breakdown */}
            <div className="py-4 space-y-3.5 text-xs border-b border-border/60">
              {/* Template Item */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {t.summaryTemplate}
                  </span>
                  <div className="text-foreground font-semibold line-clamp-1" title={templateDisplayTitle}>
                    {templateDisplayTitle}
                  </div>
                  <div className="text-[10px] text-primary font-mono font-semibold flex items-center gap-1.5">
                    <span>{activeTierTitle}</span>
                    <span className="opacity-70">• {tierStatusBadge}</span>
                  </div>
                </div>
                <div className="text-right text-[11px] font-medium text-muted-foreground whitespace-nowrap">
                  {t.summaryIncluded}
                </div>
              </div>

              {/* Package Duration Item */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {t.summaryDuration}
                  </span>
                  <div className="text-foreground font-semibold">
                    {selectedDuration.name[lang]}
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    ~Rp {selectedDuration.monthlyEquivalentIdr.toLocaleString('id-ID')}/{t.perMonth}
                  </div>
                </div>
                <div className="text-right font-bold text-foreground whitespace-nowrap">
                  {formatPrice(selectedDuration.priceIdr)}
                </div>
              </div>

              {/* Domain Item */}
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {t.summaryDomain}
                  </span>
                  <div className="text-foreground font-semibold text-[11px]">
                    {t.summaryDomainVal}
                  </div>
                </div>
                <div className="text-right text-[11px] font-medium text-success whitespace-nowrap">
                  {t.summaryDomainStatus}
                </div>
              </div>

              {/* Add-on Item */}
              {selectedAddonLines.length > 0 && (
                <div className="pt-2 space-y-2 border-t border-dashed border-border/60">
                  <span className="text-[11px] font-medium text-muted-foreground">
                    {t.summaryAddon}
                  </span>
                  {selectedAddonLines.map((line) => (
                    <div key={line.addon.id} className="flex items-start justify-between gap-3">
                      <div className="space-y-0.5">
                        <div className="text-foreground font-semibold">
                          {line.addon.name[lang]}
                        </div>
                        {line.addon.id === 'multilingual' && targetLanguages.trim() && (
                          <div className="text-[10px] text-primary font-medium truncate max-w-[180px]">
                            {lang === 'id' ? 'Bahasa:' : 'Languages:'} {targetLanguages.trim()}
                          </div>
                        )}
                        {line.addon.id === 'extra-page' && extraPagesNotes.trim() && (
                          <div className="text-[10px] text-primary font-medium truncate max-w-[180px]">
                            {lang === 'id' ? 'Halaman:' : 'Pages:'} {extraPagesNotes.trim()}
                          </div>
                        )}
                        {line.addon.unit !== 'flat' && (
                          <div className="text-[10px] text-muted-foreground">
                            {line.qty} × {formatPrice(line.unitPrice)}
                          </div>
                        )}
                      </div>
                      <div className="text-right font-bold text-foreground whitespace-nowrap">
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
                <span className="text-2xl font-extrabold text-foreground tracking-tight">
                  {formatPrice(totalPrice)}
                </span>
              </div>
              <p className="text-[10px] text-muted-foreground text-right leading-tight">
                {t.summaryTotalNote}
              </p>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="space-y-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-lg bg-foreground text-background font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.99] transition-all cursor-pointer shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>{t.ctaWhatsapp}</span>
              </a>

              <p className="text-[11px] text-center text-muted-foreground leading-tight px-1">
                {t.ctaNote}
              </p>
            </div>

            {/* Trust Assurance Bullets */}
            <div className="mt-5 pt-4 border-t border-border/60 space-y-2">
              {t.trustPoints.map((point, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <ShieldCheck className="w-3.5 h-3.5 text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
