import { Repository } from "typeorm";
import { Address, Category, RealEstate, Schedule, User } from "../entities";
import { AppDataSource } from "../data-source";
import { AddressRepo, RealEstateRepo } from "../interfaces/realEstates.interface";

export const userRepo: Repository<User> = AppDataSource.getRepository(User);
export const categoryRepo: Repository<Category> = AppDataSource.getRepository(Category);
export const addressRepo: AddressRepo = AppDataSource.getRepository(Address);
export const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate);
export const schedulesRepo: Repository<Schedule> = AppDataSource.getRepository(Schedule);