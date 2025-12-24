import { Badge, Button, TeamLogoAndName } from "@/components/index.ts";
import type { MatchProps } from "@/types/index.ts";
import { Calendar, MapPin, Trophy } from "lucide-react";
import { Link } from "react-router-dom";

export function NextMatchCardContent({
  date,
  playAtHome,
  address,
  championship,
  teamPlayingAtHome,
  teamPlayingAway,
  teamPlayingAtHomeLogo,
  teamPlayingAwayLogo,
  time,
}: MatchProps) {
  return (
    <div className="grid grid-cols-2 gap-6 lg:p-8">
      {/* left side */}
      <div className="flex flex-col gap-6">
        <p className="text-2xl font-bold flex items-center gap-2">
          <Calendar className="mr-2" /> {date} - {time}H
        </p>
        <p className="flex items-center gap-2 text-lg font-bold">
          <MapPin className="mr-2" />{" "}
          {playAtHome ? (
            <Badge variant="secondary">EN CASA</Badge>
          ) : (
            <Badge variant="secondary">FORA</Badge>
          )}
          {address}
        </p>
        <p className="flex items-center gap-2 text-lg font-bold">
          <Trophy className="mr-2" /> {championship}
        </p>

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
        <p className="text-6xl font-bold">x</p>
        <TeamLogoAndName
          teamLogo={teamPlayingAwayLogo}
          teamName={teamPlayingAway}
        />
      </div>
    </div>
  );
}
