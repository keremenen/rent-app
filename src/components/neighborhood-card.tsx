import { Building, DollarSign, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type NeighborhoodCardProps = {
  neighborhood: {
    id: string;
    name: string;
    description: string;
    image: string;
    propertyCount: number;
    avgRent: number;
    walkScore: number;
    transitScore: number;
    featured?: boolean;
    category: string;
  };
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  return (
    <Card className="overflow-hidden py-0">
      <div className="relative">
        <Link href={`/neighborhoods/${neighborhood.id}`}>
          <div className="relative aspect-[4/3] w-full">
            <Image
              src={neighborhood.image || "/placeholder.svg"}
              alt={neighborhood.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            {neighborhood.featured && (
              <Badge className="bg-primary absolute top-2 left-2">
                Featured
              </Badge>
            )}
          </div>
        </Link>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Link
            href={`/neighborhoods/${neighborhood.id}`}
            className="hover:underline"
          >
            <h3 className="text-xl font-semibold">{neighborhood.name}</h3>
          </Link>
          <Badge variant="outline" className="capitalize">
            {neighborhood.category}
          </Badge>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {neighborhood.description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Building className="text-muted-foreground h-4 w-4" />
            <span>{neighborhood.propertyCount} Properties</span>
          </div>

          <div className="flex items-center gap-1">
            <DollarSign className="text-muted-foreground h-4 w-4" />
            <span>Avg. ${neighborhood.avgRent}/mo</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-block h-4 w-4 rounded-full bg-green-500 text-center text-xs text-white">
              {neighborhood.walkScore}
            </span>
            <span>Walk Score</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-block h-4 w-4 rounded-full bg-blue-500 text-center text-xs text-white">
              {neighborhood.transitScore}
            </span>
            <span>Transit Score</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
        <Button variant="outline" asChild>
          <Link href={`/neighborhoods/${neighborhood.id}`}>Explore Area</Link>
        </Button>
        <Button asChild>
          <Link href={`/neighborhoods/${neighborhood.id}`}>
            <MapPin className="mr-2 h-4 w-4" />
            View Apartments
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
