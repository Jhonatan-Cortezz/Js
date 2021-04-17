'use strict'

//plantillas de texto
var nombre = prompt("Mete tu nombre");
var apelldos = prompt("Introduce tus apellidos");

var texto = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellido es: ${apelldos}</h3>
`;

//esto sustitutye al tipico de imprimir varibles concatenadas

document.write(texto);