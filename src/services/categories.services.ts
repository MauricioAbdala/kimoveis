import { Category } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateCategorieInterface, ReadAllCategorieInterface } from "../interfaces/categories.interface";
import { categoryRepo } from "../repository";

export const createCategoryService = async (payload: CreateCategorieInterface): Promise<Category> => {
    return await categoryRepo.save(payload);
};

export const readAllCategoryService = async (): Promise<ReadAllCategorieInterface> => {
    return await categoryRepo.find();
};

export const readRealEstateCategoryService = async (id: number): Promise<Category> => {
    const category: Category | null = await categoryRepo.findOne({
        where: {
            id
        },
        relations: {
            realEstate: true
        }
    });

    if(!category) throw new AppError('Category not found', 404);

    return category;
};