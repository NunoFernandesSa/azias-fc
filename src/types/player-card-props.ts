export type PlayerCardProps = {
  imageUrl: string;
  name: string;
  number: number | null;
  age?: number | null;
  isCaptain?: boolean;
  stats?: {
    matches?: number;
    goals?: number;
    assists?: number;
  };
  className?: string;
};
