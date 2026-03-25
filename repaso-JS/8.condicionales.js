const edad = 18;

// if / else
if (edad >= 18) {
  console.log("Es mayor de edad");
} else {
  console.log("Es menor de edad");
}

// if / else if / else
const nota = 7;

if (nota >= 9) {
  console.log("Excelente");
} else if (nota >= 6) {
  console.log("Aprobado");
} else {
  console.log("Desaprobado");
}

// operador ternario (forma corta)
const mensaje = edad >= 18 ? "Puede pasar" : "No puede pasar";
console.log(mensaje);

//ternario anidado
const mensaje2 = nota >= 9 ? "Excelente" : nota >= 6 ? "Aprobado" : "Desaprobado";
console.log(mensaje2);

// switch
const dia = "lunes";

switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("Casi fin de semana");
    break;
  default:
    console.log("Día normal");
}

//
// Ejemplo de ternarios anidados
//const edad = 20;
const tipo = edad >= 18 ? "Adulto" : edad >= 13 ? "Adolescente" : "Niño";

// Ejemplo usando AND (&&) y OR (||)
const usuarioLogueado = true;
const tienePermiso = true;
const mensaje3 = (usuarioLogueado && tienePermiso) ? "Acceso concedido" : "Acceso denegado";
