const texto = "Hola Mundo";

//length → longitud del string
console.log(texto.length); // 10

//toUpperCase() → convierte a mayúsculas / toLowerCase() → convierte a minúsculas
console.log(texto.toUpperCase()); // HOLA MUNDO
console.log(texto.toLowerCase()); // hola mundo

//includes() → verifica si el string contiene una subcadena
console.log(texto.includes("Mundo")); // true
console.log(texto.includes("mundo")); // false

//indexOf() → devuelve la posición de la primera aparición de una subcadena
console.log(texto.indexOf("Mundo")); // 5
console.log(texto.indexOf("mundo")); // -1 (no encontrado)

//slice() → extrae una parte del string
console.log(texto.slice(0, 4)); // Hola
console.log(texto.slice(5)); // Mundo

//replace() → reemplaza una subcadena por otra
console.log(texto.replace("Mundo", "Amigo")); // Hola Amigo

//trim() → elimina espacios en blanco al inicio y al final
const textoConEspacios = "   Hola Mundo   ";
console.log(textoConEspacios.trim()); // "Hola Mundo"

//split() → divide el string en un array de subcadenas
const palabras = texto.split(" ");
console.log(palabras); // ["Hola", "Mundo"]