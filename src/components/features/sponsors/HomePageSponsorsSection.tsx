import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  AspectRatio,
  Button,
} from "@/components/index.ts";
import { sponsors } from "@/config/constants/constants";
import { Link } from "react-router-dom";

export function HomePageSponsorsSection() {
  return (
    <Card className="relative bg-gradient-to-r from-primary to-primary/75 rounded-lg overflow-hidden text-primary-foreground">
      <img
        src="/bg-match-card.jpg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />

      <CardHeader>
        <CardTitle className="text-3xl font-bold">
          Obrigado a quem acredita no Azias FC
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-semibold">
          Os nossos patrocinadores são parceiros essenciais do Azias FC.
        </p>
        <p className="font-semibold">
          Graças à sua confiança e apoio, o nosso clube pode continuar a
          crescer, promovendo o futebol local e incutindo valores de paixão,
          respeito e união.
        </p>
        <p className="font-semibold">
          Juntos, estamos a construir o futuro do Azias FC.
        </p>

        <p className="font-semibold mt-6">
          Quer dar visibilidade à sua empresa e apoiar o futebol local?
        </p>

        <Button
          asChild
          variant={"secondary"}
          size={"lg"}
          className="my-6 w-full md:w-1/2 lg:w-1/3"
        >
          <Link to="/patrocinadores">Torne-se patrocinador</Link>
        </Button>
      </CardContent>
      <CardFooter className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
        {sponsors.map((sponsor) => (
          <div
            key={sponsor.id}
            className="hover:scale-102 transition-all duration-300"
          >
            <Link to={sponsor.website} target="_blank" title="Consultar">
              <AspectRatio
                key={sponsor.id}
                ratio={16 / 9}
                className="bg-muted rounded-lg border max-w-40 md:max-w-45 lg:max-w-50 max-h-40 md:max-h-45 lg:max-h-50"
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="object-cover rounded-lg w-full h-full"
                />
              </AspectRatio>
            </Link>
            <span className="text-sm">{sponsor.name}</span>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
