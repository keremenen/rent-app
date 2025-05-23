"use client";

import { editCity } from "@/actions/actions";
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
  handleEditCity: (cityId: string, cityData: City) => Promise<void>;
  handleGetCityById: (cityId: string) => City | undefined;
  handleSetSelectedCity: (id: string) => void;
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

  const handleSetSelectedCity = (id: string) => {
    const city = cities.find((city) => city.id === id) || null;
    setSelectedCity(city); // Set the selected city
  };

  const handleGetCityById = (id: string) => {
    const city = cities.find((city) => city.id === id);
    return city;
  };

  const handleEditCity = async (cityId: string, cityData: City) => {
    setCities((prevCities) =>
      prevCities.map((city) =>
        city.id === cityId ? { ...city, ...cityData } : city,
      ),
    );

    const error = await editCity(cityId, cityData);

    if (error) {
      console.error("Error editing city:", error.message);
    }
  };

  return (
    <CityContext.Provider
      value={{
        cities,
        selectedCity,
        handleEditCity,
        handleGetCityById,
        handleSetCities,
        handleSetSelectedCity,
      }}
    >
      {children}
    </CityContext.Provider>
  );
}
