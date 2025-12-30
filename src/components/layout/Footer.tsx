import { Button } from "@/components/index.ts";

export function Footer() {
  return (
    <footer className="lg:ml-48 flex-1 bg-primary text-primary-foreground">
      <div className="container mx-auto h-16 flex items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Azias FC - Tous droits reservés
        </p>

        <div className="">
          <Button
            variant="link"
            className="text-sm font-light cursor-pointer text-primary-foreground ease-in-out transition-all duration-500 hover:text-primary-foreground/70"
          >
            Termos e Condições
          </Button>
        </div>
      </div>
    </footer>
  );
}
