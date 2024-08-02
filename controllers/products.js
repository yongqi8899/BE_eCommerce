import { Product } from "../models/products.js"; // Assuming models are defined in a separate 'models' directory

// Get all products, optionally filtered by category ID
export const getProducts = async (req, res) => {
  try {
    const categoryId = req.query.categoryId;
    const filter = categoryId ? { where: { categoryId: categoryId } } : {};
    const products = await Product.findAll(filter);
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving products." });
  }
};

// Get a specific product by ID
export const getProductById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the product." });
  }
};

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const { name, description, price, categoryId } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
      categoryId,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the product." });
  }
};

// Update a specific product by ID
export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, description, price, categoryId } = req.body;
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    await product.update({ name, description, price, categoryId });
    res.json(product);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while updating the product." });
  }
};

// Delete a specific product by ID
export const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found." });
    }

    await product.destroy();
    res.json({ message: "Product deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while deleting the product." });
  }
};
