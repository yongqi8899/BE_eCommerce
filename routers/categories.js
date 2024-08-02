import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/categories.js";


const categoryRoutes = Router();

categoryRoutes.get("/", getCategories);
categoryRoutes.post("/", createCategory);

categoryRoutes.get("/:id", getCategoryById);
categoryRoutes.put("/:id", updateCategory);
categoryRoutes.delete("/:id", deleteCategory);

export default categoryRoutes;
