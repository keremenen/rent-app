"use client";

import { useApartmentContext, useFilterContext } from "@/lib/hooks";
import { ApartmentCard } from "./apartment-card";
import { applyApartmentsFilters } from "@/lib/utils";

export default function NeighborhoodApartments({
  neighborhoodId,
}: {
  neighborhoodId: string;
}) {
  const { getAllApartmentsInNeighborhood } = useApartmentContext();
  const apartments = getAllApartmentsInNeighborhood(neighborhoodId);
  const { priceRangeValues, bedroomValues, amenitiesValues } =
    useFilterContext();

  const filteredApartments = applyApartmentsFilters(apartments, {
    priceRangeValues,
    bedroomValues,
    amenitiesValues,
  });

  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {filteredApartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}
