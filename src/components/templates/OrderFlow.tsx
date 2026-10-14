"use client";

import React, { useState, useEffect, useMemo } from 'react';
import type { TemplateItem, DurationPlan } from '../../data/templatesData';
import { templatesData, durationPlans, websiteEditingAddon, templateCategories } from '../../data/templatesData';
import { getWebsiteOrderWhatsAppLink } from '../../lib/utils';
import { 
  Check, 
  ChevronRight, 
  ExternalLink, 
  CreditCard, 
  ShieldCheck, 
  Search, 
  X, 
  RotateCcw,
  Sparkles,
  Phone,
  ArrowLeft,
  CheckCircle2,
  Lock,
  Layers,
  Clock,
  Sparkle
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
  const imgRef = React.useRef<HTMLImageElement>(null);
  const thumbSrc = useMemo(() => src.replace(/\/([^\/]+)$/, '/thumb/$1'), [src]);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
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
      <img
        ref={imgRef}
        src={encodeURI(src)}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        className={`relative z-10 w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}

export default function OrderFlow({ initialTemplateId, lang = 'id' }: OrderFlowProps) {
  // 1. Order State
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(
    initialTemplateId || templatesData[0]?.id || 'adiguna-machinery'
  );
  const [selectedDurationId, setSelectedDurationId] = useState<'1-year' | '2-year' | '3-year'>('3-year');
  const [hasEditingAddon, setHasEditingAddon] = useState<boolean>(false);

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
    }
  }, []);

  // Derived objects
  const selectedTemplate = useMemo(() => {
    return templatesData.find(t => t.id === selectedTemplateId) || templatesData[0];
  }, [selectedTemplateId]);

  const selectedDuration = useMemo(() => {
    return durationPlans.find(p => p.id === selectedDurationId) || durationPlans[2];
  }, [selectedDurationId]);

  const templateDisplayTitle = lang === 'en' && selectedTemplate.titleEn 
    ? selectedTemplate.titleEn 
    : selectedTemplate.title;

  // Pricing calculations
  const durationPrice = selectedDuration.priceIdr;
  const addonPrice = hasEditingAddon ? websiteEditingAddon.priceIdr : 0;
  const totalPrice = durationPrice + addonPrice;

  // Filter templates when user clicks "Ganti Template"
  const selectableTemplates = useMemo(() => {
    return templatesData.filter((item) => {
      const matchesCategory = templateFilterCategory === 'all' || item.category === templateFilterCategory;
      const query = templateSearchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;
      const title = (lang === 'en' && item.titleEn ? item.titleEn : item.title).toLowerCase();
      return matchesCategory && title.includes(query);
    });
  }, [templateFilterCategory, templateSearchQuery, lang]);

  const formatPrice = (val: number) => `Rp ${val.toLocaleString('id-ID')}`;

  // WhatsApp Checkout Link
  const whatsappUrl = useMemo(() => {
    return getWebsiteOrderWhatsAppLink({
      templateTitle: templateDisplayTitle,
      durationPlanName: selectedDuration.name[lang],
      durationYears: selectedDuration.years,
      durationPriceIdr: durationPrice,
      hasEditingAddon,
      addonPriceIdr: addonPrice,
      totalPriceIdr: totalPrice,
      customerName: customerName.trim() || undefined,
      companyName: companyName.trim() || undefined,
      customerEmail: customerEmail.trim() || undefined,
      lang,
    });
  }, [templateDisplayTitle, selectedDuration, hasEditingAddon, addonPrice, totalPrice, customerName, companyName, customerEmail, lang]);

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
      addonCheckboxTitle: 'Jasa Editing Website',
      addonCheckboxPrice: '+Rp 250.000',
      addonCheckboxDesc: 'Tim software engineer GiLabs bantu input seluruh materi teks, upload foto produk/layanan, konfigurasi logo perusahaan, dan penyesuaian layout sampai website 100% siap online.',
      
      // Section 3
      sectionContactNum: '03',
      sectionContactTitle: 'Data Diri & Kontak Aktivasi',
      sectionContactDesc: 'Data ini dibutuhkan untuk verifikasi kepemilikan nama domain, sertifikat SSL, dan penerbitan invoice resmi.',
      nameLabel: 'Nama Lengkap / Penanggung Jawab',
      namePlaceholder: 'cth. Hendra Gunawan',
      companyLabel: 'Nama Usaha / Perusahaan',
      companyPlaceholder: 'cth. PT Citra Mandiri Sejahtera',
      phoneLabel: 'Nomor WhatsApp Aktif',
      phonePlaceholder: 'cth. 081234567890',
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
      summaryAddon: 'Add-on Editing',
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
      addonHeader: 'Optional Add-on Service',
      addonCheckboxTitle: 'Website Content Editing Service',
      addonCheckboxPrice: '+Rp 250.000',
      addonCheckboxDesc: 'GiLabs software engineers will input your text copy, upload your product/service photos, apply your brand logo, and polish page layouts until 100% launch-ready.',
      
      // Section 3
      sectionContactNum: '03',
      sectionContactTitle: 'Contact Details for Activation',
      sectionContactDesc: 'Required for official domain ownership validation, SSL security certificates, and invoice generation.',
      nameLabel: 'Full Name / Contact Person',
      namePlaceholder: 'e.g. John Doe',
      companyLabel: 'Business / Company Name',
      companyPlaceholder: 'e.g. Acme Corporation Ltd.',
      phoneLabel: 'Active WhatsApp Number',
      phonePlaceholder: 'e.g. +6281234567890',
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
      summaryAddon: 'Editing Add-on',
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
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="bg-background/95 text-foreground text-[10px] font-semibold px-2 py-1 rounded shadow-xs flex items-center gap-1">
                      <span>{t.viewDemo}</span>
                      <ExternalLink className="w-3 h-3" />
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
                    {templateCategories.map((cat) => (
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
                          setSelectedTemplateId(item.id);
                          setIsChangingTemplate(false);
                        }}
                        className={`bg-card border rounded-lg p-3 flex flex-col justify-between cursor-pointer transition-all hover:border-foreground/50 ${
                          isChosen ? 'border-primary ring-2 ring-primary/20' : 'border-border'
                        }`}
                      >
                        <div className="aspect-16/10 bg-muted/40 rounded overflow-hidden mb-2.5 border border-border/50">
                          {item.previewImage ? (
                            <OrderTemplateImage
                              src={item.previewImage}
                              alt={itemTitle}
                            />
                          ) : (
                            <OrderMiniPreview demoUrl={item.demoUrl} title={itemTitle} />
                          )}
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
              {durationPlans.map((plan) => {
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

            {/* Optional Add-on: Elegant Interactive Card */}
            <div className="pt-2">
              <label
                className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                  hasEditingAddon
                    ? 'border-primary bg-primary/5 ring-1 ring-primary/20'
                    : 'border-border hover:border-foreground/40 bg-card'
                }`}
              >
                <input
                  type="checkbox"
                  checked={hasEditingAddon}
                  onChange={(e) => setHasEditingAddon(e.target.checked)}
                  className="mt-0.5 w-4 h-4 rounded text-foreground cursor-pointer shrink-0"
                />
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-bold text-foreground">
                      {t.addonCheckboxTitle}
                    </span>
                    <span className="text-xs font-bold text-primary">
                      {t.addonCheckboxPrice}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {t.addonCheckboxDesc}
                  </p>
                </div>
              </label>
            </div>
          </section>

          {/* ------------------------------------------------------- */}
          {/* SECTION 03: CONTACT DETAILS                             */}
          {/* ------------------------------------------------------- */}
          <section className="border-t border-border/60 pt-8 space-y-4">
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
                <label className="text-xs font-semibold text-foreground">
                  {t.nameLabel} <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder={t.namePlaceholder}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>

              {/* Company */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {t.companyLabel}
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder={t.companyPlaceholder}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {t.phoneLabel} <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder={t.phonePlaceholder}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground font-mono"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-foreground">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  placeholder={t.emailPlaceholder}
                  className="w-full text-xs bg-background border border-border rounded-lg px-3 py-2.5 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-1 focus:ring-foreground"
                />
              </div>
            </div>

            <p className="text-[11px] text-muted-foreground">
              {t.privacyNote}
            </p>
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
              {hasEditingAddon && (
                <div className="flex items-start justify-between gap-3 pt-2 border-t border-dashed border-border/60">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      {t.summaryAddon}
                    </span>
                    <div className="text-foreground font-semibold">
                      {websiteEditingAddon.name[lang]}
                    </div>
                  </div>
                  <div className="text-right font-bold text-foreground whitespace-nowrap">
                    {formatPrice(websiteEditingAddon.priceIdr)}
                  </div>
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
