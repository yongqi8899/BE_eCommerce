import express from "express";
import cors from "cors";

import "dotenv/config";
import "./db/index.js";

import usersRoutes from "./routers/users.js";
import categoryRoutes from "./routers/categories.js";
import orderRoutes from "./routers/orders.js";
import productsRoutes from "./routers/products.js";
import { errorHandler } from "./middleware/errorHandler.js";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/categories", categoryRoutes);
app.use("/orders", orderRoutes);
app.use("/products", productsRoutes);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
