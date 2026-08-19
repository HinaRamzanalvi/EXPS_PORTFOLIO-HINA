"use client"
import { motion } from "framer-motion"
import { Code, Layout, Cpu, Database, Terminal, Zap } from "lucide-react"

const skills = [
  {
    title: "Next.js Development",
    icon: <Code size={36} />,
    desc: "Building scalable and modern web applications leveraging the power of Next.js with TypeScript and optimized routing.",
  },
  {
    title: "Tailwind CSS Styling",
    icon: <Layout size={36} />,
    desc: "Crafting responsive, pixel-perfect designs with Tailwind CSS, ensuring clean UI and seamless user experience.",
  },
  {
    title: "Python Streaming Apps",
    icon: <Cpu size={36} />,
    desc: "Developing interactive streaming applications using Python and Streamlit for real-time data visualization.",
  },
  {
    title: "Sanity CMS Integration",
    icon: <Database size={36} />,
    desc: "Integrating Sanity CMS to manage dynamic content efficiently for modern web applications.",
  },
  {
    title: "Agentic AI Solutions",
    icon: <Zap size={36} />,
    desc: "Designing AI-driven solutions that automate workflows and provide intelligent insights for business growth.",
  },
  {
    title: "GEMINI CLI Development",
    icon: <Terminal size={36} />,
    desc: "Creating interactive command-line tools and applications using GEMINI CLI for rapid prototyping.",
  },
  {
    title: "Prompt Engineering",
    icon: <Code size={36} />,
    desc: "Expertise in designing effective prompts for AI models to deliver precise, context-aware results.",
  },
]

export default function ProfessionalJourney() {
  return (
    <section className="relative py-24 px-6 md:px-24 bg-gradient-to-br from-black via-gray-900 to-teal-900 text-white">
      <div className="relative z-10 max-w-6xl mx-auto text-center">
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
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8 hover:shadow-teal-400/40 transition-all"
            >
              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="bg-white/20 p-4 rounded-full">{skill.icon}</div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className="text-gray-300 text-sm">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
