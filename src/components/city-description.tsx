import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CityDescriptionProps = {
  city: {
    name: string;
    longDescription: string;
    statistics?: {
      population: number;
      area: number;
    } | null;
  };
};

export default function CityDescription({ city }: CityDescriptionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>About {city.name}</CardTitle>
        <CardDescription>Overview and history of the city</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{city.longDescription}</p>
        {city.statistics && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="bg-muted rounded-lg p-3 text-center">
              <p className="text-muted-foreground text-sm">Population</p>
              <p className="text-xl font-bold">{city.statistics.population}</p>
            </div>

            <div className="bg-muted rounded-lg p-3 text-center">
              <p className="text-muted-foreground text-sm">Area</p>
              <p className="text-xl font-bold">{city.statistics.area} sq mi</p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
