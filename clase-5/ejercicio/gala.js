const argumentos = process.argv.slice(2)
const comandos_validos = ["GET", "POST", "PUT", "DELETE"]

if (!(comandos_validos.includes(argumentos[0]))) {
    console.log("Comando no válido.")
}else {
    if (argumentos[0] === "GET") {
    console.log("Toma un dato.")
    }else {
        if (argumentos.length != 2) {
            console.log("Ingresá todos los argumentos (un comando backend y un valor).")
        }else {
            if (argumentos[0] === "PUT") {
                console.log(`Modificamos el item con id = ${argumentos[1]} correctamente.`)
            }
            else if (argumentos[0] === "DELETE") {
                console.log(`Eliminamos el item con id = ${argumentos[1]} correctamente.`)
            }
            else if (argumentos[0] === "POST") {
                console.log(`Recibimos ${argumentos[1]} correctamente.`)
            }
            else {
                console.log("Comando no válido.")
            }
        }
    }   
}