$(document).ready(function(){
  checkLinks()

  // recorrer cada elemento a
  $('#add_button').click(function(){
    // prepend lo añade al principio
    $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>')
    $('#add_link').val('')
    checkLinks()
  })
})

function checkLinks() {
  $('a').each(function(indice){
    // obtener el texto que hay dentro del href
    const enlace = $(this).attr('href')
    $(this).text(enlace)
  })
}