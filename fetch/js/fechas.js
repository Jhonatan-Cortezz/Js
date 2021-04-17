'use strict'

// trabajando con fechas
// creo un objeto date
const fecha = new Date()

var year = fecha.getFullYear()/* obtengo el año */
var mes = fecha.getMonth()
var dia = fecha.getDate()/* para sacar el dia */
var hora = fecha.getHours()

var textoHora = `
  el año es: ${year}
  el mes es: ${mes}
  el dia es: ${dia}
  la hora es: ${hora}
`

console.log(textoHora);

console.log(fecha);

// funciones matematicas
// random aleatorio
// ceil retorna solo enteros
console.log(Math.ceil(Math.random() * 100));