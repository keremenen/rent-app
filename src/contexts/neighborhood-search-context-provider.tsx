"use client";

import { createContext, useState } from "react";

type NeighborhoodSearchContextProvider = {
  children: React.ReactNode;
};

type TNeighborhoodSearchContext = {
  searchQuery: string;
  handleSearchQueryChange: (query: string) => void;
};

export const NeighborhoodSearchContext =
  createContext<TNeighborhoodSearchContext | null>(null);

export default function NeighborhoodSearchContextProvider({
  children,
}: NeighborhoodSearchContextProvider) {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <NeighborhoodSearchContext.Provider
      value={{
        searchQuery,
        handleSearchQueryChange,
      }}
    >
      {children}
    </NeighborhoodSearchContext.Provider>
  );
}
