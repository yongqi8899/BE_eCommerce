import { Order } from "./orders";
import { OrderProduct } from "./orderProduct";
import {User} from './users'
import { Product } from "./products";
import { Category } from "./categories";

Order.hasMany(OrderProduct, {foreignKey: 'OrderId'})
OrderProduct.belongsTo(Order, {foreignKey: 'OrderId'})

User.hasMany(Product, {foreignKey: 'ProductId'})
Product.belongsTo(User, {foreignKey: 'UserId'})

Category.hasMany(Product, {foreignKey: 'ProductId'})
Product.belongsTo(Category, {foreignKey: 'CategoryId'})

await Order.sync({ alter: true });
await User.sync({ alter: true });
await OrderProduct.sync({ alter: true });
await Category.sync({ alter: true });
await Product.sync({ alter: true });