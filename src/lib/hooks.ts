"use client";

import { NeighborhoodSearchContext } from "@/contexts/neighborhood-search-context-provider";
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

export function useNeighborhoodSearchContext() {
  const context = useContext(NeighborhoodSearchContext);

  if (!context) {
    throw new Error(
      "useSearchContext must be used within a SearchContextProvider",
    );
  }

  return context;
}
