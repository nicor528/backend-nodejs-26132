// let → se puede reasignar
// const → no se puede reasignar

let nombre = "Juan";
nombre = "Pedro";

const apellido = "Gomez";
//apellido = "Perez";// ❌ error

// Tipos de datos
const texto = "Hola Mundo"; // string
const numero = 42; // number
const booleano = true; // boolean
const nulo = null; // null
const indefinido = undefined; // undefined
const decimal = 3.14; // float

//Arrays
const frutas = ["manzana", "banana", "naranja"]; // array de strings
console.log(frutas[0]); // manzana

// objetos
const persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: true
};
console.log(persona.nombre); // Juan

console.log(nombre, apellido)
console.log(texto, numero, booleano, nulo, indefinido, decimal)
console.log(frutas)
console.log(persona)

//objeto dentro de array
const personas = [
    {
        nombre: "Juan",
        edad: 30
    },
    {
        nombre: "Maria",
        edad: 25
    }
];
console.log(personas[1].nombre) // Maria