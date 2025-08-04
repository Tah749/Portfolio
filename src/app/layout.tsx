import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Developer Portfolio',
  description: 'Personal portfolio showcasing web development projects',
  authors: [{ name: 'Your Name' }],
  keywords: ['developer', 'portfolio', 'web development', 'React', 'Node.js'],
  openGraph: {
    title: 'Your Name - Developer Portfolio',
    description: 'Personal portfolio showcasing web development projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
