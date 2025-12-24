import { Button, Section } from "@/components/index.ts";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <Section>
      <div className="relative h-[calc(100vh-300px)] flex items-end border overflow-hidden">
        <img
          src="/bg-img.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center -z-10"
        />
        <div className="lg:w-1/2 w-full h-40 bg-linear-to-r from-primary via-primary/50 to-background/50 p-6 flex flex-col justify-center mb-6">
          <h2 className="text-4xl font-bold text-primary-foreground">
            AZIAS FC
          </h2>
          <p className="text-2xl text-primary-foreground/80">
            Paixão, união e futebol desde 19XX
          </p>

          <div className="flex items-center gap-6 mt-6">
            <Button
              asChild
              variant="link"
              className="bg-card text-card-foreground cursor-pointer"
            >
              <Link to="/calendario">Ver calendário</Link>
            </Button>

            <Button
              asChild
              variant="link"
              className="bg-card text-card-foreground cursor-pointer"
            >
              <Link to="/contacto">Contate-nos</Link>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
