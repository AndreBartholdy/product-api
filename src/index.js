import express from "express";
import productRoutes from "./routes/product.routes.js";

const app = express();

// Habilita JSON no body
app.use(express.json());

// Usa as rotas
app.use("/api", productRoutes);

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
