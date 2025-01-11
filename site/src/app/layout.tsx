import './globals.css'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Props } from "./types"


const baseUrl = 'https://theosis.ai'

const fontMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400']
})
const fontSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['300']
})

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Theosis AI',
    template: '%s | Theosis AI',
  },
  description: 'Exploring the Frontiers of Artificial Intelligence',
  openGraph: {
    title: 'Theosis AI',
    description: 'Exploring the Frontiers of Artificial Intelligence',
    url: baseUrl,
    siteName: 'Theosis AI',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}


export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={fontMono.variable + ' ' + fontSans.variable}>
        {children}
      </body>
    </html>
  )
}