# 🛒 Wstudao — Loja Dropshipping Automatizada

Sistema completo de loja online com:

* 🛍️ Front-end (loja)
* 🔐 Painel administrativo (admin)
* 💳 Integração com Mercado Pago
* 📦 Gestão de pedidos
* 📲 Envio via WhatsApp

---

# 🚀 Funcionalidades

## 🛍️ Loja (index.html)

* Listagem de produtos
* Carrinho dinâmico
* Checkout com dados do cliente
* Integração com pagamento
* Redirecionamento automático

## 🔐 Painel Admin (admin.html)

* Login protegido
* Lista de pedidos em tempo real
* Atualização de status:

  * ✔ Pago
  * 📦 Enviado
  * ❌ Cancelado
* Cálculo automático de lucro
* Link direto para fornecedor

## 📲 WhatsApp

* Botão para envio automático ao cliente
* Mensagem pronta com pedido enviado

---

# 🧠 Tecnologias usadas

* HTML / CSS / JavaScript
* Node.js
* Express
* Mercado Pago API
* JSON (banco simples)

---

# 📦 Estrutura do projeto

```
/projeto
  ├── index.html        # Loja
  ├── admin.html        # Painel admin
  ├── server.js         # Backend
  ├── orders.json       # Banco de dados
```

---

# ⚙️ Instalação

## 1. Instalar dependências

```bash
npm install express mercadopago cors fs
```

## 2. Rodar servidor

```bash
node server.js
```

Servidor:

```
http://localhost:3000
```

---

# 🔑 Configuração

## Mercado Pago

No `server.js`:

```js
mercadopago.configure({
  access_token: "SEU_ACCESS_TOKEN"
});
```

---

# 🔐 Login do Admin

```
email: admin@wstudao.com
senha: 123456
```

---

# 📲 WhatsApp (modo manual)

Ao clicar em:

```
📦 Enviado + WhatsApp
```

Abre conversa com mensagem pronta:

```
Olá! Seu pedido foi enviado 🚚
```

---

# 📊 Fluxo do sistema

1. Cliente adiciona produto
2. Finaliza compra
3. Pedido salvo no `orders.json`
4. Admin acessa painel
5. Atualiza status
6. Envia mensagem ao cliente

---

# ⚠️ Observações

* Sistema usa banco simples (JSON)
* Ideal para MVP ou testes
* Para produção, usar banco real (MongoDB / MySQL)

---

# 🚀 Melhorias futuras

* 💰 Confirmação automática de pagamento
* 📦 Código de rastreio
* 🤖 WhatsApp automático via API
* 📊 Dashboard com gráficos
* 🔐 Autenticação JWT real

---

# 👨‍💻 Autor

Projeto desenvolvido para criação de loja dropshipping automatizada.

---

# 📄 Licença

Uso livre para estudos e projetos próprios.
