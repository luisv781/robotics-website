import './style.css'
//import robotLogo from './croboticslogo.jpg'
import NavBar from './NavigationBar';
import React from 'react';
import { createRoot } from 'react-dom/client';

//document.querySelector('#roboticsLogo').setAttribute("src", `${robotLogo}`);

const styleEmbed = setInterval(() => {
  const instagramEmbed = document.querySelector('#instagram-embed-0');
  if (instagramEmbed) {
    clearInterval(styleEmbed);

    instagramEmbed.style.borderRadius = "1rem";
    instagramEmbed.style.border = "";
  }
}, 100);


new Promise((resolve) => {
  const checkNavBar = setInterval(() => {
    const navBar = document.querySelector('#navBar');
    if (navBar) {
      clearInterval(checkNavBar);
      resolve(navBar);
    }
  }, 100);
}).then(navBar => {
  createRoot(navBar).render(<NavBar />);
});

