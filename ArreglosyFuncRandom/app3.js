const frutas=[]; //constante declarando el arreglo

    const fruta=prompt("¿Que fruta desea comprar?"); //se declara una constante fruta en donde se almacene lo digitado por el usuario meiante el prompt
    frutas.push(fruta); //se mdice que al arreglo frutas se le va a agregar al final de la lista lo digitado en el prompt fruta
    
    /*const frutas=[]; //arreglo con 0 elementos 
const fruta=prompt("Que frutas deseas comprar?")  //se crea una variable dentro dle prompt para que ahi se almacene lo digitado
frutas.push(fruta); //se utiliza el metodo para agregar la fruta al final del arreglo que fruta es la variable donde se almacenara lo digitado 
*/

while(confirm("Desea agregar nueva fruta?")){
    const fruta=prompt("Que otra fruta desea agregar?");
    frutas.push(fruta); //se manda a llamar el metodo en el arreglo y este enviara los datos almacnados en fruta que son los digitados por el prompt
}
console.log("Usted compro: ");
for (let fruta of frutas){ //se van a leer los datos almacenados en fruta puestos en el arreglo frutas en orden 
    console.log(fruta);
}



