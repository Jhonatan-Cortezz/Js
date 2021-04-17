'use strict'

/*
hacer un programa que pida dos numero y que determine cual es el mayor y si son iguales


plus : si los numeros no son numeros correctos o <= 0 pedir que vuelva a introducir los datos
*/

var numero1 = parseInt(prompt("Ingrese el primer numero", ""));

var numero2 = parseInt(prompt("ingrese el numero 2", ""));

//evaluamos la condicion si es numero o no
//isNan devuelve un booleano verificando si lo que contiene es un numero o no
while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    numero1 = parseInt(prompt("Ingrese el primer numero", ""));
    numero2 = parseInt(prompt("ingrese el numero 2", ""));
}


//condicion
if (numero1 == numero2) {
    alert("los dos son iguales");
} else if(numero1 > numero2){
    alert("El numero " + numero1 + "es mayor" + "\nEl numero " + numero2 + " es menor");
} else {
    alert('el numero ' + numero2 + " es mayor" + "\nEl numero " + numero1 + " es menor");
}