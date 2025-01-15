import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink } from 'lucide-react'

export function ProjectDetail({
  title,
  year,
  description,
  longDescription,
  imageUrl,
  timeline,
  tools = [],
  websiteUrl
}) {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <Link href="/" className="inline-flex items-center text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Link>
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white transition-colors inline-flex items-center"
          >
            Website
            <ExternalLink className="w-4 h-4 ml-2" />
          </a>
        </nav>

        <header className="mb-12">
          <h1 className="text-5xl font-extralight mb-2">{title}</h1>
          <p className="text-xl text-neutral-400">Project, {year}</p>
        </header>

        <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-16 bg-neutral-900">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent pointer-events-none" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-12">
          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-medium mb-4">Timeline</h2>
              <p className="text-neutral-400">{timeline}</p>
            </section>

            <section>
              <h2 className="text-lg font-medium mb-4">Tools</h2>
              <ul className="space-y-2">
                {tools.map((tool) => (
                  <li key={tool} className="text-neutral-400">{tool}</li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-lg font-medium mb-4">Summary</h2>
              <p className="text-neutral-400 mb-8">{description}</p>


              <h2 className="text-lg font-medium mb-4">Overview</h2>
              <div className="text-neutral-400 leading-relaxed">
                <p>{longDescription}</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  )
}