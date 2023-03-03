import joi from "joi";

const tweetSchema = joi.object({
  tweet: joi.string().required(),
});

export { tweetSchema };
