import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from '@/app/Providers'
import './globals.css'
import Header from '@/scaffold/Header'
import Footer from '@/scaffold/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | TEDxVeritasUni',
    default: 'TEDxVeritasUni',
  },
  description: 'TEDxVeritasUni Landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Providers>
          <Header />
          <main className='xl:container mx-auto'>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
