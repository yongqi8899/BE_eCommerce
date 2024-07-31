const Joi = require('joi');

const orderSchema = Joi.object({
    userId: Joi.number().integer().required(),
    products: Joi.array().items(
        Joi.object({
            productId: Joi.number().integer().required(),
            quantity: Joi.number().integer().min(1).required()
        })
    ).min(1).required()
});

exports.validateCreateOrder = (req, res, next) => {
    const { error } = orderSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};

exports.validateUpdateOrder = (req, res, next) => {
    const updateSchema = orderSchema.keys({
        userId: Joi.number().integer(),
        products: Joi.array().items(
            Joi.object({
                productId: Joi.number().integer().required(),
                quantity: Joi.number().integer().min(1).required()
            })
        ).min(1)
    }).min(1);

    const { error } = updateSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
};