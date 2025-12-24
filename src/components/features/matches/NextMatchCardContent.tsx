import { Badge, Button, TeamLogoAndName } from "@/components/index.ts";
import type { MatchProps } from "@/types/index.ts";
import { Calendar } from "lucide-react";
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:p-8">
      {/* left side */}
      <div className="flex flex-col gap-6">
        <p className="text-sm lg:text-xl font-bold flex items-center gap-2">
          {date} - {time}H
        </p>
        <p className="flex flex-col items-start gap-2 text-sm lg:text-xl font-bold">
          {playAtHome ? (
            <Badge variant="secondary">EN CASA</Badge>
          ) : (
            <Badge variant="secondary">FORA</Badge>
          )}
          {address}
        </p>
        <p className="text-sm lg:text-2xl font-bold flex items-center gap-2">
          {championship}
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
        <p className="text-2xl md:text-4xl lg:text-4xl font-bold">x</p>
        <TeamLogoAndName
          teamLogo={teamPlayingAwayLogo}
          teamName={teamPlayingAway}
        />
      </div>
    </div>
  );
}
