'use strict'

//transformacion de cadenas
var numero = 777;
var texto = "Hello, this is JavaScript Curses of Victor";

//obtengo en que posicion esta la palabra

var busqueda = texto.indexOf("Curses");
//puedo utilizar
busqueda = texto.lastIndexOf("Curses");//para salcar la ultima coincidencia
//o tambien
busqueda = texto.search("Curses");//que practicamente es un alias de indexOf
console.log(busqueda);

//este metodo devuelve la cadena a buscar
var searchString = texto.match("JavaScript");

console.log(searchString);

//subString de java
 searchString = texto.substr(15, 10);
 console.log(searchString);

 //me saca al letra de la posicion indicada
 texto.charAt(6);

 //funcion para reemplazar texto
 var sitio = "La silla se quema";
 var remplazo = sitio.replace("quema", "Ozzy Osburne");
 console.log(remplazo);

 //recortar cadena
 var recortarCadena = sitio.slice(6, 10);
 console.log(recortarCadena);


 //meter una cadena en un arreglo
 var cadeToArray = sitio.split();
 console.log(cadeToArray);

 //este forma corta la cadena por palabras con espacios y los introduce en un arreglo
 var cadeToArray = sitio.split();


 //quitar los espacios a una cadena 
 var cadenaSinEspacios = sitio.trim();
 