$(document).ready(function(){
  $('#btnMostra').hide()

  // capturar botones
  $('#btnMostra').click(function(){
    $(this).hide()
    $('#btnOcultar').show()
    // $('#caja').show('fast')
    $('#caja').fadeIn('slow')
  })

  $('#btnOcultar').click(function(){
    $(this).hide()
    $('#btnMostra').show()
    // $('#caja').hide('fast')/* al aplicar fast me pone un efecto de transicion */
    // otro metodo para ocultar
    $('#caja').fadeOut('slow', function(){
      console.log('Ocultado')
    })
  })

  $('#oneButonAction').click(function(){
    $('#caja').toggle('fast')
  })

  $('#animacion').click(function(){
    $('#caja')
    .animate({
      marginLeft: '500px'
    }, 'slow')
    .animate({
      marginTop: '80px'
    }, 'slow')
    .animate({
      marginLeft: '0px'
    }, 'slow')
    .animate({
      marginTop: '0px'
    }, 'slow')
  })
})