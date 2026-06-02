console.log("Programa iniciado")
const args = process.argv.slice(2)
//const args = process.argv
//const comando = process.argv[2]
//const data = process.argv[3]
//console.log(args)
switch (args[0]){
    case "GET":
        console.log("Toma un dato")
        break;
    case "POST":
        if (args.length < 1){
            console.log("comando incompleto")
            break
        }
        console.log(`Recibimos ${args[1]} satisfactoriamente`)
        break;
    case "PUT":
        if (args.length < 1){
            console.log("comando incompleto")
            break
        }
        console.log(`Modificamos el item con id: ${args[1]} satisfactoriamente`);
        break;
    case "DELETE":
        if (args.length < 1){
            console.log("comando incompleto")
            break
        }
        console.log(`El item con el id: ${args[1]} se eliminó con éxito`)
        break;
    default:
        console.log("Error, comando no reconocido")
        break;
}

console.log("Programa finalizado")