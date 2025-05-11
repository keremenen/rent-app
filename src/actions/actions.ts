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
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

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

export async function uploadThumbnailImage(file: File, cityId: string) {
  console.log("started");
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
    .from("cities")
    .upload(`thumbnails/${randomFileName}`, file);

  if (error) {
    console.error("Error uploading thumbnail image:", error);
    return { message: "Error uploading thumbnail image" };
  }

  const { data: publicUrlData } = supabase.storage
    .from("cities")
    .getPublicUrl(`thumbnails/${randomFileName}`);

  try {
    await prisma.city.update({
      where: {
        id: cityId,
      },
      data: {
        coverImage: publicUrlData.publicUrl,
      },
    });
  } catch (error) {
    console.error("Error updating city cover image:", error);
  }

  revalidatePath("/admin/cities");
}

export async function uploadGalleryImages(files: File[], cityId: string) {
  const supabase = await createClient();

  if (!files || files.length === 0) {
    console.error("No files selected");
    return { message: "No files selected" };
  }

  const galleryUrls: string[] = [];

  console.log("files", files);

  for (const file of files) {
    // Generate a random file name
    const randomFileName = `${Date.now()}-${Math.random()
      .toString(36)
      .substring(2, 15)}-${file.name}`;

    const { error } = await supabase.storage
      .from("cities")
      .upload(`gallery/${randomFileName}`, file);

    if (error) {
      console.error("Error uploading gallery image:", error);
      return { message: "Error uploading gallery image" };
    }

    const { data: publicUrlData } = supabase.storage
      .from("cities")
      .getPublicUrl(`gallery/${randomFileName}`);

    galleryUrls.push(publicUrlData.publicUrl);
  }

  try {
    await prisma.city.update({
      where: {
        id: cityId,
      },
      data: {
        gallery: {
          push: galleryUrls,
        },
      },
    });
  } catch (error) {
    console.error("Error updating city gallery:", error);
  }

  revalidatePath("/admin/cities");
}

// Function to remove an image from gallery array
export async function removeImageFromGallery(cityId: string, imageUrl: string) {
  const supabase = await createClient();

  // Remove the image from Supabase storage
  const { error: deleteError } = await supabase.storage
    .from("cities")
    .remove([imageUrl]);

  if (deleteError) {
    console.error("Error deleting image from Supabase:", deleteError);
    return { message: "Error deleting image" };
  }

  // Update the gallery in the database
  try {
    const city = await prisma.city.findUnique({
      where: { id: cityId },
      select: { gallery: true },
    });

    if (!city || !city.gallery) {
      return { message: "City not found or gallery is empty" };
    }

    const updatedGallery = city.gallery.filter((image) => image !== imageUrl);

    await prisma.city.update({
      where: {
        id: cityId,
      },
      data: {
        gallery: updatedGallery,
      },
    });
  } catch (error) {
    console.error("Error updating city gallery:", error);
    return { message: "Error updating city gallery" };
  }

  revalidatePath("/admin/cities");
}
