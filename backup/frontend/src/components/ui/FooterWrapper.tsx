"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./Footer";

export function FooterWrapper() {
  const pathname = usePathname();
  
  // Don't show footer on contact page
  if (pathname === "/contact") {
    return null;
  }
  
  // Don't show footer on landing page (Hero component uses fixed positioning and would overlap)
  if (pathname === "/") {
    return null;
  }
  
  return <Footer />;
}

