"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star } from "lucide-react"
import Image from "next/image"

export function Projects() {
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

  const projects = [
    {
      title: "Ghar Ka Khana",
      description:
        "A full-stack food delivery platform built with MERN stack featuring user authentication, order management, and real-time updates.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Durgeshkr01",
      featured: true,
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Typing Speed Tester",
      description:
        "A level-based typing test application with PWA integration, featuring different difficulty levels and performance tracking.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["JavaScript", "HTML5", "CSS3", "PWA", "Local Storage"],
      liveUrl: "#",
      githubUrl: "https://github.com/Durgeshkr01",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      title: "Weather App Interface",
      description:
        "A responsive React application that displays live weather information using external weather APIs with a clean, modern interface.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React.js", "Weather API", "CSS3", "Responsive Design"],
      liveUrl: "#",
      githubUrl: "https://github.com/Durgeshkr01",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio website showcasing projects, skills, and contact information with modern design and smooth animations.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Tailwind CSS", "React.js", "Responsive UI"],
      liveUrl: "#",
      githubUrl: "https://github.com/Durgeshkr01",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "Media Integration Page",
      description:
        "An interactive media-rich web page designed for demos, featuring multimedia content integration and responsive design.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["HTML5", "CSS3", "JavaScript", "Media APIs"],
      liveUrl: "#",
      githubUrl: "https://github.com/Durgeshkr01",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in slide-in-from-top-8" : "opacity-0"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and{" "}
            <span className="text-blue-600 font-semibold">learning journey</span> in full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg bg-white group ${
                isVisible ? "animate-in slide-in-from-bottom-8" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}></div>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 shadow-lg">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
              </div>
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-slate-600 leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="bg-slate-50 text-slate-700 border-slate-200 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-all duration-300 font-medium"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0 flex-1`}
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-slate-50 hover:scale-105 transition-all duration-300 border-slate-200 text-slate-700 hover:text-slate-900 bg-transparent"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
