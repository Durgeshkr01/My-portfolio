"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageCircle, Camera } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "durgeshraj0852@gmail.com",
      href: "mailto:durgeshraj0852@gmail.com",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 99391 28165",
      href: "tel:+919939128165",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+91 99391 28165",
      href: "https://wa.me/919939128165",
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Camera,
      title: "Instagram",
      value: "@its_dp_10_07",
      href: "https://www.instagram.com/its_dp_10_07?igsh=aWNrNW4xdXY4czVvadd",
      color: "from-pink-500 to-purple-500",
      bgColor: "bg-pink-50",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "#",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/Durgeshkr01",
      href: "https://github.com/Durgeshkr01",
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/durgesh-kumar-4709a12a5",
      href: "https://linkedin.com/in/durgesh-kumar-4709a12a5",
      color: "from-blue-600 to-blue-800",
      bgColor: "bg-blue-50",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-in slide-in-from-top-8" : "opacity-0"}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing <span className="text-blue-600 font-semibold">new opportunities</span>,{" "}
            <span className="text-purple-600 font-semibold">internships</span>, and interesting projects. Let's connect
            and create something amazing together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${isVisible ? "animate-in slide-in-from-left-8" : "opacity-0"}`}
          >
            <div className="bg-white/80 p-8 rounded-3xl shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-8 w-8 text-blue-500" />
                <h3 className="text-3xl font-bold text-slate-800">Let's Connect</h3>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Whether you have an <span className="text-blue-600 font-semibold">internship opportunity</span>, a{" "}
                <span className="text-purple-600 font-semibold">project collaboration</span> in mind, or just want to
                chat about technology and development, I'd love to hear from you.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                I'm actively seeking opportunities to grow and contribute to meaningful projects that make a difference.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Card
                  key={index}
                  className={`hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg ${item.bgColor} group`}
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  <CardContent className="flex items-center space-x-4 p-6">
                    <div className="flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-slate-800 mb-1">{item.title}</p>
                      <a
                        href={item.href}
                        className="text-slate-600 hover:text-blue-600 transition-colors break-all text-sm"
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      >
                        {item.value}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card
            className={`border-0 shadow-2xl bg-white/90 backdrop-blur-sm transition-all duration-1000 delay-500 ${isVisible ? "animate-in slide-in-from-right-8" : "opacity-0"}`}
          >
            <CardHeader className="pb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl text-slate-800">Send me a message</CardTitle>
                  <CardDescription className="text-slate-600">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-slate-700 font-medium">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-slate-700 font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700 font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="border-slate-200 focus:border-blue-500 focus:ring-blue-500 transition-colors duration-300 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
