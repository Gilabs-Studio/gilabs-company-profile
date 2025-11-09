"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const morphTime = 1.5;

// Global store to track previous text across all morphing text instances
export const globalTextStore = new Map<string, string>();

// Global store to track min-height per textId for container layout
export const globalMinHeightStore = new Map<string, string>();

interface UseControlledMorphingTextProps {
  text: string;
  isActive: boolean;
  textId: string; // Unique ID for this text instance
  onSpacerUpdate?: (text: string) => void;
  onMorphingComplete?: () => void;
}

const useControlledMorphingText = ({
  text,
  isActive,
  textId,
  onSpacerUpdate,
  onMorphingComplete,
}: UseControlledMorphingTextProps) => {
  const morphRef = useRef(0);
  const timeRef = useRef(new Date());
  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const wasActiveRef = useRef(false);
  const isMorphingRef = useRef(false);
  const animationFrameIdRef = useRef<number | null>(null);
  const previousTextRef = useRef<string>("");
  const spacerTextRef = useRef<string>(text);
  const layoutUpdatedRef = useRef(false);
  const onSpacerUpdateRef = useRef(onSpacerUpdate);
  const onMorphingCompleteRef = useRef(onMorphingComplete);
  
  // Keep callback refs up to date
  useEffect(() => {
    onSpacerUpdateRef.current = onSpacerUpdate;
  }, [onSpacerUpdate]);
  
  useEffect(() => {
    onMorphingCompleteRef.current = onMorphingComplete;
  }, [onMorphingComplete]);

  // Set spacer text BEFORE paint to prevent layout shift
  // This must run synchronously before browser paint
  useLayoutEffect(() => {
    if (isActive) {
      // Get previous text from global store
      const storedText = globalTextStore.get(textId);
      if (storedText && storedText !== text) {
        // We have a previous text - keep using it to maintain layout
        previousTextRef.current = storedText;
        spacerTextRef.current = storedText;
        onSpacerUpdateRef.current?.(storedText);
        layoutUpdatedRef.current = false; // Reset flag so animation loop can update later
      } else if (!storedText) {
        // First time showing this textId - use current text
      spacerTextRef.current = text;
        onSpacerUpdateRef.current?.(text);
        layoutUpdatedRef.current = true;
      }
      // If storedText === text, don't change anything (same text, no morphing needed)
    }
  }, [isActive, text, textId]);

  // Trigger morph when section becomes active
  useEffect(() => {
    if (isActive) {
      // Get previous text from global store BEFORE we update it
      const storedText = globalTextStore.get(textId);
      if (storedText && storedText !== text) {
        previousTextRef.current = storedText;
      }
      
      const shouldMorph = !wasActiveRef.current || (previousTextRef.current && previousTextRef.current !== text);
      
      if (shouldMorph) {
        // Section just became active or text changed, trigger morph
        morphRef.current = 0;
        isMorphingRef.current = true;
        timeRef.current = new Date();
        layoutUpdatedRef.current = false; // Reset layout update flag
        
        // Set initial state
        const [current1, current2] = [text1Ref.current, text2Ref.current];
        const container = containerRef.current;
        if (current1 && current2 && container) {
          // If we have previous text (from global store), morph from previous to new
          if (previousTextRef.current && previousTextRef.current !== text) {
            current1.textContent = previousTextRef.current;
            current2.textContent = text;
            
            // Keep previous layout - spacer text already set above
            // minHeight and spacer will be updated when morphing in starts (in the animation loop)
            
            // Start morphing from previous text (morph out phase)
            current1.style.opacity = "100%";
            current1.style.filter = "none";
            current1.style.transform = "translateX(0)";
            current2.style.opacity = "0%";
            current2.style.filter = "blur(100px)";
            current2.style.transform = "translateX(0)";
          } else {
            // First time showing, morph from empty
            // Spacer text already set in useLayoutEffect
            current1.textContent = "";
            current2.textContent = text;
            current1.style.opacity = "0%";
            current1.style.filter = "blur(100px)";
            current1.style.transform = "translateX(0)";
            current2.style.opacity = "0%";
            current2.style.filter = "blur(100px)";
            current2.style.transform = "translateX(0)";
          }
        }
      }
    }
    wasActiveRef.current = isActive;

    // When section becomes inactive, reset layout update flag
    if (!isActive && wasActiveRef.current) {
      // Section just became inactive - keep text visible briefly for smooth transition
      isMorphingRef.current = false;
      layoutUpdatedRef.current = false; // Reset for next activation
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
      // Don't immediately set opacity to 0 - let the section's fade handle it
    }
  }, [isActive, text, textId]);

  useEffect(() => {
    // Only start animation if we should be morphing
    if (!isMorphingRef.current || !isActive) {
      return;
    }

    // Cancel any existing animation
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }

    const animate = () => {
      if (!isMorphingRef.current || !isActive) {
        animationFrameIdRef.current = null;
        return;
      }

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      morphRef.current += dt;
      const fraction = Math.min(morphRef.current / morphTime, 1);

      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) {
        animationFrameIdRef.current = null;
        return;
      }

      // Smooth easing function
      const easeInOut = (t: number) => {
        return t < 0.5
          ? 2 * t * t
          : 1 - Math.pow(-2 * t + 2, 2) / 2;
      };

      const easedFraction = easeInOut(fraction);
      const invertedFraction = 1 - easedFraction;

      // Calculate opacity values
      const text2Opacity = Math.pow(easedFraction, 0.4);
      const text1Opacity = Math.pow(invertedFraction, 0.4);

      // Update layout only when morphing in starts (text2 becomes visible)
      // This ensures layout stays from previous section during morph out
      if (!layoutUpdatedRef.current && text2Opacity > 0.01) {
        const container = containerRef.current;
        if (container) {
          if (previousTextRef.current && previousTextRef.current !== text) {
            // Measure both texts to get max dimensions for preventing layout shift
            const computedStyle = window.getComputedStyle(container);
            const tempContainer = document.createElement("div");
            tempContainer.style.visibility = "hidden";
            tempContainer.style.position = "absolute";
            tempContainer.style.width = computedStyle.width || "100%";
            tempContainer.style.maxWidth = computedStyle.maxWidth || "none";
            tempContainer.style.fontSize = computedStyle.fontSize;
            tempContainer.style.fontFamily = computedStyle.fontFamily;
            tempContainer.style.fontWeight = computedStyle.fontWeight;
            tempContainer.style.lineHeight = computedStyle.lineHeight;
            tempContainer.style.letterSpacing = computedStyle.letterSpacing;
            document.body.appendChild(tempContainer);
            
            const temp1 = document.createElement("span");
            temp1.textContent = previousTextRef.current;
            temp1.className = current1.className;
            tempContainer.appendChild(temp1);
            const height1 = temp1.offsetHeight;
            tempContainer.removeChild(temp1);
            
            const temp2 = document.createElement("span");
            temp2.textContent = text;
            temp2.className = current2.className;
            tempContainer.appendChild(temp2);
            const height2 = temp2.offsetHeight;
            tempContainer.removeChild(temp2);
            
            document.body.removeChild(tempContainer);
            
            // Set container to max height to prevent vertical layout shift
            const maxHeight = Math.max(height1, height2);
            if (maxHeight > 0) {
              container.style.minHeight = `${maxHeight}px`;
            }
            
            // Update spacer to use the longer text to prevent layout shift
            const longerText = height1 > height2 ? previousTextRef.current : text;
            spacerTextRef.current = longerText;
            onSpacerUpdateRef.current?.(longerText);
            
            layoutUpdatedRef.current = true; // Mark layout as updated
          } else if (!previousTextRef.current) {
            // First time showing - update layout immediately since there's no previous layout
            spacerTextRef.current = text;
            onSpacerUpdateRef.current?.(text);
            layoutUpdatedRef.current = true;
          }
        }
      }

      // Morph from text1 to text2 with smooth transitions
      current2.style.filter = `blur(${Math.min(8 / easedFraction - 8, 100)}px)`;
      current2.style.opacity = `${text2Opacity * 100}%`;
      current2.textContent = text;
      current2.style.transform = `translateX(0)`;

      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100
      )}px)`;
      current1.style.opacity = `${text1Opacity * 100}%`;
      current1.style.transform = `translateX(0)`;

      if (fraction < 1) {
        animationFrameIdRef.current = requestAnimationFrame(animate);
      } else {
        // Morphing complete, stop animation
        isMorphingRef.current = false;
        animationFrameIdRef.current = null;
        current2.style.filter = "none";
        current2.style.opacity = "100%";
        current1.style.opacity = "0%";
        previousTextRef.current = text;
        // Store current text in global store after morphing completes
        globalTextStore.set(textId, text);
        
        // Measure and store container height for next transition
        // We measure the actual rendered height which includes min-height from parent
        const container = containerRef.current;
        if (container) {
          // Get the parent element which has the min-height classes
          // Structure: parent div (min-height) > MorphingText wrapper > Texts > containerRef
          let elementToMeasure = container.parentElement?.parentElement?.parentElement;
          if (!elementToMeasure) {
            // Fallback: try direct parent
            elementToMeasure = container.parentElement;
          }
          if (elementToMeasure) {
            // Measure the actual rendered height (includes min-height)
            const actualHeight = elementToMeasure.offsetHeight;
            globalMinHeightStore.set(textId, `${actualHeight}px`);
          } else {
            // Final fallback: measure from container itself
            const actualHeight = container.offsetHeight;
            globalMinHeightStore.set(textId, `${actualHeight}px`);
          }
        }
        
        // Notify that morphing is complete - container can now use new min-height
        onMorphingCompleteRef.current?.();
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }
    };
  }, [isActive, text, textId]);

  return { text1Ref, text2Ref, containerRef, spacerTextRef };
};

interface MorphingTextProps {
  className?: string;
  text: string;
  isActive?: boolean;
  textId?: string; // Optional unique ID, defaults to text content
  onMorphingComplete?: () => void;
}

const Texts: React.FC<
  Pick<MorphingTextProps, "text" | "isActive" | "textId" | "onMorphingComplete">
> = ({ text, isActive = false, textId, onMorphingComplete }) => {
  const [spacerText, setSpacerText] = useState(text);
  const { text1Ref, text2Ref, containerRef } = useControlledMorphingText({
    text,
    isActive: isActive ?? false,
    textId: textId || text,
    onSpacerUpdate: setSpacerText,
    onMorphingComplete,
  });

  return (
    <div ref={containerRef} className="relative w-full">
      <span
        className="absolute left-0 top-0 inline-block w-full text-left pointer-events-none"
        ref={text1Ref}
        aria-hidden="true"
        style={{ opacity: 0, willChange: "opacity, filter" }}
      />
      <span
        className="absolute left-0 top-0 inline-block w-full text-left pointer-events-none"
        ref={text2Ref}
        style={{ opacity: 0, willChange: "opacity, filter" }}
      />
      {/* Invisible spacer to maintain layout height - uses the longer text to prevent shift */}
      <span className="invisible inline-block w-full text-left" aria-hidden="true">
        {spacerText}
      </span>
    </div>
  );
};

const SvgFilters: React.FC = () => (
  <svg
    id="filters"
    className="fixed h-0 w-0"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText: React.FC<MorphingTextProps> = ({
  text,
  className,
  isActive = false,
  textId,
  onMorphingComplete,
}) => (
  <div
    className={cn(
      "relative w-full text-left [filter:url(#threshold)_blur(0.6px)]",
      className
    )}
  >
    <Texts text={text} isActive={isActive} textId={textId} onMorphingComplete={onMorphingComplete} />
    <SvgFilters />
  </div>
);
