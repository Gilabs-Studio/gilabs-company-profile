"use client";

import { useState } from "react";
import Image from "next/image";
import { BlogImageFallback } from "./BlogImageFallback";
import { cn } from "@/lib/utils";

interface BlogImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function BlogImage({
  src,
  alt,
  fill = false,
  className,
  sizes,
  priority = false,
}: BlogImageProps) {
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
        <BlogImageFallback />
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

