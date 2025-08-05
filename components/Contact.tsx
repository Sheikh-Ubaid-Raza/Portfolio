"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import {
  FaPhone,
  FaSms,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaPaperPlane,
} from "react-icons/fa"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      label: "Phone",
      value: "+923410258688",
      href: "tel:+923410258688",
      color: "text-green-400",
    },
    {
      icon: <FaSms className="w-6 h-6" />,
      label: "SMS",
      value: "Text Me",
      href: "sms:+923410258688",
      color: "text-blue-400",
    },
    {
      icon: <FaWhatsapp className="w-6 h-6" />,
      label: "WhatsApp",
      value: "Chat on WhatsApp",
      href: "https://wa.me/+923410258688",
      color: "text-green-500",
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      label: "Email",
      value: "sheikhubaidkamal@gmail.com",
      href: "mailto:sheikhubaidkamal@gmail.com",
      color: "text-purple-400",
    },
  ]

  const socialLinks = [
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ubaid-raza-8764332b9?trk=contact-info",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaGithub className="w-6 h-6" />,
      label: "GitHub",
      href: "https://github.com/Sheikh-Ubaid-Raza",
      color: "hover:text-gray-300",
    },
    {
      icon: <FaFacebook className="w-6 h-6" />,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61573061169436",
      color: "hover:text-blue-600",
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      label: "YouTube",
      href: "https://youtube.com/@ubaidlearninghub?si=A7FO9l-iidLLZ-6d",
      color: "hover:text-red-500",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to collaborate on your next AI project? Lets discuss how we can work together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <FaEnvelope className="mr-3 text-purple-400" />
                Contact Methods
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => (
                  <Link
                    key={index}
                    href={method.href}
                    target="blank"
                    className="flex items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className={`${method.color} mr-4 group-hover:scale-110 transition-transform duration-200`}>
                      {method.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-sm">{method.label}</h4>
                      <p className="text-gray-400 text-xs">{method.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Connect With Me Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-all duration-300 transform hover:scale-105 text-gray-400 ${social.color} group`}
                  >
                    <div className="mb-2 group-hover:scale-110 transition-transform duration-200">{social.icon}</div>
                    <span className="text-xs font-medium">{social.label}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <p className="text-gray-400 text-sm text-center">
                  Follow me for the latest updates on AI development and tech insights
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <FaPaperPlane className="mr-3 text-purple-400" />
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all duration-200 resize-none"
                  placeholder="Tell me about your project, ideas, or how we can collaborate..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-sm font-medium">
                    ✅ Message sent successfully! I will get back to you soon.
                  </p>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-sm font-medium">
                    ❌ Failed to send message. Please try again or contact me directly.
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-8 border border-slate-700/30 text-center">
          <h4 className="text-xl font-bold text-white mb-4">Lets Create Something Extraordinary</h4>
          <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
            Ready to bring your tech vision to life? I specialize in AI agent development, web applications, and strategic tech consulting. <span className="font-bold">Reach out</span> to discuss your project. I typically respond within 24 hours.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-md text-gray-500">
            <span>🌍 Available Worldwide</span>
            <span>⚡ Fast Response Time</span>
            <span>🤝 Collaborative mindset</span>
            <span>💡 Innovative Solutions</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-slate-700/50 text-center">
          <p className="text-gray-400">© 2025 Ubaid Raza. Crafted with Next.js, TypeScript, and Tailwind CSS</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
