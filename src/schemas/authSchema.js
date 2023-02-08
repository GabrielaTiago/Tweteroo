import joi from "joi";

const authSchema = joi.object({
  username: joi.string().required(),
  avatar: joi.string().required()
});

export { authSchema };
