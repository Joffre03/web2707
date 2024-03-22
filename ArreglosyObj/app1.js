//sintaxis 

/*
Array.foreach(function callback(currentValue, index, array)){
    //iterador
};
*/

let frutas=["pera", "platano", "sandia", "manzana"];
frutas.forEach((fruta,index,array)=>{
    console.log(index); //index la posicion en la que esta la fruta que queremos visualizar
    console.log(fruta); //la fruta que queremos visualizar
    console.log(array);  //vector en el que el for each esta aplicada, todo nuetsro arreglo
}); 

//frutas.forEach(fruta=>console.log(fruta)) //declaramos una funcion dentro del for each y hacemos qe esa funcion solo muestre frutas