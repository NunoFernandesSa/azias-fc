// ---------- react router dom ----------
import { Link } from "react-router-dom";
// ---------- components ----------
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  CardBackground,
  Container,
} from "@/components/index.ts";
// ---------- constants ----------
import { sponsors } from "@/config/constants/constants";
// ---------- images ----------
import BgJpg from "/images/optimized/bg-match-card.jpg";
import BgWebp from "/images/optimized/bg-match-card.webp";
import BgMobileWebp from "/images/optimized/bg-match-card-mobile.webp";

export function HomePageSponsorsSection() {
  return (
    <Container className="mx-3 lg:mx-16 my-16 lg:my-16">
      <CardBackground
        src={BgJpg}
        webpSrc={BgWebp}
        mobileSrc={BgMobileWebp}
        overlay={true}
        overlayColor="bg-primary/40"
      >
        <Card className="relative bg-gradient-to-r from-primary to-primary/40 rounded-lg overflow-hidden text-primary-foreground">
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
              <Link to="/contacto">Torne-se patrocinador</Link>
            </Button>
          </CardContent>
          <CardFooter className="flex flex-wrap items-center justify-center lg:gap-16 gap-6 mb-6">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="hover:scale-102 transition-all duration-300 w-26 h-26 sm:w-36 sm:h-36 lg:w-46 lg:h-46 rounded-lg overflow-hidden bg-primary shadow-sm shadow-secondary"
              >
                <Link to={sponsor.website} target="_blank" title="Consultar">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="object-cover rounded-lg w-full"
                  />
                </Link>
              </div>
            ))}
          </CardFooter>
        </Card>
      </CardBackground>
    </Container>
  );
}
