import { PageHeader } from "@/components/page-headers";
import NeighborhoodGuide from "@/components/neighborhood-guide";
import NeighborhoodsList from "@/components/neighborhoods-list";

const neighborhoods = [
  {
    id: "downtown",
    name: "Downtown",
    description:
      "Urban living with restaurants, nightlife, and cultural attractions.",
    image: "/placeholder-image.jpg",
    propertyCount: 156,
    avgRent: 2800,
    walkScore: 95,
    transitScore: 98,
    category: "urban",
    featured: true,
  },
  {
    id: "midtown",
    name: "Midtown",
    description:
      "Central location with shopping, dining, and entertainment options.",
    image: "/placeholder-image.jpg",
    propertyCount: 124,
    avgRent: 2500,
    walkScore: 92,
    transitScore: 95,
    category: "urban",
    featured: true,
  },
  {
    id: "uptown",
    name: "Uptown",
    description:
      "Quiet residential area with parks, schools, and family-friendly amenities.",
    image: "/placeholder-image.jpg",
    propertyCount: 89,
    avgRent: 2200,
    walkScore: 85,
    transitScore: 90,
    category: "residential",
    featured: false,
  },
  {
    id: "brooklyn",
    name: "Brooklyn",
    description:
      "Trendy area with diverse culture, art galleries, and innovative dining.",
    image: "/placeholder-image.jpg",
    propertyCount: 210,
    avgRent: 2400,
    walkScore: 90,
    transitScore: 85,
    category: "trendy",
    featured: true,
  },
  {
    id: "queens",
    name: "Queens",
    description:
      "Diverse community with international cuisine and cultural attractions.",
    image: "/placeholder-image.jpg",
    propertyCount: 175,
    avgRent: 2100,
    walkScore: 82,
    transitScore: 80,
    category: "diverse",
    featured: false,
  },
  {
    id: "bronx",
    name: "Bronx",
    description:
      "Historic area with parks, museums, and affordable housing options.",
    image: "/placeholder-image.jpg",
    propertyCount: 120,
    avgRent: 1900,
    walkScore: 78,
    transitScore: 75,
    category: "affordable",
    featured: false,
  },
  {
    id: "harlem",
    name: "Harlem",
    description:
      "Rich cultural heritage with historic sites, music venues, and soul food.",
    image: "/placeholder-image.jpg",
    propertyCount: 95,
    avgRent: 2300,
    walkScore: 88,
    transitScore: 85,
    category: "cultural",
    featured: true,
  },
  {
    id: "financial-district",
    name: "Financial District",
    description:
      "Business hub with historic landmarks, luxury apartments, and waterfront views.",
    image: "/placeholder-image.jpg",
    propertyCount: 110,
    avgRent: 3200,
    walkScore: 92,
    transitScore: 95,
    category: "urban",
    featured: false,
  },
  {
    id: "greenwich-village",
    name: "Greenwich Village",
    description:
      "Bohemian area with historic charm, universities, and vibrant nightlife.",
    image: "/placeholder-image.jpg",
    propertyCount: 85,
    avgRent: 3000,
    walkScore: 96,
    transitScore: 90,
    category: "trendy",
    featured: true,
  },
];

export default function NeighborhoodsListPage() {
  return (
    <div className="bg-background min-h-screen">
      <PageHeader
        title="Explore Neighborhoods"
        description="Discover the perfect neighborhood for your lifestyle and preferences"
      />

      <main className="container px-4 py-8">
        <NeighborhoodsList neighborhoods={neighborhoods} />
        <NeighborhoodGuide />
      </main>
    </div>
  );
}
