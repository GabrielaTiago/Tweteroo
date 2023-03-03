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

const PORT = Number(process.env.PORT) || 5500;

server.listen(PORT, () => {
  console.log(chalk.bold.green(`The server is up and runnig on port ${PORT}`));
});
