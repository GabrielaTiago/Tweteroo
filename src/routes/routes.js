import { Router } from "express";
import { authRouter } from "./authRouter.js";
import { tweetRouter } from "./tweetsRouter.js";

const serverRouter = Router();

serverRouter.use(authRouter);
serverRouter.use(tweetRouter);

export { serverRouter };
