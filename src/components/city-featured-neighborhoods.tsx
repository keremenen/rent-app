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
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";
import {
  useApartmentContext,
  useCityContext,
  useNeighborhoodContext,
} from "@/lib/hooks";

export default function CityFeaturedNeighborhoods() {
  const { selectedCity } = useCityContext();
  const { getNeighborhoodsByCityId } = useNeighborhoodContext();

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
  const { id } = neighborhood;
  const {
    getTotalApartmentsInNeighborhood,
    getAverageApartmentsRentInNeighborhood,
  } = useApartmentContext();

  const totalApartments = getTotalApartmentsInNeighborhood(id);
  const averageRent = getAverageApartmentsRentInNeighborhood(id);
  return (
    <article className="overflow-hidden rounded-lg border">
      <NeighborhoodCardHeading
        id={neighborhood.id}
        thumbnail={neighborhood.thumbnail}
        name={neighborhood.name}
      />
      <NeighborhoodDetails>
        <NeighborhoodInfo
          id={neighborhood.id}
          name={neighborhood.name}
          description={neighborhood.description}
        />
        <NeighborhoodStats
          stats={{
            numberOfProperies: totalApartments,
            averageRent: averageRent,
          }}
        />
        <NeighborhoodActions id={neighborhood.id} />
      </NeighborhoodDetails>
    </article>
  );
}

type NeighborhoodCardHeadingProps = {
  id: string;
  thumbnail: string;
  name: string;
};

function NeighborhoodCardHeading({
  id,
  thumbnail,
  name,
}: NeighborhoodCardHeadingProps) {
  return (
    <div className="relative">
      <Link href={`/neighborhoods/${id}`}>
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          <Image
            src={thumbnail || "/placeholder.svg"}
            alt={`Thunbnail of ${name}`}
            fill
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <Badge className="bg-primary absolute top-2 left-2">Popular</Badge>
        </div>
      </Link>
    </div>
  );
}

type NeighborhoodDetailsProps = {
  children: React.ReactNode;
};

function NeighborhoodDetails({ children }: NeighborhoodDetailsProps) {
  return <div className="p-4">{children}</div>;
}

type NeighborhoodCardInfoProps = {
  id: string;
  name: string;
  description: string;
};

function NeighborhoodInfo({
  id,
  name,
  description,
}: NeighborhoodCardInfoProps) {
  return (
    <section className="mb-2">
      <Link href={`/neighborhoods/${id}`} className="hover:underline">
        <h3 className="text-lg font-semibold">{name}</h3>
      </Link>
      <p className="text-muted-foreground line-clamp-2 text-sm">
        {description}
      </p>
    </section>
  );
}

type NeighborhoodStatsProps = {
  stats: {
    numberOfProperies: number;
    averageRent: number;
  };
};

function NeighborhoodStats({
  stats: { numberOfProperies, averageRent },
}: NeighborhoodStatsProps) {
  return (
    <div className="mb-4 flex flex-col gap-2 text-xs">
      <div className="flex items-center gap-1">
        <span className="text-muted-foreground">Properties:</span>
        <span className="font-medium">{numberOfProperies}</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-muted-foreground">Avg. Rent:</span>
        <span className="font-medium">{averageRent}$</span>
      </div>
    </div>
  );
}

type NeighborhoodActionsProps = {
  id: string;
};

function NeighborhoodActions({ id }: NeighborhoodActionsProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" asChild size={"sm"}>
        <Link href={`/neighborhoods/${id}/explore`}>Explore</Link>
      </Button>
      <Button variant={"default"} asChild size={"sm"}>
        <Link href={`/neighborhoods/${id}`}>
          <MapPin className="mr-1 h-3 w-3" />
          Apartments
        </Link>
      </Button>
    </div>
  );
}
