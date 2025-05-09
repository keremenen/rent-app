"use server";
import prisma from "@/lib/db";
import { getAparmentById, getCityById } from "@/lib/server-utils";
import {
  apartmentFormSchema,
  apartmentIdSchema,
  cityFormSchema,
  cityIdSchema,
} from "@/lib/validations";

export async function editAparment(
  apartmentId: unknown,
  newApartmentData: unknown,
) {
  const validatedApartmentId = apartmentIdSchema.safeParse(apartmentId);
  const validatedApartmentData =
    apartmentFormSchema.safeParse(newApartmentData);

  if (!validatedApartmentId.success || !validatedApartmentData.success) {
    return { message: "Invalid apartment data" };
  }

  const apartment = getAparmentById(validatedApartmentId.data);

  if (!apartment) {
    return { message: "Aparment not found" };
  }

  try {
    await prisma.apartment.update({
      where: {
        id: validatedApartmentId.data,
      },
      data: {
        ...validatedApartmentData.data,
      },
    });
  } catch (error) {
    return { message: `Error updating apartment ${error}` };
  }
}

export async function editCity(cityId: unknown, newCityData: unknown) {
  const validatedCityId = cityIdSchema.safeParse(cityId);
  const validatedCityData = cityFormSchema.safeParse(newCityData);

  if (!validatedCityId.success || !validatedCityData.success) {
    return { message: "Invalid city data" };
  }

  const city = getCityById(validatedCityId.data);

  if (!city) {
    return { message: "City not found" };
  }

  try {
    await prisma.city.update({
      where: {
        id: validatedCityId.data,
      },
      data: {
        ...validatedCityData.data,
      },
    });
  } catch (error) {
    return { message: `Error updating city ${error}` };
  }
}
