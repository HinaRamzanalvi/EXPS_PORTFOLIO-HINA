// "use client"
// import Image from "next/image"
// import { motion } from "framer-motion"

// const projects = [
//   {
//     title: "Comforty – Furniture Store",
//     image: "/comforty.png",
//     description: "An elegant e-commerce website built with Next.js and Tailwind CSS.",
//     tech: ["Next.js", "Tailwind", "TypeScript"],
//     live: "https://comforty.vercel.app",
//     github: "https://github.com/ToobaAlvi/comforty",
//   },
//   {
//     title: "Toyota Landing Page",
//     image: "/toyota.png",
//     description: "A modern car website with animations and responsive design.",
//     tech: ["Next.js", "Framer Motion"],
//     live: "https://toyota.vercel.app",
//     github: "https://github.com/ToobaAlvi/toyota",
//   },
//     {
//     title: "Toyota Landing Page",
//     image: "/toyota.png",
//     description: "A modern car website with animations and responsive design.",
//     tech: ["Next.js", "Framer Motion"],
//     live: "https://toyota.vercel.app",
//     github: "https://github.com/ToobaAlvi/toyota",
//   },
//     {
//     title: "Comforty – Furniture Store",
//     image: "/comforty.png",
//     description: "An elegant e-commerce website built with Next.js and Tailwind CSS.",
//     tech: ["Next.js", "Tailwind", "TypeScript"],
//     live: "https://comforty.vercel.app",
//     github: "https://github.com/ToobaAlvi/comforty",
//   },
//   {
//     title: "Toyota Landing Page",
//     image: "/toyota.png",
//     description: "A modern car website with animations and responsive design.",
//     tech: ["Next.js", "Framer Motion"],
//     live: "https://toyota.vercel.app",
//     github: "https://github.com/ToobaAlvi/toyota",
//   },
//     {
//     title: "Toyota Landing Page",
//     image: "/toyota.png",
//     description: "A modern car website with animations and responsive design.",
//     tech: ["Next.js", "Framer Motion"],
//     live: "https://toyota.vercel.app",
//     github: "https://github.com/ToobaAlvi/toyota",
//   },
// ]

// export default function Projects() {
//   return (
//     <section id="projects" className="py-20 bg-[#0b0b14] text-white">
//       <h2 className="text-4xl font-bold text-center mb-12">
//         My <span className="text-indigo-400">Projects</span>
//       </h2>

//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
//         {projects.map((project, i) => (
//           <motion.div
//             key={i}
//             whileHover={{ scale: 1.05 }}
//             className="bg-[#12122a] rounded-2xl overflow-hidden shadow-lg hover:shadow-indigo-600 transition"
//           >
//             <Image
//               src={project.image}
//               alt={project.title}
//               width={600}
//               height={400}
//               className="w-full h-60 object-cover"
//             />

//             <div className="p-5">
//               <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
//               <p className="text-gray-400 text-sm mb-4">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, idx) => (
//                   <span
//                     key={idx}
//                     className="px-3 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               <div className="flex justify-between">
//                 <a
//                   href={project.live}
//                   target="_blank"
//                   className="text-indigo-400 hover:text-indigo-300"
//                 >
//                   🔗 Live Demo
//                 </a>
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   className="text-gray-400 hover:text-white"
//                 >
//                   💻 GitHub
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   )
// }
