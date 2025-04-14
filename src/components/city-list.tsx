import { CityCard } from "./city-card";

type CityListProps = {
  cities: City[];
};

export default function CityList({ cities }: CityListProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {cities.map((city) => (
        <CityCard key={city.id} city={city} />
      ))}
    </div>
  );
}

export function CitiesEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <h3 className="mb-2 text-lg font-medium">No cities found</h3>
      <p className="text-muted-foreground">
        Try adjusting your search criteria
      </p>
    </div>
  );
}
