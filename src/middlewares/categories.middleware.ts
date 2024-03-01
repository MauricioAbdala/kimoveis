import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoryRepo } from "../repository";
import AppError from "../errors/AppError.error";

export const verifyNameCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name } = req.body;
    const category: Category | null = await categoryRepo.findOneBy({ name });

    if (category) throw new AppError('Category already exists', 409);

    return next();
};

export const verifyIdCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { id } = req.params;
    const category: Category | null = await categoryRepo.findOneBy({ id: Number(id) });

    if (!category) throw new AppError('Category not found', 404);

    return next();
};

