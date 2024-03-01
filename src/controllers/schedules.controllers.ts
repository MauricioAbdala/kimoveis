import { Request, Response } from "express";
import { createSchedulesService, readAllSchedulesRealEstatesService,  } from "../services/schedules.services";

export const createSchedulesController = async (req: Request, res: Response): Promise<Response>  => {
  const {sub} = res.locals.decoded;
  await createSchedulesService(req.body, sub);

  return res.status(201).json({message: 'Schedule created'});
};


export const readAllSchedulesRealEstatesController = async (req: Request, res: Response): Promise<Response> => {
  const {id} = req.params;
  const realEstate = await readAllSchedulesRealEstatesService(Number(id));

   return res.status(200).json(realEstate);
};
