import { Card, Image, Text, Button, Group, Rating, Skeleton } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'

import { useFaker } from '@/app/lib/hooks/useFaker'
import { AppointmentForm } from '../Form'
import { useMemo } from 'react'

export function DoctorCard () {
  const { isLoading, faker } = useFaker()
  const [opened, { open, close }] = useDisclosure(false)

  const doctor = useMemo(() => {
    return {
      name: faker.person.fullName().replace(/^.+\. /, ''),
      rating: faker.number.float({ max: 5, fractionDigits: 2 }),
      address: faker.location.streetAddress(),
      image: faker.image.urlLoremFlickr({ category: 'doctor,clinic,hospital,medical' })
    }
  }, [faker])

  return (
    <>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section>
          <Skeleton visible={isLoading}>
            <Image
              src={doctor.image}
              height={160}
              alt="Doctor"
            />
          </Skeleton>
        </Card.Section>

        <Group justify="space-between" mt="md" mb="xs">
          <Skeleton
            width='auto'
            visible={isLoading}
          >
            <Text fw={500}>{`Dr. ${doctor.name}`}</Text>
          </Skeleton>
          <Skeleton
            width='auto'
            visible={isLoading}
          >
            <Rating value={doctor.rating} fractions={4} readOnly />
          </Skeleton>
        </Group>

        <Skeleton
          visible={isLoading}
        >
          <Text size="sm" c="dimmed">
            {doctor.address}
          </Text>
        </Skeleton>

        <Skeleton
          height={34}
          mt="md"
          visible={isLoading}
        >
          <Button
            color="blue"
            fullWidth
            radius="md"
            onClick={open}
          >
            Make an appointment
          </Button>
        </Skeleton>
      </Card>
      <AppointmentForm opened={opened} close={close} doctor={doctor} />
    </>
  )
}
