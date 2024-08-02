import Joi from 'joi'

export const usersSchema = {
    POST: Joi.object({
        name: Joi.string().min(2).max(255).required(), 
    }),
    PUT: Joi.object({
        name: Joi.string().min(2).max(255).required(), 
    }),
}