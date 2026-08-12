# 🏎️ Project Formula 1 - API

API RESTful desenvolvida com **Node.js**, **Fastify** e **TypeScript** para fornecer dados centralizados sobre as equipes e os pilotos da temporada de Fórmula 1.

O projeto foi construído com foco em alta performance, código tipado e respostas rápidas em JSON.

---

## 🛠️ Tecnologias Utilizadas

* **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript no servidor
* **[Fastify](https://fastify.dev/)** - Framework web focado em baixíssimo overhead e alta velocidade
* **[TypeScript](https://www.typescriptlang.org/)** - Superconjunto de JavaScript que adiciona tipagem estática
* **[@fastify/cors](https://github.com/fastify/fastify-cors)** - Suporte a requisições de origens cruzadas (CORS)

---

## 📌 Rotas da API

### 1. Listar Equipes
* **Rota:** `GET /teams`
* **Descrição:** Retorna a lista completa de equipes de F1 e suas respectivas sedes.
* **Exemplo de Resposta (200 OK):**
  ```json
  {
    "teams": [
      { "id": 1, "name": "McLaren", "base": "Woking, United Kingdom" },
      { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" }
    ]
  }
