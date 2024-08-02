import sequelize from '../db/index.js';
import {DataTypes} from 'sequelize';

export const Order = sequelize.define("Order", {
  total: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});
await Order.sync();