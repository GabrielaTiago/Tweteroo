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
    const NUMBER_OF_TWEETS = 10;
    const lastTweets = allTweets.slice(-NUMBER_OF_TWEETS).reverse();
    response.send(lastTweets);
});

server.post("/tweets", (require, response) => {
    const tweet = require.body;
    const getUserImage = users.find(profile => profile.username === tweet.username);
    const newTweet = { ...tweet, avatar: getUserImage.avatar };

    allTweets.push(newTweet);
    response.send("OK");
});

server.listen(5000);