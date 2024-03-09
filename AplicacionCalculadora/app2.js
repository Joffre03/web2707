document.getElementById('calculator-form').addEventListener('submit',function (event) { //encontrar el elemento del formulario por su id y luego al apretar el boton genere el evento ya que submit empaqueta y envia los datos 
    event.preventDefault();    
    let num1=parseFloat(document.getElementById('num1').value);
    let num2=parseFloat(document.getElementById('num2').value); //declaramos la variable y le decimos en donde se encuentra el id 
    
    let operador=document.getElementById('operador').value; //almacenamos operador en una variabl ya que como hay opciones diferentes debemos primero guardar los datos de que opcion sera la seleccion
    let resultado; //se hara un switch para que se ejecute cada operacion mediante la escoja el usuario
    
    
    switch (operador){
        case 'sum':
            resultado= num1+num2;
        break;
        case 'subtract':
            resultado= num1-num2;
        break;
        case 'multiply':
            resultado= num1*num2;
        break;
        case 'divide':
            if(num2!==0){ //!== negacion, diferente de 0 
                resultado= num1/num2;
            }else{
                resultado="Error!  No se puede dividir entre cero.";
            }
        break;
        default:
            resultado="Operador invalido";
        break;
    }
        document.getElementById('result').innerHTML=`El resultado es: ${resultado}`; // $ hace referencia a una variable en este caso resultado
    
    } );