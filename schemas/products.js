import Joi from 'joi';

export const productsSchema = {
    POST: Joi.object({
        name: Joi.string().min(2).max(255).required(),
        description: Joi.string().max(1000), // Optional with max length 1000
        price: Joi.number().positive().precision(2).required(),
        category_id: Joi.number().integer().positive().required()
    }),
    PUT: Joi.object({
        name: Joi.string().min(2).max(255).required(),
        description: Joi.string().max(1000), // Optional with max length 1000
        price: Joi.number().positive().precision(2).required(),
        category_id: Joi.number().integer().positive().required()
    })
};