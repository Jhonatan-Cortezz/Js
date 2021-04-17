'use strict'

//parametros de REST y Spread
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {//el ultimo parametro es REST captura un conjunto de valores
    console.log("Fruta 1: ", fruta1);    
    console.log("Fruta 2: ", fruta2);
    console.log(resto_de_frutas);
}

var frutas = ["Naranja", "Manzana"];

listadoFrutas(...frutas, "Sandia", "Pera", "Melon", "Coco");//le primer parametro spred permite pasarle un arrgelo