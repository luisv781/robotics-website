import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import chsRobotLogo from './croboticslogo.jpg'
import { setupCounter } from './counter.js'

document.querySelector('#roboticsLogo').innerHTML = `
  <img src="${chsRobotLogo}" class="logo" alt="Vite logo" />
`

setupCounter(document.querySelector('#counter'))
