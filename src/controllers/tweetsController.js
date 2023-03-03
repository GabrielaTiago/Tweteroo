import * as tweetService from "../services/tweetsService.js";

function createTweet(req, res) {
  const { tweet } = req.body;

  const { user: username } = req.headers;

  tweetService.createTweet(username, tweet);

  res.status(201).send("OK");
}

function getTweets(req, res) {
  const { page } = req.query;
  
  const tweets = tweetService.getTweets(page);

  res.status(200).send(tweets);
}

function getTweetsByUsername(req, res) {
  const { username } = req.params;

  const userTweets = tweetService.getTweetsByUsername(username);

  res.status(200).send(userTweets);
}

export { createTweet, getTweets, getTweetsByUsername };
