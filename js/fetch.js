'use strict'
let div_usuario = document.querySelector('#usuarios')
let div_janet = document.querySelector('#janet')
// fetch y peticiones a srevicios
getUsuarios()
  .then(data => data.json())
  .then(users => {
    listadoUsuarios(users.data) 
    
    // una vez realizada la primera peticion obteniendo todos los usuarios
    // mando a llamar la otra funciona para obtener solo un usuarios
    return getJanet()
  })
  .then(data => data.json())
  .then(janet => {
    mostrarJanet(janet.data)
  })

function getUsuarios() {
  return fetch('https://reqres.in/api/users')
}

function getJanet(params) {
  return fetch('https://reqres.in/api/users/2')
}
  // encapsular la logica 
function listadoUsuarios(usuarios) {
  // recorrer cada item del array con map(equivalente al foreach)
  usuarios.map((user, id) => {
    let nombre = document.createElement('h2')
    nombre.innerHTML = "Nombre: " + user.first_name + " Apellidos: " + user.last_name

    div_usuario.appendChild(nombre)

    document.querySelector('.loading').style.display = 'none'
  })
}

function mostrarJanet(user) {
  // recorrer cada item del array con map(equivalente al foreach)
  let nombre = document.createElement('h4')
  let avatar = document.createElement('img')
  nombre.innerHTML = "Nombre: " + user.first_name + " Apellidos: " + user.last_name
  avatar.src = user.avatar
  avatar.width = '100'

  div_janet.appendChild(nombre)
  div_janet.appendChild(avatar)

  document.querySelector('#janet .loading').style.display = 'none'
}