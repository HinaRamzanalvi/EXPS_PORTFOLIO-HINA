"use client"
import Image from "next/image"
import Link from "next/link"

import { motion, AnimatePresence } from "framer-motion"
import { User, HomeIcon, Folder, Mail, Menu, X } from "lucide-react"
import { useState } from "react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    {name:"Home",path:"/Home",icon: <HomeIcon size={18}/>},
    { name: "About", path: "/About", icon: <User size={18} /> },
    { name: "Projects", path: "/projects", icon: <Folder size={18} /> },
    { name: "Contact", path: "/Contact", icon: <Mail size={18} /> },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/60 border-b border-white/10 shadow-lg px-6 py-4">

      {/* Top Section */}
      <div className="flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/Gemini_Generated_Image_6g2lad6g2lad6g2l.png"
            alt="H Logo"
            width={55}
            height={55}
            className="rounded-full transition-all duration-300 hover:scale-110 hover:rotate-6 cursor-pointer"
          />

          <h1 className="text-3xl font-bold text-white tracking-wide">
            Hina{" "}
            <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
              Alvi
            </span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {navItems.map((item, i) => (
            <motion.li
              key={i}
              whileHover={{ scale: 1.12 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <Link
                href={item.path}
                className="flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 
                bg-white/5 hover:bg-teal-500 hover:text-black 
                hover:shadow-lg hover:shadow-teal-400/40"
              >
                {item.icon}
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={34} /> : <Menu size={34} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 bg-black/70 backdrop-blur-xl rounded-xl p-4 flex flex-col gap-4 border border-white/10"
          >
            {navItems.map((item, i) => (
              <Link
                key={i}
                href={item.path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-white px-4 py-3 rounded-lg 
                bg-white/5 hover:bg-teal-500 hover:text-black transition-all duration-300"
              >
                {item.icon}
                {item.name}
              </Link>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  )
}
