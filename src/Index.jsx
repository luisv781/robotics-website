import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import './index.css';

import TeamMember from './components/TeamMember';
import NavBar from './components/NavigationBar';
import Footer from './components/Footer';

import robotLogo from '/img/robotlogo.jpg';
import dremelImage from '/img/dremel.jpg';

let app = createRoot(document.querySelector('#app'));

app.render(
    <>
        <NavBar />

        <div className="flex flex-col items-center my-6">
            <a href="#" className="logo">
                <img src={ robotLogo } className="h-48 p-1 rounded-full will-change-[filter] transition-[filter] duration-200" id="roboticsLogo" alt="CHS Robotics Logo" />
            </a>
            <h1 className="m-4 text-8xl max-lg:text-6xl font-extrabold text-transparent max-lg:text-white bg-gradient-to-r from-blue-50 from-20% to-blue-400 bg-clip-text bg-size-[300%_auto] bg-position-[0%] hover:bg-position-[60%] transition-all duration-300">CHS ROBOTICS CLUB</h1>
            <h2 className="mx-4 text-3xl tracking-wider font-medium">Innovate. Build. Compete. Inspire. Idk.</h2>
        </div>

        <div className="section flex justify-around max-w-full">
            <div className="my-8 mr-auto px-16 max-lg:px-4 max-w-2/3 text-left font-normal">
                <h2 className="font-bold text-2xl">Our Mission</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa itaque necessitatibus accusamus atque neque dicta vero mollitia aliquid omnis obcaecati rem nesciunt perspiciatis dignissimos facilis placeat recusandae in animi, voluptatum sit quos! Facilis laudantium doloribus nihil repellat sunt tempora, harum modi deleniti eaque consectetur praesentium voluptas vel delectus accusamus distinctio repellendus officiis repudiandae expedita non inventore sit. Sed ullam quam deserunt eveniet molestias rerum deleniti a quidem voluptatem sequi odio iste temporibus, non repellendus maxime. Accusantium soluta iste reprehenderit optio consequatur inventore saepe odit molestias non, ipsam facere sapiente, cum, fuga in. Distinctio in explicabo excepturi laudantium assumenda voluptatem dolor!
                </p>
            </div>
            <div id="ig-embed" className="side m-8 mr-16 max-w-1/3 max-h-full hover:rotate-1">
                <iframe className="rounded-2xl h-full bg-white" src="https://www.instagram.com/cchavezroboticsclub/embed/"></iframe>
            </div>
        </div>

        <div className="section flex justify-around">
            <div className="side m-8 ml-16 max-w-1/3 self-center hover:-rotate-1">
                <img src={ dremelImage } alt="Mr. Perez using a dremel." className="h-full w-fit rounded-2xl" />
            </div>
            <div className="my-8 ml-auto px-16 max-lg:px-4 max-w-2/3 text-right font-normal">
                <h2 className="font-bold text-2xl">Team Structure</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit fugiat doloremque dolor est cumque deleniti laboriosam voluptate, ab consequuntur illum! Enim numquam exercitationem consequatur cupiditate aspernatur esse fuga cum minima amet corporis accusamus facilis impedit sit rem delectus iusto, libero laborum odio molestias. Dignissimos in odio quibusdam blanditiis id, totam sit voluptates deserunt enim ipsam quasi rerum cumque, fuga, illo impedit omnis unde magni minus ipsa. Hic perspiciatis architecto quibusdam quam excepturi necessitatibus temporibus laboriosam! Repudiandae accusantium, quam animi possimus officia, consequatur quibusdam quos aperiam nostrum magni perferendis hic dicta error et laboriosam architecto! Hic, dolor. Aliquam veritatis omnis eos.
                </p>
            </div>
        </div>

        <div className="section flex flex-col">
            <h1 className="text-4xl font-bold my-4" id="about-us">Meet the Team</h1>
            <div className="flex justify-around flex-wrap gap-8 p-8" id="theTeam">
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
            </div>
        </div>

        <Footer />
    </>
);
