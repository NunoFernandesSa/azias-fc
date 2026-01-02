import { Card } from "@/components/index";

export function CalendarFilterComponent() {
  return (
    <Card className="grid grid-cols-1 gap-4 md:grid-cols-4 xl:grid-cols-6 px-3">
      <div className="flex flex-col gap-1">
        <label htmlFor="month" className="text-sm font-medium text-primary-500">
          Filtrar por mês
        </label>

        <select
          name="month"
          id="month"
          className="
          w-full
          rounded-lg
          bg-primary
          px-4
          py-2
          text-white
          shadow-sm
          outline-none
          transition
          hover:bg-primary/90
          focus:ring-2
          focus:ring-secondary
          cursor-pointer
        "
        >
          <option value="">Todos os meses</option>
          <option value="01">Janvier</option>
          <option value="02">Février</option>
          <option value="03">Mars</option>
          <option value="04">Avril</option>
          <option value="05">Mai</option>
          <option value="06">Juin</option>
          <option value="07">Juillet</option>
          <option value="08">Août</option>
          <option value="09">Septembre</option>
          <option value="10">Octobre</option>
          <option value="11">Novembre</option>
          <option value="12">Décembre</option>
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="month" className="text-sm font-medium text-primary-500">
          Filtrar por jogos em casa
        </label>

        <select
          name="month"
          id="month"
          className="
          w-full
          rounded-lg
          bg-primary
          px-4
          py-2
          text-primary-foreground
          shadow-sm
          outline-none
          transition
          hover:bg-primary/90
          focus:ring-2
          focus:ring-secondary
          cursor-pointer
        "
        >
          <option value="">Todos os jogos</option>
          <option value="playAtHome">Em casa</option>
          <option value="playAway">Fora</option>
        </select>
      </div>
    </Card>
  );
}
