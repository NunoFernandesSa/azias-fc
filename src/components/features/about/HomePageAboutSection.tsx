import { Card, CardHeader, CardTitle, CardContent } from "@/components/index";

export function HomePageAboutSection() {
  return (
    <Card className="text-card-foreground items-center relative bg-transparent gap-6">
      {/* background image */}
      <img
        src="/history-img.jpg"
        alt="imagem de bolas em um relvado"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-20 rounded-lg"
      />

      <div>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">A nossa história</CardTitle>
        </CardHeader>

        <CardContent className="text-primary text-lg font-semibold grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <div>
            <p>
              Fundado em Azias, Ponte da Barça, o Azias FC nasceu da paixão pelo
              futebol e da vontade de unir a comunidade local em torno de
              valores sólidos: espírito de equipa, respeito e compromisso.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            <div className="text-primary text-lg font-semibold">
              <span className="text-primary bg-secondary p-3 rounded">
                2023
              </span>
              <span className="text-primary bg-white p-3 rounded">
                ⚽ Fundação do club
              </span>
            </div>
            <div className="text-primary text-lg font-semibold">
              <span className="text-primary bg-secondary p-3 rounded">
                2024
              </span>
              <span className="text-primary bg-white p-3 rounded">
                🏆 Entrada na INATEL
              </span>
            </div>
            <div className="text-primary text-lg font-semibold">
              <span className="text-primary bg-secondary p-3 rounded">
                2026
              </span>
              <span className="text-primary bg-white p-3 rounded">
                🚀 Crescimento e novos objetivos
              </span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
