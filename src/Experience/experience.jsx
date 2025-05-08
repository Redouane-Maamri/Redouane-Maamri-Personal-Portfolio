import React from "react";

export default function Experience() {
  return (
    <section className="bg-gray-800 text-white py-10 px-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl text-white font-extrabold">Experience:</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div className="text-center sm:text-left">

        <h2 className="text-2xl text-lime-600 font-semibold">Stage Techno-Park:</h2>

        <p className="text-gray-400 font-bold mt-2 tracking-wide leading-relaxed">
          I completed an internship in digital development, during which I
          designed an e-learning application dedicated to learning English. This
          application offers different levels, ranging from beginner to advanced,
          allowing users to improve their language skills in a progressive and
          interactive way. This project allowed me to strengthen my skills in web
          and mobile development, as well as in project management and user
          experience (UX/UI).
        </p>
        </div>

        <div className="flex items-center justify-center animate-slideInRight">
          <img
            src="https://f2.hespress.com/wp-content/uploads/2022/03/TechnoPark-casablanca-1.jpg"
            alt="Techno-Park Internship"
            className="w-96 h-72 object-cover rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
