import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/index.ts";

export function HomePageSponsorsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-3xl font-bold">Patrocinadores</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Patrocinadores</p>
      </CardContent>
    </Card>
  );
}
