import { Card, CardContent, LogoAndNameTeam } from "@/components/index.ts";
import { Calendar, Timer } from "lucide-react";

type MatchCardProps = {
  match: {
    championship: string;
    jornada: number;
    date: string;
    hour: string;
    address: string;
    playAtHome: boolean;
  };
  team?: {
    teamPlayingAtHome: string;
    teamPlayingAtHomeLogo: string;
    teamPlayingAway: string;
    teamPlayingAwayLogo: string;
  };
  results?: {
    teamPlayingAtHomeScore: number | null | "";
    teamPlayingAwayScore: number | null | "";
  };
};

export function MatchCard({ match, team, results }: MatchCardProps) {
  return (
    <Card className="bg-primary text-primary-foreground relative pt-1">
      <CardContent className="flex flex-col items-center gap-6">
        {/* Date and hour */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-center text-secondary gap-3">
          <span className="text-sm italic">{match.jornada}° Jornada</span>
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {match.date}
          </span>
          <span className="flex items-center gap-2">
            <Timer className="w-4 h-4" />
            {match.hour}H
          </span>
        </div>

        {/* Teams */}
        <div className="flex flex-1 items-center justify-center gap-6">
          <LogoAndNameTeam
            logo={team?.teamPlayingAtHomeLogo || ""}
            name={team?.teamPlayingAtHome || ""}
          />
          <span className="text-xl font-bold italic text-secondary">VS</span>
          <LogoAndNameTeam
            logo={team?.teamPlayingAwayLogo || ""}
            name={team?.teamPlayingAway || ""}
          />
        </div>

        {/* Result */}
        {results && (
          <div className="flex items-center gap-2 text-2xl font-bold">
            <span>{results.teamPlayingAwayScore}</span>
            <span>-</span>
            <span>{results.teamPlayingAtHomeScore}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
