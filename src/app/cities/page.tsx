import { CityCard } from "@/components/city-card";
import { PageHeader } from "@/components/page-headers";

const cities = [
  {
    id: "new-york",
    name: "New York",
    state: "NY",
    description:
      "The city that never sleeps, offering world-class culture, dining, and entertainment.",
    image: "/placeholder-image.jpg",
    population: 8336817,
    avgRent: 3500,
    propertyCount: 12456,
    region: "northeast",
    featured: true,
  },
  {
    id: "los-angeles",
    name: "Los Angeles",
    state: "CA",
    description:
      "Entertainment capital with beautiful beaches, perfect weather, and diverse neighborhoods.",
    image: "/placeholder-image.jpg",
    population: 3979576,
    avgRent: 2800,
    propertyCount: 9872,
    region: "west",
    featured: true,
  },
  {
    id: "chicago",
    name: "Chicago",
    state: "IL",
    description:
      "Windy City known for architecture, deep-dish pizza, and vibrant cultural scene.",
    image: "/placeholder-image.jpg",
    population: 2693976,
    avgRent: 2200,
    propertyCount: 7654,
    region: "midwest",
    featured: true,
  },
  {
    id: "houston",
    name: "Houston",
    state: "TX",
    description:
      "Space City with diverse culture, world-class dining, and thriving job market.",
    image: "/placeholder-image.jpg",
    population: 2320268,
    avgRent: 1500,
    propertyCount: 6543,
    region: "south",
    featured: false,
  },
  {
    id: "phoenix",
    name: "Phoenix",
    state: "AZ",
    description:
      "Valley of the Sun offering desert beauty, outdoor activities, and growing tech scene.",
    image: "/placeholder-image.jpg",
    population: 1680992,
    avgRent: 1600,
    propertyCount: 5432,
    region: "west",
    featured: false,
  },
  {
    id: "philadelphia",
    name: "Philadelphia",
    state: "PA",
    description:
      "City of Brotherly Love rich in history, culture, and cheesesteaks.",
    image: "/placeholder-image.jpg",
    population: 1584064,
    avgRent: 1800,
    propertyCount: 4321,
    region: "northeast",
    featured: false,
  },
  {
    id: "san-antonio",
    name: "San Antonio",
    state: "TX",
    description:
      "Remember the Alamo! Historic city with rich Texan and Mexican heritage.",
    image: "/placeholder-image.jpg",
    population: 1547253,
    avgRent: 1300,
    propertyCount: 3210,
    region: "south",
    featured: false,
  },
  {
    id: "san-diego",
    name: "San Diego",
    state: "CA",
    description:
      "America's Finest City with perfect weather, beaches, and laid-back lifestyle.",
    image: "/placeholder-image.jpg",
    population: 1423851,
    avgRent: 2500,
    propertyCount: 4567,
    region: "west",
    featured: true,
  },
  {
    id: "dallas",
    name: "Dallas",
    state: "TX",
    description:
      "Big D offering southern hospitality, shopping, and thriving business district.",
    image: "/placeholder-image.jpg",
    population: 1343573,
    avgRent: 1700,
    propertyCount: 5678,
    region: "south",
    featured: false,
  },
  {
    id: "san-francisco",
    name: "San Francisco",
    state: "CA",
    description:
      "City by the Bay known for tech innovation, iconic landmarks, and progressive culture.",
    image: "/placeholder-image.jpg",
    population: 883305,
    avgRent: 3800,
    propertyCount: 3456,
    region: "west",
    featured: true,
  },
];

export default function CitiesPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Explore Cities"
        description="Discover the perfect city for your next home"
      />

      <main className="container px-4 py-8">
        {cities.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <h3 className="mb-2 text-lg font-medium">No cities found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search criteria
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <CityCard key={city.id} city={city} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
