import Link from "next/link";
import { Button } from "./ui/button";

type CityHeaderProps = {
  cityName: string;
  cityId: string;
};

export default function CityHeader({ cityName, cityId }: CityHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:justify-between">
      <div>
        <h2 className="text-2xl font-bold">Discover {cityName}</h2>
        <p className="text-muted-foreground">
          Explore neighborhoods, attractions, and city information
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <Link href="/cities">View All Cities</Link>
        </Button>
        <Button asChild>
          <Link href={`/cities/${cityId}/apartments`}>Browse Apartments</Link>
        </Button>
      </div>
    </div>
  );
}
