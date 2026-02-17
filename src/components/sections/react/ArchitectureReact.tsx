import React from 'react';
import { motion } from 'framer-motion';
import { servicesIntroData } from '../../../data/servicesIntro';

interface ArchitectureReactProps {
  lang: 'en' | 'id';
}

const ArchitectureReact: React.FC<ArchitectureReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
    <section className="py-24 sm:py-32 md:py-40 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 sm:mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-brand text-sm font-medium uppercase tracking-[0.2em] mb-4"
            >
              {data.solution.tagline}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-6 leading-tight"
            >
              Architecture Designed for Ownership
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {data.solution.benefits.map((benefit, idx) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1) }}
                className="bg-background/40 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-brand/50 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full group"
              >
                <div className="mb-6 flex items-center justify-start">
                  <div className="w-16 h-16 flex items-center justify-center duration-500 group-hover:scale-110">
                    <img src={benefit.icon} alt={benefit.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed grow mb-6">
                  {benefit.description}
                </p>
                {benefit.stats && (
                  <div className="mt-auto">
                    <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand text-xs font-bold rounded-full tracking-wide">
                      {benefit.stats}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(var(--brand-rgb),0.03),transparent_70%)] pointer-events-none" />
    </section>
  );
};

export default ArchitectureReact;
