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

export default function ApartmentDescription() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About this apartment</CardTitle>
        <CardDescription className="mt-2">
          {apartment.available ? (
            <Badge
              variant="outline"
              className="border-green-200 bg-green-100 text-green-800"
            >
              Available
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="border-red-200 bg-red-100 text-red-800"
            >
              Not Available
            </Badge>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{apartment.description}</p>
        <div>
          <h3 className="mb-2 font-semibold">Apartment Features</h3>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {apartment.features.map((feature, index) => (
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
            <p>{apartment.leaseTerms}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Pet Policy
            </h3>
            <p>{apartment.petPolicy}</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Available From
            </h3>
            <p>
              {new Date(apartment.availableFrom).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
