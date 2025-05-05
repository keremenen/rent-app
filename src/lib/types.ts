import { Decimal } from "@prisma/client/runtime/library";

export type City = {
  id: string;
  name: string;
  shortDescription: string | null;
  longDescription: string | null;
  gallery: string[];
  latitude: Decimal | null;
  longitude: Decimal | null;
  population: bigint | null;
  area: Decimal | null;
  walkscore: Decimal | null;
  commuteTime: Decimal | null;
  createdAt: Date;
};

export type ApartmentEssential = {
  id: string;
  title: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  squareFootage: Decimal;
  thumbnail: string;
  availableFrom: Date;
  amenities: string[];
  monthlyRent: Decimal;
};

export type PNeighborhood = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  averageRent: Decimal;
  walkScore: Decimal;
  commuteTime: Decimal;
  features: string[];
  createdAt: Date;
};

// PRISMA

export type Apartment = {
  id: string;
  title: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  squareFootage: Decimal;
  thumbnail: string;
  availableFrom: Date;
  amenities: string[];
  monthlyRent: Decimal;
};

export type ConvertedApartment = {
  id: string;
  title: string;
  address: string;
  bathrooms: number;
  bedrooms: number;
  squareFootage: number;
  thumbnail: string;
  availableFrom: Date;
  amenities: string[];
  monthlyRent: number;
};

export type NeighborhoodEssential = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
};
