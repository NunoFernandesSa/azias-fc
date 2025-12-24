import type { TeamLogoAndNameProps } from "@/types/index.ts";

export function TeamLogoAndName({ teamLogo, teamName }: TeamLogoAndNameProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={teamLogo}
        alt="logo da equipa"
        className="w-24 h-24 lg:w-36 lg:h-36 rounded-lg shadow-lg shadow-primary-foreground/25"
      />
      <p className="text-lg md:text-2xl lg:text-3xl font-bold">{teamName}</p>
    </div>
  );
}
