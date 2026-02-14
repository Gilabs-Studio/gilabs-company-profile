import React from 'react';
import { X, Check } from 'lucide-react';
import { servicesIntroData } from '../../../data/servicesIntro';

interface Section5ReactProps {
  lang: 'en' | 'id';
}

const Section5React: React.FC<Section5ReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
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
  );
};

export default Section5React;
