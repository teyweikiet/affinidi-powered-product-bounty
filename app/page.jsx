'use client'

import { Container, SimpleGrid, Title } from '@mantine/core'
import { DoctorCard } from './components/Cards'
import { Hero } from '@components/Hero'
import { useAuthentication } from './lib/hooks/useAuthentication'
import { notifications } from '@mantine/notifications'
import { useEffect, useState } from 'react'
import { IconBulb } from '@tabler/icons-react'

export default function Home () {
  const { user, userId, isFetchedAfterMount } = useAuthentication()
  const [loginNotificationId, setLoginNotificationId] = useState()

  useEffect(() => {
    if (userId) {
      notifications.hide('login-prompt')
      setLoginNotificationId()
    } else if (isFetchedAfterMount && !loginNotificationId) {
      setLoginNotificationId('login-prompt')
      notifications.show({
        id: 'login-prompt',
        color: 'yellow',
        icon: <IconBulb />,
        title: 'Login now!',
        message: 'Please login for better recommendations & smoother booking experience.',
        autoClose: false
      })
    }
  }, [userId, isFetchedAfterMount])

  return (
    <main>
      <Hero />
      <Container id="doctor-listing">
        <Title mb="lg">
          Our Doctors
          {user?.locality || user?.country ? ` from ${user.locality ?? user.country}` : ''}
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2 }}>
          {Array.from({ length: 6 }).map((_, index) => (
            <DoctorCard key={index} />
          ))}
        </SimpleGrid>
      </Container>
    </main>
  )
}
