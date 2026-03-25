//funciones basicas

export const sumar = (a, b) => a + b;

export function restar(a, b) {
    return a - b;
}

export const multiplicar = function(a, b) {
    return a * b;
}

export const dividir = (a, b) => {
    if (b === 0) {
        return 'No se puede dividir por cero';
    }
    return a / b;
}

const resultado = sumar(5, 3); // 8
console.log(resultado);

console.log(restar(10, 4)); // 6

console.log(multiplicar(6, 7)); // 42
console.log(dividir(20, 5)); // 4
console.log(dividir(10, 0)); // No se puede dividir por cero

//promesas
const promesa = new Promise((resolve, reject) => {
    const exito = true; // Cambia a false para simular fallo
    if (exito) {
        resolve("La operación fue exitosa");
    } else {
        reject("La operación falló");
    }
});

promesa
.then(resultado => {
    console.log(resultado); // La operación fue exitosa
}).catch(error => {
    console.error(error);
}).finally(() => {
    console.log("Operación finalizada");
});

export const sumaAsync = (a, b) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};