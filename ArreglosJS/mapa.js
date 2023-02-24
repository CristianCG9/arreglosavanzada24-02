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

//mepeando el arreglo de estudiantes
let mapa=estudiantes.map(function(estudiante){
    estudiante.equipo="NACIONAL"
    estudiante.nota=4.9
    return estudiante
})
console.log(mapa)

let filtro=mapa.filter(function(estudiante){
    return estudiante.id==1   
})

console.log(filtro)