"use client";

import { createContext, useState } from "react";

type Filters = {
  priceRangeValues: number[];
  handleSetPriceRangeValues: (values: number[]) => void;
  bedroomValues: string[] | null;
  handleSetBedroomValues: (value: string) => void;
  amenitiesValues: string[] | null;
  handleSetAmenitiesValues: (value: string) => void;
};
type TFilterContextProvider = {
  children: React.ReactNode;
};

export const FilterContext = createContext<Filters | null>(null);

export default function FilterContextProvider({
  children,
}: TFilterContextProvider) {
  // STATE
  const [priceRangeValues, setPriceRangeValues] = useState<number[]>([
    2000, 3000,
  ]);

  const [bedroomValues, setBedroomValues] = useState<string[] | null>(null);
  const [amenitiesValues, setAmenitiesValues] = useState<string[] | null>(null);

  // HANDLERS
  const handleSetPriceRangeValues = (values: number[]) => {
    setPriceRangeValues(values);
  };

  const handleSetBedroomValues = (value: string) => {
    if (bedroomValues?.includes(value)) {
      setBedroomValues(bedroomValues.filter((v) => v !== value));
    } else {
      setBedroomValues((prev) => (prev ? [...prev, value] : [value]));
    }
  };

  const handleSetAmenitiesValues = (value: string) => {
    if (amenitiesValues?.includes(value)) {
      setAmenitiesValues(amenitiesValues.filter((v) => v !== value));
    } else {
      setAmenitiesValues((prev) => (prev ? [...prev, value] : [value]));
    }
  };

  return (
    <FilterContext.Provider
      value={{
        priceRangeValues,
        handleSetPriceRangeValues,
        bedroomValues,
        handleSetBedroomValues,
        amenitiesValues,
        handleSetAmenitiesValues,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
