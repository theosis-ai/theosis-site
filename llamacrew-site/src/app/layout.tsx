// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required


import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Props } from "./types"
import './globals.css'


const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
  weight: ['400']
})
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300']
})

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className={roboto.variable + ' ' + inter.variable}>
        {children}
      </body>
    </html>
  )
}