import { Router } from "express";
import { loginController } from "../controllers/login.controllers";

export const loginRouter: Router = Router();

loginRouter.post('/', loginController);