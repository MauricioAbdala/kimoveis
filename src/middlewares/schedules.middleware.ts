import { NextFunction, Request, Response } from "express";
import { RealEstate, Schedule } from "../entities";
import { realEstateRepo, schedulesRepo } from "../repository";
import AppError from "../errors/AppError.error";

export const verifyRealEstateExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { realEstateId } = req.body;
    const realEstate: RealEstate | null = await realEstateRepo.findOne({
        where: {
            id: Number(realEstateId)
        }
    });

    if (!realEstate) throw new AppError("RealEstate not found", 404);

    return next();
};

export const verifyRealEstateSchedulesExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { realEstateId, hour, date } = req.body;
    const schedule: Schedule | null = await schedulesRepo.findOne({
        where: {
            realEstate: {
                id: Number(realEstateId)
            },
            hour,
            date
        }
    });

    if (schedule) throw new AppError( "Schedule to this real estate at this date and time already exists", 409);

    return next();
};

export const verifyUserScheduleExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let { sub } = res.locals.decoded;
    sub = Number(sub);
    const { hour, date } = req.body;
    const schedule: Schedule | null = await schedulesRepo.findOne({
        where: {
            user: {
                id: sub
            },
            date,
            hour
        },
    });

    if (schedule) throw new AppError("User schedule to this real estate at this date and time already exists", 409);

    return next();
};
