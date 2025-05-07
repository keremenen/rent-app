"use client";

import { useNeighborhoodContext } from "@/lib/hooks";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { CircleCheck } from "lucide-react";

export default function NeighborhoodFeatures() {
  const { selectedNeighborhood } = useNeighborhoodContext();
  const { features } = selectedNeighborhood!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Neighborhood Features</CardTitle>
        <CardDescription>
          Explore the features that make this neighborhood unique
        </CardDescription>
      </CardHeader>
      <CardContent>
        <NeighborhoodFeaturesGrid>
          {features.map((feature, index) => (
            <NeighborhoodFeatureItem key={index} features={feature} />
          ))}
        </NeighborhoodFeaturesGrid>
      </CardContent>
    </Card>
  );
}

function NeighborhoodFeaturesGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid gap-y-3 sm:grid-cols-2">{children}</div>;
}

function NeighborhoodFeatureItem({ features }: { features: string }) {
  return (
    <li className="flex items-center gap-x-2">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500/10">
        <CircleCheck className="h-3.5 w-3.5 text-green-700" />
      </div>
      <span>{features}</span>
    </li>
  );
}
