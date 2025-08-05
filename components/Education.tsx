const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Nursing (BSN)",
      institution: "LUMHS University",
      year: "Present",
      status: "Currently Pursuing",
      description:
        "Advancing my healthcare expertise while integrating technology solutions for modern medical practices. Focusing on the intersection of nursing science and digital health innovations.",
      highlights: [
        "Clinical Practice & Patient Care",
        "Healthcare Technology Integration",
        "Medical Ethics & Professional Standards",
      ],
      color: "from-green-400 to-emerald-500",
    },
    {
      degree: "3-Year Diploma in Mechanical Engineering",
      institution: "Al Jadoon Institute of Technical College",
      year: "2023 - 2025",
      status: "Completed",
      description:
        "Built a strong foundation in engineering principles, problem-solving methodologies, and technical design thinking that now enhances my approach to software architecture and system design.",
      highlights: ["Engineering Design & Analysis", "Technical Problem Solving", "Project Management & Documentation"],
      color: "from-blue-400 to-cyan-500",
    },
    {
      degree: "Intermediate (Pre-Medical)",
      institution: "G.D.B.C KorangiI No 2- 1/2 , Karachi",
      year: "2023 - 2024",
      status: "B Grade",
      description:
        "Focused on biological sciences and medical foundations, developing analytical thinking and scientific methodology that supports my current work in healthcare AI solutions.",
      highlights: ["Biology & Life Sciences", "Chemistry & Biochemistry", "Physics & Mathematics"],
      color: "from-purple-400 to-pink-500",
    },
    {
      degree: "Matriculation (Biology)",
      institution: "Scholar Schooling System",
      year: "2021 - 2022",
      status: "A+ Grade",
      description:
        "Achieved excellence in biological sciences, establishing the academic foundation that sparked my interest in healthcare technology and medical innovation.",
      highlights: ["Academic Excellence", "Scientific Foundation", "Leadership & Extracurriculars"],
      color: "from-orange-400 to-red-500",
    },
  ]

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-purple-400">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A unique educational journey spanning healthcare, engineering, and technology
          </p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0 flex-1">
                  <div className="flex items-center mb-3">
                    <h3 className="text-2xl font-bold text-white mr-4">{edu.degree}</h3>
                    <span
                      className={`px-3 py-1 bg-gradient-to-r ${edu.color} text-white text-sm font-semibold rounded-full`}
                    >
                      {edu.status}
                    </span>
                  </div>
                  <h4 className="text-lg text-purple-400 font-semibold mb-3">{edu.institution}</h4>
                  <p className="text-gray-400 leading-relaxed">{edu.description}</p>
                </div>
                <div className="lg:text-right lg:ml-8">
                  <span className="inline-block px-4 py-2 bg-slate-700/50 text-gray-300 rounded-full text-sm font-semibold border border-slate-600/50">
                    {edu.year}
                  </span>
                </div>
              </div>

              <div className="border-t border-slate-700/50 pt-6">
                <h5 className="text-white font-semibold mb-4 flex items-center">
                  <span className="text-purple-400 mr-2">📚</span>
                  Key Learning Areas:
                </h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {edu.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center p-3 bg-slate-700/30 rounded-lg">
                      <span className="text-purple-400 mr-3">✓</span>
                      <span className="text-gray-300 text-sm font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Educational Philosophy */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Interdisciplinary Expertise</h3>
            <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
              My education in healthcare, engineering, and technology equips me to tackle complex challenges at their intersection. This diverse foundation drives my ability to design innovative, practical solutions for real-world problems in healthcare and education.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
