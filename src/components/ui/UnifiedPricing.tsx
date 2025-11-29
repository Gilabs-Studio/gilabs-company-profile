import React, { useState } from 'react';
import { Check, Plus, ChevronDown } from 'lucide-react';

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

interface UnifiedPricingProps {
  lang: 'en' | 'id';
  packages: PricingPackage[];
  revisionSystem: RevisionSystem;
  erpCrm: ErpCrm;
}

type TabType = 'website' | 'crm' | 'erp';

const UnifiedPricing: React.FC<UnifiedPricingProps> = ({
  lang,
  packages,
  revisionSystem,
  erpCrm,
}) => {
  const [activeTab, setActiveTab] = useState<TabType>('website');
  const [showRevisions, setShowRevisions] = useState(false);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'website', label: 'Website' },
    { id: 'crm', label: 'CRM' },
    { id: 'erp', label: 'ERP' },
  ];

  return (
    <section id="pricing" className="py-24 md:py-32">
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
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
                className={`px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 min-h-[44px] ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground/70 hover:text-foreground bg-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Website Packages */}
        {activeTab === 'website' && (
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.title}
                className={`relative flex flex-col p-8 rounded-3xl border transition-all duration-300 ${
                  index === 1
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-background hover:border-primary/50'
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-3 left-6 px-3 py-1 bg-brand text-white text-xs font-medium rounded-full">
                    {lang === 'en' ? 'Popular' : 'Populer'}
                  </span>
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
                  href="#contact"
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
                    href="#contact"
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
                  href="#contact"
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
  );
};

export default UnifiedPricing;
