// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required


import { Geist, Geist_Mono } from 'next/font/google'
import { Props } from "./types"
import './globals.css'


const mono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['400']
})
const sans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
  weight: ['300']
})

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={mono.variable + ' ' + sans.variable}>
        {children}
      </body>
    </html>
  )
}