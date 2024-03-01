import { z } from "zod";

export const schedulesSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().positive().int(),
    userId: z.number().positive().int(),
});

export const createNewSchedulesSchema = schedulesSchema.omit({ id: true, userId: true });