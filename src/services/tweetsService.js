import { throwCustomError } from "../errors/throwCustomErrors.js";
import { allTweets, users } from "../mock/data.js";

function getUserImage(username) {
  const image = users.find((user) => user.username === username);
  return image;
}

function createTweet(username, tweet) {
  const MAXIMUM_TWEET_SIZE = 140;
  const tweetSize = tweet.length;
  const avatar = getUserImage(username);

  if (!avatar) {
    throwCustomError(
      "notFound",
      "Something went wrong when fetching your user image"
    );
  }

  if (tweetSize > MAXIMUM_TWEET_SIZE) {
    throwCustomError(
      "forbidden",
      "The tweet size is longer than the allowed 140 characters"
    );
  }

  allTweets.push({ username, tweet, avatar });
}

export { createTweet };
