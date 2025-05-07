"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useCityContext } from "@/lib/hooks";

export default function CityDescription() {
  const { selectedCity } = useCityContext();
  const { name, longDescription, population, area } = selectedCity!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>About {name}</CardTitle>
        <CardDescription>Overview and history of the city</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <section>{longDescription}</section>
        <CityStats
          stats={[
            { label: "Population", value: population },
            { label: "Area", value: area },
          ]}
        />
      </CardContent>
    </Card>
  );
}

type CityStatsProps = {
  stats: {
    label: string;
    value: number;
  }[];
};

function CityStats({ stats }: CityStatsProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          label={stat.label}
          value={stat.value.toLocaleString()}
        />
      ))}
    </div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
};

function StatCard({ label, value }: StatCardProps) {
  return (
    <section className={"bg-muted rounded-lg p-3 text-center"}>
      <p className="text-muted-foreground text-sm">{label}</p>
      <p className="text-xl font-bold">{value}</p>
    </section>
  );
}
