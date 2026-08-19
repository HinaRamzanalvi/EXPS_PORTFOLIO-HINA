"use client";
import { FaLinkedin, FaGithub,  FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-teal-900 text-white py-16 px-6 md:px-24 relative">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">

        {/* Brand / Name */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-teal-500">Hina Alvi</h2>
          <p className="text-gray-300 text-sm mt-1">Full stack Developer & AI Enthusiast</p>
        </div>

        {/* Contact / Email */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-white font-semibold text-lg">Contact Me</h3>
          <a
            href="mailto:youremail@example.com"
            className="flex items-center gap-2 text-gray-300 hover:text-teal-500 transition-colors"
          >
            <FaEnvelope size={20} />princess4177812@gmail.com
          </a>
          <p className="text-gray-400 text-sm mt-1">I’m available for freelance or full-time projects.</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-gray-300 text-sm md:text-base text-center md:text-left">
          <a href="#about-skills" className="hover:text-teal-500 transition-colors">About</a>
          <a href="#skills" className="hover:text-teal-500 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-teal-500 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-teal-500 transition-colors">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://www.linkedin.com/in/hina-alvi-559678299/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/HinaRamzanalvi?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
            <FaGithub size={24} />
          </a>
          <a href="princess4177812@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Separator Line */}
      <div className="border-t border-gray-700 mt-12"></div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Hina Alvi. All Rights Reserved. Crafted with ❤️ 
      </div>
    </footer>
  );
}
