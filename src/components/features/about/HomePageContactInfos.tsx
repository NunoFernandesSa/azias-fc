import {
  Card,
  CardContent,
  CardHeader,
  Container,
} from "@/components/index.ts";

export function HomePageContactInfos() {
  return (
    <Container className="mx-3 lg:mx-16 my-16 grid grid-cols-1 xl:grid-cols-[3fr_7fr] gap-6">
      <Card className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <CardHeader>
          <p className="text-3xl font-bold">Informações de Contato</p>
        </CardHeader>
        <CardContent className="flex flex-col gap-6 text-lg font-semibold">
          <p>📲 +258 84 222 222</p>
          <p>📧 contato@azias-fc.com</p>
          <p className="flex flex-col">
            📍 Campo de Futebol da Manguela,<span> Azias Ponte da Barca</span>
          </p>
        </CardContent>
      </Card>

      <Card className="p-0 m-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2975.3848121857786!2d-8.365324423425053!3d41.77691977174226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd250f08fdba3cb3%3A0xc741083a73dd31e1!2sCampo%20de%20Futebol%20da%20Manguela!5e0!3m2!1sfr!2spt!4v1767123579062!5m2!1sfr!2spt"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-[350px] rounded-lg"
        ></iframe>
      </Card>
    </Container>
  );
}
