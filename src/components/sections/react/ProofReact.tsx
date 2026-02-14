import React from 'react';
import { Calculator, ShieldCheck } from 'lucide-react';
import { servicesIntroData } from '../../../data/servicesIntro';

interface Section6ReactProps {
  lang: 'en' | 'id';
}

const Section6React: React.FC<Section6ReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
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
  );
};

export default Section6React;
