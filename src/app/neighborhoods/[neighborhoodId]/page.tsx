"use client";

import NeighborhoodFeatures from "@/components/neighborhood-features";
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
      <main className="container space-y-6 px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <NeighborhoodStats id={tmpNeighborHoodId} />
          <NeighborhoodFeatures />
        </div>
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div>{/* <ApartmentFilters /> */}</div>

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
