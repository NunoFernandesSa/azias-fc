import { PlayerCard } from "@/components/features/team/PlayerCard";
import { Container, PlayersSection, Title } from "@/components/index";

const PLAYERS_DATA = [
  {
    id: 1,
    imageUrl: "/images/players/player-exemple.jpg",
    name: "Ricardo",
    number: 1,
    position: "",
    age: 35,
    isCaptain: true,
    stats: { matches: 28, goals: 0, assists: 0 },
  },
  {
    id: 2,
    imageUrl: "/images/players/player-exemple.jpg",
    name: "Marcus",
    number: 2,
    position: "Defesa",
    age: 38,
    isCaptain: false,
    stats: { matches: 28, goals: 0, assists: 0 },
  },
  {
    id: 3,
    imageUrl: "/images/players/player-exemple.jpg",
    name: "Pura Jr",
    number: 3,
    position: "Defesa",
    age: 19,
    isCaptain: false,
    stats: { matches: 28, goals: 0, assists: 0 },
  },
];

export function Team() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <Title className="text-primary text-center mb-12">A Nossa Equipa</Title>

      <PlayersSection sectionName="Guarda-redes">
        {PLAYERS_DATA.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Defesas">
        {PLAYERS_DATA.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Atacantes">
        {PLAYERS_DATA.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>

      <PlayersSection sectionName="Equipa técnica">
        {PLAYERS_DATA.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </PlayersSection>
    </Container>
  );
}
