import express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import { errorHandler } from "./middlewares/errorHandler.js";
import { serverRouter } from "./routes/routes.js";

dotenv.config();

const server = express();

server.use(cors(), json());
server.use(serverRouter);
server.use(errorHandler);

// const users = [];
// const allTweets = [];

// server.get("/tweets", (require, response) => {
//   const NUMBER_OF_TWEETS = 10;
//   const lastTweets = allTweets.slice(-NUMBER_OF_TWEETS).reverse();
//   response.send(lastTweets);
// });

// server.post("/tweets", (require, response) => {
//   const tweet = require.body;
//   const getUserImage = users.find(
//     (profile) => profile.username === tweet.username
//   );
//   const newTweet = { ...tweet, avatar: getUserImage.avatar };

//   allTweets.push(newTweet);
//   response.send("OK");
// });

const PORT = Number(process.env.PORT) || 5500;

server.listen(PORT, () => {
  console.log(chalk.bold.green(`The server is up and runnig on port ${PORT}`));
});