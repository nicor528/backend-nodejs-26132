// FOR clásico
// Se usa cuando sabemos cuántas veces queremos iterar

for (let i = 0; i < 5; i++) {
  console.log("For:", i);
}

// WHILE
// Se ejecuta mientras la condición sea verdadera

let contador = 0;

while (contador < 5) {
  console.log("While:", contador);
  contador++;
}

// DO WHILE
// Se ejecuta al menos una vez

let numero = 0;

do {
  console.log("Do While:", numero);
  numero++;
} while (numero < 3);

// FOR...OF
// Recorre valores de un array

const frutas = ["Manzana", "Banana", "Pera"];

for (const fruta of frutas) {
  console.log("For of:", fruta);
}

// FOR...IN
// Recorre propiedades de un objeto

const persona = {
  nombre: "Juan",
  edad: 30
};

for (const key in persona) {
  console.log("For in:", key, persona[key]);
}