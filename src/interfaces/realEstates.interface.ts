import { z } from "zod";

import { Address, RealEstate } from "../entities";
import { Repository } from "typeorm";
import { createRealEstateSchema } from "../schemas/realEstate.schemas";

export type CreateRealStateInterface = z.infer<typeof createRealEstateSchema>;

export type RealEstateRepo = Repository<RealEstate>;
export type AddressRepo = Repository<Address>;