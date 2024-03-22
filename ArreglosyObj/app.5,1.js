const gato={
    nombre: 'saul',
    duerme:true,
    edad: 2,
    enemigos:["Agua", "perro"],
    comer: function(){ //hacer un metodo o funcion dentro de nuestro objeto
        console.log("Ahora esta comiendo");
    },
    atacar: function(){
        return "Atacando a un : "+presa//al llamar el metodo arrojara el retorno y ahora agregaremos otra variable para concatenar el retrno con ella
    },
    /*atacar: (presa){   Otra forma de hacer una funcion mas reducida
        return "Atacando a un : "+presa//al llamar el metodo arrojara el retorno y ahora agregaremos otra variable para concatenar el retrno con ella
    } */

    atacar(presa){
        return `${this.nombre} esta atacando a un ${presa}`; //para concatenar el nombre y que esta comiendo usando las variables
    }
        
    
};
gato.comer();
console.log (gato.atacar("raton")); //asiganrle valor a presa 
console.log(gato.atacar("ave"));