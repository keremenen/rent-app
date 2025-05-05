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
