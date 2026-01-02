export const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-linear-to-br from-primary to-primary/95">
      <div className="mb-8">
        <div className="w-40 h-40 md:w-48 md:h-48 mx-auto">
          <div className="w-full h-full bg-linear-to-br from-primary to-primary-foreground rounded-full flex items-center justify-center shadow-2xl border-4 border-secondary">
            <span className="text-5xl">⚽</span>
            <img
              src="/azias-fc-logo.png"
              alt="Logo du club"
              className="w-full h-full object-contain p-4"
            />
          </div>
        </div>
      </div>

      {/* team name */}
      <h1 className="text-4xl md:text-6xl lg:text-9xl font-bold text-primary-foreground/80 text-center px-4">
        AZIAS FC
      </h1>

      <p className="text-secondary text-lg font-semibold mt-4 italic">
        Ligua Inatel Portugal
      </p>
    </div>
  );
};

export default LoadingScreen;
