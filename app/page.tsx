'use client'

import Script from 'next/script'
import Link from 'next/link'
import { legalServiceJsonLd } from '../lib/schema'
import { FIRM } from '../lib/constants'
import { useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  return (
    <>
      <Script id='jsonld' type='application/ld+json'>
        {JSON.stringify(legalServiceJsonLd())}
      </Script>

      {/* Hero Section - Full Screen */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-3 md:mb-6 animate-fade-in">
            {FIRM.NAME}
          </h1>
          <p className="text-xl md:text-3xl mb-4 md:mb-6 text-blue-200 font-semibold">
            {FIRM.TAGLINE}
          </p>
          <p className="text-base md:text-xl mb-6 md:mb-8 text-gray-300 max-w-3xl mx-auto">
            With 75+ years of cumulative experience, we provide practical, transparent, and fair
            legal and investment advisory services. Navigating complex environments with affordable
            solutions focused on inclusive and collective growth.
          </p>
          
          {/* Quick Services Overview - Hidden on mobile */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mb-12 text-sm">
            <a
              href="#service-civil"
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              Civil Litigation
            </a>
            <a
              href="#service-criminal"
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              Criminal Defense
            </a>
            <a
              href="#service-family"
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              Family Law
            </a>
            <a
              href="#service-property"
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              Property Law
            </a>
            <a
              href="#service-corporate"
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              Corporate Law
            </a>
            <a
              href="#service-consumer"
              className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 hover:scale-105 transition-all cursor-pointer"
            >
              Consumer Protection
            </a>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
            >
              Get Legal Help
            </a>
            <a
              href="#services"
              className="hidden sm:block border-2 border-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all transform hover:scale-105"
            >
              Our Services
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator - Hidden on mobile, visible on desktop */}
        <div className="hidden md:block absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white text-4xl hover:text-blue-200 transition">↓</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Fairworks</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Main About Content */}
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 md:p-12 mb-12 shadow-lg">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-800 leading-relaxed">
                With a vast cumulative experience of approximately <span className="font-bold text-blue-900">75 years</span>, Fairworks Legal & Professional Advisors is engaged in
                providing legal and investment advisory services.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe that advice should be <span className="font-semibold text-blue-800">practical, transparent, and fair</span>. Our firm combines its deep expertise with a client-first approach,
                ensuring every engagement is handled with diligence, discretion, and purpose.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether advising on complex legal issues or offering strategic professional guidance, we focus
                on delivering solutions that protect your interests and support long-term success.
              </p>
              <div className="bg-blue-900 text-white p-6 rounded-lg mt-8">
                <p className="text-lg italic leading-relaxed">
                  "Navigating through a complex and evolving environment, Fairworks provides affordable legal and financial
                  advisory services to individuals and businesses, with a clear focus on inclusive and collective growth."
                </p>
              </div>
            </div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Vision</h3>
              <p className="text-gray-700 text-lg">
                Aim to establish ourselves as a trusted partner in the legal and financial domains by
                providing ethical, client-focused solutions
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-lg p-8 border-l-4 border-blue-600">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mission</h3>
              <p className="text-gray-700 text-lg">
                To deliver practical, customized and cost-effective solutions that always put our
                client's best interests first
              </p>
            </div>
          </div>

          {/* Why Partner With Us */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold mb-8 text-center">Why Partner With Fairworks</h3>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <div className="text-3xl text-blue-600">✓</div>
                <p className="text-lg text-gray-700">
                  Strong understanding of the legal and financial systems
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-blue-600">✓</div>
                <p className="text-lg text-gray-700">
                  Integrated advisory approach under one roof
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-blue-600">✓</div>
                <p className="text-lg text-gray-700">
                  Tailored solutions aligned with client objectives
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-blue-600">✓</div>
                <p className="text-lg text-gray-700">
                  Proven experience across domains and verticals
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-blue-600">✓</div>
                <p className="text-lg text-gray-700">
                  Professional, ethical, and transparent service delivery
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-3xl text-blue-600">✓</div>
                <p className="text-lg text-gray-700">
                  Confidential, responsive, and reliable support
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Fairworks Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive legal services across multiple practice areas
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Civil Litigation',
                icon: '📋',
                desc: 'When you have a legal dispute with another person or business that doesn\'t involve criminal charges.',
                explain: 'If someone owes you money, broke a contract with you, or caused damage to your property, we can help you take legal action to get compensation or resolve the issue through court.',
                items: ['When someone breaks an agreement', 'Property boundary disputes', 'Getting compensation for damages']
              },
              {
                title: 'Criminal Defense',
                icon: '🛡️',
                desc: 'If you or a loved one is accused of a crime, you need someone to protect your rights.',
                explain: 'Being accused of a crime is serious. We stand by your side, explain what\'s happening, protect your legal rights, and work to get the best possible outcome - whether that\'s getting charges dropped, reduced, or winning your case.',
                items: ['Getting bail to stay out of jail', 'Defending you in criminal court', 'Challenging unfair convictions']
              },
              {
                title: 'Family Law',
                icon: '👨‍👩‍👧',
                desc: 'Family problems are personal and emotional. We handle them with care and sensitivity.',
                explain: 'Whether you\'re going through a divorce, fighting for custody of your children, need financial support from your spouse, or facing domestic violence, we help families resolve conflicts while protecting everyone\'s interests.',
                items: ['Ending a marriage legally', 'Deciding who children live with', 'Getting financial support']
              },
              {
                title: 'Property Law',
                icon: '🏠',
                desc: 'Buying, selling, or having problems with land or buildings? We make sure everything is legal and safe.',
                explain: 'Property is often your biggest investment. We help you buy or sell property safely, check if ownership documents are genuine, resolve disputes with neighbors or family over land, and protect your property rights.',
                items: ['Safe buying and selling', 'Checking ownership papers', 'Solving land conflicts']
              },
              {
                title: 'Corporate Law',
                icon: '💼',
                desc: 'Starting or running a business? We help with all the legal requirements.',
                explain: 'Running a business involves many legal rules. We help you start your business properly, create legal contracts, follow government regulations, protect your business ideas, and handle employee-related legal matters.',
                items: ['Starting your business legally', 'Creating business agreements', 'Following business laws']
              },
              {
                title: 'Consumer Protection',
                icon: '🛒',
                desc: 'Bought something that doesn\'t work or got cheated? You have rights as a consumer.',
                explain: 'If you bought a defective product, received poor service, were overcharged, or faced fraud from a seller, you can take legal action. We help you file complaints and get refunds, replacements, or compensation.',
                items: ['Defective products', 'Poor quality services', 'Getting refunds or compensation']
              }
            ].map((service, idx) => (
              <div
                key={idx}
                id={`service-${['civil', 'criminal', 'family', 'property', 'corporate', 'consumer'][idx]}`}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 scroll-mt-24"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-700 mb-3 font-medium">{service.desc}</p>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.explain}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">WE HELP WITH:</p>
                  <ul className="space-y-2">
                    {service.items.map((item, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <span className="text-blue-600 mr-2 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAVRD Philosophy Section */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Fairworks Values: The PAVRD Philosophy</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          {/* Introduction */}
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-8 md:p-12 mb-12">
            <p className="text-xl text-gray-800 leading-relaxed mb-6 text-center max-w-4xl mx-auto">
              At {FIRM.NAME}, our services are designed around the customer, driven by the <span className="font-bold text-blue-900">PAVRD philosophy</span>. 
              Our aim is to deliver exceptional experiences through deep Personalization and unwavering Authenticity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              We believe in providing tangible Value in every solution we deliver, staying Responsive to the needs of our community, 
              and consistently going above and beyond to Delight those we serve.
            </p>
          </div>

          {/* PAVRD Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Personalization */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Personalization</h3>
              <p className="text-gray-700 leading-relaxed">
                We don't believe in one-size-fits-all. We listen first so that we can tailor our
                approach to every individual or business.
              </p>
            </div>

            {/* Authenticity */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">✨</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Authenticity</h3>
              <p className="text-gray-700 leading-relaxed">
                We show up as our true selves. We are honest, transparent, and accountable for what we do.
              </p>
            </div>

            {/* Value */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">💎</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Value</h3>
              <p className="text-gray-700 leading-relaxed">
                Every interaction must leave the customer better off. If it doesn't add value, we don't do it.
              </p>
            </div>

            {/* Responsiveness */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Responsiveness</h3>
              <p className="text-gray-700 leading-relaxed">
                Speed is a sign of respect. We act with urgency to ensure our customers never feel ignored.
              </p>
            </div>

            {/* Delight */}
            <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="text-6xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold mb-4 text-blue-900">Delight</h3>
              <p className="text-gray-700 leading-relaxed">
                We aim for the "wow" factor. We look for opportunities to exceed expectations and create lasting memories.
              </p>
            </div>
          </div>
        </div>
          {/* Why the PAVRD Philosophy Works */}
          <div className="mt-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg p-8 md:p-12 text-white">
            <h3 className="text-3xl font-bold mb-8 text-center">Why the PAVRD Philosophy Works</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h4 className="text-xl font-bold mb-3">From Transactional to Relational</h4>
                <p className="text-blue-100">
                  Building lasting relationships beyond single transactions
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h4 className="text-xl font-bold mb-3">Increased Trust</h4>
                <p className="text-blue-100">
                  Earning confidence through consistent, authentic service
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">💙</div>
                <h4 className="text-xl font-bold mb-3">Greater Loyalty</h4>
                <p className="text-blue-100">
                  Creating devoted clients who return and refer others
                </p>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">📢</div>
                <h4 className="text-xl font-bold mb-3">Long-Term Advocacy</h4>
                <p className="text-blue-100">
                  Transforming clients into passionate advocates for our services
                </p>
              </div>
            </div>
          </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Fairworks Team</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced legal professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Senior Advocate', role: 'Managing Partner', exp: '15+ Years', icon: '👨‍⚖️' },
              { name: 'Associate Advocate', role: 'Partner', exp: '10+ Years', icon: '👩‍⚖️' },
              { name: 'Junior Advocate', role: 'Associate', exp: '5+ Years', icon: '👨‍💼' }
            ].map((member, idx) => (
              <div key={idx} className="text-center group">
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-12 rounded-lg mb-4 transform group-hover:scale-105 transition-transform">
                  <div className="text-8xl mb-4">{member.icon}</div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
                <p className="text-gray-600 font-semibold">{member.exp} Experience</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 md:text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch With Fairworks</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Contact us today for professional legal assistance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              {submitted && (
                <div className="bg-green-500/20 border border-green-500 text-white px-4 py-3 rounded-lg mb-6">
                  Thank you! We'll get back to you soon.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="your.email@example.com (optional)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:ring-2 focus:ring-white focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell us about your legal matter..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Office Address</h3>
                  <p className="text-blue-200">
                    {FIRM.ADDRESS}<br />
                    {FIRM.CITY} - {FIRM.POSTAL}<br />
                    {FIRM.STATE}, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-4xl">📞</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Phone</h3>
                  <a href={`tel:${FIRM.PHONE}`} className="text-blue-200 hover:text-white text-lg">
                    {FIRM.PHONE}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="text-4xl">📧</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Email</h3>
                  <a href={`mailto:${FIRM.EMAIL}`} className="text-blue-200 hover:text-white text-lg">
                    {FIRM.EMAIL}
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-2xl h-[300px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.4447891234567!2d80.9444303!3d26.8534241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd095e2ee0d1%3A0xb72ec63778156c68!2sSapru%20Marg%2C%20Lucknow%2C%20Uttar%20Pradesh%20226001!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// Made with Bob
