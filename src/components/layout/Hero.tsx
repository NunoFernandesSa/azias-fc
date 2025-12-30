import { Button, Container } from "@/components/index.ts";
import { CalendarIcon, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Container className="container mx-auto py-6">
      <div className="relative h-[calc(100vh-300px)] flex items-end border overflow-hidden rounded-lg">
        <img
          src="/bg-hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />

        <div className="lg:w-1/2 w-full lg:h-60 h-40 bg-linear-to-r from-primary via-primary/50 to-background/50 p-6 flex flex-col justify-center">
          <h2 className="lg:text-6xl text-4xl font-bold text-primary-foreground">
            AZIAS FC
          </h2>
          <p className="lg:text-2xl text-xl text-primary-foreground/80">
            Paixão, união e futebol desde 2023
          </p>

          <div className="flex items-center gap-6 mt-6">
            <Button
              asChild
              variant="link"
              className="bg-card text-card-foreground cursor-pointer"
            >
              <Link to="/calendario">
                <CalendarIcon /> Ver calendário
              </Link>
            </Button>

            <Button
              asChild
              variant="link"
              className="bg-card text-card-foreground cursor-pointer"
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
