import React from 'react';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-around w-full h-16 m-0 z-10 bg-gray-950 shadow-2xl">
            <a href="/" className="flex items-center gap-4">
                <img src="/croboticslogo.jpg" alt="" className="h-10 w-10 border-2 rounded-full" />
                <h1 className="text-white text-3xl font-bold">CHS Robotics</h1>
            </a>
            <a href="/about">About Us</a>
        </nav>
    )
}