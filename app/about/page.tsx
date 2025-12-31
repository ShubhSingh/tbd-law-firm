import type { Metadata } from 'next'
import { FIRM } from '../../lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TBD Law Firm - our story, values, and commitment to providing exceptional legal services in Lucknow with integrity and professionalism.',
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
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 mb-4">
              {FIRM.NAME} is a distinguished law firm based in Lucknow, Uttar Pradesh, dedicated to 
              providing comprehensive legal services to individuals and businesses. With a strong foundation 
              built on integrity, expertise, and client satisfaction, we have established ourselves as a 
              trusted name in the legal community.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our firm specializes in various areas of law, offering personalized legal solutions tailored 
              to meet the unique needs of each client. We understand that legal matters can be complex and 
              stressful, which is why we strive to provide clear guidance and strong representation throughout 
              the legal process.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">⚖️</div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-gray-600">
                We uphold the highest ethical standards in all our professional dealings, 
                ensuring honesty and transparency with our clients.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering exceptional legal services through continuous 
                learning and staying updated with legal developments.
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-3">Client Focus</h3>
              <p className="text-gray-600">
                Our clients' interests are at the heart of everything we do. We work diligently 
                to achieve the best possible outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Why Choose {FIRM.NAME}?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Experienced Legal Team</h3>
                <p className="text-gray-600">
                  Our advocates bring years of courtroom experience and deep knowledge of Indian law 
                  across multiple practice areas.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Personalized Approach</h3>
                <p className="text-gray-600">
                  We understand that every case is unique and provide tailored legal strategies 
                  to meet your specific needs.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bilingual Services</h3>
                <p className="text-gray-600">
                  We provide legal services in both Hindi and English, ensuring clear communication 
                  and understanding.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Strong Track Record</h3>
                <p className="text-gray-600">
                  Our successful case outcomes and satisfied clients speak to our commitment 
                  to excellence in legal representation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Transparent Communication</h3>
                <p className="text-gray-600">
                  We keep our clients informed at every stage of their case, ensuring they 
                  understand the legal process and options.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">✓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Accessible Location</h3>
                <p className="text-gray-600">
                  Conveniently located in Lucknow, we are easily accessible to clients 
                  throughout the region.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="mb-16 bg-blue-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Our Commitment to You</h2>
          <p className="text-lg text-gray-700 mb-4">
            At {FIRM.NAME}, we are committed to providing our clients with the highest quality legal 
            representation. We understand that facing legal challenges can be overwhelming, and we are 
            here to guide you through every step of the process.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our approach is built on open communication, thorough preparation, and aggressive advocacy 
            when necessary. We take the time to understand your situation, explain your options clearly, 
            and work tirelessly to achieve the best possible outcome for your case.
          </p>
          <p className="text-lg text-gray-700">
            Whether you are facing a complex legal dispute or need guidance on a straightforward matter, 
            you can trust {FIRM.NAME} to provide the expert legal support you need.
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
