import { User } from "../entities";
import { UserAllReadReturnInterface, UserCreateInterface, UserReturnInterface, userUpdateInterface } from "../interfaces/user.interfaces";
import { userRepo } from "../repository";
import { userReturnListSchema, userReturnSchema } from "../schemas/users.schemas";

export const createUserService = async (payload: UserCreateInterface): Promise<UserReturnInterface> => {
    const newUser: User = userRepo.create(payload);

    await userRepo.save(newUser);

    return userReturnSchema.parse(newUser);
};

export const readAllUserService = async (): Promise<UserAllReadReturnInterface> => {
    const users: User[] = await userRepo.find();

    return userReturnListSchema.parse(users);
};


export const updateUserService = async(payload: userUpdateInterface, user: User): Promise<UserReturnInterface> => {
  const userUpdate: User = userRepo.create({...user, ...payload});

  await userRepo.save(userUpdate);

  return userReturnSchema.parse(userUpdate);
};

export const deleteUserService = async (user: User): Promise<void> => {
  await userRepo.remove(user);
};


