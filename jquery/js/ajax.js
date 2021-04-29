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
  
    $.post($(this).attr("action"), usuarios, function(res){
      console.log(res);
    }).done(function(){
      alert("usuario creado");
    })

    return false
  })
})