"use client";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { NeighborhoodCard } from "@/components/neighborhood-card";
import { useNeighborhoodContext, useSearchContext } from "@/lib/hooks";

export default function NeighborhoodsList() {
  const { searchQuery, handleSearchQueryChange } = useSearchContext();
  const { neighborhoods } = useNeighborhoodContext();

  const filteredNeighborhoods = neighborhoods.filter((neighborhood) =>
    neighborhood.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <section>
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-md">
          <Search className="text-muted-foreground absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
          <Input
            placeholder="Search neighborhoods..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => {
              handleSearchQueryChange(e.target.value);
            }}
          />
        </div>
      </div>

      {filteredNeighborhoods.length === 0 ? (
        <EmptyContainer />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredNeighborhoods.map((neighborhood) => (
            <NeighborhoodCard
              key={neighborhood.id}
              neighborhood={neighborhood}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function EmptyContainer() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <h3 className="mb-2 text-lg font-medium">No neighborhoods found</h3>
      <p className="text-muted-foreground">
        Try adjusting your search criteria
      </p>
    </div>
  );
}
