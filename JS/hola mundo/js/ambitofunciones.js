'use strict'

function holaMundo(texto) {

    var hola_mundo= "Texto dentro de funcion";
    console.log(texto);
    console.log(numero);
    console.log(hola_mundo);


}

var numero = 12;
var texto = "Hola soy una variable global";

holaMundo(texto);

//esto mostrara un error por que la variable no es global
console.log(hola_mundo);