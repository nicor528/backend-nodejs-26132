const url = 'https://rickandmortyapi.com/api'
/*
function obtener5pj () {
    return(
        new Promise((res, rej) => {
            fetch(`${url}/character`,{
                method: "GET"
            })
            .then(response => response.json())
            .then(data => res(data.results.slice(0,5)))
            .catch(error => rej(error))
        })
    )
}

obtener5pj().then(personajes => {
    console.log(personajes)
}).catch(error => {
    console.log(error)
}).finally(() => console.log("Proceso terminado"))*/

async function obtenerPJSAsync() {
    try{
        const response = await fetch(`${url}/character`, {
            method: "GET"
        })
        let data;
        if (response.status == 200){
            data = await response.json()
            return data.results.slice(0,5)
        }else{
            console.log(response.status)
        }
    }catch(error){
        console.log(error)
    }finally{
        console.log("Proceso terminado")
    }
}

const data = await obtenerPJSAsync()
console.log(data)