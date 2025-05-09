import { z } from "zod";

export const apartmentFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(3, {
      message: "Title must be at least 3 characters long",
    })
    .max(50, {
      message: "Title must be at most 50 characters long",
    }),
  neighborhoodId: z.string().min(1, {
    message: "Neighborhood is required",
  }),
  address: z
    .string()
    .trim()
    .min(3, {
      message: "Address must be at least 3 characters long",
    })
    .max(100, {
      message: "Address must be at most 100 characters long",
    }),
  bedrooms: z.number(),
  bathrooms: z.number(),
  squareFootage: z.number(),
  // availableFrom: z.date(),
  thumbnail: z.string().url({}),
  monthlyRent: z.number(),
  description: z.string(),
  amenities: z.array(z.string()),
});

export type TApartmentForm = z.infer<typeof apartmentFormSchema>;

export const apartmentIdSchema = z.string();

export type TAparmentId = z.infer<typeof apartmentIdSchema>;

export const cityFormSchema = z.object({
  name: z.string().trim().min(3, {
    message: "City name must be at least 3 characters long",
  }),
  shortDescription: z.string().trim().min(3, {
    message: "Short description must be at least 3 characters long",
  }),
  longDescription: z.string().trim().min(3, {
    message: "Long description must be at least 3 characters long",
  }),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  population: z.number().min(0),
  area: z.number().min(0),
  walkScore: z.number().min(0).max(100),
  commuteTime: z.number().min(0),
});

export type TCityForm = z.infer<typeof cityFormSchema>;

export const cityIdSchema = z.string();
export type TCityId = z.infer<typeof cityIdSchema>;
