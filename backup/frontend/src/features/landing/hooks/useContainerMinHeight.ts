"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { globalMinHeightStore } from "@/components/ui/morphing-text";

interface UseContainerMinHeightProps {
  textId: string;
  defaultMinHeightClass: string; // Tailwind classes e.g., "min-h-[3rem] sm:min-h-[4rem]"
  isActive: boolean;
}

/**
 * Hook to manage container min-height during morphing transitions.
 * Uses previous section's min-height (from global store) until morphing completes, then switches to current section's min-height.
 */
export function useContainerMinHeight({
  textId,
  defaultMinHeightClass,
  isActive,
}: UseContainerMinHeightProps) {
  const [minHeightStyle, setMinHeightStyle] = useState<CSSProperties | undefined>(undefined);
  const [minHeightClass, setMinHeightClass] = useState<string>(defaultMinHeightClass);

  useEffect(() => {
    if (isActive) {
      // Check if there's a previous min-height stored (in pixels from previous section)
      const previousMinHeight = globalMinHeightStore.get(textId);
      
      if (previousMinHeight) {
        // Use previous min-height as inline style to prevent layout shift
        setMinHeightStyle({ minHeight: previousMinHeight });
        setMinHeightClass(""); // Clear Tailwind class when using inline style
      } else {
        // No previous min-height, use default Tailwind classes
        setMinHeightStyle(undefined);
        setMinHeightClass(defaultMinHeightClass);
      }
    }
  }, [isActive, textId, defaultMinHeightClass]);

  // Callback to be passed to MorphingText's onMorphingComplete
  const handleMorphingComplete = () => {
    // Switch to current section's min-height after morphing completes
    setMinHeightStyle(undefined);
    setMinHeightClass(defaultMinHeightClass);
  };

  return {
    minHeightStyle,
    minHeightClass,
    handleMorphingComplete,
  };
}

