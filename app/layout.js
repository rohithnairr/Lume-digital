import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lume Digital Limited',
  description: 'We help to enhance businesses',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <body className='bg-black'>{children}</body>
    </html>
  )
}
