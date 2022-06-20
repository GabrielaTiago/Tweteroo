import express from "express";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const users = [];
const allTweets = [];

server.post("/sign-up", (require, response) => {
    const user = require.body;
    users.push(user);
    response.send("OK");
});

server.get("/tweets", (require, response) => {
    response.send(allTweets);
});

server.listen(5000);