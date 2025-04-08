import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Ruler } from "lucide-react";

type ApartmentDescriptionProps = {
  description: string;
  features: string[];
};

export default function ApartmentDescription({
  description,
  features,
}: ApartmentDescriptionProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About this apartment</CardTitle>
        <CardDescription className="mt-2">
          <Badge
            variant="outline"
            className="border-green-200 bg-green-100 text-green-800"
          >
            Available
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{description}</p>
        <div>
          <h3 className="mb-2 font-semibold">Apartment Features</h3>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Ruler className="text-primary h-4 w-4" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Separator />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Lease Terms
            </h3>
            <p>12-month minimum</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Pet Policy
            </h3>
            <p>Pets allowed with deposit</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
