"use client";

import { createContext, useState } from "react";

type Apartment = {
  id: string;
  neighborhoodId: string;
  title: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  squareFootage: number;
  thumbnail: string;
  availableFrom: Date;
  amenities: string[];
  monthlyRent: number;
};

type TApartmentContext = {
  apartments: Apartment[];
  getTotalAparmentsInNeighborhood: (neighborhoodId: string) => number;
  getAverageApartmentsRentInNeighborhood: (neighborhoodId: string) => number;
  handleSetApartments: (apartments: Apartment[]) => void;
};

export const ApartmentContext = createContext<TApartmentContext | null>(null);

type ApartmentContextProvider = {
  data: Apartment[];
  children: React.ReactNode;
};
export default function ApartmentContextProvider({
  data,
  children,
}: ApartmentContextProvider) {
  const [apartments, setApartments] = useState<Apartment[]>(data);

  const handleSetApartments = (apartments: Apartment[]) => {
    setApartments(apartments);
  };

  const getTotalAparmentsInNeighborhood = (neighborhoodId: string) => {
    return apartments.filter(
      (apartment) => apartment.neighborhoodId === neighborhoodId,
    ).length;
  };

  const getAverageApartmentsRentInNeighborhood = (neighborhoodId: string) => {
    // Filter apartments by neighborhoodId
    const apartmentsInNeighborhood = apartments.filter(
      (apartment) => apartment.neighborhoodId === neighborhoodId,
    );
    // If there are no apartments in the neighborhood, return 0
    if (apartmentsInNeighborhood.length === 0) {
      return 0;
    }
    // Calculate the average rent
    const totalRent = apartmentsInNeighborhood.reduce(
      (acc, apartment) => acc + apartment.monthlyRent,
      0,
    );
    // Calculate the average rent
    const averageRent = totalRent / apartmentsInNeighborhood.length;
    // Round the average rent to the nearest integer
    const roundedAverageRent = Math.round(averageRent);

    return roundedAverageRent;
  };

  return (
    <ApartmentContext.Provider
      value={{
        apartments,
        getAverageApartmentsRentInNeighborhood,
        getTotalAparmentsInNeighborhood,
        handleSetApartments,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
}
