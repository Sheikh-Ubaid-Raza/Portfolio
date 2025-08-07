"use client"

import { motion } from "framer-motion"
import { Code, Lightbulb, Target, Zap } from "lucide-react"

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean Code Advocate",
      description: "I believe in writing code that is not just functional, but elegant and maintainable.",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solver",
      description: "I love tackling complex challenges and finding innovative solutions to real-world problems.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "Every project I work on has a clear purpose and measurable impact on users and businesses.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Technology evolves rapidly, and I am always eager to learn and adapt to new tools and frameworks.",
    },
  ]

  return (
    <>
      <style jsx>{`
        section#about {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        .max-w-7xl {
          width: 100%;
          max-width: 100vw;
          overflow-x: hidden;
        }
        .grid {
          width: 100%;
          max-width: 100vw;
        }
        .motion-div {
          will-change: transform, opacity;
          contain: layout;
        }
        @media (max-width: 640px) {
          .motion-div {
            transform: none !important; /* Prevent excessive x-movement on mobile */
          }
          .hover\:scale-102 {
            transform: none !important; /* Disable hover scale on mobile */
          }
        }
      `}</style>
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">About <span className="text-purple-400">Me</span></h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 96 }} // 96 = w-24
              transition={{ duration: 0.6, ease: "easeInOut" }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Side - Personal Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }} // Reduced x-movement
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 motion-div"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    I am <span className="text-purple-400 font-semibold">Ubaid Raza</span>, a Web and AI Agent Developer with a
                    unique dual background in healthcare and technology. For the past two years, I have been deeply focused
                    on mastering computer science fundamentals while building practical expertise in modern web
                    development and artificial intelligence.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                    What sets me apart is my passion for merging healthcare and technology domains to create innovative,
                    purpose-driven solutions. Currently pursuing a BSN while developing expertise in the OpenAI Agents SDK
                    and Model Context Protocol, I am positioned at the intersection of medical science and cutting-edge AI
                    technology.
                  </p>

                  <p className="text-gray-300 leading-relaxed text-lg">
                    My vision is to develop AI agents for healthcare monitoring, ICU support, and clinical education,
                    while building adaptive learning platforms and sophisticated front-end interfaces using Next.js. I am
                    actively working on projects and startup ideas that bridge the gap between healthcare, education, and
                    agentic AI systems—creating solutions that make a real difference in people lives.
                  </p>
                </div>

                {/* Personal Stats */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400 mb-1">2+</div>
                      <div className="text-gray-400 text-sm">Years Learning</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400 mb-1">15+</div>
                      <div className="text-gray-400 text-sm">Projects Built</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">Healthcare</div>
                      <div className="text-gray-400 text-sm">+ Technology</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-400 mb-1">AI</div>
                      <div className="text-gray-400 text-sm">Specialist</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - What Drives Me */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} // Reduced x-movement
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 motion-div"
            >
              <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">What Drives Me</h3>

              <div className="space-y-6">
                {highlights.map((highlight, index) => (
                  <motion.div
                    key={highlight.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 5 }} // Reduced x-movement on hover
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-all duration-300 cursor-pointer group motion-div"
                  >
                    <div className="flex-shrink-0 p-3 bg-purple-500/20 rounded-lg text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">{highlight.title}</h4>
                      <p className="text-gray-300 leading-relaxed">{highlight.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About