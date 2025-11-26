"use client";

import { PageTransition } from "@/components/ui/page-transition";
import { usePathname } from "next/navigation";

export default function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();
  
  // Homepage menggunakan fade (tidak blur) karena morphing text menggunakan SVG filter
  // Halaman lain bisa menggunakan blur-fade atau transisi lainnya
  const transitionType = pathname === "/" ? "fade" : "blur-fade";
  
  return (
    <PageTransition type={transitionType} duration={0.6}>
      {children}
    </PageTransition>
  );
}

