import React, { useEffect, useRef, useState } from 'react';

interface ServiceItem {
  title: string;
  body: string[];
  tagline: string;
}

interface ScrollCardServicesProps {
  title: string;
  subtitle: string;
  items: ServiceItem[];
  ctaText: string;
}

interface CardStackProps {
  items: ServiceItem[];
  activeIndex: number;
  isClient: boolean;
}

const CARD_DISTANCE = 60;
const VERTICAL_DISTANCE = 70;
const SKEW_AMOUNT = 6;

// Smooth elastic animation config
const ELASTIC_CONFIG = {
  ease: 'elastic.out(0.6, 0.9)',
  duration: 1.2
};

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

const makeSlot = (position: number, total: number): Slot => ({
  x: position * CARD_DISTANCE,
  y: -position * VERTICAL_DISTANCE,
  z: -position * CARD_DISTANCE * 1.5,
  zIndex: total - position
});

const CardStack: React.FC<CardStackProps> = ({ items, activeIndex, isClient }) => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const isInitialized = useRef(false);
  const animationsRef = useRef<Map<number, ReturnType<typeof import('gsap').gsap.to>>>(new Map());

  useEffect(() => {
    if (!isClient) return;

    const animateCards = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      const total = items.length;
      const isFirst = !isInitialized.current;

      // Kill all existing animations
      animationsRef.current.forEach(anim => anim.kill());
      animationsRef.current.clear();

      // Calculate position for each card based on activeIndex
      // Card at activeIndex should be at position 0 (front)
      for (let i = 0; i < total; i++) {
        const card = cardsRef.current[i];
        if (!card) continue;

        // Position calculation: card[activeIndex] = position 0, card[activeIndex+1] = position 1, etc.
        const position = (i - activeIndex + total) % total;
        const slot = makeSlot(position, total);

        if (isFirst) {
          // Initial placement without animation
          gsap.set(card, {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            xPercent: -50,
            yPercent: -50,
            skewY: SKEW_AMOUNT,
            transformOrigin: 'center center',
            zIndex: slot.zIndex,
            force3D: true
          });
        } else {
          // Set z-index immediately to prevent overlap issues
          gsap.set(card, { zIndex: slot.zIndex });
          
          // Animate to new position
          const anim = gsap.to(card, {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: ELASTIC_CONFIG.duration,
            ease: ELASTIC_CONFIG.ease,
            delay: position * 0.05
          });
          animationsRef.current.set(i, anim);
        }
      }

      isInitialized.current = true;
    };

    animateCards();
  }, [isClient, activeIndex, items.length]);

  const placeholderImages = [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=600&fit=crop'
  ];

  return (
    <div 
      className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[5%] origin-center"
      style={{ 
        perspective: '900px', 
        transformStyle: 'preserve-3d',
        width: '600px',
        height: '520px'
      }}
    >
      {items.map((service, idx) => (
        <div
          key={service.title}
          ref={el => { cardsRef.current[idx] = el; }}
          className="absolute top-1/2 left-1/2 w-[520px] h-[420px] rounded-2xl border border-border bg-card overflow-hidden shadow-2xl transform-3d will-change-transform backface-hidden"
        >
          {/* Placeholder Image */}
          <div className="h-44 w-full overflow-hidden bg-secondary">
            <img
              src={placeholderImages[idx % placeholderImages.length]}
              alt={service.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Card Content */}
          <div className="p-6 flex flex-col h-[calc(100%-11rem)]">
            {/* Card header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-11 h-11 rounded-full bg-brand/10 text-brand text-sm font-bold">
                {String(idx + 1).padStart(2, '0')}
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Service
              </span>
            </div>

            {/* Card title & description */}
            <div className="flex-1">
              <h4 className="text-2xl font-bold text-card-foreground mb-3">
                {service.title}
              </h4>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {service.body[0]}
              </p>
            </div>

            {/* Card footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
              <span className="text-sm text-brand font-medium">
                {service.tagline.replace('→ ', '')}
              </span>
              <div className="w-11 h-11 rounded-full bg-brand/10 flex items-center justify-center hover:bg-brand group transition-colors cursor-pointer">
                <svg
                  className="w-5 h-5 text-brand group-hover:text-white transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const ScrollCardServices: React.FC<ScrollCardServicesProps> = ({
  title,
  subtitle,
  items,
  ctaText
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const scrollSectionRef = useRef<HTMLElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const section = scrollSectionRef.current;
    if (!section) return;

    let ctx: ReturnType<typeof import('gsap').gsap.context> | null = null;

    const initScrollTrigger = async () => {
      const gsapModule = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      const gsap = gsapModule.default;
      
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: () => `+=${items.length * 100}%`,
          pin: true,
          scrub: 0.3,
          onUpdate: self => {
            const progress = self.progress;
            const newIndex = Math.min(
              Math.floor(progress * items.length),
              items.length - 1
            );
            
            setActiveIndex(newIndex);
          }
        });
      }, section);
    };

    initScrollTrigger();

    return () => {
      ctx?.revert();
    };
  }, [isClient, items.length]);

  useEffect(() => {
    if (!isClient) return;

    const textContainer = textContainerRef.current;
    if (!textContainer) return;

    const animateText = async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      const textElements = textContainer.querySelectorAll('.service-text-content');
      
      gsap.to(textElements, {
        opacity: 0,
        y: -20,
        duration: 0.25,
        ease: 'power2.in',
        onComplete: () => {
          gsap.fromTo(
            textElements,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.08 }
          );
        }
      });
    };

    animateText();
  }, [isClient, activeIndex]);

  const currentService = items[activeIndex];

  return (
    <>
      {/* Section 1: Header */}
      <section id="services" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Full viewport scroll-triggered grid */}
      <section
        ref={scrollSectionRef}
        className="relative h-screen bg-background overflow-hidden"
      >
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* Left side - Text content */}
            <div className="relative z-10 flex flex-col justify-center max-w-xl">
              {/* Dynamic service content */}
              <div ref={textContainerRef} className="relative">
                <div className="service-text-content">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
                    {currentService?.title}
                  </h3>
                </div>
                
                <div className="service-text-content mt-8 space-y-3">
                  {currentService?.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 30)} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="service-text-content mt-8">
                  <p className="text-brand">
                    {currentService?.tagline}
                  </p>
                </div>

                {/* CTA Button */}
                <div className="service-text-content mt-12">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors duration-300"
                  >
                    {ctaText}
                  </a>
                </div>
              </div>

              {/* Service navigation dots */}
              <div className="flex items-center gap-4 mt-16">
                <span className="text-sm text-muted-foreground tabular-nums">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
              </div>

              <div className="flex gap-2 mt-4">
                {items.map((item, idx) => (
                  <button
                    key={item.title}
                    onClick={() => setActiveIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? 'bg-brand w-8'
                        : 'bg-border hover:bg-muted-foreground w-1.5'
                    }`}
                    aria-label={`Go to service ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right side - Card stack with elastic animation */}
            <div className="relative h-[500px] lg:h-[600px] hidden md:block">
              <CardStack 
                items={items} 
                activeIndex={activeIndex} 
                isClient={isClient} 
              />
            </div>

            {/* Mobile cards - simple horizontal scroll */}
            <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
              <div className="flex gap-4" style={{ width: `${items.length * 280}px` }}>
                {items.map((service, idx) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`shrink-0 w-64 p-5 rounded-2xl border transition-all duration-300 cursor-pointer text-left ${
                      idx === activeIndex
                        ? 'border-brand bg-brand/5'
                        : 'border-border bg-card'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-bold text-brand">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-xs text-muted-foreground">Service</span>
                    </div>
                    <h4 className="text-lg font-bold text-card-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {service.body[0]}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollCardServices;
