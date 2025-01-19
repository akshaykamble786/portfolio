import { SocialLinks } from "@/components/social-links"
import { ProjectCard } from "@/components/project-card"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#111] text-gray-200">
      <div className="container mx-auto px-0 py-12 max-w-7xl">
        <header className="mb-16">
          <h1 className="text-4xl font-serif mb-6">Akshay Kamble</h1>
          <SocialLinks />
          <div className="mt-8 space-y-4 text-gray-300 max-w-3xl">
          <p className="font-light">
              Aspiring web developer based in Mumbai, passionate about the crossroads of web development and AI.
              Currently pursuing a <span className="italic">BScIT in Information Technology</span> at Nirmala Memorial Foundation College.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            id="brainstorm"
            title="Brainstorm"
            year="2024"
            description="AI-powered, collaborative text editor"
            imageUrl="/brainstorm.png"
          />
          <ProjectCard
            id="convora"
            title="Convora"
            year="2025"
            description="AI-based DM automation chatbot"
            imageUrl="/convora.png"
          />
          <ProjectCard
            id="eleqtra"
            title="Eleqtra"
            year="2024"
            description="E-commerce web application"
            imageUrl="/eleqtra.png"
          />
          <ProjectCard
            id="bloggit"
            title="Bloggit"
            year="2024"
            description="Blog application made with Appwrite"
            imageUrl="/bloggit.jpg"
          />
          <ProjectCard
            id="poppop"
            title="PopPop"
            year="2024"
            description="Virtual bubble wrap"
            imageUrl="/poppop.png"
          />
          <ProjectCard
            id="transact"
            title="Transact"
            year="2023"
            description="Simplified, digital payments web application made with Java"
            imageUrl="/transact.png"
          />
        </div>
      </div>
    </div>
  )
}