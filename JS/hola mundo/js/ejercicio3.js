'use strict'

//hacer un programa que muestre todos los numeros introducidos por un rango

var dato1 = parseInt(prompt("Escriba el rango inicial", 0));
var dato2 = parseInt(prompt("Escriba el rango final", 0));

for (let index = dato1; index <= dato2; index++){
   console.log(index);
}
