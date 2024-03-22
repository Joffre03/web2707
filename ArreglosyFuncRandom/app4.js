//Hacer un random y generar un numero aleatorio

function numeroAleatorio(min,max){
    return Math.floor(Math.random()*(max-min))+min; //sintaxis 
}

console.log(numeroAleatorio(5,156)); //se manda a llamar la funcion y se pne el mino y maximo 

//lo mismo pero ahora con una const 
const miNumero=function (min,max){
    return Math.floor(Math.random()*(max-min))+min;
}
console.log(miNumero(5,156));

//funcion normal
/*
function suma(a){ //funcion de sumar con una variable a 
    returna a+20; //como resultado nos retornara lo almacenado en a + 20
}
console.log(suma(2)); //decimos cuanto vale a 
*/

//hacer lo mismo pero con funcion flecha
let dato=(a)=> a+20; //declaramos una variable y el nombre de la funcion porque se asigna a una variable  donde nos dice que dato se le asigna a y a se convertira en a +20

console.log(dato(2)); //por ultimo decimos cuanto vale a 


//covertir random a funcion flecha 
const miNumero2=(min,max)=>Math.floor(Math.random()*(max-min))+min;
console.log(miNumero(1,10));


