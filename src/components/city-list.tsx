import { Decimal } from "@prisma/client/runtime/library";
import { CityCard } from "./city-card";

type City = {
  id: string;
  name: string;
  shortDescription: string;
  coverImage: string;
  area: Decimal;
};

type CityListProps = {
  cities: City[];
};

export default function CityList({ cities }: CityListProps) {
  if (cities.length === 0) {
    return <CitiesEmptyState />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}

function CitiesEmptyState() {
  return (
    <div className="rounded-lg border border-dashed bg-red-300/10 p-8 text-center">
      <h3 className="text-lg font-medium">No cities found</h3>
    </div>
  );
}
