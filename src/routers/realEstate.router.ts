import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";

import { createRealEstateController, readRealEstatesController } from "../controllers/realEstate.controllers";
import { createRealEstateSchema } from "../schemas/realEstate.schemas";
import { verifyAddressExists } from "../middlewares/realEstates.middleware";

export const realEstateRouter: Router = Router();

realEstateRouter.post('/',
  verifyToken,
  verifyAdmin,
  verifyBody(createRealEstateSchema),
  verifyAddressExists, 
  createRealEstateController
);
realEstateRouter.get('/', readRealEstatesController);