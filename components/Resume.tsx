"use client"
import { FaDownload } from "react-icons/fa"

const Resume = () => {
  const handleDownload = () => {
    // In a real application, this would download the actual PDF
    const link = document.createElement("a")
    link.href = "/placeholder.pdf" // Replace with actual resume PDF path
    link.download = "Ubaid_Raza_Resume.pdf"
    link.click()
  }

  return (
    <section id="resume" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Download My <span className="text-purple-400">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Get a comprehensive overview of my skills, experience, and achievements
          </p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl mx-auto mb-6 flex items-center justify-center">
              <FaDownload className="w-12 h-12 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-white mb-4">Professional Resume</h3>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Complete details about my professional journey, technical skills, projects, and educational background.
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            <FaDownload className="w-5 h-5 mr-2" />
            Download Resume (PDF)
          </button>

          <div className="mt-8 text-sm text-gray-500">Last updated: January 2025 • File size: 2.3 MB</div>
        </div>
      </div>
    </section>
  )
}

export default Resume
