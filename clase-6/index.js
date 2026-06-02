function asyncTask (callback) {
    setTimeout(() => {
       console.log("Tarea asincronica completada")
       callback() 
    }, 3000);
}

console.log("Inicio de la tarea") //entra en la call stack
asyncTask(() => {
    console.log("Fin de la tarea")
})

function taskAsync( ) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.5){
                res("Tarea asincronica completada.")
            }else {
                rej(new Error("tarea asincronica fallida"))
            }
        }, 2000)
    })
}
/*
const result = taskAsync()
console.log(result)*/


async function executeAsyncTask () {
    console.log("inicio de la tarea async/await")
    try{
        const result2 = await taskAsync()
        console.log(result2)
    }catch(error){
        console.log(error)
    } finally {
        console.log("Fin de la tarea async/await")
    }
}

executeAsyncTask()

console.log("Inicio de la promesa");
taskAsync().then((resultado) => {
    console.log(resultado)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Fin de la promesa")
})

console.log("Codigo por fuera de la promesa")

