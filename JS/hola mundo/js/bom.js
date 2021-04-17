'use strict'

//BOM Browser object model

//ver el tamaño y ancho de la ventana del navegador
console.log(window.innerHeight);
console.log(window.innerWidth);


//sacar la localizacion del archivo
console.log(window.location);

//redirijir a otra url
function redirect(url) {
    window.location.href = url;
}

//lo que hizo miguel jajajaja 
//abrir una pequeña ventana
function openWindow(url) {
    window.open(url, "", "width=400, height=300");
}