import { useEffect } from "react";

interface CardBackgroundProps {
  src: string;
  webpSrc: string;
  mobileSrc?: string;
  children: React.ReactNode;
  className?: string;
  overlay?: boolean;
  overlayColor?: string;
}

export const CardBackground = ({
  src,
  webpSrc,
  mobileSrc,
  children,
  className = "",
  overlay = true,
  overlayColor = "bg-black/20",
}: CardBackgroundProps) => {
  useEffect(() => {
    const img = new Image();
    img.src = webpSrc;
    const img2 = new Image();
    img2.src = src;
  }, [webpSrc, src]);

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <picture>
          {mobileSrc && (
            <source
              media="(max-width: 768px)"
              srcSet={mobileSrc}
              type="image/webp"
            />
          )}
          <source
            media={mobileSrc ? "(min-width: 769px)" : undefined}
            srcSet={webpSrc}
            type="image/webp"
          />
          <source srcSet={src} type="image/jpeg" />
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      {overlay && <div className={`absolute inset-0 -z-10 ${overlayColor}`} />}

      <div className="relative z-10">{children}</div>
    </div>
  );
};
