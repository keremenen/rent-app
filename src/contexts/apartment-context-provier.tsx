"use client";

import { createContext, useState } from "react";

type Apartment = {
  id: string;
  neighborhoodId: string;
  title: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  gallery: string[];
  squareFootage: number;
  thumbnail: string;
  availableFrom: Date;
  amenities: string[];
  monthlyRent: number;
  description: string;
};

type TApartmentContext = {
  apartments: Apartment[];
  bedroomValues: number[];
  selectedApartment: Apartment | null;
  handleGetApartmentById: (apartmentId: string) => Apartment;
  handleSetSelectedApartment: (apartmentId: string) => void;
  getTotalApartmentsInNeighborhood: (neighborhoodId: string) => number;
  getAllApartmentsInNeighborhood: (neighborhoodId: string) => Apartment[];
  getAverageApartmentsRentInNeighborhood: (neighborhoodId: string) => number;
  handleSetApartments: (apartments: Apartment[]) => void;
  handleGetAllBedroomValues: () => void;
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
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null,
  );
  const [bedroomValues, setBedroomValues] = useState<number[]>([]);

  const handleSetSelectedApartment = (apartmentId: string) => {
    const apartment = apartments.find(
      (apartment) => apartment.id === apartmentId,
    );
    if (apartment) {
      setSelectedApartment(apartment);
    }
  };

  const handleSetApartments = (apartments: Apartment[]) => {
    setApartments(apartments);
  };

  const handleGetApartmentById = (apartmentId: string) => {
    const apartment = apartments.find(
      (apartment) => apartment.id === apartmentId,
    );

    if (!apartment) {
      throw new Error("Apartment not found");
    }

    return apartment;
  };

  const getTotalApartmentsInNeighborhood = (neighborhoodId: string) => {
    return apartments.filter(
      (apartment) => apartment.neighborhoodId === neighborhoodId,
    ).length;
  };

  const getAllApartmentsInNeighborhood = (neighborhoodId: string) => {
    return apartments.filter(
      (apartment) => apartment.neighborhoodId === neighborhoodId,
    );
  };

  const handleGetAllBedroomValues = () => {
    const allBedrooms = apartments.map((apartment) => apartment.bedrooms);
    const uniqueBedrooms = [...new Set(allBedrooms)];
    const sortedUniqueBedrooms = uniqueBedrooms.sort((a, b) => a - b);
    setBedroomValues(sortedUniqueBedrooms);
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
        selectedApartment,
        handleSetSelectedApartment,
        handleGetApartmentById,
        bedroomValues,
        getAllApartmentsInNeighborhood,
        handleGetAllBedroomValues,
        getAverageApartmentsRentInNeighborhood,
        getTotalApartmentsInNeighborhood,
        handleSetApartments,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
}
