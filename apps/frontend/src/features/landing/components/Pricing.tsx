"use client";

import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section className="relative z-10 -mt-32 pb-20 text-white">
      {/* Gradient Top - Smooth transition from Hero */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-black pointer-events-none" />
      
      {/* Solid Bottom Background */}
      <div className="absolute top-32 left-0 right-0 bottom-0 bg-black pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-20 px-4 sm:px-6 lg:px-8 pt-12">
        
        {/* Section 1: Website Packages */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mt-24">
              Paket Pembuatan Website Company Profile
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Dari yang simple hingga scale-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <PricingCard
              title="Paket Basic"
              subtitle="Astro – Static"
              description="Cocok untuk klien yang hanya butuh website cepat & informatif."
              price="Rp 1.200.000 – 2.500.000"
              features={[
                "3–5 halaman",
                "SEO dasar",
                "Mobile responsive",
                "Loading < 1 detik",
                "2x revisi kecil",
                "1x revisi besar",
              ]}
              addOns={[
                "Halaman tambahan: Rp 150k - 300k",
                "Animasi icon (Lottie): +150k/animasi",
                "Parallax ringan: +200k - 400k",
              ]}
            />

            {/* Professional Package */}
            <PricingCard
              title="Paket Profesional"
              subtitle="Astro – Semi Dynamic + Animations"
              description="Situs cepat tapi lebih modern & interaktif."
              price="Rp 3.000.000 – 4.500.000"
              isPopular
              features={[
                "5–8 halaman",
                "Animasi halus (Framer Motion / parallax)",
                "Slider, gallery interaktif",
                "SEO advanced",
                "Performance 95–100",
                "4x revisi kecil",
                "2x revisi besar",
              ]}
              addOns={[
                "Three.js hero: 700k - 1.5m",
                "Parallax complex: +300k - 600k",
                "Halaman tambahan: Rp 200k - 300k",
              ]}
            />

            {/* Premium Package */}
            <PricingCard
              title="Paket Premium"
              subtitle="Next.js – Scale Ready"
              description="Untuk bisnis yang ingin website sekaligus fondasi aplikasi."
              price="Rp 6.000.000 – 12.000.000"
              features={[
                "SSR/SSG",
                "API routes",
                "Integrasi database (opsional)",
                "Animasi Framer Motion",
                "5–10 halaman",
                "6x revisi kecil",
                "3x revisi besar",
              ]}
              addOns={[
                "Dashboard mini: 2m - 5m",
                "Integrasi database: 1m - 3m",
                "Three.js: +1m+",
                "Halaman SSR tambahan: 300k - 600k",
              ]}
            />
          </div>
        </div>

        {/* Section 2: Revision System */}
        <div className="bg-zinc-900/50 rounded-2xl p-8 md:p-12 border border-zinc-800">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Sistem Revisi — Berlaku Untuk Semua Paket</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-blue-400">Revisi Kecil (UI minor)</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Ganti warna</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Ganti teks</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Perbaikan layout kecil</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-blue-400 shrink-0" /> Ubah icon / gambar</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic">(Estimasi pengerjaan: ≤ 15 menit per item)</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4 text-purple-400">Revisi Besar (Perubahan struktural)</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Ubah layout keseluruhan</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Ubah desain hero section</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Tambah fitur kecil (tanpa coding backend)</li>
                <li className="flex items-start gap-2"><Check className="w-5 h-5 text-purple-400 shrink-0" /> Redesign halaman</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-zinc-800 text-center text-gray-400">
            <p>Revisi tambahan di luar paket:</p>
            <p>Revisi kecil tambahan → Rp 30.000 – 50.000 | Revisi besar tambahan → Rp 150.000 – 300.000</p>
          </div>
        </div>

        {/* Section 3: Add-ons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Blog Setup */}
          <div className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">Blog Setup</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Astro (Static Blog)</h4>
                <p className="text-xl font-bold text-blue-400">Rp 300.000 – 800.000</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Next.js Blog (SSG/SSR)</h4>
                <p className="text-xl font-bold text-blue-400">Rp 500.000 – 1.500.000</p>
              </div>
              <div className="pt-4 border-t border-zinc-800">
                <p className="font-semibold mb-2">Fitur add-ons blog:</p>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Pagination → +150.000</li>
                  <li>• Kategori/tag → +200.000</li>
                  <li>• Panel admin sederhana (Next.js) → +800.000 – 2.000.000</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Store Add-ons */}
          <div className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">Tambahan Halaman Toko</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg">Astro — Katalog Produk</h4>
                <p className="text-sm text-gray-500 mb-1">(tanpa checkout)</p>
                <p className="text-xl font-bold text-blue-400">Rp 800.000 – 1.500.000</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Next.js — Mini Ecommerce</h4>
                <p className="text-sm text-gray-500 mb-1">Cart + checkout, CMS / database</p>
                <p className="text-xl font-bold text-blue-400">Rp 3.000.000 – 8.000.000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: ERP & CRM */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Paket ERP & CRM — Full Web App</h2>
            <p className="text-gray-400 mt-2">Solusi untuk bisnis skala menengah ke atas.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* CRM */}
            <div className="bg-linear-to-br from-zinc-900 to-black p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">CRM (Customer Relationship Management)</h3>
              <p className="text-gray-400 mb-6">Kelola customer, sales, dan follow up.</p>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-semibold text-white">Paket CRM Basic</h4>
                    <span className="text-blue-400 font-bold">Rp 10m – 25m</span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1 mb-2">
                    <li>• Manajemen customer & Pipeline leads</li>
                    <li>• Activity log & Sales dashboard</li>
                    <li>• Export Excel</li>
                    <li>• 8x revisi kecil, 4x revisi besar</li>
                  </ul>
                </div>
                
                <div className="pt-6 border-t border-zinc-800">
                  <div className="flex justify-between items-baseline mb-2">
                    <h4 className="text-lg font-semibold text-white">Paket CRM Pro</h4>
                    <span className="text-purple-400 font-bold">Rp 25m – 60m</span>
                  </div>
                  <ul className="text-sm text-gray-400 space-y-1">
                    <li>• Team management, Permissions & roles</li>
                    <li>• Email automation (SMTP) & API WhatsApp</li>
                    <li>• Report builder</li>
                    <li>• Integrasi Next.js + Supabase/Prisma</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* ERP */}
            <div className="bg-linear-to-br from-zinc-900 to-black p-8 rounded-2xl border border-zinc-800">
              <h3 className="text-2xl font-bold mb-2">ERP (Enterprise Resource Planning)</h3>
              <p className="text-gray-400 mb-6">Sistem terintegrasi kompleks modul per modul.</p>
              
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800">
                    <span className="block font-semibold text-gray-300">Inventory</span>
                    <span className="text-blue-400">Rp 8m – 15m</span>
                  </div>
                  <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800">
                    <span className="block font-semibold text-gray-300">Purchasing</span>
                    <span className="text-blue-400">Rp 6m – 12m</span>
                  </div>
                  <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800">
                    <span className="block font-semibold text-gray-300">Invoicing & Finance</span>
                    <span className="text-blue-400">Rp 10m – 20m</span>
                  </div>
                  <div className="bg-zinc-900/50 p-3 rounded border border-zinc-800">
                    <span className="block font-semibold text-gray-300">HR & Absensi</span>
                    <span className="text-blue-400">Rp 12m – 25m</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <h4 className="text-lg font-bold text-white mb-2">ERP Full Package (6–12 modul)</h4>
                  <p className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-500">
                    Rp 80.000.000 – 250.000.000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5: Maintenance & Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">Maintenance & Support</h3>
            <ul className="space-y-4">
              <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span>Basic maintenance</span>
                <span className="font-bold text-blue-400">Rp 150k/bln</span>
              </li>
              <li className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span>Maintenance + upload konten</span>
                <span className="font-bold text-blue-400">Rp 250k – 400k/bln</span>
              </li>
              <li className="flex justify-between items-center">
                <span>SLA 24 jam support</span>
                <span className="font-bold text-blue-400">Rp 500k – 1m/bln</span>
              </li>
            </ul>
          </div>

          <div className="bg-zinc-900/30 p-8 rounded-xl border border-zinc-800">
            <h3 className="text-2xl font-bold mb-6">Rekomendasi Paket</h3>
            <div className="space-y-4">
              <RecommendationItem 
                title="Starter Package" 
                desc="Astro Basic - Company Profile Biasa" 
                price="Rp 2jt-an" 
              />
              <RecommendationItem 
                title="Business Package" 
                desc="Astro Profesional - Animasi & Visual Premium" 
                price="Rp 3.5jt-an" 
                highlight
              />
              <RecommendationItem 
                title="Premium Package" 
                desc="Next.js Scale Ready - Perusahaan Besar" 
                price="Rp 7–12jt" 
              />
            </div>
          </div>
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
  addOns,
  isPopular 
}: { 
  title: string;
  subtitle: string;
  description: string;
  price: string;
  features: string[];
  addOns: string[];
  isPopular?: boolean;
}) {
  return (
    <div className={cn(
      "relative flex flex-col p-8 rounded-2xl border transition-all duration-300 hover:border-blue-500/50",
      isPopular 
        ? "bg-zinc-900 border-blue-500 shadow-lg shadow-blue-500/10 scale-105 z-10" 
        : "bg-black border-zinc-800"
    )}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-blue-400 font-medium mt-1">{subtitle}</p>
        <p className="text-gray-400 text-sm mt-3 h-10">{description}</p>
      </div>

      <div className="mb-8">
        <p className="text-2xl font-bold text-white">{price}</p>
      </div>

      <div className="flex-1 space-y-6">
        <div>
          <p className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Termasuk</p>
          <ul className="space-y-3">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {addOns.length > 0 && (
          <div className="pt-6 border-t border-zinc-800">
            <p className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wider">Add-ons</p>
            <ul className="space-y-2">
              {addOns.map((addon, i) => (
                <li key={i} className="flex items-start gap-3 text-xs text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 shrink-0 mt-1.5" />
                  <span>{addon}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-8">
        <Button className={cn(
          "w-full font-bold",
          isPopular ? "bg-blue-600 hover:bg-blue-700" : "bg-white text-black hover:bg-gray-200"
        )}>
          Pilih Paket
        </Button>
      </div>
    </div>
  );
}

function RecommendationItem({ title, desc, price, highlight }: { title: string, desc: string, price: string, highlight?: boolean }) {
  return (
    <div className={cn(
      "flex justify-between items-center p-4 rounded-lg border",
      highlight ? "bg-blue-900/20 border-blue-500/30" : "bg-zinc-900 border-zinc-800"
    )}>
      <div>
        <h4 className={cn("font-bold", highlight ? "text-blue-400" : "text-white")}>{title}</h4>
        <p className="text-xs text-gray-400">{desc}</p>
      </div>
      <span className="font-bold text-white">{price}</span>
    </div>
  );
}
