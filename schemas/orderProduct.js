import Joi from "joi";
// import { orderProduct } from "./orderProduct";

export const orders = {
  POST: Joi.object({
    quantity: Joi.number().positive().required(),
    orderId: Joi.number().positive().required(),
    productId: Joi.number().positive().required(),
  }),
  PUT: Joi.object({
    quantity: Joi.number().positive().required(),
    orderId: Joi.number().positive().required(),
    productId: Joi.number().positive().required(),
  }),
};
