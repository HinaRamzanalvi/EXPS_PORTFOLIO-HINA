"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const colorClass = {
  purple: "bg-purple-500 shadow-purple-700",
  blue: "bg-blue-500 shadow-blue-700",
  pink: "bg-pink-500 shadow-pink-700",
  green: "bg-green-500 shadow-green-700",
}

const projects = [
  {
    title: "Comforty – Furniture Store",
    image: "/comforty.jpg",
    description: "An elegant e-commerce website built with Next.js and Tailwind CSS.",
    tech: ["Next.js", "Tailwind", "TypeScript"],
    live: "https://3rd-Hackathone.vercel.app/",
    github: "https://github.com/HinaRamzanalvi/3rd-Hackathone.git",
  },
  {
    title: "E-commerce Alvi store",
    image: "/alvi.jpg",
    description: "A modern car website with animations and responsive design.",
    tech: ["Next.js", "Tailwind css", "Api Integration"],
    live: "https://e-commerce-website-lime-pi.vercel.app/",
    github: "https://github.com/HinaRamzanalvi/E-commerce-website.git",
  },
  {
    title: "Dr Rasheel",
    image: "/Dr.jpg",
    description: "A modern car website with animations and responsive design.",
    tech: ["Next.js", "Framer Motion"],
    live: "https://website-tailwindcss-kappa.vercel.app/",
    github: "https://github.com/HinaRamzanalvi/Website-tailwindcss.git",
  },
  {
    title: "ATM Streamlit",
    image: "/atm.jpg",
    description: "An elegant e-commerce website built with Streamlit.",
    tech: ["python", "streamlit", "css"],
    live: "https://atmapp-9asdjnzbrieufhs3ekgjvk.streamlit.app/",
    github: "https://github.com/HinaRamzanalvi/Atm_streamlit.git",
  },
  {
    title: "Countdown Timer",
    image: "/time.jpg",
    description: "A modern timer app built with Python.",
    tech: ["python", "streamlit", "css"],
    live: "https://countdowntimerappgit-mjmupu7gfbfzmnnu43wruc.streamlit.app/",
    github: "https://github.com/HinaRamzanalvi/Countdown_Timer_App.git",
  },
  {
    title: "MG Website",
    image: "/Mg.jpg",
    description: "A modern car website with animations and responsive design.",
    tech: ["Next.js", "tailwindcss"],
    live: "https://mg-website-next-js-tailwindcss.vercel.app/",
    github: "https://github.com/HinaRamzanalvi/MG-Website-next.js-Tailwindcss.git",
  },
]

export default function CombinedSection() {
  return (
    <section
      id="combined"
      className="relative py-24 text-white px-6 md:px-24 overflow-hidden bg-gradient-to-br from-black via-gray-900 to-teal-900"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">

        {/* ------------------------------------ */}
        {/*            PROJECT SECTION            */}
        {/* ------------------------------------ */}

        <h2 className="text-4xl font-bold text-center mb-14">
          My <span className="text-teal-400">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="bg-gradient-to-br from-gray-900 via-black to-teal-900 rounded-2xl 
              overflow-hidden shadow-lg hover:shadow-teal-500 transition"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-60 object-cover"
              />

              <div className="p-5">
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-500/20 text-teal-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between">
                  <a href={project.live} target="_blank" className="text-teal-400 hover:text-teal-300">
                    🔗 Live Demo
                  </a>
                  <a href={project.github} target="_blank" className="text-gray-300 hover:text-white">
                    💻 GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ------------------------------------ */}
        {/*          EDUCATION SECTION           */}
        {/* ------------------------------------ */}

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-white mb-14 mt-24 text-center"
        >
          🎓 My Education Journey
        </motion.h1>

        <div className="relative max-w-4xl mx-auto w-full">

          {/* Center Line */}
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-[4px] 
          bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full hidden md:block"></div>

          {[
            {
              title: "Bachelor in Commerce",
              sub: "Shaheed Benazir Bhutto University",
              desc: "Pursuing advanced studies in commerce and business management.",
              color: "purple",
              direction: "left",
            },
            {
              title: "Matriculation",
              sub: "T.M.A School",
              desc: "Completed secondary education with a focus on science subjects.",
              color: "blue",
              direction: "right",
            },
            {
              title: "Intermediate ",
              sub: "Goverment girls degree college",
              desc: "Specialized in pre-engineering/computer science during higher secondary school.",
              color: "pink",
              direction: "left",
            },
            {
              title: "AI Engineering (Governor House)",
              sub: "Governor House Karachi",
              desc: "Learning modern AI tools like GenAI, LLMs, and AI-driven development.",
              color: "green",
              direction: "right",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: item.direction === "left" ? -80 : 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex mb-16 ${
                item.direction === "left"
                  ? "md:flex-row flex-col"
                  : "md:flex-row-reverse flex-col"
              } items-center gap-6`}
            >
              {/* Dot */}
              <div className="hidden md:flex justify-center items-center w-1/2">
                <div
                  className={`w-7 h-7 rounded-full ${colorClass[item.color as keyof typeof colorClass]}`}
                ></div>
              </div>

              {/* Box */}
              <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 
                rounded-2xl shadow-xl p-6 hover:scale-[1.02] transition">
                <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
                <p className="text-sm text-gray-300">{item.sub}</p>
                <p className="text-gray-300 mt-3 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
      {/* ------------------------------------ */}
{/*          CERTIFICATION SECTION        */}
{/* ------------------------------------ */}






    </section>
  )
}
