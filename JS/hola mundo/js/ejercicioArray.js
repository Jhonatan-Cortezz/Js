'use strict'

/**
 * Hacer un programa que:
 * 1- Pida 6 numeros por pantalla y los muestre en un array
 * 2- Mostrar el array completo por pantalla
 * 3- Ordenar el array y mostrarlo
 * 4- Invertir su orden y mostrarlo
 * 5- Mostrar cuantos elementos tiene el array
 * 6- Buscar un valor introducido por el usuario, que nos diga si existe y su indice
 */

 //funcion para optimizar el codigo y mostrarlo
 function mostrarArray(elementos, textoCustom = "") {
    document.write("<h1>Contenido del array "+textoCustom+"</h1>");
    document.write("<ul>");
    elementos.forEach((elemento, indice) => {
        document.write("<li>"+elemento+"</li>");
    });
    document.write("</ul>");
 }

 //creo el objeto array con la instancion y le establesco el tamaño
 var numeros = new Array(6);

 //pido los numeros al usuario
 for(var i = 0; i <= 5; i++){
    numeros[i] = parseInt(prompt("Introduce un numero", 0));
 }



 //mostrar arrat por consola
 console.log(numeros);

  //mostrar por pantalla
  mostrarArray(numeros);

 //ordenar y mostrar
 numeros.sort();
 mostrarArray(numeros, "Ordenado");

//invertir orden y mostrar
numeros.reverse(numeros);
mostrarArray(numeros, "Invertidos");

//mostrar la cantida de elementos
document.write("<h1>El array tiene: "+ numeros.length+"</h1>");

//busqueda
var busqueda = parseInt(prompt("Busca un numero"));
var posicion = numeros.findIndex(numero => numero == busqueda);

if (posicion && posicion != -1) {
    document.write("<h2>ENCONTRADO</h2>");
    document.write("Posicion de busqueda: " + posicion);
} else {
    document.write("<h2>NO ENCONTRADO</h2>");
}