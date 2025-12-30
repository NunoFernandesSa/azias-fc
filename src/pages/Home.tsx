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

      <Container className="container mx-auto grid grid-cols-1 gap-6 md:px-16">
        <NextMatchCard
          title="Próximo Jogo"
          cardContent={<NextMatchCardContent {...match} />}
          className="bg-primary text-primary-foreground "
        />

        <HomePageAboutSection />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <HomePageTeamSection />
          <HomePageSponsorsSection />
        </div>
      </Container>
    </>
  );
}
