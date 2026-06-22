import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct } from '../controladores/products.controller.js';
const router = express.Router();

router.get('/products', getAllProducts);

router.get("/products/:id", getProductById);

router.post("/products", createProduct);

router.put("/products/:id", updateProduct);

//router.get("")

export default router;