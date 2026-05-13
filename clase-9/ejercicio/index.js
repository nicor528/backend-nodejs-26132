console.log("Programa iniciado")
import express from "express";

const app = express();

app.use((req, res, next) => {
    console.log(`Datos recibidos: ${req.method} ${req.url}`);
    next();
})

app.get("/ping", (req, res) => {
    res.send("/pong")
})

app.use(function(req, res, next) {
  res.status(404)
  res.send("ruta no encontrada")
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})