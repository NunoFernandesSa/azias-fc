import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundOptimizedProps {
  src: string;
  webpSrc?: string;
  alt?: string;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
  priority?: boolean;
  lazy?: boolean;
  children?: React.ReactNode;
}

export const BackgroundOptimized = ({
  src,
  webpSrc,
  alt = "",
  className = "",
  overlay = false,
  overlayColor = "bg-black/40",
  priority = false,
  lazy = true,
  children,
}: BackgroundOptimizedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(!lazy);

  const ref = React.useRef<HTMLDivElement>(null);

  // Lazy loading with Intersection Observer
  useEffect(() => {
    if (!lazy || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "50px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [lazy]);

  // Preload image when in view
  useEffect(() => {
    if (!isInView) return;

    const img = new Image();
    img.src = webpSrc || src;
    img.onload = () => setIsLoaded(true);
  }, [isInView, src, webpSrc]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      {/* Image container */}
      <div className="absolute inset-0">
        {/* Loading placeholder */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse" />
        )}

        {/* Optimized image */}
        {isInView && (
          <picture
            className={cn(
              "block w-full h-full transition-opacity duration-700",
              isLoaded ? "opacity-100" : "opacity-0"
            )}
          >
            {webpSrc && <source srcSet={webpSrc} type="image/webp" />}
            <source
              srcSet={src}
              type={src.endsWith(".jpg") ? "image/jpeg" : "image/png"}
            />
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              loading={priority ? "eager" : "lazy"}
              decoding="async"
              sizes="100vw"
            />
          </picture>
        )}
      </div>

      {/* Optional overlay */}
      {overlay && <div className={cn("absolute inset-0", overlayColor)} />}

      {/* Content */}
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};
