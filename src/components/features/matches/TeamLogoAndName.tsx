import type { TeamLogoAndNameProps } from "@/types/index.ts";

export function TeamLogoAndName({ teamLogo, teamName }: TeamLogoAndNameProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img
        src={teamLogo}
        alt="logo da equipa"
        className="w-36 h-36 rounded-lg shadow-lg shadow-primary-foreground/25"
      />
      <p className="text-2xl font-bold">{teamName}</p>
    </div>
  );
}
