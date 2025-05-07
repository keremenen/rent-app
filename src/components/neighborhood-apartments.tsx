"use client";

import { useApartmentContext } from "@/lib/hooks";
import { ApartmentCard } from "./apartment-card";

export default function NeighborhoodApartments({
  neighborhoodId,
}: {
  neighborhoodId: string;
}) {
  const { getAllApartmentsInNeighborhood } = useApartmentContext();
  const apartments = getAllApartmentsInNeighborhood(neighborhoodId);

  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {apartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}
