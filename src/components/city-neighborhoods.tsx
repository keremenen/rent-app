import { Building, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type CityNeighborhoodsProps = {
  neighborhoods: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    createdAt: Date;
    updatedAt: Date;
    cityId: string;
  }[];
};

export function CityNeighborhoods({ neighborhoods }: CityNeighborhoodsProps) {
  // Show all neighborhoods, but put popular ones first

  return (
    <div
      id="neighborhoods"
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {neighborhoods.map((neighborhood) => (
        <div
          key={neighborhood.id}
          className="overflow-hidden rounded-lg border"
        >
          <div className="relative">
            <Link href={`/neighborhoods/${neighborhood.id}`}>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={neighborhood.imageUrl || "/placeholder.svg"}
                  alt={neighborhood.name}
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />

                <Badge className="bg-primary absolute top-2 left-2">
                  Popular
                </Badge>
              </div>
            </Link>
          </div>

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

            <div className="mb-3 grid grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-1">
                <Building className="text-muted-foreground h-4 w-4" />
                <span>{neighborhoods.length} Properties</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Avg. Rent:</span>
                <span className="font-medium">$2000 /mo</span>
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild className="flex-1">
                <Link href={`/neighborhoods/${neighborhood.id}/explore`}>
                  Explore
                </Link>
              </Button>
              <Button size="sm" asChild className="flex-1">
                <Link href={`/neighborhoods/${neighborhood.id}`}>
                  <MapPin className="mr-1 h-3 w-3" />
                  Apartments
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
