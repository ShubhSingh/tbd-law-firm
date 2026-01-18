import type { Metadata } from 'next'
import { FIRM } from '../../lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Fairworks Legal & Professional Advisors - our story, values, and commitment to providing exceptional legal and investment advisory services with 75+ years of cumulative experience.',
}

export default function About() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About {FIRM.NAME}</h1>
          <p className="text-xl max-w-3xl">
            Committed to excellence in legal services with integrity, professionalism, and dedication.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">About Us</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              With a vast cumulative experience of approximately 75 years, Fairworks Legal & Professional Advisors is engaged in
              providing legal and investment advisory services.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We believe that advice should be practical, transparent, and fair. Our firm combines its deep expertise with a client-first approach,
              ensuring every engagement is handled with diligence, discretion, and purpose.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Whether advising on complex legal issues or offering strategic professional guidance, we focus
              on delivering solutions that protect your interests and support long-term success.
            </p>
            <p className="text-lg text-gray-700 mb-4 italic font-medium text-blue-900">
              "Navigating through a complex and evolving environment, Fairworks provides affordable legal and financial
              advisory services to individuals and businesses, with a clear focus on inclusive and collective growth."
            </p>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                Aim to establish ourselves as a trusted partner in the legal and financial domains by
                providing ethical, client-focused solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To deliver practical, customized and cost-effective solutions that always put our
                client's best interests first.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values - PAVRD Philosophy */}
        <section className="mb-16 bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Values: The PAVRD Philosophy</h2>
          <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
            At {FIRM.NAME}, our services are designed around the customer, driven by the PAVRD philosophy.
            Our aim is to deliver exceptional experiences through deep Personalization and unwavering Authenticity.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">👤</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Personalization</h3>
              <p className="text-gray-600">
                We don't believe in one-size-fits-all. We listen first so that we can tailor our
                approach to every individual or business.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Authenticity</h3>
              <p className="text-gray-600">
                We show up as our true selves. We are honest, transparent, and accountable for what we do.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Value</h3>
              <p className="text-gray-600">
                Every interaction must leave the customer better off. If it doesn't add value, we don't do it.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Responsiveness</h3>
              <p className="text-gray-600">
                Speed is a sign of respect. We act with urgency to ensure our customers never feel ignored.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Delight</h3>
              <p className="text-gray-600">
                We aim for the "wow" factor. We look for opportunities to exceed expectations and create lasting memories.
              </p>
            </div>
          </div>
        </section>

        {/* Why Partner With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Partner With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl text-blue-600">✓</div>
              <div>
                <p className="text-lg text-gray-700">
                  Strong understanding of the legal and financial systems
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-600">✓</div>
              <div>
                <p className="text-lg text-gray-700">
                  Integrated advisory approach under one roof
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-600">✓</div>
              <div>
                <p className="text-lg text-gray-700">
                  Tailored solutions aligned with client objectives
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-600">✓</div>
              <div>
                <p className="text-lg text-gray-700">
                  Proven experience across domains and verticals
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-600">✓</div>
              <div>
                <p className="text-lg text-gray-700">
                  Professional, ethical, and transparent service delivery
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl text-blue-600">✓</div>
              <div>
                <p className="text-lg text-gray-700">
                  Confidential, responsive, and reliable support
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-lg text-gray-700 mb-4">
            At {FIRM.NAME}, we are committed to providing practical, transparent, and fair advice.
            Our firm combines deep expertise with a client-first approach, ensuring every engagement
            is handled with diligence, discretion, and purpose.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We focus on delivering solutions that protect your interests and support long-term success.
            Whether advising on complex legal issues or offering strategic professional guidance, we
            provide affordable services with a clear focus on inclusive and collective growth.
          </p>
          <p className="text-lg text-gray-700">
            With 75+ years of cumulative experience, you can trust {FIRM.NAME} to be your reliable
            partner in navigating the complex legal and financial landscape.
          </p>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-gray-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Contact us today to schedule a consultation and discuss your legal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Contact Us
            </a>
            <a 
              href={`tel:${FIRM.PHONE}`} 
              className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition"
            >
              Call Now
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
