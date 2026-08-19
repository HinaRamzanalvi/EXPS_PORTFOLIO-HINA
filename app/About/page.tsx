
"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaPython, FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiSanity, SiStreamlit, SiDocker } from "react-icons/si";
import { Code, Layout, Cpu, Database, Terminal, Zap } from "lucide-react";

export default function AboutAndSkills() {
  // Combined skills for Professional Journey
  const profSkills = [
    {
      title: "Next.js Development",
      icon: <Code size={36} />,
      desc: "Building scalable and modern web applications leveraging Next.js with TypeScript and optimized routing.",
      color: "from-teal-400 to-green-400",
    },
    {
      title: "Tailwind CSS Styling",
      icon: <Layout size={36} />,
      desc: "Crafting responsive, pixel-perfect designs with Tailwind CSS, ensuring clean UI and seamless user experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Python Streaming Apps",
      icon: <Cpu size={36} />,
      desc: "Developing interactive streaming applications using Python and Streamlit for real-time data visualization.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      title: "Sanity CMS Integration",
      icon: <Database size={36} />,
      desc: "Integrating Sanity CMS to manage dynamic content efficiently for modern web applications.",
      color: "from-blue-400 to-indigo-500",
    },
    {
      title: "Agentic AI Solutions",
      icon: <Zap size={36} />,
      desc: "Designing AI-driven solutions that automate workflows and provide intelligent insights for business growth.",
      color: "from-red-400 to-pink-500",
    },
    {
      title: "GEMINI CLI Development",
      icon: <Terminal size={36} />,
      desc: "Creating interactive command-line tools and applications using GEMINI CLI for rapid prototyping.",
      color: "from-green-400 to-emerald-500",
    },
    {
      title: "Prompt Engineering",
      icon: <Code size={36} />,
      desc: "Expertise in designing effective prompts for AI models to deliver precise, context-aware results.",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  const skills = [
    { name: "HTML", icon: <FaHtml5 size={50} className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt size={50} className="text-blue-500" /> },
    { name: "TypeScript", icon: <SiTypescript size={50} className="text-blue-600" /> },
    { name: "React.js", icon: <FaReact size={50} className="text-sky-400" /> },
    { name: "Next.js", icon: <SiNextdotjs size={50} className="text-white" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss size={50} className="text-teal-400" /> },
    { name: "Python", icon: <FaPython size={50} className="text-yellow-500" /> },
    { name: "Sanity", icon: <SiSanity size={50} className="text-pink-500" /> },
    { name: "Streamlit", icon: <SiStreamlit size={50} className="text-orange-400" /> },
    { name: "Docker", icon: <SiDocker size={50} className="text-blue-500" /> },
  ];

  return (
    <section className="w-full relative text-white px-6 md:px-24 py-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-teal-900">
      {/* Background */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col gap-32">
        {/* ================= About Section ================= */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
            className="relative flex-shrink-0"
          >
            <div className="relative w-[280px] h-[280px] sm:w-[330px] sm:h-[330px] md:w-[400px] md:h-[400px]">
              <Image
                src="/hina.jpg"
                alt="Hina Alvi"
                fill
                className="rounded-b-full object-cover shadow-[0_0_40px_rgba(251,191,36,0.5)] border-4 border-teal-500 hover:scale-105 transition-transform duration-700"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                className="absolute inset-0 border-4 border-teal-500 rounded opacity-30"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-left max-w-xl"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              <span className="text-teal-500">About</span> <span className="text-white">Me</span>
            </h2>
            <div className="space-y-5 text-gray-300 leading-relaxed">
              <p>
                I&apos;m <span className="text-teal-500 font-semibold">Hina Alvi</span>, a passionate <span className="text-teal-500 font-semibold">AI Developer</span> focused on building intelligent and innovative digital solutions.
              </p>
              <p>
                I specialize in <span className="text-teal-500 font-semibold">Artificial Intelligence, AI Agents, Generative AI, RAG Systems, LLM Applications, AI Automation, and AI-powered Chatbots</span>. I&apos;m currently advancing my expertise in Artificial Intelligence at Governor House, exploring modern AI technologies and developing practical, intelligent applications.
              </p>
              <p>
                I&apos;m passionate about creating <span className="text-teal-500 font-semibold">next-generation AI solutions</span> that automate tasks, solve real-world problems, and deliver smarter digital experiences.
              </p>
            </div>
          </motion.div>
        </div>

        {/* ================= Skills Section ================= */}
        <div className="text-center" id="skills">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-extrabold mb-12"
          >
            Skills
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 md:gap-12 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  delay: index * 0.2,
                }}
                whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(0, 255, 255, 0.6)" }}
                className="flex flex-col items-center gap-3 transition-transform duration-300"
              >
                {skill.icon}
                <span className="text-white font-semibold mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= Professional Journey ================= */}
        <div className="relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-extrabold mb-12"
          >
            💼 My Professional Journey
          </motion.h2>

          <p className="text-gray-300 text-lg mb-16">
            I have honed my skills across web development, AI solutions, and CMS integration, delivering professional, scalable, and intelligent solutions for modern applications.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            {profSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${skill.color} rounded-2xl shadow-xl p-8 hover:shadow-lg transition-all`}
              >
                <div className="flex flex-col items-center justify-center space-y-4">
                  <div className="bg-white/20 p-4 rounded-full">{skill.icon}</div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p className="text-gray-100 text-sm">{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
