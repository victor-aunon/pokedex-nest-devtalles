import * as Joi from 'joi';

export const validationSchema = Joi.object({
  MONGO_URI: Joi.string().min(10).required(),
  PORT: Joi.number().positive().default(3001),
  PAGINATION_LIMIT: Joi.number().positive().min(1).default(20),
});
