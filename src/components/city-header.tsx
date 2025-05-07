"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useCityContext } from "@/lib/hooks";

export default function CityHeader() {
  const { selectedCity } = useCityContext();
  const { name } = selectedCity!;
  return (
    <section className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div>
        <h2 className="text-2xl font-bold">Discover {name}</h2>
        <p className="text-muted-foreground">
          Explore neighborhoods, attractions, and city information
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <Link href="/cities" aria-label="View all available cities">
            View All Cities
          </Link>
        </Button>
      </div>
    </section>
  );
}
