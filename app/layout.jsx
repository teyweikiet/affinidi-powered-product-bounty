// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { ColorSchemeScript, Container } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { Inter } from 'next/font/google'

import './global.css'
import Providers from './providers'
import { Navbar } from '@components/Navbar/Navbar'
import { Footer } from '@components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Doc Appointment App',
  description: 'The doctor appointment app powered by Affinidi'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Container size="65rem" px="s" h="calc(100% - 60px)">
            <Navbar />
            {children}
            <Footer />
          </Container>
          <Notifications />
        </Providers>
      </body>
    </html>
  )
}
