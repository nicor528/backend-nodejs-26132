import express from 'express';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use((req, res, next) => {
  console.log(`Datos recibidos: ${req.method} ${req.url}`);
  next(); // Pasa el control al siguiente middleware o ruta
});

app.get('/', (req, res) => { 
    res.send('Hola, mundo desde Express!');
});

app.use("/docs", express.static(join(__dirname, 'public')));

app.get('/productos', (req, res) => { 
    res.send('Hola, mundo desde PRODUCTOS!');
});

app.use(function(req, res, next) {
  res.status(404)
  res.send("ruta no encontrada")
});

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Servidor en http://localhost:${PORT}`);
});