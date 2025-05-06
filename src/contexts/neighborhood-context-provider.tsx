"use client";

import { createContext, useState } from "react";

type Neighborhood = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  averageRent: number;
  walkScore: number;
  commuteTime: number;
};

type TNeighborhoodContext = {
  neighborhoods: Neighborhood[];
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

  return (
    <NeighborhoodContext.Provider
      value={{
        neighborhoods,
      }}
    >
      {children}
    </NeighborhoodContext.Provider>
  );
}
