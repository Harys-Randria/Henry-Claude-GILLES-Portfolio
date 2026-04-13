import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Henry-Claude GILLES | Ingénieur Support IT',
  description: '+8 ans d\'expertise en support IT. Gestion de parc, administration systèmes, continuité de service et support VIP pour les entreprises.',
  keywords: ['Support IT', 'Infrastructure', 'Administrateur Systèmes', 'Gestion de Parc', 'Services IT', 'Freelance'],
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#5896FF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
