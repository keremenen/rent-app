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
  features: string[];
  commuteTime: number;
};

type TNeighborhoodContext = {
  neighborhoods: Neighborhood[];
  getNeighborhoodsByCityId: (id: string) => Neighborhood[];
  selectedNeighborhood: Neighborhood | null;
  handleSetSelectedNeighborhood: (id: string) => void;
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
  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState<Neighborhood | null>(null);

  const getNeighborhoodsByCityId = (id: string) => {
    return neighborhoods.filter((neighborhood) => neighborhood.cityId === id);
  };

  const handleSetNeighborhoods = (neighborhoods: Neighborhood[]) => {
    setNeighborhoods(neighborhoods);
  };

  const handleSetSelectedNeighborhood = (id: string) => {
    const neighborhood = neighborhoods.find(
      (neighborhood) => neighborhood.id === id,
    );
    setSelectedNeighborhood(neighborhood || null);
  };

  return (
    <NeighborhoodContext.Provider
      value={{
        neighborhoods,
        selectedNeighborhood,
        handleSetSelectedNeighborhood,
        getNeighborhoodsByCityId,
        handleSetNeighborhoods,
      }}
    >
      {children}
    </NeighborhoodContext.Provider>
  );
}
