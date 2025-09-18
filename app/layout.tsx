import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'New App',
  description: 'A new Next.js application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  )
}