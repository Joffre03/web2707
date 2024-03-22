
/*const miArreglo=[];
miArreglo[0]=["Nuevo elemnento"];
console.log(miArreglo)
*/

//push
const frutas=["platano"]; //declaramos arreglo 
frutas.push()//mandamos a llamar al arreglo y luego mandamos a llamar al metodo que es push y lo que hace es instertar los datos al final del arreglo
console.log(frutas);

//unshift
const frutas2=["platano","Uva"];
frutas2.unshift("Sandia"); //mandamos a llamar al metodo unshift que lo que hace es insertar 1 o mas elementos al inicio del arreglo
console.log(frutas2);
//pop
const frutaeliminada=frutas2.pop(); //hacemos una variable donde se guarde la fruta que vamos a eliminar y despues asignamos a esa variable el metodo pop y lo que hace es eliminar el ultimo dato del arreglo
console.log(frutas2); //nos imprimira nuestro arreglo con el ultimo elemento eliminado
console.log(frutaeliminada); //nos imprimira la fruta eliminada

const frutaeliminada2=frutas2.shift(); //es el metodo shift para eliminar el primer dato del arreglo
console.log(frutas2);//imprime el arreglo frutas 
console.log(frutaeliminada2); //nos da la fruta eliminada al inicios
 



