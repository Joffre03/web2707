/*
let textJavascript= prompt("Escriba 'javascript");
if(textJavascript==="javascript"){
        console.log("Lo escribiste bien!!");

}else{
    console.log("Forma Incorrecta");
}

//hacer un numero que si es menor o igual a 10 es correcto si no es incorrecto
var Numero1=parseInt(prompt("Digite el su numero")); //se declara variable para guardar un numero


if(Numero1<=10){ //si el numero almacenado es menor o igual a 10 es correcta la forma
    alert("Forma correcta")
}else { //si esmayor a 10 forma incorrecta 
    alert("Forma Incorrecta")
}

//las comillas invertidas dentro del prompt nos sirven para poder escoger o dar varias opciones y podemos digitar la opcion correspondiente y se guardadra en la variable
let opcionUser=prompt(` 
Elija una opcion:
1.Libro
2.Pelicula
3.Juego
`);

//hacer un menu con 3 opciones 
//switch es para establecer opciones y poder elejir cualquiera y darle contenido a dicha opcion 
switch(opcionUser){
    case "1":
        alert("Maze Runner");
        break;
    case "2":
        alert("Avatar debajo del agua");
        break;
    case "3":
        alert("Halo Infinite");
        break;
    default:
        alert("opcion incorrecta");
        break;
} //default funciona para si metes una opcion incorecta te arroje algo y no se rompa el codigo

let numero2=0;
while(numero2<=10){
    console.log(numero);
    numero++
}

*/


/*
//random numeros de manera aleatoria aqui se crea la funcion pero se puede mandar a llamar directa como abajo
function getRandomInt(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
*/
//crea una variable que guarde un numero y aplique la funcionrandom con la estructura de la funcion de arriba

/*
let numeroMaquina=Math.floor(Math.random()*(10 - 1))+1; //se aagrega un maximo en lado derecho y un minimo en izquiero y se suma el mismo minimo ya que asi es la sintaxis debe ser forzozamente asi declarado por la sintaxis de javascript
alert(numeroMaquina);
*/

confirm("Adivina un numero del 1 al 10"); //nos dice que hara el programa 

let=NumeroaAdivinar=Math.floor(Math.random()*(10 - 1))+1; //nos crea la variable en donde esta ejecuta una funcion por default para crear un numero aleatorio del 1 al 10

let vidas=5;//declaramos cuantas vidas tendremos con una variable

while(vidas>0){  //hacemos un ciclo while en donde le decimos mientras ka variable vidas sea mayor a 0 ejecuta lo siguiente
    var Numeroadivinar=parseInt(prompt("Digita tu numero tienes " + vidas + " Vidas")); //pedimos al usuario que digite un numero y las vidas que tiene 

if(NumeroaAdivinar===Numeroadivinar){ //si el numero que nos creo aleatoriamente es igual al numero que digito el usuario 
    alert("¡Ganaste :D!"); //se manda una alerta de que acerto
    break; //para no sobrecargar el codigo y sea mas eficaz 
}else { //de lo contrario
    vidas--; //restale 1 a vidas 
}

} //si vidas llega a 0 y no acerto
if(vidas==0){
    alert("perdiste!! , el numero secreto era " + NumeroaAdivinar); //se hace una alerta de que perdio y cual era el numero que se buscaba 
}