import { authSchema } from "./authSchema.js";
import { tweetSchema } from "./tweetSchema.js";

const schemas = {
  auth: authSchema,
  tweet: tweetSchema
};

export { schemas };
