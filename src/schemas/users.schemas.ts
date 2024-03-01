import { z } from "zod";


const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const userDataSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().max(45).refine((value) => emailRegex.test(value), {
        message: "Invalid email",
    }),
    password: z.string().max(120),
    admin: z.boolean().default(() => false),
    createdAt: z.string().or(z.date()),
    updatedAt: z.string().or(z.date()),
    deletedAt: z.string().or(z.date()).nullable()
});

export const userPartialCreateSchema = userDataSchema.pick({
    name: true,
    email: true,
    password: true,
    admin: true
});
export const userReturnSchema = userDataSchema.omit({ password: true });
export const userReturnListSchema = userReturnSchema.array();
export const userAllReadSchema = userReturnSchema.array();
export const userLoginSchema = userDataSchema.pick({ email: true, password: true });
export const userCreateUpdateSchema = userPartialCreateSchema.omit({admin: true});
export const userUpdateSchema = userCreateUpdateSchema.partial();