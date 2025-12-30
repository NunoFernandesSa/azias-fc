import { Button, TeamLogoAndName } from "@/components/index.ts";
import type { MatchProps } from "@/types/index.ts";
import {
  Calendar,
  CalendarDays,
  Dot,
  FlagTriangleRight,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

export function NextMatchCardContent({
  date,
  address,
  championship,
  teamPlayingAtHome,
  teamPlayingAway,
  teamPlayingAtHomeLogo,
  teamPlayingAwayLogo,
  time,
}: MatchProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center">
      {/* left side */}
      <div className="flex flex-col gap-3">
        {/* date */}
        <p className="text-sm lg:text-xl font-bold flex items-center">
          <CalendarDays className="mr-2" /> {date} <Dot /> {time}H
        </p>

        {/* address */}
        <p className="font-bold flex items-center">
          <MapPin className="mr-2" /> {address}
        </p>

        {/* championship */}
        <p className="font-bold flex items-center">
          <FlagTriangleRight className="mr-2" /> {championship}
        </p>

        {/* button */}
        <Button
          asChild
          className="bg-secondary cursor-pointer hover:bg-secondary/80 text-foreground font-bold w-fit"
        >
          <Link to="/calendario">
            <Calendar className="mr-2" />
            Ver calendário
          </Link>
        </Button>
      </div>

      {/* right side */}
      <div className="flex items-center justify-center gap-6">
        <TeamLogoAndName
          teamLogo={teamPlayingAtHomeLogo}
          teamName={teamPlayingAtHome}
        />
        <p className="text-2xl md:text-4xl lg:text-4xl font-bold text-secondary">
          x
        </p>
        <TeamLogoAndName
          teamLogo={teamPlayingAwayLogo}
          teamName={teamPlayingAway}
        />
      </div>
    </div>
  );
}
