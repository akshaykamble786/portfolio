import "@/app/globals.css"
import { Footer } from '@/components/footer'
import { Inter } from 'next/font/google'

export const metadata = {
  title: "Akshay Kamble",
  description: "Web developer based in Mumbai",
}

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#111] text-gray-200 min-h-screen flex flex-col">
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
