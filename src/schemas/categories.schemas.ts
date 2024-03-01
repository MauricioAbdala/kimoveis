import { z } from "zod";

export const categoriesSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45)
});

export const createCategoriesSchema = categoriesSchema.omit({ id: true });
export const readAllCategoriesSchema = createCategoriesSchema.array();