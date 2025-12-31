import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Team',
  description: 'Meet our experienced team of legal professionals. Skilled advocates with expertise in civil, criminal, family, and corporate law serving clients in Lucknow.',
}

export default function Team() {
  const teamMembers = [
    {
      name: 'Senior Advocate',
      role: 'Managing Partner',
      specialization: 'Civil & Criminal Litigation',
      experience: '15+ Years',
      image: '👨‍⚖️',
      description: 'Extensive experience in handling complex civil and criminal cases with a strong track record of successful outcomes.'
    },
    {
      name: 'Associate Advocate',
      role: 'Partner',
      specialization: 'Corporate & Commercial Law',
      experience: '10+ Years',
      image: '👩‍⚖️',
      description: 'Specializes in corporate law, mergers & acquisitions, and commercial dispute resolution.'
    },
    {
      name: 'Junior Advocate',
      role: 'Associate',
      specialization: 'Family & Property Law',
      experience: '5+ Years',
      image: '👨‍💼',
      description: 'Focuses on family law matters and property disputes with a compassionate approach to client service.'
    }
  ]

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Legal Team</h1>
          <p className="text-xl max-w-3xl">
            Meet our experienced team of legal professionals dedicated to providing 
            exceptional legal services and achieving the best outcomes for our clients.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Team Introduction */}
        <section className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Experienced Legal Professionals</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Our team comprises skilled advocates with diverse expertise across multiple practice areas. 
            We are committed to providing personalized legal solutions and maintaining the highest 
            standards of professional excellence.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 text-center">
                  <div className="text-8xl mb-4">{member.image}</div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-100">{member.role}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Specialization</div>
                    <div className="text-gray-900">{member.specialization}</div>
                  </div>
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-500 mb-1">Experience</div>
                    <div className="text-gray-900">{member.experience}</div>
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifications */}
        <section className="mb-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Qualifications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">🎓</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Licensed Advocates</h3>
                <p className="text-gray-600">
                  All our advocates are registered with the Bar Council and licensed to practice 
                  in courts across India.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⚖️</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Courtroom Experience</h3>
                <p className="text-gray-600">
                  Extensive experience representing clients in District Courts, High Courts, 
                  and various tribunals.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">🌐</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Bilingual Expertise</h3>
                <p className="text-gray-600">
                  Fluent in both Hindi and English, ensuring clear communication with all clients 
                  and effective court representation.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📚</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Continuous Learning</h3>
                <p className="text-gray-600">
                  Committed to staying updated with latest legal developments through regular 
                  training and professional development.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach to Client Service</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-5xl mb-4">👂</div>
              <h3 className="text-xl font-bold mb-3">Listen</h3>
              <p className="text-gray-600">
                We take time to understand your situation, concerns, and objectives before 
                developing a legal strategy.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">💡</div>
              <h3 className="text-xl font-bold mb-3">Advise</h3>
              <p className="text-gray-600">
                We provide clear, honest legal advice and explain your options in terms 
                you can understand.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3">Act</h3>
              <p className="text-gray-600">
                We take decisive action to protect your interests and work diligently 
                toward achieving your goals.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-blue-900 text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">Work With Our Team</h2>
          <p className="text-xl mb-8">
            Schedule a consultation to discuss your legal matter with our experienced advocates.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us Today
          </a>
        </section>
      </div>
    </div>
  )
}

// Made with Bob
