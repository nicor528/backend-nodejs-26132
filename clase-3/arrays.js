const frutas = ["manzana", "banana", "naranja"];

console.log(frutas[0]); //manzana
console.log(frutas[1]); //banana
console.log(frutas[2]); //naranja

console.log(frutas.length); //tamaño del array

frutas.push("uva"); //agrega un elemento al final del array
console.log(frutas); //["manzana", "banana", "naranja", "uva"]

frutas.unshift("pera"); //agrega un elemento al inicio del array
console.log(frutas); //["pera", "manzana", "banana", "naranja", "uva"]

frutas.pop(); //elimina el último elemento del array
console.log(frutas); //["pera", "manzana", "banana", "naranja"]

frutas.shift(); //elimina el primer elemento del array
const verduras = ["lechuga", "tomate", "zanahoria"];
const frutas_join = frutas.join(", ");
console.log(frutas_join); // 

const frutas_mayusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(frutas_mayusculas); // 

const frutas_con_a = frutas.filter(fruta => fruta.includes("a"));
console.log(frutas_con_a); // 

const frutas_acumuladas = frutas.reduce((acumulador, fruta) => acumulador + " " + fruta);

const ventas = [100, 200, 300];
const totalVentas = ventas.reduce((total, venta) => total + venta, 0);
console.log(totalVentas); // 600

//forEach → ejecuta una función para cada elemento del array
frutas.forEach(fruta => console.log(fruta)); // Imprime cada fruta en una línea diferente

//for of → itera sobre los elementos del array
for (const fruta of frutas) {
    console.log(fruta);
}

const stringMullinea = `Línea 1
Línea 2
Línea 3`;

console.log(stringMullinea);
console.log(`varible: ${stringMullinea}`);

