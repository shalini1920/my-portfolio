import { motion } from "framer-motion";

const projects = [
  {
    name: "React Calculator",
    tech: "React, JavaScript",
    desc: "A fully functional calculator built with React, handling basic and advanced operations.",
    live: "https://react-calculator-1-4ev9.onrender.com",
    github: "https://github.com/shalini1920/react-calculator.git",
  },
  {
    name: "Weather App",
    tech: "React, API",
    desc: "Fetches real-time weather data from an API and displays it with dynamic UI.",
    live: "https://shalini1920.github.io/PRODIGY_WD_01/",
    github: "https://github.com/shalini1920/PRODIGY_WD_01.git",
  },
  {
    name: "Java ATM Simulation",
    tech: "Java",
    desc: "Simulation of an ATM system using Java console application with transactions and authentication.",
    github: "https://github.com/shalini1920/java-ATM.git",
  },
  {
    name: "Blog Application",
    tech: "Node.js, Firebase",
    desc: "Full-stack blog with login, image upload, likes and search.",
    live: "https://blog-app-a22b1.web.app",
    github: "https://github.com/shalini1920/CODING-SAMURAI-INTERNSHIP-TASK-ONE.git",
  },
  {
    name: "Project Management Tool",
    tech: "React, Node, MongoDB",
    desc: "Manage projects, tasks, deadlines and team members.",
    live: "https://project-management-frontend10.onrender.com",
    github: "https://github.com/shalini1920/full-stack-project-managemenet-tool.git",
  },
];

export default function Projects() {
  return (
    <section className="py-20 px-6" id="projects">
      <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Deployments</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 25px rgba(59,130,246,0.5)" }}
            className="bg-white/5 backdrop-blur-lg p-6 rounded-xl border border-white/10 shadow-lg flex flex-col justify-between transition"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-blue-400 text-sm mb-2">{project.tech}</p>
              <p className="text-gray-300 mb-4">{project.desc}</p>
            </div>
            <div className="flex gap-4 mt-2">
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm border border-blue-400 px-4 py-2 rounded hover:bg-blue-400 hover:text-black transition"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
