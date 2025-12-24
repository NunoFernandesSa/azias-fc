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
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter className={cardFooterClassName}>{cardFooter}</CardFooter>
    </Card>
  );
}
