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
  neighborhood: z.string().min(1, {
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
  monthlyRent: z.number(),
  description: z.string(),
});

export type TApartmentForm = z.infer<typeof apartmentFormSchema>;
