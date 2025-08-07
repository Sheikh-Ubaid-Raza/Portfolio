const Experience = () => {
  const experiences = [
    {
      title: "Computer Science Trainee",
      company: "Self-Directed Learning",
      period: "2023 - Present",
      type: "Learning & Development",
      description:
        "Intensive focus on advancing technical capabilities in AI agent development, modern web technologies, and healthcare technology integration. Currently mastering Model Context Protocol (MCP) for next-generation AI systems.",
      achievements: [
        "Built multiple AI agents using OpenAI Agents SDK for healthcare applications",
        "Developed full-stack web applications with Next.js and TypeScript",
        "Completed 20+ coding projects and technical assignments",
        "Mastered prompt engineering techniques for specialized AI applications",
      ],
      skills: ["OpenAI Agents SDK", "Model Context Protocol", "Next.js", "Python"],
      color: "from-purple-500 to-blue-500",
    },
    {
      title: "Freelance Web Developer",
      company: "Various Clients",
      period: "2024 - Present",
      type: "Freelance Service",
      description:
        "Delivering custom web development solutions for local and remote clients, focusing on responsive design, user experience, and modern web technologies.",
      achievements: [
        "Successfully completed 5+ client projects with 100% satisfaction rate",
        "Implemented modern UI/UX designs using Tailwind CSS and Shadcn UI",
        "Delivered projects on time and within budget constraints",
      ],
      skills: ["Next.js", "Tailwind CSS", "TypeScript", "Python"],
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mathematics Instructor",
      company: "NC Schooling System",
      period: "2024 - 2025",
      type: "Teaching",
      description:
        "Taught mathematics at the school level, developing strong communication skills and the ability to break down complex concepts into understandable components. This experience enhanced my problem-solving approach and technical documentation skills.",
      achievements: [
        "Improved student performance by 40% through innovative teaching methods",
        "Mentored students in analytical thinking and logical reasoning",
        "Created assessment systems that tracked individual learning progress",
      ],
      skills: ["Teaching", "Communication", "Problem Solving", "Educational Technology"],
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Two years of focused development, practical application, and continuous learning in technology and education
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12 last:mb-0">
              {/* Timeline dot */}
              <div className="hidden md:block absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full border-4 border-slate-900 z-10"></div>

              {/* Content */}
              <div className="ml-5 md:ml-20">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="mb-4 sm:mb-0 flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold text-white mr-3">{exp.title}</h3>
                        <span
                          className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-white text-xs font-semibold rounded-full`}
                        >
                          {exp.type}
                        </span>
                      </div>
                      <h4 className="text-gray-300 font-medium text-lg">{exp.company}</h4>
                    </div>
                    <span className="text-purple-400 font-semibold text-sm bg-slate-700/50 px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6 leading-relaxed">{exp.description}</p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <span className="text-green-400 mr-2">🎯</span>
                      Key Achievements:
                    </h5>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start">
                          <span className="text-purple-400 mr-3 mt-1 text-sm">▸</span>
                          <span className="text-gray-300 text-sm leading-relaxed">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div>
                    <h5 className="text-white font-semibold mb-3 flex items-center">
                      <span className="text-blue-400 mr-2">🛠️</span>
                      Technologies & Skills:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-slate-700/50 text-purple-300 text-xs rounded-full border border-slate-600/50 hover:border-purple-500/50 transition-colors duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Summary */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Early Career Highlight</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As an emerging tech professional, I bring a dynamic blend of hands-on project experience, teaching expertise, and a healthcare background to develop AI-driven solutions. My work focuses on tackling real-world challenges in healthcare and education through innovative, user-centered technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
