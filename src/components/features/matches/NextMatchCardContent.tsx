import { match } from "@/config/constants/constants";

export function NextMatchCardContent() {
  return (
    <div className="flex items-center justify-center gap-6">
      {/* Team 1 */}
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src={match.team1Logo}
          alt="logo da equipa"
          className="w-48 h-48 rounded-lg shadow-lg shadow-primary-foreground/25"
        />
        <p className="text-2xl font-bold">AZIAS FC</p>
      </div>

      {/* x*/}
      <p className="text-6xl font-bold">x</p>

      {/* Team 2 */}
      <div className="flex flex-col items-center justify-center gap-2">
        <img
          src={match.team2Logo}
          alt="logo da equipa"
          className="w-48 h-48 rounded-lg shadow-lg shadow-primary-foreground/25"
        />
        <p className="text-2xl font-bold">SPORT FC</p>
      </div>
    </div>
  );
}
