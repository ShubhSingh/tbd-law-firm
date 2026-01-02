'use client'

import { FIRM } from '../lib/constants'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Team', href: '#team' }
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a 
            href="#home" 
            className={`text-2xl font-bold transition-colors ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}
          >
            {FIRM.NAME}
          </a>
          
          {/* Hamburger Button (All Screen Sizes) */}
          <div className="relative">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${
                scrolled ? 'text-gray-700' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="absolute top-full right-0 mt-2 md:w-[12vw] w-[80vw] bg-white border border-gray-200 shadow-2xl rounded-lg">
                <nav className="px-6 py-4 space-y-1">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium py-3 px-4 rounded-lg transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                  <a
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium py-3 px-4 rounded-lg transition-all"
                  >
                    Contact Us
                  </a>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

// Made with Bob
