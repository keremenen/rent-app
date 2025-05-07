"use client";

import { useApartmentContext, useFilterContext } from "@/lib/hooks";
import { ApartmentCard } from "./apartment-card";

export default function NeighborhoodApartments({
  neighborhoodId,
}: {
  neighborhoodId: string;
}) {
  const { getAllApartmentsInNeighborhood } = useApartmentContext();
  const apartments = getAllApartmentsInNeighborhood(neighborhoodId);
  const { priceRangeValues, bedroomValues, amenitiesValues } =
    useFilterContext();

  console.log("amenitiesValues", amenitiesValues);
  const filteredApartments = apartments.filter((apartment) => {
    const isInPriceRange =
      apartment.monthlyRent >= priceRangeValues[0] &&
      apartment.monthlyRent <= priceRangeValues[1];

    const isInBedroomRange =
      bedroomValues === null ||
      bedroomValues?.length === 0 ||
      bedroomValues?.includes(apartment.bedrooms.toString());

    const isInAmenitiesRange =
      amenitiesValues === null ||
      amenitiesValues?.length === 0 ||
      amenitiesValues?.every((amenity) =>
        apartment.amenities?.some(
          (apartmentAmenity) => apartmentAmenity === amenity,
        ),
      );

    return isInPriceRange && isInBedroomRange && isInAmenitiesRange;
  });

  return (
    <section className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
      {filteredApartments.map((apartment) => (
        <ApartmentCard key={apartment.id} apartment={apartment} />
      ))}
    </section>
  );
}
