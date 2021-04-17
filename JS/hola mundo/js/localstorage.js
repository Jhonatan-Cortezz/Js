'use strict'

// comprobar si el nav tiene localstorage
if(typeof(Storage) != 'undefined'){
    console.log("Local Storage disponible");
} else{
    console.log("incompatibel con localstorage");
}

//comom guardar un dato en el localstorage
localStorage.setItem("titulo", "curso de JS");

//recurperar datos del localstorage
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");


//guardar objetos}
//this is a json object
var usuario = {
    nombre: 'Jhonatan',
    email: 'jcortez@gmail.com',
    web: 'jcortez.com.sv'
};

//localstorage no permite objecto puros debo convertirlo a string
localStorage.setItem("usuario", JSON.stringify(usuario));


// recuperar el objeto de localstorage
var objJs = JSON.parse(localStorage.getItem('usuario'));
document.querySelector("#peliculas").append(" " + objJs.web + " - " + objJs.nombre);