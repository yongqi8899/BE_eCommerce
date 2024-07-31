import { Router } from "express";
import { createCategory, deleteCategory, getCategories, getCategoryById, updateCategory } from "../controllers/categories.js";

import {checkIfCategoryExists, checkIfUserExists} from '../middleware/validateRequest.js';

const categoryRoutes = Router();

categoryRoutes.get("/", getCategories);
categoryRoutes.post("/", createCategory);

categoryRoutes.get("/:id", checkIfCategoryExists, getCategoryById);
categoryRoutes.put("/:id", checkIfCategoryExists, updateCategory);
categoryRoutes.delete("/:id", checkIfCategoryExists, deleteCategory);

export default categoryRoutes;
