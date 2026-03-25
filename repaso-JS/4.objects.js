const persona = {
    nombre: "Juan",
    edad: 30,
    esEstudiante: true,
}

//Acceder a las propiedades del objeto
console.log(persona.nombre);

//Agregar una nueva propiedad al objeto
persona.apellido = "Gomez";
console.log(persona);

//modificar una propiedad existente
persona.edad = 31;
console.log(persona);

//eliminar una propiedad del objeto
delete persona.esEstudiante;
console.log(persona);

//keys → devuelve un array con las claves del objeto
const claves = Object.keys(persona);
console.log(claves); // ["nombre", "edad", "apellido"]

//values → devuelve un array con los valores del objeto
const valores = Object.values(persona);
console.log(valores); // ["Juan", 31, "Gomez"]

//entries → devuelve un array de pares [clave, valor]
const entradas = Object.entries(persona);
console.log(entradas); // [["nombre", "Juan"], ["edad", 31], ["apellido", "Gomez"]]

//desestructuración → extrae propiedades del objeto en variables
const { nombre, edad } = persona;
console.log(nombre);

//spread operator → copia las propiedades de un objeto a otro
const persona2 = { ...persona, ciudad: "Madrid" };
console.log(persona2); // { nombre: "Juan", edad: 31, apellido: "Gomez", ciudad: "Madrid" }

/*{
    {
        "nombre": "Juan",
        "edad": 30,
        "esEstudiante": true
    },
    ciudad: "Madrid"
}*/