import { ProjectDetail } from "@/components/project-detail"

const projects = {
  brainstorm: {
    id: "brainstorm",
    title: "Brainstorm",
    year: "2024",
    description: "AI-powered, collaborative workspace",
    imageUrl: "/brainstorm.png",
    longDescription: "Brainstorm is an innovative AI-powered collaborative workspace designed to enhance creativity and productivity. It leverages advanced language models to provide real-time suggestions, autocompletions, document creation and idea generation as users type. The platform supports multiple users working on the same document simultaneously, with features like real-time cursors, comments, and version history.",
    websiteUrl: "https://brainnstorm.vercel.app",
    tools : ["Javascript","Next.js","Firebase","Liveblocks","TipTap","Stripe"],
    timeline : "5 Months, October 2024 -- February 2025",
    features : [
      {
        title: "Templates",
        description: "Pre-designed layouts and components that facilitate quick and consistent creation of documents",
        icon: "blocks"
      },
      {
        title: "AI inline assistant",
        description: "Integrated AI-powered tool that provides real-time suggestions and assistance inline.",
        icon: "wand"
      },
      {
        title: "Version Control",
        description: "History of document revisions, enabling users to track changes or revert to previous versions",
        icon: "history"
      },
      {
        title: "Collaboration",
        description: "Real-time collaboration with other developers in the same workspace.",
        icon: "users"
      },
      {
        title: "AI workspace assistant",
        description: "intelligent AI assistant that helps you stay organized and productive.",
        icon: "wand"
      },
      {
        title: "Automations and Integrations",
        description: "Streamline workflows with automated processes and seamless integrations with popular tools.",
        icon: "bot"
      }
    ]
  },
  convora: {
    id: "convora",
    title: "Convora",
    year: "2025",
    description: "AI-powered DM automation chatbot",
    imageUrl: "/convora.png",
    longDescription: "Convora is a cutting-edge AI-powered DM automation chatbot platform that expands upon customer service and business processes. It uses natural language processing and machine learning algorithms to understand and respond to user queries, automate repetitive tasks, and integrate with various business systems. Convora can be customized for different industries and use cases, making it a versatile solution for businesses of all sizes.",
    websiteUrl: "https://convora-demo.vercel.app",
    tools: ["TypeScript", "Next.js", "Neon DB", "Prisma", "Instagram API"],
    timeline: "2 Months, February 2025 -- March 2025",
    features: [
      {
        title: "Natural Language Processing",
        description: "Uses advanced NLP to understand and respond to customer queries with human-like precision.",
        icon: "speechBubble"
      },
      {
        title: "Task Automation",
        description: "Automates repetitive tasks like order tracking, appointment scheduling, and data entry.",
        icon: "bot"
      },
      {
        title: "Integration with Business Systems",
        description: "Seamlessly integrates with platforms like CRM, e-commerce, and social media APIs for a unified workflow.",
        icon: "integration"
      },
      {
        title: "Customizable Workflows",
        description: "Allows businesses to create industry-specific workflows tailored to their unique needs.",
        icon: "settings"
      },
      {
        title: "Real-Time Analytics",
        description: "Provides detailed insights and analytics on customer interactions and chatbot performance.",
        icon: "analytics"
      },
      {
        title: "Omnichannel Support",
        description: "Works across multiple platforms, including Instagram, WhatsApp, and websites, for consistent customer experience.",
        icon: "chat"
      }
    ]
  },
  eleqtra: {
    id: "eleqtra",
    title: "Eleqtra",
    year: "2024",
    description: "E-commerce web application",
    imageUrl: "/eleqtra.png",
    longDescription: "Eleqtra is a modern e-commerce web application designed to provide a seamless shopping experience for users. Built with a focus on speed, user-friendly design, and scalability, Eleqtra simplifies the process of managing and browsing product catalogs, processing payments, and tracking orders.",
    websiteUrl: "https://eleqtra.vercel.app",
    tools: ["Javascript", "React", "Tailwind"],
    timeline: "2 Months, August 2024 -- September 2024",
    features: [
      {
        title: "User-Friendly Interface",
        description: "Offers a clean, responsive, and intuitive UI for seamless product browsing and shopping.",
        icon: "shoppingBag"
      },
      {
        title: "Dynamic Product Catalog",
        description: "Displays a customizable and scalable product catalog with filtering and sorting capabilities.",
        icon: "grid"
      },
      {
        title: "Secure Payment Gateway",
        description: "Integrates secure payment gateways for fast and reliable transactions.",
        icon: "creditCard"
      },
      {
        title: "Order Management",
        description: "Allows customers to view order history, track shipments, and manage returns efficiently.",
        icon: "package"
      },
      {
        title: "Mobile Optimization",
        description: "Fully optimized for mobile devices, ensuring a consistent shopping experience across all platforms.",
        icon: "mobile"
      },
      {
        title: "Admin Dashboard",
        description: "Provides business owners with tools to manage inventory, sales, and customer data in real time.",
        icon: "dashboard"
      }
    ]
  },
  bloggit: {
    id: "bloggit",
    title: "Bloggit",
    year: "2024",
    description: "Blog application made with Appwrite",
    imageUrl: "/bloggit.jpg",
    longDescription: "Bloggit is a modern, user-friendly blogging platform built using Appwrite as its backend. It offers a seamless writing experience with features like rich text editing, image uploads, tags, and categories. The application also includes user authentication, and a responsive design for optimal viewing on all devices. Bloggit demonstrates the power and flexibility of Appwrite for creating full-featured web applications.",
    websiteUrl: "https://bloggit-demo.vercel.app",
    tools: ["Javascript", "React", "Appwrite"],
    timeline: "1 Month, May 2024",
    features: [
      {
        title: "Rich Text Editor",
        description: "Enables users to create and format blog posts with an intuitive and feature-rich editor.",
        icon: "pencil"
      },
      {
        title: "Image Uploads",
        description: "Supports adding images to blog posts for visually engaging content.",
        icon: "image"
      },
      {
        title: "Tags and Categories",
        description: "Allows users to organize posts with tags and categories for better discoverability.",
        icon: "tag"
      },
      {
        title: "User Authentication",
        description: "Includes secure user login and registration powered by Appwrite's authentication services.",
        icon: "userLock"
      },
      {
        title: "Comment System",
        description: "Enables readers to leave comments and interact with blog posts.",
        icon: "comment"
      },
      {
        title: "Responsive Design",
        description: "Optimized for all devices, ensuring a great user experience on mobile, tablet, and desktop.",
        icon: "responsive"
      }
    ]
  },
  poppop: {
    id: "poppop",
    title: "PopPop",
    year: "2024",
    description: "Virtual 3D bubble wrap",
    imageUrl: "/poppop.png",
    longDescription: "PopPop is a addictive, lightweight, browser-based application 3D virtual bubble wrap simulator designed to provide stress relief and entertainment. Users can pop endless sheets of virtual 3D bubble wrap with satisfying sound effects and visual feedback.",
    websiteUrl: "https://popppop.vercel.app",
    tools: ["Javascript", "Three.js"],
    timeline: "1 Month, September 2024",
    features: [
      {
        title: "Realistic Bubble Popping",
        description: "Simulates the look, feel, and sound of popping bubble wrap for a satisfying experience.",
        icon: "bubbleChart"
      },
      {
        title: "Customizable Bubble Sheets",
        description: "Offers various bubble sizes, colors, and patterns to match user preferences.",
        icon: "palette"
      },
      {
        title: "Immersive 3D Environment",
        description: "Provides a fully interactive 3D environment to enhance the bubble popping experience.",
        icon: "cube"
      }
    ]
  },
  transact: {
    id: "transact",
    title: "Transact",
    year: "2023",
    description: "Digital payments web application made with Java",
    imageUrl: "/transact.png",
    longDescription: "Transact is a secure and efficient digital payments web application built with Java. It simplifies online transactions by providing a user-friendly interface for sending and receiving money and tracking expenses. Transact also includes features like transaction history tracking and integration with OTT/mobile recharge services.",
    websiteUrl: "https://transact-demo.vercel.app",
    tools: ["Java", "Java Swing"],
    timeline: "2 Months, October 2023 -- November 2023",
    features: [
      {
        title: "Secure Transactions",
        description: "Ensures safe and encrypted payment processes, protecting user data and financial information.",
        icon: "shield"
      },
      {
        title: "Transaction History",
        description: "Provides a comprehensive history of all transactions, making it easy for users to track their spending and balance.",
        icon: "history"
      },
      {
        title: "OTT/Mobile Recharges",
        description: "Supports quick and easy recharges for mobile services and popular OTT platforms, all from within the app.",
        icon: "mobile"
      }
    ]
  },
}

export default async function ProjectPage({ params }) {
  const resolvedParams = await params; 
  const project = projects[resolvedParams.id];

  if (!project) {
    return <div>Project not found</div>;
  }

  return <ProjectDetail {...project} />;
}
