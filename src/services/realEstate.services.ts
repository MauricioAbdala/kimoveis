import { Address, Category, RealEstate } from "../entities";
import AppError from "../errors/AppError.error";
import { CreateRealStateInterface } from "../interfaces/realEstates.interface";
import { addressRepo, categoryRepo, realEstateRepo } from "../repository";



export const createRealEstateService = async (payload: CreateRealStateInterface): Promise<RealEstate> => {
    const category: Category | null = await categoryRepo.findOneBy({ id: payload.categoryId });

    if (!category) throw new AppError('Category not found', 404);

    const address: Address = await addressRepo.save(payload.address);

    const realEstate: RealEstate = await realEstateRepo.save({ ...payload, address, category: category! });

    return realEstate;

};

export const readRealEstatesService = async (): Promise<RealEstate[]> => {
    return await realEstateRepo.find({
        relations: {
            address: true
        }
    });
};
