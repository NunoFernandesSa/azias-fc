import {
  Container,
  Hero,
  NextMatchCard,
  NextMatchCardContent,
  NextMatchCardFooter,
  Section,
} from "@/components/index";

export function Home() {
  return (
    <Container>
      <Hero />

      <Section>
        <NextMatchCard
          title="Próximo Jogo"
          cardContent={<NextMatchCardContent />}
          cardFooter={<NextMatchCardFooter />}
          cardFooterClassName="flex flex-col items-start justify-center gap-2"
          className="bg-primary text-primary-foreground"
        />
      </Section>
    </Container>
  );
}
