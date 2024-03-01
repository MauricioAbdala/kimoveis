import { Request, Response } from "express";
import { createCategoryService, readAllCategoryService, readRealEstateCategoryService, } from "../services/categories.services";

export const createCategoryController = async (req: Request, res: Response): Promise<Response> => {
    const category = await createCategoryService(req.body);

    return res.status(201).json(category);
};

export const readAllCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const categories = await readAllCategoryService();

  return res.status(200).json(categories);
};

export const  readRealEstateCategoryController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params;
  const realEstate = await readRealEstateCategoryService(Number(id));

  return res.status(200).json(realEstate);
};