'use client'

import { FIRM } from '../../lib/constants'
import { useState } from 'react'

// Note: Metadata cannot be exported from Client Components
// The page title will be set by the parent layout

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our legal team. We're here to help you with your legal matters.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+91 XXXXXXXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Please describe your legal matter..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

              <p className="text-sm text-gray-600">
                * Required fields. Your information will be kept confidential.
              </p>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              {/* Office Address */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      {FIRM.ADDRESS}<br />
                      {FIRM.CITY} - {FIRM.POSTAL}<br />
                      {FIRM.STATE}, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Phone</h3>
                    <a 
                      href={`tel:${FIRM.PHONE}`} 
                      className="text-blue-600 hover:underline text-lg"
                    >
                      {FIRM.PHONE}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Monday - Saturday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Email</h3>
                    <a 
                      href={`mailto:${FIRM.EMAIL}`} 
                      className="text-blue-600 hover:underline text-lg"
                    >
                      {FIRM.EMAIL}
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-lg mb-3">Office Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4447891234567!2d80.9444303!3d26.8534241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd095e2ee0d1%3A0xb72ec63778156c68!2sSapru%20Marg%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h3 className="font-semibold text-lg mb-2">Important Notice</h3>
          <p className="text-gray-700">
            Please note that contacting us through this form does not create an attorney-client relationship. 
            Do not send any confidential information until you have spoken with one of our attorneys and 
            received authorization to send such information.
          </p>
        </div>
      </div>
    </div>
  )
}

// Made with Bob
