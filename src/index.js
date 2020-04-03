/*
const element = document.createElement('h1')

element.innerText = 'Hello React'

const container = document.getElementById('root')

container.appendChild(element)
*/

import React from 'react'
import ReactDOM from 'react-dom'


const nombre = 'Eduardo'
const user = {
  firstName: 'Eduardo',
  lastName: 'Diez',
  avatar: 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y'
}
function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGreeting(user){
  if(user){
    return <h1>Hello World !!! {getName(user)} </h1>
  } 
  return <h1>Hello World !!!  </h1>
}

const element = (
  <div>
    <h1>{getGreeting(user)}</h1>
    <img src={user.avatar} />
  </div>
)

const container = document.getElementById('root')

ReactDOM.render(element, container)

