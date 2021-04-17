'use strict';

// fetch (ajax) y peticiones a servicios / api rest
let usuarios = []

fetch('https://jsonplaceholder.typicode.com/users')
  .then(data => data.json())
  .then(data => {
    usuarios = data
    console.log(usuarios);
  })

let info = []
fetch('https://www.postman.com/collections/bdbf03dff0ac16fabdb5')
  .then(data => data.json())
  .then(data => {
    info = data
    console.log(info.item[6]);
  })

let info2 = []
  fetch('https://www.postman.com/collections/bdbf03dff0ac16fabdb5')
    .then(data => data.json())
    .then(data => {
      info2 = data
      console.log(info2);
    })