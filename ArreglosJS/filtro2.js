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

//filtrar los estudiantes hinchas del 
let filtro=estudiantes.filter(function(estudiante){
    return estudiante.equipo=="NACIONAL"
})
console.log(estudiantes)
console.log(filtro)