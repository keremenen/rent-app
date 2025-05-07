"use client";

import NeighborhoodApartments from "@/components/neighborhood-apartments";
import NeighborhoodFeatures from "@/components/neighborhood-features";
import { NeighborhoodHero } from "@/components/neighborhood-hero";
import { NeighborhoodStats } from "@/components/neighborhood-stats";
import { useApartmentContext, useNeighborhoodContext } from "@/lib/hooks";
import { useEffect } from "react";

type NeighborhoodParams = {
  params: Promise<{ neighborhoodId: string }>;
};

export default function NeighborhoodPage({ params }: NeighborhoodParams) {
  const tmpNeighborHoodId = "srodmiescie-gdansk";
  const { handleSetSelectedNeighborhood, selectedNeighborhood } =
    useNeighborhoodContext();

  const { getAllApartmentsInNeighborhood } = useApartmentContext();
  const apartments = getAllApartmentsInNeighborhood(tmpNeighborHoodId);
  console.log("apartments", apartments);

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
            <NeighborhoodApartments neighborhoodId={tmpNeighborHoodId} />
          </div>
        </div>
      </main>
    </div>
  );
}
