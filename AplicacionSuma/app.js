document.getElementById('sumform').addEventListener('submit',function(event){ //proporcionar el id del formulario creado en html, para identificar que se realizo un cambio y cachar el cambio ocupamos addevent y mandamos a llamr el evento que almaceara el cambio y con function diremos que hra ese evento una vez realizado
    event.preventDefault();
    let num1 = parseFloat(document.getElementById('num1').value);  //se cacha la info y se almacena en una variable
    let num2 = parseFloat(document.getElementById('num2').value); //agarramos el identificador en la etuiqueta de html dandole el nombre del identificador para identificar el elemento y despues le decimos que hara o que recibira la variable en este caso un valor (value)

    let result= num1 + num2;
    console.log(result);

    document.getElementById('result').innerText= 'la suma es: ' + result;   //primero ubicamos el elemento y luego con el ineer inseratmos texto
}) 