import React from 'react';
import { getWhatsAppLink } from '../../../lib/utils';
import { servicesIntroData } from '../../../data/servicesIntro';

interface Section7ReactProps {
  lang: 'en' | 'id';
}

const Section7React: React.FC<Section7ReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
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
  );
};

export default Section7React;
