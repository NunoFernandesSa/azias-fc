// ---------- components ----------
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardBackground,
} from "@/components/index.ts";

// ---------- types ----------
import type { NextMatchCardProps } from "@/types/index.ts";

// ---------- images ----------
import BgWebp from "/images/optimized/bg-match-card.webp";
import BgJpg from "/images/optimized/bg-match-card.jpg";
import BgMobileWebp from "/images/optimized/bg-match-card-mobile.webp";

export function NextMatchCard({
  title,
  cardContent,
  cardFooter,
  cardFooterClassName,
  className,
}: NextMatchCardProps) {
  return (
    <CardBackground
      src={BgJpg}
      webpSrc={BgWebp}
      mobileSrc={BgMobileWebp}
      overlay={true}
      overlayColor="bg-primary/40"
    >
      <Card
        className={
          className + " bg-gradient-to-r from-primary to-primary/40 rounded-lg"
        }
      >
        <CardHeader>
          <CardTitle className="flex flex-col gap-2">
            <p className="text-3xl font-bold">{title}</p>
            <p className="text-secondary text-md">🕒 Faltam 5 dias</p>
          </CardTitle>
        </CardHeader>
        <CardContent>{cardContent}</CardContent>
        <CardFooter className={cardFooterClassName}>{cardFooter}</CardFooter>
      </Card>
    </CardBackground>
  );
}
