import { Calendar, MapPlus, Timer } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn/ui/card";

export default function NextMatchCard() {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle>Proximo Jogo</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-center gap-6">
          {/* Team 1 */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/logo-azias-fc.jpg"
              alt="logo da equipa"
              className="w-48 h-48 rounded-lg"
            />
          </div>

          {/* x*/}
          <p className="text-6xl font-bold">x</p>

          {/* Team 2 */}
          <div className="flex flex-col items-center justify-center gap-2">
            <img
              src="/logo-azias-fc.jpg"
              alt="logo da equipa"
              className="w-48 h-48 rounded-lg"
            />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col items-start justify-center gap-2">
        <p className="flex items-center justify-center w-full gap-6 mb-6">
          <span className="text-3xl font-bold">AZIAS FC</span>
          <span className="text-secondary text-xl">VS</span>
          <span className="text-3xl font-bold">Rival FC</span>
        </p>

        <p className="text-xl flex items-center gap-3">
          <Calendar className="inline" />
          Domingo, 14 de Dezembro de 2025
        </p>
        <p className="text-xl flex items-center gap-3">
          <Timer className="inline" />
          18:00H
        </p>
        <p className="text-xl flex items-center gap-3">
          <MapPlus className="inline" />
          Campo da manguela, Azias Ponte da barca
        </p>
      </CardFooter>
    </Card>
  );
}
