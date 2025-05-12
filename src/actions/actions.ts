"use server";
import prisma from "@/lib/db";
import { getAparmentById, getCityById } from "@/lib/server-utils";
import { removePolishCharacters } from "@/lib/utils";
import {
  apartmentFormSchema,
  apartmentIdSchema,
  cityFormSchema,
  cityIdSchema,
  neighborhoodFormSchema,
  neighborhoodIdSchema,
} from "@/lib/validations";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

import { redirect } from "next/navigation";

export async function editApartment(
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
  console.log("cityId", cityId);
  console.log("newCityData", newCityData);
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

export async function editNeighborhood(
  neighborhoodId: unknown,
  newNeighborhoodData: unknown,
) {
  const validatedNeighborhoodId =
    neighborhoodIdSchema.safeParse(neighborhoodId);
  const validatedNeighborhoodData =
    neighborhoodFormSchema.safeParse(newNeighborhoodData);

  if (!validatedNeighborhoodId.success || !validatedNeighborhoodData.success) {
    return { message: "Invalid neighborhood data" };
  }

  try {
    await prisma.neighborhood.update({
      where: {
        id: validatedNeighborhoodId.data,
      },
      data: {
        ...validatedNeighborhoodData.data,
      },
    });
  } catch (error) {
    return { message: `Error updating neighborhood ${error}` };
  }
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
        coverImage: "/placeholder-image.jpg",
        gallery: [],
        id: removePolishCharacters(
          validatedCityData.data.name.toLowerCase().replace(/\s+/g, "-"),
        ),
      },
    });
  } catch (error) {
    return { message: `Error creating city ${error}` };
  }
}

export async function uploadThumbnailImage(
  file: File,
  id: string,
  type: "city" | "neighborhood" | "apartment",
) {
  const supabase = await createClient();

  if (!file) {
    console.error("No file selected");
    return { message: "No file selected" };
  }

  // Generate a random file name
  const randomFileName = `${Date.now()}-${Math.random()
    .toString(36)
    .substring(2, 15)}-${file.name}`;

  const { error } = await supabase.storage
    .from("thumbnails")
    .upload(`${type}/${randomFileName}`, file);

  if (error) {
    console.error("Error uploading thumbnail image:", error);
    return { message: "Error uploading thumbnail image" };
  }

  const { data: publicUrlData } = supabase.storage
    .from("thumbnails")
    .getPublicUrl(`${type}/${randomFileName}`);

  try {
    if (type === "city") {
      await prisma.city.update({
        where: {
          id: id,
        },
        data: {
          coverImage: publicUrlData.publicUrl,
        },
      });
    } else if (type === "neighborhood") {
      await prisma.neighborhood.update({
        where: {
          id: id,
        },
        data: {
          thumbnail: publicUrlData.publicUrl,
        },
      });
    } else if (type === "apartment") {
      await prisma.apartment.update({
        where: {
          id: id,
        },
        data: {
          thumbnail: publicUrlData.publicUrl,
        },
      });
    }
  } catch (error) {
    console.error(`Error updating ${type} cover image:`, error);
    return { message: `Error updating ${type} cover image` };
  }

  revalidatePath(`/admin/${type}s`);
}

export async function uploadGalleryImages(
  files: File[],
  id: string,
  type: "city" | "apartment",
) {
  const supabase = await createClient();

  if (!files || files.length === 0) {
    console.error("No files selected");
    return { message: "No files selected" };
  }

  const galleryUrls: string[] = [];

  for (const file of files) {
    // Generate a random file name
    const randomFileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 15)}-${file.name}`;

    const { error } = await supabase.storage
      .from(type === "city" ? "cities" : "apartments")
      .upload(`gallery/${randomFileName}`, file);

    if (error) {
      console.error("Error uploading gallery image:", error);
      return { message: "Error uploading gallery image" };
    }

    const { data: publicUrlData } = supabase.storage
      .from(type === "city" ? "cities" : "apartments")
      .getPublicUrl(`gallery/${randomFileName}`);

    galleryUrls.push(publicUrlData.publicUrl);
  }

  try {
    if (type === "city") {
      await prisma.city.update({
        where: {
          id: id,
        },
        data: {
          gallery: {
            push: galleryUrls,
          },
        },
      });
    } else if (type === "apartment") {
      await prisma.apartment.update({
        where: {
          id: id,
        },
        data: {
          gallery: {
            push: galleryUrls,
          },
        },
      });
    }
  } catch (error) {
    console.error(`Error updating ${type} gallery:`, error);
    return { message: `Error updating ${type} gallery` };
  }

  revalidatePath(`/admin/${type}s`);
}

// Function to remove an image from gallery array
export async function removeImageFromGallery(
  id: string,
  imageUrl: string,
  type: "city" | "apartment",
) {
  const supabase = await createClient();

  // Remove the image from Supabase storage
  const { error: deleteError } = await supabase.storage
    .from(type === "city" ? "cities" : "apartments")
    .remove([imageUrl]);

  if (deleteError) {
    console.error("Error deleting image from Supabase:", deleteError);
    return { message: "Error deleting image" };
  }

  // Update the gallery in the database
  try {
    const entity =
      type === "city"
        ? await prisma.city.findUnique({
            where: { id },
            select: { gallery: true },
          })
        : await prisma.apartment.findUnique({
            where: { id },
            select: { gallery: true },
          });

    if (!entity || !entity.gallery) {
      return {
        message: `${type.charAt(0).toUpperCase() + type.slice(1)} not found or gallery is empty`,
      };
    }

    const updatedGallery = entity.gallery.filter((image) => image !== imageUrl);

    if (type === "city") {
      await prisma.city.update({
        where: {
          id,
        },
        data: {
          gallery: updatedGallery,
        },
      });
    } else if (type === "apartment") {
      await prisma.apartment.update({
        where: {
          id,
        },
        data: {
          gallery: updatedGallery,
        },
      });
    }
  } catch (error) {
    console.error(`Error updating ${type} gallery:`, error);
    return { message: `Error updating ${type} gallery` };
  }

  revalidatePath(`/admin/${type}s`);
}

export const deleteCity = async (cityId: unknown) => {
  const validatedCityId = cityIdSchema.safeParse(cityId);

  if (!validatedCityId.success) {
    return { message: "Invalid city ID", success: false };
  }

  try {
    await prisma.city.delete({
      where: {
        id: validatedCityId.data,
      },
    });

    // Revalidate the path after deletion

    return { message: "City deleted successfully", success: true };
  } catch (error) {
    return { message: `Error deleting city: ${error}`, success: false };
  }
};
