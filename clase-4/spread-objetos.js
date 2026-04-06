const persona = {
    nombre : "nicolas",
    edad : 29
}

const estudiante = {
    curso : "nodejs",
    notas : [10,8,6]
}

//console.log(...persona, ...estudiante)
const alumno = {...estudiante, ...persona}
console.log(alumno)

const persona1 = {
    nombre : "nicolas",
    edad : 29
}

const estudiante1 = {
    curso : "nodejs"
}
const alumno1 = {estudiante1, persona1}
console.log(alumno1)