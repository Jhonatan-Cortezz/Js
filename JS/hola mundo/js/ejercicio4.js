'use strict'

//mostrar todos los numeros impares que hay dentro de un rago introducido por el usuario

var dato1 = parseInt(prompt("Escriba el rango inicial", 0));
var dato2 = parseInt(prompt("Escriba el rango final", 0));

for (let index = dato1; index <= dato2; index++){

    if(index % 2 == 0){
        document.write("numero: " + index + "</br>");
    }
}