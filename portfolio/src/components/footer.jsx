import { format } from 'date-fns'

export function Footer() {
  const currentDate = new Date()
  const formattedDate = format(currentDate, 'MMMM d, yyyy')

  return (
    <footer className="border-t border-gray-800 bg-[#111] text-gray-400 py-4 mt-16">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-sm">Akshay Kamble</div>
        <div className="text-sm">Last Updated: {formattedDate}</div>
      </div>
    </footer>
  )
}