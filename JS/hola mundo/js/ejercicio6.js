'use strict'

//programa para mostra si numero es par o impar
//comprovar si lo ingresado es valido

var numoro = parseInt(prompt("Ingrese un numero", 0));

while(isNaN(numoro)){
    numoro = parseInt(prompt("Ingrese un numero", 0));

}

if(numoro % 2 == 0){
    alert("es un numero par");
} else{
    alert("Es impar");
}