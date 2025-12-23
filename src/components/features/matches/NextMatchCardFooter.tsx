import { Calendar, MapPlus, Timer } from "lucide-react";

export function NextMatchCardFooter() {
  return (
    <>
      {" "}
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
      ;
    </>
  );
}
