export type PlayerCardProps = {
  imageUrl: string;
  name: string;
  number: number;
  position: string;
  age?: number;
  isCaptain?: boolean;
  isGoalkeeper?: boolean;
  stats?: {
    matches?: number;
    goals?: number;
    assists?: number;
  };
  className?: string;
};
