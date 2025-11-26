"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageFallback } from "@/components/ui/ImageFallback";
import { cn } from "@/lib/utils";

interface PortfolioImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function PortfolioImage({
  src,
  alt,
  fill = false,
  className,
  sizes,
  priority = false,
}: PortfolioImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center",
          fill ? "absolute inset-0" : "w-full h-full",
          className
        )}
      >
        <ImageFallback />
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setHasError(true)}
    />
  );
}

