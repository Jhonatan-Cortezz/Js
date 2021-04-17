'use strict'

//hacer una calculadora con dos numeros introducidos
//verificar si un numero esta mal voverlo a pedir

var numero1 = parseInt(prompt("ingrese el numero", 0));
var numero2 = parseInt(prompt("ingrese el numero", 0));

while (isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("ingrese el numero 1", 0));
    numero2 = parseInt(prompt("ingrese el numero 2", 0));
}

var suma = numero1 + numero2;
var resta = numero1 - numero2;
var multiplicacion = numero1 * numero2;
var division = numero1 / numero2;

document.write("Suma: " + suma + "<br>");
document.write("resta: " + resta+ "<br>");
document.write("multiplicacion: " + multiplicacion + "<br>");
document.write("division: " + division);