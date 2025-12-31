import { FIRM } from '../lib/constants'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{FIRM.NAME}</h3>
            <p className="text-sm mb-4">
              Professional legal services in Lucknow with dedication, integrity, and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-white transition">Home</a></li>
              <li><a href="#about" className="hover:text-white transition">About</a></li>
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#team" className="hover:text-white transition">Team</a></li>
              <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Civil Litigation</li>
              <li>Criminal Defense</li>
              <li>Family Law</li>
              <li>Property Law</li>
              <li>Corporate Law</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>{FIRM.ADDRESS}, {FIRM.CITY} - {FIRM.POSTAL}</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📧</span>
                <a href={`mailto:${FIRM.EMAIL}`} className="hover:text-white transition">
                  {FIRM.EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span>📞</span>
                <a href={`tel:${FIRM.PHONE}`} className="hover:text-white transition">
                  {FIRM.PHONE}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p className="mb-2">© {new Date().getFullYear()} {FIRM.NAME}. All rights reserved.</p>
          <p className="text-xs text-gray-500">
            Disclaimer: This website is for informational purposes only. No attorney-client relationship is created.
          </p>
        </div>
      </div>
    </footer>
  )
}

// Made with Bob
