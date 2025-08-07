"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-slate-900/20"></div>
        <div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{
            left: mousePosition.x / 10,
            top: mousePosition.y / 10,
            transform: "translate(-50%, -50%)",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight mt-52 lg:mt-4">
              Hi, I am{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Ubaid Raza
              </span>
            </h1>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-8"><span className="animate-pulse ml-1">Web & AI Agent Developer</span></h2>

            <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Designing intelligent AI agents and seamless web applications. Innovating at the intersection of artificial intelligence and modern web technologies.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => {
                  const link = document.createElement("a")
                  link.href = "/ubaid-resume.pdf"
                  link.download = "Ubaid_Raza_Resume.pdf"
                  link.click()
                }}
                className="px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400 hover:text-white transform hover:scale-105 transition-all duration-300"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-shrink-0 animate-fade-in-up sm:pt-14" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl shadow-purple-500/20 border-4 border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 transform hover:scale-105">
                <Image
                  src="/profile.png"
                  alt="Ubaid Raza - AI Agent Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse"></div>
              <div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero