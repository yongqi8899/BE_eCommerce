import Joi from 'joi'

export const usersSchema = {
    POST: Joi.object({
        firstName: Joi.string().min(2).max(255).required(), 
        lastName: Joi.string().min(2).max(255).required(), 
        email: Joi.string().email().required()
    }),
    PUT: Joi.object({
        firstName: Joi.string().min(2).max(255).required(), 
        lastName: Joi.string().min(2).max(255).required(), 
        email: Joi.string().email().required()
    }),
}