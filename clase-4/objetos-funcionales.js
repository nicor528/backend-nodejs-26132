function Persona (nombre, edad) {
    this.nombre = nombre
    this.edad = edad

    this.saludar = function () {
        console.log(`Hola me llamo ${this.nombre}` )
    }
}

const persona1 = new Persona("Nicolas", 29)
const persona2 = new Persona("Agustina", 27)

persona1.saludar();
persona2.saludar();

