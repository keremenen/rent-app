"use server";
import prisma from "@/lib/db";
import { getAparmentById } from "@/lib/server-utils";
import { apartmentFormSchema, apartmentIdSchema } from "@/lib/validations";

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
