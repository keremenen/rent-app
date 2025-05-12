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
  // thumbnail: z.string().url({}),
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
  latitude: z.coerce
    .number()
    .min(-90)
    .max(90)
    .refine((val) => val !== 0, { message: "Latitude is required" }),
  longitude: z.coerce
    .number()
    .min(-180)
    .max(180)
    .refine((val) => val !== 0, { message: "Longitude is required" }),

  population: z.coerce
    .number()
    .min(0)
    .refine((val) => val !== 0, { message: "Population is required" }),
  area: z.coerce
    .number()
    .min(0)
    .refine((val) => val !== 0, { message: "Area is required" }),
  walkScore: z.coerce
    .number()
    .min(0)
    .max(100)
    .refine((val) => val !== 0, {
      message: "Walk score is required",
    }),
  commuteTime: z.coerce
    .number()
    .min(0)
    .refine((val) => val !== 0, {
      message: "Commute time is required",
    }),
  coverImage: z.string(),
});

export type TCityForm = z.infer<typeof cityFormSchema>;

export const cityIdSchema = z.string();
export type TCityId = z.infer<typeof cityIdSchema>;

export const neighborhoodFormSchema = z.object({
  name: z.string().trim().min(3, {
    message: "Neighborhood name must be at least 3 characters long",
  }),

  description: z.string().trim().min(3, {
    message: "Long description must be at least 3 characters long",
  }),
  averageRent: z.coerce
    .number()
    .min(0)
    .refine((val) => val !== 0, { message: "Average rent is required" }),
  walkScore: z.coerce
    .number()
    .min(0)
    .max(100)
    .refine((val) => val !== 0, {
      message: "Walk score is required",
    }),
  commuteTime: z.coerce
    .number()
    .min(0)
    .refine((val) => val !== 0, { message: "Commute time is required" }),
  features: z
    .array(z.string().nonempty("Feature cannot be empty"))
    .min(1, "At least one feature is required"),
  cityId: z.string().min(1, {
    message: "City is required",
  }),
});

export type TNeighborhoodForm = z.infer<typeof neighborhoodFormSchema>;
export const neighborhoodIdSchema = z.string();
export type TNeighborhoodId = z.infer<typeof neighborhoodIdSchema>;

export const authSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(100),
});

export type TAuthForm = z.infer<typeof authSchema>;
