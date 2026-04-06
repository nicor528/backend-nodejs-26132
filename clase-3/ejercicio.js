/*
“Imaginá que los precios de los productos del cliente están listos para cargarse en el sistema” te 
dicen. Pero hay un detalle: antes de enviarlos, tenés que calcular el IVA del 21% y 
presentarlos de manera clara.

Tu misión:

1.Creá un array con 10 números que representen los precios de los productos.

2.Utilizá un método de array para calcular el precio con IVA incluido para cada valor.

"Ahora que tenés los valores con IVA calculados, es momento de mostrarlos como un desarrollador 
profesional". 

Matías te desafía a usar template literals para estructurar tu salida de esta forma:

El precio es: ${valor}.- IVA incluido.

Imprimí cada precio ajustado en la consola siguiendo este formato. Cada mensaje debe ser claro y profesional, 
como si estuvieras preparando un reporte para el cliente.
*/

const arrayPrecios = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

const precios_con_IVA = arrayPrecios.map(precio => precio * 1.21)

precios_con_IVA.forEach(precio => console.log(`El precio es: ${precio}.- IVA incluido.`))

//MARIANO
console.log("/////////MARIANO//////")
// 1.​ Creá un array con 10 números que representen los precios de los productos.
const prod_precios = [150, 200, 680, 485, 640, 240, 496, 365, 587, 333];

// 2.​ Utiliza un método de array para calcular el precio con IVA incluido para cada valor.
const precios_iva = prod_precios.map((precio)=> precio *= 1.21);

// Imprimí cada precio ajustado en la consola siguiendo este formato. El precio es: ${valor}.- IVA incluido.
for (let item of precios_iva){
    console.log(`El precio es: $${item}.- IVA incluido.`)
}

//VALE
console.log("/////////VALE//////")

// Array original
let precios = [100, 250, 399, 520, 75, 60, 890, 1200, 45, 300];

// Crear array con IVA
let preciosConIVA = precios.map(precio => precio * 1.21);

// Mostrar resultados
preciosConIVA.forEach((precio, i) => {
  console.log(`Producto ${i + 1}: $${precio.toFixed(2)}`);
});

/////////
/*
const fruta1 = {
    nombre : "manzana",
    precio : 100
}

const frutas = [ fruta1 ]
*/

// Marisa
console.log("Marisa")
const preciobase = 100
const precioconIva = precios.map((precio) => precio * 1.21);
console.log(precios); // [100]
console.log(precioconIva); // [121]