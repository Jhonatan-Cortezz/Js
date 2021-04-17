'use strict'

//un array multidimensional es poner un arreglo1 dentro de otro arreglo2. eje
var categoria = ['Accion', 'Terror', 'Comedia'];
var peliculas = ['Gran torino', 'The Crow', 'Diamond'];

//ordenar un arreglo
peliculas.sort();//le metodo sort nos permite ordenar un arreglo por alfabeto
//peliculas.reverse();//ordena el arrglo en orden inverso
console.log(peliculas);


var cine = [categoria, peliculas];

//console.log(cine);

//agregar elementos desde el prompt
var newElement = "";

do{
    newElement = prompt("Introduce una nueva pelicula", "");
    peliculas.push(newElement);
}
while(newElement != 'fin');//problema me agrega la palabra fin al arreglo

//solicion
var indice = peliculas.lastIndexOf('fin');

if(indice > -1){
    peliculas.splice(indice, 1);
}

//convertir un array a un string separados por comas
var peliculasToString = peliculas.join();

//convertir cadena a array todo lo que este separado por , y espacio
var cadena1 = "tex1, tex2, tex3";
var cadenaToArray = cadena1.split(", ");

//añadir elemento al arreglo
//peliculas.push("El contador");
console.log(peliculas);