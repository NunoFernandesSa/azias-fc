import {
  Button,
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/index";
import { Link } from "react-router-dom";

export function HomePageTeamSection() {
  const title = "A nossa equipa";
  return (
    <Card className="relative bg-primary/80 text-primary-foreground min-h-[300px] hover:bg-transparent transition-all duration-500">
      <img
        src="/team.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full rounded-lg object-cover -z-10"
      />

      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
        <p className="text-lg">Um grupo unido, dedicado e apaixonado.</p>
      </CardHeader>

      <CardFooter className=" flex-1 flex-col items-start justify-end gap-6 mt-12">
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          ⚽ Espírito de equipa
        </div>
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🤝 Respeito
        </div>
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🔥 Paixão local
        </div>
        <div className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🏆 Campeonato INATEL
        </div>
        <Button asChild variant={"secondary"} className="w-full">
          <Link to="/equipa" className="text-start">
            Veja a nossa equipa
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
