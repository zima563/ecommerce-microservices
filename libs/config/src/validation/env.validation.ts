import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  AUTH_PORT: Joi.number().default(3001),

  JWT_SECRET: Joi.string().min(32).required(),

  DATABASE_URL: Joi.string().required(),

  RABBITMQ_URL: Joi.string().required(),
});
