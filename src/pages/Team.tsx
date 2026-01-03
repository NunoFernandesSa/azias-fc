import { PlayerCard } from "@/components/features/team/PlayerCard";
import { Container, PlayersSection, Title } from "@/components/index";

import { Goalkeepers } from "@/config/constants/constants";
import { Defenders } from "@/config/constants/constants";
import { Midfielders } from "@/config/constants/constants";
import { Forwards } from "@/config/constants/constants";
import { Coaches } from "@/config/constants/constants";

export function Team() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <Title className="text-primary text-center mb-12">
        A Nossa Equipa 2025/2026
      </Title>

      <PlayersSection sectionName="Guarda-redes">
        {Goalkeepers.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Defesas">
        {Defenders.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Médios">
        {Midfielders.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Avançados">
        {Forwards.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Treinadores">
        {Coaches.map((coach) => (
          <PlayerCard key={coach.id} {...coach} />
        ))}
      </PlayersSection>
    </Container>
  );
}
