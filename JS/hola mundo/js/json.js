'use strict'

// JSON JavaScript Object Notation

//definir un objeto json
var peliculas = {
    titulo: 'Batman vs superman',
    year: 2020,
    pais: 'EEUU'
};

// cambiar el valor de la propiedad
// peliculas.titulo = "Otras pelicula";

//aceder a las propiedades del objeto
console.log(peliculas);

//arreglos de json
var peliculas = [
    {titulo: 'El contador', year: 2020, pais: "EEUU"},
    peliculas
];

var cajaPeliculas = document.querySelector("#peliculas");
var index;
for(index in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[index].titulo + " - " + peliculas[index].year);
    cajaPeliculas.append(p);
}