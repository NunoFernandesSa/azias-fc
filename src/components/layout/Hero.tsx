// ---------- react router ----------
import { Link } from "react-router-dom";
// ---------- icons ----------
import { CalendarIcon, Phone } from "lucide-react";
// ---------- components ----------
import { Button, Container, HeroBackground } from "@/components/index.ts";
// ---------- images ----------
import HeroWebp from "/images/optimized/bg-hero.webp";
import HeroJpg from "/images/optimized/bg-hero.jpg";
import HeroMobileWebp from "/images/optimized/bg-hero-mobile.webp";

export function Hero() {
  return (
    <Container>
      <HeroBackground
        src={HeroJpg}
        webpSrc={HeroWebp}
        mobileSrc={HeroMobileWebp}
        className="min-h-screen"
      >
        <div className="relative flex items-end overflow-hidden min-h-screen">
          {/* Content */}
          <div className="w-full h-screen flex flex-col justify-end items-center bg-linear-to-t from-primary via-primary/70 to-background/20 gap-6 pb-20">
            <h2 className="text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] font-bold text-primary-foreground/70">
              AZIAS FC
            </h2>
            <p className="lg:text-2xl text-xl text-primary-foreground/80 mt-6 italic">
              Um clube. Uma família. Uma paixão.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-6">
              <Button
                asChild
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Link to="/calendario">
                  <CalendarIcon /> Ver calendário
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-transparent hover:bg-white/80 text-primary-foreground"
              >
                <Link to="/contacto">
                  <Phone /> Entrar em contato
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </HeroBackground>
    </Container>
  );
}
