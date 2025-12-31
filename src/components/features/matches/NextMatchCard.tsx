// ---------- components ----------
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

// ---------- types ----------
import type { NextMatchCardProps } from "@/types/index.ts";

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
        <CardTitle className="flex flex-col gap-2">
          <p className="text-3xl font-bold">{title}</p>
          <p className="text-secondary text-md">🕒 Faltam 5 dias</p>
        </CardTitle>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter className={cardFooterClassName}>{cardFooter}</CardFooter>
    </Card>
  );
}
