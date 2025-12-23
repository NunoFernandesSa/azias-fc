export default function Hero() {
  return (
    <div className="relative h-[calc(100vh-300px)] flex items-end bg-red-300">
      <div className="lg:w-1/2 lg:h-1/3 w-full h-1/2 bg-linear-to-r from-primary via-primary/50 to-background/50 p-6 flex flex-col justify-center">
        <h2 className="text-4xl font-bold text-primary-foreground">AZIAS FC</h2>
        <p className="text-2xl text-primary-foreground/80">
          The best club in the world
        </p>
      </div>
    </div>
  );
}
