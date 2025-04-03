import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CityDescriptionProps = {
  cityName: string;
  cityDescription: string;
  population: number;
  area: number;
};

export default function CityDescription({
  cityName,
  cityDescription,
  population,
  area,
}: CityDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About {cityName}</CardTitle>
        <CardDescription>Overview and history of the city</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p>{cityDescription}</p>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-muted-foreground text-sm">Population</p>
            <p className="text-xl font-bold">{population}</p>
          </div>

          <div className="bg-muted rounded-lg p-3 text-center">
            <p className="text-muted-foreground text-sm">Area</p>
            <p className="text-xl font-bold">{area} m²</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
