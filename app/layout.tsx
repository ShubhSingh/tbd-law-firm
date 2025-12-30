import type { Metadata } from 'next'
import './globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import DisclaimerModal from '../components/DisclaimerModal'
export const metadata:Metadata={title:'TBD Law Firm – Lucknow',description:'Advocates & Legal Consultants serving Hindi and English. No solicitation implied.'}
export default function RootLayout({children}:{children:React.ReactNode}){return(<html lang='en'><body><DisclaimerModal/><Header/><main className='mx-auto max-w-6xl px-4 py-10'>{children}</main><Footer/></body></html>)}
