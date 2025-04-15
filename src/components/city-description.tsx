import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Decimal } from "@prisma/client/runtime/library";

type CityDescriptionProps = {
  cityName: string;
  cityDescription: string;
  population: number;
  area: Decimal;
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
        <section>{cityDescription}</section>
        <CityStats population={population} area={area} />
      </CardContent>
    </Card>
  );
}

type CityStatsProps = {
  population: number;
  area: Decimal;
};

function CityStats({ population, area }: CityStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <StatCard label="Population" value={population.toString()} />
      <StatCard label="Area" value={`${area.toString()} m²`} />
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="bg-muted rounded-lg p-3 text-center">
      <p className="text-muted-foreground text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
