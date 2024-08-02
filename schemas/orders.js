import Joi from "joi";
// import { orderProduct } from "./orderProduct";

export const orders = {
  POST: Joi.object({
    total: Joi.number().positive().required(),
  }),
  PUT: Joi.object({
    total: Joi.number().positive().required(),
  }),
};
