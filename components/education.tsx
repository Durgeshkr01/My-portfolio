"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, GraduationCap, BookOpen, Award } from "lucide-react"

export function Education() {
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

  return (
    <section
      ref={sectionRef}
      id="education"
      className="py-20 bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in slide-in-from-top-8" : "opacity-0"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            My academic background and <span className="text-blue-600 font-semibold">educational journey</span> in
            computer science.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card
            className={`hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-50 group ${
              isVisible ? "animate-in slide-in-from-bottom-8" : "opacity-0"
            }`}
          >
            <CardHeader className="pb-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <CardTitle className="text-3xl mb-3 text-slate-800">
                    Bachelor of Technology (B.Tech) in Computer Science and Engineering
                  </CardTitle>
                  <CardDescription className="text-xl font-semibold text-blue-600 mb-6">
                    Centurion University of Technology and Management
                  </CardDescription>
                  <div className="flex flex-col sm:flex-row gap-4 text-sm">
                    <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span className="font-medium text-slate-700">Expected Graduation: 2027</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg shadow-sm">
                      <MapPin className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-slate-700">India</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <BookOpen className="h-6 w-6 text-blue-500" />
                    <h4 className="font-bold text-xl text-slate-800">Key Coursework & Learning Areas</h4>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Data Structures and Algorithms",
                      "Object-Oriented Programming",
                      "Database Management Systems",
                      "Software Engineering",
                      "Web Development Technologies",
                      "Computer Networks",
                    ].map((course, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-slate-700 font-medium">{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="h-6 w-6 text-purple-500" />
                    <h4 className="font-bold text-xl text-slate-800">Academic Focus</h4>
                  </div>
                  <div className="bg-white/80 p-6 rounded-2xl shadow-sm">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Currently pursuing a comprehensive education in computer science with a focus on{" "}
                      <span className="text-blue-600 font-semibold">practical application</span> of theoretical
                      concepts.
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      Actively engaged in building{" "}
                      <span className="text-purple-600 font-semibold">real-world projects</span> alongside academic
                      coursework to bridge the gap between theory and practice.
                    </p>
                  </div>

                  {/* Progress Indicator */}
                  <div className="bg-white/80 p-6 rounded-2xl shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">Academic Progress</span>
                      <span className="text-sm font-bold text-blue-600">Year 2 of 4</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-3">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full w-1/2 shadow-sm"></div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
