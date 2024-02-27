console.log("Hola mundo");

//Ingresndo Datos tipo Scanf 

//prompt("Ingresa tu apellido"); hacer un scaneo o ingresar datos
var nombre=prompt("Ingrese su nombre");
console.log(nombre);
//let  no se puede renombrar
let apellido=prompt("Ingerese tu apellido");
console.log(apellido);
//var se puede renombrar y es aceptable
var edad=prompt("Ingrese du edad");
console.log(edad);

/*
//hacer suma 
let numeroUno=prompt("Ingrese el primer numero");
let numeroDos=prompt("Ingrese el segundo numero");

let Resultado= numeroUno+ numeroDos;
//saber que tipo nos esta dando la variable si es String, int, double etc
console.log(typeof numeroUno)
console.log(Resultado);
//error porque no nos suma solo lo concatena
*/

//hacer que sume, tenemos que parsear convertir a entero con parseInt 
let numeroUno=prompt("Ingrese el primer numero");
let numeroDos=prompt("Ingrese el segundo numero");

let Resultado= parseInt(numeroUno)+parseInt(numeroDos);
console.log(typeof Resultado);
console.log(Resultado);




