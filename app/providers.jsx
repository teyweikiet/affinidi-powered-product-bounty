'use client'

import { useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { DatesProvider } from '@mantine/dates'

export default function Providers ({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 60 * 1000
          }
        }
      })
  )

  return (
    <MantineProvider defaultColorScheme="dark">
      <QueryClientProvider client={queryClient}>
        <DatesProvider>
          {children}
        </DatesProvider>
      </QueryClientProvider>
    </MantineProvider>
  )
}
