'use client'

import { Group, Text } from '@mantine/core'
import { signOut } from 'next-auth/react'
import { IconLogout } from '@tabler/icons-react'

export function LogoutButton ({ withLabel, onClick }) {
  const handleLogout = async () => {
    await signOut()
    onClick && onClick()
  }

  return (
    <Group
      align="flex-center"
      onClick={handleLogout}
      style={{ cursor: 'pointer' }}
    >
      <IconLogout title="logout" />
      { withLabel && (<Text>Logout</Text>) }
    </Group>
  )
}
