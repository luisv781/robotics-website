import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'

import NavBar from './components/NavigationBar';


let checkForNavbar = new Promise((resolve) => {
  const interval = setInterval(() => {
    const navBar = document.querySelector('#navBar');
    if (navBar) {
      clearInterval(interval);
      resolve(navBar);
    }
  }, 100);
});

checkForNavbar.then(navBar => {
  createRoot(navBar).render(<NavBar />);
})

