import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for TBD Law Firm. Learn how we collect, use, and protect your personal information in compliance with India\'s DPDP Act, 2023.',
}

export default function Privacy() {
  return (
    <div className="prose max-w-3xl">
      <h1>Privacy Policy</h1>
      <p><em>Last updated: {new Date().toISOString().slice(0,10)}</em></p>

      <h2>Who we are</h2>
      <p>
        We are TBD Law Firm, located at Sapru Marg, Lucknow – 226001, Uttar Pradesh, India.
        We provide general information about our legal practice. This website does not solicit work and is for informational purposes only.
      </p>

      <h2>Personal Data we may collect</h2>
      <ul>
        <li>Identification: name</li>
        <li>Contact: email address, phone number</li>
        <li>Message content you voluntarily submit through our contact form</li>
      </ul>

      <h2>Purpose and legal basis</h2>
      <p>
        We use Personal Data solely to respond to your enquiries and schedule consultations upon request.
        We do not use Personal Data for marketing or profiling. Processing is based on your consent and our legitimate interest in responding to queries.
      </p>

      <h2>Data minimization & retention</h2>
      <p>
        We collect only what is necessary to respond to your enquiry. We retain enquiry records for a limited period needed to address your request and for basic record-keeping,
        unless you request deletion earlier or retention is required by law.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell Personal Data. We may share data only with service providers (e.g., email delivery) strictly to process your enquiry, subject to confidentiality.
      </p>

      <h2>Your rights (India – DPDP Act, 2023)</h2>
      <ul>
        <li>Access: request a copy of your Personal Data processed by us</li>
        <li>Correction: request corrections to inaccurate or incomplete data</li>
        <li>Deletion: request deletion of your data (subject to legal retention requirements)</li>
        <li>Consent withdrawal: withdraw consent where applicable</li>
      </ul>
      <p>
        To exercise these rights, please email <a href="mailto:send2shubham@gmail.com">send2shubham@gmail.com</a> or call <a href="tel:+919673151602">+91 9673151602</a>.
      </p>

      <h2>Cookies & tracking</h2>
      <p>
        This site does not use advertising cookies. Basic operational cookies may be used to remember your disclaimer consent.
      </p>

      <h2>Security</h2>
      <p>
        We use reasonable administrative and technical safeguards appropriate to the nature of information processed. No method of transmission or storage is fully secure.
      </p>

      <h2>International transfers</h2>
      <p>
        We do not intentionally transfer Personal Data outside India. Certain service providers may process data on servers hosted outside India subject to contractual safeguards.
      </p>

      <h2>Updates</h2>
      <p>
        We may update this policy periodically. Material changes will be reflected on this page with a revised date.
      </p>
    </div>
  )
}

// Made with Bob
