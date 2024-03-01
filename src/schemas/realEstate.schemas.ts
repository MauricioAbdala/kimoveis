import { z } from "zod";
import { addresseSchema } from "./addresses.schemas";



export const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(() => 0).or(z.string()),
  size: z.number().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addresseSchema,

  categoryId: z.number().int().positive()
});

export const createRealEstateSchema =  realEstateSchema.omit({id: true, createdAt: true, updatedAt: true });


