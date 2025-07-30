import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './index.css';

import TeamMember from './components/TeamMember';

let styleEmbed = new Promise((resolve) => {
    const interval = setInterval(() => {
        const instagramEmbed = document.querySelector('#instagram-embed-0');
        if (instagramEmbed) {
          clearInterval(interval);
          resolve(instagramEmbed);
        }
    }, 100);
});

let theTeam = new Promise((resolve) => {
    const interval = setInterval(() => {
        const teamSection = document.querySelector('#theTeam');
        if (teamSection) {
            clearInterval(interval);
            resolve(teamSection);
        }
    }, 100);
});

styleEmbed.then(embed => {
    embed.style.borderRadius = "1rem";
    embed.style.border = "";
});

theTeam.then(teamSection => {
    createRoot(teamSection).render(
        <>
            <TeamMember
                name={"Mr. Saper"}
                role="Club Sponsor"
                image={"https://placehold.co/128x128"}
                description={"Mr. Saper is the club sponsor, providing guidance and support to the team. He has a wealth of experience in education and technology."}
            />
            <TeamMember
                name={"Aaron Perez Almanza"}
                role={"Group Leader"}
                image={"https://placehold.co/128x128"}
                description={"Aaron is a software engineer with over 5 years of experience in web development. He loves coding and sharing knowledge with others."}
            />
            <TeamMember
                name={"Luis Villela"}
                role={"Senior Robot Man"}
                image={"https://placehold.co/128x128"}
                description={"Luis is a senior software engineer with a passion for robotics and automation. He has been working in the field for over 10 years and enjoys mentoring others."}
            />
            <TeamMember
                name={"Carlos Paiz"}
                role={"Amateur Engineer"}
                image={"https://placehold.co/128x128"}
                description={"Carlos is an amateur engineer with a keen interest in robotics and automation. He is always eager to learn and improve his skills."}
            />
            <TeamMember
                name={"Danny Argueta"}
                role={"Junior Engineer"}
                image={"https://placehold.co/128x128"}
                description={"Danny is a junior engineer with a strong interest in software development and robotics. He is always looking for new challenges and opportunities to grow."}
            />
            <TeamMember
                name={"Eliseo Bugarin"}
                role={"Beginner Member"}
                image={"https://placehold.co/128x128"}
                description={"Eliseo is a beginner member of the team, eager to learn and contribute. He has a passion for technology and is excited to be part of the robotics community."}
            />
        </>
        
    )
});
