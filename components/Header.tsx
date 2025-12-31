import Link from 'next/link'
import { FIRM } from '../lib/constants'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-2 text-sm border-b border-gray-200">
          <div className="flex gap-4 text-gray-600">
            <a href={`mailto:${FIRM.EMAIL}`} className="hover:text-blue-600 flex items-center gap-1">
              <span>📧</span>
              {FIRM.EMAIL}
            </a>
            <a href={`tel:${FIRM.PHONE}`} className="hover:text-blue-600 flex items-center gap-1">
              <span>📞</span>
              {FIRM.PHONE}
            </a>
          </div>
          <div className="text-gray-600">
            {FIRM.CITY}, {FIRM.STATE}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-blue-900 hover:text-blue-700 transition">
            {FIRM.NAME}
          </Link>
          
          <nav className="flex gap-6">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              About
            </Link>
            <Link 
              href="/practice-areas" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Practice Areas
            </Link>
            <Link 
              href="/team" 
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              Our Team
            </Link>
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition font-medium"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

// Made with Bob
