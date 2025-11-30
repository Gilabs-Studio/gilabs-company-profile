import React, { useState } from 'react';
import { Check, Plus, ChevronDown, Sparkles } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/utils';

interface PricingPackage {
  title: string;
  description: string;
  price: string;
  revisions: string[];
  features: string[];
  addons: string[];
}

interface CrmPackage {
  name: string;
  features: string[];
  price: string;
  revisions?: string[];
}

interface RevisionSystem {
  title: string;
  small: {
    title: string;
    items: string[];
  };
  large: {
    title: string;
    items: string[];
  };
  extra: string[];
}

interface ErpCrm {
  title: string;
  description: string;
  crm: {
    title: string;
    description: string;
    packages: CrmPackage[];
  };
  erp: {
    title: string;
    description: string;
    modules: string[];
    fullPackage: string;
    revisions: string[];
  };
}

interface AiAddonPackage {
  name: string;
  description: string;
  price: string;
  features: string[];
}

interface AiAddons {
  title: string;
  subtitle: string;
  packages: AiAddonPackage[];
}

interface UnifiedPricingProps {
  lang: 'en' | 'id';
  packages: PricingPackage[];
  revisionSystem: RevisionSystem;
  erpCrm: ErpCrm;
  aiAddons?: AiAddons;
}

type TabType = 'website' | 'crm' | 'erp' | 'ai';

