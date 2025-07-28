import React from 'react';

export default function NavBar() {
    return (
        <nav className="relative flex items-center justify-around w-full h-16 m-0 gap-36 shadow-2xl">
            <a href="/" className="flex items-center gap-4">
                <img src="/croboticslogo.jpg" alt="" className="h-10 w-10 border-2 rounded-full" />
                <h1 className="text-white text-3xl font-bold">CHS Robotics</h1>
            </a>
            <div className="links flex gap-8">
                <a href="/about">About Us</a>
                <a href="/">Join the Club</a>
            </div>
        </nav>
    )
}