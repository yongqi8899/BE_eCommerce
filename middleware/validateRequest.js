import { User } from "../models/users.js";
import { usersSchema } from "../schemas/users.js";
import { ErrorResponse } from "../utils/ErrorResponse.js";

import { Category } from "../models/categories.js";
import { categoriesSchema } from "../schemas/categories.js";

export async function checkIfUserExists(req, res, next) {
  try {
    const {
      params: { id },
    } = req;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ error: "User not found" });
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const validateUser = (req, res, next) => {
  const { error } = usersSchema.POST.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};

export async function checkIfCategoryExists(req, res, next) {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    req.category = category;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

export const validateCategory = (req, res, next) => {
  const { error } = categoriesSchema.POST.validate(req.body);
  if (error) return next(new ErrorResponse(error, 400));
  next();
};