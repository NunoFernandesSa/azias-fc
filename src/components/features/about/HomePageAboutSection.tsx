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

        <CardContent className="text-primary grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
          <p className="font-semibold">
            Fundado em Azias, Ponte da Barça, o Azias FC nasceu da paixão pelo
            futebol e da vontade de unir a comunidade local em torno de valores
            sólidos: espírito de equipa, respeito e compromisso.
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
