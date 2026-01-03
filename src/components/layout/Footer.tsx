import { Button } from "@/components/index.ts";

export function Footer() {
  return (
    <footer className="lg:ml-48 flex-1 bg-primary text-primary-foreground">
      <div className="flex flex-col items-center gap-3 py-6">
        <p className="text-xl">Clube amador INATEL</p>
        <img src="/logo-inatel.webp" alt="Logo Inatel" className="w-36" />
      </div>

      <div className="container mx-auto h-16 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Azias FC - Todos os direitos
          reservados
        </p>

        <Button
          variant="link"
          className="text-sm font-light cursor-pointer text-primary-foreground ease-in-out transition-all duration-500 hover:text-primary-foreground/70"
        >
          Termos e Condições
        </Button>
      </div>
    </footer>
  );
}
