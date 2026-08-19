"use client"
import { motion } from "framer-motion"
import { Award, Laptop, Briefcase, Database } from "lucide-react"

export default function Education() {
  return (
    <section className="min-h-screen py-20 px-8 flex flex-col items-center bg-gradient-to-br from-black via-gray-900 to-teal-900 opacity-95">

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-white drop-shadow-md mb-14 text-center"
      >
        🎓 My Education Journey
      </motion.h1>

      {/* Timeline Container */}
      <div className="relative max-w-4xl w-full">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[4px] bg-gradient-to-b from-purple-500 via-pink-500 to-blue-500 rounded-full hidden md:block"></div>

        {/* 1: B.Com */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center mb-14"
        >
          <div className="hidden md:flex justify-center items-center w-1/2">
            <div className="w-7 h-7 bg-purple-500 rounded-full shadow-lg shadow-purple-700"></div>
          </div>

          <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-purple-600/40 hover:scale-[1.03] transition-all">
            <h2 className="text-2xl font-semibold text-white">Bachelor in Commerce</h2>
            <p className="text-sm text-gray-300 mt-1">Shaheed Benazir Bhutto University</p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Pursuing advanced studies in AI with focus on ML, GenAI and web-based AI projects.
            </p>
          </div>
        </motion.div>

        {/* 2: Matric */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center mb-14"
        >
          <div className="hidden md:flex justify-center items-center w-1/2 md:order-2">
            <div className="w-7 h-7 bg-blue-500 rounded-full shadow-lg shadow-blue-700"></div>
          </div>

          <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-blue-600/40 hover:scale-[1.03] transition-all md:order-1">
            <h2 className="text-2xl font-semibold text-white">Matriculation in Science</h2>
            <p className="text-sm text-gray-300 mt-1">ABC High School – 2016 to 2018</p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Strong base in science, computer studies & mathematics.
            </p>
          </div>
        </motion.div>

        {/* 3: Intermediate */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center mb-14"
        >
          <div className="hidden md:flex justify-center items-center w-1/2">
            <div className="w-7 h-7 bg-pink-500 rounded-full shadow-lg shadow-pink-700"></div>
          </div>

          <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-pink-600/40 hover:scale-[1.03] transition-all">
            <h2 className="text-2xl font-semibold text-white">Intermediate in Computer Science</h2>
            <p className="text-sm text-gray-300 mt-1">XYZ College – 2018 to 2020</p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Learned programming & UI/UX concepts which sparked passion for Tech.
            </p>
          </div>
        </motion.div>

        {/* ⭐ 4: AI Engineering */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center mb-14"
        >
          <div className="hidden md:flex justify-center items-center w-1/2 md:order-2">
            <div className="w-7 h-7 bg-green-500 rounded-full shadow-lg shadow-green-700"></div>
          </div>

          <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-green-600/40 hover:scale-[1.03] transition-all md:order-1">
            <h2 className="text-2xl font-semibold text-white">AI Engineering (Governor House IT Initiative)</h2>
            <p className="text-sm text-gray-300 mt-1">Governor House Karachi</p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Learning modern AI tools like GenAI, LLMs, RAG systems, Python, automation, and AI-driven development.
            </p>
          </div>
        </motion.div>

        {/* 5: Web Designing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center mb-14"
        >
          <div className="hidden md:flex justify-center items-center w-1/2">
            <div className="w-7 h-7 bg-blue-500 rounded-full shadow-lg shadow-blue-700"></div>
          </div>

          <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-blue-600/40 hover:scale-[1.03] transition-all">
            <h2 className="text-2xl font-semibold text-white">Web Designing</h2>
            <p className="text-sm text-gray-300 mt-1">Momon Industrial Technical Institute – Continuing</p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Learning web design fundamentals, HTML, CSS, JavaScript, and modern design principles.
            </p>
          </div>
        </motion.div>

        {/* 6: Advanced Web Designing */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center mb-14"
        >
          <div className="hidden md:flex justify-center items-center w-1/2 md:order-2">
            <div className="w-7 h-7 bg-orange-500 rounded-full shadow-lg shadow-orange-700"></div>
          </div>

          <div className="md:w-1/2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 hover:shadow-orange-600/40 hover:scale-[1.03] transition-all md:order-1">
            <h2 className="text-2xl font-semibold text-white">Advanced Web Designing</h2>
            <p className="text-sm text-gray-300 mt-1">Momon Industrial Technical Institute – Continuing</p>
            <p className="text-gray-300 mt-3 leading-relaxed">
              Specialized training in web development technologies and design methodologies.
            </p>
          </div>
        </motion.div>

      </div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mt-28 w-full max-w-6xl text-center"
      >
        <h2 className="text-4xl font-extrabold text-white drop-shadow-md mb-12">
          🏅 Certifications
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Web Designing", icon: <Laptop size={36} /> },
            { title: "MS Office", icon: <Briefcase size={36} /> },
            { title: "Freelancing", icon: <Award size={36} /> },
            { title: "Data Analytics & BI", icon: <Database size={36} /> },
          ].map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="backdrop-blur-xl bg-white/10 border border-white/20 text-white 
              py-10 px-6 rounded-3xl shadow-xl hover:shadow-purple-400/40 transition-all"
            >
              <div className="flex flex-col items-center justify-center space-y-3">
                <div className="bg-white/20 p-4 rounded-full">{cert.icon}</div>
                <h3 className="text-lg md:text-xl font-bold">{cert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
