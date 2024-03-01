import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepo } from "../repository";
import AppError from "../errors/AppError.error";

export const verifyAddressExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { address } = req.body;
  const AddressExists: Address | null = await addressRepo.findOne({
    where: {
      street: address.street,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
      number: address.number
    }
  });

  if (AddressExists) throw new AppError('Address already exists', 409);

  return next();
};