'use strict'

//primero debemos cargar el html para luego ejecutar el scrip
//para eso utlizamos este evento
window.addEventListener('load', function(){
    //capturo el formulario por el di
    var formulario = document.querySelector("#formulario");

    //obtengo la caja donde mostrare los resultados
    var box_dashed = document.querySelector(".dashed");
    box_dashed.style.display = "none";

    //lanzo el evento submit del input del formulario
    formulario.addEventListener('submit', function () {
        console.log("Evento capturado");

        //para capturar los datos de los input
        var nombre = document.querySelector("#nombre").value;
        var apellido = document.querySelector("#apellidos").value;
        var edad = parseInt(document.querySelector("#edad").value);

        //validacion
        if (nombre.trim() == null || nombre.trim().length == 0) {
            // alert("El nombre no es valido");

            document.querySelector("#errorNombre").innerHTML = "El nombre no es valido";

            return false;
        } else {
            document.querySelector("#errorNombre").style.display = "none";
        }

        if (apellido.trim() == null || apellido.trim().length == 0) {
            alert("El apellido no es valido");
            return false;
        }

        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert("La edad no es valido");
            return false;
        }

        box_dashed.style.display = "block";

        var pNombre = document.querySelector("#pNombre span");
        var pApellido = document.querySelector("#pApellido span");
        var pEdad = document.querySelector("#pEdad span");

        pNombre.innerHTML = nombre;
        pApellido.innerHTML = apellido;
        pEdad.innerHTML = edad;

        // // array de los datos del usuario
        // var datosUsuario = [nombre, apellido, edad];

        // for (const i  in datosUsuario) {
        //     //creo un elemento <p> y le añado la info
        //     var parrafo = document.createElement('p');
        //     parrafo.append(datosUsuario[i]);
        //     box_dashed.append(parrafo);
        // }

        
        
        // parrafo.append(apellido);
        // parrafo.append(edad);
        
    });

});