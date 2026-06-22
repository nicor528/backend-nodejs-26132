import { readProductsFile } from './src/modelos/products.models.js';

const __dirname = import.meta.dirname;
console.log(__dirname)

console.log(process.cwd())

readProductsFile().then(products => {
    console.log(products);
}).catch(error => {
    console.error('Error al leer los productos:', error);
});