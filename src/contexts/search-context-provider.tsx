"use client";

import { createContext, useState } from "react";

type SearchContextProvider = {
  children: React.ReactNode;
};

type TSearchContext = {
  searchQuery: string;
  handleSearchQueryChange: (query: string) => void;
};

export const SearchContext = createContext<TSearchContext | null>(null);

export default function SearchContextProvider({
  children,
}: SearchContextProvider) {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchQueryChange = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        handleSearchQueryChange,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
