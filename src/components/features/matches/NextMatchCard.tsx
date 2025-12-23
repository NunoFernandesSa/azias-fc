import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";

function NextMatchCard({
  title,
  cardContent,
  cardFooter,
}: {
  title: string;
  cardContent?: React.ReactNode;
  cardFooter?: React.ReactNode;
}) {
  return (
    <Card className="bg-primary text-primary-foreground">
      <CardHeader>
        <CardTitle className="text-3xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{cardContent}</CardContent>
      <CardFooter className="flex flex-col items-start justify-center gap-2">
        {cardFooter}
      </CardFooter>
    </Card>
  );
}

export { NextMatchCard };
