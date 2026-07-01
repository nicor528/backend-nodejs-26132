import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/products.controller.js';
import { authentication } from '../middleware/authentication.js';
const router = express.Router();

router.get('products', getAllProducts);

router.get("products/:id", getProductById);

router.post("products/create", authentication, createProduct);

router.put("products/:id", authentication, updateProduct);

router.delete("products/:id", authentication, deleteProduct)

//router.get("")

export default router;