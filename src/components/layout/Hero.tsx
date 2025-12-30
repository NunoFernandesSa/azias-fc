import { Button, Container } from "@/components/index.ts";
import { CalendarIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Container>
      <div className="relative flex items-end overflow-hidden min-h-screen">
        {/* Background Image */}
        <img
          src="/bg-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        {/* Content */}
        <div className="w-full h-screen flex flex-col justify-end items-center bg-linear-to-t from-primary via-primary/70 to-background/20 gap-6 pb-20">
          <h2 className="text-6xl md:text-8xl lg:text-10xl xl:text-[12rem] font-bold text-primary-foreground">
            AZIAS FC
          </h2>
          <p className="lg:text-2xl text-xl text-primary-foreground/80 mt-6 italic">
            Um clube. Uma família. Uma paixão.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Button asChild variant="secondary" size="lg" className="">
              <Link to="/calendario">
                <CalendarIcon /> Ver calendário
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="hover:bg-white/80"
            >
              <Link to="/contacto">
                <Phone /> Entrar em contato
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
