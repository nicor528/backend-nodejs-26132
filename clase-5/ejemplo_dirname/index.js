const fs = require("fs")
const path = require("path")

const filePath = path.join(__dirname, "data", "ejemplo.txt")
console.log("__dirname: ", __dirname)
console.log("La ruta quedo: ", filePath)

fs.readFile(filePath, "utf8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log("Dentro del archivo: ", data)
    }
})

/*
const filePath = path.join(__dirname, "..", "ejemplo2", "ejemplo.txt")
//console.log("__dirname: ", __dirname)
//console.log("La ruta quedo: ", filePath)

fs.readFile(filePath, "utf8", (error, data) => {
    if(error){
        console.log(error)
    }else{
        console.log("Dentro del archivo: ", data)
    }
})
*/