"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Phone, Sparkles, Code, Rocket, MessageCircle, Camera } from "lucide-react"
import Image from "next/image"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const floatingIcons = [
    { Icon: Code, delay: "0s", duration: "6s" },
    { Icon: Rocket, delay: "2s", duration: "8s" },
    { Icon: Sparkles, delay: "4s", duration: "7s" },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-spin"
          style={{ animationDuration: "20s" }}
        ></div>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className="absolute text-blue-400/30"
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + index * 20}%`,
            animation: `float ${item.duration} ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          <item.Icon className="w-8 h-8" />
        </div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-in fade-in-0 slide-in-from-bottom-4 duration-1000">
          {/* Profile Image with Enhanced Animation */}
          <div className="relative w-40 h-40 mx-auto mb-8 group">
            <div
              className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-full animate-spin"
              style={{ animationDuration: "3s" }}
            ></div>
            <div className="absolute inset-1 bg-white rounded-full"></div>
            <div className="absolute inset-2 rounded-full overflow-hidden">
              <Image
                src="/images/profile-photo.jpg"
                alt="Durgesh Kumar - Computer Science Engineering Student"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-bounce shadow-lg"></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight animate-in slide-in-from-left-8 duration-1000 delay-300">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
                  Durgesh Kumar
                </span>
              </h1>
              <div className="relative">
                <p className="text-xl sm:text-2xl lg:text-3xl text-slate-600 max-w-3xl mx-auto animate-in slide-in-from-right-8 duration-1000 delay-500">
                  Computer Science Engineering Student |{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 font-semibold">
                    Aspiring Full Stack Developer
                  </span>
                </p>
              </div>
            </div>

            <p className="text-lg lg:text-xl text-slate-500 max-w-4xl mx-auto leading-relaxed animate-in fade-in-0 duration-1000 delay-700">
              Passionate about building <span className="text-blue-600 font-semibold">modern web applications</span> and
              solving <span className="text-purple-600 font-semibold">real-world problems</span> with full-stack
              technologies. Currently focused on{" "}
              <span className="text-indigo-600 font-semibold">MERN stack development</span> and creating scalable
              software solutions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-in slide-in-from-bottom-8 duration-1000 delay-1000">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 group"
              asChild
            >
              <a href="#projects">
                <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                View My Work
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group bg-transparent"
              asChild
            >
              <a href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                Get In Touch
              </a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6 animate-in slide-in-from-bottom-8 duration-1000 delay-1200">
            {[
              { href: "https://github.com/Durgeshkr01", icon: Github, color: "hover:text-gray-700 hover:bg-gray-100" },
              {
                href: "https://linkedin.com/in/durgesh-kumar-4709a12a5",
                icon: Linkedin,
                color: "hover:text-blue-600 hover:bg-blue-50",
              },
              { href: "mailto:durgeshraj0852@gmail.com", icon: Mail, color: "hover:text-red-600 hover:bg-red-50" },
              { href: "tel:+919939128165", icon: Phone, color: "hover:text-green-600 hover:bg-green-50" },
              {
                href: "https://wa.me/919939128165",
                icon: MessageCircle,
                color: "hover:text-green-600 hover:bg-green-50",
              },
              {
                href: "https://www.instagram.com/its_dp_10_07?igsh=aWNrNW4xdXY4czVvadd",
                icon: Camera,
                color: "hover:text-pink-600 hover:bg-pink-50",
              },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                asChild
                style={{ animationDelay: `${1400 + index * 100}ms` }}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <social.icon className="h-6 w-6" />
                  <span className="sr-only">{social.icon.name}</span>
                </a>
              </Button>
            ))}
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="h-6 w-6 text-blue-500" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </section>
  )
}
