'use strict'

//defino la funcion
function miFuncion(){
    console.log("Esta es un funcion en js");
    console.log("Es igual a otro lenguaje");
}

miFuncion();

function calculadora(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
}

//parametros opcionales: puedo llamar una funcion pero si lo deseo no puedo pasarle un parametro
function otraFuncion(num1, num2, mostrar = false) {
    if(mostrar == false){
        console.log("Suma: " + (num1 + num2));
        console.log("Resta: " + (num1 - num2));
        console.log("Multiplicacion: " + (num1 * num2));
        console.log("Division: " + (num1 / num2));
    } else {
        document.write("Suma: " + (num1 + num2) + "<br>");
        document.write("resta: " + (num1 - num2) + "<br>");
        document.write("multi: " + (num1 * num2) + "<br>");
        document.write("divi: " + (num1 / num2) + "<br>");
    }
}

otraFuncion(3, 5);
otraFuncion(3, 9, true);