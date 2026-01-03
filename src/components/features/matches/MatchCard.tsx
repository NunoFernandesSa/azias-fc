// ---------- components ----------
import {
  Card,
  CardBackground,
  CardContent,
  LogoAndNameTeam,
} from "@/components/index.ts";
// ---------- icons ----------
import { Calendar, Timer } from "lucide-react";
// ---------- types ----------
import type { MatchCardProps } from "@/types/index.ts";
import type { JSX } from "react";

// ---------- images ----------
import BgWebp from "/images/optimized/bg-match-card.webp";
import BgJpg from "/images/optimized/bg-match-card.jpg";
import BgMobileWebp from "/images/optimized/bg-match-card-mobile.webp";

/**
 * MatchCard component
 * Displays a summary card for a single match, including date/time, participating teams, and optional results.
 * @param match - Contains the match's date, hour, and jornada (matchday) information.
 * @param team - Holds the names and logos of the home and away teams.
 * @param results - Optional; if provided, shows the final score of the match.
 * @returns JSX element representing the match card.
 */
export function MatchCard({
  match,
  team,
  results,
}: MatchCardProps): JSX.Element {
  return (
    <CardBackground
      src={BgJpg}
      webpSrc={BgWebp}
      mobileSrc={BgMobileWebp}
      overlay={true}
      overlayColor="bg-primary/60"
    >
      <Card className="bg-gradient-to-r from-primary to-primary/40 rounded-lg pt-1">
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
            <div className="flex items-center gap-2 text-2xl font-bold text-primary-foreground">
              <span>{results.teamPlayingAwayScore}</span>
              <span className="text-secondary">-</span>
              <span>{results.teamPlayingAtHomeScore}</span>
            </div>
          )}
        </CardContent>
      </Card>
    </CardBackground>
  );
}
