import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'TBD Law Firm – Expert Legal Services in Lucknow',
    template: '%s | TBD Law Firm'
  },
  description: 'Professional legal services in Lucknow, Uttar Pradesh. Expert advocates specializing in civil, criminal, family, property, and corporate law. Bilingual services in Hindi and English.',
  keywords: ['law firm Lucknow', 'advocates Lucknow', 'legal services', 'lawyer Lucknow', 'civil litigation', 'criminal defense', 'family law'],
  authors: [{ name: 'TBD Law Firm' }],
  openGraph: {
    title: 'TBD Law Firm – Expert Legal Services in Lucknow',
    description: 'Professional legal services in Lucknow. Expert advocates in civil, criminal, family, and corporate law.',
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

// Made with Bob
