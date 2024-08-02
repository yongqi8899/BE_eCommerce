import { Router } from "express";
import { createOrder, deleteOrder, getOrders, getOrderById, updateOrder } from "../controllers/orders.js";


const orderRoutes = Router();

orderRoutes.get("/", getOrders);
orderRoutes.post("/", createOrder);

orderRoutes.get("/:id", getOrderById);
orderRoutes.put("/:id", updateOrder);
orderRoutes.delete("/:id", deleteOrder);

export default orderRoutes;
