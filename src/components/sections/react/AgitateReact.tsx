import React from 'react';
import { servicesIntroData } from '../../../data/servicesIntro';
import { LottieIcon } from '../../ui/LottieIcon';

interface Section4ReactProps {
  lang: 'en' | 'id';
}

const Section4React: React.FC<Section4ReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
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
  );
};

export default Section4React;
