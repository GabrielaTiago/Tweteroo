import { throwCustomError } from "../errors/throwCustomErrors.js";
import { allTweets, users } from "../mock/data.js";

function getUserImage(username) {
  const image = users.find((user) => user.username === username);
  return image;
}

function createTweet(username, tweet) {
  const MAXIMUM_TWEET_SIZE = 140;
  const tweetSize = tweet.length;
  const { avatar } = getUserImage(username);

  if (!avatar) {
    throw throwCustomError(
      "notFound",
      "Something went wrong when fetching your user image"
    );
  }

  if (tweetSize > MAXIMUM_TWEET_SIZE) {
    throw throwCustomError(
      "forbidden",
      "The tweet size is longer than the allowed 140 characters"
    );
  }

  allTweets.push({ username, tweet, avatar });
}

function getTweets(page) {
  const MAX_TWEETS_PER_PAGE = 10;
  const tweets = allTweets;

  if (tweets <= MAX_TWEETS_PER_PAGE) {
    return [...tweets].reverse();
  } else {
    const start = (page - 1) * MAX_TWEETS_PER_PAGE;
    const end = page * MAX_TWEETS_PER_PAGE;

    return [...tweets].reverse().splice(start, end);
  }
}

function getTweetsByUsername(username) {
  const tweets = allTweets;

  const userTweets = tweets.filter((tweet) => tweet.username === username);

  return [...userTweets].reverse();
}

export { createTweet, getTweets, getTweetsByUsername };
