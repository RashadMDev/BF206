import Product from '../models/Product.js';

export const getProducts = async (req, res) => {
      try {
            const products = await Product.find();
            res.json(products);
      } catch (err) {
            res.status(500).json({ message: 'Server error' });
      }
};

export const getProductById = async (req, res) => {
      try {
            const product = await Product.findById(req.params.id);
            if (!product) return res.status(404).json({ message: 'Not found' });
            res.json(product);
      } catch (err) {
            res.status(500).json({ message: 'Server error' });
      }
};

export const createProduct = async (req, res) => {
      const { name, price, image, description } = req.body;
      try {
            const newProduct = new Product({ name, price, image, description });
            const saved = await newProduct.save();
            res.status(201).json(saved);
      } catch (err) {
            res.status(400).json({ message: 'Create failed' });
      }
};

export const updateProduct = async (req, res) => {
      const { name, price, image, description } = req.body;
      try {
            const updated = await Product.findByIdAndUpdate(
                  req.params.id,
                  { name, price, image, description },
                  { new: true }
            );
            if (!updated) return res.status(404).json({ message: 'Not found' });
            res.json(updated);
      } catch (err) {
            res.status(400).json({ message: 'Update failed' });
      }
};

export const deleteProduct = async (req, res) => {
      try {
            const removed = await Product.findByIdAndDelete(req.params.id);
            if (!removed) return res.status(404).json({ message: 'Not found' });
            res.json({ message: 'Product deleted' });
      } catch (err) {
            res.status(500).json({ message: 'Delete failed' });
      }
};
