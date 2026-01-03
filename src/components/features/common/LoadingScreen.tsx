import { Spinner } from "@/components/index.ts";

export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-primary to-primary/95">
      <img src="/azias-fc-logo.png" alt="Logo du club" className="w-80 h-80" />

      <Spinner className="w-12 h-12 md:w-16 md:h-16 text-secondary" />
      <h2 className="text-2xl md:text-4xl lg:text-7xl font-bold text-primary-foreground/80 text-center px-4">
        Bem-vindo
      </h2>
    </div>
  );
};