const UnifiedPricing: React.FC<UnifiedPricingProps> = ({
  lang,
  packages,
  revisionSystem,
  erpCrm,
  aiAddons,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('website');
  const [showRevisions, setShowRevisions] = useState(false);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'website', label: 'Website' },
    { id: 'crm', label: 'CRM' },
    { id: 'erp', label: 'ERP' },
    ...(aiAddons ? [{ id: 'ai' as TabType, label: 'AI' }] : []),
  ];

  return (
    <>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1">
              <animate attributeName="stop-color" values="#6366f1;#8b5cf6;#a855f7;#c084fc;#8b5cf6;#6366f1" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="25%" stopColor="#8b5cf6">
              <animate attributeName="stop-color" values="#8b5cf6;#a855f7;#c084fc;#8b5cf6;#6366f1;#8b5cf6" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="50%" stopColor="#a855f7">
              <animate attributeName="stop-color" values="#a855f7;#c084fc;#8b5cf6;#6366f1;#8b5cf6;#a855f7" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="75%" stopColor="#c084fc">
              <animate attributeName="stop-color" values="#c084fc;#8b5cf6;#6366f1;#8b5cf6;#a855f7;#c084fc" dur="3s" repeatCount="indefinite" />
            </stop>
            <stop offset="100%" stopColor="#6366f1">
              <animate attributeName="stop-color" values="#6366f1;#8b5cf6;#a855f7;#c084fc;#8b5cf6;#6366f1" dur="3s" repeatCount="indefinite" />
            </stop>
          </linearGradient>
        </defs>
      </svg>
    <section id="pricing" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">
            {lang === 'en' ? 'Pricing' : 'Harga'}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
            {lang === 'en' ? 'Choose Your Plan' : 'Pilih Paket Anda'}
          </h2>
          <p className="text-muted-foreground">
            {lang === 'en'
              ? 'Transparent pricing for every scale of business.'
              : 'Harga transparan untuk setiap skala bisnis.'}
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1 bg-secondary/80 rounded-full" role="tablist">
            {tabs.map((tab) => {
              const isAiTab = tab.id === 'ai';
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 min-h-[44px] ${
                    activeTab === tab.id
                      ? isAiTab
                        ? 'bg-linear-to-r from-indigo-500/30 to-purple-500/30 border border-indigo-500/50 shadow-lg shadow-indigo-500/30'
                        : 'bg-primary text-primary-foreground'
                      : isAiTab
                        ? 'text-indigo-400/70 hover:text-indigo-300 bg-transparent'
                        : 'text-foreground/70 hover:text-foreground bg-transparent'
                  }`}
                >
                  {isAiTab && activeTab === tab.id && (
                    <span className="ai-gradient-icon inline-block mr-1.5">
                      <Sparkles className="w-3 h-3" stroke="url(#ai-gradient)" />
                    </span>
                  )}
                  {isAiTab && activeTab === tab.id ? (
                    <span className="ai-gradient-text">{tab.label}</span>
                  ) : isAiTab ? (
                    <span className="text-indigo-400/70 hover:text-indigo-300">{tab.label}</span>
                  ) : (
                    tab.label
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Website Packages */}
        {activeTab === 'website' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 overflow-hidden ${
                  index === 1
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-brand text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                    {lang === 'en' ? 'Most Popular' : 'Paling Populer'}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-2">{pkg.title}</h3>
                  <p
                    className={`text-sm mb-6 ${
                      index === 1 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                    }`}
                  >
                    {pkg.description}
                  </p>
                  <p className="text-2xl font-bold">{pkg.price}</p>
                </div>

                <div className="space-y-6 mb-8 flex-1">
                  {/* Features */}
                  <div>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                        index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                      }`}
                    >
                      {lang === 'en' ? 'Includes' : 'Termasuk'}
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm">
                          <Check
                            className={`w-4 h-4 mt-0.5 shrink-0 ${
                              index === 1 ? 'text-brand' : 'text-muted-foreground'
                            }`}
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Revisions */}
                  <div>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                        index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                      }`}
                    >
                      {lang === 'en' ? 'Revisions' : 'Revisi'}
                    </p>
                    <ul className="space-y-1.5">
                      {pkg.revisions.map((rev) => (
                        <li
                          key={rev}
                          className={`text-sm ${
                            index === 1 ? 'text-primary-foreground/70' : 'text-muted-foreground'
                          }`}
                        >
                          {rev}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add-ons */}
                  {pkg.addons && pkg.addons.length > 0 && (
                    <div>
                      <p
                        className={`text-xs font-medium uppercase tracking-wider mb-3 ${
                          index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                        }`}
                      >
                        {lang === 'en' ? 'Add-ons' : 'Tambahan'}
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.addons.map((addon) => (
                          <li
                            key={addon}
                            className={`flex items-start gap-2 text-xs ${
                              index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                            }`}
                          >
                            <Plus className="w-3 h-3 mt-0.5 shrink-0" />
                            <span>{addon}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <a
                  href={getWhatsAppLink('pricing', lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-6 rounded-full font-medium text-center text-sm transition-colors duration-300 ${
                    index === 1
                      ? 'bg-brand text-white hover:bg-brand/90'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  }`}
                >
                  {lang === 'en' ? 'Get Started' : 'Mulai'}
                </a>
              </div>
            ))}
          </div>
        )}

        {/* CRM Packages */}
        {activeTab === 'crm' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-muted-foreground">{erpCrm.crm.description}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {erpCrm.crm.packages.map((pkg, index) => (
                <div
                  key={pkg.name}
                  className={`flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                    index === 1
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border bg-background hover:border-primary/50'
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">{pkg.name}</h3>
                    <p className="text-2xl font-bold">{pkg.price}</p>
                  </div>

                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`w-4 h-4 mt-0.5 shrink-0 ${
                            index === 1 ? 'text-brand' : 'text-muted-foreground'
                          }`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {pkg.revisions && (
                    <p
                      className={`text-xs mb-6 ${
                        index === 1 ? 'text-primary-foreground/60' : 'text-muted-foreground'
                      }`}
                    >
                      {pkg.revisions.join(' · ')}
                    </p>
                  )}

                  <a
                    href={getWhatsAppLink('pricing', lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-6 rounded-full font-medium text-center text-sm transition-colors duration-300 ${
                      index === 1
                        ? 'bg-brand text-white hover:bg-brand/90'
                        : 'bg-primary text-primary-foreground hover:bg-primary/90'
                    }`}
                  >
                    {lang === 'en' ? 'Get Started' : 'Mulai'}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* AI Add-ons - Special Section */}
        {activeTab === 'ai' && aiAddons && (
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden border border-indigo-500/50 bg-linear-to-br from-indigo-900/20 via-purple-900/20 to-transparent p-8 md:p-12" style={{ boxShadow: '0 0 40px -10px rgba(124, 58, 237, 0.3)' }}>
              {/* Glow Effect */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>
              
              <div className="relative z-10 mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/50 bg-indigo-500 text-xs font-medium text-white mb-4">
                  <Sparkles className="w-3 h-3" />
                  {lang === 'en' ? 'Intelligence Layer' : 'Lapisan Kecerdasan'}
                </div>
                <h3 className="text-3xl font-medium tracking-tight mb-4">
                  <span className="ai-gradient-text">{aiAddons.title}</span>
                </h3>
                <p className="text-muted-foreground max-w-2xl">{aiAddons.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                {aiAddons.packages.slice(0, 3).map((aiPkg, index) => (
                  <div
                    key={aiPkg.name}
                    className="bg-background/80 backdrop-blur border border-border/50 p-6 rounded-xl hover:border-indigo-500/50 transition-colors"
                  >
                    <h3 className="text-foreground font-medium mb-2">{aiPkg.name}</h3>
                    <p className="text-xs text-muted-foreground mb-4 h-8 line-clamp-2">{aiPkg.description}</p>
                    <div className="text-lg font-medium text-foreground mb-4">{aiPkg.price}</div>
                    <ul className="text-xs text-muted-foreground space-y-2">
                      {aiPkg.features.slice(0, 2).map((feature) => (
                        <li key={feature}>+ {feature}</li>
                      ))}
                    </ul>
                  </div>
                ))}
                
                {/* Full AI Agent - Special Card */}
                {aiAddons.packages[4] && (
                  <div className="bg-background/80 backdrop-blur border border-border/50 p-6 rounded-xl hover:border-indigo-500/50 transition-colors md:col-span-2 lg:col-span-3 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-foreground font-medium mb-2 flex items-center gap-2">
                        {aiAddons.packages[4].name}
                        <span className="bg-indigo-600 text-white text-[10px] px-2 py-0.5 rounded font-medium">
                          {lang === 'en' ? 'Advanced' : 'Tingkat Lanjut'}
                        </span>
                      </h3>
                      <p className="text-sm text-muted-foreground max-w-xl">
                        {aiAddons.packages[4].description}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-medium text-foreground tracking-tight">{aiAddons.packages[4].price}</div>
                      <div className="text-xs text-muted-foreground">
                        {lang === 'en' ? 'Depending on complexity' : 'Tergantung kompleksitas'}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ERP Packages */}
        {activeTab === 'erp' && (
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-muted-foreground">{erpCrm.erp.description}</p>
            </div>

            {/* Modules Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {erpCrm.erp.modules.map((module) => (
                <div
                  key={module}
                  className="p-4 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors duration-300"
                >
                  <p className="text-sm">{module}</p>
                </div>
              ))}
            </div>

            {/* Full Package */}
            <div className="p-8 rounded-3xl bg-primary text-primary-foreground">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-primary-foreground/60 mb-2">
                    {lang === 'en' ? 'Full Package' : 'Paket Lengkap'}
                  </p>
                  <p className="text-2xl font-bold">{erpCrm.erp.fullPackage.split(': ')[1]}</p>
                </div>
                <a
                  href={getWhatsAppLink('pricing', lang)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full font-medium text-sm bg-brand text-white hover:bg-brand/90 transition-colors duration-300 text-center"
                >
                  {lang === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-foreground/10">
                <ul className="space-y-1.5">
                  {erpCrm.erp.revisions.map((rev) => (
                    <li key={rev} className="text-xs text-primary-foreground/60">
                      {rev}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Revision System - Collapsible */}
        <div className="max-w-4xl mx-auto mt-16">
          <button
            onClick={() => setShowRevisions(!showRevisions)}
            className="w-full flex items-center justify-between p-6 rounded-2xl border border-border bg-background hover:border-primary/50 transition-colors duration-300"
          >
            <span className="font-medium">{revisionSystem.title}</span>
            <ChevronDown
              className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                showRevisions ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showRevisions && (
            <div className="mt-4 p-8 rounded-2xl border border-border bg-background">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Small Revisions */}
                <div>
                  <h3 className="font-medium mb-4 text-foreground">{revisionSystem.small.title}</h3>
                  <ul className="space-y-2">
                    {revisionSystem.small.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Large Revisions */}
                <div>
                  <h3 className="font-medium mb-4 text-foreground">{revisionSystem.large.title}</h3>
                  <ul className="space-y-2">
                    {revisionSystem.large.items.map((item) => (
                      <li key={item} className="text-sm text-foreground/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Extra Revisions */}
              <div className="pt-6 border-t border-border">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                  {lang === 'en' ? 'Additional Revisions' : 'Revisi Tambahan'}
                </p>
                <div className="flex flex-wrap gap-3">
                  {revisionSystem.extra.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-secondary text-sm text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </>
  );
};

export default UnifiedPricing;
