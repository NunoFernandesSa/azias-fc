import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Container,
  Hero,
  NextMatchCard,
  NextMatchCardContent,
  Section,
} from "@/components/index";

import { match } from "@/config/constants/constants";
import { Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container>
      <Hero />

      <Section className="grid grid-cols-1 gap-6 md:px-16">
        <NextMatchCard
          title="Próximo Jogo"
          cardContent={<NextMatchCardContent {...match} />}
          className="bg-primary text-primary-foreground"
        />

        <Card className="bg-card text-card-foreground p-6 grid grid-cols-2 gap-6">
          <div className="col-span-1">
            <CardHeader>
              <CardTitle>
                <h3 className="text-3xl text-primary font-bold">
                  ⚽ A nossa história
                </h3>
              </CardTitle>
            </CardHeader>

            <CardContent className="text-primary text-lg flex flex-col gap-3 py-6">
              <p>
                Fundado em AZIAS, Ponte da Barca, o Azias FC é um clube
                empenhado em promoção do futebol local, do espírito de equipa e
                dos valores desportivos.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>

              <Button
                asChild
                className="bg-secondary/80 text-secondary-foreground hover:bg-secondary font-bold"
              >
                <Link to="/equipa">
                  <Users className="mr-2 h-4 w-4" />
                  Descobrir a equipa
                </Link>
              </Button>
            </CardContent>
          </div>

          <div className="col-span-1"></div>
        </Card>
      </Section>
    </Container>
  );
}
