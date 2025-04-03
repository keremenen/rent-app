import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { Link } from "lucide-react";

type CityMinimapProps = {
  lat: number;
  lng: number;
  cityName: string;
};

export default function CityMinimap({ lat, lng, cityName }: CityMinimapProps) {
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Location</CardTitle>
        <CardDescription>{cityName} on the map</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <CityMap city={city} neighborhoods={city.neighborhoods} /> */}

        <div className="mt-4 grid grid-cols-2 gap-2 text-center">
          <div>
            <div className="text-primary text-2xl font-bold">2</div>
            <div className="text-muted-foreground text-xs">Walk Score</div>
          </div>
          <div>
            <div className="text-primary text-2xl font-bold">2 min</div>
            <div className="text-muted-foreground text-xs">Avg Commute</div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Button className="w-full" asChild>
            <Link href={`/cities/gdansk/apartments`}>
              Browse All Apartments
            </Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/contact">Contact a Local Agent</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
