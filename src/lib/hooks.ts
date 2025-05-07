"use client";

import { ApartmentContext } from "@/contexts/apartment-context-provier";
import { CityContext } from "@/contexts/city-context-provider";
import { NeighborhoodContext } from "@/contexts/neighborhood-context-provider";
import { SearchContext } from "@/contexts/search-context-provider";
import { useContext, useEffect, useState } from "react";

export function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Initial check
    checkIfMobile();

    // Add event listener
    window.addEventListener("resize", checkIfMobile);

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return isMobile;
}

export function useSearchContext() {
  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }

  return context;
}

export function useNeighborhoodContext() {
  const context = useContext(NeighborhoodContext);

  if (!context) {
    throw new Error(
      "useNeighborhoodContext must be used within a NeighborhoodContextProvider",
    );
  }

  return context;
}

export function useApartmentContext() {
  const context = useContext(ApartmentContext);

  if (!context) {
    throw new Error(
      "useApartmentContext must be used within a ApartmentContextProvider",
    );
  }

  return context;
}

export function useCityContext() {
  const context = useContext(CityContext);

  if (!context) {
    throw new Error(
      "useCityContext must be used within a ApartmentContextProvider",
    );
  }

  return context;
}
