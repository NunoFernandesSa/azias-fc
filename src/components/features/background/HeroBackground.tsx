import { useEffect } from "react";

interface HeroBackgroundProps {
  src: string;
  webpSrc: string;
  mobileSrc?: string;
  children: React.ReactNode;
  className?: string;
}

export const HeroBackground = ({
  src,
  webpSrc,
  mobileSrc,
  children,
  className = "",
}: HeroBackgroundProps) => {
  useEffect(() => {
    const img = new Image();
    img.src = webpSrc;

    const img2 = new Image();
    img2.src = src;
  }, [webpSrc, src]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      <div className="absolute inset-0">
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
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            style={{
              opacity: 1,
              visibility: "visible",
              transition: "none",
            }}
            width={1920}
            height={1080}
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-primary/30 to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
