import { Router } from "express";
import { userRouter } from "./users.router";
import { loginRouter } from "./login.router";
import { categoriesRouter } from "./categories.router";
import { realEstateRouter } from "./realEstate.router";
import { schedulesRouter } from "./schedules.router";

export const routes: Router = Router();

routes.use('/users', userRouter);
routes.use('/login', loginRouter);
routes.use('/categories', categoriesRouter);
routes.use('/realEstate', realEstateRouter);
routes.use('/schedules', schedulesRouter);