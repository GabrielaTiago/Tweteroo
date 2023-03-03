import { Router } from "express";
import {
  createTweet,
  getTweets,
  getTweetsByUsername,
} from "../controllers/tweetsController.js";
import { validatesSchemas } from "../middlewares/validateSchemas.js";

const tweetRouter = Router();

tweetRouter.post("/tweets", validatesSchemas("tweet"), createTweet);
tweetRouter.get("/tweets", getTweets);
tweetRouter.get("/tweets/:username", getTweetsByUsername);

export { tweetRouter };
