// ---------- react-router-dom ----------
import { Link } from "react-router-dom";

// ---------- components ----------
import {
  Button,
  Container,
  Hero,
  HomePageAboutSection,
  HomePageContactInfos,
  HomePageSponsorsSection,
  HomePageTeamSection,
  NextMatchCard,
  NextMatchCardContent,
} from "@/components/index";

// ---------- constants ----------
import { calendar } from "@/config/constants/constants";

export function Home() {
  return (
    <>
      <Hero />
      <Container className="mx-3 lg:mx-16 my-16 lg:my-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <NextMatchCard
          title="Próximo Jogo"
          cardContent={<NextMatchCardContent {...calendar[0]} />}
          cardFooter={
            <Button asChild variant={"secondary"} className="w-full">
              <Link to="/calendario">Consultar calendário</Link>
            </Button>
          }
          className="bg-primary text-primary-foreground "
        />
        <HomePageTeamSection />
      </Container>

      <Container className="mx-3 lg:mx-16 my-16 lg:my-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <HomePageAboutSection />
      </Container>

      <Container className="mx-3 lg:mx-16 my-16 lg:my-16">
        <HomePageSponsorsSection />
      </Container>

      <HomePageContactInfos />
    </>
  );
}
