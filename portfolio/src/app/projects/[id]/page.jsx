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
    timeline : "October 2024 -- February 2025",
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
  sentinel:{
    id: "sentinel",
    title: "Sentinel",
    year: "2025",
    description: "Password Manager extension",
    imageUrl: "/sentinel.png",
    longDescription:"Sentinel is an open-source password manager extension designed to enhance online security and user convenience. It allows users to securely store, manage, and autofill their passwords across various websites. Sentinel emphasizes user privacy and data security, ensuring that sensitive information is encrypted and protected from unauthorized access.",
    tools: ["Express", 'React', 'Node.js', 'Tailwind CSS', 'MongoDB', 'Microsoft Edge API'],
    timeline: "July 2025 -- August 2025",
    features:[
      {
        title: "Secure Password Storage",
        description: "Encrypts and securely stores passwords, ensuring they are protected from unauthorized access.",
        icon: "lock"
      },
      {
        title: "Autofill Functionality",
        description: "Automatically fills in login credentials on websites, streamlining the login process.",
        icon: "auto"
      },
      {
        title:"AES Encryption and Bcrypt Hashing",
        description: "Uses AES encryption for secure password storage and Bcrypt hashing for password security.",
        icon: "shield"
      },
      {
        title:"Password Generation",
        description: "Generates strong, unique passwords for each account to enhance security.",
        icon: "key"
      },
      {
        title: "User-Friendly Interface",
        description: "Intuitive design that makes it easy for users to manage their passwords and settings.",
        icon: "layout"
      },
      {
        title: "Open-Source",
        description: "Community-driven development with transparency and collaboration at its core.",
        icon: "code"
      }
    ]
  },
  "earth-tok": {
    id: "earth-tok",
    title: "Earth-Tok",
    year: "2025",
    description: "Discover the world through a TikTok-like experience",
    imageUrl: "/earth-tok.png",
    longDescription: "Earth-Tok is a web application that combines the addictive nature of TikTok with the thrill of exploration. Users can swipe through a curated feed of random locations from around the globe, each presented with stunning visuals and free-form exploration. The platform encourages discovery and wanderlust, making it easy for users to find their next travel destination or simply enjoy the beauty of our planet.",
    websiteUrl: "https://earth-tok.vercel.app",
    tools: ["TypeScript", 'Next.js', 'React', 'Tailwind CSS', 'Mapbox', 'Bolt'],
    timeline: "February 2025",
    features: [
      {
        title: "Location Discovery",
        description: "Users can swipe through a curated feed of random locations from around the globe.",
        icon: "globe"
      },
      {
        title: "Stunning Visuals",
        description: "Each location is presented with high-quality images and engaging content to inspire wanderlust.",
        icon: "image"
      },
      {
        title: "User Engagement",
        description:"Free-form map navigation similar to Google Earth, enabling smooth directional movement and exploration",
        icon: "compass"
      },
      {
        title: "Social Sharing",
        description: "Users can bookmark and share their favorite locations and experiences on social media platforms.",
        icon: "share"
      }
      
    ]
  },
  bluiprint: {
    id: "bluiprint",
    title: "Bluiprint",
    year: "2025",
    description: "AI-based web development agent",
    imageUrl: "/bluiprint.png",
    longDescription: "Bluiprint is a web application that streamlines the development process for full-stack applications. With its AI-powered features, users can easily prompt the system to generate code snippets, run applications in real-time, edit existing code, and deploy their projects—all from a user-friendly interface. Bluiprint aims to empower developers by providing them with the tools they need to build and iterate on their applications quickly and efficiently.",
    websiteUrl: "https://bluiprint.vercel.app",
    tools: ["JavaScript", 'Next.js', 'React', 'Convex', 'Tailwind CSS', 'Google Gemini'],
    timeline: "January 2025",
    features: [
      {
        title: "AI Code Generation",
        description: "Users can prompt the AI to generate code snippets for various functionalities, speeding up the development process.",
        icon: "code"
      },
      {
        title: "Real-Time Application Running",
        description: "Run applications directly in the browser to test and debug code instantly.",
        icon: "play"
      },
      {
        title: "Code Editing",
        description: "Edit existing code with a powerful code editor that supports syntax highlighting and auto-completion.",
        icon: "edit"
      },
      {
        title: "One-Click Deployment",
        description: "Deploy full-stack applications with a single click, making it easy to share projects with others.",
        icon: "cloudUpload"
      },
      {
        title: "User-Friendly Interface",
        description: "Intuitive design that simplifies the development workflow for both beginners and experienced developers.",
        icon: "layout"
      },
      {
        title: "AI-Powered Debugging",
        description: "Utilizes AI to help identify and fix bugs in the code, enhancing the development experience.",
        icon: "bug"
      }
    ]  
  },
  eleqtra: {
    id: "eleqtra",
    title: "Eleqtra",
    year: "2024",
    description: "E-commerce web application design",
    imageUrl: "/eleqtra.png",
    longDescription: "Eleqtra is a modern, fully responsive e-commerce frontend learning project, focused on delivering an exceptional user experience and high performance. Built with the latest web technologies, Eleqtra emphasizes scalability, maintainability, and best practices in contemporary frontend development.",
    websiteUrl: "https://eleqtra.vercel.app",
    tools: ["Javascript", "React", "Tailwind CSS"],
    timeline: "August 2024 -- September 2024",
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
        title: "Order Management",
        description: "Allows customers to view order history, track shipments, and manage returns efficiently.",
        icon: "package"
      },
      {
        title: "Mobile Optimization",
        description: "Fully optimized for mobile devices, ensuring a consistent shopping experience across all platforms.",
        icon: "mobile"
      },
    ]
  },
  bloggit: {
    id: "bloggit",
    title: "Bloggit",
    year: "2024",
    description: "Blog application made with Appwrite",
    imageUrl: "/bloggit.jpg",
    longDescription: "Bloggit is a modern, user-friendly blogging platform built using Appwrite as its backend. It offers a seamless writing experience with features like rich text editing, image uploads, tags, and categories. The application also includes user authentication, and a responsive design for optimal viewing on all devices. Bloggit demonstrates the power and flexibility of Appwrite for creating full-featured web applications.",
    tools: ["Javascript", "React", "Appwrite"],
    timeline: "May 2024",
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
    timeline: "September 2024",
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
    longDescription: "Transact is a learning platform for digital payments. It offers a comprehensive curriculum covering various aspects of digital transactions, including security, user experience, and integration with existing financial systems. The platform is designed to help users understand the complexities of digital payments and how to implement them effectively in real-world applications.",
    tools: ["Java", "Java Swing"],
    timeline: "October 2023 -- November 2023",
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
