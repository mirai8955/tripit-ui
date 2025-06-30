import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'tripit - 旅行計画シェアプラットフォーム',
  description: '世界中のユーザーが旅行計画をシェアし、参考にできるソーシャルプラットフォーム',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 