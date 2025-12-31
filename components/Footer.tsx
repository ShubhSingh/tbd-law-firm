import Link from 'next/link'
import { FIRM } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{FIRM.NAME}</h3>
            <p className="text-sm mb-4">
              Providing expert legal services in Lucknow with dedication, integrity, and professionalism.
            </p>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-white transition">📘</a>
              <a href="#" className="text-gray-400 hover:text-white transition">🐦</a>
              <a href="#" className="text-gray-400 hover:text-white transition">💼</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition">Practice Areas</Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition">Our Team</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Practice Areas</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/practice-areas" className="hover:text-white transition">Civil Litigation</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition">Criminal Defense</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition">Family Law</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition">Property Law</Link>
              </li>
              <li>
                <Link href="/practice-areas" className="hover:text-white transition">Corporate Law</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">📍</span>
                <span>{FIRM.ADDRESS}, {FIRM.CITY} - {FIRM.POSTAL}, {FIRM.STATE}</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">📧</span>
                <a href={`mailto:${FIRM.EMAIL}`} className="hover:text-white transition">
                  {FIRM.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-blue-400">📞</span>
                <a href={`tel:${FIRM.PHONE}`} className="hover:text-white transition">
                  {FIRM.PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>© {new Date().getFullYear()} {FIRM.NAME}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <span>|</span>
            <span>Terms of Service</span>
            <span>|</span>
            <span>Disclaimer</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>
            Disclaimer: This website is for informational purposes only and does not constitute legal advice. 
            No attorney-client relationship is created by viewing this website or contacting us through it.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Made with Bob
