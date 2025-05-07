"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { useCityContext } from "@/lib/hooks";

export default function CityMinimap() {
  const { selectedCity } = useCityContext();
  const { commuteTime, walkScore } = selectedCity!;
  return (
    <Card className="sticky top-20">
      <CardHeader>
        <CardTitle>Location</CardTitle>
        <CardDescription>on the map</CardDescription>
      </CardHeader>
      <CardContent>
        {/* <CityMap city={city} neighborhoods={city.neighborhoods} /> */}

        <div className="grid grid-cols-2 gap-2 text-center">
          <div>
            <div className="text-primary text-2xl font-bold">{walkScore}</div>
            <div className="text-muted-foreground text-xs">Walk Score</div>
          </div>
          <div>
            <div className="text-primary text-2xl font-bold">{commuteTime}</div>
            <div className="text-muted-foreground text-xs">Avg Commute</div>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <Button className="w-full" asChild>
            <Link href={`/apartments`}>Browse All Apartments</Link>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link href="/contact">Contact a Local Agent</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
