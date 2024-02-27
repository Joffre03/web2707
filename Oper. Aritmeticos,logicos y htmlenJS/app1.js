//operadores logicos AND
let valor1=confirm("¿1(ok) o 0(cancel)?"); //confirm sirve para no escanear texto si no para dar ok o cancel, ok es true(1) y cancel es false(0) 
let valor2=confirm("¿1(ok) o 0(cancel)?");

if(valor1 && valor2){ //si valor 1 y 2 son true entonces se desplega la alerta de and activa 
    alert("AND activa");
} else{ //de lo contrario se uno es true y otro es false o los dos false la and permanece inactiva
    alert("AND inactiva"); 
}

//otra forma pero en donde los valores no podemos modificarlos mas que yendo al codigo
let valor3=true;
let valor4=true;

if(valor3 && valor4){
    console.log("AND activa");
}else{
    console.log("AND inactiva");
}