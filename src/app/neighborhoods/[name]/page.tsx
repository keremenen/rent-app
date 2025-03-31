import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { NeighborhoodHeader } from "@/components/neighborhood-header";
import { NeighborhoodStats } from "@/components/neighborhood-stats";
import SortByOptions from "@/components/sort-by-options";

const neighborhoodApartments = [
  {
    id: "101",
    title: "Luxury Studio in Downtown",
    address: `123 Main St, New York`,
    price: 1800,
    bedrooms: "Studio",
    bathrooms: 1,
    squareFeet: 650,
    image: "/placeholder-image.jpg",
    available: true,
    availableFrom: "2025-05-01",
    isFavorite: true,
    amenities: ["Gym", "Rooftop", "Doorman", "Elevator"],
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    id: "202",
    title: "Modern 1-Bedroom with Balcony",
    address: `456 Park Ave,  New York`,
    price: 2200,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    image: "/placeholder-image.jpg",
    available: true,
    availableFrom: "2025-04-15",
    isFavorite: false,
    amenities: ["Balcony", "Dishwasher", "Washer/Dryer", "Hardwood Floors"],
    latitude: 40.758,
    longitude: -73.9855,
  },
  {
    id: "303",
    title: "Spacious 2-Bedroom Corner Unit",
    address: `789 Broadway,  New York`,
    price: 3500,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    image: "/placeholder-image.jpg",
    available: true,
    availableFrom: "2025-06-01",
    isFavorite: false,
    amenities: ["Corner Unit", "Washer/Dryer", "Dishwasher", "Walk-in Closet"],
    latitude: 40.7831,
    longitude: -73.9712,
  },
  {
    id: "404",
    title: "Renovated 3-Bedroom with Views",
    address: `101 River Rd,  New York`,
    price: 4200,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    image: "/placeholder-image.jpg",
    available: false,
    availableFrom: "2025-07-01",
    isFavorite: false,
    amenities: ["River Views", "Renovated Kitchen", "Washer/Dryer", "Parking"],
    latitude: 40.8023,
    longitude: -73.9631,
  },
  {
    id: "505",
    title: "Cozy 1-Bedroom in Brooklyn",
    address: `202 Bedford Ave,  New York`,
    price: 2400,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 700,
    image: "/placeholder-image.jpg",
    available: true,
    availableFrom: "2025-05-15",
    isFavorite: true,
    amenities: ["Roof Deck", "Bike Storage", "Laundry", "Pets Allowed"],
    latitude: 40.7193,
    longitude: -73.9573,
  },
];

const neighborhood = {
  id: 1,
  name: "DownTown",
  description:
    "A vibrant neighborhood with excellent dining, shopping, and entertainment options. Close to public transportation and major employment centers.",
  image: "/placeholder.svg?height=600&width=1200",
  stats: {
    avgRent: 2800,
    walkScore: 92,
    transitScore: 95,
    bikeScore: 85,
    population: 45000,
    medianIncome: 85000,
  },
  features: [
    "Close to public transportation",
    "Excellent dining options",
    "Vibrant nightlife",
    "Parks and green spaces",
    "Shopping districts",
    "Cultural attractions",
  ],
  latitude: 40.7128,
  longitude: -74.006,
};
export default function NeighborhoodPage() {
  return (
    <div className="bg-background min-h-screen">
      <NeighborhoodHeader
        neighborhood={{
          id: "downtown",
          name: "Downtown",
          description:
            "Downtown is the bustling heart of the city, known for its vibrant culture, shopping, and dining options. It's a hub for business and entertainment, making it a prime location for urban living.",
          image: "/placeholder-image.jpg",
        }}
        apartmentCount={neighborhoodApartments.length}
        viewMode={"list"}
      />
      <main className="container px-4 py-8">
        <div className="mb-6 space-y-6">
          <NeighborhoodStats neighborhood={neighborhood} />
          <div className="text-muted-foreground text-sm">
            {neighborhoodApartments.length}{" "}
            {neighborhoodApartments.length === 1 ? "apartment" : "apartments"}{" "}
            available
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            <SortByOptions sortOption={"priceAsc"} />
            <ApartmentFilters />
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {neighborhoodApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
