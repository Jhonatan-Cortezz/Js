'use strict'

$(document).ready(function () {
  // selector de id
  $('#rojo').css("background", "red")
            .css("color", "white")

  $('#amarillo').css("background", "yellow")

  $('#verde').css("background", "green")

  // selectores de clase
  $('.class-selector').css('padding', '5px')

  $('.sin-borde').click(function(){
    $(this).addClass('class-selector')/* agrego la clase de css definida en el head a elemento con this clas */
  }) 


  // selectores de etiqueta

  var parrafos = $('p').css('cursor', 'pointer')

  parrafos.click(function(){
    if (!$(this).hasClass('big')) {
      $(this).addClass('big')
    } else {
      $(this).removeClass('big')
    }
  })
})