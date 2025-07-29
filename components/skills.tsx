"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Skills() {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["C", "C++", "JavaScript", "Python"],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "React.js", "Next.js"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      title: "Database & Storage",
      skills: ["MongoDB", "Firebase"],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "Postman", "VS Code", "PWA", "Responsive UI"],
      color: "from-purple-500 to-indigo-500",
      bgColor: "bg-purple-50",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in slide-in-from-top-8" : "opacity-0"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Here are the technologies and tools I work with to bring{" "}
            <span className="text-blue-600 font-semibold">ideas to life</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg ${category.bgColor} group ${
                isVisible ? "animate-in slide-in-from-bottom-8" : "opacity-0"
              }`}
              style={{ animationDelay: `${300 + index * 150}ms` }}
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-6 h-6 bg-white rounded-md"></div>
                </div>
                <CardTitle className="text-xl text-slate-800">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-white/80 text-slate-700 hover:bg-white hover:scale-105 transition-all duration-300 shadow-sm font-medium px-3 py-1"
                      style={{ animationDelay: `${500 + index * 150 + skillIndex * 50}ms` }}
                    >
                      {skill}
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
