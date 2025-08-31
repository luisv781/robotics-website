import React from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './components/NavigationBar';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';

import './style.css';
import './index.css';

import robotLogo from '/img/robotlogo.jpg';

let app = createRoot(document.querySelector('#app'));

app.render(
    <>
        <NavBar />

        <div className='flex flex-col items-center justify-center my-6 pb-16 h-[calc(100dvh-(var(--spacing)*16))]'>
            <a href='#' className='logo'>
                <img
                    src={robotLogo}
                    className='h-58 p-1 rounded-full will-change-[filter] transition-[filter] duration-200'
                    id='roboticsLogo'
                    alt='CHS Robotics Logo'
                />
            </a>
            <h1 className='m-2 text-8xl max-lg:text-6xl font-extrabold text-transparent max-lg:text-white bg-gradient-to-r from-blue-50 from-20% to-blue-400 bg-clip-text bg-size-[300%_auto] bg-position-[0%] hover:bg-position-[60%] transition-all duration-300'>
                CHS ROBOTICS CLUB
            </h1>
            <h2 className='m-2 text-3xl tracking-wider font-medium'>
                Innovate. Build. Compete. Inspire.
            </h2>
        </div>

        <AboutSection />
        <TeamSection />

        <Footer />
    </>
);
