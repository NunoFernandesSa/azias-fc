import { Button, Container } from "@/components/index.ts";
import { CalendarIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Container>
      <div className="relative flex items-end border overflow-hidden min-h-screen">
        {/* Background Image */}
        <img
          src="/bg-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        {/* Content */}
        <div className="w-full h-screen flex flex-col justify-center items-center bg-linear-to-t from-primary via-primary/70 to-background/20 gap-6">
          <h2 className="lg:text-8xl text-6xl font-bold text-primary-foreground">
            AZIAS FC
          </h2>
          <p className="lg:text-2xl text-xl text-primary-foreground/80 mt-6 italic">
            Um clube. Uma família. Uma paixão.
          </p>

          <div className="flex flex-col md:flex-row gap-6">
            <Button asChild variant="secondary" className="">
              <Link to="/calendario">
                <CalendarIcon /> Ver calendário
              </Link>
            </Button>

            <Button asChild variant="outline" className="hover:bg-white/80">
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
