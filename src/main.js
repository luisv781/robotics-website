import './style.css'
import chsRobotLogo from './croboticslogo.jpg'

document.querySelector('#roboticsLogo').setAttribute("src", `${chsRobotLogo}`);

const interval = setInterval(() => {
  const instagramEmbed = document.querySelector('#instagram-embed-0');
  if (instagramEmbed) {
    clearInterval(interval);

    instagramEmbed.style.borderRadius = "1rem";
    instagramEmbed.style.border = "";
  }
}, 100);

