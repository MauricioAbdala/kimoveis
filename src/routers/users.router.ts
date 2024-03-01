import { Router } from "express";
import { createUserController, deleteUserController, readAllUserControllers, updateUserController } from "../controllers/users.controllers";
import { verifyAdmin, verifyBody, verifyPermissions, verifyToken } from "../middlewares/globals.middleware";
import { verifyUniqueUserEmail, verifyUserExists } from "../middlewares/users.middlewares";
import { userPartialCreateSchema, userUpdateSchema } from "../schemas/users.schemas";

export const userRouter: Router = Router();

userRouter.post('/', verifyBody(userPartialCreateSchema), verifyUniqueUserEmail, createUserController);
userRouter.get('/', verifyToken, verifyAdmin, readAllUserControllers);
userRouter.patch('/:id', verifyBody(userUpdateSchema), verifyToken, verifyUserExists, verifyPermissions, updateUserController);
userRouter.delete('/:id', verifyToken, verifyUserExists, verifyPermissions, verifyAdmin, deleteUserController);

