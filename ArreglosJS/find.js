let estudiantes=[
    {
        id:1,
        nombre:"Crsitian",
        equipo:"NACIONAL"
    },
    {
        id:2,
        nombre:"Camila",
        equipo:"NACIONAL"
    },
    {
        id:3,
        nombre:"Daniela",
        equipo:"MEDELLIN"
    },
]

let buscador=estudiantes.find(function(estudiante){
    return estudiante.id==3
})

let filtro=estudiantes.filter(function(estudiante){
    return estudiante.id==3
})

let busqueda=estudiantes.some(function(estudiante){
    return estudiante.id==3
})

console.log(buscador)
console.log(filtro)
console.log(busqueda)