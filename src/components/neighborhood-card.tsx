import { Building, DollarSign } from "lucide-react";
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
    thumbnail: string;
    averageRent: number;
    walkScore: number;
    commuteTime: number;
  };
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const {
    id,
    name,
    description,
    thumbnail,
    averageRent,
    walkScore,
    commuteTime,
  } = neighborhood;

  return (
    <Card className="overflow-hidden py-0">
      <div className="relative">
        <Link href={`/neighborhoods/${id}`}>
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={thumbnail || "/placeholder.svg"}
              alt={name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </div>

      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <Link href={`/neighborhoods/${id}`} className="hover:underline">
            <h3 className="text-xl font-semibold">{name}</h3>
          </Link>
          <Badge variant="outline" className="capitalize"></Badge>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-1">
            <Building className="text-muted-foreground h-4 w-4" />
          </div>

          <div className="flex items-center gap-1">
            <DollarSign className="text-muted-foreground h-4 w-4" />
            <span>Avg. ${averageRent}/mo</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-block h-4 w-4 rounded-full bg-green-500 text-center text-xs text-white">
              {walkScore}
            </span>
            <span>Walk Score</span>
          </div>

          <div className="flex items-center gap-1">
            <span className="inline-block h-4 w-4 rounded-full bg-blue-500 text-center text-xs text-white">
              {commuteTime}
            </span>
            <span>Transit Score</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="mt-auto flex p-4 pt-0">
        <Button asChild className="w-full">
          <Link href={`/neighborhoods/${id}`}>View Neighborhood</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
