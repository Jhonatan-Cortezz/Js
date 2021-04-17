'use strict'

//mostrar todos los divisores de un numero introducido por el usuairo
var numero = parseInt(prompt("Ingrese un numero", 0));

for (let i = 1;  i<= numero; i++) {
    //logica para sacar el divisor
    if(numero%i == 0){
        console.log("El divisor es: " + i);
    }

}