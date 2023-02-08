import * as tweetService from "../services/tweetsService.js";

function createTweet(req, res) {
  const { username, tweet } = req.body;

  tweetService.createTweet(username, tweet);

  res.status(201).send("OK");
}

export { createTweet };
