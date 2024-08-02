import { Router } from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controllers/products.js";

const productsRoutes = Router();

productsRoutes.get("/", getProducts);
productsRoutes.post("/", createProduct);

productsRoutes.get("/:id", getProductById);
productsRoutes.put("/:id", updateProduct);
productsRoutes.delete("/:id", deleteProduct);

export default productsRoutes;
