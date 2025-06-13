const db = require('../models');
const Product = db.Product;

// Create a new product
exports.createProduct = async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    if (!name || price == null || quantity == null) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newProduct = await Product.create({ name, price, quantity });
    res.status(201).json({ message: 'Product created', product: newProduct });
  } catch (err) {
    console.error('Create Product Error:', err);
    res.status(500).json({ message: 'Server error creating product' });
  }
};

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (err) {
    console.error('Get All Products Error:', err);
    res.status(500).json({ message: 'Server error fetching products' });
  }
};

// Get product by ID
exports.getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.status(200).json(product);
  } catch (err) {
    console.error('Get Product Error:', err);
    res.status(500).json({ message: 'Server error fetching product' });
  }
};

// Update product by ID
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.update({ name, price, quantity });
    res.status(200).json({ message: 'Product updated', product });
  } catch (err) {
    console.error('Update Product Error:', err);
    res.status(500).json({ message: 'Server error updating product' });
  }
};

// Delete product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByPk(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.destroy();
    res.status(200).json({ message: 'Product deleted' });
  } catch (err) {
    console.error('Delete Product Error:', err);
    res.status(500).json({ message: 'Server error deleting product' });
  }
};
