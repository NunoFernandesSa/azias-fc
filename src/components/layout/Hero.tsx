import { Button, Container } from "@/components/index.ts";
import { CalendarIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Container>
      <div className="relative flex items-end border overflow-hidden h-[calc(100vh-100px)]">
        {/* Background Image */}
        <img
          src="/bg-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        {/* Content */}
        <div className="w-full bg-linear-to-r from-primary via-primary/50 to-background/50 px-12 py-12 flex flex-col justify-center">
          <h2 className="lg:text-8xl text-6xl font-bold text-primary-foreground">
            AZIAS FC
          </h2>
          <p className="lg:text-2xl text-xl text-primary-foreground/80 mt-6">
            Paixão, união e futebol desde 2023
          </p>

          <div className="flex items-center gap-6 mt-6">
            <Button asChild variant="secondary">
              <Link to="/calendario">
                <CalendarIcon /> Ver calendário
              </Link>
            </Button>

            <Button asChild variant="secondary">
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
