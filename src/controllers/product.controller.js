import { prisma } from "../config/prisma.js";

// 🟢 LISTAR TODOS OS PRODUTOS
export const getProducts = async (req, res) => {
  try {
    const products = await prisma.product.findMany();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
};

// 🟢 LISTAR UM PRODUTO PELO ID
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: parseInt(id) },
    });

    if (!product) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
};

// 🟢 CRIAR UM NOVO PRODUTO
export const createProduct = async (req, res) => {
  try {
    const { name, price, code } = req.body;

    const product = await prisma.product.create({
      data: { name, price, code },
    });

    res.status(201).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
};

// 🟢 ATUALIZAR UM PRODUTO
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, code } = req.body;

    const updatedProduct = await prisma.product.update({
      where: { id: parseInt(id) },
      data: { name, price, code },
    });

    res.json(updatedProduct);
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      // Prisma lança esse erro se o registro não existir
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
};

// 🟢 DELETAR UM PRODUTO
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.product.delete({
      where: { id: parseInt(id) },
    });

    res.json({ message: "Produto deletado com sucesso" });
  } catch (error) {
    console.error(error);

    if (error.code === "P2025") {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    res.status(500).json({ error: "Erro ao deletar produto" });
  }
};
