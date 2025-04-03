import Link from "next/link";
import { Button } from "./ui/button";

export default function CityHeader({ cityName }: { cityName: string }) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:justify-between">
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
          <Link href={`/cities/2/apartments`}>Browse Apartments</Link>
        </Button>
      </div>
    </div>
  );
}
