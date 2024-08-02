import sequelize from "../db/index";
import { DataTypes } from "sequelize";

import { Order } from "./orders";
import { Product } from "./products";

export const OrderProduct = sequelize.define("OrderProduct", {
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: "id",
    },
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    references: {
      model: Product,
      key: "id",
    },
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
await OrderProduct.sync();