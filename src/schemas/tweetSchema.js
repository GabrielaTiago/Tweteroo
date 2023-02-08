import joi from "joi";

const tweetSchema = joi.object({
  username: joi.string().required(),
  tweet: joi.string().required(),
});

export { tweetSchema };
