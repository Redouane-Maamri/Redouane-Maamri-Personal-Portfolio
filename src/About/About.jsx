import React from "react";

export default function About() {
  return (
    <section id="About" className="bg-gradient-to-b from-black to-gray-900 text-black py-24 px-6 md:px-20 overflow-hidden animate-fadeIn">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-20">
        {/* Image Section */}
        <div className="w-full md:w-1/2 animate-fadeIn">
          <img
            src="/redimage.png"
            alt="Redouane Maamri"
            className="rounded-full w-72 h-72 object-cover border-4 border-white z-10 shadow-lg hover:scale-105 transition-transform duration-500"

          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-4xl font-bold text-lime-600 mb-3">About Me : </h3>
          <p className="text-white font-bold text-lg leading-relaxed">
            Hi! My name is <span className="text-lime-600 font-semibold">Redouane Maamri</span>, I'm 20 years old, and I’m a passionate tech enthusiast from Morocco. <br /><br />
            I studied for 2 years at <span className="text-purple-600 font-medium">OFPPT NTIC 1</span>, where I built a strong foundation in computer science and networks. <br />
            Currently, I'm pursuing my third year of <span className="text-green-500 font-medium">engineering studies at EMSI</span> (
            <span className="text-green-500 font-bold">École Marocaine des Sciences de l'Ingénieur</span>), specializing in Computer Science and Networks. <br /><br />
            I’m constantly learning and working on real-world projects to grow my skills and become a well-prepared and confident software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}
