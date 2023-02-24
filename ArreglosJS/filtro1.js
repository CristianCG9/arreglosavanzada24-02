//Array Metodos: filter, find, map, foreach

let numeros=[1,2,3,4,5,6,7,8,9,10]

//Recorrer el arreglo y filtrar con alguna condición
//función anonima, función que no tiene nombre y solo se ejecuta una vez
let filtro=numeros.filter(function(numero){
    return numero>5
})
console.log(numeros)//Imprime todo el array
console.log(filtro)//Imprime la condición del array