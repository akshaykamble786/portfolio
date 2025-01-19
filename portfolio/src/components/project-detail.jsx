import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Monitor, Users, Bot, Blocks, WandSparkles, SpeakerIcon, TowerControlIcon, Settings, GitGraphIcon, MessageCircle, ShoppingBagIcon, Grid, CreditCard, Package2Icon, Smartphone, LayoutDashboardIcon, Pencil, ImageIcon, TagIcon, LockIcon, MessageCircleIcon, PenTool, ChartArea, Palette, Shield, HistoryIcon } from 'lucide-react'

const iconMap = {
  blocks: Blocks,
  wand: WandSparkles,
  users: Users,
  bot: Bot,
  speechBubble: SpeakerIcon,
  integration: TowerControlIcon, 
  settings: Settings,
  analytics: GitGraphIcon,
  chat: MessageCircle,
  shoppingBag: ShoppingBagIcon,
  grid: Grid,
  creditCard: CreditCard,
  package: Package2Icon,
  mobile: Smartphone,
  dashboard: LayoutDashboardIcon,
  pencil: Pencil,
  image: ImageIcon,
  tag: TagIcon,
  userLock: LockIcon,
  comment: MessageCircleIcon,
  responsive: PenTool,
  bubbleChart: ChartArea,
  palette: Palette,
  cube: Blocks,
  shield: Shield,
  history: HistoryIcon,
}

function FeatureCard({ title, description, icon }) {
  const Icon = iconMap[icon]
  return (
    <div className="p-6 bg-neutral-900/50 rounded-lg">
      <Icon className="w-6 h-6 mb-4 text-neutral-400" />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function ProjectDetail({
  title,
  year,
  description,
  longDescription,
  imageUrl,
  timeline,
  tools = [],
  websiteUrl,
  features = []
}) {
  return (
    <div className="min-h-screen bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <Link
            href="/"
            className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
          >
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

        <header className="mb-6 text-left">
          <h1 className="text-5xl font-extralight mb-2">{title}</h1>
          <p className="text-xl text-neutral-400">{year}</p>
        </header>

        <div className="aspect-[16/9] relative overflow-hidden rounded-lg mb-16 bg-neutral-900">
          <Image
            src={imageUrl || "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%20(185)-Dd1rsPxKEwXydHB3zcGcpVvvtlpEjc.png"}
            alt={title}
            fill
            className="object-scale-down"
          />
          <div className="absolute inset-0 pointer-events-none" />
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
                  <li key={tool} className="text-neutral-400">
                    {tool}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-12">
            <section>
              <h2 className="text-lg font-medium mb-4">Summary</h2>
              <p className="text-neutral-400 mb-8">{description}</p>

              <h2 className="text-lg font-medium mb-4">Overview</h2>
              <div className="text-neutral-400 leading-relaxed mb-8">
                <p>{longDescription}</p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12">
          <section>
            <h2 className="text-lg font-medium mb-6">Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}