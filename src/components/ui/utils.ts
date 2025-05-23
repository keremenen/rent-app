import prisma from "@/lib/db";
import { ApartmentEssential, PNeighborhood } from "@/lib/types";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  const formattedNumber = Number(num);
  if (formattedNumber >= 1000000) {
    return (formattedNumber / 1000000).toFixed(1) + "M";
  }
  if (formattedNumber >= 1000) {
    return (formattedNumber / 1000).toFixed(1) + "K";
  }
  return formattedNumber.toString();
}

// This function takes a string of comma-separated values and returns an array of numbers.
// If the string is empty or undefined, it returns null.
export function parseStringsToNumberArray(value?: string): number[] | null {
  if (!value) return null;
  return value
    ?.split(",")
    .map((item) => Number(item.trim()))
    .filter((num) => !isNaN(num));
}

// This function takes a string of comma-separated values and returns an array of strings.
// If the string is empty or undefined, it returns null.
export function parseStringsToStringArray(value?: string): string[] | null {
  if (!value) return null;
  return value
    ?.split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");
}

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function checkIfArrayIsEmpty(array: number[]): boolean {
  return array.length === 0;
}
// Convert Prisma apartment object Decimal fields to plain numbers
export function convertApartmentsToPlain(apartments: ApartmentEssential[]) {
  return apartments.map((apartment: ApartmentEssential) => ({
    ...apartment,
    squareFootage: apartment.squareFootage?.toNumber(),
    monthlyRent: apartment.monthlyRent?.toNumber(),
  }));
}

//Conver Prisma neighborhood object Decimal fields to plain numbers
export function convertNeighborhoodToPlain(neighborhood: PNeighborhood) {
  return {
    ...neighborhood,
    averageRent: neighborhood.averageRent?.toNumber(),
    walkScore: neighborhood.walkScore?.toNumber(),
    commuteTime: neighborhood.commuteTime?.toNumber(),
  };
}

// Function that takes number as paramenter and fetches apartments from the Prisma DB
// and returns them as an array of objects
export async function getRandomApartments({ take }: { take: number }) {
  try {
    const totalApartments = await prisma.apartment.count();
    const randomOFfset = Math.floor(Math.random() * (totalApartments - take));

    const apartments = await prisma.apartment.findMany({
      select: {
        id: true,
        title: true,
        thumbnail: true,
        bedrooms: true,
        bathrooms: true,
        squareFootage: true,
        monthlyRent: true,
        address: true,
        availableFrom: true,
        amenities: true,
      },
      skip: randomOFfset,
      take: take,
    });
    return convertApartmentsToPlain(apartments);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching apartments:", error.message);
      return [];
    }
  }
}

export async function getNeighborhoodById(id: string) {
  try {
    const neighborhood = await prisma.neighborhood.findUnique({
      where: { id: id },
    });
    if (!neighborhood) {
      return null;
    }
    return convertNeighborhoodToPlain(neighborhood);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching neighborhood:", error.message);
      return null;
    }
  }
}

export async function getApartmentsByNeighborhoodId(id: string) {
  try {
    const apartments = await prisma.apartment.findMany({
      where: { neighborhoodId: id },
      select: {
        id: true,
        title: true,
        thumbnail: true,
        bedrooms: true,
        bathrooms: true,
        squareFootage: true,
        monthlyRent: true,
        address: true,
        availableFrom: true,
        amenities: true,
      },
    });
    return convertApartmentsToPlain(apartments);
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching apartments:", error.message);
      return [];
    }
  }
}

export const generatePrismaFilters = ({
  minprice,
  maxprice,
  bedrooms,
  amenities,
}: {
  minprice?: string;
  maxprice?: string;
  bedrooms?: string;
  amenities?: string;
}) => {
  const filters = [];

  if (minprice || maxprice) {
    filters.push({
      monthlyRent: {
        gte: minprice ? Number(minprice) : 0,
        lte: maxprice ? Number(maxprice) : 10_000,
      },
    });
  }

  if (bedrooms) {
    const parsedBedrooms = parseStringsToNumberArray(bedrooms);

    if (parsedBedrooms && parsedBedrooms.length > 0) {
      filters.push({
        bedrooms: {
          in: parsedBedrooms,
        },
      });
    }
  }

  if (amenities) {
    const parsedAmenities = parseStringsToStringArray(amenities);
    if (parsedAmenities && parsedAmenities.length > 0) {
      filters.push({
        amenities: {
          hasEvery: parsedAmenities,
        },
      });
    }
  }

  return filters;
};
