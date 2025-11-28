"use client";

import { useEffect, useRef, useState } from "react";

interface LottieIconProps {
  src: string;
  className?: string;
}

declare global {
  interface Window {
    lottie: any;
  }
}

export function LottieIcon({ src, className = "" }: LottieIconProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<any>(null);
  const [lottieLoaded, setLottieLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Check if lottie is already loaded
    if (window.lottie) {
      setLottieLoaded(true);
      return;
    }

    // Load lottie-web from CDN only once
    const existingScript = document.querySelector('script[src*="lottie"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => setLottieLoaded(true));
      if ((window as any).lottie) {
        setLottieLoaded(true);
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.12.2/lottie.min.js";
    script.async = true;
    script.onload = () => {
      setLottieLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!lottieLoaded || !containerRef.current || !window.lottie) return;

    // Destroy existing animation if any
    if (animationRef.current) {
      animationRef.current.destroy();
    }

    animationRef.current = window.lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: src,
    });

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
        animationRef.current = null;
      }
    };
  }, [src, lottieLoaded]);

  return <div ref={containerRef} className={className} />;
}

