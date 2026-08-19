"use client"
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa"

export default function SocialLinks() {
  const links = [
    { icon: <FaGithub />, url: "https://github.com/" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/" },
    { icon: <FaInstagram />, url: "https://instagram.com/" },
    { icon: <FaEnvelope />, url: "mailto:youremail@example.com" },
    { icon: <FaFacebook />, url: "https://facebook.com/" },
  ]

  return (
    <div className="fixed bottom-10 left-6 flex flex-col items-center gap-4 text-white text-xl">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-all duration-300"
        >
          {link.icon}
        </a>
      ))}
      <div className="w-[3px] h-24 bg-purple-400 mt-4"></div>
    </div>
  )
}
