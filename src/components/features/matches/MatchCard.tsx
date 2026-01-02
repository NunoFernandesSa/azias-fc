import { Card, CardContent } from "@/components/index.ts";

type MatchCardProps = {
  match: {
    date: string;
    teamPlayingAtHome: string;
    teamPlayingAtHomeLogo: string;
    teamPlayingAway: string;
    teamPlayingAwayLogo: string;
  };
  results?: {
    teamPlayingAtHomeScore: number;
    teamPlayingAwayScore: number;
  };
};

export function MatchCard({ match, results }: MatchCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col md:flex-row items-center gap-6 p-6">
        {/* Date */}
        <div className="flex min-w-20 flex-col items-center justify-center rounded-lg bg-primary px-4 py-2 text-primary-foreground font-bold">
          {match.date}
        </div>

        {/* Teams */}
        <div className="flex flex-1 items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              {match.teamPlayingAtHome}
            </span>
            <img
              src={match.teamPlayingAtHomeLogo}
              alt={match.teamPlayingAtHome}
              className="w-16"
            />
          </div>

          <span className="text-xl font-bold italic text-primary">VS</span>

          <div className="flex items-center gap-2">
            <img
              src={match.teamPlayingAwayLogo}
              alt={match.teamPlayingAway}
              className="w-16"
            />
            <span className="text-xl font-bold text-primary">
              {match.teamPlayingAway}
            </span>
          </div>
        </div>

        {/* Result */}
        {results && (
          <div className="flex items-center gap-2 text-2xl font-bold text-primary">
            <span>{results.teamPlayingAwayScore}</span>
            <span>-</span>
            <span>{results.teamPlayingAtHomeScore}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
