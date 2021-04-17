$(document).ready(function(){
  // eventos mouseOver y mouseOut
  var caja = $('#caja')
  // caja.mouseover(function(){
  //   $(this).css('background', 'red')
  // })

  // caja.mouseout(function(){
  //   $(this).css('background', 'cadetblue')
  // })

  function colorOne(){
    $(this).css('background', 'cadetblue')
  }
  function colorTwo(){
    $(this).css('background', 'red')
  }
  // evento Hover
  caja.hover(colorOne, colorTwo)

  // Eventos de clik y dobleClick
  caja.click(function(){
    $(this).css('background', 'blue')
            .css('color', 'white')
  })

  caja.dblclick(function(){
    $(this).css('background', 'pink')
            .css('color', '#ccc')
  })

  // Eventos Focus 
  $('#nombre').focus(function(){
    $(this).css('border', '4px solid red')
  })

  $('#nombre').blur(function(){
    $(this).css('border', '')
    $('#datos').text($(this).val()).show()
  })

  // evento mousedown mouseup
  var datos = $('#datos')

  datos.mousedown(function(){
    $(this).css('border-color', 'gray')
  })

  datos.mouseup(function(){
    $(this).css('border-color', 'yellow')
  })

  // mousemove
  $(document).mousemove(function(event){
    console.log(event.clientX);/* esto captura las coordenadas del mouse */
    console.log(event.clientY);
    $('#sigueme').css('left', event.clientX)
    $('#sigueme').css('top', event.clientY)
  })
})