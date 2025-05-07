"use client";
import { Building, Car, DollarSign, Footprints } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useApartmentContext, useNeighborhoodContext } from "@/lib/hooks";

export function NeighborhoodStats({ id }: { id: string }) {
  const { selectedNeighborhood } = useNeighborhoodContext();
  const { getTotalApartmentsInNeighborhood } = useApartmentContext();

  const totalApartments = getTotalApartmentsInNeighborhood(id);
  const { averageRent, commuteTime, walkScore } = selectedNeighborhood!;

  const stats = [
    {
      icon: <DollarSign className="h-4 w-4" aria-hidden="true" />,
      label: "Average Rent",
      value: `$${averageRent.toLocaleString()}`,
    },

    {
      icon: <Footprints className="h-4 w-4" aria-hidden="true" />,
      label: "Walk Score",
      value: walkScore,
    },
    {
      icon: <Car className="h-4 w-4" aria-hidden="true" />,
      label: "Commute Time",
      value: `${commuteTime} min`,
    },
    {
      icon: <Building className="h-4 w-4" aria-hidden="true" />,
      label: "Total Apartments",
      value: totalApartments,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Stats</CardTitle>
        <CardDescription>
          Explore the neighborhood&apos;s features and statistics
        </CardDescription>
      </CardHeader>
      <CardContent>
        <NeighborhoodStatsGrid>
          {stats.map((stat, index) => (
            <NeighborhoodStatsItem
              key={index}
              icon={stat.icon}
              label={stat.label}
              value={stat.value}
            />
          ))}
        </NeighborhoodStatsGrid>
      </CardContent>
    </Card>
  );
}

function NeighborhoodStatsGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-6 sm:grid-cols-2">{children}</div>;
}

function NeighborhoodStatsItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-muted-foreground text-sm">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}
