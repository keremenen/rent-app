import { Decimal } from "@prisma/client/runtime/library";
import { Building, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";

type City = {
  id: string;
  name: string;
  shortDescription: string;
  coverImage: string;
  area: Decimal;
  population: number;
};

type CityListProps = {
  cities: City[];
};

export default function CityList({ cities }: CityListProps) {
  if (cities.length === 0) {
    return <CitiesEmptyState />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}

function CitiesEmptyState() {
  return (
    <div className="rounded-lg border border-dashed bg-red-300/10 p-8 text-center">
      <h3 className="text-lg font-medium">No cities found</h3>
    </div>
  );
}

function CityCard({
  id,
  coverImage,
  name,
  shortDescription,
  population,
}: City) {
  return (
    <Card className="gap-2 overflow-hidden py-0">
      <div className="relative">
        <Link href={`/cities/${id}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={coverImage || "/placeholder.svg"}
              alt={`${name} skyline`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            <Badge className="bg-primary absolute top-2 left-2">Featured</Badge>
          </div>
        </Link>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Link href={`/cities/${id}`} className="hover:underline">
            <h3 className="text-xl font-semibold">{name}</h3>
          </Link>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {shortDescription}
        </p>
        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex flex-col items-center gap-1 rounded-md border p-2">
            <Users className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground text-xs">Population</span>
            <span className="font-medium">{formatNumber(population)}</span>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-md border p-2">
            <Building className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground text-xs">Avg. Rent</span>
            <span className="font-medium">$2 0000</span>
          </div>

          <div className="flex flex-col items-center gap-1 rounded-md border p-2">
            <Building className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground text-xs">Properties</span>
            <span className="font-medium">7</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        <Button variant="outline" asChild>
          <Link href={`/cities/${id}`}>Explore City</Link>
        </Button>
        <Button asChild>
          <Link href={`/cities/${id}/apartments`}>
            <MapPin className="mr-2 h-4 w-4" />
            Apartments
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
