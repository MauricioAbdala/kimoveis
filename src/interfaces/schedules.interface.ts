import { z } from "zod";
import { createNewSchedulesSchema } from "../schemas/schedules.schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

export type CreateSchedules = z.infer<typeof createNewSchedulesSchema>;

export type SchedulesRepo = Repository<Schedule>;