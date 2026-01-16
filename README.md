# Product API

API REST para cadastro e gerenciamento de produtos.

---

## ⚙️ Tecnologias

- Node.js  
- Express  
- Prisma ORM  
- PostgreSQL

---

## 🚀 Endpoints

| Método | Rota               | Descrição                   |
|--------|------------------|----------------------------|
| GET    | /api/products     | Lista todos os produtos     |
| GET    | /api/products/:id | Busca um produto por ID     |
| POST   | /api/products     | Cria um novo produto        |
| PUT    | /api/products/:id | Atualiza um produto         |
| DELETE | /api/products/:id | Deleta um produto           |

---

## 🗄️ Banco de Dados

Campos do produto:

- `id` (Int, auto-increment)  
- `name` (String)  
- `price` (Float)  
- `code` (String, único)  
- `createdAt` (DateTime, default now)

---

## 🏃 Como executar

1. Clonar o projeto:

    ```bash
    git clone <https://github.com/AndreBartholdy/product-api>
    cd product-api
    ```

2. Instalar dependências:

    ```bash
    npm install
    ```

3. Configurar o `.env`:

    ```env
    DATABASE_URL="postgresql://postgres:senha@localhost:5432/products?schema=public"
    ```

4. Rodar migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

5. Iniciar o servidor:

    ```bash
    npm start
    ```

A API estará rodando em: `http://localhost:3000/api`

---

## 📦 Exemplos de requisições

### Criar produto (POST)

```json
POST /api/products
{
  "name": "Guaraná Zero",
  "price": 5.50,
  "code": "P002"
}
```

### Listar todos os produtos (GET)

```json
GET /api/products
[
  {
    "id": 1,
    "name": "Coca-Cola Zero",
    "price": 6.5,
    "code": "P001",
    "createdAt": "2026-01-16T19:10:23.000Z"
  },
  {
    "id": 2,
    "name": "Guaraná Zero",
    "price": 5.5,
    "code": "P002",
    "createdAt": "2026-01-16T19:05:12.000Z"
  }
]
```

### Buscar produto por ID (GET)

```json
GET /api/products/1
{
  "id": 1,
  "name": "Guaraná Zero",
  "price": 5.5,
  "code": "P002",
  "createdAt": "2026-01-16T19:10:23.000Z"
}

### Atualizar produto (PUT)

```http
PUT /api/products/1
Content-Type: application/json

{
  "name": "Guaraná Zero Atualizado",
  "price": 5.75,
  "code": "P002A"
}
```

### Atualizar produto (PUT)

```json
PUT /api/products/1
{
  "message": "Produto deletado com sucesso"
}
```