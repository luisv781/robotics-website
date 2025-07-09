import './style.css'
import chsRobotLogo from './croboticslogo.jpg'

let instagramEmbed = document.querySelector('#instagram-embed-0');

document.querySelector('#roboticsLogo').setAttribute("src", `${chsRobotLogo}`);

instagramEmbed.style.borderRadius = "1rem";
instagramEmbed.style.border = "";

//.innerHTML = `
//  <img src="${chsRobotLogo}" class="logo" alt="CHS Robotics logo" />`



//setupCounter(document.querySelector('#counter'))
