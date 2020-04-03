/*
const element = document.createElement('h1')

element.innerText = 'Hello React'

const container = document.getElementById('root')

container.appendChild(element)
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root')

ReactDOM.render(<Card 
                  title="Technique Guides"
                  description="Learn amazing street workout and calisthenics"
                  img="../images/exercise.png"
                  leftColor="#A74CF2"
                  rightColor="#617BFB"
                />, container)

