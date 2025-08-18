"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react"

export function Experience() {
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

  const experiences = [
    {
      title: "Full Stack Development Projects",
      company: "Personal Projects & Learning",
      location: "India",
      period: "2024 - Present",
      icon: Briefcase,
      description: [
        "Building real-world projects and exploring full-stack development",
        "Developing end-to-end applications using the MERN stack",
        "Learning modern web development practices and responsive design",
        "Exploring Progressive Web Applications (PWA) development",
        "Contributing to open-source projects and building GitHub portfolio",
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS"],
      gradient: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-50",
    },
    {
      title: "Computer Science Engineering Student",
      company: "Centurion University of Technology and Management",
      location: "India",
      period: "2024 - 2028 (Expected)",
      icon: GraduationCap,
      description: [
        "Pursuing B.Tech in Computer Science and Engineering",
        "Learning core computer science concepts and programming fundamentals",
        "Participating in coding competitions and technical events",
        "Working on academic projects and assignments",
        "Building a strong foundation in algorithms, data structures, and software engineering",
      ],
      technologies: ["C", "C++", "Python", "Data Structures", "Algorithms", "Software Engineering"],
      gradient: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in slide-in-from-top-8" : "opacity-0"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Experience & Learning Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My journey in computer science and software development, including{" "}
            <span className="text-pink-600 font-semibold">academic pursuits</span> and{" "}
            <span className="text-purple-600 font-semibold">personal projects</span>.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 shadow-lg ${exp.bgColor} group ${
                isVisible ? "animate-in slide-in-from-left-8" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 200}ms` }}
            >
              <CardHeader className="pb-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <exp.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-slate-800 mb-2">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-pink-600 mb-2">
                        {exp.company}
                      </CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 text-sm text-slate-500">
                    <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow-sm">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 px-3 py-2 rounded-lg shadow-sm">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-slate-700 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="bg-white/80 text-slate-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm font-medium px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
