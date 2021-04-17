'use strict'

window.addEventListener('load', () =>{
    //timers
    var tiempo = setInterval(function() {
       console.log("Set interval ejecutado");

       var encabezado = document.querySelector('h1');

       if (encabezado.style.fontSize == "50px") {
            encabezado.style.fontSize = "20px";
           
       } else {
            encabezado.style.fontSize = "50px"
       }
       
    }, 3000);//como segundo parametro le pongo el tiempo


    //el codigo a continuacion detiene el bucle de setInterval
    var stop = document.querySelector('#stop');
    stop.addEventListener('click', function() {
        alert('Has parado el intervalo');
        clearInterval(tiempo);
    });


});