import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
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
      <StatCard
        label="Population"
        value={population.toString()}
        className={"bg-blue-300/10"}
      />
      <StatCard
        label="Area"
        value={`${area.toString()} m²`}
        className="bg-blue-300/10"
      />
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
  className?: string;
};

function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div className={`${cn("bg-muted rounded-lg p-3 text-center", className)}`}>
      <p className="text-muted-foreground text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </div>
  );
}
