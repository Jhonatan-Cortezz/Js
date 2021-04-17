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
})