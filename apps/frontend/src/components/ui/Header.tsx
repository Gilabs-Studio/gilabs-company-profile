"use client";

import { useState, useEffect, memo } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const navigationItems = [
  { label: "Services", href: "/service" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const Header = memo(function Header() {
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        "isolate", // Create new stacking context
        isScrolled
          ? "bg-black/80 backdrop-blur-sm"
          : "bg-black/40 backdrop-blur-sm"
      )}
      style={{
        height: "var(--header-height, 4rem)",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black z-[99]"
            style={{
              top: "var(--header-height, 4rem)",
            }}
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed left-0 right-0 bg-black z-[100] transition-all duration-300",
            isMobileMenuOpen 
              ? "opacity-100 visible" 
              : "opacity-0 invisible"
          )}
          style={{
            top: "var(--header-height, 4rem)",
            maxHeight: isMobileMenuOpen ? "calc(100vh - var(--header-height, 4rem))" : "0",
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="space-y-4">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || (item.href.startsWith("#") && pathname === "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={cn(
                      "block text-lg font-normal transition-colors py-3",
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
        </div>
      </nav>
    </header>
  );
});

