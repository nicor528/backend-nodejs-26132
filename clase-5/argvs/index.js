const args = process.argv.slice(2)
console.log(args)

if (args[0] == "saludar"){
    console.log(`Buenas ${args[1] || "mundo"}`)
}else if (args[0] === "despedir"){
    console.log(`Adios ${args[1] || "mundo"}`)
}else {
    console.log("Comado no reconocido. Utiliza 'saludar' o 'despedir'")
}