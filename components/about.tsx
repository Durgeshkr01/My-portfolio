"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Target } from "lucide-react"
import Image from "next/image"

export function About() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const highlights = [
    {
      icon: Code,
      title: "Full Stack Development",
      description: "Building end-to-end applications using MERN stack",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Passionate about solving real-world problems with technology",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      icon: Target,
      title: "Continuous Learning",
      description: "Always exploring new technologies and best practices",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in slide-in-from-top-8" : "opacity-0"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A passionate Computer Science Engineering student with a love for creating{" "}
            <span className="text-blue-600 font-semibold">digital experiences</span> that make a difference.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start mb-16">
          {/* Professional Photo */}
          <div
            className={`transition-all duration-1000 delay-200 ${isVisible ? "animate-in slide-in-from-left-8" : "opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-2 shadow-xl">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Durgesh Kumar - Professional"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-slate-800 mb-1">Professional</h3>
                  <p className="text-sm text-slate-600">Ready for opportunities</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-400 ${isVisible ? "animate-in slide-in-from-bottom-8" : "opacity-0"}`}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-slate-600">
                Hello! I'm <span className="text-blue-600 font-semibold">Durgesh Kumar</span>, a passionate Computer
                Science Engineering student from{" "}
                <span className="text-purple-600 font-semibold">Centurion University of Technology and Management</span>
                . I enjoy building modern web applications and solving real-world problems with full-stack technologies.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                I'm currently focused on developing skills in the{" "}
                <span className="text-indigo-600 font-semibold">MERN stack</span>, mobile app development, and building
                scalable software solutions. My journey in programming started with curiosity, and it has evolved into a
                passion for creating meaningful digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-slate-600">
                When I'm not coding, you can find me exploring new technologies, working on personal projects, or
                learning about the latest trends in web development. I believe in{" "}
                <span className="text-emerald-600 font-semibold">continuous learning</span> and staying updated with the
                ever-evolving tech landscape.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { number: "5+", label: "Projects Built" },
                { number: "2024", label: "Started Coding" },
                { number: "100%", label: "Passion Level" },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/80 rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Creative Photo */}
          <div
            className={`transition-all duration-1000 delay-600 ${isVisible ? "animate-in slide-in-from-right-8" : "opacity-0"}`}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-2 shadow-xl">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/creative-photo.jpg"
                    alt="Durgesh Kumar - Creative Side"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-white mb-1">Creative</h3>
                  <p className="text-sm text-slate-300">Always thinking ahead</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Cards */}
        <div
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 delay-800 ${isVisible ? "animate-in slide-in-from-bottom-8" : "opacity-0"}`}
        >
          {highlights.map((item, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg ${item.bgColor} group`}
              style={{ animationDelay: `${900 + index * 200}ms` }}
            >
              <CardContent className="flex flex-col items-center text-center space-y-4 p-8">
                <div className="flex-shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-slate-800">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
