import React from 'react';
import { servicesIntroData } from '../../../data/servicesIntro';
import { LottieIcon } from '../../ui/LottieIcon';

interface Section3ReactProps {
  lang: 'en' | 'id';
}

const Section3React: React.FC<Section3ReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
    <section className="py-8 sm:py-12 md:py-20 lg:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="typography-section-title mb-4 sm:mb-6">
            {data.problem.title}
          </h2>
          <p className="typography-subtitle leading-relaxed">
            {data.problem.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {data.problem.challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 sm:p-8 hover:border-brand/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col h-full"
            >
              <div className="mb-4 sm:mb-6 flex items-center justify-start">
                <LottieIcon
                  src={challenge.icon}
                  className="w-16 h-16 sm:w-20 sm:h-20"
                />
              </div>
              <h3 className="typography-card-title mb-3 sm:mb-4">
                {challenge.title}
              </h3>
              <p className="typography-body leading-relaxed grow">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section3React;
