import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/index";
import { Link } from "react-router-dom";

export function HomePageTeamSection() {
  const title = "A nossa equipa";
  return (
    <Card className="relative bg-primary/80 text-primary-foreground min-h-[300px]">
      <img
        src="/team.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full rounded-lg object-cover -z-10"
      />

      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-lg">Um grupo unido, dedicado e apaixonado.</p>
      </CardContent>

      <CardFooter>
        <Button
          className="bg-secondary cursor-pointer hover:bg-secondary/80 text-foreground font-bold"
          asChild
        >
          <Link to="/equipa" className="text-start">
            Ver plantel completo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
