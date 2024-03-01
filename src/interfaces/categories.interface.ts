import { z } from "zod";
import { categoriesSchema, createCategoriesSchema, readAllCategoriesSchema } from "../schemas/categories.schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

export type Categorie = z.infer<typeof categoriesSchema>;

export type CreateCategorieInterface = z.infer<typeof createCategoriesSchema>;
export type ReadAllCategorieInterface = z.infer<typeof readAllCategoriesSchema>;
export type CategoriesRepo = Repository<Category>;
