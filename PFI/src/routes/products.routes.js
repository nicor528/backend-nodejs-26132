import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct } from '../controllers/products.controller.js';
const router = express.Router();

router.get('/products', getAllProducts);

router.get("/products/:id", getProductById);

router.post("/products/create", createProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct)

//router.get("")

export default router;