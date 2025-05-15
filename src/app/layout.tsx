import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import Navbar from './components/Navbar'
import '../styles/fonts.scss'
import '../styles/globals.scss'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kenya Creates — A Storytelling Initiative',
  description:
    'Kenya Creates is reimagining how Kenyan youth talk about their bodies and health through storytelling.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main className="pt-[72px]">{/* reserve space for fixed navbar */}
          {children}
        </main>
      </body>
    </html>
  )
}
