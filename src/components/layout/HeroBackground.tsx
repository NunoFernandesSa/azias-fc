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
  // Précharge l'image au montage
  useEffect(() => {
    const img = new Image();
    img.src = webpSrc;
    // Précharge aussi la version de fallback
    const img2 = new Image();
    img2.src = src;
  }, [webpSrc, src]);

  return (
    <div className={`relative min-h-screen overflow-hidden ${className}`}>
      {/* IMAGE ULTRA PRIORITAIRE */}
      <div className="absolute inset-0">
        <picture>
          {/* Version mobile si disponible */}
          {mobileSrc && (
            <source
              media="(max-width: 768px)"
              srcSet={mobileSrc}
              type="image/webp"
            />
          )}
          {/* Version desktop */}
          <source
            media={mobileSrc ? "(min-width: 769px)" : undefined}
            srcSet={webpSrc}
            type="image/webp"
          />
          {/* Fallback */}
          <source srcSet={src} type="image/jpeg" />
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            // ATTRIBUTS POUR CHARGEMENT IMMÉDIAT
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            // Style pour éviter tout délai
            style={{
              opacity: 1,
              visibility: "visible",
              transition: "none",
            }}
            // Dimensions fixes pour éviter le CLS
            width={1920}
            height={1080}
          />
        </picture>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
