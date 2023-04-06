import Joi from "joi";

export const signUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  rePassword: Joi.string().valid(Joi.ref('password')).required()
});

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required()
})