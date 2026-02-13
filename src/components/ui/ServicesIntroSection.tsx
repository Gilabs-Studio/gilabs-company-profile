import React from 'react';
import { Check, X, Sparkles, Calculator, ShieldCheck } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/utils';
import { LottieIcon } from './LottieIcon';
import { servicesIntroData } from '../../data/servicesIntro';

interface ServicesIntroSectionProps {
  lang: 'en' | 'id';
}

const ServicesIntroSection: React.FC<ServicesIntroSectionProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
    <>
      {/* Hero Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-brand text-sm font-medium uppercase tracking-[0.2em] mb-4">
              {data.hero.eyebrow}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              {data.hero.title}
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-brand font-semibold mb-6">
              {data.hero.subtitle}
            </p>
            <div className="space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              {data.hero.description.map((paragraph) => (
                <p key={paragraph.substring(0, 20)}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - The SaaS Trap */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
              {data.problem.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {data.problem.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {data.problem.challenges.map((challenge) => (
              <div
                key={challenge.title}
                className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-brand/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-4 sm:mb-6 flex items-center justify-start">
                  <LottieIcon
                    src="/icon/artificial-intelligence.gif"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground leading-tight">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed grow">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section - Custom Software Benefits */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <span className="inline-block text-brand text-sm font-medium uppercase tracking-[0.2em] mb-4">
              {data.solution.tagline}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
              {data.solution.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {data.solution.subtitle}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {data.solution.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-brand/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="mb-4 sm:mb-6 flex items-center justify-start">
                  <LottieIcon
                    src="/icon/artificial-intelligence.gif"
                    className="w-16 h-16 sm:w-20 sm:h-20"
                  />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-foreground leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed grow mb-4">
                  {benefit.description}
                </p>
                {benefit.stats && (
                  <div className="mt-auto">
                    <span className="inline-block px-3 py-1 bg-brand/10 text-brand text-xs font-semibold rounded-full">
                      {benefit.stats}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section - Custom Software vs SaaS */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
              {data.comparison.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {data.comparison.subtitle}
            </p>
          </div>
          
          {/* Comparison Table */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-3xl overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted/50 border-b border-border/50">
                      <th className="text-left p-4 sm:p-6 text-sm sm:text-base font-bold text-foreground">
                        {lang === 'en' ? 'Feature' : 'Fitur'}
                      </th>
                      <th className="text-left p-4 sm:p-6 text-sm sm:text-base font-bold text-muted-foreground">
                        SaaS
                      </th>
                      <th className="text-left p-4 sm:p-6 text-sm sm:text-base font-bold text-brand">
                        {lang === 'en' ? 'Custom Software' : 'Software Custom'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.comparison.items.map((item, index) => (
                      <tr
                        key={item.feature}
                        className={`border-b border-border/10 transition-colors duration-200 ${
                          item.highlight
                            ? 'bg-brand/10 hover:bg-brand/15'
                            : 'hover:bg-muted/30'
                        } ${index === data.comparison.items.length - 1 ? 'border-b-0' : ''}`}
                      >
                        <td className="p-4 sm:p-6 text-sm sm:text-base font-medium text-foreground">
                          {item.feature}
                        </td>
                        <td className="p-4 sm:p-6 text-sm sm:text-base text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <X className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 shrink-0 mt-0.5" />
                            <span>{item.saas}</span>
                          </div>
                        </td>
                        <td className="p-4 sm:p-6 text-sm sm:text-base text-foreground">
                          <div className="flex items-start gap-2">
                            <Check className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 shrink-0 mt-0.5" />
                            <span className={item.highlight ? 'font-bold text-brand' : ''}>{item.custom}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground mt-6 text-center italic">
              {data.comparison.note}
            </p>
          </div>
        </div>
      </section>

      {/* Investment Section - Real Cost Comparison */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
              {data.investment.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {data.investment.subtitle}
            </p>
          </div>

          {data.investment.scenarios.map((scenario) => (
            <div key={scenario.type} className="max-w-5xl mx-auto mb-12">
              <h3 className="text-xl sm:text-2xl font-bold text-center mb-8 text-foreground">
                {scenario.type}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* SaaS Model Card - "White/Light" */}
                <div className="bg-background border border-border rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full relative overflow-hidden">
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground">
                        {scenario.saasModel.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="space-y-5 grow">
                    <div className="flex justify-between items-center pb-4 border-b border-border/50">
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {lang === 'en' ? 'Monthly' : 'Bulanan'}
                      </span>
                      <span className="text-lg font-semibold text-foreground">
                        {scenario.saasModel.monthly}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border/50">
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {lang === 'en' ? 'Yearly' : 'Tahunan'}
                      </span>
                      <span className="text-lg font-semibold text-foreground">
                        {scenario.saasModel.yearly}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-border/50">
                      <span className="text-sm sm:text-base text-muted-foreground">
                        {lang === 'en' ? '3 Years' : '3 Tahun'}
                      </span>
                      <span className="text-xl font-bold text-red-500">
                        {scenario.saasModel.threeYears}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-muted-foreground font-medium uppercase tracking-wider">
                        {lang === 'en' ? '5 Years Cost' : 'Biaya 5 Tahun'}
                      </span>
                      <span className="text-2xl font-bold text-red-500">
                        {scenario.saasModel.fiveYears}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Custom Model Card - "Dark" */}
                <div className="bg-primary text-primary-foreground border-2 border-brand rounded-3xl p-8 sm:p-10 shadow-2xl scale-105 z-10 flex flex-col h-full relative overflow-hidden">
                  {/* Premium Badge */}
                  <div className="absolute top-0 right-0 bg-brand text-white text-[10px] sm:text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-[0.15em]">
                    {lang === 'en' ? 'Recommended' : 'Direkomendasikan'}
                  </div>

                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl sm:text-2xl font-bold">
                        {scenario.customModel.title}
                      </h4>
                    </div>
                  </div>
                  
                  <div className="space-y-5 grow">
                    <div className="flex justify-between items-center pb-4 border-b border-primary-foreground/20">
                      <span className="text-sm sm:text-base text-primary-foreground/70">
                        {lang === 'en' ? 'Initial Investment' : 'Investasi Awal'}
                      </span>
                      <span className="text-lg font-semibold">
                        {scenario.customModel.initial}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-primary-foreground/20">
                      <span className="text-sm sm:text-base text-primary-foreground/70">
                        {lang === 'en' ? 'Yearly Maintenance' : 'Maintenance Tahunan'}
                      </span>
                      <span className="text-lg font-semibold">
                        {scenario.customModel.yearly}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-primary-foreground/20">
                      <span className="text-sm sm:text-base text-primary-foreground/70">
                        {lang === 'en' ? '3 Years Total' : 'Total 3 Tahun'}
                      </span>
                      <span className="text-xl font-bold text-brand">
                        {scenario.customModel.threeYears}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm sm:text-base text-primary-foreground font-medium uppercase tracking-wider">
                        {lang === 'en' ? '5 Years Total' : 'Total 5 Tahun'}
                      </span>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-brand block">
                          {scenario.customModel.fiveYears}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern ROI Disclaimer */}
              <div className="mt-20 max-w-4xl mx-auto">
                <div className="bg-brand/5 border border-brand/20 rounded-2xl p-6 sm:p-8 flex items-start gap-4 sm:gap-6 shadow-sm">
                  <div className="p-3 bg-brand/10 rounded-xl text-brand shrink-0">
                    <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  <div className="text-left space-y-2">
                    <h4 className="text-lg font-bold text-foreground">
                      {lang === 'en' ? 'Strategic Investment Analysis' : 'Analisis Investasi Strategis'}
                    </h4>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      {lang === 'en' 
                        ? "Our analysis shows that transitioning to a custom-built solution can yield a 150% return on investment within 5 years. This assumes a stable team size and accounts for typical SaaS price escalations and maintenance costs."
                        : "Analisis kami menunjukkan bahwa transisi ke solusi kustom dapat menghasilkan imbal hasil investasi (ROI) sebesar 150% dalam 5 tahun. Hal ini mengasumsikan ukuran tim yang stabil dan memperhitungkan kenaikan harga SaaS serta biaya pemeliharaan."}
                    </p>
                    <div className="flex items-center gap-2 pt-2 text-brand font-semibold text-sm">
                      <ShieldCheck className="w-4 h-4" />
                      <span>{lang === 'en' ? 'Full Ownership Model Verified' : 'Model Kepemilikan Penuh Terverifikasi'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4 sm:mb-6 leading-tight">
              {data.cta.title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {data.cta.subtitle}
            </p>
            <a
              href={getWhatsAppLink('services', lang)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand text-white rounded-full font-medium text-base sm:text-lg hover:bg-brand/90 hover:shadow-xl hover:shadow-brand/30 transition-all duration-300"
            >
              <span>{data.cta.button}</span>
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesIntroSection;
