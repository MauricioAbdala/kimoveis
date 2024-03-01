import { z } from 'zod';
import { userPartialCreateSchema, userLoginSchema, userReturnSchema, userDataSchema, userUpdateSchema } from "../schemas/users.schemas";
import { DeepPartial } from 'typeorm';

export type UserInterface = z.infer<typeof userDataSchema>;

export type  UserCreateInterface = z.infer<typeof userPartialCreateSchema>;
export type UserReturnInterface = z.infer<typeof userReturnSchema>;
export type UserAllReadReturnInterface = UserReturnInterface[];
export type UserLoginInterface = z.infer<typeof userLoginSchema>;
export type UserLoginReturnInterface = {token: string};
export type UserBodyUpdate = Omit<UserCreateInterface, 'admin'>;
export type userUpdateInterface = DeepPartial<UserBodyUpdate>;


