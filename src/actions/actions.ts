"use server";
import prisma from "@/lib/db";
import { getAparmentById, getCityById } from "@/lib/server-utils";
import { removePolishCharacters } from "@/lib/utils";
import {
  apartmentFormSchema,
  apartmentIdSchema,
  cityFormSchema,
  cityIdSchema,
} from "@/lib/validations";

import { redirect } from "next/navigation";

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
        id: removePolishCharacters(
          validatedCityData.data.name.toLowerCase().replace(/\s+/g, "-"),
        ),
      },
    });
  } catch (error) {
    return { message: `Error updating city ${error}` };
  }

  redirect("/admin/cities");
}

export async function addCity(newCityData: unknown) {
  const validatedCityData = cityFormSchema.safeParse(newCityData);

  if (!validatedCityData.success) {
    return { message: "Invalid city data" };
  }

  try {
    await prisma.city.create({
      data: {
        ...validatedCityData.data,
        coverImage:
          "https://efvivjdsmnjmucdqmpvi.supabase.co/storage/v1/object/public/cities/gdansk/main.jpg",
        gallery: [
          "https://efvivjdsmnjmucdqmpvi.supabase.co/storage/v1/object/public/cities/gdansk/main.jpg",
          "https://efvivjdsmnjmucdqmpvi.supabase.co/storage/v1/object/public/cities/gdansk/main.jpg",
          "https://efvivjdsmnjmucdqmpvi.supabase.co/storage/v1/object/public/cities/gdansk/main.jpg",
        ],
        id: removePolishCharacters(
          validatedCityData.data.name.toLowerCase().replace(/\s+/g, "-"),
        ),
      },
    });
  } catch (error) {
    return { message: `Error creating city ${error}` };
  }

  redirect("/admin/cities");
}
