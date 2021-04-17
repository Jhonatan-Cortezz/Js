'use strict'

//una funcion anonimas es una que no tiene nombre
//se suelen utilizar el callbacks(funciones dentro de otras)

//ejemplo de funcion anonimas
/*
var peliculas = function (nombre) {
    return "La pelicula es: " +nombre;
}*/

//ejemplo de callbacks ejecutar funcion dentro de otra y funcion anonima

function sumame(numero1, numero2, suamYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    //invoco las dos funciones anonimas
    suamYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}

//llamo a la funcion suma y ejecuto dos funciones anonimas dentro de ella
sumame(5, 7, function(dato) {
    console.log("La suma es: " + dato);   
}, function(dato) {
    console.log("La suma por dos es: " + (dato *2));
});


//funciones de callback pero con funciones de flecha ejemplo
sumame(5, 3, dato => {
    console.log("La suma es: " + dato);   
}, dato => {//en lugar de function se pone =>
    console.log("La suma por dos es: " + (dato *2));
});