'use strict'



//evento load para solucionar problema de carga de scritp cuando el
//documento aun no ha cargado
window.addEventListener('load', () => {
    function cambiarColor() {
        var bg = boton.style.backgroundColor;
        if (bg == "green") {
            boton.style.backgroundColor = "red";
        } else{
            boton.style.backgroundColor = "green";
        }
    
        boton.style.padding = "10px";
        boton.style.border = "2px solid #403cc2";
    
        return true;
    }

    
    //eventos del raton
    var boton = document.querySelector("#boton");//obtengo el boton del html por medio del id

    //mejor forma de manejar los eventos y no ensuciar el codigo html
    //evento click
    boton.addEventListener('click', function(){
        cambiarColor();

        //operador this
        // boton.style.border = "6px solid black";
        this.style.border = "6px solid black";
    });
    
    //envento mouseOver
    boton.addEventListener('mouseover', function(){
        boton.style.backgroundColor = "#ccc";
    });
    
    //envento moseout -- ejecuta el envento al levantar el mouse del elemento
    boton.addEventListener('mouseout', function(){
        boton.style.backgroundColor = "#565656";
    });
    
    
    //capturar el elemento input
    var campoInput = document.querySelector('#campoNombre');
    
    //evento Focus
    campoInput.addEventListener('focus', function(){
        //boton.style.backgroundColor = "#565656";
        console.log("estas haciendo foco dentro del input");
    });
    
    //evento Blur
    campoInput.addEventListener('blur', function(){
        //boton.style.backgroundColor = "#565656";
        console.log("estas fuera del input");
    });
    
    //evento KeyDowm
    campoInput.addEventListener('keydown', function(event){
        //boton.style.backgroundColor = "#565656";
        console.log("Pulsando esta tecla", String.fromCharCode(event.keyCode));//con esto obtengo la tecla pulsada
    });
    
    
    //evento KeyPress
    campoInput.addEventListener('keypress', function(event){
        //boton.style.backgroundColor = "#565656";
        console.log("Tecla presionada ", String.fromCharCode(event.keyCode));//con esto obtengo la tecla pulsada
    });
    
    
    //evento Keyup
    campoInput.addEventListener('keyup', function(event){
        //boton.style.backgroundColor = "#565656";
        console.log("Tecla soltada ", String.fromCharCode(event.keyCode));//con esto obtengo la tecla pulsada
    });

});


