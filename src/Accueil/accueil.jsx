// src/components/HeroSection.jsx
export default function HeroSection() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white flex flex-col items-center justify-center px-4 text-center relative">
        {/* Navbar */}
        <div className="absolute top-0 w-full flex justify-between items-center px-10 py-6 z-10">
          <h1 className="text-3xl font-bold text-white">
            Red<span className="text-lime-400">One</span><span className="text-green-400">.</span>
          </h1>
          <div className="space-x-6 hidden md:flex">
            <a href="#" className="text-white relative group">
              Home
              <span className="block w-4 h-1 bg-purple-400 rounded-full mt-1 mx-auto group-hover:w-6 transition-all duration-300"></span>
            </a>
            <a href="#About" className="hover:text-gray-300">About Me</a>
            <a href="#technologies" className="hover:text-gray-300">TeckStack</a>
            <a href="#service" className="hover:text-gray-300">Services</a>
            <a href="#Projects" className="hover:text-gray-300">Projects</a>
            <a href="#contact" className="hover:text-gray-300">Contact</a>
          </div>
          <a href="#contact" className="bg-gradient-to-r from-lime-500 to-green-400 text-white px-5 py-2 rounded-full font-semibold">
            Connect With Me
          </a>
        </div>
  
        {/* Profile Image */}
        <img
          src="/redimage.png"
          alt="Profile"
          className="rounded-full w-48 h-48 object-cover border-4 border-white z-10 animate-fadeIn"
        />
  
        {/* Intro Text */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 z-10 animate-fadeIn">
          I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-green-400">Redouane Maamri</span>, <br />
          <span className="text-white">Future Engineer in IIR</span>
        </h1>
  
        {/* Description */}
        <p className="mt-4 text-gray-300 z-10 max-w-2xl animate-fadeIn">
          I am a software engineer from Morocco with a passion for building modern web applications using React, Tailwind CSS, and Laravel. Currently an engineering student at EMSI.
        </p>
  
        {/* Buttons */}
        <div className="mt-8 flex gap-5 z-10">
          <a href="#contact" className="bg-gradient-to-r from-lime-500 to-green-400 text-white px-6 py-2 rounded-full font-medium">
            Connect with me
          </a>
          <a href="/resume.pdf" download className="border border-white px-6 py-2 rounded-full font-medium hover:bg-white hover:text-black transition">
            My resume
          </a>
        </div>
      </div>
    );
  }
  