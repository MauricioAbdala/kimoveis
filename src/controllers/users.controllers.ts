import { Request, Response } from "express";
import { createUserService, deleteUserService, readAllUserService, updateUserService } from "../services/users.services";
import { UserReturnInterface } from "../interfaces/user.interfaces";

export const createUserController = async (req: Request, res: Response): Promise<Response> => {
  const newUser: UserReturnInterface = await createUserService(req.body);

  return res.status(201).json(newUser);
};

export const readAllUserControllers = async (req: Request, res: Response): Promise<Response> => {
  const users = await readAllUserService();
  return res.status(200).json(users);
};

export const updateUserController = async (req: Request, res: Response): Promise<Response> => {
  const {user} = res.locals;
  const updateUser = await updateUserService(req.body, user);

  return res.status(200).json(updateUser);
};

export const deleteUserController = async (req: Request, res: Response): Promise<Response> => {
  const {user} = res.locals;
  await deleteUserService(user);
  return res.status(204).json();
;} 