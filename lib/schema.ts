import { FIRM } from './constants'
export function legalServiceJsonLd(){
  return {
    '@context':'https://schema.org','@type':'LegalService',name:FIRM.NAME,url:process.env.NEXT_PUBLIC_SITE_URL||'https://tbd-law-firm.vercel.app',image:(process.env.NEXT_PUBLIC_SITE_URL||'https://tbd-law-firm.vercel.app')+'/og-image.png',address:{'@type':'PostalAddress',streetAddress:FIRM.ADDRESS,addressLocality:FIRM.CITY,addressRegion:FIRM.STATE,postalCode:FIRM.POSTAL,addressCountry:'IN'},telephone:FIRM.PHONE,areaServed:[{'@type':'AdministrativeArea',name:FIRM.STATE}],openingHours:['Mo-Sa 10:00-18:00']}
}
