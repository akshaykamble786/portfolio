import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from "next/link"

export function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      <Link
        href="https://x.com/awkshhay"
        className="text-gray-400 hover:text-gray-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="w-5 h-5" />
        <span className="sr-only">Twitter</span>
      </Link>
      <Link
        href="https://github.com/akshaykamble786"
        className="text-gray-400 hover:text-gray-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-5 h-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/akshay-kamble-26b308255"
        className="text-gray-400 hover:text-gray-300 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin className="w-5 h-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
    </div>
  )
}