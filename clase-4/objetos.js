const persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

console.log(persona.nombre); // Juan
console.log(persona.edad); // 30
persona.saludar(); // Hola, mi nombre es Juan y tengo 30 años.

const persona2 = {
    nombre: "María",
    edad: 25,
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}

console.log(persona2.apellido); // undefined

persona.edad = 100
persona.nacionalidad = "Argentino"