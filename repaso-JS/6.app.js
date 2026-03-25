import { sumar,
  restar,
  multiplicar,
  dividir,
  sumaAsync
} from "./5.funciones.js";

console.log("Suma:", sumar(5, 3));
console.log("Resta:", restar(5, 3));
console.log("Multiplicación:", multiplicar(5, 3));
console.log("División:", dividir(5, 3));

// uso de promesa
sumaAsync(10, 5).then(resultado => {
  console.log("Suma async:", resultado);
});

const resultadoPromesa = sumaAsync(20, 10);
console.log("Resultado de la promesa:", resultadoPromesa); // Promise { <pending> }

const resultadoPromseaAwait = async () => {
  const resultado = await sumaAsync(20, 10);
  console.log("Resultado con await:", resultado);
};

resultadoPromseaAwait();