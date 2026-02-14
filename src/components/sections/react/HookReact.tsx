import React from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldCheck, DollarSign, Sparkles, Layers, Zap } from 'lucide-react';
import { servicesIntroData } from '../../../data/servicesIntro';

interface Section2ReactProps {
  lang: 'en' | 'id';
}

const Section2React: React.FC<Section2ReactProps> = ({ lang }) => {
  const data = servicesIntroData[lang];

  return (
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
            <div className="h-px w-6 sm:w-12 bg-border/60" />
            <span className="text-muted-foreground font-serif italic text-sm sm:text-base">
              {data.hero.eyebrow}
            </span>
            <div className="h-px w-6 sm:w-12 bg-border/60" />
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
  );
};

export default Section2React;
