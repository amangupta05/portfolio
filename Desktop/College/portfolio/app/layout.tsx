import { Providers } from '@/app/providers'

export const metadata = {
  title: 'Aman Gupta',
  description: 'Aman Gupta Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>  {/* Wrap the entire app in Providers */}
          {children}
        </Providers>
      </body>
    </html>
  )
}
