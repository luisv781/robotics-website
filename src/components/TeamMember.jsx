import React from "react";

export default function TeamMember({ name, role, image, description }) {
    return (
        <div className="flex flex-col items-center max-w-96 p-4 bg-gray-100/10 rounded-xl shadow-md">
            <img src={image} alt="" className="w-32 h-32 rounded-full border-2 mb-4" />
            <h3 className="text-2xl font-semibold">{name}</h3>
            <p className="text-lg text-gray-300">{role}</p>
            <p className="text-center text-gray-400 mt-2">{description}</p>
        </div>
    );
}