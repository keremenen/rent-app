import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ApartmentEssential } from "./types";
import prisma from "./db";

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
