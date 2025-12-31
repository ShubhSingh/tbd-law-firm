import type { Metadata } from 'next'
import Script from 'next/script'
import Link from 'next/link'
import { legalServiceJsonLd } from '../lib/schema'
import { FIRM } from '../lib/constants'

export const metadata: Metadata = {
  title: 'Home',
  description: 'TBD Law Firm provides expert legal services in Lucknow. Specializing in civil litigation, criminal defense, family law, property law, and corporate law. Contact us for professional legal representation.',
}

export default function Home() {
  return (
    <>
      <Script id='jsonld' type='application/ld+json'>
        {JSON.stringify(legalServiceJsonLd())}
      </Script>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Expert Legal Services in Lucknow
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            {FIRM.NAME} provides comprehensive legal solutions with expertise in civil, criminal, 
            family, and corporate law. Serving clients with dedication and integrity.
          </p>
          <div className="flex gap-4">
            <Link 
              href="/contact" 
              className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/practice-areas" 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose {FIRM.NAME}?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">⚖️</div>
              <h3 className="text-xl font-semibold mb-3">Experienced Advocates</h3>
              <p className="text-gray-600">
                Our team brings years of courtroom experience and deep knowledge of Indian law.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold mb-3">Client-Focused Approach</h3>
              <p className="text-gray-600">
                We prioritize your needs and work diligently to achieve the best possible outcomes.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🌐</div>
              <h3 className="text-xl font-semibold mb-3">Bilingual Services</h3>
              <p className="text-gray-600">
                We provide legal services in both Hindi and English for clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Practice Areas</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'Civil Litigation', icon: '📋', desc: 'Comprehensive civil dispute resolution' },
              { title: 'Criminal Defense', icon: '🛡️', desc: 'Strong defense representation' },
              { title: 'Family Law', icon: '👨‍👩‍👧', desc: 'Divorce, custody, and family matters' },
              { title: 'Property Law', icon: '🏠', desc: 'Real estate and property disputes' },
              { title: 'Corporate Law', icon: '💼', desc: 'Business formation and compliance' },
              { title: 'Consumer Protection', icon: '🛒', desc: 'Consumer rights advocacy' }
            ].map((area, idx) => (
              <div key={idx} className="border border-gray-200 p-6 rounded-lg hover:shadow-lg transition">
                <div className="text-3xl mb-3">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.desc}</p>
                <Link href="/practice-areas" className="text-blue-600 font-medium hover:underline">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Legal Assistance?</h2>
          <p className="text-xl mb-8">
            Contact us today for a consultation. We're here to help you navigate your legal challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📧</span>
              <a href={`mailto:${FIRM.EMAIL}`} className="hover:underline">{FIRM.EMAIL}</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <a href={`tel:${FIRM.PHONE}`} className="hover:underline">{FIRM.PHONE}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Visit Our Office</h2>
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-xl mb-2">{FIRM.ADDRESS}</p>
            <p className="text-xl mb-4">{FIRM.CITY} - {FIRM.POSTAL}, {FIRM.STATE}</p>
            <p className="text-gray-600">Conveniently located in the heart of Lucknow</p>
          </div>
        </div>
      </section>
    </>
  )
}

// Made with Bob
