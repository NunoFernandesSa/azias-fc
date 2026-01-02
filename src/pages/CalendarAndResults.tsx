import { Container, MatchCard } from "@/components/index.ts";
import { calendar } from "@/config/constants/constants";

export function CalendarAndResults() {
  return (
    <Container className="mx-3 lg:mx-16 lg:my-8">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {calendar.map((match) => (
          <MatchCard
            key={match.match.date}
            match={match.match}
            team={match.team}
            results={match.results}
          />
        ))}
      </div>
    </Container>
  );
}
