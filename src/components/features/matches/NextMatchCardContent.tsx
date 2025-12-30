import { TeamLogoAndName } from "@/components/index.ts";
import type { MatchProps } from "@/types/index.ts";
import { CalendarDays, MapPin, Timer } from "lucide-react";

export function NextMatchCardContent({
  date,
  address,
  teamPlayingAtHome,
  teamPlayingAway,
  teamPlayingAtHomeLogo,
  teamPlayingAwayLogo,
  time,
}: MatchProps) {
  return (
    <>
      <div className="flex items-center justify-center gap-3 lg:gap-6">
        <TeamLogoAndName
          teamLogo={teamPlayingAtHomeLogo}
          teamName={teamPlayingAtHome}
        />
        <p className="text-xl lg:text-4xl font-semibold text-secondary">VS</p>
        <TeamLogoAndName
          teamLogo={teamPlayingAwayLogo}
          teamName={teamPlayingAway}
        />
      </div>

      <div className="flex flex-col mt-12 gap-3">
        <p className="flex items-center">
          <CalendarDays className="mr-2" /> {date}
        </p>
        <p className="flex items-center">
          <Timer className="mr-2" /> {time}H
        </p>

        <p className="flex items-center">
          <MapPin className="mr-2" /> {address}
        </p>
      </div>
    </>
  );
}
