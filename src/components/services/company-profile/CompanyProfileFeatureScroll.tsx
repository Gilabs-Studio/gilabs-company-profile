import React, { useState, useEffect, useRef } from "react";

export interface FeatureItem {
  number: string;
  title: string;
  description: string;
  image: string;
}

interface CompanyProfileFeatureScrollProps {
  features: FeatureItem[];
}

export default function CompanyProfileFeatureScroll({
  features,
}: CompanyProfileFeatureScrollProps) {
  // State aktif index untuk sinkronisasi kiri (teks) dan kanan (gambar)
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // Array refs untuk memantau scroll trigger tiap item di kolom kiri
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // =========================================================================
  // TUNING SENSITIVITAS SCROLL TRIGGER:
  // -------------------------------------------------------------------------
  // 1. rootMargin:
  //    Menentukan area deteksi vertikal pada viewport. Nilai "-35% 0px -35% 0px"
  //    artinya hanya 30% area tengah layar (antara 35% dari atas dan 35% dari bawah)
  //    yang menjadi zona aktif.
  //    - Jika ingin gambar berganti LEBIH CEPAT saat discroll, kecilkan persentase (misal: "-20% 0px -20% 0px").
  //    - Jika ingin gambar HANYA berganti tepat di garis tengah, besarkan persentase (misal: "-45% 0px -45% 0px").
  //
  // 2. threshold:
  //    Persentase area elemen yang harus masuk ke dalam zona aktif (0.0 sampai 1.0).
  //    Nilai 0.3 memberikan keseimbangan terbaik antara responsivitas dan stabilitas.
  // =========================================================================
  useEffect(() => {
    // Hanya aktifkan Intersection Observer pada layar desktop (>= 768px)
    if (typeof window === "undefined" || window.innerWidth < 768) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null, // menggunakan viewport browser
      rootMargin: "-35% 0px -35% 0px", // Zona deteksi: 30% area tengah layar
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const indexAttr = entry.target.getAttribute("data-index");
          if (indexAttr !== null) {
            const index = parseInt(indexAttr, 10);
            if (!isNaN(index)) {
              setActiveIndex(index);
            }
          }
        }
      });
    }, observerOptions);

    // Amati setiap elemen item fitur di kolom kiri
    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [features.length]);

  // Handler interaksi klik pada item fitur untuk scroll halus ke posisi trigger
  const handleItemClick = (index: number) => {
    setActiveIndex(index);
    const targetElement = itemRefs.current[index];
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* ===================================================================
          DESKTOP VIEW (>= 768px) - Super Minimalist Layout
          - Kiri (40%): Tipografi murni (Nomor, Judul, Deskripsi) tanpa badge/garis
          - Kanan (60%): Sticky container murni menampilkan gambar mockup
          =================================================================== */}
      <div className="hidden md:flex flex-row items-start gap-12 lg:gap-16 relative">
        {/* Kolom Kiri: 40% Lebar */}
        <div className="w-[42%] lg:w-[40%] flex flex-col relative py-4">
          {features.map((feature, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={`desktop-feature-${idx}`}
                ref={(el) => {
                  itemRefs.current[idx] = el;
                }}
                data-index={idx}
                onClick={() => handleItemClick(idx)}
                className={`min-h-[46vh] flex flex-col justify-center cursor-pointer transition-all duration-300 py-10 ${
                  isActive
                    ? "opacity-100"
                    : "opacity-35 hover:opacity-70"
                }`}
              >
                {/* Nomor Fitur: Tipografi Monospace Minimalis */}
                <span
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 mb-2.5 ${
                    isActive ? "text-brand font-medium" : "text-muted-foreground/60 font-normal"
                  }`}
                >
                  {feature.number}
                </span>

                {/* Judul Fitur */}
                <h3
                  className={`text-xl lg:text-2xl tracking-tight transition-all duration-300 mb-3 ${
                    isActive
                      ? "font-semibold text-foreground"
                      : "font-normal text-muted-foreground/80"
                  }`}
                >
                  {feature.title}
                </h3>

                {/* Deskripsi Fitur */}
                <p
                  className={`text-sm lg:text-base leading-relaxed transition-colors duration-300 font-light ${
                    isActive
                      ? "text-muted-foreground font-normal"
                      : "text-muted-foreground/60"
                  }`}
                >
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Kolom Kanan: 60% Lebar - Sticky Viewport Container Murni */}
        <div className="w-[58%] lg:w-[60%] sticky top-[20vh] self-start py-4">
          <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden border border-border/40 bg-card shadow-2xl shadow-foreground/5">
            {/* Stack 8 Gambar dengan transisi Crossfade Halus (350ms opacity) */}
            {features.map((feature, idx) => {
              const isCurrent = activeIndex === idx;
              return (
                <img
                  key={`sticky-img-${idx}`}
                  src={feature.image}
                  alt={feature.title}
                  loading={idx === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-350 ease-in-out ${
                    isCurrent
                      ? "opacity-100 z-10 pointer-events-auto"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* ===================================================================
          MOBILE VIEW (< 768px) - Super Minimalist Stack
          Menghilangkan card box, border tebal, badge & icon.
          Menampilkan alur bersih: Nomor -> Judul -> Deskripsi -> Mockup Gambar.
          =================================================================== */}
      <div className="flex md:hidden flex-col gap-14">
        {features.map((feature, idx) => (
          <div key={`mobile-feature-${idx}`} className="flex flex-col">
            {/* Nomor */}
            <span className="font-mono text-xs font-semibold text-brand tracking-widest uppercase mb-1.5">
              {feature.number}
            </span>

            {/* Judul & Deskripsi */}
            <h3 className="text-lg font-semibold text-foreground mb-2 tracking-tight">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed font-light mb-4">
              {feature.description}
            </p>

            {/* Mockup Gambar */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-border/40 shadow-sm bg-muted/20">
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
