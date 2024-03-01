import { Router } from "express";
import { verifyAdmin, verifyBody, verifyToken } from "../middlewares/globals.middleware";
import { verifyRealEstateSchedulesExists, verifyRealEstateExists, verifyUserScheduleExists } from "../middlewares/schedules.middleware";
import { createNewSchedulesSchema } from "../schemas/schedules.schemas";
import { createSchedulesController, readAllSchedulesRealEstatesController } from "../controllers/schedules.controllers";

export const schedulesRouter: Router = Router();

schedulesRouter.post('/',
  verifyToken,
  verifyBody(createNewSchedulesSchema),
  verifyRealEstateExists,
  verifyRealEstateSchedulesExists,
  verifyUserScheduleExists,
  createSchedulesController 
);
schedulesRouter.get('/realEstate/:id', verifyToken, verifyAdmin, readAllSchedulesRealEstatesController);