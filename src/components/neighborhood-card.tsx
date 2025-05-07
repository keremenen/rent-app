import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

type NeighborhoodCardProps = {
  neighborhood: {
    id: string;
    name: string;
    cityId: string;
    description: string;
    thumbnail: string;
    averageRent: number;
    walkScore: number;
    commuteTime: number;
  };
};

export function NeighborhoodCard({ neighborhood }: NeighborhoodCardProps) {
  const { id, name, description, thumbnail, walkScore, commuteTime } =
    neighborhood;

  return (
    <Card className="gap-y-4 overflow-hidden py-0">
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

      <CardContent className="px-4 py-0">
        <div className="mb-2 flex items-center justify-between">
          <Link href={`/neighborhoods/${id}`} className="hover:underline">
            <h3 className="text-xl font-semibold">
              {name}
              <span className="text-sm font-light"></span>
            </h3>
          </Link>
          <Badge variant="outline" className="capitalize"></Badge>
        </div>

        <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center justify-center gap-1">
            <span className="flex h-6 w-8 items-center justify-center rounded-full bg-green-700/60 text-center text-xs text-white">
              {walkScore}
            </span>
            <span>Walk Score</span>
          </div>

          <div className="flex items-center justify-center gap-1">
            <span className="flex h-6 w-8 items-center justify-center rounded-full bg-blue-700/60 text-center text-xs text-white">
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
