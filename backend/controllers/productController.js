import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// @desc Fetch single products
// @route GET /api/products/:id
// @access public
const getProductsById = asyncHandler(async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch {
    res.status(404).json({ message: "Product not found" });
  }
});

export { getProducts, getProductsById };
