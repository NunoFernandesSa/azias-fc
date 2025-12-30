import {
  Button,
  Container,
  Hero,
  HomePageAboutSection,
  HomePageSponsorsSection,
  HomePageTeamSection,
  NextMatchCard,
  NextMatchCardContent,
} from "@/components/index";

import { match } from "@/config/constants/constants";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <>
      <Hero />
      <Container className="mx-3 lg:mx-16 my-16 lg:my-16 grid grid-cols-1 xl:grid-cols-2 gap-6">
        <NextMatchCard
          title="Próximo Jogo"
          cardContent={<NextMatchCardContent {...match} />}
          cardFooter={
            <Button asChild variant={"secondary"} className="w-full">
              <Link to="/calendario">Consultar calendário</Link>
            </Button>
          }
          className="bg-primary text-primary-foreground "
        />
        <HomePageTeamSection />
      </Container>

      <Container className="mx-3 lg:mx-16 my-16 lg:my-16">
        <HomePageAboutSection />
      </Container>

      <Container className="mx-3 lg:mx-16 my-16 lg:my-16">
        <HomePageSponsorsSection />
      </Container>

      <Container className="mx-3 lg:mx-16 my-16 lg:my-16">
        <div className=""></div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3848121857786!2d-8.365324423425053!3d41.77691977174226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd250f08fdba3cb3%3A0xc741083a73dd31e1!2sCampo%20de%20Futebol%20da%20Manguela!5e0!3m2!1sfr!2spt!4v1767123579062!5m2!1sfr!2spt"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px]"
        ></iframe>
      </Container>
    </>
  );
}
