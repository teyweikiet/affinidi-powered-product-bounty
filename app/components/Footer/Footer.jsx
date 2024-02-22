import { Container, Text, rem } from '@mantine/core'

export function Footer () {
  return (
    <footer>
      <Container
        mt='xl'
        py="lg"
        styles={{
          root: {
            borderTopWidth: rem(1),
            borderTopStyle: 'solid',
            borderTopColor: 'light-dark(var(--mantine-color-gray-2), var(--mantine-color-dark-4))'
          }
        }}
      >
        <Text c="dimmed" size="sm">
          ©{new Date().getFullYear()} The Doc Appointment App. All rights reserved.
        </Text>
      </Container>
    </footer>
  )
}
