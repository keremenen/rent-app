"use client";

import { createContext, useState } from "react";

type Apartment = {
  id: string;
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

  return (
    <ApartmentContext.Provider
      value={{
        apartments,
        handleSetApartments,
      }}
    >
      {children}
    </ApartmentContext.Provider>
  );
}
