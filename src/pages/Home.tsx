import {
  Container,
  Hero,
  NextMatchCard,
  NextMatchCardContent,
  NextMatchCardFooter,
} from "@/components/index";

export function Home() {
  return (
    <Container>
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <NextMatchCard
          title="Proximo Jogo"
          cardContent={<NextMatchCardContent />}
          cardFooter={<NextMatchCardFooter />}
        />
      </div>
    </Container>
  );
}
