import './globals.css'
import type { Metadata } from 'next'
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import { Props } from "./types"


const baseUrl = 'https://theosis.ai'

const fontSans = GeistSans
const fontMono = GeistMono

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
