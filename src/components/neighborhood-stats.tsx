import { Building, Car, DollarSign, Users, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type NeighborhoodStatsProps = {
  averageRent: number;
  walkScore: number;
  population: number;
  commuteTime: number;
  features: string[];
};

export function NeighborhoodStats({
  averageRent,
  commuteTime,
  population,
  walkScore,
  features,
}: NeighborhoodStatsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="p-0">
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Neighborhood Stats</h2>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <DollarSign className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Average Rent</p>
                <p className="font-medium">${averageRent}/month</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Car className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Transit Score</p>
                <p className="font-medium">{Number(commuteTime)}/100</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Users className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Population</p>
                <p className="font-medium">{population}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                <Wallet className="text-primary h-5 w-5" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Walk Score</p>
                <p className="font-medium">${Number(walkScore)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="p-0">
        <CardContent className="p-6">
          <h2 className="mb-4 text-xl font-semibold">Neighborhood Features</h2>

          <ul className="grid gap-2 sm:grid-cols-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <div className="bg-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
                  <Building className="text-primary h-3.5 w-3.5" />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
