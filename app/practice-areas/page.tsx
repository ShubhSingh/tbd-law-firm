import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Practice Areas',
  description: 'Comprehensive legal services including civil litigation, criminal defense, family law, property law, corporate law, and more. Expert legal representation in Lucknow.',
}

export default function PracticeAreas() {
  const practiceAreas = [
    {
      title: 'Civil Litigation',
      icon: '📋',
      description: 'When you have a legal dispute with another person or organization that doesn\'t involve criminal charges, that\'s civil litigation. We help you resolve conflicts through the court system.',
      detailedInfo: 'Civil cases involve disputes between individuals, businesses, or organizations. Whether someone owes you money, broke a contract, or caused damage to your property, we can help you seek justice and compensation through legal proceedings.',
      services: [
        'Contract Disputes - When agreements are broken',
        'Property Disputes - Land and building conflicts',
        'Tort Claims - Compensation for harm or injury',
        'Injunction Matters - Court orders to stop actions',
        'Civil Appeals - Challenging court decisions',
        'Arbitration & Mediation - Settling disputes outside court'
      ]
    },
    {
      title: 'Criminal Defense',
      icon: '🛡️',
      description: 'If you or a loved one is accused of a crime, you need strong legal defense. We protect your rights and fight for the best possible outcome in criminal cases.',
      detailedInfo: 'Being accused of a crime is serious and scary. Our experienced advocates will stand by your side, explain the charges against you, protect your legal rights, and work to get charges reduced or dismissed. We handle everything from minor offenses to serious criminal charges.',
      services: [
        'Bail Applications - Getting you released from custody',
        'Trial Defense - Representing you in criminal court',
        'Criminal Appeals - Challenging convictions',
        'White Collar Crimes - Fraud and financial crimes',
        'Anticipatory Bail - Protection before arrest',
        'Quashing Petitions - Getting charges dismissed'
      ]
    },
    {
      title: 'Family Law',
      icon: '👨‍👩‍👧',
      description: 'Family matters are personal and emotional. We handle divorce, child custody, maintenance, and other family-related legal issues with sensitivity and care.',
      detailedInfo: 'Family problems are difficult and emotional. Whether you\'re going through a divorce, fighting for custody of your children, or dealing with domestic violence, we understand what you\'re going through. We help families resolve conflicts while protecting everyone\'s interests, especially children.',
      services: [
        'Divorce Proceedings - Legal separation of marriage',
        'Child Custody - Deciding who children live with',
        'Maintenance Claims - Financial support for family',
        'Domestic Violence - Protection from abuse',
        'Adoption - Legal process to adopt a child',
        'Matrimonial Disputes - Marriage-related conflicts'
      ]
    },
    {
      title: 'Property Law',
      icon: '🏠',
      description: 'Buying, selling, or having disputes about property? We help with all real estate matters including land purchases, property disputes, and documentation.',
      detailedInfo: 'Property is often your biggest investment. We make sure your property transactions are legal and safe. If someone is claiming your land, if there are title problems, or if you\'re buying/selling property, we ensure everything is done correctly and your ownership is protected.',
      services: [
        'Property Purchase/Sale - Safe buying and selling',
        'Title Verification - Checking ownership documents',
        'Property Disputes - Resolving land conflicts',
        'Land Acquisition - Government land matters',
        'Lease Agreements - Rental contracts',
        'Property Registration - Legal documentation'
      ]
    },
    {
      title: 'Corporate Law',
      icon: '💼',
      description: 'Starting or running a business? We provide legal support for company formation, contracts, compliance, and all business-related legal matters.',
      detailedInfo: 'Running a business involves many legal requirements. We help entrepreneurs and companies with everything from starting a business, drafting contracts, protecting intellectual property, to handling employee matters. We make sure your business follows all laws and is protected from legal problems.',
      services: [
        'Company Formation - Starting your business legally',
        'Corporate Compliance - Following business laws',
        'Contract Drafting - Creating legal agreements',
        'Mergers & Acquisitions - Buying/selling businesses',
        'Intellectual Property - Protecting your ideas',
        'Employment Law - Employee-related legal matters'
      ]
    },
    {
      title: 'Consumer Protection',
      icon: '🛒',
      description: 'Bought a defective product or received poor service? We help consumers fight for their rights and get compensation for unfair business practices.',
      detailedInfo: 'As a consumer, you have rights. If you bought something that doesn\'t work, received bad service, were cheated by a seller, or faced unfair charges, you can take legal action. We help you file complaints in consumer courts and get refunds, replacements, or compensation.',
      services: [
        'Consumer Complaints - Filing cases for bad products/services',
        'Product Liability - Defective or dangerous products',
        'Service Deficiency - Poor quality services',
        'Unfair Trade Practices - Cheating and fraud',
        'E-commerce Disputes - Online shopping problems',
        'Consumer Forum Representation - Fighting for your rights'
      ]
    },
    {
      title: 'Banking & Finance',
      icon: '🏦',
      description: 'Issues with banks, loans, or financial matters? We handle loan disputes, recovery cases, cheque bounce matters, and other banking-related legal issues.',
      detailedInfo: 'Banking and loan problems can be stressful. Whether the bank is harassing you for loan repayment, someone\'s cheque bounced, or you\'re facing property seizure, we can help. We deal with banks, financial institutions, and debt recovery tribunals to protect your interests.',
      services: [
        'Loan Recovery - Dealing with unpaid loans',
        'Banking Disputes - Problems with banks',
        'SARFAESI Matters - Property seizure by banks',
        'Debt Recovery Tribunal - Loan recovery cases',
        'Cheque Bounce Cases - Dishonored cheque matters',
        'Financial Fraud - Banking fraud and scams'
      ]
    },
    {
      title: 'Labour & Employment',
      icon: '👔',
      description: 'Workplace problems like wrongful termination, unpaid wages, or harassment? We protect employee rights and help resolve employment disputes.',
      detailedInfo: 'If you lost your job unfairly, aren\'t getting paid properly, face harassment at work, or have any employment-related problem, you have legal rights. We help employees fight for fair treatment, proper wages, and safe working conditions. We also help employers with labor law compliance.',
      services: [
        'Wrongful Termination - Unfair job loss',
        'Employment Contracts - Job agreements',
        'Industrial Disputes - Worker-employer conflicts',
        'Labour Court Matters - Employment court cases',
        'Workplace Harassment - Dealing with abuse at work',
        'Wage Disputes - Unpaid or underpaid salaries'
      ]
    },
    {
      title: 'Taxation',
      icon: '💰',
      description: 'Tax problems with GST, income tax, or tax notices? We provide expert advice on tax matters and represent you in tax disputes.',
      detailedInfo: 'Taxes can be confusing and tax problems can be serious. If you received a tax notice, have questions about GST, need help filing returns, or want to challenge a tax assessment, we can help. We make tax matters simple and represent you before tax authorities.',
      services: [
        'GST Compliance - Goods and Services Tax help',
        'Income Tax Returns - Filing your tax returns',
        'Tax Assessments - Dealing with tax calculations',
        'Tax Appeals - Challenging tax orders',
        'Tax Planning - Legal ways to save tax',
        'Tax Litigation - Fighting tax disputes in court'
      ]
    }
  ]

  return (
    <div className="py-12">
      {/* Header */}
      <div className="bg-blue-900 text-white py-16 mb-12">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Practice Areas</h1>
          <p className="text-xl max-w-3xl">
            We provide comprehensive legal services across multiple practice areas. 
            Below you'll find detailed information about each area in simple terms.
          </p>
        </div>
      </div>

      {/* Practice Areas Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="space-y-8">
          {practiceAreas.map((area, idx) => (
            <div 
              key={idx} 
              className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-6">
                <div className="text-6xl flex-shrink-0">{area.icon}</div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold mb-3 text-gray-900">{area.title}</h2>
                  <p className="text-lg text-gray-700 mb-4 font-medium">{area.description}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{area.detailedInfo}</p>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="font-semibold text-lg text-gray-900 mb-4">What We Can Help You With:</h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {area.services.map((service, sidx) => (
                        <div key={sidx} className="flex items-start gap-2">
                          <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't worry! Contact us and we'll help you understand your legal situation 
            and guide you to the right solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Schedule a Free Consultation
            </a>
            <a 
              href="tel:+919673151602" 
              className="inline-block border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition"
            >
              Call Us Now
            </a>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Why Clients Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-semibold mb-2">Clear Communication</h3>
              <p className="text-gray-600 text-sm">
                We explain legal matters in simple language you can understand
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">⚖️</div>
              <h3 className="font-semibold mb-2">Experienced Team</h3>
              <p className="text-gray-600 text-sm">
                Years of experience handling cases like yours
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Client-First Approach</h3>
              <p className="text-gray-600 text-sm">
                Your interests and satisfaction are our top priority
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Made with Bob
