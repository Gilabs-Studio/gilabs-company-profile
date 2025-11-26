"use client";

import { Check, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MagicCard } from "@/components/ui/magic-card";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function Pricing() {
  return (
    <section className="relative z-10 -mt-32 pb-20 text-white">
      {/* Gradient Top - Smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-black pointer-events-none" />
      
      {/* Solid Bottom Background */}
      <div className="absolute top-32 left-0 right-0 bottom-0 bg-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-32">
        
        {/* Section 1: Website Packages */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight font-display mt-24">
              Website Packages
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the perfect foundation for your digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Basic Package */}
            <PricingCard
              title="Basic"
              subtitle="Astro – Static"
              price="Rp 1.2jt – 2.5jt"
              description="Perfect for fast, informative company profiles."
              features={[
                "3–5 Pages",
                "Basic SEO",
                "Mobile Responsive",
                "Load Time < 1s",
                "2x Minor Revisions",
                "1x Major Revision",
              ]}
            />

            {/* Professional Package - Highlighted */}
            <PricingCard
              title="Professional"
              subtitle="Astro – Semi Dynamic"
              price="Rp 3jt – 4.5jt"
              description="Modern, interactive, and animated experiences."
              isPopular
              features={[
                "5–8 Pages",
                "Smooth Animations (Framer)",
                "Interactive Gallery/Slider",
                "Advanced SEO",
                "Performance 95-100",
                "4x Minor Revisions",
                "2x Major Revisions",
              ]}
            />

            {/* Premium Package */}
            <PricingCard
              title="Scale Ready"
              subtitle="Next.js – Full Stack"
              price="Rp 6jt – 12jt"
              description="Scalable foundation for web applications."
              features={[
                "5–10 Pages",
                "SSR / SSG Rendering",
                "API Routes Ready",
                "Database Integration (Opt)",
                "Complex Animations",
                "6x Minor Revisions",
                "3x Major Revisions",
              ]}
            />
          </div>
        </div>

        {/* Section 2: Revision System & Add-ons */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revision System */}
          <MagicCard 
            className="p-8 md:p-10 border-zinc-800 bg-zinc-900/30"
            gradientColor="#FF5500"
            gradientOpacity={0.1}
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Revision System</h3>
            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Minor Revisions
                </h4>
                <p className="text-sm text-gray-400 mb-3">UI tweaks, text changes, color adjustments (≤ 15 mins/item)</p>
                <div className="text-xs text-zinc-500 bg-zinc-900/50 p-3 rounded border border-zinc-800">
                  Extra: Rp 30k - 50k / item
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                  <Info className="w-5 h-5" /> Major Revisions
                </h4>
                <p className="text-sm text-gray-400 mb-3">Layout changes, structural updates, new features</p>
                <div className="text-xs text-zinc-500 bg-zinc-900/50 p-3 rounded border border-zinc-800">
                  Extra: Rp 150k - 300k / request
                </div>
              </div>
            </div>
          </MagicCard>

          {/* Add-ons */}
          <MagicCard 
            className="p-8 md:p-10 border-zinc-800 bg-zinc-900/30"
            gradientColor="#FF5500"
            gradientOpacity={0.1}
          >
            <h3 className="text-2xl font-bold mb-6 font-display">Power-Ups & Add-ons</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AddOnItem title="Three.js Hero" price="700k - 1.5m" />
              <AddOnItem title="Lottie Animations" price="150k / item" />
              <AddOnItem title="Extra Page" price="150k - 300k" />
              <AddOnItem title="Blog (Astro)" price="300k - 800k" />
              <AddOnItem title="Blog (Next.js)" price="500k - 1.5m" />
              <AddOnItem title="Mini Store" price="3m - 8m" />
            </div>
          </MagicCard>
        </div>

        {/* Section 3: Enterprise Solutions */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Enterprise Solutions</h2>
            <p className="text-gray-400 mt-2">Full-scale web applications for business operations.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MagicCard 
              className="p-8 border-zinc-800 bg-zinc-900/20"
              gradientColor="#FF5500"
              gradientOpacity={0.15}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">CRM Systems</h3>
                <p className="text-gray-400 mb-6 text-sm">Customer Relationship Management</p>
                
                <div className="space-y-6 flex-1">
                  <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/50">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-white">Basic CRM</span>
                      <span className="text-primary font-bold">Rp 10m – 25m</span>
                    </div>
                    <p className="text-xs text-gray-500">Leads, Pipeline, Activity Log, Dashboard</p>
                  </div>
                  
                  <div className="bg-zinc-900/50 p-4 rounded-lg border border-zinc-800/50">
                    <div className="flex justify-between items-baseline mb-1">
                      <span className="font-bold text-white">Pro CRM</span>
                      <span className="text-primary font-bold">Rp 25m – 60m</span>
                    </div>
                    <p className="text-xs text-gray-500">Team Roles, Automation, Reports, API Integrations</p>
                  </div>
                </div>
              </div>
            </MagicCard>

            <MagicCard 
              className="p-8 border-zinc-800 bg-zinc-900/20"
              gradientColor="#FF5500"
              gradientOpacity={0.15}
            >
              <div className="h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">ERP Modules</h3>
                <p className="text-gray-400 mb-6 text-sm">Enterprise Resource Planning</p>
                
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-xs text-gray-400">Inventory</div>
                    <div className="text-sm font-bold text-primary">8m - 15m</div>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-xs text-gray-400">Finance</div>
                    <div className="text-sm font-bold text-primary">10m - 20m</div>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-xs text-gray-400">HR & Absensi</div>
                    <div className="text-sm font-bold text-primary">12m - 25m</div>
                  </div>
                  <div className="p-3 bg-zinc-900/50 rounded border border-zinc-800/50">
                    <div className="text-xs text-gray-400">Production</div>
                    <div className="text-sm font-bold text-primary">15m - 30m</div>
                  </div>
                </div>

                <div className="mt-auto pt-4 border-t border-zinc-800">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">Full Package</span>
                    <span className="text-xl font-bold text-primary">Rp 80m+</span>
                  </div>
                </div>
              </div>
            </MagicCard>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pt-10 pb-20">
          <p className="text-gray-400 mb-6">Need a custom quote or have questions?</p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-black hover:bg-gray-200 font-bold px-8 py-6 text-lg rounded-full"
          >
            <Link href="/contact">
              Consult Now
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

function PricingCard({ 
  title, 
  subtitle, 
  description, 
  price, 
  features, 
  isPopular 
}: { 
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}) {
  return (
    <MagicCard 
      className={cn(
        "flex flex-col p-8 border-zinc-800 transition-all duration-300",
        isPopular ? "bg-zinc-900/60 border-primary/50 shadow-lg shadow-primary/10" : "bg-black/40"
      )}
      gradientColor="#FF5500"
      gradientOpacity={isPopular ? 0.2 : 0.1}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
          POPULAR
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-white font-display">{title}</h3>
        <p className="text-sm text-primary font-medium mt-1">{subtitle}</p>
        <p className="text-gray-400 text-sm mt-3 h-10 leading-relaxed">{description}</p>
      </div>

      <div className="mb-8 pb-8 border-b border-zinc-800">
        <p className="text-3xl font-bold text-white tracking-tight">{price}</p>
      </div>

      <div className="flex-1 space-y-5">
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Button className={cn(
          "w-full font-bold py-6",
          isPopular 
            ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" 
            : "bg-white text-black hover:bg-gray-200"
        )}>
          Select Plan
        </Button>
      </div>
    </MagicCard>
  );
}

function AddOnItem({ title, price }: { title: string, price: string }) {
  return (
    <div className="flex justify-between items-center p-3 rounded bg-zinc-900/50 border border-zinc-800/50">
      <span className="text-sm font-medium text-gray-300">{title}</span>
      <span className="text-sm font-bold text-primary">{price}</span>
    </div>
  );
}
