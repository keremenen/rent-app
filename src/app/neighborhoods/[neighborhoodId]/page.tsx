"use client";

import { NeighborhoodHero } from "@/components/neighborhood-hero";
import { NeighborhoodStats } from "@/components/neighborhood-stats";
import { useNeighborhoodContext } from "@/lib/hooks";
import { useEffect } from "react";

type NeighborhoodParams = {
  params: Promise<{ neighborhoodId: string }>;
};

export default function NeighborhoodPage({ params }: NeighborhoodParams) {
  const tmpNeighborHoodId = "srodmiescie-gdansk";
  const { handleSetSelectedNeighborhood, selectedNeighborhood } =
    useNeighborhoodContext();

  useEffect(() => {
    handleSetSelectedNeighborhood(tmpNeighborHoodId);
  }, [handleSetSelectedNeighborhood]);

  if (!selectedNeighborhood) return null;

  return (
    <div className="bg-background">
      <NeighborhoodHero id={tmpNeighborHoodId} />
      <main className="container px-4 py-8">
        <div className="mb-6 space-y-6">
          <NeighborhoodStats id={tmpNeighborHoodId} />
          <div className="text-muted-foreground text-sm">
            {/* {`${apartments?.length || 0} ${
              apartments?.length === 1 ? "apartment" : "apartments"
            } available`} */}
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            {/* <SortByOptions sortOption={"priceAsc"} /> */}
            {/* <ApartmentFilters /> */}
          </div>

          <div>
            {/* <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {apartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
}
