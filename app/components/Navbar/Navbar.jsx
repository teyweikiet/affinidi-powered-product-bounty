'use client'

import Link from 'next/link'

import { Group, Burger, Title, Drawer, Center, Text, Avatar } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { IconStethoscope } from '@tabler/icons-react'

import classes from './Navbar.module.css'
import { LogoutButton, LoginButton } from '@components/Auth'
import { useAuthentication } from '@lib/hooks/useAuthentication'

export function Navbar () {
  const { user } = useAuthentication()
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false)

  return (
    <>
      <header className={classes.header}>
        <Group justify="space-between" sx={{ height: '100%' }}>
          <Group>
            <Link href="/">
              <Group>
                <IconStethoscope size={30} title="The Doc Appointment App" />
                <Title
                  size={{ base: 'md', sm: 'xl' }}
                  className="no-underline"
                >
                  The Doc Appointment App
                </Title>
              </Group>
            </Link>
          </Group>

          <Group display={{ base: 'none', sm: 'flex' }}>
            {user && (
              <>
                <Text style={{ cursor: 'initial' }}>{user.givenName ?? user.lastName}</Text>
                <Avatar
                  title={[user.givenName, user.familyName].join(' ')}
                  src={user.picture}
                  alt='user profile picture'
                />
              </>
            )}
            {user ? <LogoutButton /> : <LoginButton /> }
          </Group>

          <Group display={{ sm: 'none' }}>
            <Burger opened={drawerOpened} onClick={toggleDrawer} />
          </Group>
        </Group>
      </header>
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          zIndex={1000000}
          position="right"
          display={{ sm: 'none' }}
        >
          {user && (
            <Center m="sm">
              <Avatar
                title={[user.givenName, user.familyName].join(' ')}
                src={user.picture}
                alt='user profile picture'
              />
              <Text ml="md">{user.givenName ?? user.lastName}</Text>
            </Center>
          )}
          <Center m="sm">
            {user ? <LogoutButton withLabel onClick={closeDrawer}/> : <LoginButton />}
          </Center>
        </Drawer>
    </>
  )
}
