"use client";

import { createContext, useState } from "react";

type City = {
  id: string;
  name: string;
  shortDescription: string;
  longDescription: string;
  gallery: string[];
  coverImage: string;
  latitude: number;
  longitude: number;
  population: number;
  area: number;
  walkScore: number;
  commuteTime: number;
  createdAt: Date;
};

type TCityContext = {
  cities: City[] | null;
  selectedCity: City | null;
  getCityById: (id: string) => void;
  handleSetCities: (cities: City[]) => void;
};

export const CityContext = createContext<TCityContext | null>(null);

type CityContextProvider = {
  data: City[];
  children: React.ReactNode;
};

export default function CityContextProvider({
  data,
  children,
}: CityContextProvider) {
  const [cities, setCities] = useState<City[]>(data);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleSetCities = (cities: City[]) => {
    setCities(cities);
  };

  const getCityById = (id: string) => {
    const city = cities.find((city) => city.id === id) || null;
    setSelectedCity(city); // Set the selected city
  };

  return (
    <CityContext.Provider
      value={{
        cities,
        selectedCity,
        handleSetCities,
        getCityById,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
