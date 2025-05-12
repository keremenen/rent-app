"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NeighborhoodEssential } from "@/lib/types";
import SectionHeader from "./section-header";
import { useNeighborhoodContext } from "@/lib/hooks";

type PopularNeighborhoodsProps = {
  display: string[];
};

export function PopularNeighborhoods({ display }: PopularNeighborhoodsProps) {
  const { neighborhoods } = useNeighborhoodContext();

  const filteredNeighborhoods = neighborhoods.filter((neighborhood) =>
    display.some((item) => neighborhood.id.includes(item)),
  );

  return (
    <section className="bg-background py-16">
      <div className="container px-4">
        <SectionHeader
          title={"Popular Neighborhoods"}
          description="Explore the most sought-after neighborhoods in the city"
        />

        {filteredNeighborhoods && filteredNeighborhoods.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-3">
            {filteredNeighborhoods.map((neighborhood) => (
              <NeighborhoodCard
                key={neighborhood.id}
                neighborhoodDetails={neighborhood}
              />
            ))}
          </div>
        ) : (
          <EmtpyContainer />
        )}
      </div>

      <div className="mt-10 flex justify-center">
        <Button asChild>
          <Link href="/neighborhoods">
            View All Neighborhoods
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

type NeighborhoodCardProps = {
  neighborhoodDetails: NeighborhoodEssential;
};

function NeighborhoodCard(neighborhood: NeighborhoodCardProps) {
  const { id, name, description, thumbnail } = neighborhood.neighborhoodDetails;
  return (
    <Card key={id} className="overflow-hidden py-0">
      <div className="relative aspect-[3/2] w-full">
        <Link href={`/neighborhoods/${id}`}>
          <Image
            src={thumbnail}
            alt={name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        </Link>
        <div className="relative flex h-full items-center text-white">
          <h3 className="mb-1 w-full bg-black/20 py-6 text-center text-2xl font-semibold uppercase backdrop-blur-[1px]">
            {name}
          </h3>
        </div>
      </div>
      <CardContent className="p-4 pt-0">
        <p className="text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" className="w-full" asChild>
          <Link href={`/neighborhoods/${id}`}>Explore {name}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

function EmtpyContainer() {
  return (
    <div className="mb-6 flex items-center justify-center">
      <h2>no neighborhoods found</h2>
    </div>
  );
}
