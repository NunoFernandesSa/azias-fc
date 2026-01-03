import { Container, MatchCard, Title } from "@/components/index.ts";
import { calendar } from "@/config/constants/constants";

export function CalendarAndResults() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <Title className="text-primary text-center mb-12">
        Calendário 2025/2026
      </Title>

      <div className="pb-6">
        <p className="text-primary font-bold text-xl">Liga INATEL</p>
        <hr />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {calendar.map((match) => (
          <MatchCard
            key={match.id}
            match={match.match}
            team={match.team}
            results={match.results}
          />
        ))}
      </div>
    </Container>
  );
}
