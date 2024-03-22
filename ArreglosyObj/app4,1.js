const gato={
    nombre: 'saul',
    duerme:true,
    edad: 2,
    enemigos:["Agua", "perro"],
    otros:{   //se crea un apartado con otros atributos agregando favoritos y comida
        amigos:["Lucifer", "Satanas", "Salem"],
        favoritos:{
            comida:{ //dentro de favoritos se crea subcarpeta de comida 
                fria: "atun", //se crean dos atributos dentro de la carpeta del objeto comida
                caliente: "pollo"
            }
        }
    }
};
console.log(gato.otros.favoritos.comida.fria);
console.log(gato.otros.amigos);

//crear atributo
gato.color='mandarino';
console.log(gato.color);

//leer elemento
console.log(gato.edad);
console.log(gato.enemigos);
console.log(gato.enemigos[1]);

//update elemento
gato.edad=5;
console.log(gato.edad);

//eliminar
delete gato.duerme;
console.log(gato) //imprime todos los atrubutos del gato

console.log(gato.enemigos[1]);

//hasownproperity te dice si si existe el atributo y si no te mandara un false o un verdadero 
console.log(gato.hasOwnProperty("salud"));
console.log(gato.hasOwnProperty("nombre"));
