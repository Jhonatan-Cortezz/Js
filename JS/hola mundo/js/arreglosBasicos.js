'use strict'

//arraay arreglos o matrices(lo mismo) es una collecion de datos
//en js los arreglos pueden contener cualquier tipo de dato
var nombres = ["Jhonatan Cortez", "Till Lindemann", "Solomon Grundy", 1223, true];

//crear array como objeto
var lenguajes = new Array("PHP", "Java", "C#", "Js", "Kotlin");

console.log(nombres);

console.log(lenguajes);

//mostrar elemento especificado por el usuario
//var elemento = parseInt(prompt("Que elemento del array Quieres?", 0));

//valido que el numero introducido si existe en la cantidad de indices del array
/*
if(elemento >= nombres.length){
    alert("No existe el elemento \n El arreglo solo tiene: " + nombres.length);
} else {
    alert(nombres[elemento]);
}*/

document.write("Lenguajes de programación del 2020 <br>");
document.write("<ul>");
//forma de recorrer el arreglo 1
/*
for (let i = 0; i < lenguajes.length; i++) {
    document.write("lenguaje " + lenguajes[i] + "<br>");
}

//forma de recorrer el arreglo 2
//utilizo una funcion de callback(funcion anonima)
lenguajes.forEach((elemento, index, datos)=>{//el index lo utilizo para sacar el elemto recorrido
    document.write("<li>" + index + " - " + elemento + "</li>");
});
*/
//otra forma de recorrer los arreglos
for (let lenguaje in lenguajes) {
    document.write("<li>" + lenguajes[lenguaje] + "</li>");   
}

//busqueda dentro de un array**************
/*
var busqueda = lenguajes.find(function(lenguaje){
    return lenguaje == "PHP"
});*/
//es lo mismo que arriba solo que mas optimizado
var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
console.log(busqueda);


var precios = [10, 20, 80, 15, 25];
var busqueda2 = precios.some(precio => precio >= 20);//some busca por rango y devuelve boolean si existe o no

document.write(busqueda2);

document.write("</ul>");
