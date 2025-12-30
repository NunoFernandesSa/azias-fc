import { Card, CardHeader, CardTitle, CardContent } from "@/components/index";

export function HomePageAboutSection() {
  return (
    <Card className="text-card-foreground p-6 flex flex-col items-center gap-6 relative bg-transparent">
      {/* background image */}
      <img
        src="/history-img.jpg"
        alt="imagem de bolas em um relvado"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-20 rounded-lg"
      />
      {/* content */}
      <div className="">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">A nossa história</CardTitle>
        </CardHeader>

        <CardContent className="text-primary text-lg font-semibold flex flex-col py-6 px-0 md:px-6">
          <p>
            Fundado em AZIAS, Ponte da Barca, o Azias FC é um clube empenhado em
            promoção do futebol local, do espírito de equipa e dos valores
            desportivos.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </CardContent>
      </div>
    </Card>
  );
}
