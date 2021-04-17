'use strict'

var year = 2018;

while (year < 2051) {
    console.log("Estamos en el año: " + year);

    //parar el bucle cuando el año sea == a 2030
    if(year == 2030){
        break;
    }

    //incrementamos para evitar bucle infinito
    year++;
}


//do while
var years = 20;

do {
    //alert("Solo cuando sea diferente a 20");
    years++;
} while (years > 25);