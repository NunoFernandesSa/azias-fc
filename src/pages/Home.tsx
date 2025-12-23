import Container from "@/components/Container";
import Hero from "@/components/layout/Hero";
import NextMatchCard from "@/components/ui/NextMatchCard";

export default function Home() {
  return (
    <Container>
      <Hero />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
        <NextMatchCard />
      </div>
    </Container>
  );
}
