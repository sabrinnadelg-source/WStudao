import express from "express";
import mercadopago from "mercadopago";
import cors from "cors";
import fs from "fs";

const app = express();
app.use(express.json());
app.use(cors());

// CONFIG MERCADO PAGO
mercadopago.configure({
  access_token: "SEU_ACCESS_TOKEN"
});

// BANCO SIMPLES
const DB_FILE = "./orders.json";

function saveOrder(order) {
  let data = [];
  if (fs.existsSync(DB_FILE)) {
    data = JSON.parse(fs.readFileSync(DB_FILE));
  }
  data.push(order);
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

/* ======================================
🛒 CHECKOUT (AGORA CORRETO)
====================================== */
app.post("/checkout", async (req, res) => {
  try {
    const { customer, cart } = req.body;

    const order = {
      id: Date.now(),
      customer,
      cart,
      status: "pending",
      createdAt: new Date()
    };

    saveOrder(order);

    const preference = {
      items: cart.map(item => ({
        title: item.nome,
        quantity: item.qty,
        unit_price: 10
      })),

      // 🔔 WEBHOOK AQUI
      notification_url: "https://SEU-LINK-NGROK/webhook",

      back_urls: {
        success: "http://localhost:5500/success.html",
        failure: "http://localhost:5500/error.html"
      }
    };

    const response = await mercadopago.preferences.create(preference);

    res.json({
      checkout_url: response.body.init_point,
      order_id: order.id
    });

  } catch (err) {
    console.log(err);
    res.status(500).send("Erro no checkout");
  }
});

/* ======================================
🔔 WEBHOOK
====================================== */
app.post("/webhook", (req, res) => {
  console.log("🔔 WEBHOOK RECEBIDO:");
  console.log(req.body);

  res.sendStatus(200);
});

/* ======================================
🚀 SERVER
====================================== */
app.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
