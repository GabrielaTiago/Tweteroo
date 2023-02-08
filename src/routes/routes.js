import { Router } from "express";
import { authRouter } from "./authRouter.js";

const serverRouter = Router();

serverRouter.use(authRouter);

export { serverRouter };
