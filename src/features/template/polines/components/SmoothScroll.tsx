'use client';

import React, { useEffect, useRef } from 'react';
import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

export default function SmoothScroll() {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    if (lenisRef.current?.lenis) {
      (window as any).lenis = lenisRef.current.lenis;
    }
  }, []);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.09,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1.0,
        touchMultiplier: 1.2,
      }}
    >
      <div style={{ display: 'none' }} aria-hidden="true" />
    </ReactLenis>
  );
}
