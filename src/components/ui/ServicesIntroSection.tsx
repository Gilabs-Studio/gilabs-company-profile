import React from 'react';
import { Check, X, Sparkles, Calculator, ShieldCheck, Users, DollarSign, Zap, Search, MousePointer2, Code, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
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
      <section className="pt-24 pb-32 sm:pt-36 sm:pb-48 md:pt-44 md:pb-60 lg:pt-52 lg:pb-72 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--brand-rgb),0.05),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center relative z-20">
            {/* Eyebrow with Dividers */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
            >
              <div className="h-[1px] w-6 sm:w-12 bg-border/60" />
              <span className="text-muted-foreground font-serif italic text-sm sm:text-base">
                {data.hero.eyebrow}
              </span>
              <div className="h-[1px] w-6 sm:w-12 bg-border/60" />
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.05]"
            >
              {data.hero.title.split('. ').map((part, i) => (
                <React.Fragment key={i}>
                  {part}{i === 0 ? '.' : ''}
                  {i === 0 && <br className="hidden sm:block" />}
                </React.Fragment>
              ))}
            </motion.h1>

            {/* Subtitle / Description */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground mb-6 md:mb-8 lg:mb-12 max-w-3xl mx-auto animate-slide-up space-y-1 md:space-y-2 font-light px-4"
            >
              <p>{data.hero.subtitle},</p>
              <p>{data.hero.description[0]}</p>
            </motion.div>

            {/* CTA or Secondary Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center"
            >
            </motion.div>
          </div>

          {/* Floating Tags - Left Side */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Tag 1 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -15, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4 },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute left-[3%] top-[22%] bg-background/80 backdrop-blur-md border border-border/50 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 pointer-events-auto cursor-default hover:border-brand/40 transition-colors z-30"
            >
              <div className="p-1.5 rounded-full bg-orange-500/10 text-orange-500">
                <Users className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{data.hero.tagsLeft[0]}</span>
            </motion.div>

            {/* Tag 2 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 15, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute left-[7%] top-[42%] bg-background/80 backdrop-blur-md border border-border/50 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 pointer-events-auto cursor-default hover:border-brand/40 transition-colors z-30"
            >
              <div className="p-1.5 rounded-full bg-emerald-500/10 text-emerald-500">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{data.hero.tagsLeft[1]}</span>
            </motion.div>

            {/* Tag 3 */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -10, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                x: { duration: 0.8, delay: 0.6 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
              }}
              className="absolute left-[5%] top-[62%] bg-background/80 backdrop-blur-md border border-border/50 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 pointer-events-auto cursor-default hover:border-brand/40 transition-colors z-30"
            >
              <div className="p-1.5 rounded-full bg-blue-500/10 text-blue-500">
                <DollarSign className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{data.hero.tagsLeft[2]}</span>
            </motion.div>
          </div>

          {/* Floating Tags - Right Side */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            {/* Tag 4 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 12, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.4 },
                x: { duration: 0.8, delay: 0.4 },
                y: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }
              }}
              className="absolute right-[3%] top-[22%] bg-background/80 backdrop-blur-md border border-border/50 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 pointer-events-auto cursor-default hover:border-brand/40 transition-colors z-30"
            >
              <div className="p-1.5 rounded-full bg-purple-500/10 text-purple-500">
                <Sparkles className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{data.hero.tagsRight[0]}</span>
            </motion.div>

            {/* Tag 5 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, -15, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.5 },
                x: { duration: 0.8, delay: 0.5 },
                y: { duration: 4.8, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute right-[9%] top-[42%] bg-background/80 backdrop-blur-md border border-border/50 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 pointer-events-auto cursor-default hover:border-brand/40 transition-colors z-30"
            >
              <div className="p-1.5 rounded-full bg-pink-500/10 text-pink-500">
                <Layers className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{data.hero.tagsRight[1]}</span>
            </motion.div>

            {/* Tag 6 */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ 
                opacity: 1, 
                x: 0,
                y: [0, 10, 0] 
              }}
              transition={{
                opacity: { duration: 0.8, delay: 0.6 },
                x: { duration: 0.8, delay: 0.6 },
                y: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
              }}
              className="absolute right-[5%] top-[62%] bg-background/80 backdrop-blur-md border border-border/50 px-5 py-2.5 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 pointer-events-auto cursor-default hover:border-brand/40 transition-colors z-30"
            >
              <div className="p-1.5 rounded-full bg-yellow-500/10 text-yellow-500">
                <Zap className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium whitespace-nowrap">{data.hero.tagsRight[2]}</span>
            </motion.div>
          </div>

          {/* Mobile Mobile Tags (2-column Grid with Icons) */}
          <div className="lg:hidden mt-12 grid grid-cols-2 gap-3 sm:gap-4 max-w-sm mx-auto px-4">
            {[
              { label: data.hero.tagsLeft[0], icon: Users, color: 'text-orange-500', bg: 'bg-orange-500/10' },
              { label: data.hero.tagsRight[0], icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-500/10' },
              { label: data.hero.tagsLeft[1], icon: ShieldCheck, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
              { label: data.hero.tagsRight[1], icon: Layers, color: 'text-pink-500', bg: 'bg-pink-500/10' },
              { label: data.hero.tagsLeft[2], icon: DollarSign, color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { label: data.hero.tagsRight[2], icon: Zap, color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
            ].map((tag, i) => (
              <motion.div
                key={tag.label}
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.05), duration: 0.4 }}
                className="bg-background/80 backdrop-blur-md border border-border/50 px-3 py-2.5 rounded-full shadow-[0_4px_20px_rgb(0,0,0,0.03)] flex items-center gap-2"
              >
                <div className={`p-1 rounded-full ${tag.bg} ${tag.color}`}>
                  <tag.icon className="w-3.5 h-3.5" />
                </div>
                <span className="text-[10px] sm:text-xs font-semibold text-foreground/90 truncate">{tag.label}</span>
              </motion.div>
            ))}
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
