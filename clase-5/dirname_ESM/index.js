import { fileURLToPath } from "url";
import path from "path";
import fs from "fs"

const __fileName = fileURLToPath(import.meta.url)
console.log("__fileName: ", __fileName)
const __dirname = path.dirname(__fileName)

console.log("Ruta absoluta del archivo: ", __dirname)

const filePath = path.join(__dirname, "data", "ejemplo.txt")

fs.readFile(filePath, "utf8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log("Dentro del archivo: ", data)
    }
})
