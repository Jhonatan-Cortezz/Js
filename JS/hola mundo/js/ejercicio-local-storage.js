'use strict'

var formulario = document.querySelector("#form-p");
// guardar en local storage con el evento del boton
formulario.addEventListener('submit', function(){
  var inputPelicula = document.querySelector("#addPelicula").value;
  if (inputPelicula.length >= 1) {
    localStorage.setItem(inputPelicula, inputPelicula);
  }
})

// mostrar en html los datos de local storage
var ul = document.querySelector("#lst-pelicula")
for (const key in localStorage) {
  if (typeof localStorage[key] == 'string') {
    var li = document.createElement('li');
    li.append(localStorage[key]);
    ul.append(li)
  }
}