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
            <div className="flex flex-col md:flex-row items-center justify-center gap-2 w-full">
              <Button asChild variant={"secondary"} className="w-full md:w-1/2">
                <Link to="/calendario">Consultar calendário</Link>
              </Button>
              <Button
                asChild
                variant={"outline"}
                className="w-full md:w-1/2 bg-transparent hover:bg-white/80 text-primary-foreground hover:text-primary"
              >
                <Link
                  to="https://desporto.inatel.pt/pt/tournament/1322383/ranking"
                  target="_blank"
                >
                  Consultar classificação
                </Link>
              </Button>
            </div>
          }
          className="bg-primary text-primary-foreground "
        />
        <HomePageTeamSection />
      </Container>

      <Container className="mx-3 lg:mx-16 my-16 lg:my-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <HomePageAboutSection />
      </Container>

      <HomePageSponsorsSection />

      <HomePageContactInfos />
    </>
  );
}
