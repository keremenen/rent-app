"use client";

import { createContext, useState } from "react";

type Neighborhood = {
  id: string;
  cityId: string;
  name: string;
  description: string;
  thumbnail: string;
  averageRent: number;
  walkScore: number;
  commuteTime: number;
};

type TNeighborhoodContext = {
  neighborhoods: Neighborhood[];
  getNeighborhoodsByCityId: (id: string) => Neighborhood[];
  handleSetNeighborhoods: (neighborhoods: Neighborhood[]) => void;
};

export const NeighborhoodContext = createContext<TNeighborhoodContext | null>(
  null,
);

type NeighborhoodContextProvider = {
  data: Neighborhood[];
  children: React.ReactNode;
};

export default function NeighborhoodContextProvider({
  data,
  children,
}: NeighborhoodContextProvider) {
  const [neighborhoods, setNeighborhoods] = useState<Neighborhood[]>(data);

  const getNeighborhoodsByCityId = (id: string) => {
    return neighborhoods.filter((neighborhood) => neighborhood.cityId === id);
  };

  const handleSetNeighborhoods = (neighborhoods: Neighborhood[]) => {
    setNeighborhoods(neighborhoods);
  };

  return (
    <NeighborhoodContext.Provider
      value={{
        neighborhoods,
        getNeighborhoodsByCityId,
        handleSetNeighborhoods,
      }}
    >
      {children}
    </NeighborhoodContext.Provider>
  );
}
