console.log("Programa iniciado")
console.log("Hola soy Codex")
import productsRouter from './src/rutas/products.routes.js';
import express from "express";
import cors from "cors";
import 'dotenv/config';

const app = express();
/*
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://example.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
});*/

app.use(cors({

  origin: (origin, callback) => {

    if (!origin || origin === `http://localhost:${PORT}`) {

      callback(null, true);

    } else {

      callback(new Error("No permitido por CORS"));

    }

  },

  methods: ["GET", "POST", "PUT", "DELETE"],

  allowedHeaders: ["Content-Type", "Authorization"]

}));

app.use(express.json());

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next();
})

app.get("/ping", (req, res) => {
  res.send("/pong").status(200)
})

app.get("/HTML", (req, res) => {
  res.send('<h1> Hola desde Express </h1>').status(200)
})

app.get("/JSON", (req, res) => {
  res.send({
    productos: [
      { nombre: "agua", precio: 1000 },
      { nombre: "yerba", precio: 2500 }
    ]
  }).status(200)
})

app.get('/items', (req, res) => {
  const category = req.query.category;
  const price = req.query.price;
  res.send(`Categoría: ${category}, Precio: ${price}`);
});


app.get('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`Devolviendo el ítem con ID: ${itemId}`);
});

app.use(productsRouter);

app.use(function (req, res, next) {
  res.status(404)
  res.send("ruta no encontrada")
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})