// Clase base
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

const persona10 = new Persona("Nicolas", 29)
persona10.saludar()

// Clase derivada (herencia)
class Estudiante extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad); // llama al constructor de la clase base
        this.curso = curso;  // nueva propiedad específica
    }

    estudiar() {
        console.log(`${this.nombre} está estudiando ${this.curso}.`);
    }
}

// Crear instancias
const estudiante1 = new Estudiante("Nico", 28, "Node.js");
const estudiante2 = new Estudiante("Ana", 25, "JavaScript");

// Usar métodos
estudiante1.saludar(); // Hola, me llamo Nico y tengo 28 años.
estudiante1.estudiar(); // Nico está estudiando Node.js
estudiante2.saludar(); // Hola, me llamo Ana y tengo 25 años.
estudiante2.estudiar(); // Ana está estudiando JavaScript

//solucion a las multiples herencias
let mixinVolador = (base) => class extends base {
  volar() { console.log('Volando'); }
};

let mixinNadador = (base) => class extends base {
  nadar() { console.log('Nadando'); }
};

class Animal {}
class Pato extends mixinVolador(mixinNadador(Animal)) {}

let donald = new Pato();
donald.volar(); // Volando
donald.nadar(); // Nadando