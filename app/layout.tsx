import type { Metadata } from 'next'
import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Fairworks Legal & Professional Advisors – Trusted Advice. Fair Outcomes.',
    template: '%s | Fairworks Legal & Professional Advisors'
  },
  description: 'With 75+ years of cumulative experience, Fairworks provides practical, transparent, and fair legal and investment advisory services in Lucknow. Integrated approach for individuals and businesses.',
  keywords: ['law firm Lucknow', 'legal advisors', 'investment advisory', 'financial advisory', 'legal services Lucknow', 'professional advisors', 'Fairworks'],
  authors: [{ name: 'Fairworks Legal & Professional Advisors' }],
  openGraph: {
    title: 'Fairworks Legal & Professional Advisors – Trusted Advice. Fair Outcomes.',
    description: 'With 75+ years of experience, providing integrated legal and investment advisory services in Lucknow with a client-first approach.',
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
