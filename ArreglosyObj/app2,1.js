const frutas=[]; //arreglo con 0 elementos 
const fruta=prompt("Que frutas deseas comprar?")  //se crea una variable dentro dle prompt para que ahi se almacene lo digitado
frutas.push(fruta); //se utiliza el metodo para agregar la fruta al final del arreglo que fruta es la variable donde se almacenara lo digitado 

while(confirm("Desea agregar nueva fruta?")){
    const fruta=prompt("Que otra fruta desea agregar?");
    frutas.push(fruta);
}
console.log("Usted compro: ");
for (let fruta of frutas){
    console.log(fruta);
}

//arreglo.foreach
frutas.forEach((fruta,index)=>{ //utiliszamos funcion flecha y la interpolacion de templatestream para que la concatenacion sea mas rapida 
    console.log(`${index+1} : ${fruta}`)
})