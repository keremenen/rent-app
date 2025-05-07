"use client";

import NeighborhoodApartments from "@/components/neighborhood-apartments";
import NeighborhoodFeatures from "@/components/neighborhood-features";
import { NeighborhoodHero } from "@/components/neighborhood-hero";
import { NeighborhoodStats } from "@/components/neighborhood-stats";
import { useNeighborhoodContext } from "@/lib/hooks";
import { use, useEffect } from "react";

type Params = Promise<{ neighborhoodId: string }>;

export default function NeighborhoodPage(props: { params: Params }) {
  const { neighborhoodId } = use(props.params);

  const { handleSetSelectedNeighborhood, selectedNeighborhood } =
    useNeighborhoodContext();

  useEffect(() => {
    handleSetSelectedNeighborhood(neighborhoodId);
  }, [handleSetSelectedNeighborhood, neighborhoodId]);

  if (!selectedNeighborhood) return null;

  return (
    <div className="bg-background">
      <NeighborhoodHero id={neighborhoodId} />
      <main className="container space-y-6 px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2">
          <NeighborhoodStats id={neighborhoodId} />
          <NeighborhoodFeatures />
        </div>
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div>{/* <ApartmentFilters /> */}</div>

          <div>
            <NeighborhoodApartments neighborhoodId={neighborhoodId} />
          </div>
        </div>
      </main>
    </div>
  );
}
