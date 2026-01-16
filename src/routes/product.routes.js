import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// LISTAR TODOS OS PRODUTOS
router.get("/products", getProducts);

// LISTAR UM PRODUTO PELO ID
router.get("/products/:id", getProductById);

// CRIAR UM PRODUTO
router.post("/products", createProduct);

// ATUALIZAR UM PRODUTO
router.put("/products/:id", updateProduct);

// DELETAR UM PRODUTO
router.delete("/products/:id", deleteProduct);

export default router;
