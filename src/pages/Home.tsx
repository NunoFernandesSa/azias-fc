import {
  Container,
  Hero,
  HomePageAboutSection,
  HomePageSponsorsSection,
  HomePageTeamSection,
  NextMatchCard,
  NextMatchCardContent,
} from "@/components/index";

import { match } from "@/config/constants/constants";

export function Home() {
  return (
    <>
      <Hero />

      <Container className="mx-3 md:mx-16 my-16 md:my-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <NextMatchCard
          title="Próximo Jogo"
          cardContent={<NextMatchCardContent {...match} />}
          className="bg-primary text-primary-foreground "
        />

        <HomePageTeamSection />
      </Container>

      <HomePageAboutSection />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HomePageSponsorsSection />
      </div>
    </>
  );
}
