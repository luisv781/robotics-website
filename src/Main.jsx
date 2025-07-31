import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'
import secret from './uhm.js';

import NavBar from './components/NavigationBar';
import Footer from './components/Footer';


let checkForNavbar = new Promise((resolve) => {
  const interval = setInterval(() => {
    const navBar = document.querySelector('#navBar');
    if (navBar) {
      clearInterval(interval);
      resolve(navBar);
    }
  }, 100);
});

let checkForFooter = new Promise((resolve) => {
  const interval = setInterval(() => {
    const footer = document.querySelector('#footer');
    if (footer) {
      clearInterval(interval);
      resolve(footer);
    }
  }, 100);
})

checkForNavbar.then(navBar => {
  createRoot(navBar).render(<NavBar />);
})
checkForFooter.then(footer => {
  createRoot(footer).render(<Footer />);
  let attempts = 3;
  let interval = setInterval(() => {
    let footerHeader = document.querySelector('#footerHeader');
    if (footerHeader) {
      clearInterval(interval);
      footerHeader.addEventListener('click', secret);
    } else if (attempts > 0) {
      attempts--;
    } else clearInterval(interval);
  }, 100);
})

