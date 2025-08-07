import React from "react";

import dremelImage from '/img/dremel.jpg';

export default function AboutSection() {
    return (
        <>
            <div className="section flex justify-around max-w-full">
                <div className="my-8 mr-auto px-16 max-lg:px-4 max-w-2/3 text-left font-normal">
                    <h2 className="font-bold text-2xl">Our Mission</h2>
                    <p>
                        At CHS's Robotics Club, our mission is to inspire and empower students 
                        through hands-on experiences in robotics and engineering. We are 
                        committed to providing a collaborative and inclusive environment 
                        where students can develop critical problem-solving skills, foster 
                        creativity, and build lasting friendships. By participating in VEX 
                        Robotics competitions, our team members not only hone their technical 
                        abilities but also learn valuable life skills such as teamwork, 
                        leadership, and resilience. We believe that through innovation 
                        and perseverance, our students will develop the confidence to 
                        tackle the challenges of tomorrow and become the engineers, 
                        scientists, and leaders of the future.
                    </p>
                </div>
                <div id="ig-embed" className="side m-8 mr-16 max-w-1/3 max-h-full hover:rotate-1">
                    <iframe title="CHS Robotics Instagram Page" className="rounded-2xl h-full bg-white" src="https://www.instagram.com/cchavezroboticsclub/embed/"></iframe>
                </div>
            </div>

            <div className="section flex justify-around">
                <div className="side m-8 ml-16 max-w-1/3 self-center hover:-rotate-1">
                    <img src={ dremelImage } alt="Mr. Perez using a dremel." className="h-full w-fit rounded-2xl" />
                </div>
                <div className="my-8 ml-auto px-16 max-lg:px-4 max-w-2/3 text-right font-normal">
                    <h2 className="font-bold text-2xl">Team Structure</h2>
                    <p>
                        Our robotics team is structured to ensure that every student has 
                        the opportunity to contribute and grow, no matter their skill 
                        level or experience. The team is divided into key roles that 
                        encourage collaboration, creativity, and leadership development: 
                        the design/engineering and programming roles. Students in 
                        design/engineering focus on brainstorming, designing, and 
                        building the robot. They work closely with other members to 
                        solve engineering challenges and incorporate innovative 
                        solutions into the robot's design. The programming team is 
                        responsible for writing the code that controls the robot's 
                        movements and functionality.
                    </p>
                </div>
            </div>
        </>
    )
}