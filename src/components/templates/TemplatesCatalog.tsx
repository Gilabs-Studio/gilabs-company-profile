"use client";

import React, { useState, useMemo } from 'react';
import type { TemplateItem } from '../../data/templatesData';
import { templateCategories, templatesPageContent } from '../../data/templatesData';
import { getWhatsAppLink } from '../../lib/utils';
import { Search, X, ExternalLink, Check, ChevronRight } from 'lucide-react';

interface TemplatesCatalogProps {
  templates: TemplateItem[];
  lang: 'id' | 'en';
}

export default function TemplatesCatalog({ templates, lang = 'id' }: TemplatesCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'recommended' | 'priceLow' | 'priceHigh' | 'popular'>('recommended');
  const [activeModalTemplate, setActiveModalTemplate] = useState<TemplateItem | null>(null);

  const t = templatesPageContent[lang];

  // Filter and sort templates
  const filteredTemplates = useMemo(() => {
    return templates
      .filter((item) => {
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const query = searchQuery.toLowerCase().trim();
        if (!query) return matchesCategory;

        const titleMatch = item.title.toLowerCase().includes(query);
        const categoryMatch = item.categoryLabel[lang].toLowerCase().includes(query);

        return matchesCategory && (titleMatch || categoryMatch);
      })
      .sort((a, b) => {
        if (sortBy === 'priceLow') {
          return a.startingPriceIdr - b.startingPriceIdr;
        }
        if (sortBy === 'priceHigh') {
          return b.startingPriceIdr - a.startingPriceIdr;
        }
        if (sortBy === 'popular') {
          return b.buyersCount - a.buyersCount;
        }
        return 0; // default / recommended
      });
  }, [templates, selectedCategory, searchQuery, sortBy, lang]);

  const formatPrice = (priceIdr: number) => {
    return `Rp ${priceIdr.toLocaleString('id-ID')}`;
  };

  const openModal = (item: TemplateItem) => {
    setActiveModalTemplate(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setActiveModalTemplate(null);
    document.body.style.overflow = '';
  };

  return (
    <div className="w-full">
      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
        {templateCategories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`text-xs px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                isActive
                  ? 'bg-foreground text-background font-medium'
                  : 'bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {cat.label[lang]}
            </button>
          );
        })}
      </div>

      {/* Search and Sort Toolbar */}
      <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-border/60">
        {/* Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full text-xs bg-background border border-border/80 rounded-lg pl-9 pr-8 py-2 text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-1 focus:ring-foreground transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground cursor-pointer"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Sort Dropdown & Counter */}
        <div className="flex items-center justify-between sm:justify-end gap-3">
          <span className="text-xs text-muted-foreground whitespace-nowrap">
            {t.showingResults.replace('{count}', filteredTemplates.length.toString())}
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs bg-background border border-border/80 rounded-lg px-2.5 py-2 text-foreground focus:outline-none focus:ring-1 focus:ring-foreground cursor-pointer"
          >
            <option value="recommended">{t.sortOptions.recommended}</option>
            <option value="popular">{t.sortOptions.popular}</option>
            <option value="priceLow">{t.sortOptions.priceLow}</option>
            <option value="priceHigh">{t.sortOptions.priceHigh}</option>
          </select>
        </div>
      </div>

      {/* Templates Grid - Clean Minimal 3-Column Cards */}
      {filteredTemplates.length > 0 ? (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => {
            const orderUrl = lang === 'en' 
              ? `/en/templates/order?template=${template.id}` 
              : `/templates/order?template=${template.id}`;
            const title = lang === 'en' && template.titleEn ? template.titleEn : template.title;

            return (
              <div
                key={template.id}
                className="bg-card border border-border/70 rounded-lg overflow-hidden flex flex-col transition-all duration-200 hover:border-foreground/40 hover:shadow-xs"
              >
                {/* Thumbnail Preview linking to Demo */}
                <a
                  href={template.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[16/10] bg-muted/40 relative overflow-hidden block group cursor-pointer border-b border-border/50"
                  aria-label={`Lihat Demo ${title}`}
                >
                  <img
                    src={template.previewImage}
                    alt={title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-background/95 backdrop-blur-xs text-foreground text-xs font-semibold px-3 py-1.5 rounded-md shadow-xs flex items-center gap-1.5">
                      <span>{t.card.livePreview}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>

                {/* Card Content - Clean: Title, Price, Action buttons */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title */}
                    <h3 className="text-base font-semibold text-foreground tracking-tight leading-snug">
                      <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand transition-colors cursor-pointer inline-flex items-center gap-1.5"
                      >
                        <span>{title}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground flex-shrink-0" />
                      </a>
                    </h3>
                  </div>

                  {/* Pricing and Actions Row */}
                  <div className="mt-5 pt-3.5 border-t border-border/50">
                    <div className="flex items-baseline justify-between mb-3.5">
                      <div>
                        <div className="text-base sm:text-lg font-bold text-foreground">
                          {formatPrice(template.startingPriceIdr)}
                        </div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">
                          {t.card.oneTimePayment}
                        </div>
                      </div>

                      <span className="text-[11px] text-muted-foreground">
                        {t.card.buyersNote.replace('{count}', template.buyersCount.toString())}
                      </span>
                    </div>

                    {/* Actions: Live Demo + Detail + Order */}
                    <div className="grid grid-cols-3 gap-2">
                      <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium py-2 px-2 rounded-lg border border-border/80 hover:bg-secondary text-foreground text-center cursor-pointer transition-colors inline-flex items-center justify-center gap-1"
                      >
                        <span>{t.card.livePreview}</span>
                        <ExternalLink className="w-3 h-3 text-muted-foreground" />
                      </a>

                      <button
                        onClick={() => openModal(template)}
                        className="text-xs font-medium py-2 px-2 rounded-lg border border-border/80 hover:bg-secondary text-foreground text-center cursor-pointer transition-colors"
                      >
                        {t.card.viewDetail}
                      </button>

                      <a
                        href={orderUrl}
                        className="text-xs font-semibold py-2 px-2 rounded-lg bg-foreground text-background hover:opacity-90 text-center cursor-pointer transition-opacity"
                      >
                        {t.card.buyNow}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* Empty State */
        <div className="mt-12 text-center py-12 border border-dashed border-border/70 rounded-lg max-w-xl mx-auto">
          <p className="text-sm font-semibold text-foreground">{t.emptyStateTitle}</p>
          <p className="text-xs text-muted-foreground mt-1">{t.emptyStateSubtitle}</p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 text-xs font-medium px-3 py-1.5 rounded-lg border border-border hover:bg-secondary text-foreground cursor-pointer transition-colors"
          >
            Reset Filter
          </button>
        </div>
      )}

      {/* Detail Modal */}
      {activeModalTemplate && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={closeModal}
        >
          <div
            className="bg-background border border-border/80 rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-border/60">
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                {activeModalTemplate.title}
              </h2>
              <button
                onClick={closeModal}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
              {/* Image Preview linking to Demo */}
              <div>
                <a
                  href={activeModalTemplate.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-[16/10] bg-muted/40 rounded-lg overflow-hidden border border-border/60 block group relative cursor-pointer"
                >
                  <img
                    src={activeModalTemplate.previewImage}
                    alt={activeModalTemplate.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-background/95 backdrop-blur-xs text-foreground text-xs font-semibold px-3 py-1.5 rounded-md shadow-xs flex items-center gap-1.5">
                      <span>{t.modal.openDemo}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </a>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1.5">
                  {t.modal.overview}
                </h4>
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
                  {activeModalTemplate.description[lang]}
                </p>
              </div>

              {/* Included in All Packages */}
              <div className="bg-secondary/40 border border-border/50 rounded-lg p-4">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                  {t.modal.included}
                </h4>
                <ul className="space-y-2">
                  {[
                    lang === 'id' ? 'Domain aktif (.com / .id)' : 'Active domain registration (.com / .id)',
                    lang === 'id' ? 'Cloud hosting berkecepatan tinggi & uptime 99.9%' : 'High-speed cloud hosting & 99.9% uptime',
                    lang === 'id' ? 'SSL sertifikat keamanan gratis' : 'Free SSL security certificate',
                    lang === 'id' ? 'Akun email bisnis profesional' : 'Professional business email accounts',
                    lang === 'id' ? 'Pemeliharaan & backup sistem rutin' : 'Routine system maintenance & backups',
                    lang === 'id' ? 'Prioritas bantuan teknis langsung oleh tim engineer' : 'Direct technical engineering support',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-foreground/90 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-[11px] text-muted-foreground italic">
                {t.modal.guaranteeNote}
              </div>
            </div>

            {/* Modal Footer / Actions */}
            <div className="p-4 sm:p-5 border-t border-border/60 bg-secondary/20 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div>
                <div className="text-[11px] text-muted-foreground">
                  {t.modal.priceLabel}
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-lg font-bold text-foreground">
                    {formatPrice(activeModalTemplate.startingPriceIdr)}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    ({t.card.oneTimePayment})
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={activeModalTemplate.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-medium py-2.5 px-3.5 rounded-lg border border-border/80 hover:bg-secondary text-foreground inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                >
                  <span>{t.modal.openDemo}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={lang === 'en' ? `/en/templates/order?template=${activeModalTemplate.id}` : `/templates/order?template=${activeModalTemplate.id}`}
                  className="text-xs font-semibold py-2.5 px-4 rounded-lg bg-foreground text-background hover:opacity-90 inline-flex items-center justify-center cursor-pointer transition-opacity"
                >
                  {t.modal.buyNow}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

