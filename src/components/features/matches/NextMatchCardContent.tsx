import { TeamLogoAndName } from "@/components/index.ts";
import type { MatchCardProps } from "@/types/index.ts";
import { CalendarDays, MapPin, Timer } from "lucide-react";

export function NextMatchCardContent({ team, match }: MatchCardProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-3 lg:gap-6">
        <TeamLogoAndName
          teamLogo={team?.teamPlayingAtHomeLogo}
          teamName={team?.teamPlayingAtHome}
        />
        <p className="text-xl lg:text-4xl font-bold text-secondary">X</p>
        <TeamLogoAndName
          teamLogo={team?.teamPlayingAwayLogo}
          teamName={team?.teamPlayingAway}
        />
      </div>

      <div className="flex flex-col mt-12 gap-3">
        <p className="flex items-center">
          <CalendarDays className="mr-2" /> {match.date}
        </p>
        <p className="flex items-center">
          <Timer className="mr-2" /> {match.hour}H
        </p>

        <p className="flex items-center">
          <MapPin className="mr-2" /> {match.address}
        </p>
      </div>
    </>
  );
}
