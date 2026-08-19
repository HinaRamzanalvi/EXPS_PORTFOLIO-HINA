"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaPython } from "react-icons/fa";
import { SiNextdotjs, SiDocker } from "react-icons/si";
import { FiDownload } from "react-icons/fi";
import { Bot, Brain } from "lucide-react";


function LaptopModel() {
  const gltf = useGLTF("/models/cyberpunk_laptop.glb");
  const ref = useRef<THREE.Group>(null!);

  useFrame(({ mouse }) => {
    if (ref.current) {
      ref.current.rotation.y += 0.003;
      ref.current.rotation.x = -mouse.y * 0.2;
    }
  });

  return <primitive ref={ref} object={gltf.scene} scale={0.8} position={[0, -0.7, 0]} />;
}

export default function Hero() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs size={35} className="text-white" /> },
    { name: "AI Agents", icon: <Brain size={35} className="text-purple-400" /> },
    { name: "Python", icon: <FaPython size={35} className="text-yellow-500" /> },
    { name: "Docker", icon: <SiDocker size={35} className="text-blue-500" /> },
    { name: "Chatbot", icon: <Bot size={35} className="text-cyan-400" /> },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-24 text-white overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-teal-900 opacity-95"></div>
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="absolute -top-16 -left-16 w-64 h-64 md:w-96 md:h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-56 h-56 md:w-72 md:h-72 bg-cyan-400/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-52 md:w-[550px] md:h-[350px] bg-white/5 rounded-3xl backdrop-blur-3xl rotate-12 blur-xl"></div>

      {/* Text Content */}
      <div className="relative z-10 max-w-xl flex flex-col gap-6 md:mr-12 md:order-1 order-2 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight"
        >
          <span className="text-gray-300 block text-3xl sm:text-2xl mb-1">Hi, I&apos;m</span>
          <span className="bg-gradient-to-r from-teal-300 to-cyan-400 text-transparent bg-clip-text">
            Hina Alvi
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed"
        >
          Agentic AI Developer  AI Agents & Automation  RAG & LLM Applications  Python  Next.js  Full-Stack AI Developer

        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 mt-6 justify-center md:justify-start"
        >
          <a
            href="/Hina Alvi Updated-1.pdf"
            download
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-6 sm:py-3 bg-teal-500 text-black rounded-xl font-semibold hover:bg-teal-400 transition-all duration-300 hover:shadow-xl hover:shadow-teal-400/40 text-xs sm:text-base"
          >
            <FiDownload className="text-[14px] sm:text-[20px]" /> Download CV
          </a>

          <a
            href="https://github.com/HinaRamzanalvi?tab=repositories"
            target="_blank"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-6 sm:py-3 border border-teal-400 rounded-xl hover:bg-teal-500 hover:text-black transition-all duration-300 text-xs sm:text-base"
          >
            <FaGithub className="text-[14px] sm:text-[22px]" /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/hina-alvi-559678299/"
            target="_blank"
            className="flex items-center justify-center gap-2 px-3 py-2 sm:px-6 sm:py-3 border border-teal-400 rounded-xl hover:bg-teal-500 hover:text-black transition-all duration-300 text-xs sm:text-base"
          >
            <FaLinkedin className="text-[14px] sm:text-[22px]" /> LinkedIn
          </a>
        </motion.div>

        {/* Skills Icons below buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-6 justify-center md:justify-start mt-10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                delay: index * 0.2,
              }}
              className="flex flex-col items-center text-center"
            >
              {skill.icon}
              <span className="text-xs sm:text-sm mt-1 text-white">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 3D Cyberpunk Laptop */}
      <div className="w-full md:w-1/2 h-[300px] md:h-[600px] relative order-1 md:order-2">
        <Canvas camera={{ position: [0, 1, 3], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <LaptopModel />
          <OrbitControls
            enableRotate={true}
            enableZoom={false}
            enablePan={false}
            rotateSpeed={1.2}
            enableDamping={true}
            dampingFactor={0.1}
        
            screenSpacePanning={false}
          />
        </Canvas>
      </div>
    </section>
  );
}
