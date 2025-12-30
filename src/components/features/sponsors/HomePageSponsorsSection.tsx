import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  AspectRatio,
} from "@/components/index.ts";
import { sponsors } from "@/config/constants/constants";

export function HomePageSponsorsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Obrigado a quem acredita no Azias FC
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Os nossos patrocinadores são parceiros essenciais do Azias FC.</p>
        <p>
          Graças à sua confiança e apoio, o nosso clube pode continuar a
          crescer, promovendo o futebol local e incutindo valores de paixão,
          respeito e união.
        </p>
        <p>Juntos, estamos a construir o futuro do Azias FC.</p>
      </CardContent>
      <CardFooter className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {sponsors.map((sponsor) => (
          <AspectRatio
            key={sponsor.id}
            ratio={16 / 9}
            className="bg-muted rounded-lg border max-w-[160px] md:max-w-[180px] lg:max-w-[200px] max-h-[160px] md:max-h-[180px] lg:max-h-[200px]"
          >
            <img src={sponsor.logo} alt={sponsor.name} />
          </AspectRatio>
        ))}
      </CardFooter>
    </Card>
  );
}
