import { Decimal } from "@prisma/client/runtime/library";
import { Building, MapPin, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { formatNumber } from "@/lib/utils";
import { JSX } from "react";

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
  return cities.length === 0 ? (
    <CitiesEmptyState />
  ) : (
    <CityGrid cities={cities} />
  );
}

function CitiesEmptyState() {
  return (
    <div className="rounded-lg border border-dashed bg-red-300/10 p-8 text-center">
      <h3 className="text-lg font-medium">No cities found</h3>
    </div>
  );
}

function CityGrid({ cities }: { cities: City[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}

function CityCard({ city }: { city: City }) {
  const { id, coverImage, name, shortDescription, population } = city;

  return (
    <Card className="gap-2 overflow-hidden py-0">
      <CityCardImage id={id} coverImage={coverImage} name={name} />
      <CardContent className="p-4">
        <CityCardHeader id={id} name={name} />
        <CityCardDescription shortDescription={shortDescription} />
        <CityCardStats population={population} />
      </CardContent>
      <CityCardFooter id={id} />
    </Card>
  );
}

function CityCardImage({
  id,
  coverImage,
  name,
}: {
  id: string;
  coverImage: string;
  name: string;
}) {
  return (
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
  );
}

function CityCardHeader({ id, name }: { id: string; name: string }) {
  return (
    <div className="mb-2 flex items-center justify-between">
      <Link href={`/cities/${id}`} className="hover:underline">
        <h3 className="text-xl font-semibold">{name}</h3>
      </Link>
    </div>
  );
}

function CityCardDescription({
  shortDescription,
}: {
  shortDescription: string;
}) {
  return (
    <p className="text-muted-foreground mb-4 line-clamp-2 text-sm">
      {shortDescription}
    </p>
  );
}

function CityCardStats({ population }: { population: number }) {
  return (
    <div className="flex gap-2 text-sm">
      <StatCard
        icon={<Users className="text-muted-foreground h-4 w-4" />}
        label="Population"
        value={formatNumber(population)}
      />
      <StatCard
        icon={<Building className="text-muted-foreground h-4 w-4" />}
        label="Avg. Rent"
        value="$2 0000"
      />
      <StatCard
        icon={<Building className="text-muted-foreground h-4 w-4" />}
        label="Properties"
        value="7"
      />
    </div>
  );
}

function StatCard({
  icon,
  label,
  value,
}: {
  icon: JSX.Element;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 rounded-md border p-2">
      {icon}
      <span className="text-muted-foreground text-xs">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function CityCardFooter({ id }: { id: string }) {
  return (
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
  );
}
