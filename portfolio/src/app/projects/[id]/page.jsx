import { ProjectDetail } from "@/components/project-detail"

const projects = {
  brainstorm: {
    id: "brainstorm",
    title: "Brainstorm",
    year: "2024",
    description: "AI-powered, collaborative text editor",
    imageUrl: "https://sjc.microlink.io/68usMBh-K0aMzOxqnKSZLNDENtGa3WX2vHtMQAy3AsPFTToutcSpbnxRMH3Ivln6sPhXVUoe61lpSseMhlOOXQ.jpeg",
    longDescription: "Brainstorm is an innovative AI-powered collaborative text editor designed to enhance creativity and productivity. It leverages advanced language models to provide real-time suggestions, autocompletions, and idea generation as users type. The platform supports multiple users working on the same document simultaneously, with features like real-time cursors, comments, and version history.",
    websiteUrl: "https://brainnstorm.vercel.app",
    tools : ["Javascript","Next.js","Firebase","Liveblocks","TipTap","Stripe"],
    timeline : "5 Months, October 2024 -- February 2025"
  },
  convora: {
    id: "convora",
    title: "Convora",
    year: "2025",
    description: "AI-powered automation chatbot",
    imageUrl: "https://sjc.microlink.io/68usMBh-K0aMzOxqnKSZLNDENtGa3WX2vHtMQAy3AsPFTToutcSpbnxRMH3Ivln6sPhXVUoe61lpSseMhlOOXQ.jpeg",
    longDescription: "Convora is a cutting-edge AI-powered automation chatbot platform that revolutionizes customer service and business processes. It uses natural language processing and machine learning algorithms to understand and respond to user queries, automate repetitive tasks, and integrate with various business systems. Convora can be customized for different industries and use cases, making it a versatile solution for businesses of all sizes.",
    websiteUrl: "https://convora-demo.vercel.app",
    tools : ["TypeScript","Next.js","Neon DB","Prisma","Instagram API"],
    timeline : "2 Months, February 2025 -- March 2025"
  },
  eleqtra: {
    id: "eleqtra",
    title: "Eleqtra",
    year: "2024",
    description: "E-commerce web application",
    imageUrl: "https://sjc.microlink.io/68usMBh-K0aMzOxqnKSZLNDENtGa3WX2vHtMQAy3AsPFTToutcSpbnxRMH3Ivln6sPhXVUoe61lpSseMhlOOXQ.jpeg",
    longDescription: "Eleqtra is a cutting-edge AI-powered automation chatbot platform that revolutionizes customer service and business processes. It uses natural language processing and machine learning algorithms to understand and respond to user queries, automate repetitive tasks, and integrate with various business systems. Eleqtra can be customized for different industries and use cases, making it a versatile solution for businesses of all sizes.",
    websiteUrl: "https://eleqtra.vercel.app",
    tools : ["Javascript","React","Tailwind"],
    timeline : "2 Months, August 2024 -- September 2024"
  },
  bloggit: {
    id: "bloggit",
    title: "Bloggit",
    year: "2024",
    description: "Blog application made with Appwrite",
    imageUrl: "https://sjc.microlink.io/68usMBh-K0aMzOxqnKSZLNDENtGa3WX2vHtMQAy3AsPFTToutcSpbnxRMH3Ivln6sPhXVUoe61lpSseMhlOOXQ.jpeg",
    longDescription: "Bloggit is a modern, user-friendly blogging platform built using Appwrite as its backend. It offers a seamless writing experience with features like rich text editing, image uploads, tags, and categories. The application also includes user authentication, comments, and a responsive design for optimal viewing on all devices. Bloggit demonstrates the power and flexibility of Appwrite for creating full-featured web applications.",
    websiteUrl: "https://bloggit-demo.vercel.app",
     tools : ["Javascript","React","Appwrite"],
    timeline : "1 Month, May 2024"
  },
  poppit: {
    id: "poppit",
    title: "Poppit",
    year: "2024",
    description: "Virtual 3D bubble wrap",
    imageUrl: "https://sjc.microlink.io/68usMBh-K0aMzOxqnKSZLNDENtGa3WX2vHtMQAy3AsPFTToutcSpbnxRMH3Ivln6sPhXVUoe61lpSseMhlOOXQ.jpeg",
    longDescription: "Poppit is a fun and addictive virtual bubble wrap simulator designed to provide stress relief and entertainment. Users can pop endless sheets of virtual bubble wrap with satisfying sound effects and visual feedback. The app includes various bubble sizes, colors, and popping modes, as well as challenges and achievements to keep users engaged. Poppit is a lightweight, browser-based application that works across desktop and mobile devices.",
    websiteUrl: "https://poppitt.vercel.app",
     tools : ["Javascript","Three.js"],
    timeline : "1 Month, September 2024"
  },
  transact: {
    id: "transact",
    title: "Transact",
    year: "2023",
    description: "Digital payments web application made with Java",
    imageUrl: "https://sjc.microlink.io/68usMBh-K0aMzOxqnKSZLNDENtGa3WX2vHtMQAy3AsPFTToutcSpbnxRMH3Ivln6sPhXVUoe61lpSseMhlOOXQ.jpeg",
    longDescription: "Transact is a secure and efficient digital payments web application built with Java. It simplifies online transactions by providing a user-friendly interface for sending and receiving money, managing multiple accounts, and tracking expenses. The application implements robust security measures to protect user data and financial information. Transact also includes features like recurring payments, bill splitting, and integration with popular banks and payment systems.",
    websiteUrl: "https://transact-demo.vercel.app",
     tools : ["Java","Java Swing"],
    timeline : "2 Months, October 2023 -- November 2023"
  }
}

export default function ProjectPage({ params }) {
  const project = projects[params.id]

  if (!project) {
    return <div>Project not found</div>
  }

  return <ProjectDetail {...project} />
}