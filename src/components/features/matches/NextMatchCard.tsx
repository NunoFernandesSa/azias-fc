// ---------- components ----------
import { Button } from "@/components/index.ts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

// ---------- types ----------
import type { NextMatchCardProps } from "@/types/index.ts";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export function NextMatchCard({
  title,
  cardContent,
  cardFooter,
  cardFooterClassName,
  className,
}: NextMatchCardProps) {
  return (
    <Card
      className={
        className +
        " relative bg-gradient-to-r from-primary to-primary/75 rounded-lg"
      }
    >
      <img
        src="/bg-match-card.jpg"
        alt=""
        className="absolute w-full h-full object-cover bottom-0 -z-10 rounded-lg"
      />
      <CardHeader>
        <CardTitle className="flex flex-col md:flex-row items-center justify-between text-3xl font-bold gap-3 md:gap-0">
          {title}
          <Button asChild variant={"secondary"}>
            <Link to="/calendario">
              <Calendar className="mr-2" />
              Ver calendário
            </Link>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter className={cardFooterClassName}>{cardFooter}</CardFooter>
    </Card>
  );
}
