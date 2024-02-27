let nombre="Joffre";
let estatura=1.76;

//meter elementos a un documento a partir de un Id
let datos=document.getElementById("datos");
//insertar html en una varible de js
datos.innerHTML= `
<h1>Soy una caja de datos</h1>
<p>Mi nombre es: ${nombre}</p>
<p>Mi estatura es: ${estatura}</p>
`;