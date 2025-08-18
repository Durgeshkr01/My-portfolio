import { Github, Linkedin, Mail, Phone, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-pink-900 to-purple-900 py-12 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-400/10 to-pink-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex space-x-6">
            {[
              {
                href: "https://github.com/KhushiSingh001",
                icon: Github,
                color: "hover:text-gray-300 hover:bg-gray-800/50",
              },
              {
                href: "http://linkedin.com/in/khushi-singh-24882137a",
                icon: Linkedin,
                color: "hover:text-blue-400 hover:bg-blue-900/50",
              },
              {
                href: "mailto:khushisingh993148@gmail.com",
                icon: Mail,
                color: "hover:text-red-400 hover:bg-red-900/50",
              },
              { href: "tel:+917070221030", icon: Phone, color: "hover:text-green-400 hover:bg-green-900/50" },
            ].map((social, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className={`text-white/80 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl ${social.color}`}
                asChild
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

          <div className="text-center space-y-4">
            <p className="text-white/80 text-lg">© {new Date().getFullYear()} Khushi Singh. All rights reserved.</p>
            <p className="text-white/60 text-sm flex items-center justify-center gap-2">
              Built with Next.js, Tailwind CSS, and lots of <Heart className="h-4 w-4 text-red-400 animate-pulse" />
            </p>
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <span>Made in India</span>
              <span className="text-orange-400">🇮🇳</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
