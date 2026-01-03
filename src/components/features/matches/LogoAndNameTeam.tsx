export function LogoAndNameTeam({
  logo,
  name,
}: {
  logo: string;
  name?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={logo}
        alt={"logo da equipa " + name}
        className="w-36 md:w-40 rounded-full shadow shadow-secondary/20"
      />
      <span className="text-base font-bold text-primary-foreground">
        {name}
      </span>
    </div>
  );
}
