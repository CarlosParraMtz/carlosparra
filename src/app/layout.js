import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Carlos Parra | Personal Portfolio',
  description: 'Explore the creative talent of Carlos Parra through his personal portfolio. Discover a variety of innovative projects and experiences that showcase his skill and passion for design and programming. Immerse yourself in the unique world of Carlos Parra now!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
