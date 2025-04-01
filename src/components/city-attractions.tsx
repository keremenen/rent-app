import { Landmark, Trees, Ticket, Utensils, Building } from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type CityAttractionsProps = {
  attractions: Array<{
    name: string;
    description: string;
    image: string;
    category: string;
  }>;
  className?: string;
};

export function CityAttractions({
  attractions,
  className,
}: CityAttractionsProps) {
  return (
    <Card id="attractions" className={cn(className)}>
      <CardHeader>
        <CardTitle>City Attractions</CardTitle>
        <CardDescription>
          Popular places to visit and things to do
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.name} attraction={attraction} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function AttractionCard({
  attraction,
}: {
  attraction: {
    name: string;
    description: string;
    image: string;
    category: string;
  };
}) {
  return (
    <div className="overflow-hidden rounded-lg border">
      <div className="relative aspect-[3/2] w-full">
        <Image
          src={attraction.image || "/placeholder.svg"}
          alt={attraction.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="mb-1 flex items-center gap-2">
          <div className="bg-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
            {getCategoryIcon(attraction.category)}
          </div>
          <h3 className="font-medium">{attraction.name}</h3>
        </div>
        <p className="text-muted-foreground text-sm">
          {attraction.description}
        </p>
      </div>
    </div>
  );
}

function getCategoryIcon(category: string) {
  switch (category.toLowerCase()) {
    case "culture":
      return <Landmark className="text-primary h-4 w-4" />;
    case "outdoors":
      return <Trees className="text-primary h-4 w-4" />;
    case "entertainment":
      return <Ticket className="text-primary h-4 w-4" />;
    case "history":
      return <Building className="text-primary h-4 w-4" />;
    case "dining":
      return <Utensils className="text-primary h-4 w-4" />;
    case "education":
      return <Building className="text-primary h-4 w-4" />;
    default:
      return <Landmark className="text-primary h-4 w-4" />;
  }
}
