import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyIdCategory, verifyNameCategory } from "../middlewares/categories.middleware";
import { createCategoryController, readAllCategoryController, readRealEstateCategoryController} from "../controllers/categories.controllers";
import { createCategoriesSchema } from "../schemas/categories.schemas";

export const categoriesRouter: Router = Router();

categoriesRouter.post('/',
  verifyBody(createCategoriesSchema),
  verifyToken,
  verifyNameCategory,
  verifyAdmin,
  createCategoryController
);
categoriesRouter.get('/', readAllCategoryController);
categoriesRouter.get('/:id/realEstate', verifyIdCategory, readRealEstateCategoryController);