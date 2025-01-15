import Image from "next/image"
import Link from "next/link"

export function ProjectCard({ id, title, year, description, imageUrl }) {
  return (
    <Link href={`/projects/${id}`} className="block">
      <div className="group rounded-lg overflow-hidden bg-black/20 hover:bg-black/30 transition-colors">
        <div className="aspect-[16/9] relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h2 className="text-xl font-extralight text-white">
              {title} — {year}
            </h2>
            <p className="mt-2 text-gray-200 font-extralight">{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}