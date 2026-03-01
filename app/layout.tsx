import type { Metadata, Viewport } from 'next'
import { VT323, Pixelify_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _vt323 = VT323({ weight: '400', subsets: ['latin'], variable: '--font-vt323' })
const _pixelify = Pixelify_Sans({ subsets: ['latin'], variable: '--font-pixelify' })

export const metadata: Metadata = {
  title: "i'm sorry",
  description: 'A heartfelt apology, 6 years in the making.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#c8a2e8',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_vt323.variable} ${_pixelify.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
