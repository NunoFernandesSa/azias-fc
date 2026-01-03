import { PlayerCard } from "@/components/features/team/PlayerCard";
import { Container, Title } from "@/components/index";

const PLAYERS_DATA = [
  {
    id: 1,
    imageUrl: "/images/players/player-1.jpg",
    name: "Ricardo",
    number: 10,
    position: "Avançado",
    age: 35,
    isCaptain: false,
    stats: { matches: 28, goals: 0, assists: 0 },
  },
  {
    id: 2,
    imageUrl: "/images/players/player-1.jpg",
    name: "Marcus",
    number: 10,
    position: "Defesa",
    age: 38,
    isCaptain: false,
    stats: { matches: 28, goals: 0, assists: 0 },
  },
  {
    id: 3,
    imageUrl: "/images/players/player-1.jpg",
    name: "Pura Jr",
    number: 10,
    position: "Defesa",
    age: 19,
    isCaptain: false,
    stats: { matches: 28, goals: 0, assists: 0 },
  },
];

export function Team() {
  return (
    <Container className="mx-3 lg:mx-16 my-30 lg:my-16 pt-6 lg:pt-0">
      <Title className="text-primary text-center">A Nossa Equipa</Title>

      <div className="px-2 xl:px-8 py-16 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {PLAYERS_DATA.map((player) => (
          <PlayerCard key={player.id} {...player} />
        ))}
      </div>
    </Container>
  );
}
