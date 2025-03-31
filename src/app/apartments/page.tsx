import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ShowFiltersButton from "@/components/show-filters-button";
import SortByOptions from "@/components/sort-by-options";

const exampleApartments = [
  {
    id: "apt-101",
    title: "Luxury Studio in Downtown",
    address: "123 Main St, Downtown",
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
    id: "apt-202",
    title: "Modern 1-Bedroom with Balcony",
    address: "456 Park Ave, Midtown",
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
    id: "apt-303",
    title: "Spacious 2-Bedroom Corner Unit",
    address: "789 Broadway, Upper West Side",
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
    id: "apt-404",
    title: "Renovated 3-Bedroom with Views",
    address: "101 River Rd, Riverside",
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
    id: "apt-505",
    title: "Cozy 1-Bedroom in Brooklyn",
    address: "202 Bedford Ave, Williamsburg",
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
  {
    id: "apt-606",
    title: "Luxury 2-Bedroom Penthouse",
    address: "303 W 42nd St, Theater District",
    price: 5500,
    bedrooms: 2,
    bathrooms: 2.5,
    squareFeet: 1600,
    image: "/placeholder-image.jpg",
    available: true,
    availableFrom: "2025-06-15",
    isFavorite: false,
    amenities: ["Penthouse", "Terrace", "Concierge", "Gym", "Pool"],
    latitude: 40.759,
    longitude: -73.9845,
  },
];

export default function ApartmentsListPage() {
  return (
    <div className="bg-background min-h-screen">
      <ApartmentListHeader
        totalCount={exampleApartments.length}
        viewMode={"list"}
        onViewModeChange={() => {}}
      />
      <main className="container px-4 py-8">
        <ShowFiltersButton length={exampleApartments.length} />

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            <SortByOptions sortOption={"priceAsc"} />
            <ApartmentFilters />
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {exampleApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
