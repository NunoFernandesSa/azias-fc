export function NextMatchCardContent() {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Team 1 */}
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src="/logo-azias-fc.jpg"
          alt="logo da equipa"
          className="w-48 h-48 rounded-lg"
        />
      </div>

      {/* x*/}
      <p className="text-6xl font-bold">x</p>

      {/* Team 2 */}
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src="/logo-azias-fc.jpg"
          alt="logo da equipa"
          className="w-48 h-48 rounded-lg"
        />
      </div>
    </div>
  );
}
