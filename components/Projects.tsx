"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Food Tuck Marketplace",
      description:
        "A vibrant marketplace for food lovers, offering delicious fast food like burgers and fries, built during a hackathon.",
      tech: ["Next js","Sanity", "Typescript", "Tailwind CSS", "React-icons"],
      image: "/foodtuck.png",
      github: "https://github.com/Sheikh-Ubaid-Raza/MarketPlace-Hackathon-FoodTuck",
      demo: "https://market-place-hackathon-food-tuck.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Bazm Falah-ul-Ahbab Portal",
      description:
        "A social welfare platform promoting education, charity, and community development, supporting the needy in Sultanpur.",
      tech: ["Next js", "Typescript", "Tailwind CSS", "Shadcn UI"],
      image: "/bazm.png",
      github: "https://github.com/Sheikh-Ubaid-Raza/Bazm-Falah-Portal",
      demo: "https://bazmfalah-portal.vercel.app/",
      category: "Frontend",
    },
    {
      title: "Next Tour",
      description:
        "A travel booking platform showcasing top destinations and hotel rooms.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/next-tour.png",
      github: "https://github.com/Sheikh-Ubaid-Raza/Tour-Website",
      demo: "https://next-tour-website.netlify.app/",
      category: "Frontend",
    },
    {
      title: "Foody Fastfood",
      description:
        "A fast food restaurant site offering tasty burgers, fries, and shakes with easy online ordering.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      image: "/foody.png",
      github: "https://github.com/Sheikh-Ubaid-Raza/Foody-Website",
      demo: "https://ubaidfood.netlify.app/",
      category: "Frontend",
    },
    {
      title: "AI Unit Converter",
      description:
        "A Streamlit-based web app for converting units, providing a simple, user-friendly tool for various measurements with AI Chatbot.",
      tech: ["Python", "Streamlit", "Gemini API Key"],
      image: "/unit-converter.jpg",
      github: "https://github.com/Sheikh-Ubaid-Raza/Unit-Converter",
      demo: "https://unitcanverter.streamlit.app/",
      category: "AI",
    },
    {
      title: "Report Analyzer",
      description:
        "A Streamlit app showcasing Python-based web development, featuring data-driven tools and user-friendly interfaces.",
      tech: ["Python", "Streamlit"],
      image: "/report-analyzer.png",
      github: "https://github.com/Sheikh-Ubaid-Raza/Python-Streamlit-Web-App",
      demo: "https://ubaid-py-web.streamlit.app/",
      category: "Streamlit",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my latest work in AI development and web technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={350}
                  height={350}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      project.category === "AI" ? "bg-purple-500/80 text-white" : "bg-blue-500/80 text-white"
                    }`}
                  >
                    {project.category}
                  </span>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? "opacity-100" : "opacity-0"
                  }`}
                ></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-slate-700/50 text-purple-300 text-xs rounded-md border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="blank"
                    className="flex-1 px-4 py-2 bg-slate-700/50 text-white text-center rounded-lg hover:bg-slate-600/50 transition-colors duration-200 text-sm font-medium"
                  >
                    GitHub
                  </Link>
                  <Link
                    href={project.demo}
                    target="blank"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-center rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 text-sm font-medium"
                  >
                    Live Demo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
