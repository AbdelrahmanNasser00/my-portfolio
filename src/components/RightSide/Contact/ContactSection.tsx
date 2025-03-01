import { Mail, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section className="w-full max-w-[800px] mx-auto px-4 py-16">
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#e790c9]">Contact</h2>
          <p className="text-muted-foreground">Feel free to reach out to me through any of these channels</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mb-8">
          <a
            href="mailto:your.email@example.com"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#e790c9] transition-colors"
          >
            <Mail size={20} />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/yourusername"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#e790c9] transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="flex items-center gap-2 text-muted-foreground hover:text-[#e790c9] transition-colors"
          >
            <Linkedin size={20} />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Contact Form */}
        <div className="space-y-4 bg-[#1a1a1a] p-6 rounded-lg border border-[#333]">
          <div className="space-y-2">
            <Input type="text" placeholder="Your name" className="bg-[#242424] border-[#333] focus:border-[#e790c9]" />
          </div>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Your email"
              className="bg-[#242424] border-[#333] focus:border-[#e790c9]"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              placeholder="Your message"
              className="min-h-[120px] bg-[#242424] border-[#333] focus:border-[#e790c9]"
            />
          </div>
          <Button className="w-full bg-[#e790c9] hover:bg-[#d580b9] text-white">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </div>
      </div>
    </section>
  )
}

