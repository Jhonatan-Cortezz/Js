$(document).ready(function(){
  // console.log("cargado")
  // metodo load
  // $('#datos').load("https://reqres.in/")

  // metodo get
  $.get("https://reqres.in/api/users", {page: 2}, function(response){
    console.log(response)
    response.data.forEach((element, index) => {
      $('#datos').append("<p>"+element.first_name+"</p>")
    })
  })

  var usuarios = {
    'name': 'Jhonatan',
    'last_name': 'Cortez'
  }

  $.post("https://reqres.in/api/users", usuarios, function(res){
    console.log(res);
  })

  $("#formulario").submit(function(e){

    e.preventDefault()

    var usuarios = {
      'name': $('input[name="name"]').val(),
      'last_name': $('input[name="lats_name"]').val()
    }
  
    // $.post($(this).attr("action"), usuarios, function(res){
    //   console.log(res);
    // }).done(function(){
    //   alert("usuario creado");
    // })

    /* otra forma de manejar las peticiones con ajax */
    $.ajax({
      type: 'POST',
      /* dataType: 'json',
      contentType: 'application/json',  *//* especifica el formato en el que viajaran los datos */
      url: $(this).attr("action"),
      data: usuarios,
      beforeSend: function(){ /* esto se ejecuta mientras se esta haciendo la peticion */
        console.log("Enviando usuarios");
      },
      success: function(response){
        console.log(response);
      },
      error: function(){
        console.log("ocurrio un error");
      },
      timeout: 2000
    })

    return false
  })
})