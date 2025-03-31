import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import { PageHeader } from "@/components/page-headers";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const neighborhoods = [
  {
    id: "downtown",
    name: "Downtown",
    description:
      "Urban living with restaurants, nightlife, and cultural attractions.",
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
    image: "/placeholder.svg?height=300&width=400",
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
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-md">
            <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
            <Input
              placeholder="Search neighborhoods..."
              className="pl-9"
              value={"searchQuery"}
              onChange={() => {}}
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Sort by:</span>
            <Select value={"popular"} onValueChange={() => {}}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="nameAsc">Name (A-Z)</SelectItem>
                <SelectItem value="nameDesc">Name (Z-A)</SelectItem>
                <SelectItem value="priceAsc">
                  Avg. Rent (Low to High)
                </SelectItem>
                <SelectItem value="priceDesc">
                  Avg. Rent (High to Low)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs
          defaultValue="all"
          value={"all"}
          onValueChange={() => {}}
          className="mb-8"
        >
          <TabsList className="mb-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="featured">Featured</TabsTrigger>
            <TabsTrigger value="urban">Urban</TabsTrigger>
            <TabsTrigger value="residential">Residential</TabsTrigger>
            <TabsTrigger value="trendy">Trendy</TabsTrigger>
            <TabsTrigger value="affordable">Affordable</TabsTrigger>
          </TabsList>

          <TabsContent value={"all"}>
            {neighborhoods.length === 0 ? (
              <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
                <h3 className="mb-2 text-lg font-medium">
                  No neighborhoods found
                </h3>
                <p className="text-muted-foreground">
                  Try adjusting your search criteria
                </p>
                {/* {searchQuery && (
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => setSearchQuery("")}
                  >
                    Clear Search
                  </Button>
                )} */}
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {neighborhoods.map((neighborhood) => (
                  // <NeighborhoodCard
                  //   key={neighborhood.id}
                  //   neighborhood={neighborhood}
                  // />
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
