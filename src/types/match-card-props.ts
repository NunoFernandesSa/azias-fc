export type MatchCardProps = {
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
