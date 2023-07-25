import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from './navbar'

export const metadata = {
  title: 'Hydra',
  description: 'Made by Sayranbekov Yerkanat',
}

const montserrat = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-montserrat"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`bg-violet px-4 xl:mx-20 py-14 ${montserrat.variable} font-montserrat scroll-smooth `}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
