import * as Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'production', 'test')
    .default('development'),

  AUTH_PORT: Joi.number().default(3001),

  JWT_SECRET: Joi.string().min(32).required(),

  DB_HOST: Joi.string().required(),

  DB_PORT: Joi.number().required(),

  DB_USERNAME: Joi.string().required(),

  DB_PASSWORD: Joi.string().required(),

  DB_NAME: Joi.string().required(),

  RABBITMQ_URL: Joi.string().required(),
});
