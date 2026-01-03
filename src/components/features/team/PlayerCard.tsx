import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { PlayerCardProps } from "@/types/index";

export const PlayerCard = ({
  imageUrl,
  name,
  number,
  position,
  age,
  isCaptain = false,
  isGoalkeeper = false,
  stats,
  className,
}: PlayerCardProps) => {
  return (
    <Card
      className={cn(
        "group relative overflow-hidden rounded-xl border-2 hover:border-primary transition-all duration-300 hover:shadow-2xl",
        "bg-gradient-to-b from-background to-muted/50",
        "transform hover:-translate-y-2 transition-transform",
        className
      )}
    >
      {/* captain badge */}
      {isCaptain && (
        <div className="absolute top-3 right-3 z-20">
          <div className="bg-yellow-500 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            ⭐ Capitão
          </div>
        </div>
      )}

      {/* play number */}
      <div className="absolute top-3 left-3 z-20">
        <div className="bg-primary text-primary-foreground text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
          {number}
        </div>
      </div>

      {/* Container image */}
      <div className="relative h-64 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />

        {/* Player image */}
        <img
          src={imageUrl}
          alt={`${name} - ${position}`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <CardContent className="p-6">
        {/* Player name and position */}
        <div className="mb-4">
          <h3 className="text-xl font-bold truncate">{name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
              {position}
            </span>
            {isGoalkeeper && (
              <span className="text-xs bg-blue-500/20 text-blue-700 px-2 py-1 rounded-full">
                🧤 Guarda-redes
              </span>
            )}
          </div>
        </div>

        {/* Player additional info */}
        <div className="space-y-3">
          {/* Nationality and age */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            {age && <span>{age} anos</span>}
          </div>

          {/* Player stats (optional) */}
          {stats && (
            <div className="grid grid-cols-3 gap-2 pt-3 border-t">
              {stats.matches !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stats.matches}
                  </div>
                  <div className="text-xs text-muted-foreground">Jogos</div>
                </div>
              )}
              {stats.goals !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stats.goals}
                  </div>
                  <div className="text-xs text-muted-foreground">Golos</div>
                </div>
              )}
              {stats.assists !== undefined && (
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">
                    {stats.assists}
                  </div>
                  <div className="text-xs text-muted-foreground">Assist.</div>
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
