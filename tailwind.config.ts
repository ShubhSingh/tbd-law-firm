import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],
  theme: { extend: { colors: { brand: { DEFAULT:'#0B5FFF', dark:'#0A4FD8'} } } },
  plugins: [require('@tailwindcss/typography')]
}
export default config
