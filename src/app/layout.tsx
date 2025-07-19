import type { Metadata } from 'next'
import './globals.css'
import { Theme } from '@radix-ui/themes'

export const metadata: Metadata = {
  title: 'Aladdin',
  description: 'Aladdin Frontend'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body>
        <Theme
          accentColor='indigo'
          grayColor='slate'
          panelBackground='translucent'
          hasBackground
          radius='medium'
          scaling='100%'
          className='radix-themes radix-themes-custom-fonts'>
          {children}
        </Theme>
      </body>
    </html>
  )
}
