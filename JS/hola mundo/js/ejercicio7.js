'use strict'

//mostrar tabla de multiplicar de un numero introducido por pantalla

var numero = parseInt(prompt("ingrese el numero", 0));

for(var i = 1; i <= 10; i++){
    var l = numero * i;
    document.write(numero +" X " + i + " = " + l + "</br>");
}