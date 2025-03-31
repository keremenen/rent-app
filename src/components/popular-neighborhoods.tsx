import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const neighborhoods = [
  {
    id: "downtown",
    name: "Downtown",
    description:
      "Urban living with restaurants, nightlife, and cultural attractions.",
    propertyCount: 156,
    image: "/placeholder-image.jpg",
  },
  {
    id: "midtown",
    name: "Midtown",
    description:
      "Central location with shopping, dining, and entertainment options.",
    propertyCount: 124,
    image: "/placeholder-image.jpg",
  },
  {
    id: "uptown",
    name: "Uptown",
    description:
      "Quiet residential area with parks, schools, and family-friendly amenities.",
    propertyCount: 89,
    image: "/placeholder-image.jpg",
  },
];

export function PopularNeighborhoods() {
  return (
    <section className="bg-background py-16">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Popular Neighborhoods
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Explore the most sought-after neighborhoods in the city
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {neighborhoods.map((neighborhood) => (
            <Card key={neighborhood.id} className="overflow-hidden py-0">
              <div className="relative aspect-[3/2] w-full">
                <Link href={`/neighborhoods/${neighborhood.id}`}>
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </Link>
                <div className="absolute bottom-0 p-4 text-white">
                  <h3 className="mb-1 text-xl font-semibold">
                    {neighborhood.name}
                  </h3>
                  <p className="text-sm text-white/80">
                    {neighborhood.propertyCount} properties
                  </p>
                </div>
              </div>
              <CardContent className="p-4 pt-0">
                <p className="text-muted-foreground mb-4">
                  {neighborhood.description}
                </p>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/neighborhoods/${neighborhood.id}`}>
                    Explore {neighborhood.name}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/neighborhoods">
              View All Neighborhoods
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
