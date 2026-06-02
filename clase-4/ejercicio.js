/*
1) Crea un array con 10 objetos, donde cada objeto represente un automóvil con la siguiente información:
Marca
Modelo
Año
Color
*/
const automoviles = [
  { marca: "Toyota", modelo: "Corolla", anio: 2015, color: "Blanco" },
  { marca: "Honda", modelo: "Civic", anio: 2021, color: "Rojo" },
  { marca: "Ford", modelo: "Mustang", anio: 2023, color: "Rojo" },
  { marca: "Chevrolet", modelo: "Bolt", anio: 2022, color: "Azul" },
  { marca: "Nissan", modelo: "Sentra", anio: 2020, color: "Gris" },
  { marca: "Volkswagen", modelo: "Golf", anio: 2004, color: "Plata" },
  { marca: "BMW", modelo: "Serie 3", anio: 2023, color: "Azul Marino" },
  { marca: "Mazda", modelo: "CX-5", anio: 2010, color: "Rojo Cristal" },
  { marca: "Hyundai", modelo: "Tucson", anio: 2023, color: "Verde" },
  { marca: "Tesla", modelo: "Model 3", anio: 2024, color: "Blanco Perla" }
];

/*
2) Usa un método de array para recorrer la lista e imprime por consola todos los datos de los 
automóviles cuyo año sea mayor a 2018.
*/
/*
automoviles.forEach((auto) => {
    console.log("///////////////////")
    console.log("Marca: ", auto.marca)
    console.log("Modelo: ", auto.modelo)
    console.log("Año: ", auto.anio)
    console.log("Color: ", auto.color)
    console.log("///////////////////")
})*/

automoviles.forEach((auto) => {
    if (auto.anio > 2018){
        console.table("///////////////////")
        console.table(`Marca: ${auto.marca}`)
        console.table(`Modelo: ${auto.modelo}`)
        console.table(`Año: ${auto.anio}`)
        console.table(`Color: ${auto.color}`)
        console.table("///////////////////")
    }
})
//resolucion de cami
// LISTA DONDE ESTAN LOS AUTOS
/*
const listaAutos = [auto1, auto2, auto3, auto4, auto5,auto6, auto7, auto8, auto9, auto10];
const autosFiltrados = listaAutos.filter( auto => auto.año > 2018);

autosFiltrados.forEach(auto => {
    console.log(auto.marca, auto.modelo, auto.año, auto.color);
});*/

//

/*
Crea una función que recorra el array de automóviles.

Usa destructuring dentro de la función para obtener el color de cada automóvil.

La función debe aceptar un color como parámetro y devolver por consola cuántos 
automóviles tienen ese color.
*/

function recorrerArray(colorAuto) {
    contador = 0
    automoviles.forEach((auto) => {
        const {color} = auto
        //console.log(colorAuto)
        if (color.toLowerCase() === colorAuto.toLowerCase()){
            contador ++
        }
    })
    if (contador > 1){
        console.table(`Hay ${contador} autos con el color ${colorAuto.toLowerCase()}`)
    }else if(contador == 1){
        console.table(`Hay ${contador} auto con el color ${colorAuto.toLowerCase()}`)
    }else{
        console.log(`No hay autos con el color ${colorAuto}`)
    }
}

recorrerArray("rojo")

class Auto {
    constructor(marca, modelo, anio, color){
        this.marca = marca;
        this.modelo = modelo;
        this.anio = anio;
        this.color = color;
    }
    //metodo para mostrar la info del auto
    mostrar_datos(){
        console.table("        *********************************")
        console.table(`        
        Marca: ${this.marca},
        Modelo: ${this.modelo},
        Año: ${this.anio},
        Color: ${this.color}.`);
    }
}

const auto_con_clases = automoviles.map(auto => new Auto(auto.marca, auto.modelo, auto.anio, auto.color))
console.log(auto_con_clases[0])

auto_con_clases.forEach(auto => auto.mostrar_datos())

//espera un array con objetos
console.table(automoviles)
//muestra los datos en formato tabla
/*
console.table(data, columns);
data: (Obligatorio) Los datos que deseas mostrar. Debe ser un arreglo o un objeto.
columns: (Opcional) Un arreglo de cadenas de texto con los nombres de las columnas que deseas incluir en la tabla.
*/