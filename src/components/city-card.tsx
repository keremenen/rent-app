import { Building, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type CityCardProps = {
  city: {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    imageUrl: string;
    statistics: {
      population: number;
      area: number;
      walkScore: number;
      commuteTime: number;
    };
  };
};

export function CityCard({ city }: CityTy) {
  return (
    <Card className="gap-2 overflow-hidden py-0">
      <div className="relative">
        <Link href={`/cities/${city.id}`}>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={city.imageUrl || "/placeholder.svg"}
              alt={`${city.name} skyline`}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            {/* {city.featured && (
              <Badge className="bg-primary absolute top-2 left-2">
                Featured
              </Badge>
            )} */}
          </div>
        </Link>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Link href={`/cities/${city.id}`} className="hover:underline">
            <h3 className="text-xl font-semibold">{city.name}</h3>
          </Link>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {city.description}
        </p>

        <div className="grid grid-cols-3 gap-2 text-sm">
          <div className="flex flex-col items-center gap-1 rounded-md border p-2">
            <Users className="text-muted-foreground h-4 w-4" />
            <span className="text-muted-foreground text-xs">Population</span>
            <span className="font-medium">
              {formatNumber(city.statistics.population)}
            </span>
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
          <Link href={`/cities/${city.id}`}>Explore City</Link>
        </Button>
        <Button asChild>
          <Link href={`/cities/${city.id}/apartments`}>
            <MapPin className="mr-2 h-4 w-4" />
            Apartments
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}
