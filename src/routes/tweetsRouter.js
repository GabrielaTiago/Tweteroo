import { Router } from "express";
import { createTweet } from "../controllers/tweetsController.js";
import { validatesSchemas } from "../middlewares/validateSchemas.js";

const tweetRouter = Router();

tweetRouter.post("/tweets", validatesSchemas("tweet"), createTweet);

export { tweetRouter };
