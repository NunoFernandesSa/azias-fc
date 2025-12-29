import type { TeamLogoAndNameProps } from "@/types/index.ts";

export function TeamLogoAndName({ teamLogo, teamName }: TeamLogoAndNameProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <p className="text-md sm:text-lg md:text-xl lg:text-2xl font-bold">
        {teamName}
      </p>
      <img
        src={teamLogo}
        alt="logo da equipa"
        className="w-24 h-24 lg:w-36 lg:h-36 rounded-lg shadow-lg shadow-white/20"
      />
    </div>
  );
}
