"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NeighborhoodCard } from "@/components/neighborhood-card";

type NeighborhoodsListProps = {
  neighborhoods: {
    id: string;
    name: string;
    description: string;
    image: string;
    propertyCount: number;
    avgRent: number;
    walkScore: number;
    transitScore: number;
    category: string;
    featured?: boolean;
  }[];
};

export default function NeighborhoodsList({
  neighborhoods,
}: NeighborhoodsListProps) {
  return (
    <section>
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
              <SelectItem value="priceAsc">Avg. Rent (Low to High)</SelectItem>
              <SelectItem value="priceDesc">Avg. Rent (High to Low)</SelectItem>
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
                <NeighborhoodCard
                  key={neighborhood.id}
                  neighborhood={neighborhood}
                />
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}
