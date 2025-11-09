"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navigationItems = [
  { label: "Services", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a route (starts with /), handle navigation
    if (href.startsWith("/")) {
      // If already on the same page, just scroll to top
      if (pathname === href) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      // Otherwise, let Next.js Link handle navigation (don't prevent default)
      return;
    }
    
    // Smooth scroll to section (for hash links)
    if (href.startsWith("#")) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        // Account for header height
        const headerHeight = 80; // Approximate header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        // If section doesn't exist yet, scroll to top
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-black/80 backdrop-blur-sm"
          : "bg-black/40 backdrop-blur-sm"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-bold font-display tracking-tight text-white hover:opacity-80 transition-opacity"
            onClick={(e) => {
              // If already on homepage, just scroll to top
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
              // Otherwise, let Link navigate to homepage
            }}
          >
            GiLabs
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith("#") && pathname === "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "text-sm lg:text-base font-normal transition-colors relative group",
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-white transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
              <span
                className={cn(
                  "block h-px bg-white transition-all duration-300",
                  isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                )}
              />
              <span
                className={cn(
                  "block h-px bg-white transition-all duration-300",
                  isMobileMenuOpen ? "opacity-0" : ""
                )}
              />
              <span
                className={cn(
                  "block h-px bg-white transition-all duration-300",
                  isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="py-4 space-y-4 border-t border-white/10 mt-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href.startsWith("#") && pathname === "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={cn(
                    "block text-base font-normal transition-colors py-2",
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}

