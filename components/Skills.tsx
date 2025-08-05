"use client"

import { useState } from "react"
import { FaRobot, FaPython, FaBrain, FaCode, FaReact, FaPalette, FaChevronDown, FaChevronUp } from "react-icons/fa"

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) =>
      prev.includes(categoryId) ? prev.filter((id) => id !== categoryId) : [...prev, categoryId],
    )
  }

  const skillCategories = [
    {
      id: "ai-development",
      title: "AI Agent Development",
      icon: <FaRobot className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-600",
      borderColor: "border-purple-500/30",
      hoverColor: "hover:border-purple-500/60",
      technologies: ["Advance Python","OpenAI Agents SDK", "Model Context Protocol (MCP)"],
    },
    {
      id: "python",
      title: "Python Programming",
      icon: <FaPython className="w-6 h-6" />,
      color: "from-green-500 to-blue-600",
      borderColor: "border-green-500/30",
      hoverColor: "hover:border-green-500/60",
      technologies: ["Asyncio", "OOPs", "Pydantic"],
    },
    {
      id: "prompt-engineering",
      title: "Prompt Engineering",
      icon: <FaBrain className="w-6 h-6" />,
      color: "from-pink-500 to-rose-600",
      borderColor: "border-pink-500/30",
      hoverColor: "hover:border-pink-500/60",
      technologies: ["Custom instructions", "Tool-based prompting"],
    },
    {
      id: "web-development",
      title: "Web Development",
      icon: <FaCode className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-600",
      borderColor: "border-blue-500/30",
      hoverColor: "hover:border-blue-500/60",
      technologies: ["HTML", "CSS", "TypeScript", "Python"],
    },
    {
      id: "frontend-frameworks",
      title: "Frontend Frameworks",
      icon: <FaReact className="w-6 h-6" />,
      color: "from-cyan-500 to-teal-600",
      borderColor: "border-cyan-500/30",
      hoverColor: "hover:border-cyan-500/60",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN-UI"],
    },
    {
      id: "ui-ux",
      title: "UI/UX Implementation",
      icon: <FaPalette className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      borderColor: "border-orange-500/30",
      hoverColor: "hover:border-orange-500/60",
      technologies: ["Responsive design", "User flows", "Component libraries"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive expertise across AI development, web technologies, and user experience design
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id)

            return (
              <div
                key={category.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-xl border ${category.borderColor} ${category.hoverColor} transition-all duration-300 transform hover:scale-105 overflow-hidden`}
              >
                {/* Category Header */}
                <div className="p-6 cursor-pointer" onClick={() => toggleCategory(category.id)}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white mr-4`}>
                        {category.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{category.title}</h3>
                    </div>
                    <div className="text-gray-400 hover:text-white transition-colors duration-200">
                      {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>

                  {/* Always visible preview */}
                  <div className="text-sm text-gray-400">{category.technologies.length} technologies</div>
                </div>

                {/* Expandable Technologies List */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-700/50 pt-4">
                      <div className="space-y-2">
                        {category.technologies.map((tech, index) => (
                          <div
                            key={index}
                            className="flex items-center p-2 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm font-medium">{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Technical Expertise</h3>
            <p className="text-gray-400 max-w-4xl mx-auto leading-relaxed mb-6">
              I blend deep expertise in Python, AI agent development, and modern web technologies (Next.js, TypeScript, Tailwind CSS) to create scalable solutions for healthcare and education. My skills power innovative, user-focused applications that solve real-world challenges.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-gray-400 text-sm">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">2</div>
                <div className="text-gray-400 text-sm">Years Learning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
