import * as tweetService from "../services/tweetsService.js";

function createTweet(req, res) {
  const { tweet } = req.body;
  console.log(req.headers);
  const { user: username } = req.headers;

  tweetService.createTweet(username, tweet);

  res.status(201).send("OK");
}

function getTweets(_req, res) {
  const tweets = tweetService.getTweets();

  res.status(200).send(tweets);
}

export { createTweet, getTweets };
