import { Category } from "../models/categories.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createCategory = async (req, res) => {
  try {
    const {
      body: { name },
    } = req;

    if (!name) {
      return res.status(400).json({ error: "Category must have a name" });
    }

    const category = await Category.create(req.body);
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const {
      body: { name },
      params: { id },
    } = req;
    if (!name) {
      return res.status(400).json({ error: "Name is required" });
    }
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });

    category.update(req.body);
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const category = await Category.findByPk(id);
    if (!category) return res.status(404).json({ error: "Category not found" });
    await category.destroy();
    res.json({ message: "Category deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
