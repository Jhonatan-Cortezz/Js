'use strict'

var edad = 18;
var imprime = "";

switch (edad) {
    case 18:
        imprime = "La edad es 18";
        break;

    case 25:
        imprime = "Eres un adulto";
        break;

    default:
        imprime = "Tu edad es neutra";
        break;
}

console.log(imprime); 