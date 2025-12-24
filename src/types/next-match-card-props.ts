export type NextMatchCardProps = {
  title: string;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
  cardFooterClassName?: string;
  className?: string;
};

export type MatchProps = {
  date: string;
  playAtHome: boolean;
  address: string;
  championship: string;
  teamPlayingAtHome: string;
  teamPlayingAway: string;
  teamPlayingAtHomeLogo: string;
  teamPlayingAwayLogo: string;
  time: string;
};
