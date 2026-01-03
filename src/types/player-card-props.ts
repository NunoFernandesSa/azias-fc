export type PlayerCardProps = {
  imageUrl: string;
  name: string;
  number: number;
  age?: number | null;
  isCaptain?: boolean;
  stats?: {
    matches?: number;
    goals?: number;
    assists?: number;
  };
  className?: string;
};
