'use strict'

function cambiaColor(color) {
    caja.style.background = color;
}


//DOM Document Object Model
//formas de obtener un elemento de la pagina html
//var caja = document.getElementById("caja");
var caja = document.querySelector("#caja");//si es id utilizar # y si es class utili '.' 
//var caja = document.getElementById("caja").innerHTML;//con innerHTML saco el texto de la etiqueta html

//con esta linea cambio el contenido del html
caja.innerHTML  = "TEXTO nuevo en caja desde js";

//modificar los estilos css del contenido

caja.style.background = "#898989"; 
caja.style.marginTop = "12px";
caja.style.padding = "5px";


//cambiar clase a la etiqueta
caja.className = "Hola hola--2";
//console.log(caja);



//obtener elementos por su etiqueta

var allDiv = document.getElementsByTagName("div");
//console.log(allDiv);//me muestra un arreglo de div
//modificar un elementos del arreglo del div
var contentInText = allDiv[2];
contentInText.innerHTML = "Otro texto para el div indice 2";
contentInText.style.background = "#898989"; 

//allDiv.forEach((valor, indice) => {
var valor;
for(valor in allDiv){
    if(typeof allDiv[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(allDiv[valor].textContent);
        parrafo.prepend(texto);
        document.querySelector("#miSeccion").prepend(parrafo);
    }
}
//});

//obtener elementos por su clase
var divRojo = document.getElementsByClassName("rojo");
for (let div  in divRojo) {
    if (divRojo[div].className == 'rojo') {//compruebo si exites ese div y solo memuestre es
        divRojo[div].style.background = "red";    
    }
}
console.log(divRojo);


//prueba del querySelector
var claseRojo = document.querySelectorAll(".rojo");
console.log(claseRojo);