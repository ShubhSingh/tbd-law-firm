'use client'

import { FIRM } from '../lib/constants'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
          
          <nav className="hidden md:flex gap-8">
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Services', href: '#services' },
              { name: 'Team', href: '#team' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-blue-600 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className={`px-6 py-2 rounded-lg font-semibold transition-all ${
              scrolled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-white text-blue-900 hover:bg-blue-50'
            }`}
          >
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}

// Made with Bob
