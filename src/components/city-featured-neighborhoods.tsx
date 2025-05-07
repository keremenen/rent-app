"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Building, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { useCityContext, useNeighborhoodContext } from "@/lib/hooks";

export default function CityFeaturedNeighborhoods() {
  const { selectedCity } = useCityContext();
  const { getNeighborhoodsByCityId } = useNeighborhoodContext();
  console.log("CityFeaturedNeighborhoods");

  const neighborhoods = getNeighborhoodsByCityId(selectedCity!.id);

  const { name } = selectedCity!;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Featured Neighborhoods</CardTitle>
        <CardDescription>Popular areas to live in {name}</CardDescription>
      </CardHeader>
      <CardContent>
        <NeighborhoodGrid>
          {neighborhoods.map((neighborhood) => (
            <NeighborhoodCard
              key={neighborhood.id}
              neighborhood={neighborhood}
            />
          ))}
        </NeighborhoodGrid>
      </CardContent>
    </Card>
  );
}

type NeighborhoodsProps = {
  children: React.ReactNode;
};

function NeighborhoodGrid({ children }: NeighborhoodsProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
  );
}

type Neighborhood = {
  id: string;
  cityId: string;
  name: string;
  description: string;
  thumbnail: string;
  averageRent: number;
  walkScore: number;
  commuteTime: number;
};

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
};

function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="relative">
        <Link href={`/neighborhoods/${neighborhood.id}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={neighborhood.thumbnail || "/placeholder.svg"}
              alt={neighborhood.name}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <Badge className="bg-primary absolute top-2 left-2">Popular</Badge>
          </div>
        </Link>
      </div>
      <NeighborhoodDetails neighborhood={neighborhood} />
    </div>
  );
}

function NeighborhoodDetails({ neighborhood }: NeighborhoodCardProps) {
  return (
    <div className="p-4">
      <Link
        href={`/neighborhoods/${neighborhood.id}`}
        className="hover:underline"
      >
        <h3 className="text-lg font-semibold">{neighborhood.name}</h3>
      </Link>
      <p className="text-muted-foreground mb-3 line-clamp-2 text-sm">
        {neighborhood.description}
      </p>
      <NeighborhoodStats />
      <NeighborhoodActions neighborhoodId={neighborhood.id} />
    </div>
  );
}

function NeighborhoodStats() {
  return (
    <div className="mb-3 grid grid-cols-2 gap-2 text-sm">
      <div className="flex items-center gap-1">
        <Building className="text-muted-foreground h-4 w-4" />
        <span>10 Properties</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-muted-foreground">Avg. Rent:</span>
        <span className="font-medium">$2000 /mo</span>
      </div>
    </div>
  );
}

function NeighborhoodActions({ neighborhoodId }: { neighborhoodId: string }) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" size="sm" asChild className="flex-1">
        <Link href={`/neighborhoods/${neighborhoodId}/explore`}>Explore</Link>
      </Button>
      <Button size="sm" asChild className="flex-1">
        <Link href={`/neighborhoods/${neighborhoodId}`}>
          <MapPin className="mr-1 h-3 w-3" />
          Apartments
        </Link>
      </Button>
    </div>
  );
}
